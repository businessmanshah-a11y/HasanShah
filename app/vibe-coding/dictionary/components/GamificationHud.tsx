"use client";

import { useState, useEffect } from "react";
import {
  Trophy,
  Flame,
  Sparkles,
  Zap,
  Shield,
  Palette,
  Terminal,
  Crown,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle2,
  Lock,
  Gamepad2,
  BookOpen,
  Share2,
  Volume2,
  VolumeX,
  Compass,
  Timer,
} from "lucide-react";
import { UserGamificationProfile, GamificationBadge } from "../data/types";
import { gamificationBadges, calculateUserLevel } from "../data/quest-stages";
import { isSoundMuted, toggleSoundMute, playClickSound } from "../utils/soundEffects";

interface GamificationHudProps {
  profile: UserGamificationProfile;
  activeView: "quest" | "reference";
  onToggleView: (view: "quest" | "reference") => void;
  onOpenCertificate: () => void;
  onOpenPassport: () => void;
  onOpenSpeedChallenge: () => void;
  onOpenZeroToHero?: () => void;
  onOpenFirstProject?: () => void;
  completedStagesCount: number;
  totalStagesCount: number;
  readTermsCount?: number;
  totalTermsCount?: number;
}

export default function GamificationHud({
  profile,
  activeView,
  onToggleView,
  onOpenCertificate,
  onOpenPassport,
  onOpenSpeedChallenge,
  onOpenZeroToHero,
  onOpenFirstProject,
  completedStagesCount,
  totalStagesCount,
  readTermsCount,
  totalTermsCount,
}: GamificationHudProps) {
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(isSoundMuted());
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSoundMute();
    setMuted(newState);
    if (!newState) {
      playClickSound();
    }
  };

  const levelInfo = calculateUserLevel(profile.xp);
  const isMasterVibeCoder = completedStagesCount >= totalStagesCount;

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="h-5 w-5" />;
      case "Palette":
        return <Palette className="h-5 w-5" />;
      case "Zap":
        return <Zap className="h-5 w-5" />;
      case "Terminal":
        return <Terminal className="h-5 w-5" />;
      case "Shield":
        return <Shield className="h-5 w-5" />;
      case "Crown":
        return <Crown className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  return (
    <>
      {/* ── Persistent HUD Bar ── */}
      <aside aria-label="پنل امتیازات و مأموریت" className="sticky top-20 z-30 mx-auto mb-8 max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-amber-400/30 bg-[#0B0F19]/90 p-3 md:p-4 backdrop-blur-xl shadow-2xl transition-all">
          {/* Subtle gold ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Left/Start: Level, Rank, and XP bar */}
            <div className="flex flex-1 items-center gap-3">
              {/* Level Badge Circle */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-400/50 bg-gradient-to-br from-amber-400/20 to-amber-600/30 text-amber-300 shadow-md shadow-amber-500/20">
                <span className="text-xs font-black">سطح {levelInfo.level}</span>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-black">
                  ★
                </span>
              </div>

              {/* Rank & XP bar */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <span className="truncate text-xs md:text-sm font-black text-foreground">
                      {levelInfo.rankTitle}
                    </span>
                    <span className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[11px] font-bold text-amber-300">
                      {profile.xp.toLocaleString("fa-IR")} XP
                    </span>
                  </div>
                  <span className="shrink-0 text-[11px] text-muted-foreground font-mono">
                    تا سطح بعد: {levelInfo.nextLevelXp - profile.xp > 0 ? (levelInfo.nextLevelXp - profile.xp).toLocaleString("fa-IR") : "۰"} XP
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 transition-all duration-700 rounded-full"
                    style={{ width: `${Math.max(5, levelInfo.progressPercent)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Center: Quick Stats (Streak, Stages, Badges) */}
            <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-2 md:border-t-0 md:pt-0">
              {/* Streak */}
              <div
                className="flex items-center gap-1.5 rounded-xl border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-xs font-bold text-orange-400"
                title="روزهای پیاپی یادگیری فعال"
              >
                <Flame className="h-4 w-4 fill-orange-400 animate-pulse text-orange-500" />
                <span>{profile.streakDays} روز پیوستگی</span>
              </div>

              {/* Stages Completed */}
              <div
                className="flex items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-300"
                title="مراحل فتح‌شده از نقشه مأموریت"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>
                  {completedStagesCount} از {totalStagesCount} مرحله
                </span>
              </div>

              {/* Reading Progress Pill */}
              {readTermsCount !== undefined && totalTermsCount !== undefined && (
                <div
                  className="hidden lg:flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-muted-foreground"
                  title="میزان مطالعه کل دانشنامه"
                >
                  <BookOpen className="h-4 w-4 text-amber-400" />
                  <span>
                    {readTermsCount}/{totalTermsCount} اصطلاح
                  </span>
                </div>
              )}

              {/* Badges Modal Trigger */}
              <button
                type="button"
                onClick={() => setIsBadgesModalOpen(true)}
                className="flex items-center gap-1.5 rounded-xl border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400/20 transition-all"
                title="مشاهده تالار افتخارات و نشان‌های کسب‌شده"
              >
                <Trophy className="h-4 w-4 text-amber-400" />
                <span>
                  {profile.unlockedBadgeIds.length} از {gamificationBadges.length} نشان
                </span>
              </button>
            </div>

            {/* Right/End: Quick Tools, Sound Toggle, Mode Switcher */}
            <div className="flex flex-wrap items-center justify-end gap-2 border-t border-white/10 pt-2 md:border-t-0 md:pt-0">
              {/* Zero to Hero Guide Button */}
              {onOpenZeroToHero && (
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    onOpenZeroToHero();
                  }}
                  className="inline-flex items-center gap-1 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition-all"
                  title="راهنمای شروع سریع افراد صفرِ صفر"
                >
                  <Compass className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">شروع از صفر</span>
                </button>
              )}

              {/* Speed Challenge Button */}
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onOpenSpeedChallenge();
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-orange-500/40 bg-orange-500/10 px-2.5 py-1.5 text-xs font-bold text-orange-400 hover:bg-orange-500/20 transition-all"
                title="شروع چالش ۶۰ ثانیه‌ای عیب‌یابی بحران‌های وردپرس"
              >
                <Timer className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">چالش ۶۰s</span>
              </button>

              {/* Passport Button */}
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onOpenPassport();
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-amber-400/30 bg-amber-400/10 px-2.5 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400/20 transition-all"
                title="مشاهده شناسنامه و پاسپورت مهارتی"
              >
                <Compass className="h-3.5 w-3.5 text-amber-400" />
                <span className="hidden sm:inline">پاسپورت</span>
              </button>

              {/* Sound Mute/Unmute Toggle */}
              <button
                type="button"
                onClick={handleToggleSound}
                className="p-1.5 rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-amber-300 transition-colors"
                title={muted ? "فعال‌سازی افکت‌های صوتی" : "بی‌صدا کردن (Mute)"}
                aria-label={muted ? "فعال‌سازی افکت‌های صوتی" : "بی‌صدا کردن"}
              >
                {muted ? (
                  <VolumeX className="h-4 w-4 text-rose-400" />
                ) : (
                  <Volume2 className="h-4 w-4 text-amber-400" />
                )}
              </button>

              {/* Certificate Button (Available if Completed or to Preview) */}
              {isMasterVibeCoder ? (
                <button
                  type="button"
                  onClick={onOpenCertificate}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-2 text-xs font-black text-black hover:opacity-95 shadow-md shadow-amber-500/30 animate-bounce transition-all"
                  title="مأموریت کامل شد! دریافت گواهینامه معتبر"
                >
                  <Award className="h-4 w-4" />
                  <span>دریافت مدرک رسمی 🎓</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onOpenCertificate}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/20 bg-amber-400/5 px-2.5 py-1.5 text-[11px] font-bold text-amber-300 hover:bg-amber-400/15 transition-all"
                  title="پیش‌نمایش گواهی پایان دوره وایب‌کدینگ"
                >
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  <span className="hidden sm:inline">پیش‌نمایش مدرک</span>
                </button>
              )}

              {/* Mode Toggle Switch */}
              <div className="flex items-center rounded-xl border border-white/10 bg-black/40 p-1">
                <button
                  type="button"
                  onClick={() => onToggleView("quest")}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                    activeView === "quest"
                      ? "bg-amber-400 text-black shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Gamepad2 className="h-3.5 w-3.5" />
                  <span>نقشه مأموریت</span>
                </button>
                <button
                  type="button"
                  onClick={() => onToggleView("reference")}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                    activeView === "reference"
                      ? "bg-amber-400 text-black shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>مرجع اصطلاحات</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Badges Shelf Modal (تالار افتخارات) ── */}
      {isBadgesModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="badges-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsBadgesModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0B0F19] p-6 text-foreground shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/30">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h3 id="badges-modal-title" className="text-lg font-black text-foreground">
                    تالار افتخارات و نشان‌های وایب‌کدینگ
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    با عبور از چک‌پوینت‌های سناریومحور مراحل، این نشان‌های افتخار را باز کنید
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsBadgesModalOpen(false)}
                className="rounded-xl p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
                aria-label="بستن پنجره"
              >
                ✕
              </button>
            </div>

            {/* Badges Grid */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[60vh] overflow-y-auto pr-1">
              {gamificationBadges.map((badge) => {
                const isUnlocked = profile.unlockedBadgeIds.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`relative flex items-start gap-3 rounded-2xl border p-4 transition-all ${
                      isUnlocked
                        ? "border-amber-400/50 bg-gradient-to-br from-amber-400/10 via-white/[0.02] to-amber-600/10 shadow-lg shadow-amber-500/10"
                        : "border-white/5 bg-white/[0.02] opacity-60 grayscale hover:grayscale-0 hover:opacity-80"
                    }`}
                  >
                    {/* Badge Icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                        isUnlocked
                          ? `border-amber-400/50 bg-gradient-to-br ${badge.gradientColor} text-black shadow-md`
                          : "border-white/10 bg-white/5 text-muted-foreground"
                      }`}
                    >
                      {isUnlocked ? getBadgeIcon(badge.iconName) : <Lock className="h-5 w-5" />}
                    </div>

                    {/* Badge Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-bold text-sm text-foreground">
                          {badge.titleFa}
                        </h4>
                        {isUnlocked ? (
                          <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                            کسب‌شده ✓
                          </span>
                        ) : (
                          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                            مرحله {badge.stageRequired}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 font-mono text-[10px] text-amber-400/80">
                        {badge.titleEn}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Summary */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-muted-foreground">
                  مجموع امتیاز جاری: <strong className="text-amber-400">{profile.xp.toLocaleString("fa-IR")} XP</strong>
                </span>
                <span className="text-white/20 hidden sm:inline">•</span>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      typeof window !== "undefined" &&
                      window.confirm("آیا مطمئن هستید که می‌خواهید پیشرفت مأموریت‌ها، امتیازات و نشان‌ها را پاک کرده و از مرحله ۱ شروع کنید؟")
                    ) {
                      try {
                        localStorage.removeItem("vibe_gamification_profile");
                        localStorage.removeItem("vibe_dict_read_terms");
                        window.location.reload();
                      } catch {}
                    }
                  }}
                  className="text-[11px] text-rose-400/90 hover:text-rose-300 underline underline-offset-4 transition-colors"
                >
                  شروع مجدد مأموریت از صفر
                </button>
              </div>
              <button
                type="button"
                onClick={() => setIsBadgesModalOpen(false)}
                className="w-full sm:w-auto rounded-xl bg-amber-400 px-5 py-2 text-xs font-bold text-black hover:bg-amber-300 transition-colors"
              >
                ادامه ماجراجویی
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
