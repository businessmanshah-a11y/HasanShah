"use client";

import React, { useState } from "react";
import { X, Cpu, Gauge, AlertCircle, CheckCircle2, ShieldAlert, Sparkles, Copy, Check } from "lucide-react";

interface ContextWindowCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContextWindowCalculatorModal({
  isOpen,
  onClose,
}: ContextWindowCalculatorModalProps) {
  const [estimatedLines, setEstimatedLines] = useState<number>(3500);
  const [includeAdmin, setIncludeAdmin] = useState<boolean>(false);
  const [includeNodeModules, setIncludeNodeModules] = useState<boolean>(false);
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  // Each line of code is roughly 8 to 12 tokens
  let totalLines = estimatedLines;
  if (includeAdmin) totalLines += 120000; // WordPress admin files
  if (includeNodeModules) totalLines += 250000; // Node modules

  const estimatedTokens = Math.round(totalLines * 9.5);
  const maxModelContext = 200000; // Claude 3.5 Sonnet / GPT-4o 128k-200k
  const usagePercentage = Math.min(100, Math.round((estimatedTokens / maxModelContext) * 100));

  const isSafe = usagePercentage < 40;
  const isWarning = usagePercentage >= 40 && usagePercentage < 80;
  const isDanger = usagePercentage >= 80;

  const cursorIgnoreContent = `# فایل حیاتی جلوگیری از سرریز کانتکست
wp-admin/
wp-includes/
node_modules/
vendor/
*.sql
*.tar.gz
*.zip
dist/`;

  const copyIgnore = async () => {
    await navigator.clipboard.writeText(cursorIgnoreContent);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-amber-400/30 bg-[#090D16] p-6 md:p-8 text-foreground shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Gauge className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                محاسبه‌گر پنجره بافت (Context Window)
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                تخمین میزان مصرف حافظه هوش مصنوعی و جلوگیری از توهم و فراموشی ادیتور
              </p>
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

        {/* Inputs */}
        <div className="mt-6 space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-foreground">
                تعداد خطوط کدهای فعال قالب شما (تخمینی):
              </span>
              <span className="font-mono text-amber-400 font-bold text-sm">
                {estimatedLines.toLocaleString("fa-IR")} خط
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="25000"
              step="100"
              value={estimatedLines}
              onChange={(e) => setEstimatedLines(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>۲۰۰ خط (قالب مینیمال)</span>
              <span>۱۰,۰۰۰ خط (قالب متوسط)</span>
              <span>۲۵,۰۰۰ خط (پورتال بزرگ)</span>
            </div>
          </div>

          {/* Dangerous Checkboxes */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
            <span className="text-xs font-bold text-foreground block">
              آیا پوشه‌های سنگین به ادیتور تحمیل شده‌اند؟
            </span>

            <label className="flex items-center gap-3 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={includeAdmin}
                onChange={(e) => setIncludeAdmin(e.target.checked)}
                className="rounded accent-amber-400 h-4 w-4"
              />
              <span className="text-muted-foreground">
                پوشه‌های اصلی وردپرس (wp-admin و wp-includes) را در ادیتور باز گذاشته‌ام
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={includeNodeModules}
                onChange={(e) => setIncludeNodeModules(e.target.checked)}
                className="rounded accent-amber-400 h-4 w-4"
              />
              <span className="text-muted-foreground">
                پوشه node_modules را نادیده نگرفته‌ام
              </span>
            </label>
          </div>

          {/* Results Gauge */}
          <div
            className={`rounded-2xl border p-5 space-y-3 transition-all ${
              isSafe
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                : isWarning
                ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                : "border-rose-400/30 bg-rose-400/10 text-rose-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isSafe && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                {isWarning && <AlertCircle className="h-5 w-5 text-amber-400" />}
                {isDanger && <ShieldAlert className="h-5 w-5 text-rose-400" />}
                <span className="font-bold text-sm">
                  {isSafe && "وضعیت ایده‌آل: هوش مصنوعی با حداکثر هوشمندی پاسخ می‌دهد"}
                  {isWarning && "وضعیت هشدار: احتمال کندی و فراموشی جزییات اولیه"}
                  {isDanger && "وضعیت بحرانی: سرریز کانتکست و توهم قطعی هوش مصنوعی!"}
                </span>
              </div>
              <span className="font-mono text-sm font-bold">
                {usagePercentage}٪ پر
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  isSafe ? "bg-emerald-400" : isWarning ? "bg-amber-400" : "bg-rose-500 animate-pulse"
                }`}
                style={{ width: `${usagePercentage}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-muted-foreground pt-1">
              <span>تخمین توکن مصرفی: {estimatedTokens.toLocaleString("fa-IR")} توکن</span>
              <span>سقف ایمن مدل: {maxModelContext.toLocaleString("fa-IR")} توکن</span>
            </div>

            <p className="text-xs leading-relaxed pt-2 border-t border-white/10 font-sans">
              {isSafe &&
                "خاطرتان جمع باشد! پنجره بافت بسیار خلوت است و ادیتورهایی مثل Cursor یا Claude بالاترین دقت و کمترین هزینه مصرف توکن را به شما تحویل می‌دهند."}
              {isWarning &&
                "توصیه می‌شود فایل‌های سنگین CSS کامپایل‌شده یا دیتابیس را به ادیتور پاس ندهید تا تمرکز هوش مصنوعی فقط روی منطق کدهای جاری بماند."}
              {isDanger &&
                "فاجعه در راه است! حجم فایل‌های تحمیل‌شده به مراتب بیشتر از حافظه هوش مصنوعی است. فوراً فایل .cursorignore را ایجاد کرده و فایل‌های اضافی را فیلتر کنید."}
            </p>
          </div>

          {/* One click solution */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground">
                راهکار فوری: فایل .cursorignore را کپی کرده و در ریشه پروژه بگذارید
              </span>
              <button
                type="button"
                onClick={copyIgnore}
                className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400/20"
              >
                {hasCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{hasCopied ? "کپی شد!" : "کپی محتوا"}</span>
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-black font-mono text-[11px] text-muted-foreground text-left overflow-x-auto" dir="ltr">
              {cursorIgnoreContent}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
