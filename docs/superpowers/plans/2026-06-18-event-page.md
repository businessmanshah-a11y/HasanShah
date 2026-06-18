# Event Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ساختن صفحه `/workshop/vibe-coding-28khordad` — صفحه اختصاصی کارگاه وایب‌کدینگ ۲۸ خرداد با نمایش عمومی، ورود شرکت‌کنندگان با شماره+رمز، پروفایل، نظرات و بخش پیگیری یک‌ماهه.

**Architecture:** سایت استاتیک Next.js روی GitHub Pages. همه داده‌های دینامیک (شرکت‌کنندگان، نظرات) از یه Google Apps Script Web App که به Google Sheets وصله میاد. Auth با شماره موبایل (whitelist) + رمز (SHA-256 in browser، توکن session در Apps Script).

**Tech Stack:** Next.js 15 (static export), TypeScript, Tailwind CSS (Peyda font, RTL), Google Apps Script Web App, Google Sheets, Web Crypto API (SHA-256)

---

## File Map

```
app/workshop/vibe-coding-28khordad/
├── page.tsx                          # Server: metadata + shell
├── config.ts                         # Event data, agenda array, SCRIPT_URL
├── lib/
│   └── appsScript.ts                 # Typed wrappers for all Apps Script calls
├── hooks/
│   └── useAuth.ts                    # Session state (localStorage), login/logout
└── components/
    ├── EventPageContent.tsx           # "use client" root, composes all sections
    ├── EventNav.tsx                   # Sticky nav with anchor links + login button
    ├── EventHero.tsx                  # Stats banner (attendee count, topics, hours)
    ├── VideoSection.tsx               # Aparat iframe embed
    ├── AgendaSection.tsx              # Timeline from config
    ├── AttendeesSection.tsx           # Grid + "add my info" button
    ├── AttendeeCard.tsx               # Single attendee card
    ├── ProfileEditModal.tsx           # Edit own LinkedIn/specialty/bio
    ├── LoginModal.tsx                 # Phone → check → create/enter password
    ├── CommentsSection.tsx            # Show comments + add comment (auth required)
    └── FollowUpSection.tsx            # Locked until 28 Tir; then open form + responses

google-apps-script/
└── event-auth.gs                     # New Apps Script (NOT tracked in git — deploy manually)
```

---

## Task 1: Google Apps Script Backend

**Files:**
- Create: `google-apps-script/event-auth.gs`

این فایل باید مستقیم توی Google Apps Script IDE کپی و دیپلوی بشه (به‌عنوان Web App، دسترسی: "Anyone").

- [ ] **Step 1: بساز Google Sheet جدید با این Sheet‌ها:**

  - **Whitelist** (ستون‌ها: `phone`, `name`)
  - **Users** (ستون‌ها: `phone`, `name`, `password_hash`, `linkedin`, `specialty`, `bio`, `created_at`)
  - **Sessions** (ستون‌ها: `phone`, `token`, `expires_at`)
  - **Comments** (ستون‌ها: `phone`, `name`, `text`, `timestamp`)
  - **Followup** (ستون‌ها: `phone`, `name`, `text`, `timestamp`)

  چند ردیف نمونه توی Whitelist اضافه کن (شماره‌های واقعی شرکت‌کنندگان).

- [ ] **Step 2: فایل `google-apps-script/event-auth.gs` رو بساز:**

