"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect, type CSSProperties } from "react";

// ── design tokens ─────────────────────────────────────────────────────────────
const pg = {
  bg:        "oklch(0.99 0.002 0)",
  surface:   "oklch(1 0 0)",
  blueTint:  "oklch(0.97 0.018 264)",
  blue:      "oklch(0.30 0.158 268)",
  blueMid:   "oklch(0.48 0.218 268)",
  blueLight: "oklch(0.72 0.090 260)",
  deep:      "oklch(0.12 0.060 260)",
  ink:       "oklch(0.15 0.025 268)",
  inkMid:    "oklch(0.36 0.038 268)",
  inkMuted:  "oklch(0.56 0.018 268)",
  divider:   "oklch(0.30 0.158 268 / 0.10)",
  whatsapp:  "oklch(0.53 0.18 148)",
  heroFg:    "oklch(0.99 0.002 0)",
} as const;

// ── constants ─────────────────────────────────────────────────────────────────
const PHONE    = "09382715986";
const PHONE_FA = "۰۹۳۸ ۲۷۱ ۵۹۸۶";
const TEL      = `tel:${PHONE}`;
const WHATSAPP = `https://wa.me/98${PHONE.slice(1)}`;

const IMG = {
  hero:  "https://lh3.googleusercontent.com/aida-public/AB6AXuCkXIn4ij2uuZWCxSU-aZvWUVAlsr2-Jqen6iWXNOuoF8Uz_RxrhEEoadZuCONWZEEqPpdxSKS-nJI_oivncmIekujJAjIRRFelvFCKNQEW5vJCuiTIozn4vS7wJjeo48XEQCzSUeEGC6SqWVBIEE3QaO4F7lE3OpxIasBJEa0rC_bx7sVypQGg5IMtleQLW8aRq6zZJgEA8aeAos4ig7wwvFYyQCNEoyqh7NTWfcyKqYRu11dNUNMRCpQawruKOr3blD26vL8KLdA",
  about: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3JN7UrF1hVx7oGhu45HSPGTZhs6eS8nhZbRCu-KFi8K0Xh3mNIYdKVlEUgXBsyhg09DG_1Rdw-QaNvvMDYLFL1VbV4ooclBmXYP--f3DC2y4DEJUqdfu50HZkUw43BksXOatmo-mfdM6BMoZ2PTjeb7lGKiE-pS9N9_rfLUOmyT6q8DeAzHB09rkKkP6vsMZvmFlzPCC7QnZ_yvJoDuIOJekPTXwc3gMuO6rzoBRU9T4MYC1EmACgPbj65csuWbqoQNq3i3CXKsY",
  svc1:  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCPE0_akKCvNoosBXjgJyF-HxCXTNyXw8TAhBE11pakM98QW6cav4-oLqXQ5HsUtIEYj7ohXYUCpilSCPTNGNNjeuzWzAb91BUWgZtPEiT35N5284qNYYIB6JQrJmXTLbbXUJA4DCAaaLHB1VajKvqm8ozzgUnrx460snUzkUA7-cMvd6ubcK-Zw_S6D-hxuMYsbx5sML9NKnAWsti8d-L031U2_d7GDWDy0RN4SbS-2RHMNyeytyYLmkbpwPFH0SnhUzK3sAiQro",
  svc2:  "https://lh3.googleusercontent.com/aida-public/AB6AXuClJmkRuSdk5RrBxPdDrlvvFxfZyGdJKiDF-A0zSVMtampfsLkV44S_fqGDxpRSdYASeKrDi-B-_RSIaRGDaNCojk8siSK3foS-3gk9rrYsGxsSCGDxmUdOSl4kO1CvxC-W7MFzXhKx9UTwoibmtLBd-ZBL3o6bvkERHVJjaU3kdpjTYQoOXSEhdP3FjB7EutkrPHuCVOCeOwP_WnBqd_SYpKJVtyuKfPiy8Fex4YG6gdu-adZW1yYXWRrbwtIAMYBHKyzfu1_HYxU",
  svc3:  "https://lh3.googleusercontent.com/aida-public/AB6AXuDW5TZwLuAPWX2vbmhdAhicBHbpGt9n8lVhrfTCg_Gsd52geIbtbiT4sK0DoEH7HlqYrXD6i89H1wnPpOihgEYfPeOimD7rfptk0Hy9Hlx5yrCCzsIWNL-4A21MPSdFoc0TVBkwLC2Vz15bo_JDUWZiNc0DSDSMHOZSKMjaqNorAusTF38nKzV6-KeW693G3zP1XbkrmcEzU_1u9cndjMIjAnQn1XIDXK8MFieEyTg8vwW5XdX3s3Ha4LjGX5ZqHq1kYvRu0eATNZQ",
  svc4:  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5v2WuS9YMeE1Iadq809IxcUK364fdWdhg_hACar9toOgmAG3WHG7IkZPvEU-6bvqvZosq7w_xS9ysXON8f3-7FaXjp0BeCb-EPAGxOCQrwnhQmtuTrmWUujC1V6qCE_nFlJIQSh6HYSDJQVUK2n9vFHwXoQ7eOCIS6wm19nHb7DkD5xoWvQ4KpomzDQsdCBRqsf20sBIMSbDdFCnhLp8eQW7pncg1torNmjkU5RpGqa7dHO1s6ydmNn8f2GI_0e-SwYRmROC3GoZc",
  proj4: "https://lh3.googleusercontent.com/aida-public/AB6AXuClJmkRuSdk5RrBxPdDrlvvFxfZyGdJKiDF-A0zSVMtampfsLkV44S_fqGDxpRSdYASeKrDi-B-_RSIaRGDaNCojk8siSK3foS-3gk9rrYsGxsSCGDxmUdOSl4kO1CvxC-W7MFzXhKx9UTwoibmtLBd-ZBL3o6bvkERHVJjaU3kdpjTYQoOXSEhdP3FjB7EutkrPHuCVOCeOwP_WnBqd_SYpKJVtyuKfPiy8Fex4YG6gdu-adZW1yYXWRrbwtIAMYBHKyzfu1_HYxU",
} as const;

