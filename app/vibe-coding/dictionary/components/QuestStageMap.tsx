"use client";

import { useState, useMemo } from "react";
import {
  Lock,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  Award,
  Zap,
  BookOpen,
  Crown,
  Play,
  RotateCcw,
  Shield,
  Layers,
  ChevronDown,
  ChevronUp,
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

interface QuestChapter {
  id: number;
  titleFa: string;
  titleEn: string;
  description: string;
  iconName: string;
  stageNumbers: number[];
  badgeName?: string;
}

const questChapters: QuestChapter[] = [
  {
    id: 1,
    titleFa: "فصل اول: بیداری در ماتریکس پرامپت و دیزاین",
    titleEn: "Chapter 1: Matrix Awakening & Golden UI",
    description: "مهار پنجره بافت، فایل قوانین .cursorrules، تایپوگرافی شناور و رساندن CLS به صفر مطلق.",
    iconName: "Sparkles",
    stageNumbers: [1, 2, 3],
    badgeName: "نشان ذهن شفاف",
  },
  {
    id: 2,
    titleFa: "فصل دوم: کیمیاگری بلاک‌ها و نبض وردپرس",
    titleEn: "Chapter 2: Gutenberg Alchemist & Core Hooks",
    description: "توسعه بلاک‌های بومی گوتنبرگ، اکشن‌ها، فیلترها، ساختار چایلدتم و دیتای گذرا.",
    iconName: "Zap",
    stageNumbers: [4, 5, 6],
    badgeName: "نشان کیمیاگر بلاک‌ها",
  },
  {
    id: 3,
    titleFa: "فصل سوم: دژ داده‌ها، ارتباطات و امنیت",
    titleEn: "Chapter 3: Iron Database Guardian & REST API",
    description: "خنثی‌سازی حملات SQL Injection، توکن‌های یکبارمصرف نانس، کلاس wpdb و مایگریشن.",
    iconName: "Shield",
    stageNumbers: [7, 8, 9],
    badgeName: "نشان استاد پریزها و هوک‌ها",
  },
  {
    id: 4,
    titleFa: "فصل چهارم: مهندسی ارشد و فتح قله وایب‌کدینگ",
    titleEn: "Chapter 4: Legendary Vibe Coder & Production",
    description: "سنگربندی خط دفاعی سرور، خطایابی صفحه سفید مرگ، WP-CLI و تاج‌گذاری مهندس ارشد.",
    iconName: "Crown",
    stageNumbers: [10, 11, 12],
    badgeName: "وایب‌کدر ارشد و افسانه‌ای",
  },
];

export default function QuestStageMap({
  stages,
  completedStageNumbers,
  readTermIds,
  onStartCheckpoint,
  onSelectTerm,
  onOpenCertificate,
}: QuestStageMapProps) {
  const [selectedChapterTab, setSelectedChapterTab] = useState<number | "all">("all");
  const [collapsedChapters, setCollapsedChapters] = useState<Record<number, boolean>>({});

  // Map termId to Term Object for quick lookup
  const termsMap = useMemo(() => {
    const map = new Map<string, (typeof allDictionaryTerms)[0]>();
    allDictionaryTerms.forEach((t) => map.set(t.id, t));
    return map;
  }, []);

  // Determine active stage number (the lowest uncompleted stage)
  const activeStageNumber = useMemo(() => {
    for (const stage of stages) {
      if (!completedStageNumbers.includes(stage.stageNumber)) {
        return stage.stageNumber;
      }
    }
    return stages.length + 1; // All completed
  }, [stages, completedStageNumbers]);

  const toggleChapterCollapse = (chapterId: number) => {
    setCollapsedChapters((prev) => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };

  const getChapterIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="h-5 w-5" />;
      case "Zap":
        return <Zap className="h-5 w-5" />;
      case "Shield":
        return <Shield className="h-5 w-5" />;
      case "Crown":
        return <Crown className="h-5 w-5" />;
      default:
        return <Layers className="h-5 w-5" />;
    }
  };

  const filteredChapters = useMemo(() => {
    if (selectedChapterTab === "all") return questChapters;
    return questChapters.filter((c) => c.id === selectedChapterTab);
  }, [selectedChapterTab]);

  return (
    <div className="space-y-8" dir="rtl">
      {/* ── Chapter Selection Tabs Bar ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-foreground">
            نقشه جامع مأموریت در ۴ فصل داستانی
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            مراحل را به ترتیب فصول فتح کنید تا تسلط شما از پرامپت تا معماری سرور تضمین شود.
          </p>
        </div>

        {/* Chapter Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 rounded-2xl border border-white/10 bg-[#0B0F19]/60 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setSelectedChapterTab("all")}
            className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
              selectedChapterTab === "all"
                ? "bg-amber-400 text-black shadow-sm font-black"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            همه فصل‌ها
          </button>
          {questChapters.map((ch) => {
            const chCompletedCount = ch.stageNumbers.filter((num) =>
              completedStageNumbers.includes(num)
            ).length;
            const isChAllDone = chCompletedCount === ch.stageNumbers.length;

            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setSelectedChapterTab(ch.id)}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  selectedChapterTab === ch.id
                    ? "bg-amber-400 text-black shadow-sm font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>فصل {ch.id}</span>
                {isChAllDone && <CheckCircle2 className="h-3 w-3 text-emerald-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Chapters Stream ── */}
      <div className="space-y-8">
        {filteredChapters.map((chapter) => {
          const chapterStages = stages.filter((s) => chapter.stageNumbers.includes(s.stageNumber));
          const chapterCompletedCount = chapter.stageNumbers.filter((num) =>
            completedStageNumbers.includes(num)
          ).length;
          const isChapterFullyCompleted = chapterCompletedCount === chapter.stageNumbers.length;
          const isChapterActive = chapter.stageNumbers.includes(activeStageNumber);
          const isCollapsed = !!collapsedChapters[chapter.id];

          return (
            <div
              key={chapter.id}
              className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                isChapterFullyCompleted
                  ? "border-emerald-500/30 bg-[#070D14]/70"
                  : isChapterActive
                  ? "border-amber-400/40 bg-[#0B0F1B]/90 shadow-xl shadow-amber-500/5 ring-1 ring-amber-400/20"
                  : "border-white/10 bg-[#080B14]/50 opacity-80"
              }`}
            >
              {/* Chapter Header Bar */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 border-b border-white/5 cursor-pointer select-none hover:bg-white/[0.02] transition-colors"
                onClick={() => toggleChapterCollapse(chapter.id)}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                      isChapterFullyCompleted
                        ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-400"
                        : isChapterActive
                        ? "border-amber-400/50 bg-amber-400 text-black shadow-md shadow-amber-500/20"
                        : "border-white/10 bg-white/5 text-muted-foreground"
                    }`}
                  >
                    {isChapterFullyCompleted ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      getChapterIcon(chapter.iconName)
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                        {chapter.titleEn}
                      </span>
                      {isChapterFullyCompleted && (
                        <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                          فصل فتح شد ✓
                        </span>
                      )}
                      {isChapterActive && (
                        <span className="rounded-full bg-amber-400/20 border border-amber-400/40 px-2 py-0.5 text-[10px] font-bold text-amber-300 animate-pulse">
                          فصل جاری
                        </span>
                      )}
                    </div>
                    <h3 className="text-base md:text-lg font-black text-foreground">
                      {chapter.titleFa}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-1">
                      {chapter.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <div className="text-left font-mono text-xs">
                    <span className="font-bold text-amber-400">
                      {chapterCompletedCount} از {chapter.stageNumbers.length}
                    </span>
                    <span className="text-muted-foreground mr-1">مرحله</span>
                  </div>

                  <button
                    type="button"
                    className="p-1 rounded-lg text-muted-foreground hover:text-foreground"
                    aria-label="تغییر وضعیت نمایش فصل"
                  >
                    {isCollapsed ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronUp className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Chapter Stages Grid (if not collapsed) */}
              {!isCollapsed && (
                <div className="p-5 md:p-6 bg-black/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {chapterStages.map((stage) => {
                      const isCompleted = completedStageNumbers.includes(stage.stageNumber);
                      const isActive = stage.stageNumber === activeStageNumber;
                      const isLocked = !isCompleted && !isActive;

                      const categoryMeta = categoriesMeta.find((c) => c.id === stage.category);
                      const stageTermsReadCount = stage.termIds.filter((id) =>
                        readTermIds.includes(id)
                      ).length;
                      const stageTermsTotal = stage.termIds.length;

                      return (
                        <div
                          key={stage.stageNumber}
                          className={`group relative flex flex-col justify-between rounded-2xl border p-4 md:p-5 transition-all duration-200 ${
                            isCompleted
                              ? "border-emerald-500/30 bg-emerald-950/10 hover:border-emerald-500/50"
                              : isActive
                              ? "border-amber-400/80 bg-gradient-to-br from-[#0E1526] to-[#0A0F1D] shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/30"
                              : "border-white/10 bg-white/[0.02] opacity-70 hover:opacity-90"
                          }`}
                        >
                          <div>
                            {/* Stage Header */}
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${
                                    isCompleted
                                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                      : isActive
                                      ? "bg-amber-400 text-black font-black shadow-sm"
                                      : "bg-white/10 text-muted-foreground"
                                  }`}
                                >
                                  {isCompleted ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    stage.stageNumber
                                  )}
                                </span>
                                <span
                                  className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${
                                    categoryMeta?.badgeColor || "border-amber-400/30 bg-amber-400/10 text-amber-300"
                                  }`}
                                >
                                  {categoryMeta?.titleFa || stage.category}
                                </span>
                              </div>

                              {isCompleted && (
                                <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                                  <span>فتح شد</span>
                                  <CheckCircle2 className="h-3 w-3" />
                                </span>
                              )}
                              {isActive && (
                                <span className="text-[10px] font-bold text-amber-300 bg-amber-400/15 border border-amber-400/30 rounded-full px-2 py-0.5 animate-pulse">
                                  قدم فعال ⚡
                                </span>
                              )}
                              {isLocked && (
                                <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-1">
                                  <Lock className="h-3 w-3" />
                                  <span>قفل</span>
                                </span>
                              )}
                            </div>

                            {/* Stage Title & Subtitle */}
                            <h4 className="text-sm md:text-base font-black text-foreground group-hover:text-amber-300 transition-colors">
                              {stage.titleFa}
                            </h4>
                            <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {stage.subtitle}
                            </p>

                            {/* Term Badges */}
                            <div className="mt-3 pt-2.5 border-t border-white/5 space-y-2">
                              <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <BookOpen className="h-3 w-3 text-amber-400" />
                                  <span>اصطلاحات گام:</span>
                                </span>
                                <span className="font-mono text-amber-400 text-[10px]">
                                  {stageTermsReadCount}/{stageTermsTotal}
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-1">
                                {stage.termIds.map((termId) => {
                                  const term = termsMap.get(termId);
                                  const isRead = readTermIds.includes(termId);
                                  return (
                                    <button
                                      key={termId}
                                      type="button"
                                      onClick={() => onSelectTerm(termId)}
                                      className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-medium transition-all ${
                                        isRead
                                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                                          : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground hover:border-amber-400/40"
                                      }`}
                                      title={`مشاهده اصطلاح ${term?.termFa || termId} در حالت Zen`}
                                    >
                                      <span>{term?.termFa || termId}</span>
                                      {isRead && <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="mt-4 pt-3 border-t border-white/5">
                            {isCompleted ? (
                              <button
                                type="button"
                                onClick={() => onStartCheckpoint(stage)}
                                className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition-all"
                              >
                                <RotateCcw className="h-3 w-3" />
                                <span>مرور آزمون</span>
                              </button>
                            ) : isActive ? (
                              <button
                                type="button"
                                onClick={() => onStartCheckpoint(stage)}
                                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-2.5 text-xs font-black text-black hover:opacity-95 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.01]"
                              >
                                <Play className="h-3.5 w-3.5 fill-black" />
                                <span>شروع آزمون سناریو (+۲۰۰ XP)</span>
                              </button>
                            ) : (
                              <button
                                type="button"
                                disabled
                                className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-white/5 bg-white/[0.02] py-2 text-xs font-medium text-muted-foreground/50 cursor-not-allowed"
                              >
                                <Lock className="h-3 w-3" />
                                <span>نیازمند مرحله {stage.stageNumber - 1}</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
