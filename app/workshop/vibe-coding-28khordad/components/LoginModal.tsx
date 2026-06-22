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
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
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
    if (pwd.length < 6) { setError("رمز باید حداقل ۶ کاراکتر باشد"); return; }
    if (pwd !== confirmPwd) { setError("رمزها با هم مطابقت ندارند"); return; }
    setLoading(true);
    try {
      const res = await setPassword(phone, pwd);
      if (!res.success || !res.token) { setError("خطا در ثبت رمز. دوباره تلاش کنید."); return; }
      onSuccess(phone, res.token, res.name ?? name);
      onClose();
    } catch (err) {
      setError(`خطا: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin() {
    setError("");
    if (!pwd) { setError("رمز را وارد کنید"); return; }
    setLoading(true);
    try {
      const res = await login(phone, pwd);
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
            <p className="text-xs text-gold/70 bg-gold/5 border border-gold/20 rounded-lg px-3 py-2">⌨️ کیبورد را روی <strong>انگلیسی</strong> تنظیم کنید</p>
            <div className="relative">
              <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))).replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))))}
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
            <PasswordField value={pwd} onChange={setPwd} show={showPassword} onToggle={() => setShowPassword(!showPassword)} placeholder="رمز (حداقل ۶ کاراکتر)" />
            <PasswordField value={confirmPwd} onChange={setConfirmPwd} show={showPassword} onToggle={() => setShowPassword(!showPassword)} placeholder="تکرار رمز" onEnter={handleNewPassword} />
            {error && <p className="text-destructive text-xs">{error}</p>}
            <button onClick={handleNewPassword} disabled={loading} className="w-full rounded-xl bg-gradient-gold px-4 py-3 text-sm font-bold text-gold-foreground disabled:opacity-50 transition hover:-translate-y-0.5">
              {loading ? "در حال ثبت..." : "ساخت رمز و ورود"}
            </button>
          </div>
        )}

        {step === "existing-password" && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">رمزت رو وارد کن</p>
            <PasswordField value={pwd} onChange={setPwd} show={showPassword} onToggle={() => setShowPassword(!showPassword)} placeholder="رمز عبور" onEnter={handleLogin} />
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