const NAV_LINKS = [
  { label: "درباره من", href: "#about"    },
  { label: "خدمات",    href: "#services" },
  { label: "پروژه‌ها",  href: "#projects" },
  { label: "نظرات",    href: "#reviews"  },
  { label: "تماس",     href: "#contact"  },
];

const SERVICES = [
  {
    img:   IMG.svc1,
    title: "تدوین فیلم",
    desc:  "کات‌های ریتمیک و ساختاردهی هنری به راش‌های خام. هر برش یک تصمیم است — از احساس تا زمان‌بندی.",
    alt:   "تدوین فیلم",
  },
  {
    img:   IMG.svc2,
    title: "رنگ‌بندی و پست‌پروداکشن",
    desc:  "اصلاح رنگ و خلق اتمسفر سینمایی متناسب با سناریو. هر لوک یک هویت بصری مستقل است.",
    alt:   "رنگ‌بندی",
  },
  {
    img:   IMG.svc3,
    title: "کارگردانی فیلم",
    desc:  "هدایت تیم و اجرای بصری پروژه‌های مستند و روایی. ایده تا اجرا در یک مسیر منسجم.",
    alt:   "کارگردانی",
  },
  {
    img:   IMG.svc4,
    title: "تیزر تبلیغاتی",
    desc:  "ساخت ویدیوهای کوتاه و پرانرژی برای معرفی برند شما. کمپین‌هایی که دیده می‌شوند.",
    alt:   "تیزر تبلیغاتی",
  },
];

const PROJECTS = [
  { img: IMG.svc1,  title: "کمپین زمستانی برند اینکاس",  tags: ["تدوین", "تبلیغاتی"],        aspect: "16/9" },
  { img: IMG.svc3,  title: "مستند کوتاه «صداهای خاموش»", tags: ["کارگردانی", "مستند"],       aspect: "4/5"  },
  { img: IMG.svc2,  title: "تیزر رستوران نیلوفر",        tags: ["تدوین", "رنگ‌بندی"],       aspect: "4/5"  },
  { img: IMG.proj4, title: "کلیپ موزیک «آرامش»",         tags: ["کارگردانی", "موزیک ویدیو"], aspect: "16/9" },
];

const PROCESS = [
  { step: "۰۱", title: "مشاوره اولیه",   desc: "با هم صحبت می‌کنیم، پروژه را می‌شناسم و بهترین رویکرد را پیشنهاد می‌دهم." },
  { step: "۰۲", title: "ارسال فایل خام", desc: "فایل‌های ویدیویی خام را از طریق فرم سفارش یا لینک آپلود ارسال می‌کنید." },
  { step: "۰۳", title: "تدوین و بازخورد", desc: "نسخه اولیه را ارسال می‌کنم، بازخورد می‌گیرم و تا رضایت کامل ادامه می‌دهم." },
  { step: "۰۴", title: "تحویل نهایی",    desc: "فایل نهایی با کیفیت بالا در قالب موردنظر تحویل داده می‌شود." },
];

