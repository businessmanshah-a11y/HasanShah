"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Wrench,
  Sparkles,
  Calendar,
  Share2,
  PhoneCall,
  Send,
  Zap,
  ChevronLeft,
  ChevronDown,
  Check,
  Flame,
  Award,
  AlertCircle,
  CheckCheck,
  Car,
  Truck,
  Mountain,
  Compass,
  Gauge,
  X
} from "lucide-react";
import confetti from "canvas-confetti";
import { toast } from "sonner";

// ─── SLIDE DEFINITIONS ────────────────────────────────────────────────────────
interface SlideData {
  id: string;
  num: string;
  title: string;
  badge: string;
}

const SLIDES: SlideData[] = [
  { id: "hero", num: "۰۱", title: "معرفی و هویت", badge: "THE GENESIS" },
  { id: "vision", num: "۰۲", title: "چشم‌انداز و تمایز", badge: "THE BIG LEAP" },
  { id: "parts", num: "۰۳", title: "کاتالوگ مهندسی قطعات", badge: "PARTS & FITMENT" },
  { id: "services", num: "۰۴", title: "هاب خدمات کارگاهی", badge: "GARAGE SERVICES" },
  { id: "advisor", num: "۰۵", title: "مشاوره هوشمند خودرو", badge: "SMART ADVISOR" },
  { id: "club", num: "۰۶", title: "جیمشید و کلوب ماجراجویی", badge: "ADVENTURE CLUB" },
  { id: "roadmap", num: "۰۷", title: "نقشه راه و فازبندی", badge: "PROJECT ROADMAP" },
  { id: "investment", num: "۰۸", title: "پلن‌های سرمایه‌گذاری", badge: "INVESTMENT & ACTION" },
];

const VEHICLES = [
  { id: "jimny", name: "سوزوکی جیمنی", icon: Car, tag: "پلتفرم تخصصی شوگان" },
  { id: "toyota", name: "تویوتا پرادو / هایلوکس", icon: Truck, tag: "آفرود سنگین و اورلندینگ" },
  { id: "pajero", name: "میتسوبیشی پاجرو", icon: Mountain, tag: "شاسی مستقل مسابقه‌ای" },
  { id: "nissan", name: "نیسان پاترول / پیکاپ", icon: Compass, tag: "کلاسیک و بازسازی کامل" },
];

const STYLES = [
  { id: "overland", name: "اورلندینگ و کمپینگ", icon: Compass, desc: "سفرهای طولانی، باربند، روف‌تنت و پایداری در شیب" },
  { id: "rock", name: "آفرود سنگین و صخره", icon: Mountain, desc: "انعطاف ماکزیمم، لیفت ۳ اینچ، وینچ و دف‌لاک" },
  { id: "urban", name: "پرفورمنس و استفاده شهری", icon: Gauge, desc: "سواری نرم شهری، رینگ فورج، ترمز تقویت‌شده" },
];

