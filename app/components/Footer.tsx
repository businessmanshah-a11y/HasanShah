import Image from "next/image";
import { Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-surface/30">

      {/* ── جداکننده: خط طلایی + قیف장식ی فقط در بالا ── */}
      <div className="relative">
        {/* خط طلایی اصلی */}
        <div className="gold-divider" />

        {/* دو خط قیف از گوشه‌ها به مرکز — فقط ۸۰px ارتفاع */}
        <svg
          aria-hidden
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="pointer-events-none w-full"
          height="80"
        >
          <defs>
            <linearGradient id="lineLeft" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="oklch(0.83 0.105 72)" stopOpacity="0" />
              <stop offset="100%" stopColor="oklch(0.83 0.105 72)" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="lineRight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="oklch(0.83 0.105 72)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="oklch(0.83 0.105 72)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0"    y1="0" x2="600" y2="80" stroke="url(#lineLeft)"  strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="1200" y1="0" x2="600" y2="80" stroke="url(#lineRight)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <circle cx="600" cy="80" r="2.5" fill="oklch(0.83 0.105 72 / 0.6)" />
        </svg>
      </div>

      {/* ── محتوا ── */}
      <div className="flex flex-col items-center text-center gap-6 px-6 pt-8 pb-2">

        {/* لوگو — ۱.۷× */}
        <Image
          src="/images/logo.png"
          alt="HSH"
          width={190}
          height={190}
          className="h-[190px] w-[190px] object-contain"
          style={{ filter: "drop-shadow(0 0 24px oklch(0.83 0.105 72 / 0.35))" }}
        />

        {/* اسم و توضیح */}
        <div className="flex flex-col items-center gap-1.5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            حسن شاهمرادی
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            طراح سایت و استراتژیست رشد دیجیتال
          </p>
        </div>

        {/* دکمه‌های تماس */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://t.me/shahbusinessman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-bold text-gold-foreground shadow-gold hover:-translate-y-0.5 active:translate-y-0 transition-transform"
          >
            <Send className="h-4 w-4" />
            تلگرام
          </a>
          <a
            href="tel:09120870095"
            dir="ltr"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-6 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <Phone className="h-4 w-4" />
            ۰۹۱۲ ۰۸۷ ۰۰۹۵
          </a>
        </div>

        {/* خط جداکننده */}
        <div className="gold-divider w-28" />

        {/* کپی‌رایت */}
        <p className="text-xs text-muted-foreground/55">
          © ۱۴۰۴ — تمامی حقوق محفوظ است.
          <span className="mx-2 opacity-40">·</span>
          طراحی و اجرا توسط حسن شاهمرادی
        </p>

      </div>
    </footer>
  );
}