const TESTIMONIALS = [
  {
    quote: "همکاری با پگاه یکی از بهترین تجربه‌های ما بود. دقت به جزئیات، درک عمیق از ریتم و دید سینمایی او باعث شد خروجی نهایی کمپین ما فراتر از انتظارات اولیه باشد.",
    name:  "علی رضایی",
    role:  "کارگردان تبلیغاتی",
    img:   IMG.svc3,
  },
  {
    quote: "تعهد بی‌نظیر به زمان‌بندی پروژه و خلاقیت در تدوین باعث شد تا مستند ما جان تازه‌ای بگیرد. توانایی او در خلق حس و حال مناسب برای هر سکانس ستودنی است.",
    name:  "سارا محمدی",
    role:  "تهیه‌کننده مستقل",
    img:   IMG.svc1,
  },
  {
    quote: "نگاه حرفه‌ای به مقوله اصلاح رنگ و تسلط بر ابزارهای فنی، کیفیت بصری ویدیوهای برند ما را به سطح جدیدی ارتقا داد. همکاری بسیار روان و لذت‌بخشی بود.",
    name:  "امیرحسین کریمی",
    role:  "مدیر هنری برند اینکاس",
    img:   IMG.svc2,
  },
];

const SKILLS = [
  "تدوین فیلم", "کارگردانی", "رنگ‌بندی",
  "پست‌پروداکشن", "موزیک ویدیو", "مستند", "تیزر تبلیغاتی",
];

