"use client";

import { useState } from "react";
import {
  X,
  Compass,
  Sparkles,
  ExternalLink,
  Download,
  Terminal,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ChevronRight,
  Code2,
  Shield,
  Layers,
  Zap,
  Wrench,
  BookOpen,
  Rocket,
  Lightbulb,
} from "lucide-react";
import { playClickSound } from "../utils/soundEffects";

interface ZeroToHeroGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartFirstProject: () => void;
  onOpenRulesDownload: () => void;
}

export default function ZeroToHeroGuideModal({
  isOpen,
  onClose,
  onStartFirstProject,
  onOpenRulesDownload,
}: ZeroToHeroGuideModalProps) {
  const [activeStep, setActiveStep] = useState<0 | 1 | 2 | 3>(0);

  if (!isOpen) return null;

  const handleStepClick = (step: 0 | 1 | 2 | 3) => {
    playClickSound();
    setActiveStep(step);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="zero-to-hero-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-6 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-emerald-500/40 bg-[#070A12] p-5 md:p-8 text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Ambient Top Glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #10B981 0%, #F59E0B 70%, transparent 100%)",
          }}
        />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <Sparkles className="h-3.5 w-3.5" />
                راهنمای شروع سریع افراد صفرِ صفر
              </div>
              <h2 id="zero-to-hero-title" className="text-lg md:text-2xl font-black text-foreground">
                نقشه راه نجات‌بخش: از صفر مطلق تا ساخت اولین محصول وردپرس
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

        {/* Step Navigation Pills */}
        <div className="my-5 grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { id: 0, title: "۱. از کجا شروع کنم؟", subtitle: "ستاپ ابزارها در ۵ دقیقه" },
            { id: 1, title: "۲. مسیر چیه؟", subtitle: "تغییر مدل ذهنی کارگردان" },
            { id: 2, title: "۳. چیا رو باید طی کنم؟", subtitle: "۴ ایستگاه طلایی" },
            { id: 3, title: "۴. چطور شروع به کار کنم؟", subtitle: "ورود به بازار و کارگاه عملی" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleStepClick(item.id as 0 | 1 | 2 | 3)}
              className={`p-3 rounded-2xl text-right border transition-all ${
                activeStep === item.id
                  ? "border-emerald-400/60 bg-emerald-400/15 text-foreground shadow-lg shadow-emerald-500/10"
                  : "border-white/5 bg-white/[0.02] text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              <div className="font-bold text-xs md:text-sm text-emerald-300">{item.title}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5 truncate">{item.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Step Content Panels */}
        <div className="space-y-4 min-h-[360px]">
          {/* STEP 0: Where do I start? Tool Setup */}
          {activeStep === 0 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200 text-xs md:text-sm leading-relaxed">
                <strong>💡 اگر صفرِ صفری و هیچی نمی‌دونی:</strong> نیاز به هیچ دانش قبلی از کدنویسی و نیاز به خرید هیچ هاست یا دامنه‌ای نداری! فقط این ۳ ابزار رایگان رو روی لپ‌تاپت آماده کن:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Tool 1: LocalWP */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-amber-400/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                        قدم اول • کاملاً رایگان
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1">
                      ۱. نرم‌افزار LocalWP
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      یک سایت تستی وردپرس کامل و واقعی روی کامپیوترت می‌سازه بدون اینکه یک ریال خرج هاست یا دامنه بکنی.
                    </p>
                  </div>
                  <a
                    href="https://localwp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-400/15 border border-amber-400/30 py-2 px-3 text-xs font-bold text-amber-300 hover:bg-amber-400/25 transition-all"
                  >
                    <span>دانلود LocalWP</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Tool 2: Cursor / Windsurf */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-cyan-400/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="rounded bg-cyan-400/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                        قدم دوم • ادیتور هوشمند
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1">
                      ۲. ادیتور Cursor یا Windsurf
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      محیط کدنویسی مجهز به هوش مصنوعی Claude 3.5 Sonnet که با فشردن Ctrl+I یا Ctrl+K کدهای وردپرس رو برات تولید می‌کنه.
                    </p>
                  </div>
                  <a
                    href="https://cursor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-cyan-400/15 border border-cyan-400/30 py-2 px-3 text-xs font-bold text-cyan-300 hover:bg-cyan-400/25 transition-all"
                  >
                    <span>دانلود Cursor</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Tool 3: .cursorrules */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-emerald-400/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="rounded bg-emerald-400/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                        قدم سوم • مغز ضدباگ
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1">
                      ۳. فایل قوانین .cursorrules
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      فایل آماده حسن شاهمرادی که در پوشه پروژه می‌اندازی تا ادیتور شروط سلبی و استانداردهای وردپرس رو اجباراً رعایت کنه.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      playClickSound();
                      onOpenRulesDownload();
                    }}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-400/15 border border-emerald-400/30 py-2 px-3 text-xs font-bold text-emerald-300 hover:bg-emerald-400/25 transition-all"
                  >
                    <Download className="h-3 w-3" />
                    <span>دانلود فایل قوانین آماده</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1: What is the roadmap? Mindset */}
          {activeStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-amber-100 text-xs md:text-sm leading-relaxed">
                <div className="flex items-center gap-2 font-black text-amber-300 text-sm md:text-base mb-1.5">
                  <Lightbulb className="h-5 w-5 shrink-0 text-amber-400" />
                  <span>مدل ذهنی وایب‌کدینگ: تو تایپیست کد نیستی، کارگردان صحنه‌ای!</span>
                </div>
                <p className="leading-loose">
                  در روش سنتی، یک نفر باید ۶ ماه وقت می‌گذاشت تا سینتکس خشک زبان PHP، نقطه‌ویرگول‌ها و توابع را حفظ کند. اما در وایب‌کدینگ، تو فقط «نام قطعات وردپرس و معماری» را بلد می‌شوی و مثل یک کارگردان باهوش به ادیتور هوش مصنوعی دیکته می‌کنی که دقیقاً چه چیزی بسازد و چه کارهایی را هرگز انجام ندهد.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-4 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-rose-300 text-sm">
                    <XCircle className="h-4 w-4" />
                    <span>اشتباه مرگبار مبتدی‌ها در کدنویسی:</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    می‌روند خط‌به‌خط کد می‌نویسند یا یک خط پرامپت خام مثل «یک فروشگاه برام بساز» به چت‌بات می‌دهند. نتیجه؟ کدهای ناامن، خطای صفحه سفید وردپرس و سردرگمی مطلق!
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-300 text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>فرمول طلایی وایب‌کدرهای حرفه‌ای:</span>
                  </div>
                  <p className="text-foreground/90 leading-relaxed">
                    پرامپت ۵ لایه‌ای استاندارد (نقش + فایل هدف + وظیفه + شروط منفی + نحوه تست) را از این دانشنامه کپی می‌کنند و در کمتر از چند دقیقه محصول بدون باگ تحویل می‌گیرند.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: What stages to traverse? */}
          {activeStep === 2 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <p className="text-xs text-muted-foreground">
                برای اینکه بدون ترس بر پروژه مسلط شوی، مسیر دانشنامه به ۴ ایستگاه داستانی تقسیم شده است:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-amber-400/30 bg-white/[0.02] p-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-400/20 text-amber-300 text-xs font-black">۱</span>
                    <h4 className="font-bold text-xs md:text-sm text-foreground">ایستگاه ماتریکس پرامپت و دیزاین</h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed pr-8">
                    یادگیری پنجره بافت (Context Window)، فایل قوانین و تایپوگرافی بدون پرش چیدمان (CLS).
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-400/30 bg-white/[0.02] p-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-300 text-xs font-black">۲</span>
                    <h4 className="font-bold text-xs md:text-sm text-foreground">ایستگاه کیمیاگری بلاک و هوک‌ها</h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed pr-8">
                    پریزهای وردپرس (Action Hooks & Filters) و ساخت افزونه‌های سبک در پوشه `mu-plugins`.
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-400/30 bg-white/[0.02] p-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-400/20 text-rose-300 text-xs font-black">۳</span>
                    <h4 className="font-bold text-xs md:text-sm text-foreground">ایستگاه دژ امنیت و دیتابیس</h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed pr-8">
                    اعداد یک‌بارمصرف امنیتی (Nonce)، ذخیره‌سازی موقت با Transients و وب‌سرویس REST API.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/30 bg-white/[0.02] p-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300 text-xs font-black">۴</span>
                    <h4 className="font-bold text-xs md:text-sm text-foreground">ایستگاه انتشار، تست و تحویل کارفرما</h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed pr-8">
                    راستی‌آزمایی در ۳۰ ثانیه، دیباگ خطای ۵۰۰ با WP_DEBUG و چک‌لیست تحویل محصول بدون باگ.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: How to reach the point of "Go Build"? */}
          {activeStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-400/20 via-amber-400/10 to-yellow-500/20 p-6 text-center space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300">
                  <Rocket className="h-3.5 w-3.5" />
                  پایان تئوری • آغاز خلق محصول و کسب درآمد
                </div>

                <h3 className="text-lg md:text-2xl font-black text-foreground">
                  «آقا یاد گرفتی! حالا وقتشه بری انجام بدی و شروع کنی به کار کردن.»
                </h3>

                <p className="max-w-xl mx-auto text-xs md:text-sm text-muted-foreground leading-relaxed">
                  خواندن اصطلاحات به‌تنهایی فایده‌ای ندارد مگر اینکه با دست‌های خودت یک قابلیت زنده در وردپرس بسازی! در کارگاه ۱۰ دقیقه‌ای زیر، با ۳ پرامپت آماده، اولین افزونه تجاری خودت رو می‌سازی و کیت تحویل پروژه به کارفرما رو تحویل می‌گیری.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      playClickSound();
                      onClose();
                      onStartFirstProject();
                    }}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 px-7 py-3.5 text-xs md:text-sm font-black text-black hover:opacity-95 shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
                  >
                    <Rocket className="h-4 w-4" />
                    <span>ورود به کارگاه ساخت اولین افزونه واقعی (۱۰ دقیقه) 🚀</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            گام {activeStep + 1} از ۴ • مسیر صفر تا صد وایب‌کدینگ وردپرس
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {activeStep > 0 && (
              <button
                type="button"
                onClick={() => handleStepClick((activeStep - 1) as 0 | 1 | 2 | 3)}
                className="px-4 py-2 rounded-xl border border-white/10 text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
              >
                مرحله قبلی
              </button>
            )}

            {activeStep < 3 ? (
              <button
                type="button"
                onClick={() => handleStepClick((activeStep + 1) as 0 | 1 | 2 | 3)}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-400 text-black text-xs font-black hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
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
                  onStartFirstProject();
                }}
                className="inline-flex items-center gap-1.5 px-6 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-black hover:opacity-95 transition-all shadow-md shadow-amber-500/20"
              >
                <Rocket className="h-4 w-4" />
                <span>شروع پروژه عملی</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
