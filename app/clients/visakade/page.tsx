"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Server,
  Code2,
  Clock,
  CreditCard,
  PhoneCall,
  Send,
  Copy,
  Sparkles,
  Layers,
  Zap,
  Globe2,
  HelpCircle,
  Printer,
  ChevronRight,
  Maximize2,
  X,
  FileCheck,
  Headphones,
  Check,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

// ── Design Tokens & Colors ──────────────────────────────────────────────────
const colors = {
  bg: "#0d1117",
  cardBg: "#161b22",
  cardBorder: "rgba(239, 192, 123, 0.18)",
  gold: "#efc07b",
  goldGlow: "rgba(239, 192, 123, 0.15)",
  emerald: "#10b981",
  emeraldDark: "#064e3b",
  emeraldGlow: "rgba(16, 185, 129, 0.18)",
  textMain: "#f0f6fc",
  textMuted: "#8b949e",
};

// ── Contact Constants ───────────────────────────────────────────────────────
const PHONE = "09120870095";
const PHONE_FA = "۰۹۱۲۰۸۷۰۰۹۵";
const TEL = `tel:${PHONE}`;
const TELEGRAM = "https://t.me/shahbusinessman";
const WHATSAPP_MSG = encodeURIComponent(
  "سلام آقای شاهمرادی، پروپوزال طراحی وب‌سایت ویزاکده را بررسی کردم و مورد تأیید است. لطفاً شماره کارت یا شبا را جهت واریز پیش‌پرداخت ۱۵ میلیون تومانی ارسال بفرمایید تا پروژه استارت بخورد."
);
const WHATSAPP = `https://wa.me/989120870095?text=${WHATSAPP_MSG}`;

// ── Benchmark Reference Images ──────────────────────────────────────────────
const BENCHMARK_ITEMS = [
  {
    id: "hero",
    title: "بخش هیرو و ویزاهای پرطرفدار",
    subtitle: "هدر لوکس سبز تیره، دسترسی فوری به مقاصد اصلی و جستجوی ویزا",
    src: "/images/clients/visakade/visaland-hero.jpg",
    highlights: [
      "رنگ‌بندی سبز تیره سازمانی با حس اعتبار و اطمینان بالا",
      "کارت‌های دسترسی سریع به ویزای شنگن، کانادا، استرالیا و انگلستان",
      "فرم جستجوی سریع خدمات و دکمه فراخوان شفاف (مشاهده خدمات)",
      "پترن نقطه‌ای (Halftone Grid) مدرن و تایپوگرافی چشم‌نواز",
    ],
    executionPlan:
      "پیاده‌سازی با تم اختصاصی PHP بدون صفحه‌سازهای سنگین؛ لود آنی المان‌ها و انیمیشن‌های سبک و استاندارد بدون افت سرعت در موبایل.",
  },
  {
    id: "services",
    title: "کارت‌های تخصصی خدمات ویزا",
    subtitle: "معماری سه‌بعدی خدمات شامل وقت سفارت، اخذ ویزا و پیکاپ پاسپورت",
    src: "/images/clients/visakade/visaland-services.png",
    highlights: [
      "جداسازی هوشمند خدمات حضوری و خدمات آنلاین",
      "کارت‌های تفکیک‌شده: وقت سفارت، اخذ ویزا، پیکاپ پاسپورت",
      "بخش خدمات آنلاین: مشاوره آنلاین و استعلام اصالت ویزا",
      "آیکون‌گرافی اختصاصی و مینیمال با پالت رنگی خنثی و سبز",
    ],
    executionPlan:
      "طراحی کارت‌های ماژولار و اتصال به فرم رزرو و ووکامرس؛ کاربر با یک کلیک مستقیماً وارد پروسه انتخاب کشور و پرداخت بیعانه می‌شود.",
  },
  {
    id: "steps",
    title: "تایم‌لاین مراحل اخذ و انجمن اعتمادسازی",
    subtitle: "شفاف‌سازی پروسه ۴ مرحله‌ای و استفاده از پرسش‌های متداول و سوشال‌پروف",
    src: "/images/clients/visakade/visaland-steps.png",
    highlights: [
      "مسیر تصویری ۴ مرحله‌ای: مشاوره تخصصی ➔ رزرو وقت سفارت ➔ تکمیل مدارک ➔ پیگیری اخذ ویزا",
      "بخش اعتبارسنجی اجتماعی و پاسخ به پرسش‌های پرتکرار متقاضیان",
      "نمایش تعداد پاسخ‌ها و جامعه کاربران برای از بین بردن هرگونه تردید یا ابهام",
    ],
    executionPlan:
      "ساخت سیستم داینامیک سوالات متداول و مراحل اخذ ویزا در پنل وردپرس؛ تا ادمین به راحتی بتواند برای هر کشور مراحل و مدارک را ویرایش کند.",
  },
];

