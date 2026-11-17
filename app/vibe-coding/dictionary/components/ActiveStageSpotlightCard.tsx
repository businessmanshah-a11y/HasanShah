"use client";

import { useMemo } from "react";
import {
  Zap,
  Play,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
  ArrowLeft,
  ChevronLeft,
  Crown,
  Flame,
  Code2,
} from "lucide-react";
import { QuestStage } from "../data/types";
import { allDictionaryTerms, categoriesMeta } from "../data";

interface ActiveStageSpotlightCardProps {
  stages: QuestStage[];
  completedStageNumbers: number[];
  readTermIds: string[];
  onStartCheckpoint: (stage: QuestStage) => void;
  onSelectTerm: (termId: string) => void;
  onOpenCertificate: () => void;
  onOpenSandbox: () => void;
}

export default function ActiveStageSpotlightCard({
  stages,
  completedStageNumbers,
  readTermIds,
  onStartCheckpoint,
  onSelectTerm,
  onOpenCertificate,
  onOpenSandbox,
}: ActiveStageSpotlightCardProps) {
  // Find current active stage (first uncompleted stage)
  const activeStage = useMemo(() => {
    for (const stage of stages) {
      if (!completedStageNumbers.includes(stage.stageNumber)) {
        return stage;
      }
    }
    return null; // All completed
  }, [stages, completedStageNumbers]);

  // Terms map
  const termsMap = useMemo(() => {
    const map = new Map<string, (typeof allDictionaryTerms)[0]>();
    allDictionaryTerms.forEach((t) => map.set(t.id, t));
    return map;
  }, []);

  const allCompleted = completedStageNumbers.length >= stages.length;

  if (allCompleted) {
    return (
      <div className="relative overflow-hidden rounded-3xl border-2 border-amber-400/60 bg-gradient-to-r from-amber-500/15 via-[#0B0F19] to-amber-600/15 p-6 md:p-8 backdrop-blur shadow-2xl text-center">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-lg shadow-amber-500/30 mb-4">
          <Crown className="h-8 w-8" />
        </div>
        <h3 className="text-xl md:text-2xl font-black text-foreground">
          تبریک! تمام ۱۲ مرحله مأموریت وایب‌کدینگ با موفقیت فتح شد
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          شما اکنون به بالاترین سطح شایستگی رسیده‌اید و آماده‌اید تا گواهینامه رسمی خود را دریافت و چاپ فرمایید.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenCertificate}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 text-xs font-black text-black hover:opacity-95 shadow-lg shadow-amber-500/30 transition-all"
          >
            <Award className="h-4 w-4" />
            <span>مشاهده و چاپ گواهینامه رسمی 🎓</span>
          </button>
          <button
            type="button"
            onClick={onOpenSandbox}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-foreground hover:bg-white/10 transition-all"
          >
            <Code2 className="h-4 w-4 text-amber-400" />
            <span>سندباکس تست پرامپت</span>
          </button>
        </div>
      </div>
    );
  }

  if (!activeStage) return null;

  const categoryMeta = categoriesMeta.find((c) => c.id === activeStage.category);
  const stageReadCount = activeStage.termIds.filter((id) => readTermIds.includes(id)).length;
  const stageTotalCount = activeStage.termIds.length;

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-amber-400/50 bg-gradient-to-br from-[#0D1322] via-[#090D17] to-[#05070D] p-6 md:p-8 backdrop-blur shadow-2xl transition-all">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left/Main Column: Title & Mission description */}
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-xs font-black text-amber-300">
              <Zap className="h-3.5 w-3.5 fill-amber-300 animate-pulse" />
              <span>ایستگاه فعال شما: مرحله {activeStage.stageNumber} از ۱۲</span>
            </span>

            <span
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${
                categoryMeta?.badgeColor || "border-amber-400/30 bg-amber-400/10 text-amber-300"
              }`}
            >
              {categoryMeta?.titleFa || activeStage.category}
            </span>

            {activeStage.badgeUnlocked && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-amber-300/90 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                <span>پاداش این گام: {activeStage.badgeUnlocked.titleFa}</span>
              </span>
            )}
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-black text-foreground">
              {activeStage.titleFa}
            </h3>
            <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {activeStage.subtitle}
            </p>
          </div>

          {/* Included terms to master */}
          <div className="pt-2 border-t border-white/5">
            <div className="flex items-center justify-between text-xs font-bold text-muted-foreground mb-2.5">
              <span className="flex items-center gap-1.5 text-foreground">
                <BookOpen className="h-3.5 w-3.5 text-amber-400" />
                <span>اصطلاحات کلیدی این گام (روی هر مورد برای مطالعه سریع کلیک کنید):</span>
              </span>
              <span className="font-mono text-amber-400">
                {stageReadCount} از {stageTotalCount} مطالعه شده
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeStage.termIds.map((termId) => {
                const term = termsMap.get(termId);
                const isRead = readTermIds.includes(termId);
                return (
                  <button
                    key={termId}
                    type="button"
                    onClick={() => onSelectTerm(termId)}
                    className={`group/btn inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all ${
                      isRead
                        ? "border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40"
                        : "border-amber-400/30 bg-amber-400/5 text-foreground hover:border-amber-400 hover:bg-amber-400/15"
                    }`}
                    title="مشاهده پرامپت ۵ لایه‌ای و تمثیل این اصطلاح در حالت Zen"
                  >
                    <span>{term?.termFa || termId}</span>
                    {isRead ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <ChevronLeft className="h-3.5 w-3.5 text-amber-400 group-hover/btn:-translate-x-0.5 transition-transform" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Call to Action */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3 shrink-0 lg:min-w-[240px] pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-r border-white/10 lg:pr-6">
          <button
            type="button"
            onClick={() => onStartCheckpoint(activeStage)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 px-6 py-3.5 text-sm font-black text-black hover:opacity-95 shadow-xl shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            <Play className="h-4 w-4 fill-black" />
            <span>شروع آزمون سناریومحور (+۲۰۰ XP)</span>
          </button>

          <button
            type="button"
            onClick={onOpenSandbox}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
          >
            <Code2 className="h-3.5 w-3.5 text-amber-400" />
            <span>تست زنده در سندباکس پرامپت</span>
          </button>
        </div>
      </div>
    </div>
  );
}
