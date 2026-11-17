"use client";

import { useState } from "react";
import { X, Award, RotateCw, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const quizCards = [
  {
    question: "وقتی می‌خواهی بدون دستکاری فایل‌های هسته وردپرس، کدهای اختصاصی خودت رو در لحظه باز شدن هدر لود کنی، باید از چی استفاده کنی؟",
    options: ["Action Hook (add_action)", "WP-Cron", "MySQL Table", "block.json"],
    correctIndex: 0,
    explanation: "اکشن هوک دقیقاً مثل پریز برقه که بهت اجازه میده کدت رو در لحظه اجرای wp_head تزریق کنی.",
  },
  {
    question: "کدام مفهوم جلوی حملات خطرناک و ارسال فرم‌های جعلی توسط ربات‌های هکر را در وردپرس می‌گیرد؟",
    options: ["Design Tokens", "Nonces (توکن یکبارمصرف)", "Fluid Typography", "JIT Engine"],
    correctIndex: 1,
    explanation: "نانس‌ها مثل رمز پویای بانکی هستند که تضمین می‌کنند درخواست از خود کاربر صادر شده است.",
  },
  {
    question: "اگر بخواهی دیتای یک وب‌سرویس سنگین رو برای چند ساعت توی دیتابیس نگه داری تا سرور کند نشه، از کدوم API استفاده می‌کنی؟",
    options: ["Transients API (کش گذرا)", "Gutenberg API", "SSH Key", "OPcache"],
    correctIndex: 0,
    explanation: "ترنزینت چرک‌نویس موقتی دیتابیسه که دیتا رو با زمان انقضا کش می‌کنه.",
  },
  {
    question: "فایلی که استانداردهای کدنویسی اختصاصی شما را در هر پرامپت به ادیتور Cursor دیکته می‌کند چیست؟",
    options: [".cursorrules", "wp-config.php", "style.css", "robots.txt"],
    correctIndex: 0,
    explanation: "فایل .cursorrules قوانین طلایی پروژه شما را در مغز ادیتور ثبت می‌کند.",
  },
  {
    question: "کدام معیار گوگل پرش و جابه‌جایی آزاردهنده المان‌های صفحه هنگام لود شدن را می‌سنجد؟",
    options: ["CLS (Cumulative Layout Shift)", "TTFB", "SSH", "CPT"],
    correctIndex: 0,
    explanation: "سنجه CLS پرش‌های ناگهانی صفحه رو محاسبه می‌کنه و باید همیشه صفر بمونه.",
  },
];

export default function FlashcardQuizModal({ isOpen, onClose }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const currentQ = quizCards[currentIndex];

  const handleSelect = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizCards.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" dir="rtl">
      <div className="relative w-full max-w-xl rounded-3xl border border-gold/40 bg-surface-elevated p-6 md:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground">کوییز سریع: سنجش سطح وایب‌کدینگ</h3>
              <p className="text-xs text-muted-foreground">۵ سوال چندگزینه‌ای برای محک زدن یادگیری اصطلاحات کلیدی</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!showResult ? (
          <div className="space-y-5">
            {/* Progress */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>سوال {currentIndex + 1} از {quizCards.length}</span>
              <span>امتیاز: {score}</span>
            </div>

            {/* Question Text */}
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 text-sm md:text-base font-bold text-foreground leading-relaxed">
              {currentQ.question}
            </div>

            {/* Options */}
            <div className="grid gap-2.5">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = "border-white/10 bg-white/5 text-muted-foreground hover:border-gold/30 hover:text-foreground";
                if (selectedAnswer !== null) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = "border-emerald-500/50 bg-emerald-500/20 text-emerald-300 font-bold";
                  } else if (idx === selectedAnswer) {
                    btnStyle = "border-rose-500/50 bg-rose-500/20 text-rose-300";
                  } else {
                    btnStyle = "border-white/5 bg-white/[0.02] opacity-40";
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={`p-3.5 rounded-xl border text-start text-xs md:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {selectedAnswer !== null && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            {selectedAnswer !== null && (
              <div className="rounded-xl border border-gold/20 bg-gold/10 p-3.5 text-xs text-gold/90 leading-relaxed animate-in fade-in duration-200">
                <strong>💡 توضیح:</strong> {currentQ.explanation}
              </div>
            )}

            {/* Next button */}
            {selectedAnswer !== null && (
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-2.5 text-xs font-black text-gold-foreground shadow-gold"
                >
                  <span>{currentIndex + 1 === quizCards.length ? "مشاهده کارنامه" : "سوال بعدی"}</span>
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Result View */
          <div className="text-center py-6 space-y-4">
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-3xl bg-gradient-gold text-gold-foreground shadow-gold-lg">
              <Sparkles className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-black text-foreground">
              {score >= 4 ? "عالی بود! شما نشان «وایب‌کدر هوشمند» گرفتید!" : "خوب بود! مسیر یادگیری شما تازه شروع شده"}
            </h4>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              شما به {score} سوال از ۵ سوال پاسخ درست دادید. با مرور مداوم این دانشنامه، کدهای بدون نقصی با AI خواهید ساخت.
            </p>
            <div className="flex justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={resetQuiz}
                className="inline-flex items-center gap-1.5 rounded-xl border border-gold/30 bg-gold/10 px-5 py-2.5 text-xs font-bold text-gold hover:bg-gold/20"
              >
                <RotateCw className="h-4 w-4" />
                تکرار کوییز
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-gradient-gold px-6 py-2.5 text-xs font-black text-gold-foreground shadow-gold"
              >
                ادامه مطالعه دانشنامه
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
