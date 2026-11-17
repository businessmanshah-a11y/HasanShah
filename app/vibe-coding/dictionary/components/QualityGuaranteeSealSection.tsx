"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Flame,
  Terminal,
  FileCode2,
  Layers,
  ArrowLeft,
  CheckCheck,
} from "lucide-react";
import { playClickSound } from "../utils/soundEffects";

export default function QualityGuaranteeSealSection() {
  const [isCopied, setIsCopied] = useState(false);

  const guaranteeCode = "HS-VIBE-WP-GUARANTEE-2024";

  const handleCopyGuarantee = () => {
    const text = `ضمانت‌نامه رسمی ۱۰۰٪ کیفیت و اصالت معماری وایب‌کدینگ وردپرس حسن شاهمرادی:
تمامی پرامپت‌های این دانشنامه بر اساس متودولوژی ۵ لایه‌ای ضدخرابی طراحی شده و روی وردپرس ۶.۷ و PHP 8.2 تست انسانی شده‌اند.
کد اعتبارسنجی: ${guaranteeCode}
مرجع: https://hasanshah.ir/vibe-coding/dictionary`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    playClickSound();
    setTimeout(() => setIsCopied(false), 2500);
  };

  const guaranteePillars = [
    {
      id: 1,
      title: "۱. ضمانت پرامپت‌های ضدخرابی (Zero Hallucination)",
      description:
        "تمام پرامپت‌ها دارای ۵ لایه مهندسی، شروط سلبی سخت‌گیرانه و بسته‌بندی در mu-plugins هستند تا هوش مصنوعی کدهای سایت را نابود نکند.",
      icon: "ShieldCheck",
      badgeText: "تست‌شده روی WP 6.7",
    },
    {
      id: 2,
      title: "۲. ضمانت تفهیم مفهومی برای افراد صفرِ صفر (Zero Jargon)",
      description:
        "هیچ مفهومی بدون تمثیل ملموس روزمره، تلفظ آوایی فارسی و معرفی تله مرگبار رها نشده است. بدون دانش کدنویسی هم همه‌چیز را مثل آب خوردن می‌فهمید.",
      icon: "Sparkles",
      badgeText: "به زبان خودمانی",
    },
    {
      id: 3,
      title: "۳. ضمانت راستی‌آزمایی در ۳۰ ثانیه (Instant Verification)",
      description:
        "برای تک‌تک ۳۷ اصطلاح، سناریوی راستی‌آزمایی در ۳۰ ثانیه بدون ابزارهای پیچیده ارائه شده تا قبل از انتشار در پروداکشن، از درستی کد مطمئن شوید.",
      icon: "CheckCircle2",
      badgeText: "تست بدون باگ",
    },
    {
      id: 4,
      title: "۴. ضمانت ورود به بازار کار و ساخت محصول (Production Ready)",
      description:
        "با کارگاه عملی ساخت افزونه در mu-plugins، چک‌لیست ۱۰ تایی تحویل به کارفرما و پاسپورت لینکدین، بلافاصله آماده گرفتن پروژه و ساخت محصولات تجاری هستید.",
      icon: "Award",
      badgeText: "آماده پروژه‌گیری",
    },
  ];

  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-b from-surface-elevated/90 via-[#070A12] to-surface/80 p-6 md:p-10 backdrop-blur shadow-gold">
        {/* Ambient Top Radial Glow */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-80 w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #F59E0B 0%, #10B981 60%, transparent 100%)",
          }}
        />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6 text-center md:text-right">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border-2 border-amber-400/60 bg-gradient-to-br from-amber-400/30 to-amber-600/20 text-amber-300 shadow-xl shadow-amber-500/20">
              <ShieldCheck className="h-9 w-9 text-amber-400" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-300 mb-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                سند رسمی اصالت و تضمین کیفیت
              </div>
              <h2 className="text-xl md:text-3xl font-black text-foreground">
                ضمانت ۱۰۰٪ اصالت و کیفیت معماری وایب‌کدینگ حسن شاهمرادی
              </h2>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                این دانشنامه یک گردآوری متن ساده نیست؛ یک استاندارد مهندسی پروداکشن است که برای خلق محصولات با ارزش واقعی و بدون اصطکاک ضمانت شده است.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopyGuarantee}
              className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/40 bg-amber-400/10 px-5 py-3 text-xs md:text-sm font-bold text-amber-300 hover:bg-amber-400/20 transition-all shadow-sm active:scale-95"
            >
              {isCopied ? (
                <>
                  <CheckCheck className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-300">ضمانت‌نامه کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-amber-400" />
                  <span>کپی متن ضمانت‌نامه رسمی</span>
                </>
              )}
            </button>

            <span className="font-mono text-xs text-muted-foreground bg-white/5 border border-white/10 px-3 py-3 rounded-2xl">
              کد اعتبارسنجی: <strong className="text-amber-400">{guaranteeCode}</strong>
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {guaranteePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-amber-400/50 hover:bg-white/[0.04] transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                    {pillar.badgeText}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-amber-400 group-hover:scale-110 transition-transform">
                    {pillar.id === 1 && <ShieldCheck className="h-4 w-4" />}
                    {pillar.id === 2 && <Sparkles className="h-4 w-4" />}
                    {pillar.id === 3 && <CheckCircle2 className="h-4 w-4" />}
                    {pillar.id === 4 && <Award className="h-4 w-4" />}
                  </div>
                </div>

                <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-amber-300 transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>استاندارد تأییدشده ✓</span>
                <span className="text-emerald-400 font-bold">100% Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real-World Proof & Strategic Cross-Links */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-muted-foreground">
            <span className="font-bold text-foreground">اثبات در دنیای واقعی:</span>
            <Link
              href="/blog/ladycoin-ecommerce-ai-wordpress-case-study"
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors"
            >
              <span>مشاهده کیس‌استادی لیدی‌کوین با وایب‌کدینگ</span>
              <ArrowLeft className="h-3 w-3" />
            </Link>
            <span className="hidden sm:inline text-white/20">•</span>
            <Link
              href="/vibe-coding/series/faktor-dadash"
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors"
            >
              <span>مشاهده اجرای این پرامپت‌ها در سریال فاکتور داداش</span>
              <ArrowLeft className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-muted-foreground">امضای معمار:</span>
            <span className="font-black text-amber-400">حسن شاهمرادی</span>
          </div>
        </div>
      </div>
    </section>
  );
}