```javascript
// event-auth.gs — Vibe Coding Event Auth & Data
// Deploy as Web App: Execute as "Me", Access: "Anyone"

const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE"; // جایگزین کن

function getSheet(name) {
  return SpreadsheetApp.openById(SHEET_ID).getSheetByName(name);
}

function sheetToObjects(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  const headers = data[0];
  return data.slice(1).map(row =>
    Object.fromEntries(headers.map((h, i) => [h, row[i]]))
  );
}

function hexDigest(input) {
  const bytes = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    input,
    Utilities.Charset.UTF_8
  );
  return bytes.map(b => ('0' + (b & 0xff).toString(16)).slice(-2)).join('');
}

// ── Handlers ──────────────────────────────────────────────────────────

function checkPhone(phone) {
  const whitelist = sheetToObjects(getSheet("Whitelist"));
  const entry = whitelist.find(r => r.phone === phone);
  if (!entry) return { exists: false };
  const users = sheetToObjects(getSheet("Users"));
  const user = users.find(r => r.phone === phone);
  return { exists: true, isNew: !user, name: entry.name };
}

function setPassword(phone, passwordHash) {
  const whitelist = sheetToObjects(getSheet("Whitelist"));
  const entry = whitelist.find(r => r.phone === phone);
  if (!entry) return { success: false, error: "not_in_whitelist" };
  const usersSheet = getSheet("Users");
  const users = sheetToObjects(usersSheet);
  if (users.find(r => r.phone === phone)) return { success: false, error: "already_registered" };
  usersSheet.appendRow([phone, entry.name, passwordHash, "", "", "", new Date().toISOString()]);
  return login(phone, passwordHash);
}

function login(phone, passwordHash) {
  const users = sheetToObjects(getSheet("Users"));
  const user = users.find(r => r.phone === phone);
  if (!user) return { success: false, error: "not_registered" };
  if (user.password_hash !== passwordHash) return { success: false, error: "wrong_password" };
  const token = Utilities.getUuid();
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  getSheet("Sessions").appendRow([phone, token, expires]);
  return { success: true, token, name: user.name };
}

function verifyToken(phone, token) {
  const sessions = sheetToObjects(getSheet("Sessions"));
  const session = sessions.find(r => r.phone === phone && r.token === token);
  if (!session) return false;
  return new Date(session.expires_at) > new Date();
}

function getAttendees() {
  const users = sheetToObjects(getSheet("Users"));
  return users.map(u => ({
    name: u.name,
    linkedin: u.linkedin || "",
    specialty: u.specialty || "",
    bio: u.bio || "",
  }));
}

function updateProfile(phone, token, linkedin, specialty, bio) {
  if (!verifyToken(phone, token)) return { success: false, error: "unauthorized" };
  const sheet = getSheet("Users");
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const phoneCol = headers.indexOf("phone");
  const linkedinCol = headers.indexOf("linkedin");
  const specialtyCol = headers.indexOf("specialty");
  const bioCol = headers.indexOf("bio");
  for (let i = 1; i < data.length; i++) {
    if (data[i][phoneCol] === phone) {
      sheet.getRange(i + 1, linkedinCol + 1).setValue(linkedin);
      sheet.getRange(i + 1, specialtyCol + 1).setValue(specialty);
      sheet.getRange(i + 1, bioCol + 1).setValue(bio);
      return { success: true };
    }
  }
  return { success: false, error: "user_not_found" };
}

function getComments() {
  return sheetToObjects(getSheet("Comments")).map(c => ({
    name: c.name,
    text: c.text,
    timestamp: c.timestamp,
  }));
}

function addComment(phone, token, text) {
  if (!verifyToken(phone, token)) return { success: false, error: "unauthorized" };
  const users = sheetToObjects(getSheet("Users"));
  const user = users.find(r => r.phone === phone);
  if (!user) return { success: false, error: "user_not_found" };
  getSheet("Comments").appendRow([phone, user.name, text, new Date().toISOString()]);
  return { success: true };
}

function getFollowup() {
  return sheetToObjects(getSheet("Followup")).map(f => ({
    name: f.name,
    text: f.text,
    timestamp: f.timestamp,
  }));
}

function addFollowup(phone, token, text) {
  if (!verifyToken(phone, token)) return { success: false, error: "unauthorized" };
  const users = sheetToObjects(getSheet("Users"));
  const user = users.find(r => r.phone === phone);
  if (!user) return { success: false, error: "user_not_found" };
  getSheet("Followup").appendRow([phone, user.name, text, new Date().toISOString()]);
  return { success: true };
}

// ── Entry Point ───────────────────────────────────────────────────────

function doPost(e) {
  const cors = ContentService.createTextOutput();
  cors.setMimeType(ContentService.MimeType.JSON);
  try {
    const body = JSON.parse(e.postData.contents);
    const { action } = body;
    let result;
    if (action === "checkPhone") result = checkPhone(body.phone);
    else if (action === "setPassword") result = setPassword(body.phone, body.password_hash);
    else if (action === "login") result = login(body.phone, body.password_hash);
    else if (action === "getAttendees") result = getAttendees();
    else if (action === "updateProfile") result = updateProfile(body.phone, body.token, body.linkedin, body.specialty, body.bio);
    else if (action === "addComment") result = addComment(body.phone, body.token, body.text);
    else if (action === "addFollowup") result = addFollowup(body.phone, body.token, body.text);
    else result = { error: "unknown_action" };
    cors.setContent(JSON.stringify(result));
  } catch (err) {
    cors.setContent(JSON.stringify({ error: err.toString() }));
  }
  return cors;
}

function doGet(e) {
  const action = e.parameter.action;
  let result;
  if (action === "getAttendees") result = getAttendees();
  else if (action === "getComments") result = getComments();
  else if (action === "getFollowup") result = getFollowup();
  else result = { error: "unknown_action" };
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
```

- [ ] **Step 3: Apps Script رو دیپلوی کن**

  در Google Apps Script IDE:
  1. Deploy → New deployment → Web App
  2. Execute as: **Me**
  3. Who has access: **Anyone**
  4. کپی کن Web App URL رو — توی Task 2 لازم میشه

- [ ] **Step 4: تست دستی دیپلوی**

  از مرورگر باز کن:
  ```
  https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec?action=getAttendees
  ```
  باید برگرده: `[]`

- [ ] **Step 5: Commit**

  ```bash
  # این فایل gitignore شده — فقط commit میکنیم که تغییرات دیگه‌ای نداشتیم
  git add -A
  git commit -m "chore: add event-auth Apps Script (deployed separately)"
  ```

---

## Task 2: Config + Apps Script Client Lib

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/config.ts`
- Create: `app/workshop/vibe-coding-28khordad/lib/appsScript.ts`

- [ ] **Step 1: بساز `config.ts`**

```typescript
// app/workshop/vibe-coding-28khordad/config.ts

export const EVENT = {
  title: "کارگاه وایب‌کدینگ",
  titleEn: "Vibe Coding Workshop",
  date: "۲۸ خرداد ۱۴۰۴",
  location: "تهران",
  durationHours: 3,
  attendeeCount: 24,
  topicCount: 6,
  aparatEmbedUrl: "https://www.aparat.com/video/YOUR_VIDEO_ID",
  // تاریخ باز شدن بخش پیگیری — ۲۸ تیر ۱۴۰۴ = 2025-07-19
  followupUnlockDate: new Date("2025-07-19"),
};