export default function ShogunProposalPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState("jimny");
  const [selectedStyle, setSelectedStyle] = useState("overland");
  const [copied, setCopied] = useState(false);
  const [approvedPlan, setApprovedPlan] = useState<number | null>(null);
  const [advisorConsulted, setAdvisorConsulted] = useState(false);
  const touchStartY = useRef<number>(0);

  // Jump to specific slide
  const goToSlide = (idx: number) => {
    if (idx < 0 || idx >= SLIDES.length) return;
    setActiveSlide(idx);
    const targetElement = document.getElementById(SLIDES[idx].id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Real-time Scroll Spy with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = SLIDES.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) {
            setActiveSlide(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SLIDES.forEach((slide) => {
      const el = document.getElementById(slide.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goToSlide(activeSlide + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goToSlide(activeSlide - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  // Touch navigation for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0 && activeSlide < SLIDES.length - 1) {
        goToSlide(activeSlide + 1);
      } else if (deltaY < 0 && activeSlide > 0) {
        goToSlide(activeSlide - 1);
      }
    }
  };

  // Copy link
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("لینک اختصاصی پروپوزال شوگان گاراژ کپی شد");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Trigger celebration on plan sign-off
  const handleApprove = (planNum: number) => {
    setApprovedPlan(planNum);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#dc2626", "#ffffff", "#ff5c3d", "#f59e0b"],
    });
    toast.success(`پلن شماره ${planNum === 2 ? "۲ (پیشنهادی)" : "۱"} انتخاب شد.`);
  };

  return (
    <main
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ fontFamily: "'Peyda', Tahoma, sans-serif" }}
      className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-[#0a0a0b] text-neutral-100 antialiased selection:bg-red-600 selection:text-white"
      dir="rtl"
    >
      {/* ─── FIXED TOP NAV BAR ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-10 py-3 bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/[0.08]">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-neutral-950 border border-red-500/40 flex items-center justify-center text-white shadow-lg shadow-red-950/50">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 5h18" />
              <path d="M1 3h22" />
              <path d="M5 5v16" />
              <path d="M19 5v16" />
              <path d="M5 9h14" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm md:text-base tracking-tight text-white">شوگان گاراژ</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-700/50">
                PROPOSAL
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 hidden sm:block">مرجع تخصصی تعمیر و تجهیز خودروهای بیراهه‌نورد</p>
          </div>
        </div>

        {/* Dynamic Center Slide Tracker */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/90 px-4 py-1.5 rounded-full border border-white/10">
          <span className="text-red-500 font-bold">{SLIDES[activeSlide].num}</span>
          <span className="text-neutral-600">/</span>
          <span>۰۸</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse mr-1"></span>
          <span className="text-neutral-200 mr-1 font-medium">{SLIDES[activeSlide].title}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-neutral-400" />
            <span className="hidden sm:inline">{copied ? "کپی شد" : "اشتراک‌گذاری"}</span>
          </button>
          <button
            onClick={() => goToSlide(7)}
            className="flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 shadow-md shadow-red-600/30 transition-all hover:scale-[1.02]"
          >
            <span>مشاهده پکیج‌ها</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ─── FIXED FLOATING PAGINATION (ON THE LEFT SIDE AWAY FROM RTL TEXT) ── */}
      <nav
        aria-label="ناوبری صفحات"
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2 bg-neutral-900/70 backdrop-blur-md px-2 py-3.5 rounded-full border border-white/10 shadow-2xl"
      >
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            className="group relative flex items-center justify-center p-1"
          >
            {/* Tooltip on Hover */}
            <span className="pointer-events-none absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/95 text-xs text-neutral-200 px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap shadow-2xl">
              {slide.num} · {slide.title}
            </span>

            {/* Active / Inactive Pill */}
            <span
              className={`transition-all duration-300 rounded-full ${
                activeSlide === idx
                  ? "w-2.5 h-6 bg-red-500 ring-2 ring-red-500/30"
                  : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 1: HERO & IDENTITY (مرجع مهندسی بیراهه‌نوردان)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-between pt-24 pb-12 px-6 md:px-20 lg:px-28 overflow-hidden"
      >
        {/* Background Image with Cinematic Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/clients/shogun/hero-jimny.jpg"
            alt="شوگان جیمشید"
            fill
            priority
            className="object-cover object-center opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/75 to-[#0a0a0b]/60" />
        </div>

        {/* Top Badges */}
        <div className="relative z-10 flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
            SHOGUN 4X4 ENGINEERING
          </span>
          <span className="text-xs text-neutral-400 bg-neutral-900/80 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/10">
            سند راهبردی اختصاصی · شهرک صنعتی گلگون
          </span>
          <span className="text-xs text-neutral-400 bg-neutral-900/80 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/10">
            آماده‌شده توسط حسن شاهمرادی
          </span>
        </div>

        {/* Center Minimal Punchy Headline */}
        <div className="relative z-10 my-auto max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.2]">
            مرجع مهندسی، تجهیز و بازسازی <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-red-500 via-orange-500 to-amber-200">
              خودروهای بیراهه‌نورد
            </span>
          </h1>
          <p className="text-neutral-300 text-sm md:text-base max-w-xl leading-relaxed">
            پروپوزال اختصاصی شوگان گاراژ؛ تلفیق شورووم مدرن قطعات، هاب خدمات کارگاهی، سامانه مشاوره هوشمند و خانه رسمی Shogun Adventure Club.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => goToSlide(1)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs md:text-sm px-6 py-3 rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              <span>بررسی سند استراتژیک</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => goToSlide(7)}
              className="flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-white/15 text-xs md:text-sm px-6 py-3 rounded-xl transition-all"
            >
              <span>پلن‌های سرمایه‌گذاری (۱۰۰ و ۱۴۰ م.ت)</span>
            </button>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
          <div>
            <div className="text-xl md:text-2xl font-black text-white">+۲۱K</div>
            <div className="text-xs text-neutral-400">جامعه مخاطب اینستاگرام</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-black text-red-500">۱ سال</div>
            <div className="text-xs text-neutral-400">پشتیبانی فنی کامل تضمینی</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-black text-white">۱۰۰٪</div>
            <div className="text-xs text-neutral-400">کدنویسی اختصاصی بدون قالب</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-black text-orange-400">۸ سکشن</div>
            <div className="text-xs text-neutral-400">طراحی تمام‌صفحه اسکرول کمبر</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 2: THE BIG LEAP (چشم‌انداز و تمایز شوگان)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="vision"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-between pt-24 pb-12 px-6 md:px-20 lg:px-28 bg-[#0c0c0e] overflow-hidden"
      >
        <div className="max-w-3xl space-y-2">
          <div className="text-red-500 text-xs font-mono tracking-wider">
            ۰۲ // GAP ANALYSIS & BRAND PRESTIGE
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            چرا شوگان شایسته فراتر از سایت‌سازهای معمولی است؟
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            مقایسه رویکرد متداول بازار (مانند آر‌گاراژ در پرتال) با جایگاه پرچم‌داری برند شوگان.
          </p>
        </div>

        {/* 2 Comparison Cards with Clean Whitespace */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 my-auto max-w-4xl">
          <div className="p-5 md:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-sm font-bold text-neutral-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                سایت‌سازهای سنتی و فروشگاه‌های قالبی
              </span>
              <span className="text-[10px] font-mono text-neutral-500">GENERIC CMS</span>
            </div>
            <ul className="space-y-2.5 text-xs md:text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                قالب‌های خشک و بی‌روح، فاقد کاراکتر آفرود ژاپنی
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                سردرگمی مخاطب در قطعات نامشخص و عدم فیلتر خودرو
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                نادیده گرفته شدن خدمات تخصصی کارگاه گلگون
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                فقدان فضای اختصاصی برای دورهمی‌ها و اعضای کلوب
              </li>
            </ul>
          </div>

          <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-red-950/40 border border-red-500/30 space-y-3 shadow-xl shadow-red-950/20">
            <div className="flex items-center justify-between pb-3 border-b border-red-500/20">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-500" />
                معماری اختصاصی شوگان (الهام از Camber)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold">
                HIGH PERFORMANCE
              </span>
            </div>
            <ul className="space-y-2.5 text-xs md:text-sm text-neutral-200">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                دیزاین دارک صنعتی، انیمیشن‌های روان و هویت سامورایی
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                فیلتر دقیق بر اساس پلتفرم (جیمنی، پرادو، هایلوکس)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                هاب خدمات و رزرو نوبت تست درایو با پنل ادمین
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                پورتال اختصاصی Shogun Adventure Club و شوکیس جیمشید
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/90 border border-white/10 text-xs">
          <span className="text-neutral-300">
            هدف اصلی: هدایت آسان ۲۱ هزار دنبال‌کننده به مشتریان رزرو کارگاه و خریداران قطعات
          </span>
          <button
            onClick={() => goToSlide(2)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
          >
            <span>بررسی ماژول قطعات</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 3: PARTS & FITMENT GUIDE (کاتالوگ مهندسی قطعات - با ۳ عکس استودیویی)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="parts"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-between pt-24 pb-12 px-6 md:px-20 lg:px-28 bg-[#0a0a0b] overflow-hidden"
      >
        <div className="max-w-3xl space-y-2">
          <div className="text-red-500 text-xs font-mono tracking-wider">
            ۰۳ // PARTS CATALOGUE & FITMENT VERIFICATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            ویترین مهندسی قطعات؛ سازگاری قطعی با خودرو
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            الهام‌گرفته از ریل کاتالوگ کمبر؛ انتخاب دقیق بر اساس شاسی خودرو با عکس‌های باکیفیت استودیویی و استعلام سریع.
          </p>
        </div>

        {/* 3 Real Commercial Product Cards */}
        <div className="my-auto grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">
          {/* Product 1: Coilovers */}
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-red-500/40 transition-all group">
            <div className="relative h-40 w-full rounded-lg overflow-hidden bg-neutral-950 mb-3">
              <Image
                src="/images/clients/shogun/parts-detail.jpg"
                alt="کیت کمک‌فنر نیتروژنی"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold">
                SUSPENSION KIT
              </span>
            </div>
            <h4 className="font-bold text-sm text-white">کیت کمک‌فنر نیتروژنی شوگان</h4>
            <p className="text-xs text-neutral-400 mt-1">لیفت ۲.۵ اینچ، مخزن ریموت، تنظیم نرمی ۳۰ حالته مخصوص جیمنی</p>
            <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-white/10 text-xs">
              <span className="text-emerald-400 text-[11px]">فیتمنت تضمینی VIN</span>
              <span className="text-neutral-300 font-medium">استعلام سریع ←</span>
            </div>
          </div>

          {/* Product 2: Beadlock Wheels */}
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-red-500/40 transition-all group">
            <div className="relative h-40 w-full rounded-lg overflow-hidden bg-neutral-950 mb-3">
              <Image
                src="/images/clients/shogun/wheel-detail.jpg"
                alt="رینگ بیدلاک فورج"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-bold">
                WHEEL & TIRE
              </span>
            </div>
            <h4 className="font-bold text-sm text-white">رینگ سبک‌وزن بیدلاک ۱۶ اینچ</h4>
            <p className="text-xs text-neutral-400 mt-1">حلقه بیدلاک فورج قرمز، جلوگیری از دیس‌بید در رمل و صخره</p>
            <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-white/10 text-xs">
              <span className="text-amber-400 text-[11px]">موجودی در انبار شوگان</span>
              <span className="text-neutral-300 font-medium">استعلام سریع ←</span>
            </div>
          </div>

          {/* Product 3: Heavy Duty Winch */}
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-red-500/40 transition-all group">
            <div className="relative h-40 w-full rounded-lg overflow-hidden bg-neutral-950 mb-3">
              <Image
                src="/images/clients/shogun/winch-detail.jpg"
                alt="وینچ برقی هوی‌دیوتی"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-bold">
                RECOVERY GEAR
              </span>
            </div>
            <h4 className="font-bold text-sm text-white">وینچ برقی ۱۲,۰۰۰ پوند کابل قرمز</h4>
            <p className="text-xs text-neutral-400 mt-1">موتور ضدآب IP68، کابل سنتتیک، ریموت وایرلس و سینی فابریک</p>
            <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-white/10 text-xs">
              <span className="text-emerald-400 text-[11px]">نصب فابریک در گاراژ</span>
              <span className="text-neutral-300 font-medium">استعلام سریع ←</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/90 border border-white/10 text-xs">
          <span className="text-neutral-300">
            حذف اصطکاک قیمت متغیر: مشتری قطعه را انتخاب کرده و مستقیماً به استعلام فنی وصل می‌شود
          </span>
          <button
            onClick={() => goToSlide(3)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
          >
            <span>مشاهده هاب خدمات کارگاهی</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 4: WORKSHOP HUB & BOOKING (هاب خدمات کارگاهی و نوبت‌دهی)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-between pt-24 pb-12 px-6 md:px-20 lg:px-28 bg-[#0c0c0e] overflow-hidden"
      >
        <div className="max-w-3xl space-y-2">
          <div className="text-red-500 text-xs font-mono tracking-wider">
            ۰۴ // WORKSHOP HUB & TIME SLOT MANAGEMENT
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            هاب خدمات کارگاهی و مدیریت هوشمند نوبت‌ها
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            معرفی لاین‌های تخصصی گاراژ شوگان در گلگون به همراه تقویم نوبت‌دهی برای زمان‌های آزاد.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="my-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl">
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-red-500 font-bold">۰۱</span>
            <h4 className="font-bold text-sm text-white">سرویس‌های ادواری موتور و گیربکس</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              تست کیفیت روغن و سوخت، شستشوی انژکتور، سلامت موتور در شرایط سخت بیراهه‌نوردی.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-red-500 font-bold">۰۲</span>
            <h4 className="font-bold text-sm text-white">نصب و کالیبراسیون زیربندی</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              تنظیم کمبر و کستر، لیفت استاندارد تعلیق بدون گیجی فرمان و افت پایداری خودرو.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-red-500 font-bold">۰۳</span>
            <h4 className="font-bold text-sm text-white">تست درایو و چکاپ پیش از سفر</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              بازرسی کامل سیستم ۴ چرخ، دیفرانسیل‌ها، ترمزها و پلوس‌ها پیش از ورود به کویر یا کوهستان.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-red-500 font-bold">۰۴</span>
            <h4 className="font-bold text-sm text-white">تجهیز و شخصی‌سازی کمپر</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              سیم‌کشی باتری دوم، اسنورکل، باک اضافه، پروژکتورهای دید در شب و امکانات رفاهی سفر.
            </p>
          </div>
        </div>

        {/* Booking Card */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-900 to-red-950/30 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="space-y-1 text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Calendar className="w-4 h-4 text-red-400" />
              <span className="font-bold text-sm text-white">سیستم رزرو نوبت با تقویم هوشمند</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                ACTIVE
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              ادمین گاراژ زمان‌های پر را مشخص می‌کند و مشتریان تنها زمان‌های باز را برای بررسی خودرو رزرو می‌کنند.
            </p>
          </div>

          <button
            onClick={() => goToSlide(4)}
            className="shrink-0 flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-xs px-4 py-2.5 rounded-lg font-medium shadow-md transition-all"
          >
            <span>مشاهده سیستم مشاوره هوشمند</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 5: SMART VEHICLE ADVISOR (سامانه مشاوره هوشمند خودرو - تعاملی)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="advisor"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-between pt-24 pb-12 px-6 md:px-20 lg:px-28 bg-[#0a0a0b] overflow-hidden"
      >
        <div className="max-w-3xl space-y-2">
          <div className="text-red-500 text-xs font-mono tracking-wider">
            ۰۵ // INTERACTIVE SMART ADVISOR
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            سیستم مشاوره و پیشنهاد هوشمند تجهیزات
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            ابزار اختصاصی هدایت کاربر؛ نوع خودرو و سبک سفر را انتخاب کنید تا پیشنهاد مهندسی شوگان نمایان شود.
          </p>
        </div>

        {/* Live Interactive Configurator Box */}
        <div className="my-auto p-4 md:p-6 rounded-2xl bg-neutral-900/90 border border-red-500/30 space-y-4 max-w-4xl w-full mx-auto shadow-2xl">
          {/* Step 1: Vehicle */}
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-red-400">// گام اول: انتخاب خودرو</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {VEHICLES.map((v) => {
                const IconComponent = v.icon;
                const isSelected = selectedVehicle === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => {
                      setSelectedVehicle(v.id);
                      setAdvisorConsulted(false);
                    }}
                    className={`p-3 rounded-xl border text-right transition-all group ${
                      isSelected
                        ? "bg-red-600/20 border-red-500 text-white shadow-md shadow-red-950/40"
                        : "bg-neutral-950/70 border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                      isSelected
                        ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                        : "bg-neutral-900 text-neutral-400 group-hover:text-white group-hover:bg-neutral-800"
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">{v.name}</div>
                    <div className="text-[10px] text-neutral-400 truncate">{v.tag}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Use Style */}
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-red-400">// گام دوم: سبک سفر و بیراهه‌نوردی</span>
            <div className="grid sm:grid-cols-3 gap-2">
              {STYLES.map((s) => {
                const IconComponent = s.icon;
                const isSelected = selectedStyle === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedStyle(s.id);
                      setAdvisorConsulted(false);
                    }}
                    className={`p-3 rounded-xl border text-right transition-all group ${
                      isSelected
                        ? "bg-red-600/20 border-red-500 text-white shadow-md"
                        : "bg-neutral-950/70 border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                        isSelected ? "bg-red-600 text-white" : "bg-neutral-900 text-neutral-400 group-hover:text-white"
                      }`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs font-bold text-white">{s.name}</div>
                    </div>
                    <div className="text-[10px] text-neutral-400 leading-relaxed">{s.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Result Box */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="space-y-0.5 text-center sm:text-right">
              <span className="text-[11px] font-mono text-red-400">پیشنهاد مهندسی شوگان:</span>
              <p className="text-xs text-neutral-200">
                {selectedVehicle === "jimny" && "کیت لیفت ۲.۵ اینچ نیتروژنی + اسنورکل فابریک + رینگ بیدلاک ۱۶ سبک"}
                {selectedVehicle === "toyota" && "زیربندی هوی‌دیوتی با فنر لول دوبل + سینی زیر و سپر فلزی + وینچ ۱۲۰۰۰"}
                {selectedVehicle === "pajero" && "کمک‌فنرهای کورس بلند + هدرز استیل + تقویت سیستم خنک‌کاری گیربکس"}
                {selectedVehicle === "nissan" && "بازسازی کامل جلوبندی + بوستر ترمز ماکسیمایی + پروژکتورهای مهندسی"}
              </p>
            </div>

            <a
              href={`https://wa.me/989120870095?text=${encodeURIComponent(`سلام، برای خودروی ${VEHICLES.find(v => v.id === selectedVehicle)?.name} در سبک ${STYLES.find(s => s.id === selectedStyle)?.name} مشاوره می‌خواهم.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAdvisorConsulted(true)}
              className="shrink-0 flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-xs px-4 py-2 rounded-lg font-medium shadow-md shadow-red-600/30 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{advisorConsulted ? "ارسال به واتس‌اپ شوگان" : "دریافت برآورد هزینه"}</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/90 border border-white/10 text-xs">
          <span className="text-neutral-300">
            ابزاری تعاملی برای تبدیل آنی بیننده به مکالمه کاری مستقیم در پیام‌رسان
          </span>
          <button
            onClick={() => goToSlide(5)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
          >
            <span>مشاهده جیمشید و کلوب</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 6: JIMSHID & SHOGUN ADVENTURE CLUB (جیمشید و کلوب ماجراجویی)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="club"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-between pt-24 pb-12 px-6 md:px-20 lg:px-28 bg-[#0c0c0e] overflow-hidden"
      >
        <div className="max-w-3xl space-y-2">
          <div className="text-red-500 text-xs font-mono tracking-wider">
            ۰۶ // ICONIC BUILDS & ADVENTURE COMMUNITY
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            پروژه نمادین «جیمشید» و باشگاه ماجراجویی شوگان
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            نمایش دستاوردهای فنی شوگان در ساخت خودروهای خاص و خانه رسمی Shogun Adventure Club.
          </p>
        </div>

        {/* 2 Visual Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 my-auto max-w-5xl">
          {/* Jimshid Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group min-h-[220px] md:min-h-[260px] flex flex-col justify-end p-5">
            <Image
              src="/images/clients/shogun/hero-jimny.jpg"
              alt="پروژه جیمشید"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10 space-y-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold inline-block">
                FLAGSHIP BUILD · JIMSHID
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white">
                «جیمشید»؛ سوزوکی‌ای که شوگان از نو ساخت
              </h3>
              <p className="text-xs text-neutral-300 line-clamp-2">
                روایت بازسازی صفر تا صد سوزوکی جیمنی، شناسنامه قطعات تعویض‌شده و تقویت شاسی به عنوان سند مهارت گاراژ.
              </p>
            </div>
          </div>

          {/* Shogun Adventure Club */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group min-h-[220px] md:min-h-[260px] flex flex-col justify-end p-5">
            <Image
              src="/images/clients/shogun/adventure-club.jpg"
              alt="باشگاه ماجراجویی شوگان"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10 space-y-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-600 text-white font-bold inline-block">
                SHOGUN ADVENTURE CLUB
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white">
                باشگاه ماجراجویی و گردهمایی‌های شمشک
              </h3>
              <p className="text-xs text-neutral-300 line-clamp-2">
                تقویم تورهای بیراهه‌نوردی، قوانین عضویت، و گالری رویدادهای گروهی برای تقویت حس جامعه وفادار.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/90 border border-white/10 text-xs">
          <span className="text-neutral-300">
            ارزش برندینگ: نمایش جامعه وفادار و پروژه‌های پرچمدار، اعتبار شوگان را چند پله بالاتر از رقبا می‌نشاند
          </span>
          <button
            onClick={() => goToSlide(6)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
          >
            <span>مشاهده نقشه راه</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 7: PROJECT ROADMAP (فازبندی و نقشه راه اجرا)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="roadmap"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-between pt-24 pb-12 px-6 md:px-20 lg:px-28 bg-[#0a0a0b] overflow-hidden"
      >
        <div className="max-w-3xl space-y-2">
          <div className="text-red-500 text-xs font-mono tracking-wider">
            ۰۷ // IMPLEMENTATION PHASES & TIMELINE
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            نقشه راه شفاف؛ ۴ گام تا راه‌اندازی شورووم شوگان
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            فرایند ساخت پروژه همراه با بررسی و تایید مداوم خروجی‌ها با کارفرما.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="my-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl">
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2.5 relative">
            <span className="text-xs font-mono text-red-400">گام اول · هفته ۱</span>
            <h4 className="font-bold text-sm text-white">هویت و سناریوی برند</h4>
            <ul className="text-xs text-neutral-400 space-y-1">
              <li>• دریافت تصاویر و ویدیوهای شوگان</li>
              <li>• تعیین دقیق پالت رنگ و فونت پیدا</li>
              <li>• استراتژی محتوا و دسته‌بندی قطعات</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2.5 relative">
            <span className="text-xs font-mono text-red-400">گام دوم · هفته ۲-۳</span>
            <h4 className="font-bold text-sm text-white">طراحی لندینگ و تایید دیزاین</h4>
            <ul className="text-xs text-neutral-400 space-y-1">
              <li>• پیاده‌سازی پروتوتایپ زنده لندینگ</li>
              <li>• بررسی جزء به جزء دکمه‌ها و رنگ‌ها</li>
              <li>• تایید نهایی دیزاین سیستم (Sign-off)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2.5 relative">
            <span className="text-xs font-mono text-red-400">گام سوم · هفته ۴-۶</span>
            <h4 className="font-bold text-sm text-white">کدنویسی اختصاصی و فیچرها</h4>
            <ul className="text-xs text-neutral-400 space-y-1">
              <li>• توسعه کاتالوگ قطعات و استعلام</li>
              <li>• پیاده‌سازی سامانه مشاوره هوشمند</li>
              <li>• راه‌اندازی تقویم نوبت‌دهی کارگاه</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2.5 relative">
            <span className="text-xs font-mono text-red-400">گام چهارم · هفته ۷</span>
            <h4 className="font-bold text-sm text-white">تست، استقرار و تحویل</h4>
            <ul className="text-xs text-neutral-400 space-y-1">
              <li>• بهینه‌سازی سرعت ۹۵+ در موبایل</li>
              <li>• اتصال دامنه و سئو پایه محلی</li>
              <li>• آموزش پنل و آغاز ۱ سال پشتیبانی</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/90 border border-white/10 text-xs">
          <span className="text-neutral-300">
            تضمین تحویل به موقع همراه با گزارش‌دهی مستقیم هفتگی
          </span>
          <button
            onClick={() => goToSlide(7)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
          >
            <span>مشاهده پلن‌های سرمایه‌گذاری</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 8: INVESTMENT TIERS & SIGN-OFF (پلن‌های سرمایه‌گذاری و دکمه رسمی تایید)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="investment"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-between pt-24 pb-8 px-6 md:px-20 lg:px-28 bg-[#0c0c0e] overflow-hidden"
      >
        <div className="max-w-3xl space-y-2">
          <div className="text-red-500 text-xs font-mono tracking-wider">
            ۰۸ // INVESTMENT & PARTNERSHIP AGREEMENT
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            پلن‌های شفاف سرمایه‌گذاری شوگان گاراژ
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            هر دو پکیج شامل <span className="text-white font-bold">کدنویسی ۱۰۰٪ اختصاصی (بدون قالب آماده)</span> و{" "}
            <span className="text-red-400 font-bold">۱ سال پشتیبانی فنی کامل تضمینی</span> می‌باشند.
          </p>
        </div>

        {/* 2 Packages Cards Side by Side */}
        <div className="my-auto grid md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto w-full">
          {/* Package 1: 100M */}
          <div className={`p-5 md:p-6 rounded-2xl bg-neutral-900/80 border transition-all ${
            approvedPlan === 1 ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-white/10 hover:border-white/20"
          } space-y-3.5`}>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-neutral-400">PLAN 01</span>
                <h3 className="text-lg font-bold text-white">کاتالوگ پرفورمنس شوگان</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-white">۱۰۰ م.ت</div>
                <div className="text-[10px] text-neutral-400">سرمایه‌گذاری پروژه</div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                کدنویسی ۱۰۰٪ اختصاصی Next.js با سرعت و امنیت بالا
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                کاتالوگ مهندسی قطعات با استعلام مستقیم
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                معرفی ۴ لاین خدمات کارگاهی گلگون و فرم نوبت
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                بهینه‌سازی کامل برای گوشی‌های موبایل
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-400 font-bold shrink-0" />
                <span className="font-bold text-white">۱ سال پشتیبانی کامل فنی تضمینی</span>
              </li>
            </ul>

            <button
              onClick={() => handleApprove(1)}
              className={`w-full py-3 rounded-xl font-medium text-xs transition-all flex items-center justify-center gap-2 ${
                approvedPlan === 1
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-white/10"
              }`}
            >
              {approvedPlan === 1 ? <CheckCheck className="w-4 h-4" /> : null}
              <span>{approvedPlan === 1 ? "پلن ۱ انتخاب و تایید شد" : "انتخاب پلن ۱ (۱۰۰ میلیون تومان)"}</span>
            </button>
          </div>

          {/* Package 2: 140M (RECOMMENDED) */}
          <div className={`p-5 md:p-6 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-red-950/40 border transition-all ${
            approvedPlan === 2 ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-red-500/50 shadow-xl shadow-red-950/40"
          } space-y-3.5 relative overflow-hidden`}>
            <div className="absolute top-0 left-0 bg-gradient-to-r from-red-600 to-orange-500 text-white font-mono text-[9px] font-bold px-3.5 py-0.5 rounded-br-xl uppercase flex items-center gap-1">
              <Award className="w-3 h-3 text-white" />
              <span>RECOMMENDED · بالاترین بازدهی تجاری</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-red-500/20 pt-1">
              <div>
                <span className="text-xs font-mono text-red-400">PLAN 02</span>
                <h3 className="text-lg font-bold text-white">شو‌روم جامع و تعاملی شوگان</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-red-500">۱۴۰ م.ت</div>
                <div className="text-[10px] text-neutral-400">سرمایه‌گذاری جامع</div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-neutral-200">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">تمام امکانات پلن اول + موارد زیر:</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-amber-300 font-semibold">سامانه مشاوره هوشمند خودرو (Advisor Tool)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                سیستم نوبت‌دهی تقویمی کارگاه با پنل ادمین
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                پورتال اختصاصی Shogun Adventure Club و شوکیس جیمشید
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                انیمیشن‌های تعاملی اسکرول و ترنزیشن‌های سبک Camber
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-400 font-bold shrink-0" />
                <span className="font-bold text-white">۱ سال پشتیبانی کامل فنی + مانیتورینگ اختصاصی</span>
              </li>
            </ul>

            <button
              onClick={() => handleApprove(2)}
              className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg ${
                approvedPlan === 2
                  ? "bg-emerald-600 text-white shadow-emerald-600/30"
                  : "bg-red-600 hover:bg-red-500 text-white shadow-red-600/30 hover:scale-[1.02]"
              }`}
            >
              {approvedPlan === 2 ? <CheckCheck className="w-4 h-4" /> : <Flame className="w-4 h-4" />}
              <span>{approvedPlan === 2 ? "پلن ۲ (پیشنهادی) تایید شد" : "انتخاب پلن جامع (۱۴۰ میلیون تومان)"}</span>
            </button>
          </div>
        </div>

        {/* Footer Contact Details with User's Exact Phone Number */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-neutral-900 border border-white/10 text-xs">
          <div className="flex items-center gap-2 text-neutral-300 text-center sm:text-right">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>آماده شروع فاز اول تحقیقات و طراحی هویت بصری شوگان گاراژ</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:09120870095"
              className="flex items-center gap-1.5 text-neutral-200 hover:text-white px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-white/10 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-400" />
              <span>۰۹۱۲۰۸۷۰۰۹۵</span>
            </a>
            <a
              href="https://wa.me/989120870095?text=سلام%20حسن%20جان،%20پروپوزال%20شوگان%20گاراژ%20را%20بررسی%20کردم"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white font-medium px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>ارسال پیام در واتس‌اپ</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
