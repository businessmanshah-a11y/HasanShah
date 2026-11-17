"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  Timer,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Award,
  Crown,
  RotateCcw,
  Sparkles,
  Play,
  Flame,
  ShieldCheck,
} from "lucide-react";
import { playClickSound, playSuccessChime, playErrorSound, playLevelUpFanfare } from "../utils/soundEffects";

interface SpeedDebugChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChallengeComplete: (earnedXp: number, badgeId?: string) => void;
}

interface SpeedScenario {
  id: number;
  crisisTitle: string;
  crisisDescription: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const speedScenarios: SpeedScenario[] = [
  {
    id: 1,
    crisisTitle: "بحران ۱: خطای صفحه سفید مرگ (WSOD) پس از ذخیره کد",
    crisisDescription: "پس از ذخیره functions.php پیشخوان سایت قفل شده و خطای Fatal error: Cannot redeclare hs_custom_func() نمایش داده می‌شود. سریع‌ترین و اصولی‌ترین اقدام چیست؟",
    options: [
      "حذف کل وردپرس و نصب مجدد از ابتدا",
      "احاطه تابع با if (!function_exists) و انتقال کد به wp-content/mu-plugins",
      "خالی کردن کش مرورگر کروم",
      "افزایش موقت رم سرور به ۶۴ گیگابایت",
    ],
    correctIndex: 1,
    explanation: "استفاده از MU-Plugin و شرط function_exists بلافاصله از تداخل توابع جلوگیری کرده و سایت را بالا می‌آورد.",
  },
  {
    id: 2,
    crisisTitle: "بحران ۲: حمله ربات‌ها و ثبت هزاران سفارش جعلی در فرم ایجکس",
    crisisDescription: "ربات‌های نفوذگر در هر دقیقه ۴۰۰۰ درخواست جعلی به admin-ajax.php ارسال می‌کنند و حجم دیتابیس در حال انفجار است. راهکار امنیتی اضطراری چیست؟",
    options: [
      "نصب افزونه آمارگیر بازدیدکنندگان",
      "اعتبارسنجی با check_ajax_referer و رد درخواست‌های بدون توکن Nonce یکبارمصرف",
      "تغییر نام دامنه سایت",
      "خاموش کردن دیتابیس MySQL برای یک ساعت",
    ],
    correctIndex: 1,
    explanation: "توکن نانس (Nonce) تضمین می‌کند فقط فرم‌های ارسالی از کاربران واقعی دارای اعتبار تایید شوند.",
  },
  {
    id: 3,
    crisisTitle: "بحران ۳: افت شدید نمره لایت‌هاوس به دلیل پرش صفحه (CLS = 0.48)",
    crisisDescription: "هنگام لود شدن لندینگ پیج، المان‌ها ۱۸۰ پیکسل پرش دارند و گوگل نمره سرعت موبایل را قرمز کرده است. چه استاندارد CSS باید رعایت شود؟",
    options: [
      "تعیین نسبت ابعاد ثابت (aspect-ratio: 16/9) و عدم انیمیت ویژگی‌های چیدمان",
      "فشرده‌سازی متن با فرمت ZIP",
      "حذف تمام تصاویر از سایت",
      "غیرفعال کردن کامل استایل‌های قالب",
    ],
    correctIndex: 0,
    explanation: "رزرو کردن فضای تصویر با aspect-ratio پرش چیدمان (CLS) را به صفر می‌رساند.",
  },
  {
    id: 4,
    crisisTitle: "بحران ۴: کرش سرور به دلیل کوئری سنگین و تکراری روی ۱۰۰ هزار پست",
    crisisDescription: "یک ابزارک آمار هر بار که کاربری صفحه اصلی را باز می‌کند کل جدول wp_posts را کوئری می‌زند و سرور داون می‌شود. راهکار چیست؟",
    options: [
      "کش کردن نتیجه کوئری با Transients API برای مدت ۶ ساعت",
      "ریستارت کردن دستی سرور هر ۱۰ دقیقه",
      "پاک کردن نصف مقالات از دیتابیس",
      "تغییر پورت وب‌سرور آپاچی",
    ],
    correctIndex: 0,
    explanation: "ترنزینت چرک‌نویس موقتی دیتابیس است و از بارگذاری مجدد کوئری‌های سنگین جلوگیری می‌کند.",
  },
  {
    id: 5,
    crisisTitle: "بحران ۵: هوش مصنوعی کدهای قبلی پروژه را حذف و بازنویسی کرد!",
    crisisDescription: "Cursor Composer برای اعمال یک دکمه ساده، کل فایل را از نو نوشت و قابلیت‌های قبلی سایت پرید! کدام لایه پرامپت مانع این فاجعه می‌شود؟",
    options: [
      "حذف ادیتور و کدنویسی دستی با نوت‌پد",
      "شروط سلبی: [NEGATIVE CONSTRAINTS]: Never rewrite entire file. Only output snippet.",
      "تکرار همان پرامپت برای بار سوم",
      "تغییر زبان برنامه‌نویسی به جاوا",
    ],
    correctIndex: 1,
    explanation: "شروط سلبی قاطعانه به مدل دستور می‌دهند به کدهای موجود دست نزند.",
  },
];

export default function SpeedDebugChallengeModal({
  isOpen,
  onClose,
  onChallengeComplete,
}: SpeedDebugChallengeModalProps) {
  const [gameState, setGameState] = useState<"intro" | "playing" | "finished">("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinishGame(correctCount);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, correctCount]);

  if (!isOpen) return null;

  const handleStartGame = () => {
    playClickSound();
    setGameState("playing");
    setCurrentIndex(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setTimeLeft(60);
  };

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return; // Prevent double clicks
    setSelectedOption(idx);

    const isCorrect = idx === speedScenarios[currentIndex].correctIndex;
    if (isCorrect) {
      playSuccessChime();
      setCorrectCount((prev) => prev + 1);
    } else {
      playErrorSound();
    }

    setTimeout(() => {
      if (currentIndex < speedScenarios.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        handleFinishGame(isCorrect ? correctCount + 1 : correctCount);
      }
    }, 600);
  };

  const handleFinishGame = (finalCorrect: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState("finished");

    if (finalCorrect >= 4) {
      playLevelUpFanfare();
      onChallengeComplete(150, "badge-speed-reflex");
    } else {
      onChallengeComplete(finalCorrect * 20);
    }
  };

  const handleClose = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState("intro");
    setCurrentIndex(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setTimeLeft(60);
    onClose();
  };

  const currentScenario = speedScenarios[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="speed-challenge-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-6 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-400/50 bg-[#080C16] text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-5 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <Timer className="h-5 w-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-orange-400 font-bold">
                <Flame className="h-3.5 w-3.5 fill-orange-400 animate-pulse" />
                <span>چالش رکوردی ۶۰ ثانیه‌ای</span>
              </div>
              <h3 id="speed-challenge-title" className="text-base md:text-lg font-black text-foreground">
                مسابقه عیب‌یابی بحران‌های سرور وردپرس
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-xl p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            aria-label="بستن چالش"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Views */}
        <div className="p-6 md:p-8">
          {gameState === "intro" && (
            <div className="text-center space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-orange-400/40 bg-gradient-to-br from-orange-400/20 to-amber-600/30 text-orange-300 shadow-xl shadow-orange-500/20">
                <Timer className="h-10 w-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl md:text-2xl font-black text-foreground">
                  آیا سرعت رفلکس شما در حد مهندس ارشد وایب‌کدینگ است؟
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  ۵ بحران واقعی سرور و دیتابیس پشت سر هم رخ می‌دهد. شما دقیقاً ۶۰ ثانیه فرصت دارید تا تصمیم درست مهندسی را بگیرید و سایت را از فاجعه نجات دهید!
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 max-w-sm mx-auto text-xs">
                <div>
                  <span className="text-muted-foreground block font-bold">زمان مسابقه:</span>
                  <span className="font-mono text-base font-black text-orange-400">۶۰ ثانیه</span>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <span className="text-muted-foreground block font-bold">پاداش رکورد:</span>
                  <span className="font-mono text-base font-black text-amber-400">+۱۵۰ XP + نشان</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleStartGame}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-8 py-3.5 text-sm font-black text-black hover:opacity-95 shadow-xl shadow-orange-500/30 transition-all hover:scale-105"
              >
                <Play className="h-4 w-4 fill-black" />
                <span>شروع چالش سرعتی ⏱️</span>
              </button>
            </div>
          )}

          {gameState === "playing" && (
            <div className="space-y-6">
              {/* Timer Bar & Progress */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-400/20 px-2.5 py-1 text-xs font-bold text-amber-300">
                    بحران {currentIndex + 1} از {speedScenarios.length}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    درست: <strong className="text-emerald-400">{correctCount}</strong>
                  </span>
                </div>

                <div
                  className={`flex items-center gap-1.5 rounded-xl border px-3 py-1 font-mono text-sm font-black ${
                    timeLeft <= 15
                      ? "border-rose-500/50 bg-rose-500/20 text-rose-400 animate-pulse"
                      : "border-orange-500/40 bg-orange-500/10 text-orange-300"
                  }`}
                >
                  <Timer className="h-4 w-4" />
                  <span>{timeLeft} ثانیه</span>
                </div>
              </div>

              {/* Scenario Crisis Question */}
              <div className="space-y-3">
                <h4 className="text-base md:text-lg font-black text-foreground">
                  {currentScenario.crisisTitle}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {currentScenario.crisisDescription}
                </p>
              </div>

              {/* 4 Quick Options */}
              <div className="space-y-2.5">
                {currentScenario.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrectOption = idx === currentScenario.correctIndex;

                  let optStyles =
                    "border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.08] hover:border-amber-400/40";
                  if (selectedOption !== null) {
                    if (isSelected && isCorrectOption) {
                      optStyles = "border-emerald-500 bg-emerald-500/25 text-emerald-200 shadow-md";
                    } else if (isSelected && !isCorrectOption) {
                      optStyles = "border-rose-500 bg-rose-500/25 text-rose-200";
                    } else if (!isSelected && isCorrectOption) {
                      optStyles = "border-emerald-500/50 bg-emerald-500/10 text-emerald-300";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-right text-xs md:text-sm font-medium transition-all ${optStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 font-mono text-xs font-bold">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {selectedOption !== null && isSelected && isCorrectOption && (
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                      )}
                      {selectedOption !== null && isSelected && !isCorrectOption && (
                        <AlertTriangle className="h-5 w-5 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {gameState === "finished" && (
            <div className="text-center space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-emerald-400/50 bg-gradient-to-br from-emerald-400/20 to-teal-500/30 text-emerald-300 shadow-xl shadow-emerald-500/20">
                <Award className="h-10 w-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-amber-400 block mb-1">
                  پایان مأموریت سرعتی!
                </span>
                <h4 className="text-2xl font-black text-foreground">
                  نتیجه شما: {correctCount} از {speedScenarios.length} بحران مهار شد
                </h4>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {correctCount >= 4
                    ? "فوق‌العاده! سرعت عمل و دانش معماری شما در سطح توسعه‌دهندگان ارشد بین‌المللی است."
                    : "تلاش خوبی بود! با مرور تمثیل‌ها و پرامپت‌های ۵ لایه‌ای می‌توانید رکورد خود را به ۵ از ۵ برسانید."}
                </p>
              </div>

              {/* Reward Badge if 4 or 5 correct */}
              {correctCount >= 4 && (
                <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4 max-w-sm mx-auto flex items-center gap-3 text-right">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-black font-black">
                    <Crown className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                      نشان جدید آنلاک شد!
                    </span>
                    <h5 className="font-bold text-sm text-foreground">
                      نشان رفلکس سرعتی (Speed Reflex Master)
                    </h5>
                    <span className="text-[11px] text-muted-foreground">+۱۵۰ XP به پروفایل شما افزوده شد</span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleStartGame}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/40 bg-amber-400/10 px-5 py-2.5 text-xs font-bold text-amber-300 hover:bg-amber-400/20 transition-all"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>تلاش مجدد برای رکورد بهتر</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-xl bg-amber-400 px-6 py-2.5 text-xs font-black text-black hover:bg-amber-300 transition-colors"
                >
                  بازگشت به دانشنامه
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
