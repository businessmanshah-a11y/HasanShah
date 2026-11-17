"use client";

import { useState } from "react";
import { X, Sparkles, Copy, Check, Lightbulb, ShieldCheck, Zap, Terminal, RefreshCw } from "lucide-react";

interface PromptBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractivePromptBuilderModal({ isOpen, onClose }: PromptBuilderProps) {
  const [featureName, setFeatureName] = useState("فرم محاسبه آنلاین قیمت و برآورد پروژه");
  const [targetType, setTargetType] = useState("پوسته فرزند اختصاصی (Child Theme)");
  const [editorMode, setEditorMode] = useState<"cursor" | "claude">("cursor");
  const [needSecurity, setNeedSecurity] = useState(true);
  const [needSpeed, setNeedSpeed] = useState(true);
  const [needCoT, setNeedCoT] = useState(true);
  const [needNoJquery, setNeedNoJquery] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generatedPrompt = editorMode === "cursor"
    ? `[نقش و ماموریت]:
شما یک معمار ارشد وایب‌کدینگ وردپرس (WordPress Senior Architect) با استانداردهای سخت‌گیرانه هستید.

[زمینه و بافت پروژه]:
پروژه روی وردپرس ۶.۷ و PHP 8.2 پیاده‌سازی می‌شود.
محل پیاده‌سازی: «${targetType}». فایل‌های مرتبط در صورت نیاز: @functions.php و استایل‌های @globals.css.

[وظیفه و شرح قابلیت]:
قابلیت «${featureName}» را با استانداردهای مدرن پیاده‌سازی کن.

[شروط سلبی و الزامات ضد باگ]:
۱. نام‌گذاری الزامی تمام توابع، کلاس‌ها و هوک‌ها با پیشوند اختصاصی hs_.
۲. هرگز کدهای هسته یا قالب والد را تغییر نده؛ فقط کدهای اضافه شونده ماژولار تولید کن.
${needNoJquery ? "۳. استفاده از jQuery اکیداً ممنوع است. فقط از Vanilla JS مدرن با Fetch API استفاده کن.\n" : ""}${needSecurity ? "۴. امنیت الزامی: در تمامی درخواست‌ها از توکن wp_create_nonce و اعتبارسنجی با check_ajax_referer استفاده کن. تمام ورودی‌ها با sanitize_* و خروجی‌ها با esc_html فرار داده شوند.\n" : ""}${needSpeed ? "۵. کارایی و پرفورمنس: کوئری‌های تکراری با Transients API کش شوند تا زمان لود سرور به زیر ۱۰۰ میلی‌ثانیه برسد.\n" : ""}${needCoT ? "۶. استدلال گام‌به‌گام: قبل از نوشتن کد، منطق هوک‌های انتخابی و چرخه اجرا را در ۲ خط توضیح بده.\n" : ""}
[قالب خروجی مورد انتظار]:
- مشخص کردن دقیق فایل مقصد در قالب کامنت در بالاترین خط کد.
- کدهای تمیز PHP بدون نقص و همراه با دستورات تست ۳۰ ثانیه‌ای.`
    : `شما یک مهندس ارشد توسعه وب‌سایت‌های وردپرسی هستید.
من می‌خواهم قابلیت «${featureName}» را برای «${targetType}» بسازم.

الزامات فنی و امنیتی:
۱. سازگاری کامل با PHP 8.2 و وردپرس ۶.۷
۲. تمام توابع با پیشوند اختصاصی hs_
${needSecurity ? "۳. رعایت لایه امنیتی Nonces و فیلتر ورودی و خروجی\n" : ""}${needSpeed ? "۴. کش کردن نتایج با Transients API\n" : ""}${needNoJquery ? "۵. بدون جی‌کوئری و فقط با جاوااسکریپت مدرن و استایل‌های Tailwind CSS\n" : ""}${needCoT ? "۶. قبل از کدنویسی منطق کار را تشریح کن\n" : ""}
لطفاً کدهای کامل را به همراه راهنمای محل قرارگیری ارائه بده.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200" dir="rtl">
      <div className="relative w-full max-w-2xl rounded-3xl border border-amber-400/30 bg-[#090D16] p-6 md:p-8 shadow-2xl space-y-6 text-foreground max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground">ژنراتور پرامپت مهندسی‌شده ۵ لایه‌ای</h3>
              <p className="text-xs text-muted-foreground">تولید خودکار پرامپت ضد توهم و ضد باگ برای Cursor و Claude</p>
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

        {/* Editor Selector */}
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-white/5 border border-white/10">
          <button
            type="button"
            onClick={() => setEditorMode("cursor")}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              editorMode === "cursor"
                ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            حالت Cursor Composer (با ارجاعات @file)
          </button>
          <button
            type="button"
            onClick={() => setEditorMode("claude")}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              editorMode === "claude"
                ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            حالت Claude / ChatGPT تحت وب
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
              placeholder="مثلاً: فرم محاسبه آنلاین قیمت، اسلایدر نمونه‌کارها..."
              className="w-full rounded-xl border border-white/15 bg-black/40 p-3 text-sm text-foreground focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-foreground mb-1.5">
              محل پیاده‌سازی در وردپرس:
            </label>
            <select
              value={targetType}
              onChange={(e) => setTargetType(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 p-3 text-sm text-foreground focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            >
              <option value="پوسته فرزند اختصاصی (Child Theme)">پوسته فرزند اختصاصی (Child Theme)</option>
              <option value="پلاگین مستقل اختصاصی (Must-Use Plugin)">پلاگین مستقل و ماژولار (mu-plugins)</option>
              <option value="بلاک گوتنبرگ با block.json">بلاک اختصاصی گوتنبرگ (Block API v3)</option>
              <option value="اندپوینت اختصاصی REST API">اندپوینت اختصاصی REST API</option>
              <option value="فرانت‌سایت مجزا با Next.js">فرانت‌سایت مجزا با Next.js</option>
            </select>
          </div>

          {/* Feature toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <label className="flex items-center gap-2 text-xs text-foreground cursor-pointer select-none rounded-xl border border-white/10 p-2.5 bg-white/[0.02]">
              <input
                type="checkbox"
                checked={needSecurity}
                onChange={(e) => setNeedSecurity(e.target.checked)}
                className="rounded border-white/20 bg-background text-amber-400 focus:ring-amber-400"
              />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                <span>تزریق توکن امنیتی Nonce (ضد هک)</span>
              </span>
            </label>

            <label className="flex items-center gap-2 text-xs text-foreground cursor-pointer select-none rounded-xl border border-white/10 p-2.5 bg-white/[0.02]">
              <input
                type="checkbox"
                checked={needSpeed}
                onChange={(e) => setNeedSpeed(e.target.checked)}
                className="rounded border-white/20 bg-background text-amber-400 focus:ring-amber-400"
              />
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                <span>کش موقت Transients (سرعت بالا)</span>
              </span>
            </label>

            <label className="flex items-center gap-2 text-xs text-foreground cursor-pointer select-none rounded-xl border border-white/10 p-2.5 bg-white/[0.02]">
              <input
                type="checkbox"
                checked={needNoJquery}
                onChange={(e) => setNeedNoJquery(e.target.checked)}
                className="rounded border-white/20 bg-background text-amber-400 focus:ring-amber-400"
              />
              <span className="flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-amber-400" />
                <span>حذف jQuery و الزام به Vanilla JS</span>
              </span>
            </label>

            <label className="flex items-center gap-2 text-xs text-foreground cursor-pointer select-none rounded-xl border border-white/10 p-2.5 bg-white/[0.02]">
              <input
                type="checkbox"
                checked={needCoT}
                onChange={(e) => setNeedCoT(e.target.checked)}
                className="rounded border-white/20 bg-background text-amber-400 focus:ring-amber-400"
              />
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>زنجیره استدلال قبل از تولید کد (CoT)</span>
              </span>
            </label>
          </div>
        </div>

        {/* Generated Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
            <span className="flex items-center gap-1.5">
              <Lightbulb className="h-4 w-4 text-amber-400" />
              پرامپت ۵ لایه‌ای تولیدشده و آماده کپی:
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 py-1.5 text-xs font-bold text-black hover:opacity-95 shadow-md shadow-amber-500/20 transition-all"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>کپی شد! در ادیتور پیست کنید</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>کپی پرامپت مهندسی‌شده</span>
                </>
              )}
            </button>
          </div>

          <pre className="rounded-2xl border border-white/10 bg-black/70 p-4 font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto text-right font-sans" dir="rtl">
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
