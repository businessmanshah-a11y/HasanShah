"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";
import { getFeaturedArticles } from "../blog/blog-data";

export default function LatestArticles() {
  const { t, dir, locale } = useI18n();
  const articles = getFeaturedArticles(locale).slice(0, 3);
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1.5" : "group-hover:translate-x-1.5";

  return (
    <section id="articles" className="relative py-16 md:py-24 overflow-hidden" dir={dir}>
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            {/* Eyebrow badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3.5 py-1 text-xs font-bold text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.latestArticles.badge}</span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight md:text-4xl lg:text-5xl">
              <Highlight text={t.latestArticles.title} />
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
              {t.latestArticles.desc}
            </p>
          </div>

          {/* Desktop "View All" Button */}
          <Link
            href="/blog/"
            className="group hidden md:inline-flex items-center gap-2 self-end rounded-2xl border border-gold/25 bg-surface/80 px-5 py-3 text-sm font-black text-gold hover:border-gold/60 hover:bg-gold/10 transition-all duration-300 shadow-sm"
          >
            <span>{t.latestArticles.viewAll}</span>
            <Arrow className={`h-4 w-4 transition-transform duration-300 ${arrowHover}`} />
          </Link>
        </div>

        {/* 3-Card Responsive Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-gold/15 bg-surface/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-surface/80 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_24px_rgba(239,192,123,0.12)]"
            >
              {/* Card Image Container */}
              <Link href={`/blog/${article.slug}/`} className="relative block aspect-[16/9] w-full overflow-hidden bg-surface-elevated">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Category Chip over Image */}
                <div className={`absolute top-3.5 ${dir === "rtl" ? "right-3.5" : "left-3.5"} z-10`}>
                  <span className="inline-flex items-center gap-1 rounded-xl border border-gold/30 bg-background/85 px-3 py-1 text-xs font-bold text-gold backdrop-blur-md shadow-md">
                    <BookOpen className="h-3 w-3" />
                    {article.category}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                {/* Meta info: Read time and Date */}
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-gold/80" />
                    {article.readTime}
                  </span>
                  <span>•</span>
                  <span>{article.publishedDate}</span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg md:text-xl font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-gold">
                  <Link href={`/blog/${article.slug}/`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mb-6 flex-1 text-xs md:text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">
                  {article.summary}
                </p>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/blog/${article.slug}/`}
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-black text-gold transition-colors hover:text-gold-bright"
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

        {/* Mobile "View All" Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-gold/30 bg-surface/90 px-6 py-3.5 text-sm font-black text-gold shadow-md"
          >
            <span>{t.latestArticles.viewAll}</span>
            <Arrow className={`h-4 w-4 transition-transform duration-300 ${arrowHover}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
