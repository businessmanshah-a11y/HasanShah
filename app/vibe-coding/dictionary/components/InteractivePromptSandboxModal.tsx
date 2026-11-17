"use client";

import { useState } from "react";
import {
  X,
  Code2,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  RotateCw,
  Terminal,
  ShieldAlert,
  Zap,
  ArrowRightLeft,
} from "lucide-react";

interface InteractivePromptSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SandboxScenario {
  id: string;
  title: string;
  categoryBadge: string;
  amateurPrompt: string;
  amateurErrorOutput: {
    terminalLog: string;
    wpAdminResult: string;
    whyItFailed: string;
  };
  goldenPromptCursor: string;
  goldenPromptClaude: string;
  goldenSuccessOutput: {
    terminalLog: string;
    wpAdminResult: string;
    whyItSucceeded: string;
  };
}

const sandboxScenarios: SandboxScenario[] = [
  {
    id: "cpt-metabox",
    title: "ساخت پست تایپ اختصاصی برای نمونه‌کارها (CPT)",
    categoryBadge: "هسته و دیتابیس",
    amateurPrompt: "یه کد بنویس که پست تایپ portfolio رو به وردپرس اضافه کنه و چندتا فیلد کاستوم داشته باشه.",
    amateurErrorOutput: {
      terminalLog: `Fatal error: Cannot redeclare hs_register_portfolio() (previously declared in /themes/child/functions.php:42) in /themes/child/functions.php on line 118
Call Stack:
  1. {main}() /wp-admin/index.php:0
  2. require_once('/wp-settings.php')
  3. do_action('init')`,
      wpAdminResult: "صفحه سفید مرگ (WSOD) • خطای سرور ۵۰۰ • دسترسی به پیشخوان قطع شد!",
      whyItFailed: "مدل تابع را بدون پیشوند اختصاصی و بدون function_exists نوشت، کدهای قبلی functions.php را پاک کرد و با ریفرش سایت تداخل تابع رخ داد.",
    },
    goldenPromptCursor: `[ROLE]: Senior WordPress Systems Architect
[CONTEXT & TARGET FILE]: Target file is @wp-content/mu-plugins/hs-portfolio.php. Do not touch active theme files.
[TASK]: Register a custom post type 'hs_portfolio' with REST API support and custom taxonomy 'portfolio_category'.
[NEGATIVE CONSTRAINTS]: Never overwrite functions.php. Always wrap function declarations with if (!function_exists()). Prefix all functions and hooks with hs_. Never remove existing registrations.
[OUTPUT FORMAT]: Provide PHP code only, enclosed in <?php with strict types and security exit check.`,
    goldenPromptClaude: `[ROLE]: Senior WordPress Core Architect
[CONTEXT]: High-traffic production WooCommerce site running WordPress 6.7 on PHP 8.3.
[TASK]: Create a standalone MU-Plugin file 'hs-portfolio-cpt.php' registering 'hs_portfolio' with Gutenberg & REST support.
[NEGATIVE CONSTRAINTS]: Do not touch theme files. Ensure zero database table bloat. Must include defined('ABSPATH') || exit; and verify nonces for any meta saves.
[OUTPUT FORMAT]: Clean PHP file with security headers, proper hook priorities (priority 10 on init), and strict types.`,
    goldenSuccessOutput: {
      terminalLog: `[SUCCESS] File wp-content/mu-plugins/hs-portfolio.php created.
[PHP Lint] Syntax check: No errors detected in hs-portfolio.php
[WP Hook] 'init' priority 10 hooked to 'hs_register_portfolio_cpt'
[REST API] Route /wp/v2/hs_portfolio registered successfully (200 OK)`,
      wpAdminResult: "آیتم «نمونه‌کارها» به منوی پیشخوان اضافه شد • ویرایشگر گوتنبرگ فعال است • صفر میلی‌ثانیه تاخیر در لود!",
      whyItSucceeded: "به دلیل استفاده از MU-Plugin و شروط سلبی سخت‌گیرانه، قالب شکسته نشد و هیچ تداخلی با سایر توابع به وجود نیامد.",
    },
  },
  {
    id: "security-nonce",
    title: "فرم پرداخت و ارسال اطلاعات با ایجکس (Ajax & Nonce)",
    categoryBadge: "امنیت و API",
    amateurPrompt: "یه اسکریپت با جی‌کوئری بنویس که وقتی کاربر رو دکمه پرداخت کلیک کرد دیتا رو بفرسته به سرور ذخیره کنه.",
    amateurErrorOutput: {
      terminalLog: `[SECURITY ALERT - Wordfence]: CSRF Vulnerability detected in /wp-admin/admin-ajax.php
Payload accepted without Nonce verification!
Malicious bot sent 4,200 spoofed requests in 60 seconds.
Database wp_options table size increased by 140MB!`,
      wpAdminResult: "آسیب‌پذیری بحرانی CSRF • امکان نفوذ هکرها و ارسال دیتای فیک به دیتابیس!",
      whyItFailed: "مدل از هیچ توکن نانس (Nonce) یا بررسی سطح دسترسی استفاده نکرد؛ فرم برای هر ربات ناشناسی در اینترنت باز بود.",
    },
    goldenPromptCursor: `[ROLE]: Lead WordPress Security Specialist
[CONTEXT & TARGET FILE]: Adding Ajax endpoint in @wp-content/mu-plugins/hs-checkout-handler.php.
[TASK]: Handle POST request for checkout data with CSRF protection and data sanitization.
[NEGATIVE CONSTRAINTS]: Reject request immediately with wp_send_json_error if check_ajax_referer('hs_checkout_action', 'security', false) fails. Sanitize all $_POST fields with sanitize_text_field(). Never use raw $_POST.
[OUTPUT FORMAT]: Complete PHP handler with check_ajax_referer and wp_send_json_success.`,
    goldenPromptClaude: `[ROLE]: WordPress Security Architect
[CONTEXT]: Production checkout flow with REST or Admin-Ajax handling sensitive user data.
[TASK]: Write server-side PHP endpoint verifying user capabilities and one-time nonces before database write.
[NEGATIVE CONSTRAINTS]: Zero unsanitized input. Enforce check_ajax_referer or wp_verify_nonce. Return JSON HTTP 403 on invalid tokens.
[OUTPUT FORMAT]: Production-grade PHP snippet with explicit capability check current_user_can('read').`,
    goldenSuccessOutput: {
      terminalLog: `[AUTH PASS] Nonce 'hs_checkout_action' verified via check_ajax_referer.
[SECURITY] All POST parameters sanitized with sanitize_text_field().
[AUDIT] CSRF Protection: 100% Active.
[HTTP RESPONSE] Status 200 OK - application/json`,
      wpAdminResult: "درخواست‌ها با توکن یکبارمصرف ضدجعل امن شدند • ربات‌های نفوذگر در میلی‌ثانیه اول ریجکت می‌شوند!",
      whyItSucceeded: "شرط سلبی سخت‌گیرانه مدل را وادار کرد قبل از هر کاری، توکن نانس و اعتبارسنجی را مستقر کند.",
    },
  },
  {
    id: "cls-fluid-css",
    title: "طراحی کارت محصولات بدون پرش چیدمان (CLS = 0)",
    categoryBadge: "طراحی و پرفورمنس",
    amateurPrompt: "یه استایل شیک برای کارت‌های سایت بنویس که انیمیشن هاور جذاب داشته باشه.",
    amateurErrorOutput: {
      terminalLog: `[Lighthouse Audit Warning]: Cumulative Layout Shift (CLS) = 0.48 (POOR - RED)
Web Vitals: Elements jumped 180px after custom font loaded!
PageSpeed Score dropped from 94 to 58 on Mobile.`,
      wpAdminResult: "پرش شدید المان‌های صفحه هنگام لود شدن فونت • نمره منفی لایت‌هاوس گوگل!",
      whyItFailed: "مدل برای تصاویر و فونت‌ها ابعاد و نسبت ثابت (aspect-ratio) تعیین نکرد و انیمیشن‌ها روی ویژگی‌های سنگین رندر شدند.",
    },
    goldenPromptCursor: `[ROLE]: Frontend Performance Architect
[CONTEXT & TARGET FILE]: Modifying card component in @globals.css. Target CLS is 0.00.
[TASK]: Style product cards with fluid typography using clamp() and modern hover micro-interactions.
[NEGATIVE CONSTRAINTS]: Never use fixed pixel heights. Always define aspect-ratio on image containers. Use only transform and opacity for animations. Never animate layout properties (top, left, height).
[OUTPUT FORMAT]: Pure modern CSS using CSS variables and container queries.`,
    goldenPromptClaude: `[ROLE]: CSS Performance Specialist
[CONTEXT]: Ultra-luxury responsive WordPress site aiming for 100/100 Core Web Vitals.
[TASK]: Write zero-CLS card styles utilizing fluid clamp() font sizing and CSS tokens.
[NEGATIVE CONSTRAINTS]: Do not cause layout re-calculations. Use aspect-ratio: 16/9 for media wrappers.
[OUTPUT FORMAT]: Modular CSS class set respecting reduced-motion preferences.`,
    goldenSuccessOutput: {
      terminalLog: `[Lighthouse Audit Pass]: Cumulative Layout Shift (CLS) = 0.000 (PERFECT - GREEN)
[Web Vitals] First Contentful Paint: 0.6s • Total Blocking Time: 0ms
[Performance Score]: 100/100 on Mobile and Desktop`,
      wpAdminResult: "صفر میلی‌متر جابه‌جایی ناگهانی در صفحه • تجربه کاربری ابریشمی و نمره ۱۰۰ سبز گوگل!",
      whyItSucceeded: "به دلیل قید منفی «عدم انیمیت روی پراپرتی‌های چیدمان» و نسبت تصویر ثابت، پرش صفحه به صفر رسید.",
    },
  },
];

