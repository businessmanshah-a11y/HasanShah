"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, MessageSquarePlus } from "lucide-react";

interface SuggestProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommunitySuggestModal({ isOpen, onClose }: SuggestProps) {
  const [termName, setTermName] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTermName("");
      setUserDesc("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200" dir="rtl">
      <div className="relative w-full max-w-md rounded-3xl border border-gold/40 bg-surface-elevated p-6 md:p-8 shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <MessageSquarePlus className="h-5 w-5 text-gold" />
            <h3 className="text-sm md:text-base font-bold text-foreground">پیشنهاد اصطلاح جدید برای دانشنامه</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              اصطلاحی در ذهن داری که دوست داری به زبان عامیانه و همراه با پرامپت طلایی توسط مهندس حسن شاهمرادی به دانشنامه اضافه شود؟
            </p>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                نام اصطلاح (انگلیسی یا فارسی):
              </label>
              <input
                type="text"
                required
                value={termName}
                onChange={(e) => setTermName(e.target.value)}
                placeholder="مثلاً: Headless WordPress, Redis, Webhook..."
                className="w-full rounded-xl border border-white/15 bg-background p-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                چرا فکر می‌کنی باید اضافه شود؟
              </label>
              <textarea
                rows={3}
                value={userDesc}
                onChange={(e) => setUserDesc(e.target.value)}
                placeholder="توضیح کوتاه یا چالش شما در مواجهه با این کلمه..."
                className="w-full rounded-xl border border-white/15 bg-background p-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold py-3 text-xs font-black text-gold-foreground shadow-gold"
            >
              <Send className="h-4 w-4" />
              <span>ارسال پیشنهاد به تیم حسن شاهمرادی</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
            <h4 className="text-base font-bold text-foreground">پیشنهاد شما با موفقیت ثبت شد</h4>
            <p className="text-xs text-muted-foreground">با تشکر از مشارکت شما در غنای علمی دانشنامه وایب‌کدینگ ایران.</p>
          </div>
        )}
      </div>
    </div>
  );
}
