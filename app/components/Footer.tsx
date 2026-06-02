import Image from "next/image";
import { Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Funnel / converging shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10,14,28,0.0) 0%)",
        }}
      />
      {/* Left funnel wall */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-32 w-1/2"
        style={{
          background:
            "linear-gradient(to bottom right, transparent 49.5%, rgba(212,175,55,0.07) 50%)",
        }}
      />
      {/* Right funnel wall */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-32 w-1/2"
        style={{
          background:
            "linear-gradient(to bottom left, transparent 49.5%, rgba(212,175,55,0.07) 50%)",
        }}
      />

      {/* Radial glow at funnel tip */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)" }}
      />

      <div
        className="relative border-t"
        style={{ borderColor: "rgba(212,175,55,0.12)" }}
      >
        {/* Thin gold separator line that funnels */}
        <svg
          aria-hidden
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full"
          height="48"
        >
          <line
            x1="0" y1="0"
            x2="600" y2="48"
            stroke="rgba(212,175,55,0.25)" strokeWidth="1"
          />
          <line
            x1="1200" y1="0"
            x2="600" y2="48"
            stroke="rgba(212,175,55,0.25)" strokeWidth="1"
          />
          <circle cx="600" cy="48" r="3" fill="rgba(212,175,55,0.6)" />
        </svg>

        <div className="container mx-auto px-4 pt-20 pb-10 flex flex-col items-center text-center gap-8">

          {/* Logo — large, centrepiece */}
          <Image
            src="/images/logo.png"
            alt="HSH"
            width={88}
            height={88}
            className="h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.35)]"
          />

          {/* Name + tagline */}
          <div className="flex flex-col items-center gap-1.5">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              حسن شاهمرادی
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              طراح سایت و استراتژیست رشد دیجیتال
            </p>
          </div>

          {/* Contact buttons */}
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
              className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition hover:bg-gold/10 hover:-translate-y-0.5 active:translate-y-0"
              style={{ borderColor: "rgba(212,175,55,0.35)", color: "rgba(212,175,55,0.9)" }}
            >
              <Phone className="h-4 w-4" />
              ۰۹۱۲ ۰۸۷ ۰۰۹۵
            </a>
          </div>

          {/* Divider */}
          <div
            className="w-24 h-px"
            style={{ background: "rgba(212,175,55,0.2)" }}
          />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60 leading-relaxed pb-2">
            © ۱۴۰۴ — تمامی حقوق محفوظ است.
            <span className="mx-2 opacity-40">·</span>
            طراحی و اجرا توسط حسن شاهمرادی
          </p>

        </div>
      </div>
    </footer>
  );
}
