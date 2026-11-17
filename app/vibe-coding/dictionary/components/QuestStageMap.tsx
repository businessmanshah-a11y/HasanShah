"use client";

import { useMemo } from "react";
import {
  Lock,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ChevronLeft,
  Award,
  Zap,
  BookOpen,
  Crown,
  Play,
  RotateCcw,
} from "lucide-react";
import { QuestStage } from "../data/types";
import { allDictionaryTerms, categoriesMeta } from "../data";

interface QuestStageMapProps {
  stages: QuestStage[];
  completedStageNumbers: number[];
  readTermIds: string[];
  onStartCheckpoint: (stage: QuestStage) => void;
  onSelectTerm: (termId: string) => void;
  onOpenCertificate: () => void;
}

export default function QuestStageMap({
  stages,
  completedStageNumbers,
  readTermIds,
  onStartCheckpoint,
  onSelectTerm,
  onOpenCertificate,
}: QuestStageMapProps) {
  // Map termId to Term Object for quick titles
  const termsMap = useMemo(() => {
    const map = new Map<string, (typeof allDictionaryTerms)[0]>();
    allDictionaryTerms.forEach((t) => map.set(t.id, t));
    return map;
  }, []);

  // Determine active stage: the lowest uncompleted stage number
  const activeStageNumber = useMemo(() => {
    for (const stage of stages) {
      if (!completedStageNumbers.includes(stage.stageNumber)) {
        return stage.stageNumber;
      }
    }
    return stages.length + 1; // All completed
  }, [stages, completedStageNumbers]);

  const allCompleted = completedStageNumbers.length >= stages.length;

  return (
    <div className="space-y-8" dir="rtl">
      {/* ── Quest Header & Journey Intro ── */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-gradient-to-br from-[#0B0F19] via-surface to-[#111827] p-6 md:p-8 backdrop-blur shadow-2xl">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-300 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>مأموریت ۱۲ مرحله‌ای فتح وایب‌کدینگ</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              سفر از شاگردی تا مهندسی ارشد وردپرس
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
              اینجا قرار نیست مثل یک کتاب خسته‌کننده بخوانید و فراموش کنید! هر مرحله شامل ۲ الی ۳ اصطلاح کلیدی است. پس از مطالعه، وارد **آزمون سناریومحور چک‌پوینت** شوید، کدهای شبیه‌سازی‌شده را حل کنید و تا زمانی که عمیقاً یاد نگرفته‌اید به مرحله بعد نروید.
            </p>
          </div>

          {/* Quick Quest Progress Box */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center min-w-[200px]">
            <span className="text-xs text-muted-foreground font-bold">وضعیت پیشروی در نقشه:</span>
            <div className="mt-2 text-3xl font-black text-amber-400 font-mono">
              {completedStageNumbers.length} / {stages.length}
            </div>
            <span className="text-[11px] text-muted-foreground mt-1">مرحله با موفقیت فتح شده</span>

            {allCompleted && (
              <button
                type="button"
                onClick={onOpenCertificate}
                className="mt-3 w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1.5 text-xs font-black text-black hover:opacity-95 shadow-md shadow-amber-500/20"
              >
                مشاهده مدرک رسمی 🎓
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── 12 Stages Visual Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {stages.map((stage) => {
          const isCompleted = completedStageNumbers.includes(stage.stageNumber);
          const isActive = stage.stageNumber === activeStageNumber;
          const isLocked = !isCompleted && !isActive;

          // Category meta
          const categoryMeta = categoriesMeta.find((c) => c.id === stage.category);

          // Stage terms read progress
          const stageTermsReadCount = stage.termIds.filter((id) =>
            readTermIds.includes(id)
          ).length;
          const stageTermsTotal = stage.termIds.length;
          const isAllTermsRead = stageTermsReadCount === stageTermsTotal;

          return (
            <div
              key={stage.stageNumber}
              className={`group relative flex flex-col justify-between rounded-3xl border transition-all duration-300 p-5 md:p-6 ${
                isCompleted
                  ? "border-emerald-500/40 bg-emerald-950/10 hover:border-emerald-500/60 shadow-sm shadow-emerald-500/5"
                  : isActive
                  ? "border-amber-400 bg-gradient-to-br from-[#0B0F19] to-amber-950/20 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/20"
                  : "border-white/10 bg-[#0B0F19]/40 opacity-75 grayscale hover:grayscale-0 hover:opacity-100"
              }`}
            >
              {/* Card Header: Stage Number, Category & Status Badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black ${
                        isCompleted
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : isActive
                          ? "bg-amber-400 text-black font-black shadow-md shadow-amber-500/20"
                          : "bg-white/10 text-muted-foreground border border-white/10"
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : stage.stageNumber}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${
                        categoryMeta?.badgeColor || "border-amber-400/30 bg-amber-400/10 text-amber-300"
                      }`}
                    >
                      {categoryMeta?.titleFa || stage.category}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <span>فتح شد</span>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                  )}
                  {isActive && (
                    <span className="flex items-center gap-1 rounded-full bg-amber-400/15 border border-amber-400/30 px-2 py-0.5 text-[11px] font-bold text-amber-300 animate-pulse">
                      <Zap className="h-3 w-3 fill-amber-300" />
                      <span>مرحله فعال</span>
                    </span>
                  )}
                  {isLocked && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-muted-foreground">
                      <Lock className="h-3.5 w-3.5" />
                      <span>قفل</span>
                    </span>
                  )}
                </div>

                {/* Stage Title & Subtitle */}
                <h3 className="text-base md:text-lg font-black text-foreground group-hover:text-amber-300 transition-colors">
                  {stage.titleFa}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {stage.subtitle}
                </p>

                {/* Included Terms Badges */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3 text-amber-400" />
                      <span>اصطلاحات این مرحله:</span>
                    </span>
                    <span className="font-mono text-amber-300">
                      {stageTermsReadCount}/{stageTermsTotal}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {stage.termIds.map((termId) => {
                      const term = termsMap.get(termId);
                      const isRead = readTermIds.includes(termId);
                      return (
                        <button
                          key={termId}
                          type="button"
                          onClick={() => onSelectTerm(termId)}
                          className={`group/term inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-medium transition-all ${
                            isRead
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                              : "border-white/10 bg-white/5 text-muted-foreground hover:border-amber-400/40 hover:text-foreground hover:bg-white/10"
                          }`}
                          title={`مشاهده کارت اصطلاح ${term?.termFa || termId}`}
                        >
                          <span>{term?.termFa || termId}</span>
                          {isRead && <CheckCircle2 className="h-3 w-3 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Unlockable Badge Preview if stage has one */}
                {stage.badgeUnlocked && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/5 p-2 text-xs">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/20 text-amber-400">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-amber-400/80 font-bold block">
                        پاداش فتح این مرحله:
                      </span>
                      <span className="text-xs font-black text-foreground truncate block">
                        {stage.badgeUnlocked.titleFa}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Action Button */}
              <div className="mt-5 pt-4 border-t border-white/10">
                {isCompleted ? (
                  <button
                    type="button"
                    onClick={() => onStartCheckpoint(stage)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition-all"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>مرور دوباره آزمون چک‌پوینت</span>
                  </button>
                ) : isActive ? (
                  <button
                    type="button"
                    onClick={() => onStartCheckpoint(stage)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-2.5 text-xs font-black text-black hover:opacity-95 shadow-lg shadow-amber-500/25 transition-all group-hover:scale-[1.02]"
                  >
                    <Play className="h-3.5 w-3.5 fill-black" />
                    <span>شروع آزمون چک‌پوینت مرحله (+۲۰۰ XP)</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] py-2.5 text-xs font-medium text-muted-foreground/60 cursor-not-allowed"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    <span>ابتدا مرحله {stage.stageNumber - 1} را کامل کنید</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
