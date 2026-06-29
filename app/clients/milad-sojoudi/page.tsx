"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  TrendingUp,
  Layers,
  Shield,
  Zap,
  MessageCircle,
  Activity,
  Brain,
  Users,
  Calendar,
  Star,
  BarChart2,
  Send,
  ChevronLeft,
  Sun,
  Moon,
} from "lucide-react";
import { useRef, useState, useEffect, type CSSProperties } from "react";

// ─── Theme tokens ───────────────────────────────────────────────────────────
const DARK = {
  bg:          "oklch(0.10 0.020 272)",
  bgDeep:      "oklch(0.07 0.014 272)",
  surface:     "oklch(0.15 0.032 276)",
  surfaceHigh: "oklch(0.21 0.046 280)",
  blue:        "oklch(0.65 0.22 258)",
  purple:      "oklch(0.62 0.24 293)",
  fg:          "oklch(0.96 0.004 272)",
  fgMuted:     "oklch(0.68 0.012 272)",
  divider:     "oklch(0.64 0.20 275 / 0.15)",
  blueGlow:    "oklch(0.65 0.22 258 / 0.40)",
  purpleGlow:  "oklch(0.62 0.24 293 / 0.38)",
  blueShadow:  "oklch(0.65 0.22 258 / 0.32)",
  blueSoft:    "oklch(0.65 0.22 258 / 0.14)",
  purpleSoft:  "oklch(0.62 0.24 293 / 0.14)",
  midSoft:     "oklch(0.64 0.23 275 / 0.09)",
  navBg0:      "oklch(0.10 0.020 272 / 0)",
  navBg1:      "oklch(0.10 0.020 272 / 0.92)",
  navShadow:   "0 0 0 1px oklch(0.64 0.20 275 / 0.15), 0 8px 32px oklch(0 0 0 / 0.45)",
  navShadow0:  "0 0 0 1px oklch(0 0 0 / 0)",
} as const;

const LIGHT = {
  bg:          "oklch(0.97 0.008 262)",
  bgDeep:      "oklch(1.00 0.002 260)",
  surface:     "oklch(0.92 0.014 263)",
  surfaceHigh: "oklch(0.86 0.022 263)",
  blue:        "oklch(0.46 0.22 258)",
  purple:      "oklch(0.44 0.24 293)",
  fg:          "oklch(0.14 0.022 272)",
  fgMuted:     "oklch(0.42 0.015 272)",
  divider:     "oklch(0.70 0.18 275 / 0.22)",
  blueGlow:    "oklch(0.65 0.22 258 / 0.18)",
  purpleGlow:  "oklch(0.62 0.24 293 / 0.14)",
  blueShadow:  "oklch(0.46 0.22 258 / 0.20)",
  blueSoft:    "oklch(0.46 0.22 258 / 0.10)",
  purpleSoft:  "oklch(0.44 0.24 293 / 0.10)",
  midSoft:     "oklch(0.55 0.18 275 / 0.07)",
  navBg0:      "oklch(0.97 0.008 262 / 0)",
  navBg1:      "oklch(0.97 0.008 262 / 0.95)",
  navShadow:   "0 0 0 1px oklch(0.70 0.18 275 / 0.22), 0 8px 24px oklch(0 0 0 / 0.08)",
  navShadow0:  "0 0 0 1px oklch(0 0 0 / 0)",
} as const;

type Theme = typeof DARK;
type AccentKey = "blue" | "purple";

function ac(t: Theme, k: AccentKey)   { return t[k]; }
function sf(t: Theme, k: AccentKey)   { return k === "blue" ? t.blueSoft : t.purpleSoft; }