// ── animation primitives ──────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref      = useRef<HTMLDivElement>(null);
  const inView   = useInView(ref, { once: true, margin: "-50px" });
  const noMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      style={style}
      initial={noMotion ? {} : { opacity: 0, y: 30 }}
      animate={noMotion ? {} : inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────
export default function PegahPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef       = useRef<HTMLElement>(null);
  const { scrollY }   = useScroll();
  const heroImgY      = useTransform(scrollY, [0, 700], [0, 80]);
  const heroContentY  = useTransform(scrollY, [0, 600], [0, -36]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.65);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      dir="rtl"
      lang="fa"
      style={{
        fontFamily: "'Peyda', Tahoma, ui-sans-serif, system-ui, sans-serif",
        background: pg.bg,
        color:      pg.ink,
        minHeight:  "100vh",
        overflowX:  "hidden",
      }}
    >
      <style>{`
        html { scrollbar-color: oklch(0.30 0.158 268) oklch(0.94 0.018 264); scrollbar-width: thin; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: oklch(0.94 0.018 264); }
        ::-webkit-scrollbar-thumb { background: oklch(0.30 0.158 268); border-radius: 100px; }
        ::-webkit-scrollbar-thumb:hover { background: oklch(0.48 0.218 268); }
        @keyframes pg-marq { to { transform: translateX(-50%); } }
        .pg-marq { animation: pg-marq 34s linear infinite; display: flex; width: max-content; white-space: nowrap; will-change: transform; }
        .pg-marq-wrap:hover .pg-marq { animation-play-state: paused; }
        .pg-svc-img { transition: transform 0.65s cubic-bezier(0.16,1,0.3,1); display: block; width: 100%; height: 100%; object-fit: cover; }
        .pg-svc-row:hover .pg-svc-img { transform: scale(1.045); }
        .pg-proj-card { position: relative; overflow: hidden; border-radius: 20px; cursor: pointer; display: block; }
        .pg-proj-img { transition: transform 0.65s cubic-bezier(0.16,1,0.3,1); width: 100%; height: 100%; object-fit: cover; display: block; }
        .pg-proj-card:hover .pg-proj-img { transform: scale(1.06); }
        .pg-proj-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: oklch(0.06 0.025 268 / 0.30); transition: background 0.3s ease; }
        .pg-proj-card:hover .pg-proj-overlay { background: oklch(0.06 0.025 268 / 0.06); }
        .pg-proj-btn { width: 58px; height: 58px; background: oklch(1 0 0 / 0.88); backdrop-filter: blur(10px); border-radius: 50%; display: flex; align-items: center; justify-content: center; opacity: 0; transform: scale(0.6); transition: opacity 0.28s, transform 0.28s cubic-bezier(0.16,1,0.3,1); }
        .pg-proj-card:hover .pg-proj-btn { opacity: 1; transform: scale(1); }
        .pg-fi { width: 100%; background: oklch(0.97 0.010 266); border: 1.5px solid oklch(0.30 0.158 268 / 0.14); border-radius: 12px; padding: 12px 16px; font-size: 0.9375rem; font-family: inherit; color: oklch(0.15 0.025 268); transition: border-color 0.2s, box-shadow 0.2s; }
        .pg-fi:focus { outline: none; border-color: oklch(0.30 0.158 268); box-shadow: 0 0 0 3px oklch(0.30 0.158 268 / 0.12); }
        .pg-fi::placeholder { color: oklch(0.60 0.015 268); }
        #about, #services, #projects, #reviews, #contact { scroll-margin-top: 68px; }
        @media (max-width: 767px) {
          .pg-svc-row { flex-direction: column !important; }
          .pg-svc-img-wrap { width: 100% !important; aspect-ratio: 16/9 !important; }
          .pg-proj-grid { grid-template-columns: 1fr !important; }
          .pg-proc-grid { grid-template-columns: 1fr 1fr !important; }
          .pg-about-grid { grid-template-columns: 1fr !important; }
          .pg-contact-grid { grid-template-columns: 1fr !important; }
          .pg-nav-links { display: none !important; }
        }
        @media (max-width: 480px) {
          .pg-proc-grid { grid-template-columns: 1fr !important; }
          .pg-hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .pg-hero-btns a, .pg-hero-btns button { justify-content: center !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pg-marq { animation: none !important; }
          .pg-svc-img, .pg-proj-img { transition: none !important; }
        }
      `}</style>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <motion.nav
        animate={{
          background: scrolled ? "oklch(0.99 0.002 0 / 0.96)" : "oklch(0.99 0.002 0 / 0)",
          boxShadow:  scrolled ? "0 1px 0 oklch(0.30 0.158 268 / 0.08), 0 4px 20px oklch(0.15 0.025 268 / 0.06)" : "none",
        }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        style={{
          position:       "fixed",
          top: 0, right: 0, left: 0,
          zIndex:         100,
          display:        "flex",
          flexDirection:  "column",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        }}
      >
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "64px", padding: "0 clamp(20px, 5vw, 72px)",
          maxWidth: "1320px", margin: "0 auto", width: "100%",
        }}>
          <motion.span
            animate={{ color: scrolled ? pg.ink : pg.heroFg }}
            transition={{ duration: 0.3 }}
            style={{ fontWeight: 900, fontSize: "1.25rem", letterSpacing: "-0.025em" }}
          >
            پگاه
          </motion.span>

          <div className="pg-nav-links" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <motion.a
                key={href}
                href={href}
                whileHover={{ background: scrolled ? "oklch(0.30 0.158 268 / 0.07)" : "oklch(1 0 0 / 0.10)" }}
                transition={{ duration: 0.18 }}
                style={{
                  padding: "6px 14px", borderRadius: "8px",
                  fontSize: "0.9rem", fontWeight: 500,
                  color: scrolled ? pg.inkMid : "oklch(0.86 0.010 0)",
                  textDecoration: "none", fontFamily: "inherit",
                }}
              >
                {label}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            animate={{
              background: scrolled ? pg.blue : "oklch(1 0 0 / 0.12)",
              color:      scrolled ? pg.heroFg : pg.heroFg,
              border:     scrolled ? "none" : "1px solid oklch(1 0 0 / 0.22)",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.28 }}
            style={{
              display: "inline-flex", alignItems: "center",
              padding: "8px 22px", borderRadius: "100px",
              fontWeight: 700, fontSize: "0.875rem",
              textDecoration: "none", fontFamily: "inherit",
              backdropFilter: "blur(8px)",
            }}
          >
            تماس بگیرید
          </motion.a>
        </div>
      </motion.nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <header
        ref={heroRef}
        style={{
          position: "relative", minHeight: "100dvh",
          display: "flex", alignItems: "flex-end",
          overflow: "hidden", background: pg.deep,
        }}
      >
        <motion.div
          style={{ position: "absolute", inset: 0, y: heroImgY }}
        >
          <img
            src={IMG.hero}
            alt=""
            style={{ width: "100%", height: "110%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
        </motion.div>

        {/* main overlay: transparent photo side → dark text side (RTL: text on right) */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, oklch(0.06 0.025 268 / 0.06) 0%, oklch(0.06 0.025 268 / 0.58) 42%, oklch(0.06 0.025 268 / 0.96) 100%)",
        }} />
        {/* bottom fade to page bg */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "220px",
          background: `linear-gradient(to top, ${pg.bg}, transparent)`,
        }} />

        <motion.div
          style={{
            position: "relative", zIndex: 1, width: "100%",
            maxWidth: "1320px", margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 72px) clamp(64px, 9vw, 110px)",
            y: heroContentY,
          }}
        >
          <div style={{ maxWidth: "500px" }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.10 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "oklch(0.48 0.218 268 / 0.22)",
                border: "1px solid oklch(0.72 0.090 260 / 0.40)",
                borderRadius: "100px", padding: "5px 16px",
                color: pg.blueLight, fontWeight: 600,
                fontSize: "clamp(0.75rem, 1.1vw, 0.85rem)",
                letterSpacing: "0.07em", textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: pg.blueMid, display: "inline-block", flexShrink: 0 }} />
              Art Studio &nbsp;·&nbsp; تدوین حرفه‌ای
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 52, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.0, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: pg.heroFg, fontWeight: 900,
                fontSize: "clamp(5.5rem, 14vw, 10.5rem)",
                lineHeight: 1.05, letterSpacing: "-0.045em",
                marginBottom: "clamp(20px, 3vw, 36px)",
              }}
            >
              پگاه
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.36 }}
              style={{
                color: "oklch(0.80 0.010 0)", fontWeight: 500,
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                letterSpacing: "0.02em", marginBottom: "16px",
              }}
            >
              تدوینگر فیلم &nbsp;·&nbsp; کارگردان &nbsp;·&nbsp; پست‌پروداکشن
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.46 }}
              style={{
                color: "oklch(0.65 0.008 0)", fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                lineHeight: 1.82, maxWidth: "380px", marginBottom: "36px",
              }}
            >
              تصویر را به داستان تبدیل می‌کنم — با دقت، ریتم، و هویت بصری که ماندگار می‌شود.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="pg-hero-btns"
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, boxShadow: `0 8px 40px oklch(0.30 0.158 268 / 0.50)` }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "14px 36px", borderRadius: "12px",
                  background: pg.blue, color: "#fff",
                  fontWeight: 800, fontSize: "1.0625rem",
                  textDecoration: "none", fontFamily: "inherit",
                  boxShadow: "0 4px 28px oklch(0.30 0.158 268 / 0.40)",
                }}
              >
                همکاری با من
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ background: "oklch(1 0 0 / 0.18)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "14px 36px", borderRadius: "12px",
                  background: "oklch(1 0 0 / 0.10)",
                  border: "1px solid oklch(1 0 0 / 0.22)",
                  color: "oklch(0.94 0.004 0)",
                  fontWeight: 600, fontSize: "1.0625rem",
                  textDecoration: "none", fontFamily: "inherit",
                  backdropFilter: "blur(8px)",
                }}
              >
                نمونه کارها
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
            zIndex: 2, color: "oklch(0.55 0.008 0)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            textDecoration: "none",
          }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M8 1v14M2 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </header>

      {/* ── MARQUEE ───────────────────────────────────────────────────────── */}
      <div
        className="pg-marq-wrap"
        style={{
          background: pg.deep, padding: "17px 0", overflow: "hidden",
          borderBottom: `1px solid oklch(1 0 0 / 0.06)`,
        }}
      >
        <div className="pg-marq">
          {[...SKILLS, ...SKILLS].map((skill, i) => (
            <span key={i}>
              <span style={{
                color: "oklch(0.62 0.010 0)", fontSize: "0.9375rem",
                fontWeight: 500, padding: "0 28px",
              }}>
                {skill}
              </span>
              <span style={{ color: pg.blueLight, fontSize: "0.625rem", opacity: 0.55 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section
        id="about"
        style={{ padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 72px)", maxWidth: "1320px", margin: "0 auto" }}
      >
        <div
          className="pg-about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}
        >
          <div style={{ borderRadius: "28px", overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
            <img
              src={IMG.about}
              alt="پگاه — تدوینگر و کارگردان"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(to top, oklch(0.30 0.158 268 / 0.18), transparent 52%)`,
            }} />
          </div>

          <div>
            <FadeUp>
              <h2 style={{
                fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                lineHeight: 1.05, letterSpacing: "-0.04em", color: pg.ink,
                marginBottom: "24px", textWrap: "balance" as CSSProperties["textWrap"],
              }}>
                داستان پشت<br/>هر تصویر
              </h2>
            </FadeUp>

            <FadeUp delay={0.10}>
              <p style={{
                color: pg.inkMid, fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
                lineHeight: 1.85, marginBottom: "16px", fontWeight: 400,
              }}>
                تدوین برای من فقط چیدن تصویر نیست — ریتم است، نفس است، داستانی که باید حس شود نه فقط دیده شود.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p style={{
                color: pg.inkMuted, fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                lineHeight: 1.85, marginBottom: "40px",
              }}>
                با ابزارهای حرفه‌ای صنعت فیلم کار می‌کنم و در هر پروژه — از پیش‌تولید تا خروجی نهایی — همراه شما هستم تا اثری بسازیم که واقعاً تأثیر بگذارد.
              </p>
            </FadeUp>

            <FadeUp delay={0.26}>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
                borderTop: `1px solid ${pg.divider}`, paddingTop: "32px",
              }}>
                <div style={{ textAlign: "center", padding: "0 16px" }}>
                  <div style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: pg.blue, letterSpacing: "-0.04em", lineHeight: 1 }}>+۵۳</div>
                  <div style={{ fontSize: "0.8125rem", color: pg.inkMuted, marginTop: "6px", fontWeight: 500 }}>پروژه موفق</div>
                </div>
                <div style={{ background: pg.divider }} />
                <div style={{ textAlign: "center", padding: "0 16px" }}>
                  <div style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: pg.blue, letterSpacing: "-0.04em", lineHeight: 1 }}>٪۹۴</div>
                  <div style={{ fontSize: "0.8125rem", color: pg.inkMuted, marginTop: "6px", fontWeight: 500 }}>رضایت مشتریان</div>
                </div>
                <div style={{ background: pg.divider }} />
                <div style={{ textAlign: "center", padding: "0 16px" }}>
                  <div style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: pg.blue, letterSpacing: "-0.04em", lineHeight: 1 }}>+۶</div>
                  <div style={{ fontSize: "0.8125rem", color: pg.inkMuted, marginTop: "6px", fontWeight: 500 }}>سال تجربه</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section
        id="services"
        style={{ background: pg.surface, padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 72px)" }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <FadeUp style={{ marginBottom: "clamp(48px, 7vw, 80px)" }}>
            <h2 style={{
              fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              letterSpacing: "-0.04em", lineHeight: 1.05, color: pg.ink,
              textWrap: "balance" as CSSProperties["textWrap"],
            }}>
              خدماتی که ارائه می‌دهم
            </h2>
          </FadeUp>

          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={i % 2 === 0 ? 0 : 0.08}>
              <div
                className="pg-svc-row"
                style={{
                  display: "flex",
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                  gap: "clamp(32px, 5vw, 72px)",
                  alignItems: "center",
                  padding: "clamp(40px, 6vw, 64px) 0",
                  borderTop: `1px solid ${pg.divider}`,
                  ...(i === SERVICES.length - 1 ? { borderBottom: `1px solid ${pg.divider}` } : {}),
                }}
              >
                <div
                  className="pg-svc-img-wrap"
                  style={{ width: "42%", flexShrink: 0, borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}
                >
                  <img src={svc.img} alt={svc.alt} className="pg-svc-img" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    letterSpacing: "-0.035em", color: pg.ink,
                    marginBottom: "14px", lineHeight: 1.1,
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: pg.inkMid, fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)", lineHeight: 1.85 }}>
                    {svc.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section
        id="projects"
        style={{ padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 72px)", maxWidth: "1320px", margin: "0 auto" }}
      >
        <FadeUp>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            marginBottom: "clamp(40px, 6vw, 64px)", flexWrap: "wrap", gap: "16px",
          }}>
            <h2 style={{
              fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              letterSpacing: "-0.04em", lineHeight: 1.05, color: pg.ink,
            }}>
              پروژه‌های منتخب
            </h2>
            <p style={{ color: pg.inkMuted, fontSize: "0.9375rem", maxWidth: "260px", lineHeight: 1.7 }}>
              گزیده‌ای از آثار در زمینه تدوین و کارگردانی
            </p>
          </div>
        </FadeUp>

        <div
          className="pg-proj-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}
        >
          {PROJECTS.map((proj, i) => (
            <FadeUp key={proj.title} delay={i * 0.08}>
              <div className="pg-proj-card" style={{ aspectRatio: proj.aspect }}>
                <img src={proj.img} alt={proj.title} className="pg-proj-img" />
                <div className="pg-proj-overlay">
                  <div className="pg-proj-btn">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill={pg.blue}>
                      <path d="M6 4l14 8-14 8z"/>
                    </svg>
                  </div>
                </div>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "20px 22px",
                  background: "linear-gradient(to top, oklch(0.06 0.025 268 / 0.86), transparent)",
                }}>
                  <div style={{ display: "flex", gap: "7px", marginBottom: "8px", flexWrap: "wrap" }}>
                    {proj.tags.map(tag => (
                      <span key={tag} style={{
                        background: "oklch(1 0 0 / 0.12)", color: "oklch(0.88 0.006 0)",
                        fontSize: "0.75rem", fontWeight: 700,
                        padding: "3px 10px", borderRadius: "100px",
                        backdropFilter: "blur(6px)",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.0625rem", letterSpacing: "-0.015em" }}>
                    {proj.title}
                  </h3>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section
        style={{ background: pg.deep, padding: "clamp(80px, 12vw, 130px) clamp(20px, 5vw, 72px)", position: "relative", overflow: "hidden" }}
      >
        {/* ambient background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src={IMG.hero} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", opacity: 0.07 }} />
        </div>
        <div style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeUp style={{ marginBottom: "clamp(48px, 7vw, 72px)", textAlign: "center" }}>
            <h2 style={{
              fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              letterSpacing: "-0.04em", color: pg.heroFg,
              textWrap: "balance" as CSSProperties["textWrap"],
            }}>
              چطور با هم کار می‌کنیم
            </h2>
          </FadeUp>

          <div
            className="pg-proc-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(24px, 4vw, 48px)", position: "relative" }}
          >
            <div style={{
              position: "absolute", top: "27px", right: "12.5%", left: "12.5%",
              height: "1px", background: "oklch(1 0 0 / 0.08)",
            }} />
            {PROCESS.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.10}>
                <div style={{ textAlign: "center", position: "relative" }}>
                  <div style={{
                    width: "54px", height: "54px", borderRadius: "50%",
                    background: "oklch(0.48 0.218 268 / 0.18)",
                    border: "1px solid oklch(0.48 0.218 268 / 0.32)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <span style={{ color: pg.blueLight, fontWeight: 900, fontSize: "0.9375rem" }}>{step.step}</span>
                  </div>
                  <h3 style={{ color: pg.heroFg, fontWeight: 700, fontSize: "1.0625rem", marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ color: "oklch(0.72 0.010 260)", fontSize: "0.875rem", lineHeight: 1.75 }}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section
        id="reviews"
        style={{ padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 72px)" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeUp style={{ marginBottom: "clamp(48px, 7vw, 72px)" }}>
            <h2 style={{
              fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              letterSpacing: "-0.04em", lineHeight: 1.05, color: pg.ink,
            }}>
              مشتریان چه می‌گویند
            </h2>
          </FadeUp>

          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <div style={{
                padding: "clamp(32px, 5vw, 48px) 0",
                borderTop: `1px solid ${pg.divider}`,
                ...(i === TESTIMONIALS.length - 1 ? { borderBottom: `1px solid ${pg.divider}` } : {}),
              }}>
                <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                  <span style={{
                    color: pg.blue, fontSize: "4rem", lineHeight: 0.7,
                    fontWeight: 900, opacity: 0.18, flexShrink: 0, userSelect: "none",
                  }}>
                    «
                  </span>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      color: pg.inkMid, fontSize: "clamp(1rem, 1.7vw, 1.125rem)",
                      lineHeight: 1.9, marginBottom: "24px",
                    }}>
                      {t.quote}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "44px", height: "44px", borderRadius: "50%",
                        overflow: "hidden", flexShrink: 0,
                        border: `2px solid ${pg.divider}`,
                      }}>
                        <img
                          src={t.img}
                          alt={t.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: "0.9375rem", color: pg.ink }}>{t.name}</p>
                        <p style={{ fontSize: "0.8125rem", color: pg.blueMid }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{ background: pg.surface, padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 72px)" }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <FadeUp style={{ marginBottom: "clamp(48px, 7vw, 72px)", textAlign: "center" }}>
            <h2 style={{
              fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              letterSpacing: "-0.04em", lineHeight: 1.05, color: pg.ink,
            }}>
              ثبت سفارش
            </h2>
          </FadeUp>

          <div
            className="pg-contact-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(24px, 4vw, 48px)", alignItems: "start" }}
          >
            {/* info panel */}
            <FadeUp>
              <div style={{
                background: pg.blue, borderRadius: "24px",
                padding: "clamp(28px, 4vw, 40px)",
                display: "flex", flexDirection: "column", gap: "28px",
              }}>
                <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.375rem" }}>اطلاعات تماس</h3>
                <div>
                  <p style={{ color: "oklch(1 0 0 / 0.55)", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "6px" }}>شماره تماس</p>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }} dir="ltr">{PHONE_FA}</p>
                </div>
                <div>
                  <p style={{ color: "oklch(1 0 0 / 0.55)", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "6px" }}>اینستاگرام</p>
                  <a
                    href="https://www.instagram.com/kz_pegah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}
                    dir="ltr"
                  >
                    @kz_pegah
                  </a>
                </div>
                <div>
                  <p style={{ color: "oklch(1 0 0 / 0.55)", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "6px" }}>پاسخگویی</p>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>کمتر از ۲۴ ساعت</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
                  <motion.a
                    href={TEL}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "12px 20px", borderRadius: "10px",
                      background: "oklch(1 0 0 / 0.14)",
                      border: "1px solid oklch(1 0 0 / 0.20)",
                      color: "#fff", fontWeight: 700, fontSize: "0.9375rem",
                      textDecoration: "none", fontFamily: "inherit",
                    }}
                  >
                    تماس تلفنی
                  </motion.a>
                  <motion.a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "12px 20px", borderRadius: "10px",
                      background: pg.whatsapp, color: "#fff",
                      fontWeight: 700, fontSize: "0.9375rem",
                      textDecoration: "none", fontFamily: "inherit",
                      boxShadow: "0 4px 20px oklch(0.53 0.18 148 / 0.25)",
                    }}
                  >
                    پیام واتساپ
                  </motion.a>
                </div>
              </div>
            </FadeUp>

            {/* form */}
            <FadeUp delay={0.12}>
              <div style={{
                background: pg.bg, border: `1px solid ${pg.divider}`,
                borderRadius: "24px", padding: "clamp(28px, 4vw, 40px)",
              }}>
                <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: pg.ink, marginBottom: "8px" }}>
                      نام و نام خانوادگی
                    </label>
                    <input type="text" placeholder="نام شما" className="pg-fi" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: pg.ink, marginBottom: "8px" }}>
                      شماره تماس
                    </label>
                    <input type="tel" dir="ltr" placeholder="09xxxxxxxxx" className="pg-fi" style={{ textAlign: "right" }} />
                  </div>
                  <div style={{ gridColumn: "1/-1" }}>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: pg.ink, marginBottom: "8px" }}>
                      نوع پروژه
                    </label>
                    <select className="pg-fi">
                      <option>تدوین فیلم کوتاه / مستند</option>
                      <option>رنگ‌بندی و پست‌پروداکشن</option>
                      <option>تیزر تبلیغاتی</option>
                      <option>موزیک ویدیو</option>
                      <option>کارگردانی</option>
                      <option>سایر موارد</option>
                    </select>
                  </div>
                  <div style={{ gridColumn: "1/-1" }}>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: pg.ink, marginBottom: "8px" }}>
                      توضیحات پروژه
                    </label>
                    <textarea
                      rows={4}
                      placeholder="درباره پروژه‌تان بنویسید — موضوع، مدت، سبک مورد نظر..."
                      className="pg-fi"
                      style={{ resize: "none" }}
                    />
                  </div>
                  <div style={{ gridColumn: "1/-1" }}>
                    <label style={{
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      width: "100%", height: "96px",
                      border: `1.5px dashed ${pg.divider}`, borderRadius: "12px",
                      cursor: "pointer", transition: "border-color 0.2s, background 0.2s",
                    }}
                      onMouseOver={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = pg.blue;
                        (e.currentTarget as HTMLElement).style.background = "oklch(0.30 0.158 268 / 0.04)";
                      }}
                      onMouseOut={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = pg.divider;
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={pg.inkMuted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "8px" }}>
                        <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
                      </svg>
                      <span style={{ fontSize: "0.875rem", color: pg.inkMuted }}>فایل را اینجا بکشید یا کلیک کنید</span>
                      <span style={{ fontSize: "0.75rem", color: pg.inkMuted, marginTop: "4px", opacity: 0.7 }}>MP4, MOV, AVI — حداکثر ۵۰۰ مگابایت</span>
                      <input type="file" accept="video/*,.mp4,.mov,.avi" style={{ display: "none" }} />
                    </label>
                  </div>
                  <div style={{ gridColumn: "1/-1" }}>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02, boxShadow: `0 8px 40px oklch(0.30 0.158 268 / 0.32)` }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        width: "100%", padding: "15px",
                        background: pg.blue, color: "#fff",
                        borderRadius: "12px", fontWeight: 800,
                        fontSize: "1.0625rem", border: "none",
                        cursor: "pointer", fontFamily: "inherit",
                        boxShadow: `0 4px 28px oklch(0.30 0.158 268 / 0.28)`,
                      }}
                    >
                      ارسال سفارش
                    </motion.button>
                  </div>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{
        background: "oklch(0.06 0.022 268)",
        padding: "clamp(28px, 4vw, 40px) clamp(20px, 5vw, 72px)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}>
        <div style={{
          maxWidth: "1320px", margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "16px",
        }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: "1.125rem", color: "#fff", letterSpacing: "-0.025em" }}>پگاه</div>
            <div style={{ fontSize: "0.8125rem", color: "oklch(0.50 0.010 260)", marginTop: "4px" }}>تدوینگر · کارگردان · پست‌پروداکشن</div>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a
              href="https://www.instagram.com/kz_pegah/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "oklch(0.48 0.010 260)", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={e => (e.currentTarget.style.color = "#fff")}
              onMouseOut={e => (e.currentTarget.style.color = "oklch(0.48 0.010 260)")}
            >
              اینستاگرام
            </a>
            <a
              href={TEL}
              dir="ltr"
              style={{ color: "oklch(0.48 0.010 260)", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={e => (e.currentTarget.style.color = "#fff")}
              onMouseOut={e => (e.currentTarget.style.color = "oklch(0.48 0.010 260)")}
            >
              {PHONE_FA}
            </a>
          </div>
          <div style={{ fontSize: "0.8125rem", color: "oklch(0.30 0.008 268)" }}>
            طراحی توسط{" "}
            <Link href="/" style={{ color: pg.blueLight, fontWeight: 600, textDecoration: "none" }}>حسن شاهمرادی</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
