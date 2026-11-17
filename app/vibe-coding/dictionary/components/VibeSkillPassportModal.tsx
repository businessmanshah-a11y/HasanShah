"use client";

import { useState } from "react";
import {
  X,
  Share2,
  Copy,
  Check,
  Award,
  Crown,
  Sparkles,
  Printer,
  Flame,
  CheckCircle2,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { UserGamificationProfile } from "../data/types";
import { gamificationBadges, calculateUserLevel } from "../data/quest-stages";
import { playClickSound, playSuccessChime } from "../utils/soundEffects";

interface VibeSkillPassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserGamificationProfile;
}

export default function VibeSkillPassportModal({
  isOpen,
  onClose,
  profile,
}: VibeSkillPassportModalProps) {
  const [studentName, setStudentName] = useState("مهندس وایب‌کدینگ");
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const levelInfo = calculateUserLevel(profile.xp);
  const passportId = `HS-PASSPORT-2026-${Math.abs(profile.xp * 7 + 42).toString(16).toUpperCase()}`;

  const linkedInShareText = `🚀 من در حال گذراندن مأموریت تخصصی «وایب‌کدینگ وردپرس با هوش مصنوعی» در آکادمی مهندسی حسن شاهمرادی هستم.

🏆 سطح مهارتی من: ${levelInfo.rankTitle} (سطح ${levelInfo.level})
⚡ امتیاز تجربه کسب‌شده: ${profile.xp.toLocaleString("fa-IR")} XP
🔥 پیوستگی روزانه: ${profile.streakDays} روز پیاپی
🏅 نشان‌های افتخار: ${profile.unlockedBadgeIds.length} از ۶ نشان

یادگیری معماری اصولی، مهار پرامپت‌های ۵ لایه‌ای و توسعه بدون باگ با هوش مصنوعی:
https://hasanshah.ir/vibe-coding/dictionary/`;

  const handleCopyLinkedIn = () => {
    playSuccessChime();
    navigator.clipboard.writeText(linkedInShareText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="passport-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-6 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-400/50 bg-[#070A12] text-foreground shadow-2xl p-5 md:p-8"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Modal Controls */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5 print:hidden">
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-amber-400" />
            <h3 id="passport-modal-title" className="text-base font-black text-foreground">
              شناسنامه و پاسپورت مهارتی وایب‌کدینگ (Vibe Skill Passport)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            aria-label="بستن پاسپورت"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Student Name Input Bar (Print Hidden) */}
        <div className="mb-5 flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs print:hidden">
          <label htmlFor="passport-name-input" className="text-muted-foreground font-bold shrink-0">
            نام جهت درج روی پاسپورت:
          </label>
          <input
            id="passport-name-input"
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="نام خود را بنویسید..."
            className="flex-1 w-full rounded-xl border border-white/15 bg-background/80 px-3 py-1.5 text-sm font-bold text-amber-300 focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* ── Luxury Skill Passport Card ── */}
        <div
          id="printable-passport"
          className="relative overflow-hidden rounded-3xl border-2 border-amber-400/60 bg-gradient-to-b from-[#0E1528] via-[#090D18] to-[#04060C] p-6 md:p-8 shadow-2xl"
          style={{
            boxShadow: "0 0 50px -10px rgba(245, 158, 11, 0.2)",
          }}
        >
          {/* Decorative Guilloche Corner Accents */}
          <div className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-amber-400/70 rounded-tr-md pointer-events-none" />
          <div className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-amber-400/70 rounded-tl-md pointer-events-none" />
          <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-amber-400/70 rounded-br-md pointer-events-none" />
          <div className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-amber-400/70 rounded-bl-md pointer-events-none" />

          {/* Background Watermark Crest */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
            <Crown className="h-80 w-80 text-amber-400" />
          </div>

          {/* Passport Header */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="text-center sm:text-right">
              <span className="font-mono text-[10px] text-amber-400 font-bold tracking-widest uppercase block">
                HASAN SHAH VIBE CODING ACADEMY
              </span>
              <h4 className="text-lg md:text-xl font-black text-foreground mt-0.5">
                پاسپورت شایستگی وایب‌کدینگ وردپرس
              </h4>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-xs font-black text-amber-300">
              <Crown className="h-4 w-4" />
              <span>سطح {levelInfo.level}</span>
            </div>
          </div>

          {/* Student Profile Info */}
          <div className="relative z-10 my-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-right">
            {/* Student Avatar / Badge Seal */}
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-amber-400/60 bg-gradient-to-br from-amber-400/20 to-amber-600/40 text-amber-300 shadow-lg shadow-amber-500/20">
              <span className="text-3xl font-black">★</span>
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[11px] text-muted-foreground block font-bold">نام و نام خانوادگی:</span>
              <h3 className="text-2xl font-black text-white truncate mt-0.5">
                {studentName || "دانشجوی وایب‌کدینگ"}
              </h3>
              <p className="mt-1 text-sm font-bold text-amber-300">
                {levelInfo.rankTitle}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 text-center">
            <div>
              <span className="text-[10px] text-muted-foreground block font-bold">امتیاز تجربه:</span>
              <span className="text-sm md:text-base font-black text-amber-400 font-mono">
                {profile.xp.toLocaleString("fa-IR")} XP
              </span>
            </div>
            <div className="border-x border-white/10">
              <span className="text-[10px] text-muted-foreground block font-bold">پیوستگی روزانه:</span>
              <span className="text-sm md:text-base font-black text-orange-400 flex items-center justify-center gap-1">
                <Flame className="h-3.5 w-3.5 fill-orange-400" />
                <span>{profile.streakDays} روز</span>
              </span>
            </div>
            <div>
              <span className="text-[10px] text-muted-foreground block font-bold">نشان‌های کسب‌شده:</span>
              <span className="text-sm md:text-base font-black text-cyan-400 font-mono">
                {profile.unlockedBadgeIds.length} از {gamificationBadges.length}
              </span>
            </div>
          </div>

          {/* Passport Footer */}
          <div className="relative z-10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-4 text-[11px] text-muted-foreground">
            <div>
              <span>کد اعتبارسنجی: </span>
              <strong className="font-mono text-amber-400" dir="ltr">
                {passportId}
              </strong>
            </div>

            <div className="flex items-center gap-1.5 text-foreground font-bold">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>مورد تایید استودیو معماری حسن شاهمرادی</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 print:hidden">
          <button
            type="button"
            onClick={handleCopyLinkedIn}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-xs font-black text-black hover:opacity-95 shadow-md shadow-amber-500/20 transition-all"
          >
            {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span>{isCopied ? "متن لینکدین کپی شد ✓" : "کپی متن جهت اشتراک در لینکدین 📋"}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-foreground hover:bg-white/10 transition-colors"
            >
              <Printer className="h-4 w-4 text-amber-400" />
              <span>چاپ / ذخیره تصویر</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-4 py-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