export const AGENDA: { time: string; topic: string }[] = [
  { time: "۱۴:۰۰", topic: "معرفی وایب‌کدینگ و هوش مصنوعی" },
  { time: "۱۴:۴۵", topic: "دمو زنده: ساخت لندینگ در ۳۰ دقیقه" },
  { time: "۱۵:۳۰", topic: "ابزارها: Cursor، Claude، Codex" },
  { time: "۱۵:۵۵", topic: "پرامپت‌نویسی برای ساخت محصول" },
  { time: "۱۶:۳۰", topic: "نمایش پروژه‌های شرکت‌کنندگان" },
  { time: "۱۷:۰۰", topic: "پرسش و پاسخ آزاد" },
];

// بعد از دیپلوی Apps Script، این رو آپدیت کن
export const SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";
```

- [ ] **Step 2: متغیر محیطی اضافه کن به `.env.local`**

  فایل `.env.local` رو باز کن (یا بساز) و اضافه کن:
  ```
  NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
  ```

- [ ] **Step 3: بساز `lib/appsScript.ts`**

```typescript
// app/workshop/vibe-coding-28khordad/lib/appsScript.ts
import { SCRIPT_URL } from "../config";

export interface Attendee {
  name: string;
  linkedin: string;
  specialty: string;
  bio: string;
}

export interface Comment {
  name: string;
  text: string;
  timestamp: string;
}

export interface FollowupEntry {
  name: string;
  text: string;
  timestamp: string;
}

async function post<T>(body: Record<string, unknown>): Promise<T> {
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data as T;
}

