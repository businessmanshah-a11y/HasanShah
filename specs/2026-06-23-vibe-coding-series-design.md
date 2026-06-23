# Vibe Coding Series — Design Spec
**تاریخ:** ۲۰۲۶-۰۶-۲۳  
**موضوع:** سری آموزش‌های کامل در بخش Vibe Coding

---

## هدف

ایجاد یک سیستم «سری آموزشی» در سایت hasanshah.ir که هر سری یک پروژه‌ی واقعی رو از ابتدا تا انتها پوشش می‌ده. مخاطب هدف از اینستاگرام/لینکدین می‌آد، کل مسیر رو می‌بینه، یاد می‌گیره، و می‌فهمه Vibe Coding یعنی چی.

اولین سری: «از پیام داداشم تا سیستم فاکتور کامل» — داستان ساخت یک فاکتورساز در یک شب با Claude Code + Google Sheets + Apps Script.

---

## ساختار URL

```
/vibe-coding/series/                    ← صفحه لیست
/vibe-coding/series/[slug]/             ← صفحه داستان هر سری
/vibe-coding/series/faktor-dadash/      ← اولین سری
```

---

## معماری — رویکرد Data-Driven + Rich Sections

هر سری در یک فایل TypeScript تعریف می‌شه. یک template واحد همه رو رندر می‌کنه. بدون CMS، بدون MDX.

### فایل‌های جدید

```
app/vibe-coding/series/
├── page.tsx                    ← صفحه لیست
├── series-data.ts              ← تعریف همه سری‌ها
└── [slug]/
    └── page.tsx                ← صفحه داستان (dynamic)

app/components/
├── SeriesCard.tsx              ← کارت هر سری در لیست
└── SeriesTimeline.tsx          ← کامپوننت تایم‌لاین داستانی
```

---

## صفحه لیست — /vibe-coding/series/

### لی‌اوت
- Hero section: عنوان «سری‌های آموزشی کامل» + توضیح کوتاه
- Grid کارت‌ها (2 ستون در دسکتاپ، 1 ستون در موبایل)

### کارت هر سری (SeriesCard)
- **عکس کاور** (تصویر AI-generated با ChatGPT)
- **تگ موضوع** (مثلاً «فاکتورساز») + **مدت** (مثلاً «۷ ساعت»)
- **شماره سری** (سری ۰۱)
- **عنوان** + **خلاصه یک‌خطی**
- **ابزارهای استفاده‌شده** (Claude · Sheets · Apps Script)

---

## صفحه داستان — /vibe-coding/series/[slug]/

### لی‌اوت: Single Scroll (همه زیر هم)

ترتیب سکشن‌ها:

1. **Hero**  
   - breadcrumb: سری‌های آموزشی → سری ۰۱  
   - عنوان، تاریخ، مدت، ابزارها  
   - عکس کاور

2. **پلیر صوتی**  
   - فایل MP3/M4A از روایت صوتی داستان  
   - عنوان: «اگه وقت نداری بخونی، گوش بده»

3. **تایم‌لاین داستانی** (قلب صفحه)  
   هر مرحله شامل:
   - **timestamp** (مثلاً ۲۰:۰۰) با خط عمودی اتصال به مرحله بعد
   - **عنوان مرحله**
   - **متن داستان** (روایی، اول‌شخص)
   - **مدیای inline** (عکس، اسکرین‌شات، باکس پرامپت، یا video player) — دقیقاً مرتبط با همان لحظه
   - **باکس «🧠 درس این لحظه»** — زمینه طلایی تیره، درس آموزشی اون لحظه

4. **درس‌های کلی** (زیر تایم‌لاین)  
   لیست takeaway های کل سری با bullet طلایی

---

## داده‌ساختار TypeScript

```typescript
type SeriesMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string }
  | { type: 'prompt'; content: string }

type TimelineStep = {
  time: string           // مثلاً "۲۰:۰۰"
  title: string
  story: string          // متن داستانی
  media?: SeriesMedia[]  // یک یا چند مدیا (عکس / ویدیو / پرامپت) — مرحله آخر می‌تونه هم ویدیو هم عکس داشته باشه
  lesson: string         // درس این لحظه
  isEnd?: boolean        // آخرین مرحله → نشانگر سبز ✅
}

type Series = {
  slug: string
  number: string         // "۰۱"
  tag: string            // "فاکتورساز"
  title: string
  summary: string
  date: string           // "۲۳ خرداد ۱۴۰۵"
  duration: string       // "۷ ساعت"
  tools: string[]        // ["Claude Code", "Google Sheets", "Apps Script"]
  coverImage: string
  audioSrc?: string
  steps: TimelineStep[]
  takeaways: string[]
}
```

---

## ذخیره‌سازی فایل‌های مدیا

```
public/
└── series/
    └── faktor-dadash/
        ├── cover.webp          ← عکس کاور
        ├── audio.mp3           ← روایت صوتی
        ├── demo.mp4            ← screen recording
        └── images/
            ├── whatsapp.jpg    ← پیام واتساپ داداشم
            ├── vahid.jpg       ← عکس با وحید خاتمی
            └── invoice.jpg     ← اسکرین‌شات فاکتور نهایی
```

مقادیر `src` در SeriesMedia با `/series/faktor-dadash/...` شروع می‌شن (مسیر نسبی از `public/`).

---

## محتوای اولین سری — faktor-dadash

### متادیتا
- slug: `faktor-dadash`
- عنوان: «از پیام داداشم تا سیستم فاکتور کامل»
- تاریخ: ۲۳ خرداد ۱۴۰۵
- مدت: ۷ ساعت (۲۰:۰۰ تا ۰۳:۰۰)
- ابزارها: Claude Code · Google Sheets · Apps Script

### مدیا موجود
- عکس‌های موجود در `docs/داستان-فاکتور-داداشم/` (۷ فایل)
- عکس کاور: AI-generated با ChatGPT (پرامپت رو من می‌نویسم)
- روایت صوتی: فایل MP3/M4A که حسن ضبط می‌کنه
- Screen recording: از فاکتورساز در حال کار
- پرامپت اولیه به Claude

### مراحل تایم‌لاین (۴ مرحله)
1. **۲۰:۰۰** — پیام داداشم + اسکرین‌شات واتساپ
2. **۲۱:۰۰** — پرامپت اولیه به Claude + باکس کد
3. **۰۰:۰۰** — چالش‌ها پیش وحید خاتمی + عکس
4. **۰۳:۰۰ ✅** — سیستم آنلاین + screen recording + اسکرین‌شات نهایی

---

## i18n

صفحات سری فقط فارسی (locale: fa). لینک از `/vibe-coding` فارسی داده می‌شه.  
ساختار i18n موجود سایت دست نمی‌خوره.

## سئو

هر صفحه‌ی داستان metadata جداگانه داره (title، description، og:image از coverImage).

---

## محتوایی که حسن باید تهیه کنه (قبل از پیاده‌سازی)

- [ ] ضبط روایت صوتی (MP3 یا M4A)
- [ ] Screen recording از فاکتورساز
- [ ] پرامپت اولیه‌ای که به Claude داده شد
- [ ] متن داستان هر مرحله (می‌تونیم از همین مکالمه استخراج کنیم)
- [ ] درس هر مرحله (می‌تونیم با هم بنویسیم)
- [ ] عکس کاور (با پرامپت ChatGPT که من می‌نویسم)
