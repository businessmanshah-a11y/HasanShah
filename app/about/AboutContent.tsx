"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  GraduationCap,
  Award,
  BookOpen,
  Check,
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

  const [activeEduStep, setActiveEduStep] = useState<number>(0);

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
        {/* Ambient Warm & Deep Navy Glows (No random bright colors) */}
        <div className="pointer-events-none absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-[#111c30]/40 blur-[140px]" />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Main Column: Text & Scarcity Brand Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`lg:col-span-7 space-y-6 ${isRtl ? "text-right" : "text-left"}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{d.hero.badge}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.2]">
                  {d.hero.heading}
                </h1>
                <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-amber-300 via-gold to-yellow-200 bg-clip-text text-transparent">
                  {d.hero.highlightRole}
                </p>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>{d.hero.p1}</p>
                <p>{d.hero.p2}</p>
                <p className="border-s-2 border-gold/60 ps-3.5 text-foreground/90 font-medium">
                  {d.hero.p3}
                </p>
              </div>

              {/* Action Buttons: Clean & Punchy */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-black text-gold-foreground shadow-gold hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                >
                  <span>{d.hero.consultBtn}</span>
                  <ArrowForward className="h-4 w-4" />
                </Link>

                <Link
                  href="/vibe-coding"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-surface/50 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface hover:border-gold/40 transition-all"
                >
                  <Terminal className="h-4 w-4 text-gold" />
                  <span>{d.hero.vibeBtn}</span>
                </Link>
              </div>

              {/* Micro badge under buttons */}
              <div className="flex items-center gap-1.5 text-xs text-gold/80 font-medium pt-0.5">
                <Clock className="h-3.5 w-3.5 text-gold" />
                <span>{d.hero.consultBadge}</span>
              </div>
            </motion.div>

            {/* Profile Card & Highlights (Luxury Monochromatic Gold/Navy) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-sm rounded-3xl border border-gold/25 bg-surface/70 p-5 sm:p-6 backdrop-blur-xl shadow-2xl space-y-4">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-gold/15 to-transparent blur-xl pointer-events-none" />

                {/* Portrait Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 shadow-inner">
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
                    <div className="text-[11px] font-bold text-gold tracking-widest uppercase mb-0.5">
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

                {/* Quick Highlights Grid (Harmonized Luxury Gold & Slate) */}
                <div className={`grid grid-cols-2 gap-2 text-xs ${isRtl ? "text-right" : "text-left"}`}>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-gold/30 transition-colors">
                    <div className="font-black text-gold text-base">{d.hero.stat1Value}</div>
                    <div className="text-white/60 text-[11px] mt-0.5">{d.hero.stat1Label}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-gold/30 transition-colors">
                    <div className="font-black text-gold text-base">{d.hero.stat2Value}</div>
                    <div className="text-white/60 text-[11px] mt-0.5">{d.hero.stat2Label}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-gold/30 transition-colors">
                    <div className="font-black text-gold text-base">{d.hero.stat3Value}</div>
                    <div className="text-white/60 text-[11px] mt-0.5">{d.hero.stat3Label}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-gold/30 transition-colors">
                    <div className="font-black text-gold text-base">{d.hero.stat4Value}</div>
                    <div className="text-white/60 text-[11px] mt-0.5">{d.hero.stat4Label}</div>
                  </div>
                </div>

                {/* Social Channels: Compact & Elegant Row */}
                <div className="flex items-center justify-center gap-2 pt-1 border-t border-white/5">
                  <a
                    href="https://www.linkedin.com/in/hasanshahmoradi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                    <span>{d.hero.socialLinkedin}</span>
                  </a>

                  <a
                    href="https://www.instagram.com/shahbusinessman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all"
                  >
                    <InstagramIcon className="h-3.5 w-3.5 text-[#e4405f]" />
                    <span>{d.hero.socialInstagram}</span>
                  </a>

                  <a
                    href="https://t.me/shahbusinessman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all"
                  >
                    <TelegramIcon className="h-3.5 w-3.5 text-[#229ed9]" />
                    <span>{d.hero.socialTelegram}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Interactive Career Timeline Album Section ── */}
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
              className={`absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold/20 via-gold/50 to-gold/20 opacity-40 ${
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
                              {d.timeline.imageDocPrefix} {locale === "fa" ? (idx + 1).toLocaleString("fa-IR") : idx + 1}
                            </span>
                            <span className="text-[11px] text-white/70 font-semibold">
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
                              <span className="text-xs text-muted-foreground font-semibold">
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
                                  className={`h-4 w-4 text-gold/70 mb-1 inline-block ${
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

      {/* ── 3. Educational & Learning Journey Section (NEW) ── */}
      <section className="relative py-20 bg-background border-b border-gold/15 overflow-hidden">
        {/* Subtle Ambient Navy/Gold Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-gold/5 blur-[160px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>{d.education.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
              {d.education.heading}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {d.education.subtitle}
            </p>
          </div>

          {/* Core Learning Philosophy Quote */}
          <div className="relative mx-auto max-w-3xl rounded-2xl border border-gold/25 bg-surface/60 p-5 sm:p-6 backdrop-blur-md mb-14 shadow-lg">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-gold/10 border border-gold/30 shrink-0 text-gold mt-0.5">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm md:text-base font-medium text-foreground/95 italic leading-relaxed">
                  {d.education.quoteHighlight}
                </p>
                <div className="text-xs font-bold text-gold">
                  — {d.education.quoteAuthor}
                </div>
              </div>
            </div>
          </div>

          {/* ── DESKTOP: Interactive Horizontal Roadmap Track ── */}
          <div className="hidden md:block">
            {/* Horizontal Timeline Connector Bar with Dots */}
            <div className="relative mb-10">
              {/* Connecting glowing track */}
              <div className="absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />

              <div className="grid grid-cols-4 gap-4 relative z-10">
                {d.education.steps.map((st, sIdx) => {
                  const isActive = activeEduStep === sIdx;
                  return (
                    <div
                      key={sIdx}
                      onClick={() => setActiveEduStep(sIdx)}
                      onMouseEnter={() => setActiveEduStep(sIdx)}
                      className="flex flex-col items-center text-center cursor-pointer group"
                    >
                      {/* Dot Node */}
                      <div
                        className={`h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "border-gold bg-gold text-gold-foreground scale-110 shadow-[0_0_25px_rgba(212,175,55,0.6)]"
                            : "border-gold/40 bg-[#0c121e] text-gold/70 group-hover:border-gold group-hover:scale-105"
                        }`}
                      >
                        <span className="text-sm font-black">{st.step}</span>
                      </div>

                      {/* Step Badge & Year */}
                      <span
                        className={`text-xs font-bold mt-3 transition-colors ${
                          isActive ? "text-gold" : "text-white/80 group-hover:text-gold"
                        }`}
                      >
                        {st.badge}
                      </span>
                      <span className="text-[11px] text-white/50 font-medium mt-0.5">
                        {st.year}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4 Cards Grid with Active Highlight */}
            <div className="grid grid-cols-4 gap-4 items-stretch">
              {d.education.steps.map((st, sIdx) => {
                const isActive = activeEduStep === sIdx;
                return (
                  <div
                    key={sIdx}
                    onClick={() => setActiveEduStep(sIdx)}
                    onMouseEnter={() => setActiveEduStep(sIdx)}
                    className={`rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? "border-gold/70 bg-surface/90 shadow-[0_8px_30px_rgba(0,0,0,0.6)] -translate-y-1.5"
                        : "border-white/10 bg-surface/40 hover:border-gold/30 hover:bg-surface/60"
                    } ${isRtl ? "text-right" : "text-left"}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-gold/10 border border-gold/30 px-2 py-0.5 rounded-md">
                          {st.institution}
                        </span>
                        <span className="text-xs text-white/60 font-medium">
                          {st.year}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-black text-foreground leading-snug">
                        {st.title}
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {st.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-start gap-1.5 text-[11px] text-gold font-medium">
                      <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{st.takeaway}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── MOBILE: Clean Vertical Stepped Timeline ── */}
          <div className="block md:hidden">
            <div
              className={`relative space-y-6 ${
                isRtl
                  ? "pe-1 pr-10 before:absolute before:top-2 before:bottom-2 before:right-3.5 before:w-0.5 before:bg-gradient-to-b before:from-gold/60 before:via-gold/30 before:to-transparent"
                  : "ps-1 pl-10 before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-gold/60 before:via-gold/30 before:to-transparent"
              }`}
            >
              {d.education.steps.map((st, sIdx) => (
                <div key={sIdx} className="relative group">
                  {/* Glowing Node on Line */}
                  <div
                    className={`absolute top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-gold bg-[#0c121e] text-[11px] font-bold text-gold shadow-[0_0_12px_rgba(212,175,55,0.5)] ${
                      isRtl ? "right-0" : "left-0"
                    }`}
                  >
                    {st.step}
                  </div>

                  {/* Card Content */}
                  <div
                    className={`rounded-2xl border border-gold/25 bg-surface/60 p-4 space-y-2.5 backdrop-blur-md ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded-md">
                        {st.badge}
                      </span>
                      <span className="text-[11px] text-white/60 font-medium">
                        {st.year}
                      </span>
                    </div>

                    <div className="text-[11px] text-white/60 font-semibold">
                      {st.institution}
                    </div>

                    <h3 className="text-sm font-black text-foreground leading-snug">
                      {st.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {st.description}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-start gap-1.5 text-[11px] text-gold font-medium">
                      <Check className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                      <span>{st.takeaway}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Brand Principles & Scarcity Matrix Section ── */}
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
                      {card.iconType === "shield" && <ShieldCheck className="h-5 w-5" />}
                      {card.iconType === "terminal" && <Terminal className="h-5 w-5" />}
                    </div>
                    <span className="text-xs text-gold/80 font-black">
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
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                  <span>تعهد کیفیت برند شاهمرادی</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4.5 Bridge to Portfolio (Proof of Work) ── */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-background via-surface/40 to-surface/20 border-t border-gold/15">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-r from-surface/90 via-surface/70 to-surface/90 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            {/* Ambient gold glow */}
            <div className="pointer-events-none absolute -top-20 end-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className={`space-y-3 flex-1 ${isRtl ? "text-right" : "text-left"}`}>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold text-gold">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  <span>{d.portfolioBridge.badge}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-snug">
                  {d.portfolioBridge.heading}
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {d.portfolioBridge.description}
                </p>

                <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-gold/90">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span>{d.portfolioBridge.statBadge}</span>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Link
                  href="/portfolio"
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-black text-gold-foreground shadow-gold hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>{d.portfolioBridge.btnText}</span>
                  <ArrowForward className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Strategic Bottom Call To Action ── */}
      <section className="relative py-20 bg-surface/40 border-t border-gold/20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-60" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-6">
          {/* Waitlist Scarcity Badge (Gold/Amber, No Emerald Green) */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
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
              href="/contact"
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
