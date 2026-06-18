# Event Page Design — کارگاه وایب کدینگ ۲۸ خرداد

## Overview

یه صفحه اختصاصی برای ایونت‌های برگزارشده. اولین نمونه: کارگاه وایب کدینگ ۲۸ خرداد ۱۴۰۴. صفحه هم برای بازدیدکنندگان عمومی قابل مشاهده‌ست و هم برای شرکت‌کنندگان تأییدشده که میتونن پروفایل و نظر ثبت کنن.

---

## Route

```
/workshop/vibe-coding-28khordad
```

---

## Auth Architecture

**جریان اول ورود:**
1. کاربر شماره موبایل وارد میکنه
2. Apps Script چک میکنه شماره توی whitelist هست یا نه
3. اگه بود و رمز نداشت → فرم ساخت رمز نشون داده میشه
4. رمز با SHA-256 hash میشه و توی Sheet ذخیره میشه

**جریان ورودهای بعدی:**
1. شماره + رمز وارد میشه
2. Apps Script hash رو مقایسه میکنه
3. موفق → یه session token ساده (phone + timestamp + secret) برمیگرده
4. Token در localStorage ذخیره میشه

**محدودیت امنیتی شناخته‌شده:** SHA-256 برای رمز (نه bcrypt) — قابل قبول برای این مقیاس. SMS OTP در آینده اضافه میشه.

**Whitelist:** Sheet «Whitelist» توی Google Sheets — مدیریت مستقیم از همون Sheet. Apps Script این Sheet رو چک میکنه.

---

## Google Sheets Structure

**Sheet: Whitelist**
| phone | name |
|-------|------|
| 09121234567 | علی محمدی |

**Sheet: Users**
| phone | name | password_hash | linkedin | specialty | bio | created_at |
|-------|------|---------------|----------|-----------|-----|------------|

**Sheet: Comments**
| phone | name | text | timestamp |
|-------|------|------|-----------|

**Sheet: Followup**
| phone | name | text | timestamp |
|-------|------|------|-----------|

**Sheet: Agenda** (مدیریت توسط ادمین)
| time | topic | description |
|------|-------|-------------|

---

## Apps Script Endpoints

همه‌ی endpoint‌ها از طریق یه Web App URL با پارامتر `action` کار میکنن:

| action | method | ورودی | خروجی |
|--------|--------|-------|-------|
| `checkPhone` | POST | `phone` | `{exists, isNew, name}` |
| `setPassword` | POST | `phone, password_hash` | `{success, token}` |
| `login` | POST | `phone, password_hash` | `{success, token, name}` |
| `getAttendees` | GET | — | `[{name, linkedin, specialty}]` |
| `updateProfile` | POST | `token, linkedin, specialty, bio` | `{success}` |
| `getComments` | GET | — | `[{name, text, timestamp}]` |
| `addComment` | POST | `token, text` | `{success}` |
| `addFollowup` | POST | `token, text` | `{success}` |

Token ساختار: `sha256(phone + timestamp + SECRET_KEY)` — در Apps Script اعتبارسنجی میشه.

---

## Page Sections

### ۱. Sticky Nav
منوی ثابت بالای صفحه با لینک‌های anchor به هر بخش + دکمه «ورود / پروفایل من».

### ۲. Hero
- نام ایونت: «کارگاه وایب کدینگ»
- تاریخ: ۲۸ خرداد ۱۴۰۴
- آمار: تعداد شرکت‌کننده، تعداد سرفصل، مدت زمان

### ۳. ویدیو (id: `video`)
iframe آپارات. لینک توی یه config ثابت توی فایل صفحه.

### ۴. سرفصل‌ها (id: `agenda`)
تایم‌لاین عمودی. داده‌ها از یه آرایه ثابت توی `config.ts` — ادمین دستی وارد میکنه قبل از دیپلوی.

### ۵. شرکت‌کنندگان (id: `attendees`)
- Grid کارت‌ها
- هر کارت: نام، تخصص، لینک LinkedIn (فیلدهای اختیاری — کارت نمایش داده میشه حتی اگه پر نشده باشن)
- دکمه «ثبت اطلاعات من» برای کاربر لاگین‌کرده که پروفایل نداره
- کاربر لاگین‌کرده میتونه پروفایل خودشو ویرایش کنه

### ۶. نظرات (id: `comments`)
- نمایش عمومی نظرات موجود
- فرم ثبت نظر فقط برای کاربر لاگین‌کرده

### ۷. پیگیری یک‌ماهه (id: `followup`)
- تا ۲۸ تیر ۱۴۰۴ قفله (UI نشون میده «باز میشه — ۲۸ تیر»)
- بعد از تاریخ: فرم برای پاسخ به «چه نتیجه‌ای گرفتی؟»
- نمایش پاسخ‌های دیگران

---

## Login Modal

یه modal overlay که از هر جای صفحه با دکمه ورود باز میشه:

**Step 1 — Phone Entry:**
فیلد شماره موبایل + دکمه «بررسی»

**Step 2a — New User (Create Password):**
«خوش آمدی، [نام]! یه رمز برای خودت بساز»  
فیلد رمز + تأیید رمز

**Step 2b — Existing User (Enter Password):**
«خوش آمدی، [نام]!»  
فیلد رمز

**Error States:**
- شماره توی whitelist نیست: «این شماره در لیست شرکت‌کنندگان نیست»
- رمز اشتباه: «رمز اشتباه است»

---

## Component Structure

```
app/workshop/vibe-coding-28khordad/
├── page.tsx                  # صفحه اصلی
├── config.ts                 # اطلاعات ایونت، لینک آپارات، تاریخ unlock
├── components/
│   ├── EventNav.tsx
│   ├── EventHero.tsx
│   ├── VideoSection.tsx
│   ├── AgendaSection.tsx
│   ├── AttendeesSection.tsx
│   ├── AttendeeCard.tsx
│   ├── CommentsSection.tsx
│   ├── FollowUpSection.tsx
│   └── LoginModal.tsx
├── hooks/
│   └── useAuth.ts            # مدیریت session و API calls
└── lib/
    └── appsScript.ts         # wrapper برای Apps Script endpoints
```

---

## Google Apps Script

فایل جدید در `google-apps-script/event-auth.gs` — Web App جداگانه از اسکریپت فعلی سایت.

---

## Static vs Dynamic Data

| داده | منبع |
|------|------|
| نام، تاریخ، لینک ویدیو | `config.ts` (ثابت) |
| سرفصل‌ها | `config.ts` (ثابت) |
| شرکت‌کنندگان | Apps Script (dynamic) |
| نظرات | Apps Script (dynamic) |
| پیگیری | Apps Script (dynamic) |

---

## Out of Scope

- SMS OTP (بعداً اضافه میشه)
- پنل ادمین (مدیریت مستقیم از Google Sheets)
- سیستم اعلان ایمیل
- پشتیبانی از چند ایونت مختلف (فعلاً فقط این یکی)
