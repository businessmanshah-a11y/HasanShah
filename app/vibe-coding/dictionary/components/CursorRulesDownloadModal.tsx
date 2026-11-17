"use client";

import React, { useState } from "react";
import { X, FileCode2, Download, Copy, Check, ShieldCheck, Sparkles } from "lucide-react";

interface CursorRulesDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CursorRulesDownloadModal({
  isOpen,
  onClose,
}: CursorRulesDownloadModalProps) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const cursorRulesCode = `# ========================================================
# حسن شاهمرادی - اساسنامه استاندارد وایب‌کدینگ وردپرس
# HASAN SHAH - VIBE CODING WORDPRESS CURSORRULES (.cursorrules)
# نسخه: ۲.۰ | سازگار با WordPress 6.7+ و PHP 8.2+
# ========================================================

# ۱. معماری و استانداردهای کلیدی
- شما یک معمار ارشد و فوق‌حرفه‌ای وردپرس هستید.
- تمامی کدهای PHP باید سازگار با PHP 8.2 و بالاتر باشند.
- نام‌گذاری تمامی توابع، کلاس‌ها، هوک‌ها و ثابت‌ها الزامی است که با پیشوند hs_ یا HS_ آغاز شوند.
- هرگز و تحت هیچ شرایطی کدهای هسته وردپرس یا قالب والد را مستقیماً ویرایش نکنید.
- از شروط دفاعی مانند if (!function_exists('hs_func_name')) استفاده کنید تا از خطای تداخل توابع جلوگیری شود.

# ۲. فرانت‌اند و استایل‌ها
- استفاده از jQuery اکیداً ممنوع است. فقط از Vanilla JavaScript مدرن (ES6+) استفاده کنید.
- تمامی استایل‌ها باید با استفاده از کلاس‌های بومی Tailwind CSS یا توکن‌های متغیر CSS پیاده‌سازی شوند.
- از نوشتن استایل‌های درون‌خطی (Inline Styles) یا کدهای هگزادسیمال تصادفی خودداری کنید.
- انیمیشن‌ها و هاورها باید ظریف (زیر ۳۰۰ میلی‌ثانیه) و با شتاب‌دهی سخت‌افزاری (transform و opacity) باشند.

# ۳. امنیت و دسترسی‌پذیری (Security & Validation)
- در تمامی فرم‌ها و درخواست‌های Ajax یا REST، بررسی توکن امنیتی با wp_verify_nonce یا check_ajax_referer الزامی است.
- پیش از اعمال تغییرات حساس، صلاحیت کاربر با current_user_can بررسی شود.
- تمامی ورودی‌های کاربر باید با توابع sanitize_* پاکسازی شوند.
- تمامی خروجی‌ها در تمپلیت‌ها باید با توابع esc_html، esc_attr، esc_url یا wp_kses فرار داده شوند.
- در کوئری‌های مستقیم دیتابیس، استفاده از $wpdb->prepare الزامی است.

# ۴. کارایی، سرعت و کش (Performance)
- هرگز کوئری‌های سنگین دیتابیس یا درخواست‌های شبکه خارجی را بدون کش Transients API رها نکنید.
- تمامی اسکریپت‌ها با wp_enqueue_script در هوک استاندارد wp_enqueue_scripts و در فوتر لود شوند.
- برای نسخه‌گذاری استایل‌ها و اسکریپت‌ها از تابع filemtime برای حل خودکار مشکل کش مرورگر استفاده کنید.

# ۵. لحن و سبک پاسخ‌دهی به کاربر
- قبل از تولید کد در مسائل پیچیده، گام‌های منطقی را در ۲ خط توضیح دهید.
- هیچ کدی را ناقص یا با کامنت // بقیه کدها را خودتان بنویسید رها نکنید.
- محل دقیق قرارگیری هر قطعه کد را در بالای آن مشخص کنید.
`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(cursorRulesCode);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([cursorRulesCode], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = ".cursorrules";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl border border-amber-400/30 bg-[#090D16] p-6 md:p-8 text-foreground shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <FileCode2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                دانلود فایل استاندارد .cursorrules اختصاصی وردپرس
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                قوانین طلایی برای مهار خطاهای Cursor و تولید کدهای تمیز و استاندارد وردپرس
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

        {/* Body */}
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold text-foreground block">
                این فایل چه معجزه‌ای در پروژه شما می‌کند؟
              </span>
              <p className="text-muted-foreground leading-relaxed">
                با قرار دادن این فایل در ریشه پوشه پروژه، ادیتور Cursor قبل از پاسخ به هر سوال، این قوانین امنیتی و کیفی را مرور می‌کند. دیگر نیازی نیست هر بار به هوش مصنوعی بگویید «لطفاً جی‌کوئری ننویس»، «نانس بذار» یا «پیشوند hs_ رعایت کن»!
              </p>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative rounded-2xl border border-white/10 bg-black/60 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
              <span className="font-mono text-xs text-amber-300">.cursorrules</span>
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
                  <span>دانلود مستقیم فایل</span>
                </button>
              </div>
            </div>

            <pre
              className="p-4 font-mono text-[11px] text-muted-foreground max-h-80 overflow-y-auto leading-relaxed text-left"
              dir="ltr"
            >
              {cursorRulesCode}
            </pre>
          </div>

          <div className="text-xs text-muted-foreground bg-white/[0.02] p-3 rounded-xl border border-white/5">
            💡 <strong>راهنمای نصب:</strong> فایل دانلود شده با نام <code className="text-amber-400">.cursorrules</code> را مستقیماً در پوشه اصلی قالب چایلد یا ریشه پروژه وردپرس خود قرار دهید. در سیستم‌عامل مک یا ویندوز در صورت مخفی بودن فایل‌های دارای نقطه، کلید <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">Cmd+Shift+.</kbd> را فشار دهید.
          </div>
        </div>
      </div>
    </div>
  );
}