export default function InteractivePromptSandboxModal({
  isOpen,
  onClose,
}: InteractivePromptSandboxModalProps) {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("cpt-metabox");
  const [activeMode, setActiveMode] = useState<"amateur" | "golden">("golden");
  const [editorType, setEditorType] = useState<"cursor" | "claude">("cursor");
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const currentScenario =
    sandboxScenarios.find((s) => s.id === activeScenarioId) || sandboxScenarios[0];

  const currentPrompt =
    activeMode === "amateur"
      ? currentScenario.amateurPrompt
      : editorType === "cursor"
      ? currentScenario.goldenPromptCursor
      : currentScenario.goldenPromptClaude;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sandbox-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-6 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-amber-400/40 bg-[#080C16] text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 p-5 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/30">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                  شبیه‌ساز تعاملی وایب‌کدینگ
                </span>
                <span className="text-xs text-muted-foreground">آزمایشگاه پرامپت ۵ لایه‌ای</span>
              </div>
              <h3 id="sandbox-modal-title" className="text-base md:text-lg font-black text-foreground">
                سندباکس زنده: پرامپت آماتور در برابر پرامپت طلایی
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            aria-label="بستن سندباکس"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scenarios Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-white/10 bg-white/[0.02] p-3 px-5 md:px-7">
          <span className="text-xs font-bold text-muted-foreground shrink-0 ml-2">
            انتخاب سناریوی واقعی:
          </span>
          {sandboxScenarios.map((sc) => (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveScenarioId(sc.id)}
              className={`shrink-0 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                sc.id === activeScenarioId
                  ? "border border-amber-400/50 bg-amber-400/15 text-amber-300 shadow-sm"
                  : "border border-white/5 bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Sandbox Core Area */}
        <div className="p-5 md:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Mode Switcher Banner: Amateur vs Golden */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#060911] p-2">
            <div className="flex items-center w-full sm:w-auto p-1 rounded-xl bg-black/40 border border-white/5">
              <button
                type="button"
                onClick={() => setActiveMode("golden")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  activeMode === "golden"
                    ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20 font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>پرامپت طلایی ۵ لایه‌ای (حرفه‌ای)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMode("amateur")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  activeMode === "amateur"
                    ? "bg-rose-500 text-white shadow-md shadow-rose-500/20 font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <AlertTriangle className="h-4 w-4" />
                <span>پرامپت آماتور (تله خرابکاری)</span>
              </button>
            </div>

            {/* Editor Switcher if in Golden Mode */}
            {activeMode === "golden" && (
              <div className="flex items-center gap-1.5 text-xs self-end sm:self-auto">
                <span className="text-[11px] text-muted-foreground font-bold">ادیتور:</span>
                <button
                  type="button"
                  onClick={() => setEditorType("cursor")}
                  className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold border ${
                    editorType === "cursor"
                      ? "border-amber-400 bg-amber-400/20 text-amber-300"
                      : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Cursor Composer (@files)
                </button>
                <button
                  type="button"
                  onClick={() => setEditorType("claude")}
                  className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold border ${
                    editorType === "claude"
                      ? "border-amber-400 bg-amber-400/20 text-amber-300"
                      : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Claude 3.5 Sonnet
                </button>
              </div>
            )}
          </div>

          {/* Prompt Preview Box */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-bold text-foreground">
                <Terminal className="h-4 w-4 text-amber-400" />
                <span>پرامپت ارسالی به هوش مصنوعی:</span>
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-bold text-amber-300 hover:bg-amber-400/20 transition-all"
              >
                {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{isCopied ? "کپی شد ✓" : "کپی پرامپت"}</span>
              </button>
            </div>

            <div
              className={`rounded-xl border p-3.5 text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap select-all ${
                activeMode === "golden"
                  ? "border-emerald-500/30 bg-emerald-950/15 text-emerald-200"
                  : "border-rose-500/30 bg-rose-950/15 text-rose-200"
              }`}
              dir={activeMode === "golden" ? "ltr" : "rtl"}
            >
              {currentPrompt}
            </div>
          </div>

          {/* Simulated Code Editor / WordPress Terminal Result */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-muted-foreground block">
              شبیه‌ساز پیشخوان وردپرس و ترمینال ادیتور در عمل:
            </span>

            {activeMode === "amateur" ? (
              /* Amateur Error Result Box */
              <div className="rounded-2xl border border-rose-500/40 bg-rose-950/20 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs md:text-sm">
                    <ShieldAlert className="h-5 w-5" />
                    <span>{currentScenario.amateurErrorOutput.wpAdminResult}</span>
                  </div>
                  <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-300">
                    CRITICAL ERROR
                  </span>
                </div>

                <div className="rounded-xl border border-rose-500/20 bg-black/60 p-3 text-[11px] font-mono text-rose-300 overflow-x-auto text-left" dir="ltr">
                  <pre>{currentScenario.amateurErrorOutput.terminalLog}</pre>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-rose-300 block mb-1">علت فاجعه چیست؟</strong>
                  {currentScenario.amateurErrorOutput.whyItFailed}
                </div>
              </div>
            ) : (
              /* Golden Success Result Box */
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs md:text-sm">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>{currentScenario.goldenSuccessOutput.wpAdminResult}</span>
                  </div>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                    STATUS: 200 OK
                  </span>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-black/60 p-3 text-[11px] font-mono text-emerald-300 overflow-x-auto text-left" dir="ltr">
                  <pre>{currentScenario.goldenSuccessOutput.terminalLog}</pre>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-emerald-300 block mb-1">چرا این پرامپت بدون باگ عمل کرد؟</strong>
                  {currentScenario.goldenSuccessOutput.whyItSucceeded}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-white/10 p-4 px-6 bg-white/[0.01]">
          <span className="text-[11px] text-muted-foreground">
            تفاوت وایب‌کدر حرفه‌ای با افراد عادی در همین پرامپت‌های ۵ لایه‌ای است.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-amber-400 px-5 py-2 text-xs font-bold text-black hover:bg-amber-300 transition-colors"
          >
            فهمیدم، بازگشت به مأموریت
          </button>
        </div>
      </div>
    </div>
  );
}
