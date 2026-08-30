"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Flame,
  Search,
  Sparkles,
  Tag,
  X,
} from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useI18n } from "../i18n/LanguageProvider";
import { getAllArticles } from "./blog-data";

// Spring transitions for natural fluid motion
const springTransition = { type: "spring" as const, stiffness: 120, damping: 20 };
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

export default function BlogArchiveContent() {
  const { t, dir, locale } = useI18n();
  const ba = t.blogArchive;
  const articles = getAllArticles(locale);
  const allLabel = locale === "fa" ? "همه" : locale === "ar" ? "الكل" : "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(allLabel);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Reset category on locale change
  useEffect(() => {
    setSelectedCategory(allLabel);
  }, [allLabel]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add(allLabel);
    articles.forEach((a) => cats.add(a.category));
    return Array.from(cats);
  }, [articles, allLabel]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === allLabel || article.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tg) => tg.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery, allLabel]);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const gridArticles = filteredArticles.filter((a) =>
    selectedCategory === allLabel && searchQuery === "" ? a.slug !== featuredArticle?.slug : true
  );

  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1.5" : "group-hover:translate-x-1.5";

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden" dir={dir}>
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gold/15 blur-[160px] rounded-full" />
        <div className="pointer-events-none absolute top-1/2 right-10 w-[400px] h-[400px] bg-navy/30 blur-[140px] rounded-full" />

        <div className="container mx-auto px-4 relative max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            {/* Pill Badge */}
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur-xl shadow-[0_4px_20px_rgba(239,192,123,0.15)]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{ba.badge}</span>
              </div>
            </motion.div>

            {/* Display Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.2] tracking-tight text-foreground max-w-4xl mx-auto"
              style={{ textWrap: "balance" }}
            >
              {ba.titlePlain} <span className="text-gold bg-gradient-to-r from-gold via-gold-bright to-gold bg-clip-text text-transparent">{ba.titleAccent}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto font-normal"
            >
              {ba.desc}
            </motion.p>

            {/* Search Input */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 max-w-xl mx-auto"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 opacity-50 blur-sm group-hover:opacity-100 transition duration-500" />
                <div className="relative flex items-center rounded-2xl border border-gold/30 bg-surface/80 shadow-2xl backdrop-blur-xl">
                  <Search
                    className={`absolute ${
                      dir === "rtl" ? "right-4" : "left-4"
                    } h-5 w-5 text-gold/80 pointer-events-none`}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={ba.searchPlaceholder}
                    className={`w-full bg-transparent py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none ${
                      dir === "rtl" ? "pr-12 pl-12" : "pl-12 pr-12"
                    }`}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className={`absolute ${
                        dir === "rtl" ? "left-3.5" : "right-3.5"
                      } rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors`}
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Category Filter Tabs */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "text-gold-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 rounded-2xl bg-gradient-gold shadow-gold"
                        transition={springTransition}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-28">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Featured Article Card (Shown when not searching or in 'All' category) */}
          {selectedCategory === allLabel && searchQuery === "" && featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gold">
                <Flame className="h-4 w-4 fill-gold text-gold" />
                <span>{ba.featuredBadge}</span>
              </div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-gold/30 bg-surface/50 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(239,192,123,0.12)] transition-all duration-500 hover:border-gold/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(239,192,123,0.2)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Container */}
                  <Link
                    href={`/blog/${featuredArticle.slug}/`}
                    className="relative block aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden min-h-[300px] md:min-h-[400px]"
                  >
                    <Image
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/30 to-transparent" />

                    {/* Category floating chip */}
                    <div className={`absolute top-5 ${dir === "rtl" ? "right-5" : "left-5"} z-10`}>
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-gold/40 bg-background/90 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur-md shadow-xl">
                        <BookOpen className="h-3.5 w-3.5" />
                        {featuredArticle.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content Info */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                      {/* Meta reading time & date */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span className="inline-flex items-center gap-1 font-medium">
                          <Clock className="h-3.5 w-3.5 text-gold" />
                          {featuredArticle.readTime}
                        </span>
                        <span>•</span>
                        <span>{featuredArticle.publishedDate}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black leading-snug mb-4 text-foreground group-hover:text-gold transition-colors duration-300">
                        <Link href={`/blog/${featuredArticle.slug}/`}>
                          {featuredArticle.title}
                        </Link>
                      </h2>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-6">
                        {featuredArticle.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {featuredArticle.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground/80"
                          >
                            <Tag className="h-2.5 w-2.5 text-gold/70" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA & Author */}
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={`/blog/${featuredArticle.slug}/`}
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-xs sm:text-sm font-black text-gold-foreground shadow-gold hover:opacity-95 hover:shadow-gold-lg transition-all duration-300"
                      >
                        <span>{ba.readFullArticle}</span>
                        <Arrow className={`h-4 w-4 transition-transform duration-300 ${arrowHover}`} />
                      </Link>

                      <div className="flex items-center gap-2.5">
                        <div className="relative h-9 w-9 overflow-hidden rounded-full border border-gold/40 shadow-inner">
                          <Image
                            src={featuredArticle.author.avatar}
                            alt={featuredArticle.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-semibold text-foreground/90">
                          {featuredArticle.author.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of Other Articles */}
          {gridArticles.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl md:text-2xl font-black text-foreground">
                  {searchQuery || selectedCategory !== allLabel
                    ? `${ba.searchResultsHeading} (${filteredArticles.length} ${ba.articlesCountSuffix})`
                    : ba.otherArticlesHeading}
                </h3>
              </div>

              <motion.div
                layout
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence>
                  {gridArticles.map((article) => (
                    <motion.article
                      key={article.slug}
                      layout
                      variants={fadeInUp}
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                      className="group relative flex flex-col overflow-hidden rounded-3xl border border-gold/20 bg-surface/50 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-gold/50 hover:bg-surface/80 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_25px_rgba(239,192,123,0.15)]"
                    >
                      {/* Image Container */}
                      <Link
                        href={`/blog/${article.slug}/`}
                        className="relative block aspect-[16/9] w-full overflow-hidden bg-surface-elevated"
                      >
                        <Image
                          src={article.coverImage}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                        {/* Category badge */}
                        <div className={`absolute top-3.5 ${dir === "rtl" ? "right-3.5" : "left-3.5"} z-10`}>
                          <span className="inline-flex items-center gap-1 rounded-xl border border-gold/30 bg-background/90 px-3 py-1 text-xs font-bold text-gold backdrop-blur-md shadow-md">
                            <BookOpen className="h-3 w-3" />
                            {article.category}
                          </span>
                        </div>
                      </Link>

                      {/* Body Content */}
                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-gold/80" />
                            {article.readTime}
                          </span>
                          <span>•</span>
                          <span>{article.publishedDate}</span>
                        </div>

                        <h4 className="mb-3 text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-gold">
                          <Link href={`/blog/${article.slug}/`}>
                            {article.title}
                          </Link>
                        </h4>

                        <p className="mb-6 flex-1 text-xs sm:text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">
                          {article.summary}
                        </p>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                          <Link
                            href={`/blog/${article.slug}/`}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-gold hover:text-gold-bright transition-colors"
                          >
                            <span>{t.latestArticles.readMore}</span>
                            <Arrow className={`h-4 w-4 transition-transform duration-300 ${arrowHover}`} />
                          </Link>

                          <span className="text-[11px] text-muted-foreground/60 font-medium">
                            {article.author.name}
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={springTransition}
              className="text-center py-20 rounded-3xl border border-dashed border-gold/30 bg-surface/20 backdrop-blur-md"
            >
              <BookOpen className="h-12 w-12 text-gold/60 mx-auto mb-4" />
              <p className="text-lg font-bold mb-2 text-foreground">{ba.emptyTitle}</p>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                {ba.emptyDesc}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(allLabel);
                  setSearchQuery("");
                }}
                className="rounded-xl border border-gold/40 bg-gold/15 px-6 py-2.5 text-xs font-bold text-gold hover:bg-gold hover:text-gold-foreground transition-all shadow-gold"
              >
                {ba.emptyBtn}
              </button>
            </motion.div>
          )}

          {/* Consultation / Conversion Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-surface-elevated via-surface to-background p-8 md:p-14 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-gold/15 rounded-full blur-[110px]" />
            <div className="pointer-events-none absolute -left-20 -top-20 w-80 h-80 bg-navy/40 rounded-full blur-[110px]" />

            <div className="relative max-w-2xl mx-auto">
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold mb-5 shadow-sm">
                {ba.ctaBadge}
              </span>
              <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tight leading-snug">
                {ba.ctaTitle}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                {ba.ctaDesc}
              </p>
              <Link
                href="/#form"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-gold px-8 py-4 text-sm font-black text-gold-foreground shadow-gold hover:shadow-gold-lg hover:opacity-95 transition-all duration-300"
              >
                <span>{ba.ctaBtn}</span>
                <Arrow className={`h-4 w-4 transition-transform duration-300 ${arrowHover}`} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
