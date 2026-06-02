import Image from "next/image";
import { Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-surface">

      {/* ── Funnel: سر باز (بالا) → ته بسته (پایین) ── */}
      <svg
        aria-hidden
        viewBox="0 0 1200 480"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 w-full h-full"
      >
        {/* پر‌کردن داخل قیف با gradient ظریف */}
        <defs>
          <linearGradient id="funnelFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="oklch(0.83 0.105 72)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="oklch(0.83 0.105 72)" stopOpacity="0.00" />
          </linearGradient>
          <radialGradient id="tipGlow" cx="50%" cy="100%" r="18%">
            <stop offset="0%"   stopColor="oklch(0.83 0.105 72)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="oklch(0.83 0.105 72)" stopOpacity="0"   />
          </radialGradient>
        </defs>

        {/* مثلث پر‌شده قیف */}
        <polygon
          points="0,0 1200,0 600,480"
          fill="url(#funnelFill)"
        />

        {/* glow در نوک */}
        <ellipse cx="600" cy="480" rx="220" ry="80" fill="url(#tipGlow)" />

        {/* لبه چپ قیف */}
        <line
          x1="0"   y1="0"
          x2="600" y2="480"
          stroke="oklch(0.83 0.105 72 / 0.28)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* لبه راست قیف */}
        <line
          x1="1200" y1="0"
          x2="600"  y2="480"
          stroke="oklch(0.83 0.105 72 / 0.28)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* نوک قیف */}
        <circle
          cx="600" cy="480" r="3"
          fill="oklch(0.83 0.105 72 / 0.70)"
        />
      </svg>

      {/* ── محتوا ── */}
      <div className="relative z-10 flex flex-col items-center text-center gap-7 px-6 pt-16 pb-10">

        {/* لوگو */}
        <Image
          src="/images/logo.png"
          alt="HSH"
          width={96}
          height={96}
          className="h-20 w-20 object-contain"
          style={{ filter: "drop-shadow(0 0 20px oklch(0.83 0.105 72 / 0.35))" }}
        />

        {/* اسم و توضیح */}
        <div className="flex flex-col items-center gap-1.5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            حسن شاهمرادی
          </h2>
          <p className="text-sm text-muted-foreground max-w-[22rem] leading-relaxed">
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
        <div className="gold-divider w-32" />

        {/* کپی‌رایت */}
        <p className="text-xs text-muted-foreground/60 pb-2">
          © ۱۴۰۴ — تمامی حقوق محفوظ است.
          <span className="mx-2 opacity-40">·</span>
          طراحی و اجرا توسط حسن شاهمرادی
        </p>

      </div>
    </footer>
  );
}
