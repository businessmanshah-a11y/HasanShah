"use client";

import { useState } from "react";
import {
  X,
  Sparkles,
  Rocket,
  CheckCircle2,
  Copy,
  Check,
  FolderTree,
  Terminal,
  Shield,
  Palette,
  ExternalLink,
  Crown,
  ChevronRight,
  ArrowLeft,
  Briefcase,
  Download,
  AlertTriangle,
  Flame,
  FileCode,
} from "lucide-react";
import { playClickSound, playSuccessChime, playLevelUpFanfare } from "../utils/soundEffects";

interface FirstRealProjectBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectComplete: (earnedXp: number, badgeId: string) => void;
}

export default function FirstRealProjectBuilderModal({
  isOpen,
  onClose,
  onProjectComplete,
}: FirstRealProjectBuilderModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    playClickSound();
    setTimeout(() => {
      setCopiedKey((curr) => (curr === key ? null : curr));
    }, 2000);
  };

  const handleNextStep = () => {
    playClickSound();
    if (currentStep < 5) {
      const next = (currentStep + 1) as 1 | 2 | 3 | 4 | 5;
      setCurrentStep(next);
      if (next === 5 && !isCompleted) {
        setIsCompleted(true);
        playLevelUpFanfare();
        onProjectComplete(300, "badge-autonomous-builder");
      }
    }
  };

  const handlePrevStep = () => {
    playClickSound();
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as 1 | 2 | 3 | 4 | 5);
    }
  };

  // ── Production-Ready Prompts for the 3 Phases ──

  const promptPhase1 = `[ROLE]: Senior WordPress Plugin Architect & Clean Code Specialist.
[CONTEXT]: We are building a high-performance, lightweight WordPress announcement bar plugin for production.
[TARGET FILE]: wp-content/mu-plugins/hs-smart-banner.php
[TASK]:
Write the complete PHP plugin file header and register an action hook to render the banner markup immediately after <body> opens using the "wp_body_open" action hook. If "wp_body_open" is not supported by the theme, fallback to "wp_footer".
Wrap everything in a unique namespace or check "if (!function_exists('hs_render_announcement_banner'))".
[NEGATIVE CONSTRAINTS]:
- Do NOT enqueue external heavy libraries (no jQuery, no bootstrap).
- Do NOT modify any core WordPress files or theme files.
- Ensure all text output is escaped using esc_html() and esc_attr().
[OUTPUT FORMAT]:
Return only the complete, safe PHP code with concise docblocks.`;

  const promptPhase2 = `[ROLE]: Senior Frontend UI/UX Architect for WordPress.
[CONTEXT]: Continuing the "hs-smart-banner.php" mu-plugin. We need luxury, non-intrusive CSS styles and responsive layout.
[TARGET FILE]: Inside hs-smart-banner.php via a dedicated "wp_enqueue_scripts" or inline style hook.
[TASK]:
Generate the styles for the banner:
1. Glassmorphism dark & gold aesthetic (background: rgba(10, 14, 26, 0.95), border-bottom: 1px solid rgba(245, 158, 11, 0.35), text: #F3F4F6).
2. A subtle gold CTA button (e.g. "مشاهده تخفیف ویژه") and a smooth close "×" button on the left.
3. Zero layout shift (CLS = 0) with a smooth slide-down animation.
4. Mobile-first responsive design ensuring the button and text stack neatly on screens under 640px.
[NEGATIVE CONSTRAINTS]:
- Do NOT use !important on generic HTML elements.
- Prefix all CSS classes strictly with "hs-banner-".
- Do NOT interfere with fixed or sticky navigation headers.`;

  const promptPhase3 = `[ROLE]: WordPress Security & State Management Engineer.
[CONTEXT]: Continuing "hs-smart-banner.php". We need client-side dismiss persistence without database overhead.
[TASK]:
Add lightweight vanilla JavaScript (under 30 lines) directly hooked to "wp_footer":
1. When the user clicks the close button (".hs-banner-close"), smoothly fade out the banner and set a localStorage item: "hs_banner_dismissed_until = Date.now() + 86400000" (hidden for 24 hours).
2. On page load, if "hs_banner_dismissed_until" is still active in localStorage, prevent the banner from rendering or keep it display: none instantly.
3. Sanitize inputs and ensure no console errors.
[NEGATIVE CONSTRAINTS]:
- Vanilla JavaScript only, zero jQuery dependency.
- Self-contained in an IIFE: (function() { ... })();.`;

  // Complete Source Code for Step 5 One-Click Download/Copy
  const fullSourceCode = `<?php
/**
 * Plugin Name: HS Smart Golden Announcement Banner
 * Description: افزونه اختصاصی نوار اعلان هوشمند و پیشنهاد ویژه با معماری سبک وایب‌کدینگ و لود زیر ۱۰ میلی‌ثانیه.
 * Version: 1.0.0
 * Author: Hasan Shah Vibe Coding Architecture
 * License: GPL-2.0+
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function hs_render_smart_announcement_banner() {
    // Check if dismissed via cookie or let frontend JS handle it
    ?>
    <div id="hs-smart-announcement-banner" class="hs-banner-wrapper" style="display: none;" dir="rtl">
        <div class="hs-banner-container">
            <div class="hs-banner-content">
                <span class="hs-banner-badge">پیشنهاد طلایی</span>
                <span class="hs-banner-text">تخفیف ویژه دورهمی حضوری وایب‌کدینگ با ظرفیت محدود!</span>
            </div>
            <div class="hs-banner-actions">
                <a href="/vibe-coding" class="hs-banner-btn">ثبت‌نام سریع &larr;</a>
                <button type="button" class="hs-banner-close" aria-label="بستن اعلان">&times;</button>
            </div>
        </div>
    </div>
    <?php
}
add_action('wp_body_open', 'hs_render_smart_announcement_banner', 5);

function hs_enqueue_smart_banner_assets() {
    ?>
    <style id="hs-smart-banner-styles">
        .hs-banner-wrapper {
            width: 100%;
            background: linear-gradient(90deg, #070A12 0%, #111827 50%, #070A12 100%);
            border-bottom: 1px solid rgba(245, 158, 11, 0.35);
            color: #F3F4F6;
            font-family: inherit;
            position: relative;
            z-index: 99999;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
            animation: hsBannerSlideDown 0.3s ease-out forwards;
        }
        @keyframes hsBannerSlideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .hs-banner-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 10px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            font-size: 13px;
        }
        .hs-banner-content {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
        }
        .hs-banner-badge {
            background: rgba(245, 158, 11, 0.2);
            color: #FBBF24;
            border: 1px solid rgba(245, 158, 11, 0.4);
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 11px;
            font-weight: 700;
        }
        .hs-banner-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .hs-banner-btn {
            background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
            color: #000000 !important;
            padding: 4px 12px;
            border-radius: 8px;
            font-weight: 800;
            font-size: 12px;
            text-decoration: none;
            transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .hs-banner-btn:hover {
            opacity: 0.92;
            transform: translateY(-1px);
        }
        .hs-banner-close {
            background: transparent;
            border: none;
            color: #9CA3AF;
            font-size: 20px;
            cursor: pointer;
            line-height: 1;
            padding: 2px 6px;
            border-radius: 4px;
            transition: color 0.15s;
        }
        .hs-banner-close:hover {
            color: #FFFFFF;
        }
        @media (max-width: 640px) {
            .hs-banner-container {
                flex-direction: column;
                text-align: center;
                gap: 8px;
            }
        }
    </style>
    <script id="hs-smart-banner-script">
        (function() {
            var STORAGE_KEY = 'hs_banner_dismissed_until';
            var dismissedUntil = localStorage.getItem(STORAGE_KEY);
            var now = Date.now();
            var banner = document.getElementById('hs-smart-announcement-banner');
            
            if (banner && (!dismissedUntil || now > parseInt(dismissedUntil, 10))) {
                banner.style.display = 'block';
                var closeBtn = banner.querySelector('.hs-banner-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', function() {
                        banner.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                        banner.style.opacity = '0';
                        banner.style.transform = 'translateY(-100%)';
                        setTimeout(function() {
                            banner.style.display = 'none';
                        }, 250);
                        localStorage.setItem(STORAGE_KEY, (Date.now() + 86400000).toString()); // 24 hours
                    });
                }
            }
        })();
    </script>
    <?php
}
add_action('wp_footer', 'hs_enqueue_smart_banner_assets', 99);
`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="first-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 md:p-6 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-amber-400/50 bg-[#070A12] p-5 md:p-8 text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Glow Effects */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #F59E0B 0%, #10B981 70%, transparent 100%)",
          }}
        />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30 shrink-0">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-3.5 w-3.5" />
                کارگاه ۱۰ دقیقه‌ای ساخت اولین افزونه واقعی
              </div>
              <h2 id="first-project-title" className="text-lg md:text-2xl font-black text-foreground">
                پروژه عملی ورود به بازار کار: ساخت افزونه اختصاصی نوار اعلان طلایی
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-all"
            aria-label="بستن پنجره"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div className="my-5">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-amber-300">
              مرحله {currentStep} از ۵:{" "}
              {currentStep === 1 && "ایجاد فایل در پوشه استاندارد mu-plugins"}
              {currentStep === 2 && "پرامپت ۵ لایه‌ای ثبت هوک wp_body_open"}
              {currentStep === 3 && "پرامپت دیزاین نئومورفیک بدون پرش CLS"}
              {currentStep === 4 && "پرامپت ذخیره وضعیت کوکی بدون باگ"}
              {currentStep === 5 && "فارغ‌التحصیلی: آقا یاد گرفتی! برو شروع کن به کار کردن"}
            </span>
            <span className="font-mono text-muted-foreground">
              {Math.round((currentStep / 5) * 100)}% تکمیل
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Panels */}
        <div className="space-y-4 min-h-[380px]">
          {/* STEP 1: Creating the file in mu-plugins */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs md:text-sm text-amber-100 leading-relaxed">
                <strong>💡 چرا mu-plugins؟</strong> در توسعه حرفه‌ای وردپرس، افزونه‌های حیاتی را در پوشه <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300" dir="ltr">wp-content/mu-plugins</code> می‌گذارند؛ چون هرگز با تغییر قالب پاک نمی‌شوند و هیچ کاربری نمی‌تواند تصادفاً آن‌ها را غیرفعال کند!
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/60 p-5 space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                  <FolderTree className="h-4 w-4 text-amber-400" />
                  <span>دستورالعمل گام اول در ادیتور Cursor یا سیستم شما:</span>
                </div>

                <ol className="space-y-2.5 text-xs text-muted-foreground list-decimal list-inside leading-relaxed pr-2">
                  <li>
                    نرم‌افزار <strong>LocalWP</strong> را باز کن و روی نام سایت کلیک کن و گزینه <strong>Go to Site Folder</strong> را بزن.
                  </li>
                  <li>
                    به مسیر <code className="font-mono text-amber-300 bg-white/5 px-2 py-0.5 rounded" dir="ltr">app/public/wp-content/</code> برو.
                  </li>
                  <li>
                    اگر پوشه‌ای به نام <code className="font-mono text-amber-300 bg-white/5 px-2 py-0.5 rounded" dir="ltr">mu-plugins</code> ندیدی، یک پوشه جدید با این نام بساز.
                  </li>
                  <li>
                    داخل آن یک فایل جدید با نام <code className="font-mono text-emerald-300 bg-white/5 px-2 py-0.5 rounded font-bold" dir="ltr">hs-smart-banner.php</code> ایجاد کن.
                  </li>
                </ol>

                <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                  <span className="text-muted-foreground font-mono">نام دقیق فایل: hs-smart-banner.php</span>
                  <button
                    type="button"
                    onClick={() => handleCopy("hs-smart-banner.php", "step1-filename")}
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold"
                  >
                    {copiedKey === "step1-filename" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedKey === "step1-filename" ? "کپی شد!" : "کپی نام فایل"}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Phase 1 Prompt */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  این پرامپت را کپی کن و در پنجره Cursor Composer (کلیدهای Ctrl+I) پیست کن:
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(promptPhase1, "prompt-p1")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400/15 border border-amber-400/40 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400/25 transition-all shadow-sm"
                >
                  {copiedKey === "prompt-p1" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedKey === "prompt-p1" ? "کپی شد!" : "کپی پرامپت مرحله ۱"}</span>
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/80 p-4 font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto" dir="ltr">
                {promptPhase1}
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  <strong>چرا این پرامپت عالیه؟</strong> هوک wp_body_open نوار اعلان را در بالاترین نقطه صفحه بدون تداخل با منوی پیشخوان ثبت می‌کند.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: Phase 2 UI Styling Prompt */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  حالا نوبت دیزاین و استایل شیشه‌ای طلایی است؛ این پرامپت را در ادیتور بفرست:
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(promptPhase2, "prompt-p2")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400/15 border border-amber-400/40 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400/25 transition-all shadow-sm"
                >
                  {copiedKey === "prompt-p2" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedKey === "prompt-p2" ? "کپی شد!" : "کپی پرامپت استایل و دیزاین"}</span>
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/80 p-4 font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto" dir="ltr">
                {promptPhase2}
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3 text-xs text-cyan-300 flex items-center gap-2">
                <Palette className="h-4 w-4 shrink-0 text-cyan-400" />
                <span>
                  <strong>شروط سلبی:</strong> با الزام ادیتور به پیشوند اختصاصی <code className="font-mono text-amber-300" dir="ltr">hs-banner-</code> هیچ تداخلی با قالب رخ نخواهد داد.
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: Phase 3 State Persistence */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  گام آخر: ذخیره وضعیت در مرورگر تا پس از بستن نوار، مزاحم کاربر نشود:
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(promptPhase3, "prompt-p3")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400/15 border border-amber-400/40 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400/25 transition-all shadow-sm"
                >
                  {copiedKey === "prompt-p3" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedKey === "prompt-p3" ? "کپی شد!" : "کپی پرامپت ذخیره وضعیت"}</span>
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/80 p-4 font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto" dir="ltr">
                {promptPhase3}
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-3 text-xs text-purple-300 flex items-center gap-2">
                <Shield className="h-4 w-4 shrink-0 text-purple-400" />
                <span>
                  <strong>عملکرد سبک:</strong> جاوااسکریپت خالص بدون کتابخانه‌های سنگین و لود در زیر ۱۰ میلی‌ثانیه.
                </span>
              </div>
            </div>
          )}

          {/* STEP 5: Graduation Climax & Freelance Tool Kit */}
          {currentStep === 5 && (
            <div className="space-y-5 animate-in fade-in duration-300">
              {/* Grand Climax Banner */}
              <div className="rounded-3xl border border-amber-400/50 bg-gradient-to-r from-amber-400/25 via-yellow-400/15 to-amber-500/25 p-6 text-center space-y-3 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/30 px-4 py-1 text-xs font-black text-amber-200">
                  <Crown className="h-4 w-4 text-amber-300" />
                  صدور مجوز رسمی شروع به کار و پروژه‌گیری
                </div>

                <h3 className="text-xl md:text-3xl font-black text-foreground">
                  🎉 «آقا یاد گرفتی! برو انجام بده، شروع کن به کار کردن!»
                </h3>

                <p className="max-w-2xl mx-auto text-xs md:text-sm text-foreground/90 leading-relaxed font-medium">
                  تبریک می‌گوییم! شما با متودولوژی وایب‌کدینگ حسن شاهمرادی، اولین افزونه تجاری واقعی خود را بدون دستکاری هسته و با رعایت کامل شروط سلبی و امنیت در پوشه <code className="font-mono text-amber-300 bg-black/50 px-2 py-0.5 rounded" dir="ltr">mu-plugins</code> ساختید. شما دیگر نیازی به تئوری ندارید؛ شما یک <strong>معمار خودکفای وردپرس</strong> هستید!
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <span className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1.5 text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" />
                    +۳۰۰ XP به پروفایل شما اضافه شد
                  </span>
                  <span className="rounded-xl bg-amber-400/20 border border-amber-400/40 px-3.5 py-1.5 text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Crown className="h-4 w-4" />
                    نشان «معمار خودکفا» آنلاک شد
                  </span>
                </div>
              </div>

              {/* Freelancer Launch Kit: Delivery Checklist & Pricing Prompt */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 10-Point Client Delivery Checklist */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                    <Briefcase className="h-4 w-4 text-amber-400" />
                    <span>چک‌لیست ۱۰ تایی تحویل پروژه به کارفرما:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside leading-relaxed pr-1">
                    <li>عدم وجود خطا در فایل <code className="font-mono text-[11px] text-amber-300" dir="ltr">debug.log</code> وردپرس.</li>
                    <li>تست عملکرد صحیح در مرورگرهای موبایل و تبلت.</li>
                    <li>تایید عدم تداخل با هدر و منوی چسبان قالب کارفرما.</li>
                    <li>امتیاز عملکرد بالای ۹۰ در تست سرعت لایت‌هاوس.</li>
                    <li>عدم پاک شدن کد در زمان آپدیت قالب (تعبیه در mu-plugins).</li>
                  </ul>
                </div>

                {/* Complete Source Code Download / One-Click Copy */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-bold text-sm text-foreground mb-1">
                      <FileCode className="h-4 w-4 text-emerald-400" />
                      <span>کد کامل آماده این افزونه (یکپارچه):</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      می‌توانی کل سورس‌کد نهایی این پروژه را در یک فایل کپی کنی و مستقیماً در پروژه‌های مشتریانت به کار بگیری.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(fullSourceCode, "full-source-code")}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400/15 border border-emerald-400/40 py-2.5 px-4 text-xs font-black text-emerald-300 hover:bg-emerald-400/25 transition-all shadow-md shadow-emerald-500/10"
                  >
                    {copiedKey === "full-source-code" ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span>کد کامل در کلیپ‌بورد کپی شد!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>کپی یکپارچه فایل کامل (hs-smart-banner.php)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Navigation Buttons */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            {currentStep < 5 ? `مرحله ${currentStep} از ۵` : "پروژه با موفقیت تکمیل شد! 🚀"}
          </div>

          <div className="flex items-center gap-2">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2 rounded-xl border border-white/10 text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
              >
                مرحله قبلی
              </button>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-1.5 px-6 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-black hover:opacity-95 transition-all shadow-md shadow-amber-500/20"
              >
                <span>مرحله بعدی</span>
                <ChevronRight className="h-4 w-4 rotate-180" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-6 py-2 rounded-xl bg-emerald-400 text-black text-xs font-black hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
              >
                <Check className="h-4 w-4" />
                <span>شروع به کار و بستن کارگاه</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
