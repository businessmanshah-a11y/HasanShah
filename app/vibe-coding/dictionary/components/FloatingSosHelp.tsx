"use client";

import { useState } from "react";
import { HelpCircle, X, Compass, Lightbulb, ArrowLeft, ShieldAlert } from "lucide-react";

export default function FloatingSosHelp({ onTriggerPreset }: { onTriggerPreset: (preset: 'critical5' | 'landing24h') => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40" dir="rtl">
      {isOpen ? (
        <div className="w-80 sm:w-96 rounded-3xl border border-gold/40 bg-surface-elevated p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-xs font-black text-gold">
              <Compass className="h-4 w-4" />
              <span>قطب‌نمای نجات: چطور از این صفحه استفاده کنم؟</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-foreground/90 leading-relaxed">
            اگر با دیدن اصطلاحات احساس سردرگمی کردی، کاملاً طبیعیه! برای شروع اصلاً نیازی نیست تمام ۳۶ اصطلاح را بخوانی:
          </p>

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => {
                onTriggerPreset('critical5');
                setIsOpen(false);
              }}
              className="w-full text-start p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-xs font-bold text-rose-200 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-rose-400 shrink-0" />
                <span>فقط ۵ اصطلاح مرگ و زندگی را ببین</span>
              </div>
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => {
                onTriggerPreset('landing24h');
                setIsOpen(false);
              }}
              className="w-full text-start p-3 rounded-xl border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 text-xs font-bold text-sky-200 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-sky-400 shrink-0" />
                <span>مسیر ساخت لندینگ در ۲۴ ساعت</span>
              </div>
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="text-[11px] text-muted-foreground pt-1 border-t border-white/5">
            روی هر کارت، بخش «💡 به زبان آدمیزاد» را بخوان تا استعاره‌های ساده را متوجه شوی.
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-gold/40 bg-surface-elevated/90 px-4 py-2.5 text-xs font-bold text-gold shadow-gold-lg backdrop-blur hover:bg-surface-elevated hover:scale-105 transition-all"
        >
          <HelpCircle className="h-4 w-4 text-gold group-hover:rotate-12 transition-transform" />
          <span>کمک! من گیج شدم</span>
        </button>
      )}
    </div>
  );
}
