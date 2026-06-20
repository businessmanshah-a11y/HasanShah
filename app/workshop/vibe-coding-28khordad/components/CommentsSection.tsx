"use client";
import { useEffect, useState } from "react";
import { Send, Gift, Copy, Check, ExternalLink, Pencil, Trash2, X, CheckCheck } from "lucide-react";
import { getComments, addComment, editComment, deleteComment, type Comment } from "../lib/appsScript";
import { COMMENT_GIFT } from "../config";

interface Props {
  phone: string | null;
  token: string | null;
  userName: string | null;
  onLoginRequest: () => void;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("fa-IR", { month: "long", day: "numeric" });
  } catch { return ""; }
}

export default function CommentsSection({ phone, token, userName, onLoginRequest }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [giftRevealed, setGiftRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [editingTs, setEditingTs] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

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
      setComments((prev) => [{ name: userName ?? "شما", text: text.trim(), timestamp: new Date().toISOString() }, ...prev]);
      setText("");
      setGiftRevealed(true);
    } catch {
      setError("خطا در اتصال.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleEdit(ts: string) {
    if (!phone || !token || !editText.trim()) return;
    setActionLoading(ts);
    try {
      const res = await editComment(phone, token, ts, editText.trim());
      if (!res.success) return;
      setComments((prev) => prev.map((c) => c.timestamp === ts ? { ...c, text: editText.trim() } : c));
      setEditingTs(null);
    } catch { /* silent */ }
    finally { setActionLoading(null); }
  }

  async function handleDelete(ts: string) {
    if (!phone || !token) return;
    setActionLoading(ts);
    try {
      const res = await deleteComment(phone, token, ts);
      if (!res.success) return;
      setComments((prev) => prev.filter((c) => c.timestamp !== ts));
    } catch { /* silent */ }
    finally { setActionLoading(null); }
  }

  function handleCopy() {
    navigator.clipboard.writeText(COMMENT_GIFT.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const myName = userName;

  return (
    <section id="comments" className="py-12" dir="rtl">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="mb-8 text-2xl font-black md:text-3xl">نظرات شرکت‌کنندگان</h2>

        {/* Gift reveal */}
        {giftRevealed && (
          <div className="mb-6 rounded-2xl border border-gold/40 bg-gold/10 p-5 space-y-3">
            <div className="flex items-center gap-2 text-gold font-bold">
              <Gift className="w-5 h-5" />
              <span>هدیه‌ات آماده‌ست!</span>
            </div>
            <p className="text-sm text-white/70">{COMMENT_GIFT.description}</p>
            <div className="flex items-center gap-2">
              <span className="flex-1 rounded-xl border border-gold/30 bg-background px-4 py-2.5 font-mono text-sm tracking-widest text-gold text-center" dir="ltr">
                {COMMENT_GIFT.code}
              </span>
              <button onClick={handleCopy} className="flex items-center gap-1.5 rounded-xl bg-gradient-gold px-4 py-2.5 text-xs font-bold text-gold-foreground transition hover:opacity-90 shrink-0">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "کپی شد" : "کپی"}
              </button>
            </div>
            <a href={COMMENT_GIFT.shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-gold/70 hover:text-gold transition">
              <ExternalLink className="w-3.5 h-3.5" />
              برو به سایت خرید
            </a>
          </div>
        )}

        {/* Comment form */}
        {phone && token ? (
          !giftRevealed ? (
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-2 rounded-xl border border-gold/20 bg-gold/5 px-4 py-3">
                <Gift className="w-4 h-4 text-gold shrink-0" />
                <p className="text-sm text-white/70">
                  با ثبت نظر، <span className="text-gold font-semibold">کد تخفیف ویژه اکانت هوش مصنوعی</span> هدیه بگیرید
                </p>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-surface p-4">
                <textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} placeholder="نظر یا تجربه‌ات از کارگاه رو بنویس..." className="w-full bg-transparent text-sm outline-none resize-none placeholder:text-muted-foreground" />
                {error && <p className="text-destructive text-xs mb-2">{error}</p>}
                <div className="flex justify-end">
                  <button onClick={handleSubmit} disabled={submitting || !text.trim()} className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-4 py-2 text-xs font-bold text-gold-foreground disabled:opacity-50 transition hover:-translate-y-0.5">
                    <Send className="w-3.5 h-3.5" />
                    {submitting ? "در حال ثبت..." : "ثبت نظر و دریافت هدیه"}
                  </button>
                </div>
              </div>
            </div>
          ) : null
        ) : (
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-2 rounded-xl border border-gold/20 bg-gold/5 px-4 py-3">
              <Gift className="w-4 h-4 text-gold shrink-0" />
              <p className="text-sm text-white/70">با ثبت نظر، <span className="text-gold font-semibold">کد تخفیف ویژه اکانت هوش مصنوعی</span> هدیه بگیرید</p>
            </div>
            <button onClick={onLoginRequest} className="w-full rounded-2xl border border-dashed border-gold/30 bg-gold/5 py-4 text-sm text-gold/70 transition hover:border-gold/50 hover:bg-gold/10">
              برای ثبت نظر و دریافت هدیه وارد شوید
            </button>
          </div>
        )}

        {/* Comments list */}
        {loading ? (
          <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl border border-border bg-surface animate-pulse" />)}</div>
        ) : comments.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">هنوز نظری ثبت نشده. اول تو باش!</p>
        ) : (
          <div className="space-y-4">
            {comments.map((c) => {
              const isOwn = !!myName && c.name === myName;
              const isEditing = editingTs === c.timestamp;
              const isActing = actionLoading === c.timestamp;
              return (
                <div key={c.timestamp} className={`rounded-2xl border bg-surface p-4 ${isOwn ? "border-gold/25" : "border-border"}`}>
                  {isEditing ? (
                    <div className="space-y-3">
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        rows={3}
                        className="w-full bg-transparent text-sm outline-none resize-none border-b border-gold/20 pb-2"
                        autoFocus
                      />
                      <div className="flex items-center gap-2 justify-end">
                        <button onClick={() => setEditingTs(null)} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition">
                          <X className="w-3.5 h-3.5" /> انصراف
                        </button>
                        <button
                          onClick={() => handleEdit(c.timestamp)}
                          disabled={isActing || !editText.trim()}
                          className="flex items-center gap-1.5 rounded-xl bg-gradient-gold px-3 py-1.5 text-xs font-bold text-gold-foreground disabled:opacity-50 transition"
                        >
                          <CheckCheck className="w-3.5 h-3.5" />
                          {isActing ? "ذخیره..." : "ذخیره"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm leading-relaxed mb-3">«{c.text}»</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-gold/80">— {c.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">{formatDate(c.timestamp)}</span>
                          {isOwn && (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => { setEditingTs(c.timestamp); setEditText(c.text); }}
                                className="text-white/30 hover:text-gold transition"
                                title="ویرایش"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDelete(c.timestamp)}
                                disabled={isActing}
                                className="text-white/30 hover:text-destructive transition disabled:opacity-30"
                                title="حذف"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