// ─── Static content ─────────────────────────────────────────────────────────
const FEATURES = [
  { icon: TrendingUp, badge: "فارکس و کریپتو",   title: "آموزش جامع بازارهای مالی",  desc: "فارکس و ارزدیجیتال رو در یک مسیر یاد می‌گیری — از مفاهیم پایه تا معاملات واقعی", accent: "blue"   as AccentKey },
  { icon: Layers,     badge: "مبتدی تا حرفه‌ای", title: "آموزش گام‌به‌گام",          desc: "از اولین کندل تا استراتژی‌های پیشرفته با ساده‌ترین روش — بدون هیچ پیش‌نیازی",    accent: "purple" as AccentKey },
  { icon: Shield,     badge: "پشتیبانی مداوم",    title: "همراهیت تا سود",            desc: "بعد از دوره هم پشتیبانی داری و تنها نمی‌مونی — جامعه فعال دانشجویان",              accent: "blue"   as AccentKey },
];

const PAIN_STATS = [
  { value: "۹۰٪",   label: "از تریدرهای تازه‌کار در سال اول ضرر می‌کنند",         accent: "blue"   as AccentKey },
  { value: "۷۸٪",   label: "از علاقه‌مندان بدون آموزش درست بازار رو ترک می‌کنند", accent: "purple" as AccentKey },
  { value: "+۳M",   label: "نفر در ایران دنبال درآمد ارزی هستند",                  accent: "blue"   as AccentKey },
  { value: "۵ سال", label: "زمان متوسط یادگیری ترید بدون راهنمای درست",             accent: "purple" as AccentKey },
];

const SERVICES = [
  { icon: TrendingUp,    title: "دوره جامع فارکس",       desc: "یادگیری کامل بازار فارکس از صفر تا استراتژی‌های حرفه‌ای با مثال‌های واقعی", accent: "blue"   as AccentKey },
  { icon: Zap,           title: "دوره ارزدیجیتال",        desc: "آموزش ترید در بازار کریپتو با تحلیل تکنیکال و فاندامنتال",                  accent: "purple" as AccentKey },
  { icon: MessageCircle, title: "مشاوره خصوصی",           desc: "جلسات اختصاصی برای بررسی استراتژی و پورتفولیوی شخصی",                       accent: "blue"   as AccentKey },
  { icon: Activity,      title: "سیگنال و تحلیل روزانه",  desc: "دریافت تحلیل بازار و سیگنال‌های معاملاتی در کانال اختصاصی",                  accent: "purple" as AccentKey },
  { icon: Brain,         title: "روانشناسی ترید",          desc: "کنترل احساسات و تصمیم‌گیری درست در شرایط بحرانی بازار",                     accent: "blue"   as AccentKey },
];

const ABOUT_STATS = [
  { icon: Calendar,  value: "۵+",    label: "سال تجربه",        accent: "blue"   as AccentKey },
  { icon: Users,     value: "+۱۰۰۰", label: "دانشجوی موفق",     accent: "purple" as AccentKey },
  { icon: BarChart2, value: "۳",     label: "بازار مالی تخصصی", accent: "blue"   as AccentKey },
  { icon: Star,      value: "۹۵٪",   label: "رضایت دانشجویان",  accent: "purple" as AccentKey },
];

const GRAD     = "linear-gradient(135deg, oklch(0.60 0.22 258), oklch(0.56 0.24 293))";
const TELEGRAM = "https://t.me/MiladSojoudi";

