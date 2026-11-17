"use client";

import { useState } from "react";
import {
  X,
  Award,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowLeft,
  Lightbulb,
  Zap,
  Check,
  BookOpen,
  Crown,
  ChevronLeft,
} from "lucide-react";
import { QuestStage, QuizQuestion } from "../data/types";

interface StageCheckpointModalProps {
  stage: QuestStage | null;
  isOpen: boolean;
  onClose: () => void;
  onStagePassed: (stageNumber: number, earnedXp: number, badgeId?: string) => void;
  onOpenCertificate: () => void;
}

export default function StageCheckpointModal({
  stage,
  isOpen,
  onClose,
  onStagePassed,
  onOpenCertificate,
}: StageCheckpointModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [stageCompleted, setStageCompleted] = useState(false);
  const [earnedTotalXp, setEarnedTotalXp] = useState(0);

  if (!isOpen || !stage) return null;

  const currentQuestion: QuizQuestion = stage.checkpointQuiz[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.correctIndex;
  const isLastQuestion = currentQuestionIndex === stage.checkpointQuiz.length - 1;

  const handleSelectOption = (idx: number) => {
    if (hasAnswered && isCorrect) return; // Locked once answered correctly
    setSelectedOption(idx);
    setHasAnswered(true);

    if (idx === currentQuestion.correctIndex) {
      // Award XP: 100 XP on first try, 50 XP on retry
      const questionXp = retryCount === 0 ? 100 : 50;
      setEarnedTotalXp((prev) => prev + questionXp);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    setRetryCount((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setRetryCount(0);
    } else {
      // Completed both questions!
      setStageCompleted(true);
      onStagePassed(
        stage.stageNumber,
        earnedTotalXp,
        stage.badgeUnlocked?.id
      );
    }
  };

  const handleCloseModal = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setRetryCount(0);
    setStageCompleted(false);
    setEarnedTotalXp(0);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkpoint-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleCloseModal}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-400/40 bg-[#0B0F19] text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Subtle background ambient */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-5 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/30">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                  مرحله {stage.stageNumber} از ۱۲
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  سناریوی {currentQuestionIndex + 1} از {stage.checkpointQuiz.length}
                </span>
              </div>
              <h3 id="checkpoint-modal-title" className="text-base md:text-lg font-black text-foreground">
                آزمون سناریومحور: {stage.titleFa}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCloseModal}
            className="rounded-xl p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            aria-label="بستن آزمون"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Stage Victory Screen */}
        {stageCompleted ? (
          <div className="p-6 md:p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-emerald-400/50 bg-gradient-to-br from-emerald-400/20 to-teal-500/30 text-emerald-400 shadow-xl shadow-emerald-500/20 animate-bounce">
              <Award className="h-10 w-10" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-300 mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>چک‌پوینت با موفقیت پشت سر گذاشته شد!</span>
              </div>
              <h4 className="text-2xl font-black text-foreground">
                آفرین! مرحله {stage.stageNumber} با تسلط کامل فتح شد
              </h4>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                شما نشان دادید که به جای حفظ کردن طوطی‌وار کلمات، نحوه کاربرد و رفع خطای آن‌ها را در پروژه‌های واقعی وردپرس فهمیده‌اید.
              </p>
            </div>

            {/* XP Awarded box */}
            <div className="flex items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 max-w-sm mx-auto">
              <div>
                <span className="text-[11px] text-muted-foreground block">امتیاز کسب‌شده:</span>
                <span className="text-xl font-black text-amber-400 font-mono">
                  +{earnedTotalXp.toLocaleString("fa-IR")} XP
                </span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-[11px] text-muted-foreground block">وضعیت مرحله:</span>
                <span className="text-sm font-bold text-emerald-400">تکمیل و ثبت شد ✓</span>
              </div>
            </div>

            {/* Unlocked Badge Announcement if applicable */}
            {stage.badgeUnlocked && (
              <div className="rounded-2xl border border-amber-400/40 bg-gradient-to-r from-amber-400/10 via-amber-500/5 to-amber-600/10 p-4 max-w-md mx-auto text-right flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-black font-black shadow-md shadow-amber-500/20">
                  <Crown className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    نشان افتخار جدید باز شد!
                  </span>
                  <h5 className="font-bold text-sm text-foreground">
                    {stage.badgeUnlocked.titleFa}
                  </h5>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {stage.badgeUnlocked.description}
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {stage.stageNumber === 12 ? (
                <button
                  type="button"
                  onClick={() => {
                    handleCloseModal();
                    onOpenCertificate();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-black text-black hover:opacity-95 shadow-lg shadow-amber-500/30"
                >
                  <Award className="h-4 w-4" />
                  <span>دریافت و چاپ مدرک وایب‌کدینگ 🎓</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-2.5 text-xs font-bold text-black hover:bg-amber-300 transition-colors"
                >
                  <span>ادامه به مرحله {stage.stageNumber + 1}</span>
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Question View */
          <div className="p-5 md:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Scenario Description */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
                <Lightbulb className="h-4 w-4" />
                <span>سناریوی عملی در پروژه:</span>
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {currentQuestion.scenarioText}
              </p>
            </div>

            {/* Code Snippet Preview (if available) */}
            {currentQuestion.codeSnippetPreview && (
              <div className="rounded-xl border border-white/10 bg-[#060911] p-3.5 text-xs font-mono text-emerald-300 overflow-x-auto text-left" dir="ltr">
                <pre>{currentQuestion.codeSnippetPreview}</pre>
              </div>
            )}

            {/* Options List */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-muted-foreground block">
                کدام اقدام یا مفهوم را انتخاب می‌کنید؟
              </span>
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = idx === currentQuestion.correctIndex;

                let optionStyles = "border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.08] hover:border-amber-400/40";
                if (hasAnswered) {
                  if (isSelected && isCorrectOption) {
                    optionStyles = "border-emerald-500 bg-emerald-500/20 text-emerald-200 shadow-md shadow-emerald-500/10";
                  } else if (isSelected && !isCorrectOption) {
                    optionStyles = "border-rose-500 bg-rose-500/20 text-rose-200";
                  } else if (!isSelected && isCorrectOption) {
                    optionStyles = "border-emerald-500/50 bg-emerald-500/10 text-emerald-300";
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-right text-xs md:text-sm font-medium transition-all ${optionStyles}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold font-mono">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {hasAnswered && isSelected && isCorrectOption && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    )}
                    {hasAnswered && isSelected && !isCorrectOption && (
                      <AlertTriangle className="h-5 w-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ── Feedback & Adaptive Remediation Box ── */}
            {hasAnswered && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-200">
                {isCorrect ? (
                  /* Correct Answer Card */
                  <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>پاسخ شما کاملاً مهندسی و دقیق بود!</span>
                    </div>
                    <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                    <div className="pt-2 flex items-center justify-end">
                      <button
                        type="button"
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-black hover:bg-emerald-400 transition-colors"
                      >
                        <span>{isLastQuestion ? "مشاهده نتیجه نهایی مرحله" : "سناریوی بعدی"}</span>
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Adaptive Remediation Card */
                  <div className="rounded-2xl border border-amber-500/40 bg-amber-950/20 p-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <AlertTriangle className="h-4 w-4" />
                      <span>تحلیل خطای ادراکی: چرا این پاسخ اشتباه بود؟</span>
                    </div>

                    <p className="text-xs text-foreground/80 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>

                    {/* Everyday Analogy Reminder */}
                    <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-3 flex items-start gap-2.5">
                      <Lightbulb className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-amber-300 block mb-0.5">یادآوری تمثیل ذهنی:</strong>
                        {currentQuestion.remediationHint}
                      </div>
                    </div>

                    {/* Retry Button without Penalty */}
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">
                        با درک تمثیل بالا دوباره امتحان کنید (+۵۰ XP پاداش تلاش)
                      </span>
                      <button
                        type="button"
                        onClick={handleRetry}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/50 bg-amber-400/10 px-4 py-2 text-xs font-bold text-amber-300 hover:bg-amber-400/20 transition-all"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>تلاش مجدد</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
