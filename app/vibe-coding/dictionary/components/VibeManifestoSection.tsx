"use client";

import React from "react";
import { Shield, Sparkles, CheckCircle2, Award, Zap } from "lucide-react";

export default function VibeManifestoSection() {
  const manifestoItems = [
    {
      num: "۰۱",
      title: "مسئولیت مطلق با انسان است",
      desc: "هوش مصنوعی ابزار دست توست، نه مقصر باگ‌ها. هر کدی که به کارفرما تحویل می‌دهی یا روی سرور قرار می‌گیرد، امضای حرفه‌ای تو پای آن است.",
    },
    {
      num: "۰۲",
      title: "هرگز کدی را که خط به خط نفهمیده‌ای اجرا نکن",
      desc: "فشردن دکمه کپی بدون درک سازوکار تابع، شروع سقوط یک توسعه‌دهنده است. وایب‌کدر واقعی قبل از اجرا، منطق پشت کد را از AI بازخواست می‌کند.",
    },
    {
      num: "۰۳",
      title: "امنیت شوخی‌بردار نیست (Security By Design)",
      desc: "هیچ فرمی بدون نانس و هیچ کوئری دیتابیسی بدون prepare پذیرفته نیست. کدهای سریع نباید به قیمت نفوذپذیری سایت مشتری تمام شوند.",
    },
    {
      num: "۰۴",
      title: "حفظ تمیزی پنجره بافت (Clean Context)",
      desc: "انبار کردن کدهای نامرتبط در حافظه ادیتور نشانه نابلدی است. وایب‌کدر فقط فایل‌های لازم را به مدل پاس می‌دهد تا توهم را به صفر برساند.",
    },
    {
      num: "۰۵",
      title: "تست قبل از ادعا (Verify First, Boast Later)",
      desc: "اینکه ظاهر کد قشنگ است دلیلی بر کارکرد آن نیست. کدهایت را در ۳۰ ثانیه با لاگ روشن و تست منفی بسنج و سپس تایید کن.",
    },
    {
      num: "۰۶",
      title: "وفاداری به هسته وردپرس و عدم دستکاری فایل‌های اصلی",
      desc: "هیچ تغییری در wp-admin یا قالب اصلی مجاز نیست. تمام نوآوری‌ها در قالب چایلدتم، هوک‌ها و پلاگین‌های ماژولار متولد می‌شوند.",
    },
    {
      num: "۰۷",
      title: "سرعت لودینگ احترام به وقت کاربر است",
      desc: "پاس کردن سه سنجه طلایی Core Web Vitals و زمان پاسخ زیر ۱۰۰ میلی‌ثانیه‌ای سرور، حق اساسی هر کاربری است که وارد سایت می‌شود.",
    },
    {
      num: "۰۸",
      title: "کدهای بدون استایل اختصاصی و طراحی منسجم بی‌ارزشند",
      desc: "وایب‌کدینگ کپی‌کاری قالب‌های بی‌کیفیت نیست؛ تلفیق سیستم طراحی دقیق با فیگما، توکن‌های رنگی و ریزتعاملات زنده است.",
    },
    {
      num: "۰۹",
      title: "سایت آزمایشی (Staging) خط قرمز پیش از انتشار است",
      desc: "تست کدهای جدید روی سایت فعال در حال فروش، قمار با اعتماد مشتری است. همیشه ابتدا در استیجینگ تست کن، سپس منتشر کن.",
    },
    {
      num: "۱۰",
      title: "اولویت مطلق با کمک واقعی به مخاطب است",
      desc: "هدف نهایی تمام این ابزارها، کدها و پرامپت‌ها این است که مسئله کاربر در کمترین زمان ممکن حل شود و به ارزش واقعی دست یابد.",
    },
  ];

  return (
    <section className="relative my-16 rounded-3xl border border-amber-400/30 bg-gradient-to-b from-[#090D16] to-[#04060A] p-8 md:p-12 overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-amber-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
          <Award className="h-4 w-4" />
          <span>منشور اخلاقی و استانداردهای حرفه‌ای</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-foreground">
          ۱۰ اصل طلایی در سوگندنامه وایب‌کدرهای حرفه‌ای
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          مرام‌نامه‌ای که تفاوت یک توسعه‌دهنده متعهد و متخصص را با کپی‌کارهای آماتور هوش مصنوعی مشخص می‌کند.
        </p>
      </div>

      {/* Grid of 10 Commandments */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-5xl mx-auto">
        {manifestoItems.map((item) => (
          <div
            key={item.num}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-amber-400/40 hover:bg-amber-400/[0.02] transition-all duration-300 flex items-start gap-4"
          >
            <span className="font-mono text-xl font-black text-amber-400/60 group-hover:text-amber-400 transition-colors shrink-0">
              {item.num}
            </span>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center pt-8 mt-6 border-t border-white/10 text-xs text-muted-foreground">
        بر اساس استانداردهای آموزشی حسن شاهمرادی • تعهد به خلق ارزش پایدار و کدهای تمیز در اکوسیستم وب فارسی
      </div>
    </section>
  );
}