// ─── Reveal ────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, from = "bottom" }: {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right" | "scale";
}) {
  const noMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  if (!ready || noMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: from === "bottom" ? 26 : 0, x: from === "left" ? -22 : from === "right" ? 22 : 0, scale: from === "scale" ? 0.91 : 1, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.70, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Ambient orb ─────────────────────────────────────────────────────────
function Orb({ color, size, style }: { color: string; size: number; style: CSSProperties }) {
  const noMotion = useReducedMotion();
  return (
    <motion.div
      animate={noMotion ? {} : { scale: [1, 1.16, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", borderRadius: "50%", width: size, height: size, background: color, filter: "blur(90px)", pointerEvents: "none", ...style }}
    />
  );
}

// ─── Theme toggle button ──────────────────────────────────────────────────
function ThemeToggle({ isDark, onToggle, t }: { isDark: boolean; onToggle: () => void; t: Theme }) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.15 }}
      aria-label={isDark ? "تم روشن" : "تم تیره"}
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        justifyContent: "center",
        width:          "36px",
        height:         "36px",
        borderRadius:   "10px",
        background:     t.midSoft,
        border:         `1px solid ${t.divider}`,
        color:          isDark ? t.blue : t.purple,
        cursor:         "pointer",
        flexShrink:     0,
      }}
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
      </motion.span>
    </motion.button>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function MiladSojoudiPage() {
  const [isDark, setIsDark]   = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const noMotion = useReducedMotion();
  const t = isDark ? DARK : LIGHT;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroRef     = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const glowY  = useTransform(scrollY, [0, 700], [0, -70]);
  const heroY  = useTransform(scrollY, [0, 600], [0, -32]);

  const font: CSSProperties = {
    fontFamily: "'Peyda', Tahoma, ui-sans-serif, system-ui, sans-serif",
  };

  return (
    <motion.div
      dir="rtl"
      lang="fa"
      animate={{ backgroundColor: t.bg, color: t.fg }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ ...font, minHeight: "100vh", overflowX: "hidden" }}
    >
      <style>{`
        #services, #about, #form { scroll-margin-top: 72px; }
        @media (max-width: 640px) { .ms-nav-links { display: none !important; } }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <motion.nav
        animate={{
          background:   scrolled ? t.navBg1 : t.navBg0,
          boxShadow:    scrolled ? t.navShadow : t.navShadow0,
          borderRadius: scrolled ? "9999px" : "0px",
          top:          scrolled ? 16 : 0,
          width:        scrolled ? "min(96vw, 1080px)" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position:             "fixed",
          left:                 "50%",
          transform:            "translateX(-50%)",
          zIndex:               100,
          display:              "flex",
          alignItems:           "center",
          justifyContent:       "space-between",
          padding:              "12px 24px",
          backdropFilter:       "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          gap:                  "12px",
        }}
      >
        <span style={{ fontWeight: 800, fontSize: "0.9375rem", color: t.fg, flexShrink: 0 }}>
          میلاد سجودی
        </span>

        <div className="ms-nav-links" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {[["#services", "خدمات"], ["#about", "درباره من"], ["#form", "تماس"]].map(([href, label]) => (
            <a key={href} href={href} style={{ ...font, padding: "6px 14px", borderRadius: "8px", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", color: t.fgMuted }}>
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} t={t} />
          <motion.a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: `0 6px 24px ${t.blueShadow}` }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{ ...font, display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 18px", borderRadius: "100px", background: GRAD, color: "oklch(0.97 0.004 272)", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}
          >
            ثبت‌نام
          </motion.a>
        </div>
      </motion.nav>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{ minHeight: "100svh", position: "relative", display: "flex", alignItems: "center", paddingTop: "80px", overflow: "hidden" }}
      >
        <motion.div
          animate={{ backgroundColor: t.bg }}
          transition={{ duration: 0.35 }}
          style={{ position: "absolute", inset: 0 }}
        />
        <motion.div style={{ position: "absolute", inset: 0, pointerEvents: "none", y: glowY }}>
          <Orb color={t.blueGlow}   size={640} style={{ top: "-140px", right: "-80px"  }} />
          <Orb color={t.purpleGlow} size={520} style={{ bottom: "0",   left:  "-60px" }} />
        </motion.div>

        <motion.div
          style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1180px", margin: "0 auto", padding: "clamp(80px, 14vw, 140px) clamp(20px, 5vw, 60px) clamp(120px, 16vw, 170px)", y: heroY }}
        >
          <motion.p
            initial={noMotion ? {} : { opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", color: t.blue }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontWeight: 600, fontSize: "clamp(0.875rem, 1.4vw, 1rem)", letterSpacing: "0.03em", marginBottom: "clamp(14px, 2.5vw, 22px)" }}
          >
            مرجع آموزش ترید حرفه‌ای در ایران
          </motion.p>

          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={noMotion ? {} : { opacity: 0, y: 64, filter: "blur(22px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", color: t.fg }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontWeight: 900, fontSize: "clamp(2.8rem, 8.5vw, 7rem)", lineHeight: 1.1, letterSpacing: "-0.02em", textWrap: "balance" as CSSProperties["textWrap"], marginBottom: "clamp(20px, 3.5vw, 32px)" }}
            >
              ترید حرفه‌ای،{" "}
              <motion.span animate={{ color: t.blue }} transition={{ duration: 0.35 }}>
                استقلال مالی
              </motion.span>{" "}
              تو
            </motion.h1>
          </div>

          <motion.p
            initial={noMotion ? {} : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0, color: t.fgMuted }}
            transition={{ duration: 0.75, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", maxWidth: "520px", lineHeight: 1.85, marginBottom: "clamp(36px, 6vw, 52px)" }}
          >
            با دوره‌های آموزشی میلاد سجودی، از پایه تا پیشرفته ترید یاد می‌گیری. هزاران نفر تا الان مسیر مالی‌شون رو تغییر دادن.
          </motion.p>

          <motion.div
            initial={noMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
          >
            <motion.a
              href={TELEGRAM} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: `0 14px 52px ${t.blueShadow}` }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              style={{ ...font, display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 40px", background: GRAD, color: "oklch(0.97 0.004 272)", borderRadius: "14px", fontWeight: 800, fontSize: "1.0625rem", textDecoration: "none", boxShadow: `0 4px 30px ${t.blueShadow}` }}
            >
              <Send size={18} strokeWidth={2.5} />
              ثبت‌نام در دوره
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{ ...font, display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 40px", background: t.midSoft, color: t.fg, borderRadius: "14px", fontWeight: 600, fontSize: "1.0625rem", textDecoration: "none", border: `1px solid ${t.divider}` }}
            >
              درباره من
              <ChevronLeft size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────── */}
      <motion.section
        animate={{ backgroundColor: t.surface }}
        transition={{ duration: 0.35 }}
        style={{ padding: "clamp(72px, 11vw, 120px) clamp(20px, 5vw, 60px)" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(20px, 3vw, 28px)" }}>
          {FEATURES.map((f, i) => {
            const Icon   = f.icon;
            const accent = ac(t, f.accent);
            const soft   = sf(t, f.accent);
            return (
              <Reveal key={f.title} delay={i * 0.12} from="scale">
                <motion.div
                  whileHover={{ y: -8, boxShadow: `0 28px 60px ${soft}` }}
                  animate={{ backgroundColor: t.surfaceHigh, borderColor: t.divider }}
                  transition={{ duration: 0.3 }}
                  style={{ padding: "clamp(24px, 3.5vw, 36px)", borderRadius: "20px", border: `1px solid ${t.divider}`, height: "100%" }}
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.12 }}
                    transition={{ duration: 0.28 }}
                    style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "14px", background: soft, marginBottom: "18px", color: accent }}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </motion.div>
                  <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: "100px", background: soft, color: accent, fontSize: "0.8rem", fontWeight: 600, marginBottom: "12px" }}>
                    {f.badge}
                  </span>
                  <h3 style={{ fontWeight: 700, fontSize: "clamp(1.0625rem, 1.8vw, 1.25rem)", color: t.fg, marginBottom: "10px", letterSpacing: "-0.01em" }}>
                    {f.title}
                  </h3>
                  <p style={{ color: t.fgMuted, fontSize: "clamp(0.9rem, 1.4vw, 1rem)", lineHeight: 1.8 }}>
                    {f.desc}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </motion.section>

      {/* ── PAIN ─────────────────────────────────────────────────────── */}
      <motion.section
        animate={{ backgroundColor: t.bg }}
        transition={{ duration: 0.35 }}
        style={{ padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 60px)" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.25, letterSpacing: "-0.015em", color: t.fg, textWrap: "balance" as CSSProperties["textWrap"], marginBottom: "clamp(40px, 7vw, 64px)" }}>
              چرا بدون آموزش درست{" "}
              <span style={{ color: t.purple }}>شکست می‌خوری؟</span>
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(20px, 3vw, 28px)" }}>
            {PAIN_STATS.map((s, i) => {
              const accent = ac(t, s.accent);
              return (
                <Reveal key={s.value} delay={i * 0.1} from="scale">
                  <motion.div
                    animate={{ backgroundColor: t.surface, borderColor: t.divider }}
                    transition={{ duration: 0.35 }}
                    style={{ padding: "clamp(24px, 3vw, 32px)", borderRadius: "16px", border: `1px solid ${t.divider}`, position: "relative", overflow: "hidden" }}
                  >
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: accent, opacity: 0.75 }} />
                    <p style={{ fontWeight: 900, fontSize: "clamp(2.2rem, 4.5vw, 3rem)", color: accent, letterSpacing: "-0.04em", marginBottom: "8px" }}>
                      {s.value}
                    </p>
                    <p style={{ color: t.fgMuted, fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)", lineHeight: 1.7 }}>
                      {s.label}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <motion.section
        id="about"
        animate={{ backgroundColor: t.surface }}
        transition={{ duration: 0.35 }}
        style={{ padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 60px)" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ color: t.purple, fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.04em", marginBottom: "16px" }}>
              میلاد سجودی
            </p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.75rem)", lineHeight: 1.25, letterSpacing: "-0.015em", color: t.fg, textWrap: "balance" as CSSProperties["textWrap"], marginBottom: "clamp(24px, 4vw, 36px)" }}>
              مرجع <span style={{ color: t.blue }}>ترید</span> حرفه‌ای
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: t.fgMuted, fontSize: "clamp(1rem, 1.8vw, 1.175rem)", lineHeight: 1.85, marginBottom: "20px" }}>
              میلاد سجودی مدرس و تریدر حرفه‌ای در بازارهای فارکس و ارزدیجیتال است. سال‌هاست که مسیر یادگیری ترید رو برای هزاران نفر در ایران ساده و عملی کرده.
            </p>
            <p style={{ color: t.fgMuted, fontSize: "clamp(1rem, 1.8vw, 1.175rem)", lineHeight: 1.85, marginBottom: "clamp(36px, 6vw, 52px)" }}>
              با رویکردی متفاوت از آموزش‌های معمول، تمرکز اصلی بر استراتژی‌های عملی و روانشناسی ترید است تا دانشجوها بتوانند سریع‌تر به سود برسند.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "clamp(16px, 2.5vw, 24px)" }}>
            {ABOUT_STATS.map((s, i) => {
              const Icon   = s.icon;
              const accent = ac(t, s.accent);
              const soft   = sf(t, s.accent);
              return (
                <Reveal key={s.label} delay={i * 0.09} from="scale">
                  <motion.div
                    animate={{ backgroundColor: t.surfaceHigh, borderColor: t.divider }}
                    transition={{ duration: 0.35 }}
                    style={{ padding: "clamp(18px, 2.5vw, 24px)", borderRadius: "16px", border: `1px solid ${t.divider}`, textAlign: "center" }}
                  >
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: soft, color: accent, marginBottom: "12px" }}>
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <p style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", color: accent, letterSpacing: "-0.04em", marginBottom: "6px" }}>{s.value}</p>
                    <p style={{ color: t.fgMuted, fontSize: "0.875rem", lineHeight: 1.5 }}>{s.label}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <motion.section
        id="services"
        animate={{ backgroundColor: t.bg }}
        transition={{ duration: 0.35 }}
        style={{ padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 60px)" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.75rem)", lineHeight: 1.25, letterSpacing: "-0.015em", color: t.fg, textWrap: "balance" as CSSProperties["textWrap"], marginBottom: "clamp(14px, 2.5vw, 20px)" }}>
              چطور می‌تونم <span style={{ color: t.purple }}>کمکت</span> کنم؟
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: t.fgMuted, fontSize: "clamp(1rem, 1.8vw, 1.175rem)", lineHeight: 1.85, marginBottom: "clamp(40px, 7vw, 60px)" }}>
              دوره‌ها و خدمات تخصصی برای رسیدن به استقلال مالی از طریق ترید
            </p>
          </Reveal>
          <div>
            {SERVICES.map((s, i) => {
              const Icon   = s.icon;
              const accent = ac(t, s.accent);
              const soft   = sf(t, s.accent);
              return (
                <Reveal key={s.title} delay={0.08 + i * 0.07} from="left">
                  <motion.div
                    whileHover={{ x: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: "flex", alignItems: "flex-start", gap: "20px", paddingTop: "clamp(22px, 3.5vw, 30px)", paddingBottom: "clamp(22px, 3.5vw, 30px)", borderBottom: i < SERVICES.length - 1 ? `1px solid ${t.divider}` : "none" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -8 }}
                      transition={{ duration: 0.25 }}
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "12px", background: soft, color: accent, flexShrink: 0, marginTop: "2px" }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </motion.div>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: "clamp(1.0625rem, 1.8vw, 1.25rem)", color: accent, marginBottom: "8px", letterSpacing: "-0.01em" }}>
                        {s.title}
                      </h3>
                      <p style={{ color: t.fgMuted, fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)", lineHeight: 1.8, maxWidth: "580px" }}>
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <motion.section
        id="form"
        animate={{ backgroundColor: t.surface }}
        transition={{ duration: 0.35 }}
        style={{ padding: "clamp(90px, 14vw, 160px) clamp(20px, 5vw, 60px)", textAlign: "center", position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Orb color={t.blueGlow}   size={420} style={{ top: "-100px", right: "8%", opacity: isDark ? 1 : 0.6 }} />
          <Orb color={t.purpleGlow} size={360} style={{ bottom: "-80px", left: "8%", opacity: isDark ? 0.8 : 0.5 }} />
        </div>

        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)", letterSpacing: "-0.015em", lineHeight: 1.25, color: t.fg, textWrap: "balance" as CSSProperties["textWrap"], marginBottom: "clamp(16px, 3vw, 24px)" }}>
              آماده‌ای مسیر{" "}
              <span style={{ color: t.blue }}>ترید</span>{" "}
              رو شروع کنی؟
            </h2>
            <p style={{ color: t.fgMuted, fontSize: "clamp(1rem, 1.6vw, 1.1rem)", lineHeight: 1.8, marginBottom: "clamp(32px, 5vw, 48px)" }}>
              برای ثبت‌نام در دوره یا هر سوال، از طریق تلگرام در تماس باش
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div style={{ display: "inline-block", position: "relative" }}>
              <motion.div
                animate={noMotion ? {} : { scale: [1, 1.20, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", inset: "-8px", borderRadius: "20px", background: GRAD, pointerEvents: "none" }}
              />
              <motion.a
                href={TELEGRAM} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: `0 18px 60px ${t.blueShadow}` }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                style={{ ...font, position: "relative", display: "inline-flex", alignItems: "center", gap: "12px", padding: "18px 52px", background: GRAD, color: "oklch(0.97 0.004 272)", borderRadius: "14px", fontWeight: 800, fontSize: "1.125rem", textDecoration: "none", boxShadow: `0 4px 32px ${t.blueShadow}` }}
              >
                <Send size={20} strokeWidth={2.5} />
                @MiladSojoudi در تلگرام
              </motion.a>
            </div>
          </Reveal>
        </div>
      </motion.section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <motion.footer
        animate={{ backgroundColor: t.bgDeep, color: t.fgMuted }}
        transition={{ duration: 0.35 }}
        style={{ textAlign: "center", padding: "clamp(28px, 4vw, 40px) clamp(20px, 5vw, 60px)", fontSize: "0.875rem", lineHeight: 1.6 }}
      >
        © ۱۴۰۵ میلاد سجودی — تمامی حقوق محفوظ است
        <span style={{ margin: "0 8px", opacity: 0.35 }}>·</span>
        طراحی و توسعه توسط{" "}
        <a href="/" style={{ color: t.blue, fontWeight: 700, textDecoration: "none" }}>
          حسن شاهمرادی
        </a>
      </motion.footer>
    </motion.div>
  );
}
