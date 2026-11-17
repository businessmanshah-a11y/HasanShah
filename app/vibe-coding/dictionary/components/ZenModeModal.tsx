"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronRight, ChevronLeft, Sparkles, BookOpen, AlertTriangle, CheckCircle2, Copy, Check, Terminal } from "lucide-react";
import { EncyclopediaTerm } from "../data/types";
import { allDictionaryTerms } from "../data";

interface ZenModeModalProps {
  initialTermId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ZenModeModal({
  initialTermId,
  isOpen,
  onClose,
}: ZenModeModalProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"concept" | "prompt" | "test">("concept");
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialTermId) {
      const idx = allDictionaryTerms.findIndex((t) => t.id === initialTermId);
      if (idx !== -1) setCurrentIndex(idx);
    }
  }, [initialTermId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") handlePrev();
      if (e.key === "ArrowLeft") handleNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const currentTerm: EncyclopediaTerm = allDictionaryTerms[currentIndex];

  const handleNext = () => {
    if (currentIndex < allDictionaryTerms.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setActiveTab("concept");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setActiveTab("concept");
    }
  };

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(currentTerm.cursorPrompt || currentTerm.goldenPrompt);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-3xl border border-amber-400/40 bg-[#070A10] p-6 md:p-10 text-foreground shadow-2xl my-6 flex flex-col min-h-[580px]">
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>حالت مطالعه متمرکز (Zen Mode)</span>
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              اصطلاح {currentIndex + 1} از {allDictionaryTerms.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 rounded-xl border border-white/10 text-muted-foreground hover:bg-white/5 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="اصطلاح قبلی (کلید جهت راست)"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === allDictionaryTerms.length - 1}
                className="p-2 rounded-xl border border-white/10 text-muted-foreground hover:bg-white/5 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="اصطلاح بعدی (کلید جهت چپ)"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Term Title & Pronunciation */}
        <div className="pt-6 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/20">
                  {currentTerm.phonetic}
                </span>
                <span className="text-xs text-muted-foreground">
                  زمان مطالعه: ~{currentTerm.readingTimeMinutes} دقیقه
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                {currentTerm.termFa}
              </h2>
              <span className="font-mono text-sm text-muted-foreground block mt-0.5">
                {currentTerm.termEn}
              </span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("concept")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "concept"
                    ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                مفهوم و تمثیل
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("prompt")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "prompt"
                    ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                پرامپت ۵ لایه‌ای
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("test")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "test"
                    ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                راهنمای تست ۳۰ ثانیه‌ای
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Concept & Analogy */}
        {activeTab === "concept" && (
          <div className="flex-1 space-y-6 pt-2">
            {/* Analogy box */}
            <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-5">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5 mb-2">
                <span>💡 به زبان آدمیزاد (تمثیل دنیای واقعی):</span>
              </span>
              <p className="text-base text-foreground/90 leading-relaxed font-sans">
                {currentTerm.analogy}
              </p>
            </div>

            {/* Beginner Trap & Real Pain */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-4 space-y-1.5">
                <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4" />
                  <span>تله مرگبار ۹۰ درصد تازه‌کارها:</span>
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {currentTerm.beginnerTrap}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-1.5">
                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-amber-400" />
                  <span>اگر این مفهوم را ندانی چه خسارتی می‌بینی؟</span>
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {currentTerm.realPain}
                </p>
              </div>
            </div>

            {/* ASCII Diagram if available */}
            {currentTerm.asciiDiagram && (
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-2">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-amber-400" />
                  <span>دیاگرام بصری سازوکار:</span>
                </span>
                <pre className="p-3 rounded-xl bg-black font-mono text-[11px] text-amber-300 leading-relaxed text-left overflow-x-auto" dir="ltr">
                  {currentTerm.asciiDiagram}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: 5-Layer Prompt */}
        {activeTab === "prompt" && (
          <div className="flex-1 space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                📁 <strong>محل تزریق کد در پروژه:</strong>{" "}
                <span className="text-amber-300 font-mono">{currentTerm.injectionTarget}</span>
              </div>
              <button
                type="button"
                onClick={copyPrompt}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-xs font-bold text-black hover:opacity-95 shadow-md shadow-amber-500/20 transition-all"
              >
                {hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{hasCopied ? "پرامپت کپی شد!" : "کپی پرامپت مهندسی‌شده Cursor"}</span>
              </button>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-black/60 p-5 overflow-hidden">
              <pre className="font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap text-right font-sans" dir="rtl">
                {currentTerm.cursorPrompt || currentTerm.goldenPrompt}
              </pre>
            </div>

            {currentTerm.debugPrompt && (
              <div className="rounded-2xl border border-purple-400/20 bg-purple-400/5 p-4 text-xs space-y-2">
                <span className="font-bold text-purple-300 block">
                  🛠️ پرامپت نجات عیب‌یابی (اگر هوش مصنوعی ارور داد چی بگم؟):
                </span>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {currentTerm.debugPrompt}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: How to test */}
        {activeTab === "test" && (
          <div className="flex-1 space-y-4 pt-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5 space-y-3">
              <span className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>چطور در ۳۰ ثانیه بفهمم کد هوش مصنوعی درست کار می‌کند؟</span>
              </span>

              <ol className="space-y-2 text-xs text-foreground/90 font-sans list-decimal list-inside pr-1">
                {currentTerm.howToTest.steps.map((step, sIdx) => (
                  <li key={sIdx} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>

              <div className="pt-3 border-t border-white/10 text-xs text-muted-foreground">
                🎯 <strong>خروجی مورد انتظار:</strong> {currentTerm.howToTest.expectedResult}
              </div>
            </div>

            {/* Red flags */}
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-2">
              <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4" />
                <span>پرچم‌های قرمز (از کجا بفهمم هوش مصنوعی به من کلک زده؟):</span>
              </span>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-sans list-disc list-inside pr-1">
                {currentTerm.howToTest.redFlags.map((flag, fIdx) => (
                  <li key={fIdx}>{flag}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Bottom Navigation Progress */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>کلیدهای <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">←</kbd> و <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">→</kbd> کیبورد برای ورق زدن سریع</span>
          <span>{Math.round(((currentIndex + 1) / allDictionaryTerms.length) * 100)}٪ از دانشنامه در این جلسه مرور شد</span>
        </div>
      </div>
    </div>
  );
}