// ── Technical Scope Cards ───────────────────────────────────────────────────
const TECH_SPECS = [
  {
    icon: Code2,
    title: "قالب اختصاصی وردپرس (Pure PHP)",
    badge: "سرعت لود زیر ۲ ثانیه",
    desc: "بر خلاف سایت‌های سنگین المنتوری که ده‌ها افزونه اضافی دارند، پوسته ویزاکده به صورت ۱۰۰٪ اختصاصی با PHP و استانداردهای نوین فرانت‌اند کدنویسی می‌شود. این یعنی کدهای تمیز، سئوی فنی حداکثری و امنیت پایدار.",
  },
  {
    icon: Server,
    title: "هاست ابری ایران با روتینگ دوطرفه (Dual-Access)",
    badge: "بدون قطعی با VPN و بدون VPN",
    desc: "کانفیگ هاست پرسرعت داخلی با پهنای باند دوطرفه و آی‌پی معتبر؛ سایت هم برای مخاطب داخل کشور و هم زمانی که کاربران یا خود شما از فیلترشکن استفاده می‌کنید، فوراً و بدون اختلال باز می‌شود.",
  },
  {
    icon: CreditCard,
    title: "ماژول ووکامرس برای خدمات و مشاوره",
    badge: "اتصال به درگاه بانکی شاپرک",
    desc: "پیکربندی فروشگاهی ووکامرس برای خدمات ویزا: پرداخت بیعانه، ثبت سفارش وقت سفارت، دریافت هزینه ترجمه مدارک و پکیج‌های مشاوره اختصاصی با فاکتور رسمی پیامکی.",
  },
  {
    icon: Globe2,
    title: "ساختار سئومحور مقالات و محتوا",
    badge: "آماده برای رتبه ۱ گوگل",
    desc: "طراحی بخش مقالات تخصصی و بلاگ منطبق بر اصول سئوی مدرن، اسکیماهای خدمات ویزا، ساختار دسته‌بندی کشورها و کلمات کلیدی درآمدزای حوزه مهاجرت.",
  },
  {
    icon: Zap,
    title: "تجربه کاربری Mobile-First",
    badge: "۱۰۰٪ ریسپانسیو و روان",
    desc: "با توجه به اینکه بیش از ۸۰٪ متقاضیان ویزا از تلفن همراه وارد می‌شوند، رابط کاربری با تمرکز بر موبایل طراحی شده و نرخ تبدیل تماس و لید را به بالاترین حد می‌رساند.",
  },
  {
    icon: ShieldCheck,
    title: "امنیت، SSL و اتصال سرچ‌کنسول",
    badge: "استاندارد کامل گوگل",
    desc: "کانفیگ پروتکل امنیتی SSL، بستن دسترسی‌های مشکوک، راه‌اندازی گوگل سرچ کنسول و گوگل آنالیتیکس برای رصد دقیق ورودی‌ها و سفارش‌ها.",
  },
];

// ── Project Timeline ────────────────────────────────────────────────────────
const TIMELINE_STEPS = [
  {
    day: "روز ۱ تا ۲",
    title: "استقرار زیرساخت و معماری اطلاعات",
    desc: "کانفیگ هاست دوطرفه ایران، نصب وردپرس تمیز، تعریف ساختار منوها، هدر و دسته‌بندی ویزاها بر پایه الگوی توافق‌شده ویزالند.",
  },
  {
    day: "روز ۳ تا ۶",
    title: "کدنویسی اختصاصی تم PHP و ماژول‌ها",
    desc: "پیاده‌سازی فرانت‌اند اختصاصی (هیرو، کارت‌های خدمات، تایم‌لاین مراحل)، پیاده‌سازی ووکامرس و فرم‌های درخواست ویزا بدون باگ.",
  },
  {
    day: "روز ۷ تا ۸",
    title: "ورود داده، اتصال درگاه و تست جامع",
    desc: "آپلود محتوا و تصاویر ویزاکده، اتصال به درگاه پرداخت، تست عملکرد تحت فیلترشکن، تست سرعت موبایل و امنیت نهایی.",
  },
  {
    day: "روز ۹ تا ۱۰",
    title: "بازبینی نهایی با کارفرما و انتشار رسمی",
    desc: "ارائه نسخه نهایی به جناب آقای فلاح، اعمال ریزه‌کاری‌های مدنظر، آموزش ویدئویی مدیریت پنل و رونمایی زنده از وب‌سایت.",
  },
];

