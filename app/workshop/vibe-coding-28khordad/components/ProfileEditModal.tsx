"use client";
import { useState } from "react";
import { X, Phone } from "lucide-react";
import { updateProfile } from "../lib/appsScript";

interface Props {
  phone: string;
  token: string;
  initialLinkedin: string;
  initialSpecialty: string;
  initialBio: string;
  initialShowPhone: boolean;
  onClose: () => void;
  onSaved: (linkedin: string, specialty: string, bio: string, showPhone: boolean) => void;
}

export default function ProfileEditModal({ phone, token, initialLinkedin, initialSpecialty, initialBio, initialShowPhone, onClose, onSaved }: Props) {
  const [linkedin, setLinkedin] = useState(initialLinkedin);
  const [specialty, setSpecialty] = useState(initialSpecialty);
  const [bio, setBio] = useState(initialBio);
  const [showPhone, setShowPhone] = useState(initialShowPhone);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSave() {
    setLoading(true);
    setError("");
    try {
      const res = await updateProfile(phone, token, linkedin, specialty, bio, showPhone);
      if (!res.success) { setError("خطا در ذخیره. دوباره تلاش کنید."); return; }
      onSaved(linkedin, specialty, bio, showPhone);
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

          {/* Phone visibility toggle */}
          <button
            type="button"
            onClick={() => setShowPhone((v) => !v)}
            className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${showPhone ? "border-gold/40 bg-gold/10 text-gold" : "border-border bg-background text-muted-foreground"}`}
          >
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              نمایش شماره تماس به بقیه
            </span>
            <span dir="ltr" className={`w-9 h-5 rounded-full transition-colors flex items-center px-0.5 ${showPhone ? "bg-gold" : "bg-border"}`}>
              <span className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${showPhone ? "translate-x-4" : "translate-x-0"}`} />
            </span>
          </button>

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
