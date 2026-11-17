"use client";

import {
  X,
  Sparkles,
  FileCode2,
  Gauge,
  Printer,
  ArrowLeftRight,
  Award,
  BookOpen,
  Code2,
  ChevronLeft,
  Wrench,
  Compass,
  Cpu,
} from "lucide-react";

interface StudioToolsDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPromptBuilder: () => void;
  onOpenCursorRules: () => void;
  onOpenCalculator: () => void;
  onOpenCheatSheet: () => void;
  onOpenConfusingPairs: () => void;
  onOpenQuiz: () => void;
  onOpenZenMode: () => void;
  onOpenSandbox: () => void;
  onOpenLinter: () => void;
  onOpenPassport: () => void;
  onOpenSpeedChallenge: () => void;
}

export default function StudioToolsDrawerModal({
  isOpen,
  onClose,
  onOpenPromptBuilder,
  onOpenCursorRules,
  onOpenCalculator,
  onOpenCheatSheet,
  onOpenConfusingPairs,
  onOpenQuiz,
  onOpenZenMode,
  onOpenSandbox,
  onOpenLinter,
  onOpenPassport,
  onOpenSpeedChallenge,
}: StudioToolsDrawerModalProps) {
  if (!isOpen) return null;

  const triggerAndClose = (action: () => void) => {
    onClose();
    setTimeout(() => action(), 100);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="studio-drawer-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-6 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-amber-400/40 bg-[#0A0E1A] text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Subtle background ambient */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-5 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/30 text-amber-300 border border-amber-400/30 shadow-md shadow-amber-500/10">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>جعبه‌ابزار مهندسی حسن شاهمرادی</span>
              </div>
              <h3 id="studio-drawer-title" className="text-lg md:text-xl font-black text-foreground">
                استودیو و ابزارهای هوشمند وایب‌کدینگ
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            aria-label="بستن جعبه‌ابزار"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 md:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Section 1: Prompt & Code Engineering */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
              <Cpu className="h-4 w-4" />
              <span>مهندسی پرامپت و ادیتورها</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Prompt Builder */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenPromptBuilder)}
                className="group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right hover:border-amber-400/50 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 group-hover:scale-105 transition-transform">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-amber-300 transition-colors">
                      ژنراتور پرامپت ۵ لایه‌ای
                    </h4>
                    <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    تولید پرامپت استاندارد برای ادیتورهای Cursor و Claude با شروط سلبی ضدخرابی.
                  </p>
                </div>
              </button>

              {/* Cursor Rules */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenCursorRules)}
                className="group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right hover:border-amber-400/50 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:scale-105 transition-transform">
                  <FileCode2 className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-amber-300 transition-colors">
                      دانلود قوانین .cursorrules
                    </h4>
                    <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    فایل اختصاصی قوانین وردپرس و کدنویسی تمیز برای پوشه ریشه پروژه‌های Cursor.
                  </p>
                </div>
              </button>

              {/* Prompt Linter */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenLinter)}
                className="group flex items-start gap-3.5 rounded-2xl border border-emerald-400/40 bg-emerald-400/5 p-4 text-right hover:border-emerald-400/70 hover:bg-emerald-400/10 transition-all sm:col-span-2"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-black font-black shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-foreground group-hover:text-emerald-300 transition-colors">
                        عیب‌یاب و ارتقادهنده هوشمند پرامپت کاربر (Prompt Linter)
                      </h4>
                      <span className="rounded bg-emerald-400/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                        هوشمند
                      </span>
                    </div>
                    <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-emerald-400 group-hover:-translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    پرامپت خام خود را پیست کنید؛ سیستم ۵ لایه را می‌سنجد و با یک کلیک آن را به پرامپت استاندارد ضدخرابی ارتقا می‌دهد.
                  </p>
                </div>
              </button>

              {/* Prompt Sandbox */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenSandbox)}
                className="group flex items-start gap-3.5 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-4 text-right hover:border-amber-400/60 hover:bg-amber-400/10 transition-all sm:col-span-2"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-black font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                  <Code2 className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-foreground group-hover:text-amber-300 transition-colors">
                        سندباکس زنده مقایسه پرامپت (Vibe Playground)
                      </h4>
                      <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                        جدید
                      </span>
                    </div>
                    <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    مشاهده تفاوت پرامپت آماتور که سایت را خراب می‌کند در برابر پرامپت طلایی با شبیه‌ساز پیشخوان وردپرس.
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Section 2: Calculations & Cheat Sheets */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
              <Compass className="h-4 w-4" />
              <span>محاسبات و ابزارهای مهار بافت</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Context Window Calculator */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenCalculator)}
                className="group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right hover:border-amber-400/50 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400 border border-purple-400/20 group-hover:scale-105 transition-transform">
                  <Gauge className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-amber-300 transition-colors">
                      محاسبه‌گر پنجره بافت
                    </h4>
                    <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    تخمین حجم توکن مصرفی پروژه بر اساس خطوط کد و راهکار فوری برای کاهش هزینه.
                  </p>
                </div>
              </button>

              {/* Cheat Sheet */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenCheatSheet)}
                className="group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right hover:border-amber-400/50 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 group-hover:scale-105 transition-transform">
                  <Printer className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-amber-300 transition-colors">
                      چیت‌شیت رومیزی (چاپ/PDF)
                    </h4>
                    <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    نسخه چاپی و متمرکز خلاصه اصطلاحات کلیدی برای قرار دادن روی میز کار برنامه‌نویس.
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Section 3: Deep Understanding & Learning */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
              <Sparkles className="h-4 w-4" />
              <span>تفهیم مفهومی و یادگیری عمیق</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Speed Challenge */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenSpeedChallenge)}
                className="group flex flex-col justify-between rounded-2xl border border-orange-500/40 bg-orange-500/10 p-4 text-right hover:border-orange-500/70 hover:bg-orange-500/15 transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-3">
                  <Compass className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h4 className="font-bold text-xs md:text-sm text-foreground group-hover:text-orange-300 transition-colors">
                      چالش ۶۰ ثانیه‌ای
                    </h4>
                    <span className="rounded bg-orange-500/20 px-1.5 py-0.5 text-[9px] font-bold text-orange-400">
                      سرعتی
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                    مهار ۵ بحران سرور در ۶۰ ثانیه و کسب نشان رفلکس.
                  </p>
                </div>
              </button>

              {/* Skill Passport */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenPassport)}
                className="group flex flex-col justify-between rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4 text-right hover:border-amber-400/70 hover:bg-amber-400/15 transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-amber-400 border border-amber-400/30 mb-3">
                  <Compass className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h4 className="font-bold text-xs md:text-sm text-foreground group-hover:text-amber-300 transition-colors">
                      پاسپورت مهارتی
                    </h4>
                    <span className="rounded bg-amber-400/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-300">
                      اشتراک
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                    کارت پرسونال‌برندینگ جهت اشتراک در لینکدین.
                  </p>
                </div>
              </button>

              {/* Confusing Pairs */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenConfusingPairs)}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right hover:border-amber-400/50 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400 border border-orange-400/20 mb-3">
                  <ArrowLeftRight className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm text-foreground group-hover:text-amber-300 transition-colors">
                    مفاهیم گیج‌کننده
                  </h4>
                  <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                    تفاوت دقیق هوک‌ها، اکشن، فیلتر و ترنزینت.
                  </p>
                </div>
              </button>

              {/* Quiz */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenQuiz)}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right hover:border-amber-400/50 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-400/10 text-pink-400 border border-pink-400/20 mb-3">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm text-foreground group-hover:text-amber-300 transition-colors">
                    کوییز سنجش سطح
                  </h4>
                  <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                    ارزیابی آمادگی برای شروع پروژه‌های جدی.
                  </p>
                </div>
              </button>

              {/* Zen Mode */}
              <button
                type="button"
                onClick={() => triggerAndClose(onOpenZenMode)}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right hover:border-amber-400/50 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400 border border-teal-400/20 mb-3">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm text-foreground group-hover:text-amber-300 transition-colors">
                    حالت مطالعه Zen
                  </h4>
                  <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                    ورق زدن تمام‌صفحه و بدون حواس‌پرتی.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 p-4 px-6 bg-white/[0.01]">
          <span className="text-[11px] text-muted-foreground">
            تمام ابزارها بر اساس استانداردهای مهندسی حسن شاهمرادی توسعه یافته‌اند.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 px-4 py-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>
  );
}
