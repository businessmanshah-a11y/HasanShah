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

// ── design tokens ────────────────────────────────────────────────────────────
const hm = {
  heroBg:     "linear-gradient(158deg, oklch(0.20 0.130 268) 0%, oklch(0.36 0.188 268) 100%)",
  heroGlow:   "radial-gradient(ellipse 80% 65% at 30% 55%, oklch(0.50 0.18 258 / 0.28), transparent 70%)",
  blue:       "oklch(0.38 0.195 268)",
  blueDeep:   "oklch(0.20 0.130 268)",
  blueLight:  "oklch(0.75 0.092 260)",
  blueSubtle: "oklch(0.94 0.022 264)",
  blueGhost:  "oklch(0.97 0.012 265)",
  white:      "oklch(0.99 0.003 0)",
  ink:        "oklch(0.16 0.025 268)",
  inkMid:     "oklch(0.35 0.038 268)",
  inkMuted:   "oklch(0.60 0.018 268)",
  divider:    "oklch(0.38 0.195 268 / 0.13)",
  whatsapp:   "oklch(0.53 0.18 148)",
} as const;

// ── constants ────────────────────────────────────────────────────────────────
const PHONE    = "09392406767";
const PHONE_FA = "۰۹۳۹۲ ۴۰۶ ۷۶۷";
const TEL      = `tel:${PHONE}`;
const WHATSAPP = `https://wa.me/98${PHONE.slice(1)}`;

const NAV_LINKS = [
  { label: "خدمات",  href: "#services"     },
  { label: "نظرات",  href: "#testimonials" },
  { label: "مقالات", href: "#articles"     },
  { label: "تماس",   href: "#contact"      },
];

const SERVICES = [
  {
    title: "ثبت شرکت و برند",
    desc:  "ثبت انواع شرکت‌ها، مؤسسات و برندهای تجاری — از ابتدا تا دریافت کد اقتصادی و مجوزهای مورد نیاز.",
  },
  {
    title: "تنظیم قرارداد",
    desc:  "تهیه و بررسی قراردادهای خرید، فروش، پیمانکاری و خدمات. کاهش ریسک حقوقی در معاملات بزرگ.",
  },
  {
    title: "پیگیری امور اداری",
    desc:  "پیگیری مراحل دولتی و سازمانی به جای شما — بدون هدررفت وقت و انرژی کسب‌وکارتان.",
  },
  {
    title: "مشاوره تخصصی",
    desc:  "راهنمایی گام به گام در فرآیندهای قانونی و اداری. پاسخ به سؤالات قبل از آنکه به مشکل تبدیل شوند.",
  },
];

const TRUST = [
  {
    headline: "پوشش سراسری",
    body:     "مشاوره آنلاین بدون محدودیت جغرافیایی — از تهران تا دورترین شهرها در دسترسم.",
  },
  {
    headline: "متناسب با هر کسب‌وکار",
    body:     "از استارتاپ‌های نوپا تا شرکت‌های در حال رشد، راه‌حل متناسب با موقعیت شما دارم.",
  },
  {
    headline: "تمرکز بر قراردادهای بزرگ",
    body:     "هدفم فرآیندهایی است که مستقیماً روی درآمد و قراردادهای مهم شما اثر می‌گذارند.",
  },
];

const TESTIMONIALS = [
  {
    quote: "ثبت شرکتم رو با حامد انجام دادم. سریع، آنلاین، بدون دردسر. هر مرحله‌ای رو توضیح داد و هیچ‌وقت سردرگم نشدم.",
    name:  "احمد رضایی",
    role:  "صاحب شرکت بازرگانی",
  },
  {
    quote: "قراردادی که حامد تنظیم کرد یه نکته حیاتی داشت که خودم متوجه نشده بودم. اگه نبود می‌تونست بعداً خیلی گرون تمام بشه.",
    name:  "مریم کاظمی",
    role:  "مدیرعامل",
  },
  {
    quote: "یه پرونده اداری داشتم که ۳ ماه گیر کرده بود. حامد در کمتر از ۲ هفته حلش کرد. خیلی ممنون از پیگیریش.",
    name:  "علی محمدی",
    role:  "کارآفرین مستقل",
  },
];

