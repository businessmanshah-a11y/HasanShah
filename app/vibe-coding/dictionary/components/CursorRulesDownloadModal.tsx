"use client";

import React, { useState } from "react";
import { X, FileCode2, Download, Copy, Check, ShieldCheck, Sparkles, Globe } from "lucide-react";

interface CursorRulesDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CursorRulesDownloadModal({
  isOpen,
  onClose,
}: CursorRulesDownloadModalProps) {
  const [selectedFormat, setSelectedFormat] = useState<"agentsMd" | "cursorrules">("agentsMd");
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const agentsMdContent = `# AGENTS.md - استانداردهای مهندسی وایب‌کدینگ وردپرس (حسن شاهمرادی)
# Universal AI Standard: Cursor, Claude Code, GitHub Copilot, Windsurf, Antigravity, ChatGPT, Aider
# نسخه ۲.۰ | سازگار با WordPress 6.7+ و PHP 8.2+

## ۱. فلسفه و معماری پایه (Core Architecture)
- شما یک معمار ارشد، سیستماتیک و فوق‌حرفه‌ای وردپرس هستید.
- تمامی کدهای PHP باید کامپتیبل با PHP 8.2 و بالاتر باشند (Strict Types, Match Expressions, Nullable Types).
- پیشوند اختصاصی: نام‌گذاری تمامی توابع، کلاس‌ها، هوک‌ها، متغیرهای سراسری و ثابت‌ها الزامی است که با پیشوند hs_ یا HS_ آغاز شوند.
- هرگز و تحت هیچ شرایطی کدهای هسته وردپرس (wp-admin, wp-includes) یا قالب والد را مستقیماً ویرایش نکنید.
- همیشه از شروط دفاعی مانند \`if (!function_exists('hs_func_name'))\` استفاده کنید تا خطای برخورد توابع (Fatal collision) پیش نیاید.

## ۲. قوانین امنیت و دسترسی‌پذیری (Zero-Trust Security)
- نانس و توکن احراز هویت: در تمامی فرم‌ها و روت‌های Ajax یا REST API، اعتبارسنجی با \`wp_verify_nonce\` یا \`check_ajax_referer\` الزامی است.
- کنترل سطح دسترسی: پیش از اعمال هرگونه عملیات حساس، سطح دسترسی با \`current_user_can('manage_options')\` یا capability متناسب سنجیده شود.
- پاکسازی ورودی‌ها: تمام مقادیر دریافتی از \`$_POST\`، \`$_GET\` و \`$request\` بلااستثنا با \`sanitize_text_field\`، \`sanitize_key\`، \`absint\` و غیره پاکسازی شوند.
- فراردهی خروجی‌ها: در تمپلیت‌ها و کدهای HTML، تمامی متغیرها باید با \`esc_html\`، \`esc_attr\`، \`esc_url\` یا \`wp_kses_post\` فرار داده شوند.
- دیتابیس امن: در کوئری‌های دایرکت دیتابیس، استفاده از \`$wpdb->prepare()\` الزامی است؛ درج رشته مستقیم در کوئری ممنوع است.

## ۳. فرانت‌اند و استانداردسازی رابط کاربری (Modern Frontend)
- استفاده از jQuery اکیداً ممنوع است. تمام تعاملات باید با Vanilla JavaScript مدرن (ES6+) یا وب‌کامپوننت‌های سبک نوشته شوند.
- استایل‌دهی مدرن با توکن‌های Tailwind CSS یا متغیرهای CSS انجام شود؛ استایل درون‌خطی (Inline Style) بدون دلیل ممنوع است.
- اسکریپت‌ها و استایل‌ها حتماً از طریق هوک \`wp_enqueue_scripts\` و در فوتر با پارامتر \`['strategy' => 'defer']\` فراخوانی شوند.
- نسخه‌گذاری فایل‌ها با \`filemtime()\` انجام شود تا کاربر هرگز درگیر کش کهنه مرورگر نشود.

## ۴. کارایی، سرعت و کشینگ (High Performance)
- هرگز کوئری‌های تکراری و سنگین یا فراخوانی‌های شبکه خارجی (HTTP Requests) را بدون کش Transients API رها نکنید.
- در کوئری‌های بزرگ دیتابیس، از ایندکس مناسب و \`LIMIT\` استفاده کنید و جدول \`wp_options\` را با autoloadهای حجیم سنگین نکنید.

## ۵. تعامل با توسعه‌دهنده و پروتکل خروجی
- پیش از ارائه کدهای پیچیده، گام‌های منطقی را در ۲ خط خلاصه بیان کنید.
- تولید کد ناقص یا استفاده از کامنت‌های فریبنده مثل «// بقیه کدها را خودتان بنویسید» ممنوع است؛ کل بدنه فانکشن باید کامل و آماده اجرا باشد.
- محل دقیق تزریق کد (مثلاً: \`wp-content/plugins/hs-custom/hs-custom.php\` یا \`functions.php\`) باید در اولین سطر هر بلوک کد مشخص باشد.
`;

  const cursorrulesContent = `# HASAN SHAH - VIBE CODING WORDPRESS CURSORRULES (.cursorrules)
# Version: 2.0 | PHP 8.2+ & WordPress 6.7+

# Core Rules
- Senior WordPress architect persona.
- All PHP must be compatible with PHP 8.2+.
- Mandatory prefix hs_ or HS_ for all functions, classes, hooks, constants.
- Never edit core files or parent theme files directly.
- Always use defensive wrappers: if (!function_exists('hs_func')).

# Security Standards
- Verify nonces via wp_verify_nonce or check_ajax_referer on all actions.
- Capability checks via current_user_can() before sensitive actions.
- Sanitize all inputs (sanitize_text_field, absint, etc.).
- Escape all outputs in templates (esc_html, esc_attr, esc_url, wp_kses_post).
- Always use $wpdb->prepare() for custom SQL queries.

# Frontend & Performance
- jQuery is strictly forbidden. Use Vanilla JavaScript (ES6+).
- Enqueue all assets via wp_enqueue_scripts with defer strategy and filemtime versioning.
- Cache expensive database queries and remote API calls using Transients API.
- Do not bloat wp_options autoload.
`;

  const currentCode = selectedFormat === "agentsMd" ? agentsMdContent : cursorrulesContent;
  const currentFileName = selectedFormat === "agentsMd" ? "AGENTS.md" : ".cursorrules";

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentCode);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([currentCode], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = currentFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl border border-amber-400/30 bg-[#090D16] p-6 md:p-8 text-foreground shadow-2xl my-8" dir="rtl">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/30 text-amber-300 border border-amber-400/30 shadow-md">
              <FileCode2 className="h-5 w-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>استاندارد جهانی پروژه‌های وایب‌کدینگ</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                اساسنامه قوانین هوش مصنوعی (AGENTS.md و Cursorrules)
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold text-foreground block">
                این فایل چه معجزه‌ای در پروژه شما می‌کند؟
              </span>
              <p className="text-muted-foreground leading-relaxed">
                با قرار دادن فایل <strong className="text-emerald-300">AGENTS.md</strong> در ریشه پروژه، تمام ابزارهای هوش مصنوعی (شامل Cursor, Windsurf, Claude Code, GitHub Copilot, Antigravity و حتی ChatGPT) پیش از نوشتن حتی یک خط کد، تمام استانداردهای امنیتی، نام‌گذاری، حذف جی‌کوئری و اعتبارسنجی را به‌صورت خودکار رعایت می‌کنند.
              </p>
            </div>
          </div>

          {/* Format Selector */}
          <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl">
            <button
              type="button"
              onClick={() => setSelectedFormat("agentsMd")}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                selectedFormat === "agentsMd"
                  ? "bg-amber-400 text-black shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>AGENTS.md (استاندارد جهانی همه هوش‌های مصنوعی)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedFormat("cursorrules")}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                selectedFormat === "cursorrules"
                  ? "bg-amber-400 text-black shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileCode2 className="h-3.5 w-3.5" />
              <span>.cursorrules (مخصوص ادیتور Cursor)</span>
            </button>
          </div>

          {/* Code Preview */}
          <div className="relative rounded-2xl border border-white/10 bg-black/60 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
              <span className="font-mono text-xs text-amber-300">{currentFileName}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground hover:bg-white/10 transition-colors"
                >
                  {hasCopied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  <span>{hasCopied ? "کپی شد!" : "کپی محتوا"}</span>
                </button>
                <button
                  type="button"
                  onClick={downloadFile}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1.5 text-xs font-bold text-black hover:opacity-95 shadow-md shadow-amber-500/20 transition-all"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>دانلود مستقیم ({currentFileName})</span>
                </button>
              </div>
            </div>

            <pre
              className="p-4 font-mono text-[11px] text-muted-foreground max-h-80 overflow-y-auto leading-relaxed text-left"
              dir="ltr"
            >
              {currentCode}
            </pre>
          </div>

          <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
            <span>💡 محل قرارگیری: ریشه اصلی پروژه یا افزونه وردپرس</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-foreground hover:bg-white/10 transition-all"
            >
              بستن پنجره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
