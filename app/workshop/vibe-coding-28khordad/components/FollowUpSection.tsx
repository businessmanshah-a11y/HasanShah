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
      getFollowup().then(setEntries).catch(() => setEntries([])).finally(() => setLoading(false));
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