const ARTICLES = [
  {
    date:    "دی ۱۴۰۳",
    title:   "چطور شرکت ثبت کنیم بدون هدررفت وقت",
    excerpt: "ثبت شرکت نیازی به مراجعه حضوری ندارد. مراحل آنلاین را گام به گام توضیح می‌دهیم.",
  },
  {
    date:    "آذر ۱۴۰۳",
    title:   "۵ اشتباه رایج در تنظیم قرارداد",
    excerpt: "قراردادهایی که بدون مشاور تنظیم می‌شوند اغلب نکاتی دارند که بعداً گران تمام می‌شود.",
  },
  {
    date:    "آذر ۱۴۰۳",
    title:   "امور اداری آنلاین: راهنمای کامل",
    excerpt: "خدمات دولتی ایران در مسیر دیجیتالی شدن است. چطور از آن‌ها بهتر استفاده کنید.",
  },
];

// ── animation primitives ─────────────────────────────────────────────────────
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
  const inView   = useInView(ref, { once: true, margin: "-60px" });
  const noMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      style={style}
      initial={noMotion ? {} : { opacity: 0, y: 36 }}
      animate={noMotion ? {} : inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── page ─────────────────────────────────────────────────────────────────────
export default function HamedTahounehPage() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");

  // nav scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section via IntersectionObserver
  useEffect(() => {
    const ids = ["services", "testimonials", "articles", "contact"];
    const io  = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-28% 0px -62% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  // hero parallax
  const heroRef      = useRef<HTMLElement>(null);
  const { scrollY }  = useScroll();
  const glowY        = useTransform(scrollY, [0, 700], [0, -90]);
  const heroContentY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <div
      dir="rtl"
      lang="fa"
      style={{
        fontFamily: "'Peyda', Tahoma, ui-sans-serif, system-ui, sans-serif",
        background: hm.white,
        color:      hm.ink,
        minHeight:  "100vh",
        overflowX:  "hidden",
      }}
    >
      {/* scoped responsive utilities */}
      <style>{`
        .hm-nav-links { display: flex; }
        @media (max-width: 640px) { .hm-nav-links { display: none; } }
        #services, #testimonials, #articles, #contact { scroll-margin-top: 70px; }
        @media (prefers-reduced-motion: reduce) {
          .hm-card-hover { transform: none !important; }
        }
      `}</style>

      {/* ══ NAV ══════════════════════════════════════════════════════════════ */}
      <motion.nav
        animate={{
          background: scrolled
            ? "oklch(0.99 0.003 0)"
            : "oklch(0.20 0.130 268 / 0.90)",
          boxShadow: scrolled
            ? "0 2px 28px oklch(0 0 0 / 0.07)"
            : "none",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          position:       "fixed",
          top:            0,
          right:          0,
          left:           0,
          zIndex:         100,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        "0 clamp(20px, 5vw, 56px)",
          height:         "64px",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom:   scrolled ? "none" : "1px solid oklch(1 0 0 / 0.07)",
        }}
      >
        {/* logo */}
        <motion.span
          animate={{ color: scrolled ? hm.ink : hm.white }}
          transition={{ duration: 0.3 }}
          style={{ fontWeight: 800, fontSize: "0.9375rem", letterSpacing: "-0.015em" }}
        >
          حامد طاحونه
        </motion.span>

        {/* section links */}
        <div
          className="hm-nav-links"
          style={{ alignItems: "center", gap: "2px" }}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const id       = href.slice(1);
            const isActive = activeSection === id;
            return (
              <motion.a
                key={href}
                href={href}
                animate={{
                  color: scrolled
                    ? isActive ? hm.blue : hm.inkMid
                    : isActive ? hm.white : "oklch(0.80 0.038 268)",
                  background: isActive && scrolled
                    ? "oklch(0.38 0.195 268 / 0.09)"
                    : "transparent",
                }}
                whileHover={{
                  background: scrolled
                    ? "oklch(0.38 0.195 268 / 0.09)"
                    : "oklch(1 0 0 / 0.08)",
                }}
                transition={{ duration: 0.18 }}
                style={{
                  padding:        "6px 14px",
                  borderRadius:   "8px",
                  fontSize:       "0.9rem",
                  fontWeight:     500,
                  textDecoration: "none",
                  fontFamily:     "inherit",
                }}
              >
                {label}
              </motion.a>
            );
          })}
        </div>

        {/* cta */}
        <motion.a
          href={TEL}
          animate={{
            background: scrolled ? hm.blue : hm.white,
            color:      scrolled ? hm.white : hm.blue,
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.28 }}
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            padding:        "8px 22px",
            borderRadius:   "100px",
            fontWeight:     700,
            fontSize:       "0.875rem",
            textDecoration: "none",
            fontFamily:     "inherit",
          }}
        >
          تماس بگیرید
        </motion.a>
      </motion.nav>

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{
          minHeight:  "100svh",
          background: hm.heroBg,
          position:   "relative",
          display:    "flex",
          alignItems: "center",
          paddingTop: "64px",
          overflow:   "hidden",
        }}
      >
        {/* parallax glow */}
        <motion.div
          style={{
            position:      "absolute",
            inset:         0,
            background:    hm.heroGlow,
            pointerEvents: "none",
            y:             glowY,
          }}
        />

        {/* hero content with subtle parallax */}
        <motion.div
          style={{
            position:  "relative",
            zIndex:    1,
            width:     "100%",
            maxWidth:  "1180px",
            margin:    "0 auto",
            padding:   "clamp(72px, 13vw, 130px) clamp(20px, 5vw, 60px) clamp(110px, 15vw, 160px)",
            y:         heroContentY,
          }}
        >
          {/* role tag */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              color:         hm.blueLight,
              fontWeight:    600,
              fontSize:      "clamp(0.875rem, 1.4vw, 1rem)",
              letterSpacing: "0.03em",
              marginBottom:  "clamp(14px, 2.5vw, 24px)",
            }}
          >
            مشاور خدمات اداری
          </motion.p>

          {/* name — blur-fade entrance */}
          <motion.h1
            initial={{ opacity: 0, y: 52, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              color:         hm.white,
              fontWeight:    900,
              fontSize:      "clamp(4rem, 11vw, 9.5rem)",
              lineHeight:    0.95,
              letterSpacing: "-0.04em",
              textWrap:      "balance" as CSSProperties["textWrap"],
              marginBottom:  "clamp(22px, 4vw, 36px)",
            }}
          >
            حامد<br />طاحونه
          </motion.h1>

          {/* value prop */}
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            style={{
              color:        "oklch(0.86 0.032 268)",
              fontWeight:   400,
              fontSize:     "clamp(1rem, 2vw, 1.25rem)",
              maxWidth:     "480px",
              lineHeight:   1.78,
              marginBottom: "clamp(36px, 7vw, 56px)",
            }}
          >
            امور اداری پیچیده را به متخصص بسپارید — از ثبت شرکت تا تنظیم قرارداد، در سراسر ایران در کنارتان هستم.
          </motion.p>

          {/* ctas */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.58 }}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
          >
            <motion.a
              href={TEL}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 40px oklch(0 0 0 / 0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                padding:        "15px 40px",
                background:     hm.white,
                color:          hm.blue,
                borderRadius:   "12px",
                fontWeight:     800,
                fontSize:       "1.0625rem",
                textDecoration: "none",
                fontFamily:     "inherit",
                boxShadow:      "0 4px 28px oklch(0 0 0 / 0.22)",
              }}
            >
              تماس مستقیم
            </motion.a>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                padding:        "15px 40px",
                background:     hm.whatsapp,
                color:          hm.white,
                borderRadius:   "12px",
                fontWeight:     700,
                fontSize:       "1.0625rem",
                textDecoration: "none",
                fontFamily:     "inherit",
                boxShadow:      "0 4px 24px oklch(0 0 0 / 0.18)",
              }}
            >
              واتساپ
            </motion.a>
          </motion.div>
        </motion.div>

        {/* wave clip to white */}
        <div
          style={{
            position:  "absolute",
            bottom:    -1,
            left:      0,
            right:     0,
            height:    "90px",
            background: hm.white,
            clipPath:  "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </section>

      {/* ══ SERVICES ═════════════════════════════════════════════════════════ */}
      <section
        id="services"
        style={{
          background: hm.white,
          padding:    "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 60px)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeUp>
            <h2
              style={{
                fontWeight:    900,
                fontSize:      "clamp(2rem, 5vw, 3.75rem)",
                lineHeight:    1.05,
                letterSpacing: "-0.035em",
                color:         hm.ink,
                textWrap:      "balance" as CSSProperties["textWrap"],
                marginBottom:  "clamp(14px, 2.5vw, 20px)",
              }}
            >
              چه کمکی<br />
              <span style={{ color: hm.blue }}>می‌توانم بکنم؟</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p
              style={{
                color:        hm.inkMid,
                fontSize:     "clamp(1rem, 1.8vw, 1.175rem)",
                lineHeight:   1.85,
                maxWidth:     "640px",
                marginBottom: "clamp(40px, 7vw, 64px)",
              }}
            >
              با تجربه در حوزه خدمات اداری، کنار کسب‌وکارهای سراسر ایران هستم تا فرآیندهای پیچیده را ساده‌تر، سریع‌تر و مطمئن‌تر پیش ببرند.
            </p>
          </FadeUp>

          <div>
            {SERVICES.map((item, i) => (
              <FadeUp key={item.title} delay={0.1 + i * 0.08}>
                <motion.div
                  whileHover={{ x: -6 }}
                  transition={{ duration: 0.22 }}
                  style={{
                    paddingTop:    "clamp(22px, 3.5vw, 30px)",
                    paddingBottom: "clamp(22px, 3.5vw, 30px)",
                    borderBottom:  i < SERVICES.length - 1 ? `1px solid ${hm.divider}` : "none",
                    cursor:        "default",
                  }}
                >
                  <h3
                    style={{
                      fontWeight:    700,
                      fontSize:      "clamp(1.0625rem, 1.8vw, 1.25rem)",
                      color:         hm.blue,
                      marginBottom:  "10px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color:      hm.inkMid,
                      fontSize:   "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                      lineHeight: 1.8,
                      maxWidth:   "620px",
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUST ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: hm.blueSubtle,
          padding:    "clamp(72px, 11vw, 120px) clamp(20px, 5vw, 60px)",
        }}
      >
        <div
          style={{
            maxWidth:            "1100px",
            margin:              "0 auto",
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap:                 "clamp(32px, 5vw, 60px)",
          }}
        >
          {TRUST.map((item, i) => (
            <FadeUp key={item.headline} delay={i * 0.1}>
              <div>
                <h3
                  style={{
                    fontWeight:    800,
                    fontSize:      "clamp(1.125rem, 2vw, 1.4rem)",
                    color:         hm.blue,
                    marginBottom:  "12px",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {item.headline}
                </h3>
                <p
                  style={{
                    color:      hm.inkMid,
                    fontSize:   "clamp(0.9rem, 1.5vw, 1.05rem)",
                    lineHeight: 1.8,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════════════════════ */}
      <section
        id="testimonials"
        style={{
          background: hm.white,
          padding:    "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 60px)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp style={{ marginBottom: "clamp(40px, 7vw, 64px)" }}>
            <h2
              style={{
                fontWeight:    900,
                fontSize:      "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.035em",
                lineHeight:    1.05,
                color:         hm.ink,
                textWrap:      "balance" as CSSProperties["textWrap"],
              }}
            >
              مشتریان<br />
              <span style={{ color: hm.blue }}>چه می‌گویند</span>
            </h2>
          </FadeUp>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap:                 "clamp(16px, 2.5vw, 24px)",
              alignItems:          "stretch",
            }}
          >
            {TESTIMONIALS.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: `0 16px 48px oklch(0.38 0.195 268 / 0.10)` }}
                  transition={{ duration: 0.28 }}
                  style={{
                    padding:      "clamp(24px, 3.5vw, 36px)",
                    background:   hm.blueGhost,
                    borderRadius: "20px",
                    border:       `1px solid ${hm.divider}`,
                    display:      "flex",
                    flexDirection:"column",
                    gap:          "18px",
                    height:       "100%",
                  }}
                >
                  <span
                    style={{
                      color:      hm.blue,
                      fontSize:   "3.5rem",
                      lineHeight: 0.7,
                      fontWeight: 900,
                      opacity:    0.35,
                      userSelect: "none",
                    }}
                  >
                    «
                  </span>
                  <p
                    style={{
                      color:      hm.inkMid,
                      fontSize:   "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                      lineHeight: 1.87,
                      flexGrow:   1,
                    }}
                  >
                    {item.quote}
                  </p>
                  <div
                    style={{
                      paddingTop:  "16px",
                      borderTop:   `1px solid ${hm.divider}`,
                    }}
                  >
                    <p style={{ fontWeight: 700, fontSize: "0.9375rem", color: hm.ink, marginBottom: "4px" }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: hm.inkMuted }}>
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ARTICLES ═════════════════════════════════════════════════════════ */}
      <section
        id="articles"
        style={{
          background: hm.blueSubtle,
          padding:    "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 60px)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp style={{ marginBottom: "clamp(40px, 7vw, 64px)" }}>
            <h2
              style={{
                fontWeight:    900,
                fontSize:      "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.035em",
                lineHeight:    1.05,
                color:         hm.ink,
                textWrap:      "balance" as CSSProperties["textWrap"],
              }}
            >
              مقالات<br />
              <span style={{ color: hm.blue }}>راهنما</span>
            </h2>
          </FadeUp>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap:                 "clamp(16px, 2.5vw, 24px)",
              alignItems:          "stretch",
            }}
          >
            {ARTICLES.map((article, i) => (
              <FadeUp key={article.title} delay={i * 0.1}>
                <motion.a
                  href="#"
                  whileHover={{
                    y: -6,
                    boxShadow: `0 16px 40px oklch(0.38 0.195 268 / 0.10)`,
                  }}
                  transition={{ duration: 0.28 }}
                  style={{
                    display:        "flex",
                    flexDirection:  "column",
                    gap:            "14px",
                    padding:        "clamp(24px, 3.5vw, 36px)",
                    background:     hm.white,
                    borderRadius:   "20px",
                    border:         `1px solid ${hm.divider}`,
                    textDecoration: "none",
                    fontFamily:     "inherit",
                    height:         "100%",
                  }}
                >
                  <span
                    style={{
                      color:      hm.blue,
                      fontSize:   "0.8125rem",
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {article.date}
                  </span>
                  <h3
                    style={{
                      fontWeight:    700,
                      fontSize:      "clamp(1.0625rem, 1.8vw, 1.25rem)",
                      color:         hm.ink,
                      lineHeight:    1.4,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      color:      hm.inkMid,
                      fontSize:   "clamp(0.875rem, 1.4vw, 1rem)",
                      lineHeight: 1.78,
                      flexGrow:   1,
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      color:      hm.blue,
                      fontWeight: 600,
                      fontSize:   "0.9rem",
                      display:    "inline-flex",
                      alignItems: "center",
                      gap:        "4px",
                    }}
                  >
                    بیشتر بخوانید ←
                  </motion.span>
                </motion.a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        style={{
          background: hm.white,
          padding:    "clamp(90px, 14vw, 160px) clamp(20px, 5vw, 60px)",
          textAlign:  "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <FadeUp>
            <h2
              style={{
                fontWeight:    900,
                fontSize:      "clamp(1.875rem, 4.5vw, 3rem)",
                letterSpacing: "-0.03em",
                lineHeight:    1.15,
                color:         hm.ink,
                textWrap:      "balance" as CSSProperties["textWrap"],
                marginBottom:  "clamp(28px, 5vw, 44px)",
              }}
            >
              یک تماس کافی است
            </h2>
          </FadeUp>

          <FadeUp delay={0.12}>
            <motion.a
              href={TEL}
              whileHover={{ scale: 1.02, color: "oklch(0.28 0.155 268)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              style={{
                display:        "block",
                color:          hm.blue,
                fontWeight:     900,
                fontSize:       "clamp(2rem, 8vw, 5rem)",
                letterSpacing:  "-0.02em",
                lineHeight:     1,
                textDecoration: "none",
                fontFamily:     "inherit",
                marginBottom:   "clamp(28px, 5vw, 44px)",
                direction:      "ltr",
                unicodeBidi:    "isolate",
                whiteSpace:     "nowrap",
              }}
            >
              {PHONE_FA}
            </motion.a>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div
              style={{
                display:        "flex",
                gap:            "16px",
                justifyContent: "center",
                flexWrap:       "wrap",
              }}
            >
              <motion.a
                href={TEL}
                whileHover={{ scale: 1.04, boxShadow: `0 8px 40px oklch(0.38 0.195 268 / 0.35)` }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  padding:        "15px 44px",
                  background:     hm.blue,
                  color:          hm.white,
                  borderRadius:   "12px",
                  fontWeight:     700,
                  fontSize:       "1.0625rem",
                  textDecoration: "none",
                  fontFamily:     "inherit",
                  boxShadow:      "0 4px 28px oklch(0.38 0.195 268 / 0.28)",
                }}
              >
                تماس تلفنی
              </motion.a>
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  padding:        "15px 44px",
                  background:     hm.whatsapp,
                  color:          hm.white,
                  borderRadius:   "12px",
                  fontWeight:     700,
                  fontSize:       "1.0625rem",
                  textDecoration: "none",
                  fontFamily:     "inherit",
                  boxShadow:      "0 4px 24px oklch(0 0 0 / 0.14)",
                }}
              >
                پیام واتساپ
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer
        style={{
          background: hm.blueDeep,
          color:      "oklch(0.68 0.040 268)",
          textAlign:  "center",
          padding:    "clamp(28px, 4vw, 40px) clamp(20px, 5vw, 60px)",
          fontSize:   "0.875rem",
          lineHeight: 1.6,
        }}
      >
        طراحی توسط{" "}
        <Link
          href="/"
          style={{ color: hm.blueLight, fontWeight: 600, textDecoration: "none" }}
        >
          حسن شاهمرادی
        </Link>
      </footer>
    </div>
  );
}
