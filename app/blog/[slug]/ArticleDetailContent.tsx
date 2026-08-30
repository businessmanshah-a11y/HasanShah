"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Copy,
  Info,
  Lightbulb,
  Quote,
  Sparkles,
  Tag,
} from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ShareButtons from "../../components/ShareButtons";
import { useI18n } from "../../i18n/LanguageProvider";
import { getArticleBySlug, getRelatedArticles, type Article } from "../blog-data";
import { toast } from "sonner";

interface Props {
  initialArticle: Article;
}

export default function ArticleDetailContent({ initialArticle }: Props) {
  const { t, dir, locale } = useI18n();
  const bd = t.blogDetail;
  const article = getArticleBySlug(initialArticle.slug, locale) || initialArticle;
  const relatedArticles = getRelatedArticles(article.slug, locale);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<string | null>(null);

  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1";

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(id);
    toast.success(bd.copiedCodeToast);
    setTimeout(() => setCopiedCodeIndex(null), 2500);
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden" dir={dir}>
      <Nav />

      {/* Article Hero */}
      <header className="relative pt-28 md:pt-36 pb-12 overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[150px] rounded-full" />

        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors">
              {bd.home}
            </Link>
            <ChevronRight className={`h-3.5 w-3.5 ${dir === "rtl" ? "rotate-180" : ""} text-muted-foreground/50`} />
            <Link href="/blog/" className="hover:text-gold transition-colors">
              {bd.tutorials}
            </Link>
            <ChevronRight className={`h-3.5 w-3.5 ${dir === "rtl" ? "rotate-180" : ""} text-muted-foreground/50`} />
            <span className="text-gold/90 font-medium truncate max-w-[200px] sm:max-w-none">
              {article.category}
            </span>
          </nav>

          {/* Category Chip & Read Time */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-xl border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold text-gold shadow-sm">
              <BookOpen className="h-3.5 w-3.5" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-gold/80" />
              {article.readTime}
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{article.publishedDate}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-[1.3] md:leading-[1.25] tracking-tight mb-6 text-foreground">
            {article.title}
          </h1>

          {/* Lead Summary */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground/95 mb-8">
            {article.summary}
          </p>

          {/* Author bar & Share button */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/40 shadow-sm">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{article.author.name}</p>
                <p className="text-xs text-muted-foreground">{article.author.role}</p>
              </div>
            </div>

            {/* Quick Share Buttons */}
            <ShareButtons title={article.title} summary={article.summary} />
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 max-w-5xl pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <article className="lg:col-span-8 space-y-12">
            {/* Table of Contents (Mobile / In-line) */}
            {article.toc && article.toc.length > 0 && (
              <div className="rounded-2xl border border-gold/25 bg-surface/50 p-5 md:p-6 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 text-gold font-bold text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>{bd.tocHeading}</span>
                </div>
                <ul className="space-y-2 text-xs md:text-sm">
                  {article.toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-muted-foreground hover:text-gold hover:underline transition-colors flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/70 shrink-0" />
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections */}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-5">
                <h2 className={`text-xl md:text-2xl lg:text-3xl font-black text-foreground ${dir === "rtl" ? "border-r-4 pr-3" : "border-l-4 pl-3"} border-gold leading-snug`}>
                  {section.title}
                </h2>

                {section.lead && (
                  <p className="text-sm md:text-base font-semibold leading-loose text-foreground/90">
                    {section.lead}
                  </p>
                )}

                {section.paragraphs?.map((p, idx) => (
                  <p key={idx} className="text-sm md:text-base leading-loose text-muted-foreground">
                    {p}
                  </p>
                ))}

                {/* Bullet points */}
                {section.bulletPoints && (
                  <ul className="space-y-3 pt-2">
                    {section.bulletPoints.map((item, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-xs md:text-sm leading-relaxed text-muted-foreground rounded-xl border border-white/5 bg-surface/30 p-3.5"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-gold shadow-gold" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Table */}
                {section.table && (
                  <div className="overflow-x-auto rounded-2xl border border-gold/20 bg-surface/40 my-6 shadow-md">
                    <table className={`w-full ${dir === "rtl" ? "text-right" : "text-left"} text-xs md:text-sm`}>
                      <thead className="bg-surface-elevated text-gold border-b border-gold/20">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3.5 px-4 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-3 px-4 text-muted-foreground">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Code Snippets */}
                {section.codeSnippets?.map((snippet, sIdx) => {
                  const snippetId = `${section.id}-${sIdx}`;
                  const isCopied = copiedCodeIndex === snippetId;
                  return (
                    <div
                      key={sIdx}
                      className="rounded-2xl border border-gold/20 bg-[#0c101c] overflow-hidden my-6 shadow-xl"
                    >
                      <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 text-xs">
                        <span className="font-mono text-gold/90 font-medium">
                          {snippet.title || snippet.language || "Code"}
                        </span>
                        <button
                          onClick={() => handleCopyCode(snippet.code, snippetId)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground hover:text-foreground hover:border-gold/40 transition-colors"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">{bd.copied}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>{bd.copy}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono leading-relaxed text-zinc-300 direction-ltr text-left">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  );
                })}

                {/* Callout */}
                {section.callout && (
                  <div
                    className={`rounded-2xl p-5 my-6 flex items-start gap-3.5 border ${
                      section.callout.type === "tip"
                        ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-200"
                        : section.callout.type === "warning"
                        ? "border-amber-500/30 bg-amber-950/20 text-amber-200"
                        : section.callout.type === "quote"
                        ? "border-gold/40 bg-gold/10 text-gold-foreground"
                        : "border-blue-500/30 bg-blue-950/20 text-blue-200"
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {section.callout.type === "tip" && <Lightbulb className="h-5 w-5 text-emerald-400" />}
                      {section.callout.type === "quote" && <Quote className="h-5 w-5 text-gold" />}
                      {section.callout.type === "warning" && <Info className="h-5 w-5 text-amber-400" />}
                      {section.callout.type === "info" && <Info className="h-5 w-5 text-blue-400" />}
                    </div>
                    <div className="text-xs md:text-sm leading-relaxed">
                      {section.callout.title && (
                        <p className="font-bold mb-1 text-foreground">{section.callout.title}</p>
                      )}
                      <p className="text-muted-foreground">{section.callout.text}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Takeaways Section */}
            {article.takeaways && article.takeaways.length > 0 && (
              <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-surface-elevated via-surface to-background p-6 sm:p-8 mt-12 shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold shadow-gold text-gold-foreground">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-foreground">
                    {bd.takeawaysHeading}
                  </h3>
                </div>

                <div className="space-y-3">
                  {article.takeaways.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 rounded-2xl border border-gold/15 bg-background/60 p-4"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-black">
                        {idx + 1}
                      </span>
                      <p className="text-xs md:text-sm leading-loose text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Share Box */}
            <div className="rounded-3xl border border-gold/20 bg-surface/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-foreground">
                  {locale === "fa"
                    ? "این آموزش برایت مفید بود؟ با دیگران به اشتراک بذار:"
                    : locale === "ar"
                    ? "هل كان هذا الدرس مفيداً لك؟ شاركه مع الآخرين:"
                    : "Found this guide helpful? Share it with others:"}
                </p>
              </div>
              <ShareButtons title={article.title} summary={article.summary} showLabel={false} />
            </div>

            {/* Tags */}
            <div className="pt-4">
              <p className="text-xs font-bold text-muted-foreground mb-3">{bd.tagsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-surface px-3 py-1.5 text-xs text-muted-foreground hover:border-gold/30 hover:text-gold transition-colors"
                  >
                    <Tag className="h-3 w-3 text-gold/70" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="rounded-3xl border border-gold/20 bg-surface/50 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-gold/40 shadow-md">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={`text-center ${dir === "rtl" ? "sm:text-right" : "sm:text-left"} flex-1`}>
                <p className="text-xs text-gold font-bold mb-1">{bd.aboutAuthor}</p>
                <h4 className="text-base font-black text-foreground mb-2">{article.author.name}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                  {article.author.bio || article.author.role}
                </p>
                <Link
                  href="/#form"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-gold hover:underline"
                >
                  <span>{bd.bookConsultation}</span>
                  <Arrow className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar on Desktop */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            {/* Table of Contents sticky card */}
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl border border-gold/20 bg-surface/60 p-6 backdrop-blur-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4 text-gold font-bold text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>{bd.tocHeading}</span>
                </div>
                <nav className="space-y-2 text-xs">
                  {article.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block py-1.5 text-muted-foreground hover:text-gold transition-colors leading-relaxed"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Consultation Card Widget */}
              <div className="rounded-3xl border border-gold/25 bg-gradient-to-br from-surface-elevated to-surface p-6 shadow-xl relative overflow-hidden">
                <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                <span className="inline-block rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-gold mb-3">
                  {bd.sidebarWidgetBadge}
                </span>
                <h4 className="text-base font-black text-foreground mb-2">
                  {bd.sidebarWidgetTitle}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                  {bd.sidebarWidgetDesc}
                </p>
                <Link
                  href="/#form"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold py-2.5 text-xs font-black text-gold-foreground shadow-gold hover:opacity-90 transition-opacity"
                >
                  <span>{bd.sidebarWidgetBtn}</span>
                  <Arrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-24 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs text-gold font-bold mb-1">{bd.relatedHeading}</p>
                <h3 className="text-xl md:text-2xl font-black">{bd.relatedSubtitle}</h3>
              </div>
              <Link
                href="/blog/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
              >
                <span>{bd.viewAll}</span>
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.slug}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-gold/15 bg-surface/40 hover:border-gold/40 hover:bg-surface/70 transition-all p-4 gap-4"
                >
                  <div className="relative aspect-[16/10] sm:w-40 sm:h-28 shrink-0 overflow-hidden rounded-xl bg-surface-elevated">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-gold">{rel.category}</span>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-gold transition-colors line-clamp-2 mt-1 mb-2">
                        <Link href={`/blog/${rel.slug}/`}>{rel.title}</Link>
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{rel.readTime}</span>
                      <Link
                        href={`/blog/${rel.slug}/`}
                        className="inline-flex items-center gap-1 font-bold text-gold"
                      >
                        <span>{bd.readMore}</span>
                        <Arrow className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
