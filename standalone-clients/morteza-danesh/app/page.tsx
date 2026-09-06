"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Building2,
  Rocket,
  Target,
  Compass,
  CheckCircle2,
  Quote,
  ArrowUpRight,
  MapPin,
  Mail,
  Share2,
  Check,
  Globe,
  Clock,
  Sun,
  Moon,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronDown,
  Award,
  Users2,
  Handshake,
  LineChart,
  FileCheck2,
  Mic2,
  Tv,
  Coins,
  WalletCards,
  ExternalLink,
  Send,
  SlidersHorizontal,
  Gift,
  Heart,
  PartyPopper,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type CSSProperties } from "react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

// ─── Executive Color Palette Tokens ──────────────────────────────────────────
const DARK = {
  bg:          "oklch(0.12 0.022 260)",     // Deep midnight slate #0c101c
  bgDeep:      "oklch(0.08 0.016 260)",     // Pitch midnight #060911
  surface:     "oklch(0.16 0.030 258)",     // Rich card surface #121828
  surfaceHigh: "oklch(0.21 0.040 255)",     // Elevated card
  emerald:     "oklch(0.74 0.18 160)",      // ZTech tech emerald #10b981
  cyan:        "oklch(0.72 0.16 210)",      // Electric cyan #06b6d4
  blue:        "oklch(0.68 0.20 250)",      // Venture blue #3b82f6
  gold:        "oklch(0.84 0.12 75)",       // Champagne executive gold #f59e0b
  fg:          "oklch(0.97 0.005 260)",     // Clean crisp white
  fgMuted:     "oklch(0.72 0.015 255)",     // Secondary text
  divider:     "rgba(255, 255, 255, 0.08)",
  cardBorder:  "rgba(255, 255, 255, 0.09)",
  pillBg:      "rgba(12, 16, 28, 0.72)",
  pillBorder:  "rgba(255, 255, 255, 0.10)",
} as const;

const LIGHT = {
  bg:          "oklch(0.98 0.005 250)",     // Crisp clean background
  bgDeep:      "oklch(0.95 0.008 250)",     // Subtle light gray
  surface:     "oklch(1.00 0.000 0)",       // Pure white cards
  surfaceHigh: "oklch(0.94 0.012 250)",     // Elevated
  emerald:     "oklch(0.52 0.18 160)",      // Deep emerald
  cyan:        "oklch(0.48 0.16 210)",      // Deep cyan
  blue:        "oklch(0.48 0.20 250)",      // Executive navy blue
  gold:        "oklch(0.58 0.14 75)",       // Antique gold
  fg:          "oklch(0.14 0.020 260)",     // Pitch dark text
  fgMuted:     "oklch(0.42 0.015 260)",     // Muted gray
  divider:     "rgba(0, 0, 0, 0.08)",
  cardBorder:  "rgba(0, 0, 0, 0.08)",
  pillBg:      "rgba(255, 255, 255, 0.85)",
  pillBorder:  "rgba(0, 0, 0, 0.10)",
} as const;

type Theme = { [K in keyof typeof DARK]: string };
type AccentKey = "emerald" | "cyan" | "gold" | "blue";

