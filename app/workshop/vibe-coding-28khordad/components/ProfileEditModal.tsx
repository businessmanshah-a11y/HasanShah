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