async function get<T>(action: string): Promise<T> {
  const res = await fetch(`${SCRIPT_URL}?action=${action}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function checkPhone(phone: string) {
  return post<{ exists: boolean; isNew?: boolean; name?: string }>({
    action: "checkPhone",
    phone,
  });
}

export async function setPassword(phone: string, password: string) {
  const password_hash = await hashPassword(password);
  return post<{ success: boolean; token?: string; name?: string; error?: string }>({
    action: "setPassword",
    phone,
    password_hash,
  });
}

export async function login(phone: string, password: string) {
  const password_hash = await hashPassword(password);
  return post<{ success: boolean; token?: string; name?: string; error?: string }>({
    action: "login",
    phone,
    password_hash,
  });
}

export async function getAttendees(): Promise<Attendee[]> {
  return get<Attendee[]>("getAttendees");
}

export async function updateProfile(
  phone: string,
  token: string,
  linkedin: string,
  specialty: string,
  bio: string
) {
  return post<{ success: boolean; error?: string }>({
    action: "updateProfile",
    phone,
    token,
    linkedin,
    specialty,
    bio,
  });
}

export async function getComments(): Promise<Comment[]> {
  return get<Comment[]>("getComments");
}

export async function addComment(phone: string, token: string, text: string) {
  return post<{ success: boolean; error?: string }>({
    action: "addComment",
    phone,
    token,
    text,
  });
}

export async function getFollowup(): Promise<FollowupEntry[]> {
  return get<FollowupEntry[]>("getFollowup");
}

export async function addFollowup(phone: string, token: string, text: string) {
  return post<{ success: boolean; error?: string }>({
    action: "addFollowup",
    phone,
    token,
    text,
  });
}
```

- [ ] **Step 4: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/config.ts app/workshop/vibe-coding-28khordad/lib/appsScript.ts
  git commit -m "feat: add event config and Apps Script client lib"
  ```

---

## Task 3: useAuth Hook

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/hooks/useAuth.ts`

- [ ] **Step 1: بساز `hooks/useAuth.ts`**

```typescript
// app/workshop/vibe-coding-28khordad/hooks/useAuth.ts
"use client";
import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "event_session_28khordad";

interface Session {
  phone: string;
  token: string;
  name: string;
}

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSession(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    }
    setReady(true);
  }, []);

  const saveSession = useCallback((s: Session) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    setSession(s);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setSession(null);
  }, []);

  return { session, ready, saveSession, logout };
}
```

- [ ] **Step 2: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/hooks/useAuth.ts
  git commit -m "feat: add useAuth hook for event session management"
  ```

---

## Task 4: LoginModal

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/components/LoginModal.tsx`

- [ ] **Step 1: بساز `LoginModal.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/LoginModal.tsx
"use client";
import { useState } from "react";
import { X, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { checkPhone, login, setPassword } from "../lib/appsScript";

type Step = "phone" | "new-password" | "existing-password";

interface Props {
  onClose: () => void;
  onSuccess: (phone: string, token: string, name: string) => void;
}

export default function LoginModal({ onClose, onSuccess }: Props) {
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePhoneSubmit() {
    setError("");
    const normalized = phone.replace(/\s/g, "");
    if (!/^09\d{9}$/.test(normalized)) {
      setError("شماره موبایل معتبر وارد کنید (مثال: 09121234567)");
      return;
    }
    setLoading(true);
    try {
      const res = await checkPhone(normalized);
      if (!res.exists) {
        setError("این شماره در لیست شرکت‌کنندگان نیست");
        return;
      }
      setPhone(normalized);
      setName(res.name ?? "");
      setStep(res.isNew ? "new-password" : "existing-password");
    } catch {
      setError("خطا در اتصال. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  async function handleNewPassword() {
    setError("");
    if (password.length < 6) { setError("رمز باید حداقل ۶ کاراکتر باشد"); return; }
    if (password !== confirmPassword) { setError("رمزها با هم مطابقت ندارند"); return; }
    setLoading(true);
    try {
      const res = await setPassword(phone, password);
      if (!res.success || !res.token) { setError("خطا در ثبت رمز. دوباره تلاش کنید."); return; }
      onSuccess(phone, res.token, res.name ?? name);
      onClose();
    } catch {
      setError("خطا در اتصال. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin() {
    setError("");
    if (!password) { setError("رمز را وارد کنید"); return; }
    setLoading(true);
    try {
      const res = await login(phone, password);
      if (!res.success || !res.token) {
        setError(res.error === "wrong_password" ? "رمز اشتباه است" : "خطا در ورود");
        return;
      }
      onSuccess(phone, res.token, res.name ?? name);
      onClose();
    } catch {
      setError("خطا در اتصال. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-sm rounded-2xl border border-gold/20 bg-surface shadow-elegant p-6" dir="rtl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">
            {step === "phone" && "ورود شرکت‌کنندگان"}
            {step === "new-password" && `خوش آمدی، ${name}!`}
            {step === "existing-password" && `خوش آمدی، ${name}!`}
          </h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === "phone" && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">شماره موبایلی که در کارگاه ثبت کردی رو وارد کن</p>
            <div className="relative">
              <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handlePhoneSubmit()}
                placeholder="09121234567"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 pr-10 text-sm outline-none focus:border-gold/50 transition"
                dir="ltr"
              />
            </div>
            {error && <p className="text-destructive text-xs">{error}</p>}
            <button
              onClick={handlePhoneSubmit}
              disabled={loading}
              className="w-full rounded-xl bg-gradient-gold px-4 py-3 text-sm font-bold text-gold-foreground disabled:opacity-50 transition hover:-translate-y-0.5"
            >
              {loading ? "در حال بررسی..." : "بررسی شماره"}
            </button>
          </div>
        )}

        {step === "new-password" && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">یه رمز برای خودت بساز</p>
            <PasswordField value={password} onChange={setPassword} show={showPassword} onToggle={() => setShowPassword(!showPassword)} placeholder="رمز (حداقل ۶ کاراکتر)" />
            <PasswordField value={confirmPassword} onChange={setConfirmPassword} show={showPassword} onToggle={() => setShowPassword(!showPassword)} placeholder="تکرار رمز" onEnter={handleNewPassword} />
            {error && <p className="text-destructive text-xs">{error}</p>}
            <button onClick={handleNewPassword} disabled={loading} className="w-full rounded-xl bg-gradient-gold px-4 py-3 text-sm font-bold text-gold-foreground disabled:opacity-50 transition hover:-translate-y-0.5">
              {loading ? "در حال ثبت..." : "ساخت رمز و ورود"}
            </button>
          </div>
        )}

        {step === "existing-password" && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">رمزت رو وارد کن</p>
            <PasswordField value={password} onChange={setPassword} show={showPassword} onToggle={() => setShowPassword(!showPassword)} placeholder="رمز عبور" onEnter={handleLogin} />
            {error && <p className="text-destructive text-xs">{error}</p>}
            <button onClick={handleLogin} disabled={loading} className="w-full rounded-xl bg-gradient-gold px-4 py-3 text-sm font-bold text-gold-foreground disabled:opacity-50 transition hover:-translate-y-0.5">
              {loading ? "در حال ورود..." : "ورود"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function PasswordField({ value, onChange, show, onToggle, placeholder, onEnter }: {
  value: string; onChange: (v: string) => void; show: boolean;
  onToggle: () => void; placeholder: string; onEnter?: () => void;
}) {
  return (
    <div className="relative">
      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 pr-10 pl-10 text-sm outline-none focus:border-gold/50 transition"
        dir="ltr"
      />
      <button type="button" onClick={onToggle} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/components/LoginModal.tsx
  git commit -m "feat: add login modal for event attendee auth"
  ```

---

## Task 5: EventNav + EventHero

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/components/EventNav.tsx`
- Create: `app/workshop/vibe-coding-28khordad/components/EventHero.tsx`

- [ ] **Step 1: بساز `EventNav.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/EventNav.tsx
"use client";
import { LogIn, LogOut, User } from "lucide-react";

interface Props {
  userName: string | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

const NAV_LINKS = [
  { href: "#video", label: "🎥 ویدیو" },
  { href: "#agenda", label: "📋 سرفصل" },
  { href: "#attendees", label: "👥 شرکت‌کنندگان" },
  { href: "#comments", label: "💬 نظرات" },
  { href: "#followup", label: "📊 پیگیری" },
];

export default function EventNav({ userName, onLoginClick, onLogout }: Props) {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gold/10 bg-background/80 backdrop-blur-md" dir="rtl">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-4 overflow-x-auto">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 text-xs text-muted-foreground hover:text-gold transition">
              {link.label}
            </a>
          ))}
        </div>
        {userName ? (
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1 text-xs text-gold">
              <User className="w-3.5 h-3.5" />
              {userName}
            </span>
            <button onClick={onLogout} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition">
              <LogOut className="w-3.5 h-3.5" />
              خروج
            </button>
          </div>
        ) : (
          <button onClick={onLoginClick} className="shrink-0 flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-bold text-gold-foreground transition hover:-translate-y-0.5">
            <LogIn className="w-3.5 h-3.5" />
            ورود
          </button>
        )}
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: بساز `EventHero.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/EventHero.tsx
import { EVENT } from "../config";

export default function EventHero() {
  return (
    <section className="py-16 md:py-24" dir="rtl">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
          {EVENT.date} · {EVENT.location}
        </div>
        <h1 className="text-4xl font-black leading-snug md:text-6xl">
          {EVENT.title}
        </h1>
        <p className="mt-2 text-sm tracking-widest text-muted-foreground uppercase">{EVENT.titleEn}</p>
        <div className="mt-10 flex justify-center gap-8 md:gap-16">
          {[
            { value: EVENT.attendeeCount, label: "شرکت‌کننده" },
            { value: EVENT.topicCount, label: "سرفصل" },
            { value: EVENT.durationHours, label: "ساعت" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-gold md:text-5xl">{value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/components/EventNav.tsx app/workshop/vibe-coding-28khordad/components/EventHero.tsx
  git commit -m "feat: add EventNav and EventHero components"
  ```

---

## Task 6: VideoSection + AgendaSection

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/components/VideoSection.tsx`
- Create: `app/workshop/vibe-coding-28khordad/components/AgendaSection.tsx`

- [ ] **Step 1: بساز `VideoSection.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/VideoSection.tsx
"use client";
import { Play } from "lucide-react";
import { EVENT } from "../config";

export default function VideoSection() {
  return (
    <section id="video" className="py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <SectionTitle>ویدیو کارگاه</SectionTitle>
        <div className="mx-auto max-w-3xl rounded-2xl overflow-hidden border border-gold/15 bg-surface shadow-elegant">
          {EVENT.aparatEmbedUrl ? (
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={EVENT.aparatEmbedUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title={EVENT.title}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 h-48 text-muted-foreground">
              <Play className="w-10 h-10" />
              <span className="text-sm">ویدیو به‌زودی اضافه می‌شود</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-2xl font-black md:text-3xl">{children}</h2>
  );
}
```

- [ ] **Step 2: بساز `AgendaSection.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/AgendaSection.tsx
import { AGENDA } from "../config";

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-black md:text-3xl">سرفصل‌های کارگاه</h2>
        <div className="mx-auto max-w-2xl space-y-3">
          {AGENDA.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4"
            >
              <span className="shrink-0 text-xs font-mono text-gold/70 w-12 text-left">{item.time}</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm font-medium">{item.topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/components/VideoSection.tsx app/workshop/vibe-coding-28khordad/components/AgendaSection.tsx
  git commit -m "feat: add video and agenda sections"
  ```

---

## Task 7: AttendeesSection + AttendeeCard + ProfileEditModal

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/components/AttendeeCard.tsx`
- Create: `app/workshop/vibe-coding-28khordad/components/ProfileEditModal.tsx`
- Create: `app/workshop/vibe-coding-28khordad/components/AttendeesSection.tsx`

- [ ] **Step 1: بساز `AttendeeCard.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/AttendeeCard.tsx
import { ExternalLink } from "lucide-react";
import type { Attendee } from "../lib/appsScript";

interface Props {
  attendee: Attendee;
  isOwnCard: boolean;
  onEdit: () => void;
}

export default function AttendeeCard({ attendee, isOwnCard, onEdit }: Props) {
  const initials = attendee.name.trim().slice(0, 1);
  return (
    <div className="relative rounded-2xl border border-border bg-surface p-4 flex flex-col gap-3">
      {isOwnCard && (
        <button onClick={onEdit} className="absolute top-3 left-3 text-xs text-gold/70 hover:text-gold transition">
          ویرایش
        </button>
      )}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold font-black text-sm shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-bold text-sm">{attendee.name}</p>
          {attendee.specialty && <p className="text-xs text-muted-foreground">{attendee.specialty}</p>}
        </div>
      </div>
      {attendee.bio && <p className="text-xs text-muted-foreground leading-relaxed">{attendee.bio}</p>}
      {attendee.linkedin && (
        <a
          href={attendee.linkedin.startsWith("http") ? attendee.linkedin : `https://${attendee.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-gold/80 hover:text-gold transition"
        >
          <ExternalLink className="w-3 h-3" />
          LinkedIn
        </a>
      )}
    </div>
  );
}
```

- [ ] **Step 2: بساز `ProfileEditModal.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/ProfileEditModal.tsx
"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { updateProfile } from "../lib/appsScript";

interface Props {
  phone: string;
  token: string;
  initialLinkedin: string;
  initialSpecialty: string;
  initialBio: string;
  onClose: () => void;
  onSaved: (linkedin: string, specialty: string, bio: string) => void;
}

export default function ProfileEditModal({ phone, token, initialLinkedin, initialSpecialty, initialBio, onClose, onSaved }: Props) {
  const [linkedin, setLinkedin] = useState(initialLinkedin);
  const [specialty, setSpecialty] = useState(initialSpecialty);
  const [bio, setBio] = useState(initialBio);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSave() {
    setLoading(true);
    setError("");
    try {
      const res = await updateProfile(phone, token, linkedin, specialty, bio);
      if (!res.success) { setError("خطا در ذخیره. دوباره تلاش کنید."); return; }
      onSaved(linkedin, specialty, bio);
      onClose();
    } catch {
      setError("خطا در اتصال.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="w-full max-w-sm rounded-2xl border border-gold/20 bg-surface shadow-elegant p-6" dir="rtl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">ویرایش پروفایل</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition"><X className="w-5 h-5" /></button>
        </div>
        <div className="space-y-4">
          <Field label="تخصص">
            <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="مثال: توسعه‌دهنده فرانت‌اند" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold/50 transition" />
          </Field>
          <Field label="لینک LinkedIn">
            <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/yourname" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold/50 transition" dir="ltr" />
          </Field>
          <Field label="معرفی کوتاه (اختیاری)">
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} placeholder="چند جمله درباره خودت..." className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold/50 transition resize-none" />
          </Field>
          {error && <p className="text-destructive text-xs">{error}</p>}
          <button onClick={handleSave} disabled={loading} className="w-full rounded-xl bg-gradient-gold px-4 py-3 text-sm font-bold text-gold-foreground disabled:opacity-50 transition hover:-translate-y-0.5">
            {loading ? "در حال ذخیره..." : "ذخیره"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}
```

- [ ] **Step 3: بساز `AttendeesSection.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/AttendeesSection.tsx
"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { getAttendees, type Attendee } from "../lib/appsScript";
import AttendeeCard from "./AttendeeCard";
import ProfileEditModal from "./ProfileEditModal";

interface Props {
  phone: string | null;
  token: string | null;
  userName: string | null;
  onLoginRequest: () => void;
}

export default function AttendeesSection({ phone, token, userName, onLoginRequest }: Props) {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    getAttendees().then(setAttendees).finally(() => setLoading(false));
  }, []);

  const myProfile = userName ? attendees.find((a) => a.name === userName) : null;

  function handleSaved(linkedin: string, specialty: string, bio: string) {
    if (!phone) return;
    setAttendees((prev) =>
      prev.map((a) => (a.linkedin === myProfile?.linkedin && a.name === myProfile?.name ? { ...a, linkedin, specialty, bio } : a))
    );
  }

  return (
    <section id="attendees" className="py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-black md:text-3xl">شرکت‌کنندگان</h2>
          <span className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold/80">
            {loading ? "..." : `${attendees.length} نفر`}
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 rounded-2xl border border-border bg-surface animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {attendees.map((a, i) => (
              <AttendeeCard
                key={i}
                attendee={a}
                isOwnCard={!!phone && a.name === myProfile?.name}
                onEdit={() => setEditOpen(true)}
              />
            ))}
            {!phone && (
              <button
                onClick={onLoginRequest}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gold/30 bg-gold/5 p-4 text-center transition hover:border-gold/60 hover:bg-gold/10"
              >
                <Plus className="w-5 h-5 text-gold/60" />
                <span className="text-xs text-gold/70">اطلاعاتم رو ثبت کنم</span>
              </button>
            )}
          </div>
        )}
      </div>

      {editOpen && phone && token && myProfile && (
        <ProfileEditModal
          phone={phone}
          token={token}
          initialLinkedin={myProfile.linkedin}
          initialSpecialty={myProfile.specialty}
          initialBio={myProfile.bio}
          onClose={() => setEditOpen(false)}
          onSaved={handleSaved}
        />
      )}
    </section>
  );
}
```

- [ ] **Step 4: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/components/AttendeeCard.tsx app/workshop/vibe-coding-28khordad/components/ProfileEditModal.tsx app/workshop/vibe-coding-28khordad/components/AttendeesSection.tsx
  git commit -m "feat: add attendees section with profile edit"
  ```

