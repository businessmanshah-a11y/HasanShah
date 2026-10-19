"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Calendar,
  Share2,
  PhoneCall,
  Send,
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
  X,
  ShieldCheck,
  Zap
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
  { id: "investment", num: "۰۸", title: "پکیج‌های پیشنهادی", badge: "PROPOSED PACKAGES" },
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
  { id: "urban", name: "پرفورمنس و سواری شهری", icon: Gauge, desc: "سواری نرم، رینگ فورج سبک، ترمز تقویت‌شده" },
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
      threshold: 0.4,
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
    if (Math.abs(deltaY) > 60) {
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
      className="relative w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory bg-[#0a0a0b] text-neutral-100 antialiased selection:bg-red-600 selection:text-white"
      dir="rtl"
    >
      {/* ─── FIXED TOP NAV BAR ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 bg-[#0a0a0b]/95 backdrop-blur-md border-b border-white/[0.08]">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-red-600 to-neutral-950 border border-red-500/40 flex items-center justify-center text-white shadow-lg shadow-red-950/50 shrink-0">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 5h18" />
              <path d="M1 3h22" />
              <path d="M5 5v16" />
              <path d="M19 5v16" />
              <path d="M5 9h14" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">شوگان گاراژ</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-700/60 font-semibold">
                PROPOSAL
              </span>
            </div>
            <p className="text-xs text-neutral-400 hidden sm:block">مرجع تخصصی تعمیر و تجهیز خودروهای بیراهه‌نورد</p>
          </div>
        </div>

        {/* Dynamic Center Slide Tracker */}
        <div className="hidden lg:flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 bg-neutral-900/90 px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          <span className="text-red-500 font-black">{SLIDES[activeSlide].num}</span>
          <span className="text-neutral-600">/</span>
          <span className="font-medium">۰۸</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse mr-1"></span>
          <span className="text-white mr-1 font-bold">{SLIDES[activeSlide].title}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-300 hover:text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" />
            <span className="hidden sm:inline font-medium">{copied ? "کپی شد" : "اشتراک‌گذاری"}</span>
          </button>
          <button
            onClick={() => goToSlide(7)}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-red-600 hover:bg-red-500 shadow-md shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>مشاهده پکیج‌ها</span>
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </header>

      {/* ─── FIXED FLOATING PAGINATION (ON LEFT SIDE AWAY FROM RTL TEXT) ────── */}
      <nav
        aria-label="ناوبری صفحات"
        className="fixed left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2 bg-neutral-900/80 backdrop-blur-md px-2 py-4 rounded-full border border-white/10 shadow-2xl"
      >
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            className="group relative flex items-center justify-center p-1"
          >
            {/* Tooltip on Hover */}
            <span className="pointer-events-none absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/95 text-xs text-neutral-200 px-3 py-1.5 rounded-lg border border-white/15 whitespace-nowrap shadow-2xl font-medium">
              {slide.num} · {slide.title}
            </span>

            {/* Active / Inactive Indicator */}
            <span
              className={`transition-all duration-300 rounded-full ${
                activeSlide === idx
                  ? "w-2.5 h-7 bg-red-500 ring-2 ring-red-500/40 shadow-sm shadow-red-500"
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
        className="relative w-full min-h-[100dvh] md:h-[100dvh] snap-start snap-always flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-10 md:px-16 lg:px-24 overflow-y-auto md:overflow-hidden"
      >
        {/* Background Image with Cinematic Dark Gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/clients/shogun/hero-jimny.jpg"
            alt="شوگان جیمشید"
            fill
            priority
            className="object-cover object-center opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-[#0a0a0b]/60" />
        </div>

        {/* Top Badges */}
        <div className="relative z-10 flex flex-wrap items-center gap-2.5 pt-2">
          <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/40 flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            SHOGUN 4X4 ENGINEERING
          </span>
          <span className="text-xs sm:text-sm text-neutral-300 bg-neutral-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 font-medium">
            شهرک صنعتی گلگون · سند راهبردی اختصاصی
          </span>
        </div>

        {/* Center Minimal Punchy Headline */}
        <div className="relative z-10 my-auto max-w-4xl space-y-4 py-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.18]">
            مرجع مهندسی، تجهیز و بازسازی <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-red-500 via-orange-500 to-amber-200">
              خودروهای بیراهه‌نورد
            </span>
          </h1>

          {/* English Kicker BELOW the Persian Title */}
          <div className="text-red-500 text-xs sm:text-sm font-mono tracking-wider font-bold">
            THE GENESIS // ۰۱
          </div>

          <p className="text-neutral-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
            پروپوزال اختصاصی شوگان گاراژ؛ شورووم مهندسی قطعات، هاب خدمات کارگاهی، سامانه هوشمند مشاوره و کلوب اختصاصی بیراهه‌نوردان.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => goToSlide(1)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>بررسی سند استراتژیک</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => goToSlide(7)}
              className="flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-100 border border-white/20 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all"
            >
              <span>مشاهده پکیج‌های پیشنهادی</span>
            </button>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10">
          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-black text-white">+۲۱K</div>
            <div className="text-xs sm:text-sm text-neutral-300 mt-0.5">دنبال‌کننده اینستاگرام</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-black text-red-500">۱ سال</div>
            <div className="text-xs sm:text-sm text-neutral-300 mt-0.5">پشتیبانی فنی تضمینی</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-black text-white">۱۰۰٪</div>
            <div className="text-xs sm:text-sm text-neutral-300 mt-0.5">کدنویسی اختصاصی</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-black text-orange-400">۸ اسلاید</div>
            <div className="text-xs sm:text-sm text-neutral-300 mt-0.5">شورووم تعاملی تمام‌صفحه</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 2: THE BIG LEAP (چشم‌انداز و تمایز شوگان)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="vision"
        className="relative w-full min-h-[100dvh] md:h-[100dvh] snap-start snap-always flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-10 md:px-16 lg:px-24 bg-[#0c0c0e] overflow-y-auto md:overflow-hidden"
      >
        {/* Persian Heading First, English Below */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            چرا شوگان شایسته فراتر از سایت‌سازهای معمولی است؟
          </h2>
          <div className="text-red-500 text-xs sm:text-sm font-mono tracking-wider font-bold">
            GAP ANALYSIS & BRAND PRESTIGE // ۰۲
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            مقایسه رویکرد فروشگاه‌های قالبی متداول بازار با استانداردهای پرچمدار شوگان گاراژ.
          </p>
        </div>

        {/* 2 Comparison Cards with Larger Typography */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 my-auto max-w-5xl w-full">
          {/* Generic Store Card */}
          <div className="p-5 sm:p-7 rounded-2xl bg-neutral-900/70 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between pb-3.5 border-b border-neutral-800">
              <span className="text-base sm:text-lg font-bold text-neutral-300 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                سایت‌سازهای قالبی و معمولی
              </span>
              <span className="text-xs font-mono text-neutral-500 font-semibold">GENERIC CMS</span>
            </div>
            <ul className="space-y-3 text-sm sm:text-base text-neutral-300 font-medium">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <span>قالب‌های خشک و آماده بدون هویت آفرود ژاپنی</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <span>سردرگمی خریدار به دلیل عدم فیلتر بر اساس شاسی خودرو</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <span>غفلت کامل از معرفی خدمات کارگاه مهندسی گلگون</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <span>نبود بخش اختصاصی برای دورهمی‌ها و اعضای کلوب</span>
              </li>
            </ul>
          </div>

          {/* Bespoke Shogun Card */}
          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-red-950/40 border border-red-500/40 space-y-4 shadow-xl shadow-red-950/30">
            <div className="flex items-center justify-between pb-3.5 border-b border-red-500/25">
              <span className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-500 shrink-0" />
                معماری اختصاصی شوگان (سبک Camber)
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-red-600 text-white font-bold">
                HIGH PERFORMANCE
              </span>
            </div>
            <ul className="space-y-3 text-sm sm:text-base text-neutral-100 font-medium">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>دیزاین دارک صنعتی، سرعت خیره‌کننده و هویت سامورایی</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>فیلتر قطعی قطعات بر اساس شاسی (جیمنی، پرادو، هایلوکس)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>هاب معرفی لاین‌های خدمات کارگاه با تقویم نوبت‌دهی</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>پورتال Shogun Adventure Club و شوکیس پروژه جیمشید</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Context Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 rounded-xl bg-neutral-900/90 border border-white/10 text-xs sm:text-sm">
          <span className="text-neutral-300 font-medium text-center sm:text-right">
            هدف اصلی: تبدیل مستقیم ۲۱ هزار مخاطب پیج به مشتریان وفادار کارگاه و خریداران قطعات
          </span>
          <button
            onClick={() => goToSlide(2)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-bold shrink-0"
          >
            <span>مشاهده ویترین قطعات</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 3: PARTS & FITMENT GUIDE (کاتالوگ مهندسی قطعات)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="parts"
        className="relative w-full min-h-[100dvh] md:h-[100dvh] snap-start snap-always flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-10 md:px-16 lg:px-24 bg-[#0a0a0b] overflow-y-auto md:overflow-hidden"
      >
        {/* Persian Heading First, English Below */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            ویترین مهندسی قطعات؛ سازگاری قطعی با خودرو
          </h2>
          <div className="text-red-500 text-xs sm:text-sm font-mono tracking-wider font-bold">
            PARTS CATALOGUE & FITMENT VERIFICATION // ۰۳
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            انتخاب دقیق بر اساس شاسی خودرو با تصاویر استودیویی و استعلام آنی.
          </p>
        </div>

        {/* 3 Real Commercial Product Cards with Larger Typography */}
        <div className="my-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full">
          {/* Product 1: Coilovers */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-red-500/50 transition-all group shadow-lg flex flex-col justify-between">
            <div>
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-neutral-950 mb-3.5">
                <Image
                  src="/images/clients/shogun/parts-detail.jpg"
                  alt="کیت کمک‌فنر نیتروژنی"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 text-xs font-mono px-2.5 py-1 rounded-md bg-red-600 text-white font-bold shadow-md">
                  SUSPENSION KIT
                </span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">کیت کمک‌فنر نیتروژنی شوگان</h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 leading-relaxed">
                لیفت ۲.۵ اینچ، مخزن ریموت، تنظیم ۳۰ حالته سختی مخصوص جیمنی
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10 text-xs sm:text-sm font-semibold">
              <span className="text-emerald-400">فیتمنت تضمینی VIN</span>
              <span className="text-white group-hover:text-red-400 transition-colors">استعلام مستقیم ←</span>
            </div>
          </div>

          {/* Product 2: Beadlock Wheels */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-red-500/50 transition-all group shadow-lg flex flex-col justify-between">
            <div>
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-neutral-950 mb-3.5">
                <Image
                  src="/images/clients/shogun/wheel-detail.jpg"
                  alt="رینگ بیدلاک فورج"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-200 border border-white/10 font-bold shadow-md">
                  WHEEL & TIRE
                </span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">رینگ سبک‌وزن بیدلاک ۱۶ اینچ</h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 leading-relaxed">
                فورج با حلقه بیدلاک قرمز، جلوگیری قطعی از دیس‌بید در رمل و صخره
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10 text-xs sm:text-sm font-semibold">
              <span className="text-amber-400">موجودی در گاراژ شوگان</span>
              <span className="text-white group-hover:text-red-400 transition-colors">استعلام مستقیم ←</span>
            </div>
          </div>

          {/* Product 3: Heavy Duty Winch */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-red-500/50 transition-all group shadow-lg flex flex-col justify-between">
            <div>
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-neutral-950 mb-3.5">
                <Image
                  src="/images/clients/shogun/winch-detail.jpg"
                  alt="وینچ برقی هوی‌دیوتی"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-200 border border-white/10 font-bold shadow-md">
                  RECOVERY GEAR
                </span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">وینچ برقی ۱۲,۰۰۰ پوند کابل قرمز</h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 leading-relaxed">
                موتور ضدآب IP68، کابل سنتتیک، ریموت بی‌سیم و سینی فابریک شاسی
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10 text-xs sm:text-sm font-semibold">
              <span className="text-emerald-400">نصب فابریک در کارگاه</span>
              <span className="text-white group-hover:text-red-400 transition-colors">استعلام مستقیم ←</span>
            </div>
          </div>
        </div>

        {/* Bottom Context Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 rounded-xl bg-neutral-900/90 border border-white/10 text-xs sm:text-sm">
          <span className="text-neutral-300 font-medium text-center sm:text-right">
            حذف اصطکاک قیمت متغیر: مشتری قطعه را انتخاب کرده و مستقیماً به استعلام فنی وصل می‌شود
          </span>
          <button
            onClick={() => goToSlide(3)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-bold shrink-0"
          >
            <span>مشاهده خدمات کارگاه</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 4: WORKSHOP HUB & BOOKING (هاب خدمات کارگاهی و نوبت‌دهی)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        className="relative w-full min-h-[100dvh] md:h-[100dvh] snap-start snap-always flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-10 md:px-16 lg:px-24 bg-[#0c0c0e] overflow-y-auto md:overflow-hidden"
      >
        {/* Persian Heading First, English Below */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            هاب خدمات کارگاهی و مدیریت هوشمند نوبت‌ها
          </h2>
          <div className="text-red-500 text-xs sm:text-sm font-mono tracking-wider font-bold">
            WORKSHOP HUB & TIME SLOT MANAGEMENT // ۰۴
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            معرفی لاین‌های تخصصی گاراژ گلگون به همراه سیستم نوبت‌دهی آنلاین.
          </p>
        </div>

        {/* 4 Pillars Grid with Larger Typography and Concise Text */}
        <div className="my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full">
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-2.5 shadow-md">
            <span className="text-base sm:text-lg font-mono text-red-500 font-black">۰۱</span>
            <h3 className="font-extrabold text-base sm:text-lg text-white">سرویس موتور و گیربکس</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              تعویض روغن، شستشوی انژکتور و تست سلامت موتور در شرایط بیراهه‌نوردی.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-2.5 shadow-md">
            <span className="text-base sm:text-lg font-mono text-red-500 font-black">۰۲</span>
            <h3 className="font-extrabold text-base sm:text-lg text-white">کالیبراسیون زیربندی</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              تنظیم کمبر و کستر، لیفت استاندارد تعلیق و رفع گیجی فرمان با پایداری کامل.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-2.5 shadow-md">
            <span className="text-base sm:text-lg font-mono text-red-500 font-black">۰۳</span>
            <h3 className="font-extrabold text-base sm:text-lg text-white">چکاپ پیش از سفر</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              بازرسی کامل سیستم ۴ چرخ، دیفرانسیل‌ها، ترمزها و پلوس‌ها قبل از سفر.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-2.5 shadow-md">
            <span className="text-base sm:text-lg font-mono text-red-500 font-black">۰۴</span>
            <h3 className="font-extrabold text-base sm:text-lg text-white">تجهیز کمپر و اورلند</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              سیم‌کشی باتری دوم، باک اضافه، پروژکتورهای دید در شب و امکانات رفاهی.
            </p>
          </div>
        </div>

        {/* Booking Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-neutral-900 to-red-950/40 border border-red-500/40 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1.5 text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Calendar className="w-5 h-5 text-red-400 shrink-0" />
              <span className="font-bold text-base text-white">سیستم رزرو نوبت با تقویم هوشمند</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                ACTIVE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300">
              ادمین گاراژ زمان‌های پر را مشخص می‌کند و مشتریان تنها زمان‌های باز را برای بررسی خودرو رزرو می‌کنند.
            </p>
          </div>

          <button
            onClick={() => goToSlide(4)}
            className="shrink-0 flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm px-5 py-3 rounded-xl font-bold shadow-md shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
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
        className="relative w-full min-h-[100dvh] md:h-[100dvh] snap-start snap-always flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-10 md:px-16 lg:px-24 bg-[#0a0a0b] overflow-y-auto md:overflow-hidden"
      >
        {/* Persian Heading First, English Below */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            سیستم مشاوره و پیشنهاد هوشمند تجهیزات
          </h2>
          <div className="text-red-500 text-xs sm:text-sm font-mono tracking-wider font-bold">
            INTERACTIVE SMART ADVISOR // ۰۵
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            انتخاب هوشمند قطعات متناسب با خودرو و سبک بیراهه‌نوردی شما.
          </p>
        </div>

        {/* Live Interactive Configurator Box with Larger Fonts */}
        <div className="my-auto p-4 sm:p-6 md:p-8 rounded-2xl bg-neutral-900/90 border border-red-500/40 space-y-5 max-w-5xl w-full mx-auto shadow-2xl">
          {/* Step 1: Vehicle */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono text-red-400 font-bold">// گام اول: انتخاب خودرو</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
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
                    className={`p-3.5 sm:p-4 rounded-xl border text-right transition-all group ${
                      isSelected
                        ? "bg-red-600/20 border-red-500 text-white shadow-md shadow-red-950/40"
                        : "bg-neutral-950/70 border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2.5 transition-colors ${
                      isSelected
                        ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                        : "bg-neutral-900 text-neutral-400 group-hover:text-white group-hover:bg-neutral-800"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-extrabold text-white">{v.name}</div>
                    <div className="text-xs text-neutral-400 mt-0.5 truncate">{v.tag}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Use Style */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono text-red-400 font-bold">// گام دوم: سبک سفر و استفاده</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
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
                    className={`p-3.5 sm:p-4 rounded-xl border text-right transition-all group ${
                      isSelected
                        ? "bg-red-600/20 border-red-500 text-white shadow-md"
                        : "bg-neutral-950/70 border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? "bg-red-600 text-white" : "bg-neutral-900 text-neutral-400 group-hover:text-white"
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-extrabold text-white">{s.name}</div>
                    </div>
                    <div className="text-xs text-neutral-300 leading-relaxed font-normal">{s.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Result Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-black/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-right">
              <span className="text-xs font-mono text-red-400 font-bold">پیشنهاد مهندسی شوگان:</span>
              <p className="text-sm sm:text-base text-neutral-100 font-medium">
                {selectedVehicle === "jimny" && "کیت لیفت ۲.۵ اینچ نیتروژنی + اسنورکل فابریک + رینگ بیدلاک ۱۶ سبک"}
                {selectedVehicle === "toyota" && "زیربندی هوی‌دیوتی با فنر لول دوبل + سینی زیر و سپر فلزی + وینچ ۱۲۰۰۰"}
                {selectedVehicle === "pajero" && "کمک‌فنرهای کورس بلند + هدرز استیل + تقویت سیستم خنک‌کاری گیربکس"}
                {selectedVehicle === "nissan" && "بازسازی کامل جلوبندی + بوستر ترمز تقویت‌شده + پروژکتورهای مهندسی"}
              </p>
            </div>

            <a
              href={`https://wa.me/989120870095?text=${encodeURIComponent(`سلام، برای خودروی ${VEHICLES.find(v => v.id === selectedVehicle)?.name} در سبک ${STYLES.find(s => s.id === selectedStyle)?.name} مشاوره می‌خواهم.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAdvisorConsulted(true)}
              className="shrink-0 flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm px-5 py-3 rounded-xl font-bold shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{advisorConsulted ? "ارسال به واتس‌اپ شوگان" : "دریافت مشاوره و برآورد تجهیز"}</span>
            </a>
          </div>
        </div>

        {/* Bottom Context Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 rounded-xl bg-neutral-900/90 border border-white/10 text-xs sm:text-sm">
          <span className="text-neutral-300 font-medium text-center sm:text-right">
            ابزاری تعاملی برای تبدیل آنی بیننده به مکالمه کاری مستقیم در پیام‌رسان
          </span>
          <button
            onClick={() => goToSlide(5)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-bold shrink-0"
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
        className="relative w-full min-h-[100dvh] md:h-[100dvh] snap-start snap-always flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-10 md:px-16 lg:px-24 bg-[#0c0c0e] overflow-y-auto md:overflow-hidden"
      >
        {/* Persian Heading First, English Below */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            پروژه نمادین «جیمشید» و باشگاه ماجراجویی شوگان
          </h2>
          <div className="text-red-500 text-xs sm:text-sm font-mono tracking-wider font-bold">
            ICONIC BUILDS & ADVENTURE COMMUNITY // ۰۶
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            روایت مهندسی ساخت خودروهای خاص و خانه رسمی Shogun Adventure Club.
          </p>
        </div>

        {/* 2 Visual Cards with Larger Content */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 my-auto max-w-5xl w-full">
          {/* Jimshid Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group min-h-[240px] sm:min-h-[280px] md:min-h-[320px] flex flex-col justify-end p-6 sm:p-7 shadow-xl">
            <Image
              src="/images/clients/shogun/hero-jimny.jpg"
              alt="پروژه جیمشید"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-red-600 text-white font-bold inline-block shadow">
                FLAGSHIP BUILD · JIMSHID
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                «جیمشید»؛ سوزوکی‌ای که شوگان از نو ساخت
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                روایت بازسازی صفر تا صد سوزوکی جیمنی، شناسنامه قطعات تعویض‌شده و تقویت شاسی به عنوان سند مهارت گاراژ.
              </p>
            </div>
          </div>

          {/* Shogun Adventure Club */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group min-h-[240px] sm:min-h-[280px] md:min-h-[320px] flex flex-col justify-end p-6 sm:p-7 shadow-xl">
            <Image
              src="/images/clients/shogun/adventure-club.jpg"
              alt="باشگاه ماجراجویی شوگان"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-amber-600 text-white font-bold inline-block shadow">
                SHOGUN ADVENTURE CLUB
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                باشگاه ماجراجویی و گردهمایی‌های شمشک
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                تقویم تورهای بیراهه‌نوردی، قوانین عضویت، و گالری رویدادهای گروهی برای ساخت جامعه وفادار مشتریان.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Context Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 rounded-xl bg-neutral-900/90 border border-white/10 text-xs sm:text-sm">
          <span className="text-neutral-300 font-medium text-center sm:text-right">
            ارزش برندینگ: نمایش جامعه وفادار و پروژه‌های پرچمدار، اعتبار شوگان را چند پله بالاتر از رقبا می‌نشاند
          </span>
          <button
            onClick={() => goToSlide(6)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-bold shrink-0"
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
        className="relative w-full min-h-[100dvh] md:h-[100dvh] snap-start snap-always flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-10 md:px-16 lg:px-24 bg-[#0a0a0b] overflow-y-auto md:overflow-hidden"
      >
        {/* Persian Heading First, English Below */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            نقشه راه شفاف؛ ۴ گام تا راه‌اندازی شورووم شوگان
          </h2>
          <div className="text-red-500 text-xs sm:text-sm font-mono tracking-wider font-bold">
            IMPLEMENTATION PHASES & TIMELINE // ۰۷
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            فرایند ساخت پروژه همراه با بررسی و تایید گام‌به‌گام با کارفرما.
          </p>
        </div>

        {/* 4 Steps Grid with Larger Typography and Clean Concise Content */}
        <div className="my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full">
          {/* Step 1 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-3 relative shadow-md">
            <span className="text-xs sm:text-sm font-mono text-red-400 font-bold block">گام اول · هفته ۱</span>
            <h3 className="font-extrabold text-base sm:text-lg text-white">هویت و سناریو</h3>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 font-medium">
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>دریافت مدیا و تحلیل دقیق هویت شوگان</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>تعیین ساختار محتوا و دسته‌بندی قطعات</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-3 relative shadow-md">
            <span className="text-xs sm:text-sm font-mono text-red-400 font-bold block">گام دوم · هفته ۲-۳</span>
            <h3 className="font-extrabold text-base sm:text-lg text-white">دیزاین و پروتوتایپ</h3>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 font-medium">
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>پیاده‌سازی لندینگ زنده و تعاملی</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>تایید نهایی دیزاین سیستم (Sign-off)</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-3 relative shadow-md">
            <span className="text-xs sm:text-sm font-mono text-red-400 font-bold block">گام سوم · هفته ۴-۶</span>
            <h3 className="font-extrabold text-base sm:text-lg text-white">کدنویسی و فیچرها</h3>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 font-medium">
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>توسعه کاتالوگ قطعات و سیستم استعلام</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>سامانه نوبت‌دهی و مشاوره هوشمند</span>
              </li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-3 relative shadow-md">
            <span className="text-xs sm:text-sm font-mono text-red-400 font-bold block">گام چهارم · هفته ۷</span>
            <h3 className="font-extrabold text-base sm:text-lg text-white">تست، استقرار و لانچ</h3>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 font-medium">
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>بهینه‌سازی سرعت ۹۵+ روی موبایل</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>اتصال دامنه و آغاز ۱ سال پشتیبانی فنی</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Context Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 rounded-xl bg-neutral-900/90 border border-white/10 text-xs sm:text-sm">
          <span className="text-neutral-300 font-medium text-center sm:text-right">
            تضمین تحویل به موقع همراه با گزارش‌دهی مستقیم هفتگی در هر مرحله
          </span>
          <button
            onClick={() => goToSlide(7)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1 font-bold shrink-0"
          >
            <span>مشاهده پکیج‌های پیشنهادی</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 8: PROPOSED PACKAGES & SIGN-OFF (پکیج‌های پیشنهادی)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="investment"
        className="relative w-full min-h-[100dvh] md:h-[100dvh] snap-start snap-always flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-10 md:px-16 lg:px-24 bg-[#0c0c0e] overflow-y-auto md:overflow-hidden"
      >
        {/* Persian Heading First, English Below */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            پلن‌های پیشنهادی توسعه شوگان گاراژ
          </h2>
          <div className="text-red-500 text-xs sm:text-sm font-mono tracking-wider font-bold">
            PROPOSED EXECUTIVE PACKAGES // ۰۸
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            هر دو پکیج شامل <span className="text-white font-bold">کدنویسی ۱۰۰٪ اختصاصی (بدون قالب آماده)</span> و{" "}
            <span className="text-red-400 font-bold">۱ سال پشتیبانی فنی کامل تضمینی</span> می‌باشند.
          </p>
        </div>

        {/* 2 Packages Cards Side by Side with Larger Typography */}
        <div className="my-auto grid md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto w-full">
          {/* Package 1 */}
          <div className={`p-6 sm:p-7 rounded-2xl bg-neutral-900/80 border transition-all ${
            approvedPlan === 1 ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-white/10 hover:border-white/20"
          } space-y-4 shadow-xl flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-neutral-400 font-semibold">PLAN 01</span>
                  <h3 className="text-lg sm:text-xl font-black text-white">کاتالوگ پرفورمنس شوگان</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-800 text-neutral-300 border border-white/10">
                  پکیج استاندارد
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-200 font-medium mt-4">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>کدنویسی ۱۰۰٪ اختصاصی با ری‌اکت و نکست‌جی‌اس</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>کاتالوگ مهندسی قطعات با استعلام مستقیم</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>معرفی ۴ لاین خدمات کارگاهی گلگون و فرم نوبت</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>بهینه‌سازی کامل سرعت و رابط کاربری موبایل</span>
                </li>
                <li className="flex items-center gap-2.5 pt-1">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-bold text-white">۱ سال پشتیبانی فنی کامل و تضمینی</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleApprove(1)}
              className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                approvedPlan === 1
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-white/10 active:scale-95"
              }`}
            >
              {approvedPlan === 1 ? <CheckCheck className="w-4 h-4" /> : null}
              <span>{approvedPlan === 1 ? "پکیج ۱ انتخاب شد" : "انتخاب پکیج ۱ (کاتالوگ پرفورمنس)"}</span>
            </button>
          </div>

          {/* Package 2: RECOMMENDED */}
          <div className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-red-950/40 border transition-all ${
            approvedPlan === 2 ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-red-500/50 shadow-2xl shadow-red-950/40"
          } space-y-4 relative overflow-hidden flex flex-col justify-between`}>
            <div className="absolute top-0 left-0 bg-gradient-to-r from-red-600 to-orange-500 text-white font-mono text-[10px] font-bold px-3.5 py-1 rounded-br-xl uppercase flex items-center gap-1 shadow">
              <Award className="w-3.5 h-3.5 text-white" />
              <span>RECOMMENDED · بالاترین بازدهی تجاری</span>
            </div>

            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-red-500/20 pt-2">
                <div>
                  <span className="text-xs font-mono text-red-400 font-semibold">PLAN 02</span>
                  <h3 className="text-lg sm:text-xl font-black text-white">شورووم جامع و تعاملی شوگان</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-950/80 text-red-400 border border-red-500/30">
                  پکیج جامع (پیشنهادی)
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-100 font-medium mt-4">
                <li className="flex items-center gap-2.5 text-amber-300 font-bold">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>تمام امکانات پلن اول + موارد اختصاصی زیر:</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>سامانه مشاوره هوشمند خودرو (Advisor Tool)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>سیستم نوبت‌دهی تقویمی کارگاه با پنل ادمین</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>پورتال Shogun Adventure Club و شوکیس جیمشید</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>انیمیشن‌های تعاملی اسکرول سبک کمبر</span>
                </li>
                <li className="flex items-center gap-2.5 pt-1">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-bold text-white">۱ سال پشتیبانی فنی کامل + مانیتورینگ اختصاصی</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleApprove(2)}
              className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                approvedPlan === 2
                  ? "bg-emerald-600 text-white shadow-emerald-600/30"
                  : "bg-red-600 hover:bg-red-500 text-white shadow-red-600/40 hover:scale-[1.02] active:scale-95"
              }`}
            >
              {approvedPlan === 2 ? <CheckCheck className="w-4 h-4" /> : <Flame className="w-4 h-4" />}
              <span>{approvedPlan === 2 ? "پکیج ۲ (پیشنهادی) انتخاب شد" : "انتخاب پکیج جامع تعاملی"}</span>
            </button>
          </div>
        </div>

        {/* Footer Contact Details with User's Exact Phone Number */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-neutral-900 border border-white/10 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-neutral-300 text-center sm:text-right">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="font-medium">آماده شروع فاز اول تحقیقات و طراحی هویت بصری شوگان گاراژ</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:09120870095"
              className="flex items-center gap-1.5 text-neutral-100 hover:text-white px-3.5 py-2 rounded-lg bg-neutral-800 border border-white/10 transition-colors font-mono font-bold"
            >
              <PhoneCall className="w-4 h-4 text-red-400" />
              <span>۰۹۱۲۰۸۷۰۰۹۵</span>
            </a>
            <a
              href="https://wa.me/989120870095?text=سلام%20حسن%20جان،%20پروپوزال%20شوگان%20گاراژ%20را%20بررسی%20کردم"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white font-bold px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>پیام در واتس‌اپ</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
