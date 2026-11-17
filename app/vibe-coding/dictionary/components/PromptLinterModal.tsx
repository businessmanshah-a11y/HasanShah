"use client";

import { useState, useMemo } from "react";
import {
  X,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
  Terminal,
  ShieldAlert,
  ArrowRight,
  Zap,
  Code2,
  Cpu,
} from "lucide-react";
import { playClickSound, playSuccessChime } from "../utils/soundEffects";

interface PromptLinterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LinterCriterion {
  id: string;
  name: string;
  passed: boolean;
  scoreWeight: number;
  message: string;
  recommendation: string;
}

export default function PromptLinterModal({
  isOpen,
  onClose,
}: PromptLinterModalProps) {
  const [userPrompt, setUserPrompt] = useState("");
  const [editorTarget, setEditorTarget] = useState<"cursor" | "claude">("cursor");
  const [upgradedPrompt, setUpgradedPrompt] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Analyze the prompt based on heuristic checks
  const analysis = useMemo(() => {
    const text = userPrompt.trim();
    if (!text) {
      return {
        score: 0,
        criteria: [],
        hasPrompt: false,
      };
    }

    const lower = text.toLowerCase();

    // 1. Check Role
    const hasRole =
      lower.includes("role") ||
      lower.includes("architect") ||
      lower.includes("senior") ||
      lower.includes("expert") ||
      text.includes("نقش") ||
      text.includes("معمار") ||
      text.includes("متخصص") ||
      text.includes("ارشد");

    // 2. Check Context & Target File
    const hasTarget =
      text.includes("@") ||
      lower.includes(".php") ||
      lower.includes(".css") ||
      lower.includes(".json") ||
      lower.includes("functions.php") ||
      lower.includes("mu-plugins") ||
      lower.includes("child theme") ||
      lower.includes("target file") ||
      text.includes("فایل") ||
      text.includes("چایلدتم") ||
      text.includes("پوسته");

    // 3. Check Task (length & action verbs)
    const hasTask =
      text.length >= 15 &&
      (lower.includes("create") ||
        lower.includes("add") ||
        lower.includes("register") ||
        lower.includes("style") ||
        lower.includes("build") ||
        text.includes("بساز") ||
        text.includes("اضافه") ||
        text.includes("بنویس") ||
        text.includes("ایجاد"));

    // 4. Check Negative Constraints
    const hasNegative =
      lower.includes("never") ||
      lower.includes("don't") ||
      lower.includes("do not") ||
      lower.includes("negative") ||
      lower.includes("constraint") ||
      text.includes("دست نزن") ||
      text.includes("پاک نکن") ||
      text.includes("حذف نکن") ||
      text.includes("دستکاری نکن") ||
      text.includes("شروط سلبی") ||
      text.includes("هرگز");

    // 5. Check Security & Output Format
    const hasSecurityAndFormat =
      lower.includes("nonce") ||
      lower.includes("sanitize") ||
      lower.includes("escape") ||
      lower.includes("function_exists") ||
      lower.includes("output format") ||
      lower.includes("strict") ||
      text.includes("نانس") ||
      text.includes("امنیت") ||
      text.includes("فرمت خروجی") ||
      text.includes("فقط کد");

    const criteria: LinterCriterion[] = [
      {
        id: "role",
        name: "۱. تعیین نقش تخصصی ([ROLE])",
        passed: hasRole,
        scoreWeight: 20,
        message: hasRole
          ? "نقش مهندسی مدل تعریف شده است."
          : "هوش مصنوعی نمی‌داند در جایگاه معمار ارشد است یا کدنویس مبتدی!",
        recommendation:
          "ابتدای پرامپت بنویسید: [ROLE]: Senior WordPress Systems Architect",
      },
      {
        id: "target",
        name: "۲. مشخص کردن فایل و کانتکست ([TARGET FILE])",
        passed: hasTarget,
        scoreWeight: 20,
        message: hasTarget
          ? "فایل مقصد یا کانتکست کد مشخص است."
          : "مشخص نیست کد باید کجا درج شود؛ خطر دستکاری و شکستن فایل‌های اصلی!",
        recommendation:
          "از ارجاع فایل استفاده کنید: @wp-content/mu-plugins/hs-feature.php",
      },
      {
        id: "task",
        name: "۳. صراحت دستور کاربری ([TASK])",
        passed: hasTask,
        scoreWeight: 20,
        message: hasTask
          ? "وظیفه عملیاتی صریح و مشخص است."
          : "دستور مبهم یا خیلی کوتاه است و مدل مجبور به حدس زدن می‌شود.",
        recommendation: "هدف دقیق و فیچر مورد نظر را با جزئیات واضح شرح دهید.",
      },
      {
        id: "negative",
        name: "۴. شروط سلبی ضدخرابی ([NEGATIVE CONSTRAINTS])",
        passed: hasNegative,
        scoreWeight: 25,
        message: hasNegative
          ? "شروط سلبی ضد بازنویسی کدهای قبلی فعال است."
          : "خطرناک‌ترین تله! مدل ممکن است کدهای موجود شما را حذف یا بازنویسی کند.",
        recommendation:
          "حتماً اضافه کنید: Never overwrite existing code. Wrap with function_exists.",
      },
      {
        id: "security",
        name: "۵. الزامات امنیتی و فرمت ([SECURITY & OUTPUT])",
        passed: hasSecurityAndFormat,
        scoreWeight: 15,
        message: hasSecurityAndFormat
          ? "الزامات امنیتی یا فرمت خروجی لحاظ شده است."
          : "فاقد الزام به اعتبارسنجی نانس و پاکسازی داده‌ها (خطر آسیب‌پذیری XSS/CSRF).",
        recommendation: "تأکید کنید: Always verify nonces and sanitize inputs.",
      },
    ];

    const score = criteria.reduce((sum, c) => (c.passed ? sum + c.scoreWeight : sum), 0);

    return {
      score,
      criteria,
      hasPrompt: true,
    };
  }, [userPrompt]);

  if (!isOpen) return null;

  const handleUpgradePrompt = () => {
    playSuccessChime();
    const cleanTask = userPrompt.trim() || "ساخت و پیکربندی قابلیت اختصاصی وردپرس";

    let upgraded = "";
    if (editorTarget === "cursor") {
      upgraded = `[ROLE]: Senior WordPress Systems Architect
[CONTEXT & TARGET FILE]: Target file is @wp-content/mu-plugins/hs-feature.php. Do not touch or overwrite active theme files.
[TASK]: ${cleanTask}
[NEGATIVE CONSTRAINTS]: Never rewrite entire files. Always wrap custom function definitions with if (!function_exists('hs_...')). Prefix all functions, action hooks, and filters with hs_. Never remove existing registrations.
[OUTPUT FORMAT]: Production-ready PHP code only, enclosed in <?php with defined('ABSPATH') || exit; security check and strict type safety.`;
    } else {
      upgraded = `[ROLE]: Lead WordPress Core & Security Architect
[CONTEXT]: High-traffic production WordPress 6.7 environment running on PHP 8.3 with WooCommerce.
[TASK]: ${cleanTask}
[NEGATIVE CONSTRAINTS]: Do not touch core WordPress files. Prevent duplicate function declarations using function_exists. Verify nonces with check_ajax_referer or wp_verify_nonce for any POST/REST data.
[OUTPUT FORMAT]: Clean, standalone, isolated MU-Plugin PHP file with strict security sanitization (sanitize_text_field) and proper priority ordering.`;
    }

    setUpgradedPrompt(upgraded);
  };

  const handleCopy = () => {
    if (!upgradedPrompt) return;
    playClickSound();
    navigator.clipboard.writeText(upgradedPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const scoreColor =
    analysis.score >= 80
      ? "text-emerald-400 border-emerald-500/40 bg-emerald-500/10"
      : analysis.score >= 50
      ? "text-amber-400 border-amber-400/40 bg-amber-400/10"
      : "text-rose-400 border-rose-500/40 bg-rose-500/10";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="linter-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-6 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-amber-400/40 bg-[#080C16] text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-5 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/30">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>موتور تحلیل ساختاری پرامپت (Prompt Linter)</span>
              </div>
              <h3 id="linter-modal-title" className="text-base md:text-lg font-black text-foreground">
                عیب‌یاب و ارتقادهنده هوشمند پرامپت کاربر
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            aria-label="بستن عیب‌یاب"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 md:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Input Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="user-prompt-input" className="font-bold text-foreground flex items-center gap-1.5">
                <Terminal className="h-4 w-4 text-amber-400" />
                <span>پرامپت شخصی خود را اینجا پیست کنید:</span>
              </label>
              <span className="text-muted-foreground text-[11px]">
                مثال: «یه تابع بنویس که قیمت محصولات رو با تخفیف نشون بده»
              </span>
            </div>

            <textarea
              id="user-prompt-input"
              rows={4}
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="پرامپتی که می‌خواهید به Cursor Composer یا Claude بدهید را اینجا بنویسید یا پیست کنید..."
              className="w-full rounded-2xl border border-white/15 bg-background/80 p-4 text-xs md:text-sm text-foreground placeholder:text-muted-foreground focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-sans leading-relaxed"
            />
          </div>

          {/* Real-time Analysis Result */}
          {analysis.hasPrompt && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-4 animate-in fade-in duration-200">
              {/* Score Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-muted-foreground font-bold block mb-1">
                    امتیاز سلامت مهندسی پرامپت شما:
                  </span>
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center rounded-xl border px-3 py-1 font-mono text-xl font-black ${scoreColor}`}>
                      {analysis.score} / ۱۰۰
                    </span>
                    <span className="text-xs font-bold text-foreground">
                      {analysis.score >= 80
                        ? "عالی و استاندارد! خطر خرابکاری مدل نزدیک به صفر است."
                        : analysis.score >= 50
                        ? "هشدار: پرامپت دارای ابهام است و شروط سلبی ندارد."
                        : "خطرناک! این پرامپت احتمالاً کدهای قالب شما را به هم می‌ریزد."}
                    </span>
                  </div>
                </div>

                {/* Editor Switcher */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setEditorTarget("cursor")}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                      editorTarget === "cursor"
                        ? "bg-amber-400 text-black font-black shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Cursor Composer (@files)
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorTarget("claude")}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                      editorTarget === "claude"
                        ? "bg-amber-400 text-black font-black shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Claude 3.5 Sonnet
                  </button>
                </div>
              </div>

              {/* 5-Layer Checklist */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-muted-foreground block">
                  وضعیت ۵ لایه بنیادین پرامپت:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {analysis.criteria.map((cr) => (
                    <div
                      key={cr.id}
                      className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs ${
                        cr.passed
                          ? "border-emerald-500/30 bg-emerald-950/10 text-emerald-200"
                          : "border-rose-500/30 bg-rose-950/10 text-rose-200"
                      }`}
                    >
                      {cr.passed ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <strong className="block font-bold">{cr.name}</strong>
                        <p className="mt-0.5 text-[11px] opacity-85 leading-relaxed">
                          {cr.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Auto-Upgrade to 5-layer */}
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={handleUpgradePrompt}
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 px-6 py-3 text-xs md:text-sm font-black text-black hover:opacity-95 shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="h-4 w-4 fill-black" />
                  <span>ارتقای آنی به پرامپت ۵ لایه‌ای طلایی حسن شاهمرادی ✨</span>
                </button>
              </div>
            </div>
          )}

          {/* Upgraded Prompt Result Box */}
          {upgradedPrompt && (
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-950/15 p-5 space-y-3 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs md:text-sm">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>پرامپت ارتقایافته و استاندارد شما آماده است:</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-black hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
                >
                  {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{isCopied ? "کپی شد ✓" : "کپی پرامپت طلایی"}</span>
                </button>
              </div>

              <div
                className="rounded-xl border border-emerald-500/30 bg-[#060911] p-4 text-xs md:text-sm font-mono text-emerald-200 leading-relaxed whitespace-pre-wrap select-all text-left"
                dir="ltr"
              >
                {upgradedPrompt}
              </div>

              <p className="text-[11px] text-muted-foreground leading-relaxed">
                این پرامپت را مستقیماً در ادیتور Cursor یا چت Claude پیست کنید. شروط سلبی و نام فایل اختصاصی مانع از شکستن فایل‌های قالب یا اختلال در توابع دیگر خواهد شد.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-white/10 p-4 px-6 bg-white/[0.01]">
          <span className="text-[11px] text-muted-foreground">
            موتور تحلیل بر مبنای استانداردهای clean code و شروط سلبی وردپرس عمل می‌کند.
          </span>
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
  );
}