---

## Task 8: CommentsSection

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/components/CommentsSection.tsx`

- [ ] **Step 1: بساز `CommentsSection.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/CommentsSection.tsx
"use client";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { getComments, addComment, type Comment } from "../lib/appsScript";

interface Props {
  phone: string | null;
  token: string | null;
  onLoginRequest: () => void;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("fa-IR", { month: "long", day: "numeric" });
  } catch {
    return "";
  }
}

export default function CommentsSection({ phone, token, onLoginRequest }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getComments().then(setComments).finally(() => setLoading(false));
  }, []);

  async function handleSubmit() {
    if (!phone || !token) { onLoginRequest(); return; }
    if (!text.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await addComment(phone, token, text.trim());
      if (!res.success) { setError("خطا در ثبت نظر."); return; }
      setComments((prev) => [{ name: "شما", text: text.trim(), timestamp: new Date().toISOString() }, ...prev]);
      setText("");
    } catch {
      setError("خطا در اتصال.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="comments" className="py-12" dir="rtl">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="mb-8 text-2xl font-black md:text-3xl">نظرات شرکت‌کنندگان</h2>

        {phone && token ? (
          <div className="mb-8 rounded-2xl border border-gold/20 bg-surface p-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              placeholder="نظر یا تجربه‌ات از کارگاه رو بنویس..."
              className="w-full bg-transparent text-sm outline-none resize-none placeholder:text-muted-foreground"
            />
            {error && <p className="text-destructive text-xs mb-2">{error}</p>}
            <div className="flex justify-end">
              <button onClick={handleSubmit} disabled={submitting || !text.trim()} className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-4 py-2 text-xs font-bold text-gold-foreground disabled:opacity-50 transition hover:-translate-y-0.5">
                <Send className="w-3.5 h-3.5" />
                {submitting ? "در حال ثبت..." : "ثبت نظر"}
              </button>
            </div>
          </div>
        ) : (
          <button onClick={onLoginRequest} className="mb-8 w-full rounded-2xl border border-dashed border-gold/30 bg-gold/5 py-4 text-sm text-gold/70 transition hover:border-gold/50 hover:bg-gold/10">
            برای ثبت نظر وارد شوید
          </button>
        )}

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => <div key={i} className="h-20 rounded-2xl border border-border bg-surface animate-pulse" />)}
          </div>
        ) : comments.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">هنوز نظری ثبت نشده. اول تو باش!</p>
        ) : (
          <div className="space-y-4">
            {comments.map((c, i) => (
              <div key={i} className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-sm leading-relaxed mb-3">«{c.text}»</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gold/80">— {c.name}</span>
                  <span className="text-xs text-muted-foreground">{formatDate(c.timestamp)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/components/CommentsSection.tsx
  git commit -m "feat: add comments section"
  ```

---

## Task 9: FollowUpSection

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/components/FollowUpSection.tsx`

- [ ] **Step 1: بساز `FollowUpSection.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/FollowUpSection.tsx
"use client";
import { useEffect, useState } from "react";
import { Lock, Send } from "lucide-react";
import { getFollowup, addFollowup, type FollowupEntry } from "../lib/appsScript";
import { EVENT } from "../config";

interface Props {
  phone: string | null;
  token: string | null;
  onLoginRequest: () => void;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("fa-IR", { month: "long", day: "numeric" });
  } catch { return ""; }
}

export default function FollowUpSection({ phone, token, onLoginRequest }: Props) {
  const isUnlocked = new Date() >= EVENT.followupUnlockDate;
  const [entries, setEntries] = useState<FollowupEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isUnlocked) {
      getFollowup().then(setEntries).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [isUnlocked]);

  async function handleSubmit() {
    if (!phone || !token) { onLoginRequest(); return; }
    if (!text.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await addFollowup(phone, token, text.trim());
      if (!res.success) { setError("خطا در ثبت."); return; }
      setEntries((prev) => [{ name: "شما", text: text.trim(), timestamp: new Date().toISOString() }, ...prev]);
      setText("");
    } catch {
      setError("خطا در اتصال.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="followup" className="py-12 pb-24" dir="rtl">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="mb-3 text-2xl font-black md:text-3xl">پیگیری یک‌ماهه</h2>
        <p className="mb-8 text-sm text-muted-foreground">یه ماه بعد از کارگاه — آیا توی کارت ازش استفاده کردی؟ چه نتیجه‌ای گرفتی؟</p>

        {!isUnlocked ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold/20 bg-gold/5 py-12">
            <Lock className="w-8 h-8 text-gold/40" />
            <p className="text-sm text-gold/60">
              باز می‌شود — {EVENT.followupUnlockDate.toLocaleDateString("fa-IR", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        ) : (
          <>
            {phone && token ? (
              <div className="mb-8 rounded-2xl border border-gold/20 bg-surface p-4">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={3}
                  placeholder="چه نتیجه‌ای از کارگاه گرفتی؟ آیا از ابزارها استفاده کردی؟"
                  className="w-full bg-transparent text-sm outline-none resize-none placeholder:text-muted-foreground"
                />
                {error && <p className="text-destructive text-xs mb-2">{error}</p>}
                <div className="flex justify-end">
                  <button onClick={handleSubmit} disabled={submitting || !text.trim()} className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-4 py-2 text-xs font-bold text-gold-foreground disabled:opacity-50 transition hover:-translate-y-0.5">
                    <Send className="w-3.5 h-3.5" />
                    {submitting ? "در حال ثبت..." : "ثبت"}
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={onLoginRequest} className="mb-8 w-full rounded-2xl border border-dashed border-gold/30 bg-gold/5 py-4 text-sm text-gold/70 transition hover:border-gold/50">
                برای ثبت نظر پیگیری وارد شوید
              </button>
            )}

            {loading ? (
              <div className="space-y-3">
                {[1, 2].map((i) => <div key={i} className="h-20 rounded-2xl border border-border bg-surface animate-pulse" />)}
              </div>
            ) : entries.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-8">هنوز کسی نظر پیگیری ثبت نکرده.</p>
            ) : (
              <div className="space-y-4">
                {entries.map((e, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="text-sm leading-relaxed mb-3">{e.text}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gold/80">— {e.name}</span>
                      <span className="text-xs text-muted-foreground">{formatDate(e.timestamp)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/components/FollowUpSection.tsx
  git commit -m "feat: add follow-up section with date-based unlock"
  ```

---

## Task 10: EventPageContent + page.tsx (Assembly)

**Files:**
- Create: `app/workshop/vibe-coding-28khordad/components/EventPageContent.tsx`
- Create: `app/workshop/vibe-coding-28khordad/page.tsx`

- [ ] **Step 1: بساز `EventPageContent.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/components/EventPageContent.tsx
"use client";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import EventNav from "./EventNav";
import EventHero from "./EventHero";
import VideoSection from "./VideoSection";
import AgendaSection from "./AgendaSection";
import AttendeesSection from "./AttendeesSection";
import CommentsSection from "./CommentsSection";
import FollowUpSection from "./FollowUpSection";
import LoginModal from "./LoginModal";

export default function EventPageContent() {
  const { session, ready, saveSession, logout } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EventNav
        userName={session?.name ?? null}
        onLoginClick={() => setLoginOpen(true)}
        onLogout={logout}
      />
      <main>
        <EventHero />
        <VideoSection />
        <AgendaSection />
        <AttendeesSection
          phone={session?.phone ?? null}
          token={session?.token ?? null}
          userName={session?.name ?? null}
          onLoginRequest={() => setLoginOpen(true)}
        />
        <CommentsSection
          phone={session?.phone ?? null}
          token={session?.token ?? null}
          onLoginRequest={() => setLoginOpen(true)}
        />
        <FollowUpSection
          phone={session?.phone ?? null}
          token={session?.token ?? null}
          onLoginRequest={() => setLoginOpen(true)}
        />
      </main>

      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onSuccess={(phone, token, name) => {
            saveSession({ phone, token, name });
            setLoginOpen(false);
          }}
        />
      )}
    </div>
  );
}
```

- [ ] **Step 2: بساز `page.tsx`**

```tsx
// app/workshop/vibe-coding-28khordad/page.tsx
import type { Metadata } from "next";
import EventPageContent from "./components/EventPageContent";

export const metadata: Metadata = {
  title: "کارگاه وایب‌کدینگ ۲۸ خرداد ۱۴۰۴",
  description: "صفحه اختصاصی کارگاه وایب‌کدینگ — شرکت‌کنندگان، سرفصل‌ها، ویدیو و نظرات",
  robots: { index: false },
};

export default function EventPage() {
  return <EventPageContent />;
}
```

- [ ] **Step 3: Build رو چک کن**

  ```bash
  npm run build
  ```
  باید بدون error build بشه. اگه خطا داشت، TypeScript error‌ها رو برطرف کن.

- [ ] **Step 4: Dev server رو راه‌انداز و صفحه رو چک کن**

  ```bash
  npm run dev
  ```
  باز کن: `http://localhost:3000/workshop/vibe-coding-28khordad`

  چک‌لیست دستی:
  - [ ] صفحه load میشه بدون خطا
  - [ ] sticky nav کار میکنه و اسکرول به هر بخش میره
  - [ ] دکمه «ورود» LoginModal رو باز میکنه
  - [ ] شماره نامعتبر پیام خطای مناسب نشون میده
  - [ ] ویدیو placeholder نشون میده (چون URL هنوز پر نشده)
  - [ ] سرفصل‌ها نمایش داره
  - [ ] skeleton loading برای شرکت‌کنندگان و نظرات نشون داده میشه

- [ ] **Step 5: Commit**

  ```bash
  git add app/workshop/vibe-coding-28khordad/
  git commit -m "feat: add event page for vibe coding workshop 28 khordad"
  ```

---

## Task 11: مقداردهی نهایی

- [ ] **Step 1: SHEET_ID رو توی Apps Script ست کن**

  در فایل `event-auth.gs`، خط اول رو آپدیت کن:
  ```javascript
  const SHEET_ID = "YOUR_ACTUAL_SHEET_ID"; // از URL Sheet کپی کن
  ```
  بعد redeploy کن (New deployment یا update).

- [ ] **Step 2: SCRIPT_URL رو توی `.env.local` ست کن**

  بعد از دیپلوی Apps Script:
  ```
  NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/ACTUAL_ID/exec
  ```

- [ ] **Step 3: آپارات embed URL رو توی `config.ts` آپدیت کن**

  وقتی ویدیو آپلود شد، `aparatEmbedUrl` رو توی `config.ts` آپدیت کن.  
  فرمت embed آپارات: `https://www.aparat.com/video/VIDEO_CODE?data[rnddiv]=...&data[responsive]=yes`

- [ ] **Step 4: Whitelist رو توی Sheet پر کن**

  توی Sheet «Whitelist»، شماره‌های شرکت‌کنندگان رو اضافه کن (فرمت: `09XXXXXXXXX`).

- [ ] **Step 5: تست end-to-end**

  با یه شماره از whitelist:
  - [ ] ورود با شماره → پیام «خوش آمدی»
  - [ ] ساخت رمز → وارد میشه
  - [ ] خروج → session پاک میشه
  - [ ] ورود مجدد با رمز → کار میکنه
  - [ ] ویرایش پروفایل → ذخیره میشه و کارت آپدیت میشه
  - [ ] ثبت نظر → بلافاصله نمایش داده میشه

- [ ] **Step 6: Build نهایی و push**

  ```bash
  npm run build
  git add -A
  git commit -m "chore: configure apps script and aparat for 28 khordad event"
  git push
  ```
