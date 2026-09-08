"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Quote,
  Clock,
} from "lucide-react";
import { InstagramIcon, LinkedInIcon, TelegramIcon } from "../components/Icons";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useI18n } from "../i18n/LanguageProvider";
import { ABOUT_DICTIONARIES } from "./about-translations";

export default function AboutContent() {
  const { locale, dir } = useI18n();
  const d = ABOUT_DICTIONARIES[locale] || ABOUT_DICTIONARIES.fa;
  const isRtl = dir === "rtl";
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-background text-foreground selection:bg-gold selection:text-gold-foreground ${
        isRtl ? "font-sans" : "font-sans"
      }`}
    >
      <Nav />

      {/* ── 1. Hero Section ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Main Column: Text & Scarcity Brand Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`lg:col-span-7 space-y-6 ${isRtl ? "text-right" : "text-left"}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{d.hero.badge}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.2]">
                  {d.hero.heading}
                </h1>
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-400 via-gold to-yellow-200 bg-clip-text text-transparent">
                  {d.hero.highlightRole}
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>{d.hero.p1}</p>
                <p>{d.hero.p2}</p>
                <p className="border-s-2 border-gold/50 ps-4 text-foreground/90 font-medium">
                  {d.hero.p3}
                </p>
              </div>

              {/* Action Buttons & Scarcity Badge */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <div className="relative group">
                  <Link
                    href="/contact?service=consultation"
                    className="flex items-center justify-center gap-2.5 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-black text-gold-foreground shadow-gold hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                  >
                    <span>{d.hero.consultBtn}</span>
                    <ArrowForward className="h-4 w-4" />
                  </Link>
                  <div className="mt-1.5 flex items-center justify-center sm:justify-start gap-1 text-[11px] text-gold font-medium">
                    <Clock className="h-3 w-3" />
                    <span>{d.hero.consultBadge}</span>
                  </div>
                </div>

                <Link
                  href="/vibe-coding"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-surface/50 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface hover:border-gold/40 transition-all"
                >
                  <Terminal className="h-4 w-4 text-gold" />
                  <span>{d.hero.vibeBtn}</span>
                </Link>
              </div>

              {/* Social Channels Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/hasanshahmoradi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  <span>{d.hero.socialLinkedin}</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>

                <a
                  href="https://www.instagram.com/shahbusinessman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold text-pink-400 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>{d.hero.socialInstagram}</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>

                <a
                  href="https://t.me/shahbusinessman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold hover:bg-gold/20 transition-all"
                >
                  <TelegramIcon className="h-4 w-4" />
                  <span>{d.hero.socialTelegram}</span>
                </a>
              </div>
            </motion.div>

            {/* Profile Card with Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-sm rounded-3xl border border-gold/30 bg-surface/70 p-6 backdrop-blur-xl shadow-2xl">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-gold/20 to-transparent blur-xl pointer-events-none" />

                {/* Portrait Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 mb-5 shadow-inner">
                  <Image
                    src="/images/Shah2.webp"
                    alt="Hasan Shahmoradi — حسن شاهمرادی"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className={`absolute bottom-4 right-4 left-4 ${isRtl ? "text-right" : "text-left"}`}>
                    <div className="text-xs font-bold text-gold tracking-widest uppercase mb-1">
                      Hasan Shahmoradi
                    </div>
                    <div className="text-lg font-black text-white">
                      {isRtl ? "حسن شاهمرادی" : "Hasan Shahmoradi"}
                    </div>
                    <div className="text-xs text-white/80 mt-0.5">
                      {d.hero.profileRole}
                    </div>
                  </div>
                </div>

                {/* Quick Highlights Grid */}
                <div className={`grid grid-cols-2 gap-2.5 text-xs ${isRtl ? "text-right" : "text-left"}`}>
                  <div className="rounded-xl border border-white/5 bg-background/60 p-3">
                    <div className="font-black text-gold text-base">{d.hero.stat1Value}</div>
                    <div className="text-muted-foreground mt-0.5">{d.hero.stat1Label}</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-background/60 p-3">
                    <div className="font-black text-emerald-400 text-base">{d.hero.stat2Value}</div>
                    <div className="text-muted-foreground mt-0.5">{d.hero.stat2Label}</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-background/60 p-3">
                    <div className="font-black text-blue-400 text-base">{d.hero.stat3Value}</div>
                    <div className="text-muted-foreground mt-0.5">{d.hero.stat3Label}</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-background/60 p-3">
                    <div className="font-black text-pink-400 text-base">{d.hero.stat4Value}</div>
                    <div className="text-muted-foreground mt-0.5">{d.hero.stat4Label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Interactive Timeline Album Section ── */}
      <section className="relative py-20 bg-surface/30 border-t border-b border-gold/10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
              <Calendar className="h-3.5 w-3.5" />
              <span>{d.timeline.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
              {d.timeline.heading}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {d.timeline.description}
            </p>
          </div>

          {/* Timeline Spine Container */}
          <div className="relative">
            {/* Center Line on Desktop / Edge Line on Mobile */}
            <div
              className={`absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-500 via-gold to-emerald-500 opacity-25 ${
                isRtl
                  ? "right-4 md:right-1/2 md:translate-x-1/2"
                  : "left-4 md:left-1/2 md:-translate-x-1/2"
              }`}
            />

            {/* Milestones List */}
            <div className="space-y-16 md:space-y-24">
              {d.milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-full ${
                      isRtl ? "pr-10 sm:pr-12 md:pr-0" : "pl-10 sm:pl-12 md:pl-0"
                    }`}
                  >
                    {/* Glowing Node Dot on the Spine */}
                    <div
                      className={`absolute top-8 md:top-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold bg-[#09090b] shadow-[0_0_20px_rgba(212,175,55,0.7)] ${
                        isRtl
                          ? "right-4 md:right-1/2 transform translate-x-1/2 md:-translate-y-1/2"
                          : "left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-y-1/2"
                      }`}
                    >
                      <div className="h-3 w-3 rounded-full bg-gold animate-pulse" />
                    </div>

                    {/* 2-Column Grid: Exactly Equal Heights on Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-stretch">
                      {/* Visual Album Photo Card */}
                      <div
                        className={`relative w-full h-full min-h-[300px] sm:min-h-[360px] md:min-h-[440px] rounded-3xl overflow-hidden border border-gold/30 bg-surface/60 backdrop-blur-xl shadow-2xl group flex flex-col justify-between ${
                          isEven
                            ? isRtl
                              ? "order-1 md:order-2 md:ps-4 lg:ps-6"
                              : "order-1 md:order-2 md:pe-4 lg:pe-6"
                            : isRtl
                            ? "order-1 md:order-1 md:pe-4 lg:pe-6"
                            : "order-1 md:order-1 md:ps-4 lg:ps-6"
                        }`}
                      >
                        {/* Background Photo */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src={m.image.src}
                            alt={m.image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            priority={idx === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/15 transition-opacity group-hover:opacity-85" />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Top Badge & External Link */}
                        <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/75 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold text-gold shadow-lg">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>{m.image.tag}</span>
                          </span>

                          {m.image.externalLink && (
                            <a
                              href={m.image.externalLink}
                              target={m.image.externalLink.startsWith("http") ? "_blank" : undefined}
                              rel={m.image.externalLink.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white/90 hover:border-gold hover:text-gold transition-colors shadow-lg"
                            >
                              <span>{m.image.externalLinkLabel || "Source"}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>

                        {/* Bottom Caption & Station Marker */}
                        <div
                          className={`relative z-10 p-5 sm:p-6 space-y-1.5 border-t border-white/10 bg-black/70 backdrop-blur-md ${
                            isRtl ? "text-right" : "text-left"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-bold text-gold tracking-wider">
                              {d.timeline.imageDocPrefix} {idx + 1}
                            </span>
                            <span className="text-[10px] text-white/60 font-mono" dir="ltr">
                              {m.year}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed drop-shadow-sm">
                            {m.image.caption}
                          </p>
                        </div>
                      </div>

                      {/* Story Content Card */}
                      <div
                        className={`w-full flex flex-col justify-between ${
                          isEven
                            ? isRtl
                              ? "order-2 md:order-1 md:pe-4 lg:pe-6"
                              : "order-2 md:order-1 md:ps-4 lg:ps-6"
                            : isRtl
                            ? "order-2 md:order-2 md:ps-4 lg:ps-6"
                            : "order-2 md:order-2 md:pe-4 lg:pe-6"
                        }`}
                      >
                        <div
                          className={`h-full flex flex-col justify-between rounded-3xl border bg-gradient-to-b p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all hover:border-gold/50 from-surface/80 to-surface/40 border-gold/20 ${
                            isRtl ? "text-right" : "text-left"
                          }`}
                        >
                          <div>
                            {/* Header */}
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                              <span className="rounded-full border border-gold/40 bg-gold/10 text-gold px-3 py-0.5 text-[11px] font-bold">
                                {m.badge}
                              </span>
                              <span className="font-mono text-xs text-muted-foreground" dir="ltr">
                                {m.year}
                              </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-black text-foreground mb-1.5">
                              {m.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-foreground/80 mb-4 leading-relaxed">
                              {m.subtitle}
                            </p>

                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                              {m.description}
                            </p>

                            {/* Quote Box */}
                            {m.quote && (
                              <div className="relative rounded-2xl border border-white/10 bg-background/60 p-4 mb-5 text-xs sm:text-sm text-foreground/90 italic leading-relaxed">
                                <Quote
                                  className={`h-4 w-4 text-gold/60 mb-1 inline-block ${
                                    isRtl ? "-scale-x-100 me-2" : "me-2"
                                  }`}
                                />
                                <span>{m.quote}</span>
                              </div>
                            )}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mt-auto">
                            {m.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-lg bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground border border-white/5"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Brand Principles & Scarcity Matrix Section ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
              <Cpu className="h-3.5 w-3.5" />
              <span>{d.philosophy.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
              {d.philosophy.heading}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {d.philosophy.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {d.philosophy.cards.map((card, cIdx) => (
              <div
                key={cIdx}
                className={`relative rounded-3xl border border-gold/20 bg-surface/50 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:bg-surface/80 hover:-translate-y-1 shadow-lg flex flex-col justify-between ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      {card.iconType === "trending" && <TrendingUp className="h-5 w-5" />}
                      {card.iconType === "shield" && <ShieldCheck className="h-5 w-5 text-emerald-400" />}
                      {card.iconType === "terminal" && <Terminal className="h-5 w-5 text-blue-400" />}
                    </div>
                    <span className="font-mono text-xs text-gold/60 font-bold" dir="ltr">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-gold font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>تعهد کیفیت برند شاهمرادی</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Strategic Bottom Call To Action ── */}
      <section className="relative py-20 bg-surface/40 border-t border-gold/20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-60" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{d.cta.waitlistBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground max-w-2xl mx-auto leading-snug">
            {d.cta.heading}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {d.cta.description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-black text-gold-foreground shadow-gold hover:-translate-y-0.5 active:translate-y-0 transition-transform"
            >
              <span>{d.cta.primaryBtn}</span>
              <ArrowForward className="h-4 w-4" />
            </Link>

            <Link
              href="/vibe-coding"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-sm font-bold text-gold hover:bg-gold/20 hover:border-gold transition-all"
            >
              <span>{d.cta.secondaryBtn}</span>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground pt-2">
            {d.cta.secondarySub}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
