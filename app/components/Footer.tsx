"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "./Icons";
import { useI18n } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer id="contact" className="relative overflow-hidden bg-surface/30">

      {/* ── جداکننده: خط طلایی + قیف تزئینی در بالا ── */}
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
      <div className="flex flex-col items-center text-center gap-6 px-6 pt-8 pb-8">

        {/* لوگو — ۱.۷× */}
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo.webp`}
          alt={t.brand.name}
          width={190}
          height={190}
          className="h-[190px] w-[190px] object-contain"
          style={{ filter: "drop-shadow(0 0 24px oklch(0.83 0.105 72 / 0.35))" }}
        />

        {/* اسم و توضیح */}
        <div className="flex flex-col items-center gap-1.5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t.brand.name}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            {t.brand.role}
          </p>
        </div>

        {/* لینک‌های راهبری فوتر */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
          <Link href="/" prefetch={false} className="hover:text-gold transition-colors">صفحه اصلی</Link>
          <Link href="/about/" prefetch={false} className="text-foreground hover:text-gold transition-colors font-bold">درباره من (مسیر و رزومه)</Link>
          <Link href="/vibe-coding" prefetch={false} className="hover:text-gold transition-colors">آموزش وایب‌کدینگ</Link>
          <Link href="/blog/" prefetch={false} className="hover:text-gold transition-colors">وبلاگ تخصصی</Link>
          <Link href="/contact/" prefetch={false} className="hover:text-gold transition-colors">تماس با من</Link>
        </div>

        {/* شبکه‌های اجتماعی و دکمه‌های ارتباطی */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          <a
            href="https://t.me/shahbusinessman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-xs sm:text-sm font-bold text-gold-foreground shadow-gold hover:-translate-y-0.5 active:translate-y-0 transition-transform"
          >
            <Send className="h-4 w-4" />
            {t.footer.telegram}
          </a>

          <a
            href="https://www.instagram.com/shahbusinessman/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-pink-400 hover:bg-pink-500/20 hover:border-pink-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <InstagramIcon className="h-4 w-4" />
            <span>اینستاگرام</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hasanshahmoradi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span>لینکدین</span>
          </a>

          <a
            href="tel:09120870095"
            dir="ltr"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-gold hover:bg-gold/10 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <Phone className="h-4 w-4" />
            {t.footer.phone}
          </a>
        </div>

        {/* خط جداکننده */}
        <div className="gold-divider w-28" />

        {/* کپی‌رایت */}
        <p className="text-xs text-muted-foreground/55">
          {t.footer.rights}
          <span className="mx-2 opacity-40">·</span>
          {t.footer.credit}
        </p>

      </div>
    </footer>
  );
}
