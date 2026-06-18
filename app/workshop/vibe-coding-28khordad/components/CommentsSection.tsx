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
    getComments().then(setComments).catch(() => setComments([])).finally(() => setLoading(false));
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