// ─── Confetti Cannon Helper ──────────────────────────────────────────────────
function fireGrandConfetti() {
  // Center explosive burst
  confetti({
    particleCount: 90,
    spread: 90,
    origin: { y: 0.55 },
    colors: ["#10b981", "#06b6d4", "#f59e0b", "#ec4899", "#3b82f6", "#ffffff"],
    zIndex: 999999,
  });

  // Dual cascading cannons
  const end = Date.now() + 2800;
  const colors = ["#10b981", "#06b6d4", "#f59e0b", "#ffffff", "#ec4899"];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 55,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors: colors,
      zIndex: 999999,
    });
    confetti({
      particleCount: 4,
      angle: 125,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors: colors,
      zIndex: 999999,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// ─── Static Data ─────────────────────────────────────────────────────────────
const IMPACT_STATS = [
  {
    value: "+۱۰ سال",
    label: "راهبری در اکوسیستم نوآوری، CVC و شتابدهی ایران",
    accent: "emerald" as AccentKey,
    icon: Award,
    sub: "تجربه عملیاتی و سازمانی",
  },
  {
    value: "+۱۵۰",
    label: "استارتاپ ارزیابی، همراهی و منتور شده",
    accent: "cyan" as AccentKey,
    icon: Rocket,
    sub: "فین‌تک، ابری، هوش مصنوعی",
  },
  {
    value: "۳ مرکز",
    label: "نوآوری و شتابدهی پیشگام راهبری‌شده",
    accent: "gold" as AccentKey,
    icon: Building2,
    sub: "زی‌تک، وینوهاب، طرفه‌نگار",
  },
  {
    value: "ده‌ها راند",
    label: "مشارکت در جذب سرمایه فرشته و شرکتی",
    accent: "blue" as AccentKey,
    icon: Coins,
    sub: "راندهای Seed و Growth",
  },
];

const ROLES = [
  {
    title: "مدیرعامل مرکز نوآوری زی‌تک (ZTech)",
    org: "بازوی سرمایه‌گذاری جسورانه شرکتی (CVC) هلدینگ زرین‌پال",
    badge: "جایگاه فعلی",
    desc: "هدایت تخصصی سرمایه‌گذاری‌های خطرپذیر در حوزه‌های فین‌تک، پرداخت، سیستم‌های ابری، نئوبانک و بلاک‌چین؛ به همراه توسعه فضای کار اشتراکی نوآورانه در پارک علم و فناوری دانشگاه تربیت مدرس.",
    accent: "emerald" as AccentKey,
    icon: WalletCards,
    tags: ["سرمایه‌گذاری CVC", "فین‌تک و پرداخت", "هم‌افزایی سازمانی", "فضای کار اشتراکی"],
  },
  {
    title: "عضو هیئت اجرایی و سرمایه‌گذار فرشته",
    org: "گروه سرمایه‌گذاران نیک‌اندیش کارایا (Karaya Angel Investors)",
    badge: "فعال",
    desc: "غربالگری موشکافانه طرح‌های نوپا، مشارکت در راندهای بذری و فرشته (Angel Rounds) و انتقال سرمایه هوشمند، دانش راهبردی و شبکه ارتباطی به بنیان‌گذاران مستعد.",
    accent: "gold" as AccentKey,
    icon: Handshake,
    tags: ["Angel Investing", "Smart Money", "ارزیابی موشکافانه", "شبکه کارایا"],
  },
  {
    title: "مدیرعامل سابق شتاب‌دهنده آنلاین وینوهاب",
    org: "VinoHub — نخستین پلتفرم شتابدهی تمام‌مجازی استارتاپ‌ها",
    badge: "سوابق شاخص",
    desc: "توسعه بستر آموزش، ارزیابی و شتابدهی ابری با هدف تمرکززدایی از پایتخت و ایجاد فرصت برابر برای استارتاپ‌های خلاق در تمامی استان‌های کشور.",
    accent: "cyan" as AccentKey,
    icon: Globe,
    tags: ["شتابدهی ابری", "عدالت آموزشی", "منتورینگ آنلاین", "فناوری سازمانی"],
  },
  {
    title: "مدیر سابق مرکز کارآفرینی و نوآوری",
    org: "هلدینگ طرفه‌نگار (گروه شرکت‌های نرم‌افزاری هلو)",
    badge: "سوابق شاخص",
    desc: "استقرار مدل‌های نوآوری باز سازمانی، ایجاد پل ارتباطی میان ظرفیت‌های بازار سنتی مالی و استارتاپ‌های نوپای دانشگاهی و حمایت از ایده‌های تحول‌آفرین.",
    accent: "blue" as AccentKey,
    icon: Building2,
    tags: ["نوآوری باز شرکتی", "سیستم‌های مالی", "کارآفرینی سازمانی"],
  },
];

const ADVISORY_SERVICES = [
  {
    icon: LineChart,
    title: "استراتژی جذب سرمایه و مذاکره (Fundraising & Pitching)",
    desc: "ساختاردهی حرفه‌ای به ارائه سرمایه‌پذیری (Pitch Deck)، تدوین مدل مالی واقع‌بینانه، تحلیل Cap Table، سناریوسازی ارزش‌گذاری و آمادگی کامل جهت مذاکره با سرمایه‌گذاران جسورانه و فرشته.",
    accent: "emerald" as AccentKey,
    badge: "تخصصی و استراتژیک",
    deliverables: [
      "اصلاح ساختار و داستان Pitch Deck",
      "مدل‌سازی مالی ۳ تا ۵ ساله",
      "سناریوهای ارزش‌گذاری پیش و پس از سرمایه",
      "هدایت مذاکرات قراردادهای سرمایه‌گذاری (SHA/SSA)",
    ],
  },
  {
    icon: Target,
    title: "معماری مدل کسب‌وکار و مقیاس‌پذیری (Scale & GTM)",
    desc: "سنجش عمیق تناسب محصول با بازار (Product-Market Fit)، مهندسی مجدد جریان‌های درآمدی، بهینه‌سازی استراتژی ورود به بازار (GTM) و اصلاح سنجه‌های کلیدی نظیر CAC و LTV.",
    accent: "cyan" as AccentKey,
    badge: "رشد و تجاری‌سازی",
    deliverables: [
      "طراحی بوم مدل کسب‌وکار بهینه‌شده",
      "استراتژی Go-To-Market و کانال‌های جذب",
      "بهینه‌سازی اقتصاد واحد (Unit Economics)",
      "تعریف ساختار شاخص‌های کلیدی عملکرد (KPIs)",
    ],
  },
  {
    icon: Building2,
    title: "نوآوری باز و راه‌اندازی CVC برای صنایع و هلدینگ‌ها",
    desc: "مشاوره اختصاصی به شرکت‌های بزرگ و سنتی جهت راه‌اندازی بازوهای سرمایه‌گذاری خطرپذیر شرکتی، اتصال سازمان به اکوسیستم نوآوری و ایجاد کانال‌های خلق ارزش هم‌افزا با استارتاپ‌ها.",
    accent: "gold" as AccentKey,
    badge: "ویژه هلدینگ‌ها و صنایع",
    deliverables: [
      "طراحی ساختار حاکمیتی و اساسنامه CVC",
      "فرایند غربالگری و فیلترهای سرمایه‌گذاری",
      "مدیریت سبد سهام و نظارت بر پورتفولیو",
      "ایجاد کانال‌های هم‌افزایی میان مادر و استارتاپ",
    ],
  },
  {
    icon: Users2,
    title: "منتورینگ یک‌به‌یک بنیان‌گذاران و مدیران ارشد (Founder Advisory)",
    desc: "جلسات محرمانه راهبری برای بنیان‌گذاران و اعضای هیئت مدیره؛ حل تعارضات تیمی، مدیریت سهام‌داران، تصمیم‌گیری در شرایط بحرانی بازار و تقویت مهارت‌های رهبری در سطح C-Level.",
    accent: "blue" as AccentKey,
    badge: "همراهی اختصاصی",
    deliverables: [
      "عضویت در هیئت مشاوره (Advisory Board)",
      "حل چالش‌های هم‌بنیان‌گذاران و سهام‌داران",
      "تصمیم‌گیری استراتژیک در شرایط بحران",
      "توسعه مهارت‌های تفکر سیستمی و مدیریت ارشد",
    ],
  },
];

const TALKS_AND_MEDIA = [
  {
    title: "رویداد ملی ECOMP — هوش مصنوعی و سرمایه‌گذاری",
    role: "سخنران و عضو پنل تخصصی",
    highlight: "انتقال ایده، خلاقیت و سرمایه‌گذاری جسورانه در عصر هوش مصنوعی",
    badge: "هوش مصنوعی و سرمایه",
    accent: "emerald" as AccentKey,
    icon: Sparkles,
  },
  {
    title: "رویداد بزرگ توران خلاق — سمنان",
    role: "داور و سخنران کلیدی",
    highlight: "رویداد بزرگ جذب سرمایه در صنایع خلاق و توسعه اکوسیستم استانی",
    badge: "صنایع خلاق",
    accent: "gold" as AccentKey,
    icon: Award,
  },
  {
    title: "پنل‌های انتقال تجربه جهش‌مدیا و الکامپ",
    role: "سخنران پنل",
    highlight: "گفتگوی تخصصی با نخبگان اکوسیستم در خصوص پایداری و بقای استارتاپ‌ها",
    badge: "انتقال تجربه",
    accent: "cyan" as AccentKey,
    icon: Mic2,
  },
  {
    title: "گفتگوهای تخصصی رسانه‌های اکوسیستم (راه پرداخت و پیوست)",
    role: "مصاحبه اختصاصی",
    highlight: "تحلیل آینده فین‌تک، فرصت‌های فضای کار اشتراکی و چالش‌های اینترنت در ایران",
    badge: "تحلیل و گفتگو",
    accent: "blue" as AccentKey,
    icon: Tv,
  },
];

const TIMELINE = [
  {
    year: "اکنون",
    title: "رهبری مرکز نوآوری زی‌تک زرین‌پال",
    desc: "گسترش سرمایه‌گذاری‌های خطرپذیر در زنجیره ارزش فین‌تک، پرداخت و حمایت از استارتاپ‌های پیشرو تکنولوژی‌محور.",
    icon: WalletCards,
  },
  {
    year: "۱۴۰۰ تاکنون",
    title: "عضویت در هیئت اجرایی و سرمایه‌گذاری در کارایا",
    desc: "تزریق سرمایه فرشته، ارزیابی تیم‌های مستعد و هم‌افزایی با کارآفرینان جسور برای عبور از مراحل اولیه رشد.",
    icon: Handshake,
  },
  {
    year: "۱۳۹۸ - ۱۴۰۰",
    title: "توسعه شتاب‌دهنده آنلاین وینوهاب",
    desc: "پیاده‌سازی مدل شتابدهی تمام‌دیجیتال در سراسر کشور و تربیت و فارغ‌التحصیلی تیم‌های متعدد استارتاپی.",
    icon: Globe,
  },
  {
    year: "۱۳۹۵ - ۱۳۹۸",
    title: "مدیریت مرکز کارآفرینی هلدینگ طرفه‌نگار",
    desc: "ایجاد بستر تعامل میان استارتاپ‌های فین‌تک و نرم‌افزار هلو و توسعه فرهنگ نوآوری باز سازمانی.",
    icon: Building2,
  },
];

export default function MortezaDaneshClientPage() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Birthday Surprise Pop-up State (opened on initial load as requested!)
  const [showBirthdayModal, setShowBirthdayModal] = useState(true);

  const [formState, setFormState] = useState({
    name: "",
    contact: "",
    company: "",
    stage: "ایده / MVP",
    subject: "مشاوره استارتاپ و رشد",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const t = isDark ? DARK : LIGHT;

  // Initial gentle confetti on load
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.4 },
        colors: ["#10b981", "#06b6d4", "#f59e0b", "#ffffff"],
        zIndex: 999999,
      });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Scroll listener for floating pill header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body overflow lock when mobile menu or modal is open
  useEffect(() => {
    if (menuOpen || showBirthdayModal || isBookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, showBirthdayModal, isBookingOpen]);

  // Handle dismissal of birthday modal with grand celebration
  const handleAcknowledgeBirthday = () => {
    fireGrandConfetti();
    setShowBirthdayModal(false);
    toast.success("🎂 زادروزتان مبارک جناب دانش عزیز! این صفحه اختصاصی هدیه شماست.");
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Copy link
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      toast.success("لینک صفحه کپی شد!");
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Submit booking form
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.contact.trim()) {
      toast.error("لطفاً نام و اطلاعات تماس را وارد نمایید.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBookingOpen(false);
      toast.success("درخواست جلسه شما با موفقیت ثبت شد. به زودی با شما هماهنگ خواهد شد.");
      setFormState({
        name: "",
        contact: "",
        company: "",
        stage: "ایده / MVP",
        subject: "مشاوره استارتاپ و رشد",
        notes: "",
      });
    }, 1000);
  };

  const navLinks = [
    { href: "#about", label: "درباره من" },
    { href: "#roles", label: "جایگاه‌ها" },
    { href: "#services", label: "خدمات مشاوره" },
    { href: "#timeline", label: "مسیر حرفه‌ای" },
    { href: "#media", label: "رویدادها و دیدگاه‌ها" },
    { href: "#contact", label: "ارتباط مستقیم" },
  ];

  const s = scrolled && !menuOpen;

  return (
    <div
      dir="rtl"
      className="min-h-screen font-sans transition-colors duration-200 relative selection:bg-emerald-500/20 selection:text-emerald-400"
      style={{
        backgroundColor: t.bg,
        color: t.fg,
      }}
    >
      {/* ── High-Performance Hardware-Accelerated Ambient Mesh Background ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: isDark
            ? `radial-gradient(ellipse 65% 45% at 85% 0%, oklch(0.74 0.18 160 / 0.14), transparent 70%),
               radial-gradient(ellipse 55% 40% at 15% 35%, oklch(0.72 0.16 210 / 0.10), transparent 70%),
               radial-gradient(ellipse 60% 45% at 50% 85%, oklch(0.84 0.12 75 / 0.08), transparent 70%)`
            : `radial-gradient(ellipse 65% 45% at 85% 0%, oklch(0.52 0.18 160 / 0.08), transparent 70%),
               radial-gradient(ellipse 55% 40% at 15% 35%, oklch(0.48 0.16 210 / 0.06), transparent 70%),
               radial-gradient(ellipse 60% 45% at 50% 85%, oklch(0.58 0.14 75 / 0.05), transparent 70%)`,
        }}
      />

      {/* ── Floating Pill Header (Exact Architecture from hasanshah.ir) ── */}
      <header
        className="fixed left-1/2 z-50 transition-all duration-300"
        style={{
          top: s ? "16px" : "0px",
          width: s ? "min(96vw, 1120px)" : "100%",
          transform: "translateX(-50%)",
          borderRadius: s ? "9999px" : "0px",
          background: s ? t.pillBg : "transparent",
          backdropFilter: s ? "blur(12px)" : "none",
          WebkitBackdropFilter: s ? "blur(12px)" : "none",
          boxShadow: s
            ? isDark
              ? "0 0 0 1px rgba(255,255,255,0.08), 0 12px 36px rgba(0,0,0,0.50)"
              : "0 0 0 1px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.08)"
            : "none",
          willChange: "transform, width, top, border-radius",
        }}
      >
        <div
          className="flex items-center justify-between transition-all duration-300"
          style={{
            padding: s ? "10px 22px" : "18px 28px",
            background: menuOpen ? (isDark ? "rgba(12, 16, 28, 0.95)" : "rgba(255, 255, 255, 0.98)") : "transparent",
            backdropFilter: menuOpen ? "blur(12px)" : "none",
            WebkitBackdropFilter: menuOpen ? "blur(12px)" : "none",
          }}
        >
          {/* Brand Identity & Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 group">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-black text-xs transition-transform duration-200 group-hover:scale-105 border shadow-sm"
              style={{
                backgroundColor: isDark ? "rgba(16, 185, 129, 0.15)" : "rgba(16, 185, 129, 0.10)",
                borderColor: t.emerald,
                color: t.emerald,
              }}
            >
              MD
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight flex items-center gap-1.5">
                مرتضی دانش
                <span className="w-1.5 h-1.5 rounded-full inline-block bg-emerald-400" />
              </span>
              <span className="text-[11px] opacity-75 hidden sm:inline" style={{ color: t.fgMuted }}>
                مدیرعامل زی‌تک • عضو کارایا
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs xl:text-sm font-medium transition-colors hover:text-emerald-400 whitespace-nowrap"
                style={{ color: t.fgMuted }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle, Share, CTA Button, Mobile Burger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="تغییر حالت شب و روز"
              className="p-2 rounded-full border transition-transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                borderColor: t.cardBorder,
                color: isDark ? t.gold : t.blue,
              }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Share Link */}
            <button
              onClick={handleShare}
              aria-label="اشتراک‌گذاری لینک صفحه"
              className="hidden sm:flex p-2 rounded-full border transition-transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                borderColor: t.cardBorder,
                color: t.fgMuted,
              }}
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Main CTA: Rounded Pill Button matching hasanshah.ir */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap shadow-md"
              style={{
                backgroundColor: t.emerald,
                color: "#ffffff",
                boxShadow: `0 4px 18px ${isDark ? "rgba(16, 185, 129, 0.40)" : "rgba(16, 185, 129, 0.25)"}`,
              }}
            >
              <Calendar className="w-3.5 h-3.5 me-1.5" />
              <span>درخواست مشاوره</span>
            </button>

            {/* Mobile Hamburger Burger Button */}
            <button
              aria-label="منوی صفحه"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg border transition-colors hover:text-emerald-400"
              style={{
                borderColor: t.cardBorder,
                color: t.fg,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu matching hasanshah.ir */}
        {menuOpen && (
          <div
            className="lg:hidden border-t rounded-b-2xl shadow-2xl transition-all"
            style={{
              backgroundColor: isDark ? "rgba(12, 16, 28, 0.98)" : "rgba(255, 255, 255, 0.98)",
              borderColor: t.cardBorder,
            }}
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm font-medium hover:text-emerald-400 transition-colors border-b last:border-b-0"
                  style={{
                    color: t.fg,
                    borderColor: t.divider,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ── Main Content Body ── */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 space-y-24 sm:space-y-32">

        {/* ── Section 1: Hero ── */}
        <section id="hero" className="pt-2 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              {/* Executive Tag with Premium Icon */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-bold shadow-sm"
                style={{
                  backgroundColor: isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.08)",
                  borderColor: t.emerald,
                  color: t.emerald,
                }}
              >
                <Sparkles className="w-4 h-4" />
                <span>مدیرعامل زی‌تک (مرکز نوآوری زرین‌پال) • عضو کارایا</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                هدایت نوآوری،{" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-l"
                  style={{
                    backgroundImage: `linear-gradient(to left, ${t.emerald}, ${t.cyan})`,
                  }}
                >
                  شتاب‌بخشی به استارتاپ‌ها
                </span>{" "}
                و اتصال سرمایه به آینده کسب‌وکارها
              </h1>

              {/* Subtitle / Bio summary */}
              <p
                className="text-base sm:text-lg leading-relaxed font-normal"
                style={{ color: t.fgMuted }}
              >
                با بیش از یک دهه سابقه پیشرو در اکوسیستم نوآوری و سرمایه‌گذاری خطرپذیر شرکتی (CVC) ایران؛
                همراه بنیان‌گذاران در معماری مدل کسب‌وکار، مقیاس‌پذیری پایدار و هدایت راندهای موفق سرمایه‌گذاری فرشته و شرکتی.
              </p>

              {/* Fast Keywords & Focus Areas */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium">
                {["فین‌تک و پرداخت", "سرمایه‌گذاری CVC", "جذب سرمایه", "نوآوری باز", "هوش مصنوعی", "کارایا"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg border text-xs font-semibold"
                    style={{
                      backgroundColor: t.surface,
                      borderColor: t.cardBorder,
                      color: t.fgMuted,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-95 shadow-lg"
                  style={{
                    backgroundColor: t.emerald,
                    color: "#ffffff",
                    boxShadow: `0 8px 28px ${isDark ? "rgba(16, 185, 129, 0.45)" : "rgba(16, 185, 129, 0.25)"}`,
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>درخواست جلسه مشاوره و منتورینگ</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <a
                  href="#roles"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 border transition-all duration-200 hover:bg-white/5 active:scale-95"
                  style={{
                    backgroundColor: t.surface,
                    borderColor: t.cardBorder,
                    color: t.fg,
                  }}
                >
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>مشاهده جایگاه‌ها و نقش‌ها</span>
                </a>
              </div>
            </div>

            {/* Left Column: Ultra-HD Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                {/* Subtle Glow Aura behind image */}
                <div
                  className="absolute -inset-1.5 rounded-[32px] opacity-70 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${t.emerald}, ${t.cyan}, ${t.gold})`,
                    filter: "blur(14px)",
                  }}
                />

                {/* Main Card with High-Res WebP Portrait */}
                <div
                  className="relative rounded-[28px] border overflow-hidden p-2.5 transition-all duration-300"
                  style={{
                    backgroundColor: t.surface,
                    borderColor: t.cardBorder,
                    boxShadow: isDark
                      ? "0 24px 60px -12px rgba(0,0,0,0.7)"
                      : "0 20px 40px -10px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="relative w-full aspect-[3/3.8] rounded-[22px] overflow-hidden bg-slate-900 shadow-inner">
                    <Image
                      src="/images/clients/morteza-danesh/morteza-danesh.webp"
                      alt="مرتضی دانش — مدیرعامل مرکز نوآوری زی‌تک و عضو کارایا"
                      fill
                      priority
                      quality={95}
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    {/* Executive Verified Floating Badge on Image */}
                    <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm tracking-tight flex items-center gap-1.5">
                          مرتضی دانش
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 inline" />
                        </p>
                        <p className="text-[11px] text-emerald-300/90 font-medium">CEO @ ZTech • Karaya Angel Group</p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-500/25 text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold border border-emerald-500/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        <span>پذیرش فعال</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Strip under image */}
                  <div className="pt-3 pb-1 px-2.5 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-medium" style={{ color: t.fgMuted }}>
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      تهران، پارک علم و فناوری تربیت مدرس
                    </span>
                    <a
                      href="https://ztech.ir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold hover:underline"
                      style={{ color: t.cyan }}
                    >
                      <span>ztech.ir</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Impact Stats with Premium Icons ── */}
        <section className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {IMPACT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-3xl border flex flex-col gap-2 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
                  style={{
                    backgroundColor: t.surface,
                    borderColor: t.cardBorder,
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-110"
                      style={{
                        backgroundColor:
                          stat.accent === "emerald"
                            ? "rgba(16, 185, 129, 0.12)"
                            : stat.accent === "cyan"
                            ? "rgba(6, 182, 212, 0.12)"
                            : stat.accent === "gold"
                            ? "rgba(245, 158, 11, 0.12)"
                            : "rgba(59, 130, 246, 0.12)",
                        borderColor:
                          stat.accent === "emerald"
                            ? t.emerald
                            : stat.accent === "cyan"
                            ? t.cyan
                            : stat.accent === "gold"
                            ? t.gold
                            : t.blue,
                        color:
                          stat.accent === "emerald"
                            ? t.emerald
                            : stat.accent === "cyan"
                            ? t.cyan
                            : stat.accent === "gold"
                            ? t.gold
                            : t.blue,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold opacity-60 border" style={{ borderColor: t.cardBorder }}>
                      {stat.sub}
                    </span>
                  </div>

                  <span className="text-2xl sm:text-3xl font-black tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-snug" style={{ color: t.fgMuted }}>
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 3: About Morteza Danesh ── */}
        <section id="about" className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border"
              style={{
                backgroundColor: isDark ? "rgba(6, 182, 212, 0.12)" : "rgba(6, 182, 212, 0.08)",
                borderColor: t.cyan,
                color: t.cyan,
              }}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>درباره و فلسفه رهبری</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              پل ارتباطی میان سرمایه جسورانه و نوآوری استارتاپی
            </h2>
          </div>

          <div
            className="p-6 sm:p-8 rounded-3xl border space-y-5 leading-relaxed text-sm sm:text-base font-normal text-justify shadow-sm"
            style={{
              backgroundColor: t.surface,
              borderColor: t.cardBorder,
            }}
          >
            <p>
              مرتضی دانش از چهره‌های باسابقه و اثرگذار اکوسیستم فناوری و کارآفرینی ایران است که بیش از یک دهه فعالیت راهبردی را
              در تقاطع <strong className="font-bold text-emerald-400">سرمایه‌گذاری خطرپذیر شرکتی (CVC)</strong>،
              شتابدهی تیم‌های مستعد و خلق زنجیره‌های ارزش در بازارهای نوین به ثمر رسانده است.
            </p>
            <p style={{ color: t.fgMuted }}>
              ایشان در جایگاه مدیرعامل مرکز نوآوری زی‌تک (ZTech) — بازوی نوآوری و سرمایه‌گذاری هلدینگ زرین‌پال — هدایت استراتژی‌های پیوند زدن
              صنایع و بازارهای مالی با استارتاپ‌های فین‌تک، نئوبانک، سیستم‌های ابری و بلاک‌چین را به عهده دارد. همچنین به عنوان عضو هیئت اجرایی و سرمایه‌گذار فرشته
              در گروه سرمایه‌گذاران نیک‌اندیش کارایا (Karaya)، به شکلی مستمر در فرآیند ارزیابی، ارزش‌گذاری و همراهی استارتاپ‌ها در مراحل بذری حضور فعال دارد.
            </p>
            <p style={{ color: t.fgMuted }}>
              دیدگاه ایشان در مشاوره و همراهی تیم‌ها مبتنی بر واقع‌گرایی اقتصادی، اثبات بی‌رحمانه Product-Market Fit و ایجاد ساختارهای انضباطی
              برای تبدیل ایده به یک شرکت سودآور و پایدار است.
            </p>

            {/* Famous Quote Highlight Callout */}
            <div
              className="mt-6 p-4 sm:p-5 rounded-2xl border flex items-start gap-4"
              style={{
                backgroundColor: isDark ? "rgba(16, 185, 129, 0.10)" : "rgba(16, 185, 129, 0.06)",
                borderColor: t.emerald,
              }}
            >
              <Quote className="w-7 h-7 flex-shrink-0 text-emerald-400 rotate-180" />
              <div className="space-y-1">
                <p className="font-bold text-sm sm:text-base text-emerald-400">
                  «اینترنت آزاد حق همه است؛ اینترنت پرسرعت مسکن موقت و گران است.»
                </p>
                <p className="text-xs opacity-80" style={{ color: t.fgMuted }}>
                  مرتضی دانش — در پنل بررسی شرایط بحران و فضاهای کار اشتراکی ایران
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 4: Key Roles & Leadership with Premium Badges ── */}
        <section id="roles" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border mb-2"
                style={{
                  backgroundColor: isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.08)",
                  borderColor: t.emerald,
                  color: t.emerald,
                }}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>مسئولیت‌ها و سوابق</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                جایگاه‌های کلیدی و سوابق رهبری اکوسیستمی
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ROLES.map((role, i) => {
              const RoleIcon = role.icon;
              return (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-3xl border flex flex-col justify-between gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
                  style={{
                    backgroundColor: t.surface,
                    borderColor: t.cardBorder,
                  }}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border"
                          style={{
                            backgroundColor:
                              role.accent === "emerald"
                                ? "rgba(16, 185, 129, 0.15)"
                                : role.accent === "gold"
                                ? "rgba(245, 158, 11, 0.15)"
                                : "rgba(6, 182, 212, 0.15)",
                            borderColor:
                              role.accent === "emerald"
                                ? t.emerald
                                : role.accent === "gold"
                                ? t.gold
                                : t.cyan,
                            color:
                              role.accent === "emerald"
                                ? t.emerald
                                : role.accent === "gold"
                                ? t.gold
                                : t.cyan,
                          }}
                        >
                          <RoleIcon className="w-5 h-5" />
                        </div>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-bold border"
                          style={{
                            backgroundColor:
                              role.accent === "emerald"
                                ? "rgba(16, 185, 129, 0.12)"
                                : role.accent === "gold"
                                ? "rgba(245, 158, 11, 0.12)"
                                : "rgba(6, 182, 212, 0.12)",
                            borderColor:
                              role.accent === "emerald"
                                ? t.emerald
                                : role.accent === "gold"
                                ? t.gold
                                : t.cyan,
                            color:
                              role.accent === "emerald"
                                ? t.emerald
                                : role.accent === "gold"
                                ? t.gold
                                : t.cyan,
                          }}
                        >
                          {role.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors">
                      {role.title}
                    </h3>

                    <p className="text-xs font-semibold" style={{ color: t.fgMuted }}>
                      {role.org}
                    </p>

                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: t.fgMuted }}>
                      {role.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t" style={{ borderColor: t.divider }}>
                    {role.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                        style={{
                          backgroundColor: t.surfaceHigh,
                          color: t.fgMuted,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 5: Advisory & Mentorship Services ── */}
        <section id="services" className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border"
              style={{
                backgroundColor: isDark ? "rgba(245, 158, 11, 0.12)" : "rgba(245, 158, 11, 0.08)",
                borderColor: t.gold,
                color: t.gold,
              }}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>خدمات تخصصی مشاوره</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              حوزه‌های مشاوره، منتورینگ و همراهی استارتاپ‌ها
            </h2>
            <p className="text-sm sm:text-base font-normal" style={{ color: t.fgMuted }}>
              ارائه مشاوره‌های عملیاتی و استراتژیک در تمام چرخه‌های حیات کسب‌وکار؛ از پروتوتایپ و راندهای Seed تا اسکیل سازمانی.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADVISORY_SERVICES.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-3xl border flex flex-col justify-between gap-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl group"
                  style={{
                    backgroundColor: t.surface,
                    borderColor: t.cardBorder,
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-110 shadow-sm"
                        style={{
                          backgroundColor:
                            srv.accent === "emerald"
                              ? "rgba(16, 185, 129, 0.14)"
                              : srv.accent === "cyan"
                              ? "rgba(6, 182, 212, 0.14)"
                              : srv.accent === "gold"
                              ? "rgba(245, 158, 11, 0.14)"
                              : "rgba(59, 130, 246, 0.14)",
                          borderColor:
                            srv.accent === "emerald"
                              ? t.emerald
                              : srv.accent === "cyan"
                              ? t.cyan
                              : srv.accent === "gold"
                              ? t.gold
                              : t.blue,
                          color:
                            srv.accent === "emerald"
                              ? t.emerald
                              : srv.accent === "cyan"
                              ? t.cyan
                              : srv.accent === "gold"
                              ? t.gold
                              : t.blue,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-xs px-2.5 py-1 rounded-full font-bold border" style={{ borderColor: t.cardBorder, color: t.fgMuted }}>
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-emerald-400 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: t.fgMuted }}>
                      {srv.desc}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div
                    className="p-4 rounded-2xl border space-y-2 text-xs"
                    style={{
                      backgroundColor: t.surfaceHigh,
                      borderColor: t.cardBorder,
                    }}
                  >
                    <span className="font-bold block text-xs" style={{ color: t.fg }}>
                      دستاوردهای عملیاتی این مشاوره:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.deliverables.map((item, j) => (
                        <li key={j} className="flex items-center gap-1.5" style={{ color: t.fgMuted }}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => {
                      setFormState((prev) => ({ ...prev, subject: srv.title }));
                      setIsBookingOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
                    style={{
                      borderColor: t.cardBorder,
                      color: t.fg,
                    }}
                  >
                    <span>ثبت درخواست این مشاوره</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 6: Career Journey Timeline ── */}
        <section id="timeline" className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border"
              style={{
                backgroundColor: isDark ? "rgba(6, 182, 212, 0.12)" : "rgba(6, 182, 212, 0.08)",
                borderColor: t.cyan,
                color: t.cyan,
              }}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>مسیر رشد و تجربه</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              نقاط عطف حرفه‌ای در اکوسیستم کارآفرینی
            </h2>
          </div>

          <div
            className="p-6 sm:p-8 rounded-3xl border relative overflow-hidden"
            style={{
              backgroundColor: t.surface,
              borderColor: t.cardBorder,
            }}
          >
            <div className="relative border-r-2 pr-6 sm:pr-8 space-y-8" style={{ borderColor: t.divider }}>
              {TIMELINE.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="relative group">
                    {/* Glowing Bullet Dot */}
                    <div
                      className="absolute -right-[31px] sm:-right-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 shadow-sm"
                      style={{
                        backgroundColor: t.bg,
                        borderColor: i === 0 ? t.emerald : t.cyan,
                      }}
                    />
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold"
                        style={{
                          backgroundColor: i === 0 ? "rgba(16, 185, 129, 0.15)" : t.surfaceHigh,
                          color: i === 0 ? t.emerald : t.fgMuted,
                        }}
                      >
                        {item.year}
                      </span>
                      <ItemIcon className="w-3.5 h-3.5 opacity-60" />
                    </div>

                    <h4 className="text-base font-bold group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: t.fgMuted }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 7: Media, Talks & Events ── */}
        <section id="media" className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border"
              style={{
                backgroundColor: isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.08)",
                borderColor: t.emerald,
                color: t.emerald,
              }}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>رویدادها و رسانه‌ها</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              حضور در رسانه‌ها، داوری رویدادها و پنل‌های تخصصی
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {TALKS_AND_MEDIA.map((item, i) => {
              const EventIcon = item.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-3xl border flex flex-col justify-between gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
                  style={{
                    backgroundColor: t.surface,
                    borderColor: t.cardBorder,
                  }}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border"
                        style={{
                          backgroundColor:
                            item.accent === "emerald"
                              ? "rgba(16, 185, 129, 0.15)"
                              : item.accent === "gold"
                              ? "rgba(245, 158, 11, 0.15)"
                              : "rgba(6, 182, 212, 0.15)",
                          borderColor:
                            item.accent === "emerald"
                              ? t.emerald
                              : item.accent === "gold"
                              ? t.gold
                              : t.cyan,
                          color:
                            item.accent === "emerald"
                              ? t.emerald
                              : item.accent === "gold"
                              ? t.gold
                              : t.cyan,
                        }}
                      >
                        <EventIcon className="w-4 h-4" />
                      </div>
                      <span
                        className="inline-block px-2 py-0.5 rounded text-[10px] font-bold"
                        style={{
                          backgroundColor: t.surfaceHigh,
                          color: item.accent === "emerald" ? t.emerald : item.accent === "gold" ? t.gold : t.cyan,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm leading-snug group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs font-medium leading-relaxed" style={{ color: t.fgMuted }}>
                      {item.highlight}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t text-[11px] font-semibold opacity-80" style={{ borderColor: t.divider }}>
                    {item.role}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 8: Direct Contact & Location ── */}
        <section id="contact" className="space-y-6">
          <div
            className="p-8 sm:p-12 rounded-3xl border relative overflow-hidden"
            style={{
              backgroundColor: t.surface,
              borderColor: t.cardBorder,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border"
                  style={{
                    backgroundColor: isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.08)",
                    borderColor: t.emerald,
                    color: t.emerald,
                  }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>پل‌های ارتباطی مستقیم</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black">
                  آماده گفتگو درباره استارتاپ‌ها، فرصت‌های سرمایه‌گذاری و همکاری‌های راهبردی
                </h2>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: t.fgMuted }}>
                  اگر بنیان‌گذار استارتاپی در حوزه‌های فین‌تک، بلاک‌چین یا فناوری‌های نوآورانه هستید و به دنبال سرمایه‌گذاری
                  یا راهبری تخصصی می‌گردید، می‌توانید مستقیماً در ارتباط باشید.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
                  <a
                    href="https://www.linkedin.com/in/morteza-danesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl border flex items-center gap-3 hover:bg-emerald-500/10 transition-colors"
                    style={{ backgroundColor: t.surfaceHigh, borderColor: t.cardBorder }}
                  >
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">پروفایل لینکدین</div>
                      <div className="text-xs opacity-75">linkedin.com/in/morteza-danesh</div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/morteza_danesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl border flex items-center gap-3 hover:bg-emerald-500/10 transition-colors"
                    style={{ backgroundColor: t.surfaceHigh, borderColor: t.cardBorder }}
                  >
                    <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">اینستاگرام شخصی</div>
                      <div className="text-xs opacity-75">@morteza_danesh</div>
                    </div>
                  </a>

                  <a
                    href="https://ztech.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl border flex items-center gap-3 hover:bg-emerald-500/10 transition-colors"
                    style={{ backgroundColor: t.surfaceHigh, borderColor: t.cardBorder }}
                  >
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">سایت زی‌تک (زرین‌پال)</div>
                      <div className="text-xs opacity-75">ztech.ir</div>
                    </div>
                  </a>

                  <div
                    className="p-3.5 rounded-2xl border flex items-center gap-3"
                    style={{ backgroundColor: t.surfaceHigh, borderColor: t.cardBorder }}
                  >
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">دفتر و مرکز نوآوری</div>
                      <div className="text-xs opacity-75">پارک علم و فناوری تربیت مدرس</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-7 rounded-3xl border text-center gap-4 shadow-xl"
                style={{ backgroundColor: t.surfaceHigh, borderColor: t.cardBorder }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-400 border shadow-md"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    borderColor: t.emerald,
                  }}
                >
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-base">درخواست وقت مشاوره</h4>
                  <p className="text-xs mt-1" style={{ color: t.fgMuted }}>
                    بررسی طرح کسب‌وکار، جلسه حضوری یا آنلاین
                  </p>
                </div>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-3 rounded-full font-bold text-sm text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: t.emerald,
                    boxShadow: `0 6px 20px ${isDark ? "rgba(16, 185, 129, 0.40)" : "rgba(16, 185, 129, 0.25)"}`,
                  }}
                >
                  ثبت فرم درخواست جلسه
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer with Gift Attribution ── */}
      <footer
        className="relative z-10 border-t mt-20 py-10 px-4 sm:px-8 text-center text-xs"
        style={{
          backgroundColor: t.bgDeep,
          borderColor: t.divider,
          color: t.fgMuted,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold" style={{ color: t.fg }}>
            <span>مرتضی دانش | Morteza Danesh</span>
            <span className="opacity-40">•</span>
            <span className="text-xs font-normal" style={{ color: t.fgMuted }}>
              مدیرعامل مرکز نوآوری زی‌تک زرین‌پال
            </span>
          </div>

          <div className="text-[11px] leading-relaxed">
            این وب‌سایت به عنوان هدیه‌ای ویژه به پاس زحمات آقای مرتضی دانش در اکوسیستم نوآوری،
            توسط{" "}
            <a
              href="https://hasanshah.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-emerald-400 transition-colors"
              style={{ color: t.fg }}
            >
              استودیو حسن شاهمرادی (Hasan Shah)
            </a>{" "}
            طراحی و پیاده‌سازی شده است.
          </div>
        </div>
      </footer>

      {/* ── Floating Birthday Gift Button (To replay the surprise anytime!) ── */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => {
            setShowBirthdayModal(true);
            confetti({
              particleCount: 40,
              spread: 60,
              origin: { x: 0.1, y: 0.9 },
              colors: ["#f59e0b", "#10b981", "#06b6d4"],
              zIndex: 999999,
            });
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full border shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 group text-xs font-bold"
          style={{
            backgroundColor: isDark ? "rgba(18, 24, 40, 0.85)" : "rgba(255, 255, 255, 0.90)",
            borderColor: t.gold,
            color: t.gold,
            boxShadow: "0 8px 30px rgba(245, 158, 11, 0.25)",
          }}
        >
          <Gift className="w-4 h-4 group-hover:rotate-12 transition-transform text-amber-400" />
          <span>هدیه و تبریک زادروز</span>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        </button>
      </div>

      {/* ── 🎂 SURPRISE BIRTHDAY POPUP MODAL (Opens on initial load & QR scan!) 🎂 ── */}
      <AnimatePresence>
        {showBirthdayModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Birthday Gift Card Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg rounded-[32px] border p-6 sm:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden z-10 text-center"
              style={{
                backgroundColor: isDark ? "rgba(16, 22, 38, 0.96)" : "rgba(255, 255, 255, 0.98)",
                borderColor: "rgba(245, 158, 11, 0.35)",
                color: t.fg,
              }}
            >
              {/* Top ambient radial glow inside card */}
              <div
                className="absolute -top-24 inset-x-0 h-48 rounded-full pointer-events-none opacity-40"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.8), rgba(16, 185, 129, 0.4), transparent 70%)",
                }}
              />

              {/* Header Badge */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold shadow-sm bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-cyan-500/20 border-amber-400/40 text-amber-400">
                  <PartyPopper className="w-4 h-4 text-amber-400" />
                  <span>یک سورپرایز و هدیه ویژه • زادروز</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>

                {/* Portrait with Golden Festive Ring */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.35)]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/clients/morteza-danesh/morteza-danesh.webp"
                      alt="مرتضی دانش"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-2 rounded-full bg-amber-500 text-slate-950 font-bold shadow-lg">
                    🎂
                  </div>
                </div>

                {/* Congratulatory Title */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                    زادروزتان فرخنده باد! 🎉
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-amber-400">
                    جناب آقای مرتضی دانش عزیز
                  </p>
                </div>

                {/* Heartfelt Birthday Message */}
                <div
                  className="p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed text-justify space-y-2.5"
                  style={{
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
                    borderColor: t.divider,
                    color: t.fgMuted,
                  }}
                >
                  <p>
                    به پاس بیش از یک دهه نوآوری و ارزش‌آفرینی، هدایت هوشمندانه مرکز نوآوری <strong className="text-emerald-400">زی‌تک زرین‌پال</strong>،
                    سرمایه‌گذاری در <strong className="text-cyan-400">کارایا</strong> و همراهی خستگی‌ناپذیر با استارتاپ‌های کشور؛
                  </p>
                  <p>
                    این وب‌سایت شخصی و اختصاصی به عنوان یک هدیه ماندگار به مناسبت سالروز تولد شما، با کمال افتخار توسط{" "}
                    <strong className="text-amber-400">حسن شاهمرادی</strong> طراحی و تقدیم حضورتان می‌گردد.
                  </p>
                </div>

                {/* Primary Action: Celebrate & Enter */}
                <div className="w-full pt-2 flex flex-col gap-2.5">
                  <button
                    onClick={handleAcknowledgeBirthday}
                    className="w-full py-3.5 px-6 rounded-full font-black text-sm text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-95 active:scale-95 shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
                      boxShadow: "0 8px 30px rgba(16, 185, 129, 0.50)",
                    }}
                  >
                    <span>ممنونم، مشاهده هدیه و ورود به صفحه</span>
                    <PartyPopper className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setShowBirthdayModal(false)}
                    className="text-xs font-semibold opacity-60 hover:opacity-100 transition-opacity"
                    style={{ color: t.fgMuted }}
                  >
                    بستن پنجره و مشاهده مستقیم
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Interactive Modal: Consultation & Pitch Form ── */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
              style={{
                backgroundColor: t.surface,
                borderColor: t.cardBorder,
                color: t.fg,
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: t.divider }}>
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      borderColor: t.emerald,
                      color: t.emerald,
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">درخواست جلسه و مشاوره اختصاصی</h3>
                    <p className="text-xs" style={{ color: t.fgMuted }}>مرتضی دانش | زی‌تک و کارایا</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold opacity-60 hover:opacity-100 transition-opacity"
                  style={{ borderColor: t.cardBorder }}
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmitBooking} className="space-y-4 pt-4 text-xs sm:text-sm">
                {/* Field 1: Name */}
                <div className="space-y-1.5">
                  <label className="font-semibold block">نام و نام خانوادگی *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: علی رضایی"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    style={{
                      backgroundColor: t.surfaceHigh,
                      borderColor: t.cardBorder,
                      color: t.fg,
                    }}
                  />
                </div>

                {/* Field 2: Contact */}
                <div className="space-y-1.5">
                  <label className="font-semibold block">شماره تماس یا ایمیل *</label>
                  <input
                    type="text"
                    required
                    placeholder="۰۹۱۲۰۰۰۰۰۰۰ یا info@startup.ir"
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    style={{
                      backgroundColor: t.surfaceHigh,
                      borderColor: t.cardBorder,
                      color: t.fg,
                    }}
                  />
                </div>

                {/* Field 3: Company / Startup */}
                <div className="space-y-1.5">
                  <label className="font-semibold block">نام کسب‌وکار یا استارتاپ</label>
                  <input
                    type="text"
                    placeholder="مثال: استارتاپ فین‌تک فلان"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    style={{
                      backgroundColor: t.surfaceHigh,
                      borderColor: t.cardBorder,
                      color: t.fg,
                    }}
                  />
                </div>

                {/* Field 4: Stage */}
                <div className="space-y-1.5">
                  <label className="font-semibold block">مرحله کسب‌وکار (Stage)</label>
                  <select
                    value={formState.stage}
                    onChange={(e) => setFormState({ ...formState, stage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    style={{
                      backgroundColor: t.surfaceHigh,
                      borderColor: t.cardBorder,
                      color: t.fg,
                    }}
                  >
                    <option value="ایده / MVP">ایده اولیه / در حال ساخت MVP</option>
                    <option value="بذری (Seed)">بذری (Seed) — ورود به بازار</option>
                    <option value="رشد و کشش اولیه (Early Traction)">رشد و کشش اولیه (Early Traction)</option>
                    <option value="اسکیل و توسعه بازار (Scale-up)">اسکیل و توسعه بازار (Scale-up)</option>
                    <option value="شرکت بزرگ / سازمان سنتی">شرکت بزرگ / متقاضی نوآوری باز و CVC</option>
                  </select>
                </div>

                {/* Field 5: Subject */}
                <div className="space-y-1.5">
                  <label className="font-semibold block">موضوع اصلی جلسه</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    style={{
                      backgroundColor: t.surfaceHigh,
                      borderColor: t.cardBorder,
                      color: t.fg,
                    }}
                  >
                    <option value="بررسی سرمایه‌گذاری در زی‌تک یا کارایا">بررسی سرمایه‌گذاری در زی‌تک یا کارایا</option>
                    <option value="استراتژی جذب سرمایه و اصلاح پیچ‌دک">استراتژی جذب سرمایه و اصلاح پیچ‌دک</option>
                    <option value="معماری مدل کسب‌وکار و تناسب بازار (PMF)">معماری مدل کسب‌وکار و تناسب بازار (PMF)</option>
                    <option value="مشاوره نوآوری سازمانی و CVC">مشاوره نوآوری سازمانی و CVC</option>
                    <option value="دعوت به عنوان سخنران / داور رویداد">دعوت به عنوان سخنران / داور رویداد</option>
                  </select>
                </div>

                {/* Field 6: Notes */}
                <div className="space-y-1.5">
                  <label className="font-semibold block">توضیح کوتاه درباره موضوع جلسه</label>
                  <textarea
                    rows={3}
                    placeholder="خلاصه‌ای از چالش یا موضوعی که تمایل دارید در جلسه مطرح نمایید..."
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                    style={{
                      backgroundColor: t.surfaceHigh,
                      borderColor: t.cardBorder,
                      color: t.fg,
                    }}
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(false)}
                    className="px-4 py-2.5 rounded-full border font-semibold text-xs"
                    style={{ borderColor: t.cardBorder, color: t.fgMuted }}
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-full font-bold text-xs text-white flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
                    style={{
                      backgroundColor: t.emerald,
                      boxShadow: `0 4px 16px ${isDark ? "rgba(16, 185, 129, 0.40)" : "rgba(16, 185, 129, 0.25)"}`,
                    }}
                  >
                    {isSubmitting ? (
                      <span>در حال ارسال...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>ارسال درخواست</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
