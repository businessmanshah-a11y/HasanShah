"use client";

import { useState } from "react";
import { X, Share2, Copy, Check, Sparkles } from "lucide-react";
import { EncyclopediaTerm } from "../data/types";

interface StoryCardProps {
  term: EncyclopediaTerm | null;
  onClose: () => void;
}

export default function StoryCardShareModal({ term, onClose }: StoryCardProps) {
  const [copied, setCopied] = useState(false);

  if (!term) return null;

  const shareText = `🔥 الفبای وایب‌کدینگ در وردپرس:
اصطلاح: ${term.termEn} (${term.termFa})

💡 به زبان آدمیزاد:
${term.analogy}

⚠️ اگر ندانی چه فاجعه‌ای رخ میده؟
${term.realPain}

📌 مرجع کامل در دانشنامه تخصصی حسن شاهمرادی:
https://hasanshah.ir/vibe-coding/dictionary/#${term.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200" dir="rtl">
      <div className="relative w-full max-w-md rounded-3xl border border-gold/40 bg-surface-elevated p-6 shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Share2 className="h-4 w-4 text-gold" />
            <h3 className="text-sm font-bold text-foreground">کارت اشتراک‌گذاری در استوری و لینکدین</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Visual Story Preview */}
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-surface via-background to-surface p-6 shadow-elegant space-y-4 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold text-gold">
            <Sparkles className="h-3 w-3" />
            وایب‌کدینگ وردپرس با حسن شاهمرادی
          </div>

          <div>
            <h4 className="text-xl font-black text-foreground">{term.termEn}</h4>
            <div className="text-xs font-bold text-gold mt-0.5">{term.termFa}</div>
          </div>

          <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-xs text-amber-200 leading-relaxed text-start">
            <strong>💡 به زبان آدمیزاد:</strong> {term.analogy}
          </div>

          <div className="text-[11px] text-muted-foreground pt-2 border-t border-white/5 font-mono">
            hasanshah.ir/vibe-coding/dictionary/
          </div>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold py-3 text-xs font-black text-gold-foreground shadow-gold"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>متن اشتراک‌گذاری کپی شد!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>کپی متن جهت اشتراک در لینکدین یا استوری</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
