"use client";

import { useState } from "react";
import { X, Sparkles, Copy, Check, Lightbulb } from "lucide-react";

interface PromptBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractivePromptBuilderModal({ isOpen, onClose }: PromptBuilderProps) {
  const [featureName, setFeatureName] = useState("فرم محاسبه آنلاین قیمت");
  const [targetType, setTargetType] = useState("پوسته اختصاصی (Child Theme)");
  const [needSecurity, setNeedSecurity] = useState(true);
  const [needSpeed, setNeedSpeed] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generatedPrompt = `من در حال وایب‌کدینگ در وردپرس ۶.۵+ هستم.
می‌خواهم قابلیت «${featureName}» را برای «${targetType}» با استانداردهای مهندسی پیاده‌سازی کنی.

قوانین الزامی:
1) توابع را در functions.php قرار نده؛ از هوک‌های استاندارد وردپرس (Action/Filter) با پیشوند hs_ استفاده کن.
${needSecurity ? '2) برای تمام فرم‌ها و ایجکس توکن امنیتی wp_create_nonce و اعتبارسنجی با check_ajax_referer الزامی است.\n3) تمام ورودی‌ها با sanitize و خروجی‌ها با esc_html فیلتر شوند.' : ''}
${needSpeed ? '4) برای کوئری‌های تکراری دیتابیس از Transients API با کش ۴ ساعته استفاده کن تا سرور کند نشود.' : ''}
5) از هیچ افزونه یا استایل سنگین استفاده نکن؛ استایل‌ها فقط با کلاس‌های کاربردی Tailwind CSS باشند.
6) قبل از ارائه کد، ساختار معماری و دلیل انتخاب هوک‌ها را در ۲ خط توضیح بده.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" dir="rtl">
      <div className="relative w-full max-w-2xl rounded-3xl border border-gold/40 bg-surface-elevated p-6 md:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gold/15 text-gold border border-gold/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground">شبیه‌ساز و تولیدکننده پرامپت اختصاصی وایب‌کدینگ</h3>
              <p className="text-xs text-muted-foreground">مشخصات قابلیت مورد نظرت را بنویس تا پرامپت ضد باگ تحویل بگیری</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-foreground mb-1.5">
              نام امکان یا قابلیتی که می‌خواهی بسازی:
            </label>
            <input
              type="text"
              value={featureName}
              onChange={(e) => setFeatureName(e.target.value)}
              placeholder="مثلاً: سیستم نظرات صوتی، اسلایدر نمونه‌کارها..."
              className="w-full rounded-xl border border-white/15 bg-background p-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-foreground mb-1.5">
              محل پیاده‌سازی:
            </label>
            <select
              value={targetType}
              onChange={(e) => setTargetType(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-background p-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            >
              <option value="پوسته اختصاصی (Child Theme)">پوسته فرزند اختصاصی (Child Theme)</option>
              <option value="پلاگین مستقل و ماژولار">پلاگین مستقل اختصاصی (Must-Use Plugin)</option>
              <option value="بلاک گوتنبرگ با block.json">بلاک اختصاصی گوتنبرگ</option>
              <option value="فرانت‌سایت هدلس با Next.js">فرانت‌سایت مجزا با Next.js</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-4 pt-1">
            <label className="flex items-center gap-2 text-xs text-foreground cursor-pointer select-none">
              <input
                type="checkbox"
                checked={needSecurity}
                onChange={(e) => setNeedSecurity(e.target.checked)}
                className="rounded border-white/20 bg-background text-gold focus:ring-gold"
              />
              <span>تزریق توکن امنیتی نانس (ضد هک)</span>
            </label>

            <label className="flex items-center gap-2 text-xs text-foreground cursor-pointer select-none">
              <input
                type="checkbox"
                checked={needSpeed}
                onChange={(e) => setNeedSpeed(e.target.checked)}
                className="rounded border-white/20 bg-background text-gold focus:ring-gold"
              />
              <span>کش موقت ترنزینت (حفظ سرعت لود زیر ۱ ثانیه)</span>
            </label>
          </div>
        </div>

        {/* Generated Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
            <span className="flex items-center gap-1.5">
              <Lightbulb className="h-4 w-4 text-gold" />
              پرامپت خروجی آماده برای کپی به Cursor یا Claude:
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-bold text-gold hover:bg-gold/25 transition-all shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>کپی پرامپت</span>
                </>
              )}
            </button>
          </div>

          <pre className="rounded-2xl border border-white/10 bg-black/70 p-4 font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
            {generatedPrompt}
          </pre>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>
  );
}
