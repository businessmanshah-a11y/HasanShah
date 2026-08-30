"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Flame, Search, Sparkles, Tag } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useI18n } from "../i18n/LanguageProvider";
import { getAllArticles } from "./blog-data";

export default function BlogArchiveContent() {
  const { t, dir, locale } = useI18n();
  const ba = t.blogArchive;
  const articles = getAllArticles(locale);
  const allLabel = locale === "fa" ? "همه" : locale === "ar" ? "الكل" : "All";
  
  const [selectedCategory, setSelectedCategory] = useState<string>(allLabel);
  const [searchQuery, setSearchQuery] = useState<string>("" );

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
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1";

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden" dir={dir}>
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Glow lights */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold/10 blur-[130px] rounded-full" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold mb-6 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{ba.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.25] tracking-tight">
              {ba.titlePlain} <span className="text-gold">{ba.titleAccent}</span>
            </h1>
            <p className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              {ba.desc}
            </p>

            {/* Search & Category Filter */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <div className="relative w-full">
                <Search className={`absolute ${dir === "rtl" ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={ba.searchPlaceholder}
                  className={`w-full rounded-2xl border border-white/10 bg-surface/80 ${
                    dir === "rtl" ? "pr-11 pl-4" : "pl-11 pr-4"
                  } py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all backdrop-blur-md`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className={`absolute ${dir === "rtl" ? "left-3.5" : "right-3.5"} top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground`}
                  >
                    {ba.clearSearch}
                  </button>
                )}
              </div>
            </div>

            {/* Category Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-gradient-gold text-gold-foreground shadow-gold"
                      : "border border-white/10 bg-surface/50 text-muted-foreground hover:border-gold/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {/* Featured Article Card (Shown when not filtering or when matching) */}
          {selectedCategory === allLabel && searchQuery === "" && featuredArticle && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gold">
                <Flame className="h-4 w-4 fill-gold text-gold" />
                <span>{ba.featuredBadge}</span>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-surface/40 backdrop-blur-xl transition-all duration-300 hover:border-gold/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(239,192,123,0.15)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <Link
                    href={`/blog/${featuredArticle.slug}/`}
                    className="relative block aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden min-h-[280px] md:min-h-[360px]"
                  >
                    <Image
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/95 via-background/40 to-transparent" />
                    
                    {/* Floating badge */}
                    <div className={`absolute top-4 ${dir === "rtl" ? "right-4" : "left-4"} z-10`}>
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-gold/40 bg-background/90 px-3.5 py-1.5 text-xs font-bold text-gold backdrop-blur-md shadow-lg">
                        <BookOpen className="h-3.5 w-3.5" />
                        {featuredArticle.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-gold" />
                          {featuredArticle.readTime}
                        </span>
                        <span>•</span>
                        <span>{featuredArticle.publishedDate}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight mb-4 text-foreground group-hover:text-gold transition-colors">
                        <Link href={`/blog/${featuredArticle.slug}/`}>
                          {featuredArticle.title}
                        </Link>
                      </h2>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-4 mb-6">
                        {featuredArticle.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {featuredArticle.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                          >
                            <Tag className="h-2.5 w-2.5 text-gold/70" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA & Author */}
                    <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={`/blog/${featuredArticle.slug}/`}
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-5 py-2.5 text-xs sm:text-sm font-black text-gold-foreground shadow-gold hover:opacity-90 transition-opacity"
                      >
                        <span>{ba.readFullArticle}</span>
                        <Arrow className={`h-4 w-4 transition-transform duration-300 ${arrowHover}`} />
                      </Link>

                      <div className="flex items-center gap-2.5">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gold/40">
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
            </div>
          )}

          {/* Grid of Articles */}
          {gridArticles.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl md:text-2xl font-black">
                  {searchQuery || selectedCategory !== allLabel
                    ? `${ba.searchResultsHeading} (${filteredArticles.length} ${ba.articlesCountSuffix})`
                    : ba.otherArticlesHeading}
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {gridArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-gold/15 bg-surface/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-surface/80 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_24px_rgba(239,192,123,0.12)]"
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
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                      {/* Category Chip */}
                      <div className={`absolute top-3.5 ${dir === "rtl" ? "right-3.5" : "left-3.5"} z-10`}>
                        <span className="inline-flex items-center gap-1 rounded-xl border border-gold/30 bg-background/85 px-3 py-1 text-xs font-bold text-gold backdrop-blur-md shadow-md">
                          <BookOpen className="h-3 w-3" />
                          {article.category}
                        </span>
                      </div>
                    </Link>

                    {/* Body */}
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
                  </article>
                ))}
              </div>
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-20 rounded-3xl border border-dashed border-white/10 bg-surface/20">
              <BookOpen className="h-12 w-12 text-gold/50 mx-auto mb-4" />
              <p className="text-lg font-bold mb-2">{ba.emptyTitle}</p>
              <p className="text-sm text-muted-foreground mb-6">
                {ba.emptyDesc}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(allLabel);
                  setSearchQuery("");
                }}
                className="rounded-xl border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-bold text-gold hover:bg-gold/20"
              >
                {ba.emptyBtn}
              </button>
            </div>
          )}

          {/* Consultation / Lead Banner */}
          <div className="mt-20 rounded-3xl border border-gold/25 bg-gradient-to-br from-surface-elevated via-surface to-background p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />
            <div className="relative max-w-2xl mx-auto">
              <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold text-gold mb-4">
                {ba.ctaBadge}
              </span>
              <h3 className="text-2xl md:text-3xl font-black mb-3">
                {ba.ctaTitle}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {ba.ctaDesc}
              </p>
              <Link
                href="/#form"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-gold px-7 py-3.5 text-sm font-black text-gold-foreground shadow-gold hover:opacity-90 transition-opacity"
              >
                <span>{ba.ctaBtn}</span>
                <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
