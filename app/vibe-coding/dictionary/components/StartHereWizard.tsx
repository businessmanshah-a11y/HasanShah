"use client";

import { useState } from "react";
import { Sparkles, Compass, CheckCircle2, XCircle, ChevronDown, ChevronUp, ArrowLeft, Lightbulb } from "lucide-react";

export default function StartHereWizard({ onSelectPreset }: { onSelectPreset: (preset: 'landing24h' | 'critical5' | 'all') => void }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="container mx-auto px-4 pb-8">
      <div className="rounded-3xl border border-gold/40 bg-gradient-to-b from-surface-elevated/90 to-surface/80 p-6 md:p-8 backdrop-blur shadow-elegant transition-all">
        {/* Header Toggle */}
        <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground shadow-gold shrink-0">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                راهنمای ورود افراد صفر کیلومتر و تازه‌کار
              </div>
              <h2 className="text-xl md:text-2xl font-black text-foreground">
                از اینجا شروع کنید: وایب‌کدینگ به زبان ساده یعنی چی؟
              </h2>
            </div>
          </div>

          <button
            type="button"
            className="p-2 rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={isOpen ? "بستن راهنما" : "باز کردن راهنما"}
          >
            {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        {/* Content Body */}
        {isOpen && (
          <div className="mt-6 pt-6 border-t border-white/10 space-y-6 animate-in fade-in duration-300">
            {/* The Human Definition */}
            <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-amber-100 leading-relaxed text-sm md:text-base">
              <div className="flex items-center gap-2 font-black text-amber-300 text-base mb-1.5">
                <Lightbulb className="h-5 w-5 shrink-0" />
                <span>تعریف وایب‌کدینگ به زبان خودمانی:</span>
              </div>
              <p className="leading-loose">
                «وایب‌کدینگ یعنی تو مثل یک <strong>کارگردان باهوش</strong> در پشت صحنه می‌شینی و به هوش مصنوعی می‌گی چطور صحنه رو بسازه؛ نیازی نیست خودت آجر بچینی یا خط‌به‌خط کد تایپ کنی. اما یک شرط طلایی داره: <strong>کارگردان باید نام بازیگران و اصطلاحات فیلم‌برداری رو بلد باشه!</strong> این دانشنامه دقیقاً همان واژگان طلاییه که بهت قدرت میده بدون حتی یک خط خطا، به هوش مصنوعی فرمان ساخت سایت وردپرسی بدی.»
              </p>
            </div>

            {/* Before vs After Comparison */}
            <div>
              <h3 className="text-sm font-bold text-muted-foreground mb-3">
                مقایسه دو مسیر: چرا وایب‌کدینگ بازی را تغییر داده است؟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                {/* Traditional */}
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-rose-300 text-sm">
                    <XCircle className="h-4 w-4" />
                    <span>روش سنتی (خسته‌کننده و کند):</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside leading-relaxed">
                    <li>۶ ماه زمان برای یادگیری سینتکس خشک زبان PHP و جاوااسکریپت.</li>
                    <li>نوشتن هزاران خط کد تکراری با ساعت‌ها کلنجار رفتن با باگ‌های املایی.</li>
                    <li>یا نصب افزونه‌های کندی مثل المنتور که سرعت سایت را نابود می‌کنند.</li>
                  </ul>
                </div>

                {/* Vibe Coding */}
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-emerald-300 text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>روش وایب‌کدینگ با وردپرس (سریع و لذت‌بخش):</span>
                  </div>
                  <ul className="space-y-2 text-foreground/90 list-disc list-inside leading-relaxed">
                    <li>یادگیری فقط «مفهوم و اصطلاح کلیدی» در عرض ۲ دقیقه.</li>
                    <li>کپی کردن پرامپت طلایی آماده از این دانشنامه و تحویل به ادیتور Cursor یا Claude.</li>
                    <li>تولید قالب سبک، اختصاصی و با سرعت ۱۰۰ لایت‌هاوس در کمتر از چند روز.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3 Steps for Beginner */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-muted-foreground mb-3">
                نقشه راه پیشنهادی برای همین الان:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => onSelectPreset('critical5')}
                  className="p-4 rounded-2xl border border-gold/30 bg-gold/10 hover:bg-gold/20 text-start transition-all group"
                >
                  <div className="text-xs font-bold text-gold mb-1">گام اول (پیشنهادی)</div>
                  <div className="font-bold text-sm text-foreground group-hover:text-gold transition-colors">
                    فقط ۵ اصطلاح مرگ و زندگی
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    اصطلاحاتی که اگر ندانی، کدهای هوش مصنوعی سایتت را متوقف می‌کنند.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectPreset('landing24h')}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/10 text-start transition-all group"
                >
                  <div className="text-xs font-bold text-sky-400 mb-1">گام دوم</div>
                  <div className="font-bold text-sm text-foreground group-hover:text-gold transition-colors">
                    مسیر ساخت لندینگ در ۲۴ ساعت
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    ۷ اصطلاح برای بالا آوردن یک صفحه فروش فوق‌سریع.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectPreset('all')}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/10 text-start transition-all group"
                >
                  <div className="text-xs font-bold text-purple-400 mb-1">گام سوم</div>
                  <div className="font-bold text-sm text-foreground group-hover:text-gold transition-colors">
                    مشاهده کل دانشنامه
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    مرور تمام ۳۶ مدخل با جستجو و فیلترهای دلخواه.
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