export default function VisakadeProposalPage() {
  const [activeBenchmark, setActiveBenchmark] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const copyIban = () => {
    // Contact phone copy as prompt
    navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen text-slate-100 selection:bg-amber-500/30 selection:text-amber-200"
      style={{ backgroundColor: colors.bg }}
    >
      {/* ── Top Floating Navigation & Actions ────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#0d1117]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-amber-300 transition-colors"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#efc07b]" />
              <span>حسن شاهمرادی</span>
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden text-xs text-slate-400 sm:inline">
              پروپوزال رسمی طراحی وب‌سایت
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-600 hover:text-white transition-all print:hidden"
              title="پرینت یا ذخیره به عنوان PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">چاپ / ذخیره PDF</span>
            </button>

            <a
              href={TEL}
              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-all print:hidden"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>تماس: {PHONE_FA}</span>
            </a>

            <a
              href="#payment"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md hover:from-amber-400 hover:to-amber-300 transition-all print:hidden"
            >
              <CreditCard className="h-3.5 w-3.5" />
              <span>شروع پروژه</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero / Executive Summary ──────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239, 192, 123, 0.12), transparent 70%), radial-gradient(ellipse 40% 40% at 85% 20%, rgba(16, 185, 129, 0.08), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Target & Status Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              پروپوزال اختصاصی همکاری
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              طرف قرارداد: جناب آقای فلاح (ویزاکده)
            </span>
            <span className="text-xs text-slate-500 mr-auto">
              تاریخ صدور: شهریور ۱۴۰۵
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.3] mb-6">
            طراحی و پیاده‌سازی وب‌سایت اختصاصی{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-300">
              ویزاکده (visakade)
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
            تبدیل نام و برند ویزاکده به یک مرجع معتبر و شبانه‌روزی برای خدمات ویزا،
            وقت سفارت و مشاوره؛ با الهام از ساختار استاندارد و برتر{" "}
            <strong className="text-white font-bold">سایت ویزالند</strong> و با
            کدنویسی اختصاصی، نهایت سرعت لود و اتصال به درگاه پرداخت آنلاین.
          </p>

          {/* Key Deal Parameters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
            <div className="rounded-xl border border-slate-800 bg-[#161b22]/90 p-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <CreditCard className="h-4 w-4 text-amber-400" />
                سرمایه‌گذاری توافق‌شده
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">
                ۵۰ <span className="text-xs font-normal text-slate-400">میلیون تومان</span>
              </div>
              <div className="text-[11px] text-amber-400/90 mt-1">
                ۱۵ م پیش‌پرداخت + ۳۵ م تسویه
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#161b22]/90 p-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <Clock className="h-4 w-4 text-emerald-400" />
                مدت زمان تحویل
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">
                ۷ تا ۱۰ <span className="text-xs font-normal text-slate-400">روز کاری</span>
              </div>
              <div className="text-[11px] text-emerald-400/90 mt-1">
                تحویل چابک و سریع (ASAP)
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#161b22]/90 p-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <Code2 className="h-4 w-4 text-cyan-400" />
                معماری و کدنویسی
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">
                PHP <span className="text-xs font-normal text-slate-400">اختصاصی</span>
              </div>
              <div className="text-[11px] text-cyan-400/90 mt-1">
                وردپرس بدون المنتور (کد خالص)
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#161b22]/90 p-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                گارانتی و خدمات
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">
                ۱ سال <span className="text-xs font-normal text-slate-400">پشتیبانی</span>
              </div>
              <div className="text-[11px] text-amber-400/90 mt-1">
                رایگان + رفع فوری اختلالات
              </div>
            </div>
          </div>

          {/* Direct Actions in Hero */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#payment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-300 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>تأیید پیشنهاد و واریز پیش‌پرداخت (۱۵ میلیون)</span>
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
            >
              <Send className="h-4 w-4" />
              <span>گفتگو و هماهنگی در واتساپ</span>
            </a>

            <a
              href={TEL}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-600 transition-all"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" />
              <span>تماس مستقیم ({PHONE_FA})</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Section: Why This Project Matters (Core Insight) ─────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#12161f]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-xs font-bold tracking-wider text-amber-400 uppercase">
            ضرورت استراتژیک برای حوزه خدمات ویزا
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            چرا مخاطب ویزا به سایتی فراتر از یک معرفی ساده نیاز دارد؟
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="rounded-xl border border-slate-800 bg-[#161b22] p-5">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 font-bold">
                ۰۱
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                مسئله‌ی حساسِ اعتماد (Trust)
              </h3>
              <p className="text-slate-400">
                مشتری خدمات ویزا، پاسپورت، مدارک مالی و آینده‌ی سفر خود را به شما
                می‌سپارد. سایتی با گرافیک سنگین، کند یا آماتور شک ایجاد می‌کند؛
                در حالی که یک پرتال شیک و پرسرعت حس یک آژانس تراز اول را منتقل
                می‌سازد.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#161b22] p-5">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 font-bold">
                ۰۲
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                شفافیت در مراحل و خدمات
              </h3>
              <p className="text-slate-400">
                اکثر متقاضیان دقیقاً نمی‌دانند برای ویزا از کجا باید شروع کنند.
                سایت ویزاکده با دسته‌بندی کشورها، پکیج‌های وقت سفارت و تایم‌لاین
                روشن، مشتری سردرگم را در چند دقیقه به متقاضی قطعی تبدیل می‌کند.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#161b22] p-5">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-bold">
                ۰۳
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                دریافت وجه و بیعانه آنلاین
              </h3>
              <p className="text-slate-400">
                به جای شماره کارت فرستادن در دایرکت و پیگیری دستی فیش‌ها، با ماژول
                ووکامرس مشتری می‌تواند هزینه مشاوره یا بیعانه وقت سفارت را درجا
                از درگاه شتابی واریز کند و پیامک تأیید دریافت نماید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Benchmark Analysis (Visaland) ────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-[#0d1117]">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold tracking-wider text-emerald-400 uppercase mb-2">
                تحلیل بنچ‌مارک و الگوی طراحی
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                بررسی الگوی سایت رفرنس: <span className="text-emerald-300">ویزالند (Visaland)</span>
              </h2>
            </div>
            <div className="text-xs text-slate-400 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg">
              الگوی توافق‌شده با جناب آقای فلاح
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            بر اساس تحلیل سه بخش کلیدی سایت ویزالند که به عنوان رفرنس مدنظر قرار
            گرفت، المان‌های برنده و ساختار جذب کاربر را شناسایی کردیم و در
            ویزاکده این ساختار را با سرعت و معماری اختصاصی بازآفرینی خواهیم کرد:
          </p>

          {/* Benchmark Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3 mb-6">
            {BENCHMARK_ITEMS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveBenchmark(index)}
                className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeBenchmark === index
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                    : "bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-transparent"
                }`}
              >
                {index + 1}. {item.title}
              </button>
            ))}
          </div>

          {/* Active Benchmark Card */}
          <div className="grid lg:grid-cols-12 gap-8 items-start rounded-2xl border border-slate-800 bg-[#161b22] p-6 sm:p-8">
            {/* Image Preview with Zoom */}
            <div className="lg:col-span-7 relative group">
              <div className="overflow-hidden rounded-xl border border-slate-700 bg-black/40 shadow-2xl relative">
                <Image
                  src={BENCHMARK_ITEMS[activeBenchmark].src}
                  alt={BENCHMARK_ITEMS[activeBenchmark].title}
                  width={1024}
                  height={665}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <button
                  type="button"
                  onClick={() => setZoomedImage(BENCHMARK_ITEMS[activeBenchmark].src)}
                  className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur hover:bg-black transition-colors"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span>مشاهده تصویر کامل</span>
                </button>
              </div>
              <span className="block text-[11px] text-slate-500 mt-2 text-center">
                تصویر مرجع بررسی‌شده از وب‌سایت ویزالند
              </span>
            </div>

            {/* Analysis & Hasan Shah Execution Plan */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {BENCHMARK_ITEMS[activeBenchmark].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
                  {BENCHMARK_ITEMS[activeBenchmark].subtitle}
                </p>

                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold text-amber-400">
                    نقاط قوت الگو در جذب مخاطب:
                  </div>
                  {BENCHMARK_ITEMS[activeBenchmark].highlights.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Advantage Box */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  برنامه اجرایی اختصاصی حسن شاهمرادی برای ویزاکده:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {BENCHMARK_ITEMS[activeBenchmark].executionPlan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Technical Scope of Work ──────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-[#12161f]">
        <div className="mx-auto max-w-5xl">
          <div className="text-xs font-bold tracking-wider text-amber-400 uppercase mb-2">
            مشخصات فنی و استانداردهای توسعه
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            دامنه وظایف و تعهدات فنی (Scope of Work)
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-10 max-w-3xl">
            تمام زیرساخت‌های زیر به صورت تضمینی در نسخه تحویلی پیاده‌سازی و
            کانفیگ خواهد شد:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_SPECS.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.title}
                  className="rounded-xl border border-slate-800 bg-[#161b22] p-5 flex flex-col justify-between hover:border-amber-500/30 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[11px] text-amber-300 font-medium">
                        {spec.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-white text-base mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Code vs Elementor comparison callout */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-emerald-300 text-base mb-1">
                  تفاوت کلیدی: چرا از المنتور و قالب‌های آماده استفاده نمی‌کنیم؟
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  قالب‌های آماده و صفحه‌سازهای سنگین بیش از ۱۵۰ فایل CSS و JS حجیم
                  بارگذاری می‌کنند که باعث افت شدید امتیاز سرعت در موبایل و
                  از دست رفتن رتبه‌های گوگل می‌شود. در این پروژه، پوسته به صورت
                  کاملاً اختصاصی کدنویسی می‌شود تا بدون کمترین کُندی و با نهایت
                  پایداری لود شود.
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-block rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-xs font-bold text-emerald-200">
                  امتیاز سرعت بالای ۹۰٪
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Timeline & Milestones (7 to 10 Days) ─────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-[#0d1117]">
        <div className="mx-auto max-w-5xl">
          <div className="text-xs font-bold tracking-wider text-emerald-400 uppercase mb-2">
            نقشه راه تحویل چابک
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            زمان‌بندی گام‌به‌گام (۷ تا ۱۰ روز کاری)
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-10 max-w-2xl">
            به دلیل ماهیت فوری پروژه (ASAP)، فرآیند در ۴ فاز فشرده با اولویت
            بالا پیش خواهد رفت:
          </p>

          <div className="relative border-r-2 border-amber-500/30 pr-6 space-y-8 mr-2 sm:mr-4">
            {TIMELINE_STEPS.map((step, idx) => (
              <div key={step.title} className="relative group">
                {/* Node marker */}
                <div className="absolute -right-[31px] top-1 h-4 w-4 rounded-full border-2 border-amber-400 bg-slate-950 group-hover:bg-amber-400 transition-colors" />

                <div className="rounded-xl border border-slate-800 bg-[#161b22] p-5 sm:p-6 transition-all hover:border-slate-700">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                      فاز {idx + 1}: {step.day}
                    </span>
                    <span className="text-xs text-slate-500">
                      تعهد تحویل به موقع
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: Investment & Commercial Terms ─────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-[#12161f]">
        <div className="mx-auto max-w-5xl">
          <div className="text-xs font-bold tracking-wider text-amber-400 uppercase mb-2">
            شرایط مالی و سرمایه‌گذاری
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            مدل پرداخت شفاف و توافق‌شده
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-2xl">
            مبلغ کل مورد توافق بدون هیچ‌گونه هزینه پنهان یا افزایش در طول مسیر،
            دقیقاً به شرح زیر می‌باشد:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Phase 1: Deposit */}
            <div className="rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-[#161b22] p-6 relative">
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5">
                  گام اول
                </span>
              </div>
              <div className="text-xs text-amber-300 font-bold mb-1">
                پیش‌پرداخت استارت فوری پروژه
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-3">
                ۱۵,۰۰۰,۰۰۰{" "}
                <span className="text-sm font-normal text-slate-400">تومان</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                ۳۰٪ از کل مبلغ جهت خرید و کانفیگ هاست دوطرفه ایران، رزرو بازه
                زمانی اجرای ۷ تا ۱۰ روزه و آغاز کدنویسی قالب اختصاصی.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>شروع کدنویسی بلافاصله پس از واریز</span>
              </div>
            </div>

            {/* Phase 2: Final settlement */}
            <div className="rounded-2xl border border-slate-800 bg-[#161b22] p-6 relative">
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-slate-800 text-slate-300 font-bold text-xs px-2.5 py-0.5 border border-slate-700">
                  گام دوم
                </span>
              </div>
              <div className="text-xs text-slate-400 font-bold mb-1">
                تسویه نهایی پس از اتمام و تحویل
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-3">
                ۳۵,۰۰۰,۰۰۰{" "}
                <span className="text-sm font-normal text-slate-400">تومان</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                ۷۰٪ باقیمانده پس از اتمام طراحی و توسعه، بازبینی کامل توسط
                جناب آقای فلاح، رفع اصلاحات احتمالی و تست رضایت‌بخش سایت.
              </p>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>بدون ریسک — تسویه پس از دیدن خروجی کامل</span>
              </div>
            </div>
          </div>

          {/* 1-Year Support Box */}
          <div className="rounded-xl border border-slate-800 bg-[#161b22] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">
                  پشتیبانی فنی رایگان به مدت ۱ سال کامل
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تضمین آپ‌تایم، رفع سریع هرگونه باگ، مانیتورینگ سلامت سرور و
                  پاسخگویی مستقیم حسن شاهمرادی در طول یک سال بدون دریافت هزینه
                  اضافه.
                </p>
              </div>
            </div>
            <span className="rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-bold px-3 py-1.5 shrink-0">
              ارزش افزوده رایگان
            </span>
          </div>
        </div>
      </section>

      {/* ── Section: Payment & Kickoff CTA (The Closing Block) ───────────── */}
      <section id="payment" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-[#1a2230] via-[#161b22] to-[#0d1117] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(239, 192, 123, 0.15) 0%, transparent 70%)",
              }}
            />

            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-3">
                گام نهایی جهت شروع فوری
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
                بستن قرارداد و واریز پیش‌پرداخت
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                جهت رزرو تقویم اجرایی و آغاز بلافاصله کدنویسی اختصاصی، مبلغ{" "}
                <strong className="text-amber-300 font-bold">۱۵ میلیون تومان</strong>{" "}
                را واریز نموده و فیش واریزی را ارسال بفرمایید.
              </p>
            </div>

            {/* Account Information Card */}
            <div className="rounded-2xl border border-slate-700 bg-black/50 p-6 mb-8 max-w-lg mx-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs text-slate-400">گیرنده وجه:</span>
                <span className="text-sm font-bold text-white">حسن شاهمرادی</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs text-slate-400">مبلغ پیش‌پرداخت:</span>
                <span className="text-base font-black text-amber-300">
                  ۱۵۰,۰۰۰,۰۰۰ ریال (۱۵ میلیون تومان)
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs text-slate-400">شماره هماهنگی و کارت:</span>
                <span className="text-sm font-bold text-white" dir="ltr">
                  {PHONE_FA}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-slate-400">بابت:</span>
                <span className="text-xs font-medium text-emerald-400">
                  پیش‌پرداخت طراحی وب‌سایت ویزاکده
                </span>
              </div>

              {/* Copy Phone / Info button */}
              <button
                type="button"
                onClick={copyIban}
                className="w-full mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 py-2.5 text-xs font-bold text-amber-300 hover:bg-amber-500/20 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>شماره تماس کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>کپی شماره تماس جهت دریافت شماره کارت</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-emerald-300 transition-all"
              >
                <Send className="h-4 w-4" />
                <span>ارسال فیش و هماهنگی در واتساپ</span>
              </a>

              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-6 py-3.5 text-sm font-bold text-sky-300 hover:bg-sky-500/20 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                <span>ارتباط در تلگرام (@shahbusinessman)</span>
              </a>

              <a
                href={TEL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:text-white transition-all"
              >
                <PhoneCall className="h-4 w-4 text-amber-400" />
                <span>تماس مستقیم</span>
              </a>
            </div>

            <div className="text-center mt-6 text-xs text-slate-500">
              پس از واریز پیش‌پرداخت، فاز اول پروژه ظرف کمتر از ۲۴ ساعت آغاز خواهد شد.
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="py-8 px-4 border-t border-slate-800/80 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            طراحی و تدوین اختصاصی توسط{" "}
            <strong className="text-slate-300 font-semibold">حسن شاهمرادی</strong> —
            استراتژیست و طراح وب‌سایت
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              صفحه اصلی وب‌سایت
            </Link>
            <span>•</span>
            <a href={TEL} className="hover:text-amber-400 transition-colors">
              {PHONE_FA}
            </a>
          </div>
        </div>
      </footer>

      {/* ── Image Modal / Zoom View ───────────────────────────────────────── */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-slate-700 bg-[#161b22]"
            >
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                className="absolute top-3 left-3 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black transition-colors"
                title="بستن"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="max-h-[85vh] overflow-auto">
                <Image
                  src={zoomedImage}
                  alt="تصویر بزرگنمایی شده رفرنس ویزالند"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
