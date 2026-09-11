"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Copy,
  HelpCircle,
  Info,
  Lightbulb,
  Quote,
  Search,
  Sparkles,
  Tag,
  Terminal,
  X,
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

const springTransition = { type: "spring" as const, stiffness: 120, damping: 20 };

function renderRichText(text?: string): React.ReactNode {
  if (!text) return null;
  if (!text.includes("[") && !text.includes("`")) return text;

  const regex = /\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      const label = match[1];
      const href = match[2];
      const isInternal = href.startsWith("/") || href.startsWith("#");

      elements.push(
        isInternal ? (
          <Link
            key={match.index}
            href={href}
            className="text-gold font-semibold underline decoration-gold/40 hover:decoration-gold underline-offset-4 transition-colors"
          >
            {label}
          </Link>
        ) : (
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold underline decoration-gold/40 hover:decoration-gold underline-offset-4 transition-colors"
          >
            {label}
          </a>
        )
      );
    } else if (match[3]) {
      elements.push(
        <code
          key={match.index}
          className="rounded bg-gold/10 px-1.5 py-0.5 font-mono text-xs text-gold border border-gold/20"
        >
          {match[3]}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
}

export default function ArticleDetailContent({ initialArticle }: Props) {
  const { t, dir, locale } = useI18n();
  const bd = t.blogDetail;
  const article = getArticleBySlug(initialArticle.slug, locale) || initialArticle;
  const relatedArticles = getRelatedArticles(article.slug, locale);

  const [copiedCodeIndex, setCopiedCodeIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState<string>(
    article.sections[0]?.id || ""
  );
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001,
  });

  // Track Back to Top visibility
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShowBackToTop(latest > 500);
    });
  }, [scrollY]);

  // ScrollSpy for Active Section in Sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    article.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article.sections]);

  // Extract all searchable command rows across all sections
  const allCommands = useMemo(() => {
    return article.sections
      .filter((s) => s.id !== "understanding-commands" && s.id !== "keyboard-shortcuts-guide")
      .flatMap((s) =>
        (s.table?.rows || [])
          .filter((row) =>
            row.some((cell) => cell.startsWith("/") || (cell.startsWith("`") && cell.endsWith("`")))
          )
          .map((row) => {
            const cmdCell =
              row.find(
                (cell) => cell.startsWith("/") || (cell.startsWith("`") && cell.endsWith("`"))
              ) || "";
            const cleanCmd = cmdCell.replace(/`/g, "");
            const num = row[0] || "";
            const desc = row[2] || row[1] || "";
            const example = row[3] || row[2] || "";
            return {
              sectionTitle: s.title,
              sectionId: s.id,
              command: cleanCmd,
              num,
              desc,
              example,
            };
          })
      );
  }, [article.sections]);

  const filteredCommands = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allCommands.filter(
      (c) =>
        c.command.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.example.toLowerCase().includes(q) ||
        c.sectionTitle.toLowerCase().includes(q)
    );
  }, [allCommands, searchQuery]);

  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1.5" : "group-hover:translate-x-1.5";

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(id);
    toast.success(bd.copiedCodeToast);
    setTimeout(() => setCopiedCodeIndex(null), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip relative" dir={dir}>
      <Nav />

      {/* Floating Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-gold shadow-[0_0_12px_rgba(239,192,123,0.9)] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Article Hero */}
      <header className="relative pt-32 md:pt-40 pb-6 md:pb-8 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gold/15 blur-[160px] rounded-full" />
        <div className="pointer-events-none absolute top-1/3 right-10 w-[450px] h-[450px] bg-navy/35 blur-[150px] rounded-full" />

        <div className="container mx-auto px-4 max-w-4xl relative">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-gold transition-colors">
              {bd.home}
            </Link>
            <ChevronRight className={`h-3 w-3 ${dir === "rtl" ? "rotate-180" : ""}`} />
            <Link href="/blog/" className="hover:text-gold transition-colors">
              {bd.tutorials}
            </Link>
            <ChevronRight className={`h-3 w-3 ${dir === "rtl" ? "rotate-180" : ""}`} />
            <span className="text-gold font-medium truncate max-w-[200px] sm:max-w-xs">
              {article.title}
            </span>
          </motion.nav>

          {/* Category & Read Time Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur-md shadow-sm">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{article.category}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
              <Clock className="h-3.5 w-3.5 text-gold/80" />
              <span>{article.readTime}</span>
            </span>

            <span className="text-xs text-muted-foreground/80 font-medium">
              {article.publishedDate}
            </span>
          </motion.div>

          {/* Main H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.25] tracking-tight text-foreground"
            style={{ textWrap: "balance" }}
          >
            {article.title}
          </motion.h1>

          {/* Lead Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground/90 font-normal"
            style={{ textWrap: "pretty" }}
          >
            {article.summary}
          </motion.p>

          {/* Author Card in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/40 shadow-inner">
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

            <ShareButtons title={article.title} summary={article.summary} />
          </motion.div>

          {/* Main Cover Image - Integrated into Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-14"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-gold/30 bg-surface shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_35px_rgba(239,192,123,0.15)]">
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
          </motion.div>
        </div>
      </header>

      {/* Decorative Gold Accent Divider */}
      <div className="container mx-auto px-4 max-w-4xl mb-12 md:mb-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 max-w-6xl pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Main Article Column */}
          <article className="lg:col-span-8 space-y-16">
            {/* Mobile-Only Search & TOC */}
            <div className="lg:hidden space-y-6">
              {/* Search Widget on Mobile */}
              {allCommands.length > 0 && (
                <div className="rounded-3xl border border-gold/30 bg-surface/70 p-5 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2 text-gold font-bold text-xs sm:text-sm">
                      <Terminal className="h-4 w-4" />
                      <span>
                        {locale === "fa"
                          ? `جستجو در ${allCommands.length} دستور و کد`
                          : locale === "ar"
                          ? `البحث في ${allCommands.length} أمراً وكوداً`
                          : `Search ${allCommands.length} Commands`}
                      </span>
                    </div>
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-gold">
                      {allCommands.length}
                    </span>
                  </div>

                  <div className="relative">
                    <Search
                      className={`absolute ${
                        dir === "rtl" ? "right-3.5" : "left-3.5"
                      } top-1/2 -translate-y-1/2 h-4 w-4 text-gold/80 pointer-events-none`}
                    />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={
                        locale === "fa"
                          ? "تایپ برای فیلتر آنی (مثال: /canvas, showcase, سئو)..."
                          : "Type to filter commands..."
                      }
                      className={`w-full rounded-2xl border border-gold/30 bg-background/90 py-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none ${
                        dir === "rtl" ? "pr-10 pl-10" : "pl-10 pr-10"
                      }`}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className={`absolute ${
                          dir === "rtl" ? "left-3" : "right-3"
                        } top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Mobile Search Results */}
                  <AnimatePresence>
                    {searchQuery.trim() && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 max-h-[300px] overflow-y-auto space-y-2 rounded-xl border border-gold/20 bg-background/95 p-2.5 shadow-inner"
                      >
                        {filteredCommands.length === 0 ? (
                          <p className="py-4 text-center text-xs text-muted-foreground">
                            {locale === "fa" ? "موردی پیدا نشد." : "No results."}
                          </p>
                        ) : (
                          filteredCommands.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-surface/60 p-2.5 text-xs"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <motion.button
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleCopyCode(item.command, `m-search-${idx}`)}
                                  className="rounded border border-gold/40 bg-gold/15 px-2 py-0.5 font-mono text-[11px] font-bold text-gold"
                                >
                                  {item.command}
                                </motion.button>
                                <span className="truncate text-muted-foreground">{item.desc}</span>
                              </div>
                              {copiedCodeIndex === `m-search-${idx}` && (
                                <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                              )}
                            </div>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Mobile Table of Contents */}
              {article.toc && article.toc.length > 0 && (
                <div className="rounded-3xl border border-gold/25 bg-surface/50 p-5 sm:p-6 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2 mb-4 text-gold font-bold text-xs sm:text-sm">
                    <Sparkles className="h-4 w-4" />
                    <span>{bd.tocHeading}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {article.toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-muted-foreground hover:text-gold hover:underline transition-colors flex items-center gap-2 py-1"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gold/80 shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Article Sections */}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-6">
                <h2
                  className={`text-xl md:text-2xl lg:text-3xl font-black text-foreground ${
                    dir === "rtl" ? "border-r-4 pr-3.5" : "border-l-4 pl-3.5"
                  } border-gold leading-snug`}
                >
                  {section.title}
                </h2>

                {section.lead && (
                  <p className="text-base md:text-lg font-semibold leading-relaxed text-foreground/90">
                    {renderRichText(section.lead)}
                  </p>
                )}

                {section.paragraphs?.map((p, idx) => (
                  <p key={idx} className="text-base md:text-lg leading-relaxed text-muted-foreground font-normal">
                    {renderRichText(p)}
                  </p>
                ))}

                {/* Bullet Points */}
                {section.bulletPoints && (
                  <ul className="space-y-3 pt-2">
                    {section.bulletPoints.map((item, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-muted-foreground rounded-2xl border border-white/5 bg-surface/40 p-4"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-gold shadow-gold" />
                        <span className="flex-1">{renderRichText(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Section Graphic / Image */}
                {section.image && (
                  <figure className="my-10 overflow-hidden rounded-[2rem] border border-gold/25 bg-surface/50 shadow-2xl group">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                    {section.image.caption && (
                      <figcaption className="p-4 text-center text-xs text-muted-foreground border-t border-white/5 bg-surface-elevated/90 backdrop-blur-sm">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* Interactive Responsive Table: Desktop Table + Mobile Cards */}
                {section.table && (
                  <div className="my-8">
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-hidden rounded-2xl border border-gold/25 bg-surface/50 shadow-xl">
                      <div className="overflow-x-auto">
                        <table className={`w-full ${dir === "rtl" ? "text-right" : "text-left"} text-sm`}>
                          <thead className="bg-surface-elevated/90 text-gold border-b border-gold/20 backdrop-blur-md">
                            <tr>
                              {section.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="py-4 px-4 font-bold text-xs whitespace-nowrap">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-white/[0.04] transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="py-3.5 px-4 text-muted-foreground align-top">
                                    {cell.startsWith("`") && cell.endsWith("`") ? (
                                      <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() =>
                                          handleCopyCode(
                                            cell.slice(1, -1),
                                            `tbl-${section.id}-${rIdx}-${cIdx}`
                                          )
                                        }
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-xs font-bold text-gold hover:bg-gold hover:text-gold-foreground transition-all"
                                        title="کلیک برای کپی دستور"
                                      >
                                        <span>{cell.slice(1, -1)}</span>
                                        {copiedCodeIndex === `tbl-${section.id}-${rIdx}-${cIdx}` ? (
                                          <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                                        ) : (
                                          <Copy className="h-3 w-3 text-gold/70 shrink-0" />
                                        )}
                                      </motion.button>
                                    ) : cell.startsWith("/") ? (
                                      <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() =>
                                          handleCopyCode(cell, `tbl-${section.id}-${rIdx}-${cIdx}`)
                                        }
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-xs font-bold text-gold hover:bg-gold hover:text-gold-foreground transition-all"
                                        title="کلیک برای کپی دستور"
                                      >
                                        <span>{cell}</span>
                                        {copiedCodeIndex === `tbl-${section.id}-${rIdx}-${cIdx}` ? (
                                          <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                                        ) : (
                                          <Copy className="h-3 w-3 text-gold/70 shrink-0" />
                                        )}
                                      </motion.button>
                                    ) : (
                                      <span className="leading-relaxed">{cell}</span>
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Mobile Native Card View */}
                    <div className="md:hidden space-y-3.5">
                      {section.table.rows.map((row, rIdx) => {
                        const cmdCell = row.find(
                          (c) => c.startsWith("/") || (c.startsWith("`") && c.endsWith("`"))
                        );
                        const cleanCmd = cmdCell ? cmdCell.replace(/`/g, "") : null;
                        const rowNum = row.length > 2 && /^\d+$/.test(row[0]) ? row[0] : null;

                        return (
                          <div
                            key={rIdx}
                            className="rounded-2xl border border-gold/25 bg-surface/70 p-4 shadow-lg backdrop-blur-md space-y-3"
                          >
                            {/* Card Header: Command + Row Number + Copy */}
                            <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                              <div className="flex items-center gap-2">
                                {rowNum && (
                                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gold/15 text-gold text-xs font-mono font-bold">
                                    {rowNum}
                                  </span>
                                )}
                                {cleanCmd ? (
                                  <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                      handleCopyCode(cleanCmd, `m-tbl-${section.id}-${rIdx}`)
                                    }
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-gold/15 px-3 py-1.5 font-mono text-sm font-black text-gold hover:bg-gold hover:text-gold-foreground transition-all"
                                  >
                                    <span>{cleanCmd}</span>
                                    {copiedCodeIndex === `m-tbl-${section.id}-${rIdx}` ? (
                                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                                    ) : (
                                      <Copy className="h-4 w-4 text-gold/80 shrink-0" />
                                    )}
                                  </motion.button>
                                ) : (
                                  <span className="font-bold text-sm text-gold">
                                    {row[0]}
                                  </span>
                                )}
                              </div>

                              {cleanCmd && (
                                <motion.button
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() =>
                                    handleCopyCode(cleanCmd, `m-tbl-${section.id}-${rIdx}`)
                                  }
                                  className="text-xs font-medium text-gold hover:underline flex items-center gap-1"
                                >
                                  <span>{copiedCodeIndex === `m-tbl-${section.id}-${rIdx}` ? bd.copied : bd.copy}</span>
                                </motion.button>
                              )}
                            </div>

                            {/* Card Body Details */}
                            <div className="space-y-3 text-sm">
                              {row.map((cell, cIdx) => {
                                if (cIdx === 0 && rowNum) return null;
                                if (cell === cmdCell) return null;

                                const isCodeLike =
                                  cell.includes("/") ||
                                  cell.includes("`") ||
                                  (cell.length > 25 && /^[a-zA-Z0-9_\-\s\/,:]+$/.test(cell));

                                return (
                                  <div key={cIdx} className="space-y-1.5">
                                    {isCodeLike ? (
                                      <>
                                        <span className="text-xs font-bold text-gold/80 block">
                                          {locale === "fa"
                                            ? "نمونه پرامپت / اجرا:"
                                            : locale === "ar"
                                            ? "مثال البرومبت / التطبيق:"
                                            : "Example Prompt / Execution:"}
                                        </span>
                                        <div className="flex items-center justify-between gap-2 rounded-xl bg-black/40 border border-white/5 p-2.5 font-mono text-xs text-zinc-300">
                                          <span className="break-all direction-ltr text-left">
                                            {cell.replace(/`/g, "")}
                                          </span>
                                          <button
                                            onClick={() =>
                                              handleCopyCode(
                                                cell.replace(/`/g, ""),
                                                `m-code-${section.id}-${rIdx}-${cIdx}`
                                              )
                                            }
                                            className="shrink-0 p-1 text-gold/70 hover:text-gold"
                                            title={locale === "fa" ? "کپی" : locale === "ar" ? "نسخ" : "Copy"}
                                          >
                                            {copiedCodeIndex === `m-code-${section.id}-${rIdx}-${cIdx}` ? (
                                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                                            ) : (
                                              <Copy className="h-3.5 w-3.5" />
                                            )}
                                          </button>
                                        </div>
                                      </>
                                    ) : (
                                      <p className="text-muted-foreground leading-relaxed text-sm">
                                        {cell}
                                      </p>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Code Snippets */}
                {section.codeSnippets?.map((snippet, sIdx) => {
                  const snippetId = `${section.id}-${sIdx}`;
                  const isCopied = copiedCodeIndex === snippetId;
                  return (
                    <div
                      key={sIdx}
                      className="rounded-2xl border border-gold/25 bg-[#0b0f19] overflow-hidden my-8 shadow-2xl"
                    >
                      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 text-xs">
                        <span className="font-mono text-gold font-medium">
                          {snippet.title || snippet.language || "Code"}
                        </span>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleCopyCode(snippet.code, snippetId)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-muted-foreground hover:text-foreground hover:border-gold/40 transition-colors"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">{bd.copied}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3 text-gold/80" />
                              <span>{bd.copy}</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                      <pre className="p-5 overflow-x-auto text-xs md:text-sm font-mono leading-relaxed text-zinc-300 direction-ltr text-left">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  );
                })}

                {/* Callout Boxes */}
                {section.callout && (
                  <div
                    className={`rounded-2xl p-5 my-8 flex items-start gap-4 border shadow-md ${
                      section.callout.type === "tip"
                        ? "border-emerald-500/40 bg-emerald-950/20 text-emerald-200"
                        : section.callout.type === "warning"
                        ? "border-amber-500/40 bg-amber-950/20 text-amber-200"
                        : section.callout.type === "quote"
                        ? "border-gold/40 bg-gold/10 text-gold-foreground"
                        : "border-blue-500/40 bg-blue-950/20 text-blue-200"
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
                        <p className="font-bold mb-1.5 text-foreground text-sm">{section.callout.title}</p>
                      )}
                      <p className="text-muted-foreground/90">{renderRichText(section.callout.text)}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Takeaways Section */}
            {article.takeaways && article.takeaways.length > 0 && (
              <div className="rounded-[2.5rem] border border-gold/35 bg-gradient-to-br from-surface-elevated via-surface to-background p-6 sm:p-9 mt-16 shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -bottom-10 w-48 h-48 bg-gold/15 rounded-full blur-3xl" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold text-gold-foreground">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-foreground">
                    {bd.takeawaysHeading}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {article.takeaways.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-2xl border border-gold/20 bg-background/70 p-4 shadow-sm"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-black">
                        {idx + 1}
                      </span>
                      <p className="text-sm md:text-base leading-loose text-muted-foreground">
                        {renderRichText(item)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* High-Converting Lead Magnet / Action Box */}
            {article.leadMagnet && (
              <section className="my-12 rounded-[2.5rem] border-2 border-gold/40 bg-gradient-to-br from-gold/15 via-surface-elevated to-surface p-6 md:p-10 shadow-2xl relative overflow-hidden group">
                <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 bg-gold/20 rounded-full blur-3xl group-hover:bg-gold/30 transition-all duration-700" />
                <div className="relative z-10 space-y-6">
                  {article.leadMagnet.badge && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/20 px-3.5 py-1 text-xs font-black text-gold shadow-gold/20 shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{article.leadMagnet.badge}</span>
                    </span>
                  )}

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tight leading-snug">
                      {article.leadMagnet.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-2xl">
                      {article.leadMagnet.description}
                    </p>
                  </div>

                  {article.leadMagnet.perks && article.leadMagnet.perks.length > 0 && (
                    <div className="grid gap-2.5 sm:grid-cols-2 pt-1">
                      {article.leadMagnet.perks.map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <a
                      href={article.leadMagnet.primaryAction.href}
                      target={article.leadMagnet.primaryAction.isExternal ? "_blank" : undefined}
                      rel={article.leadMagnet.primaryAction.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-gold px-6 py-3.5 text-xs sm:text-sm font-black text-gold-foreground shadow-gold hover:shadow-gold-lg hover:opacity-95 transition-all duration-300"
                    >
                      <span>{article.leadMagnet.primaryAction.label}</span>
                      <Arrow className={`h-4 w-4 transition-transform duration-300 ${arrowHover}`} />
                    </a>

                    {article.leadMagnet.secondaryAction && (
                      <Link
                        href={article.leadMagnet.secondaryAction.href}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gold/30 bg-surface/80 px-5 py-3.5 text-xs sm:text-sm font-bold text-gold hover:bg-gold/10 hover:border-gold/50 transition-all duration-300"
                      >
                        <span>{article.leadMagnet.secondaryAction.label}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Interactive FAQs Accordion Section */}
            {article.faqs && article.faqs.length > 0 && (
              <section id="faq-interactive" className="my-14 rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-surface to-surface-elevated/90 p-6 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold text-gold-foreground">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider">
                      {locale === "fa" ? "پرسش و پاسخ‌های پرتکرار" : locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-foreground">
                      {locale === "fa" ? "پاسخ سریع به ابهامات فنی و تحریم‌ها" : locale === "ar" ? "إجابات الخبراء السريعة" : "Expert Answers & Verification"}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {article.faqs.map((faq, fIdx) => (
                    <details
                      key={fIdx}
                      className="group rounded-2xl border border-gold/20 bg-background/80 p-4 transition-all duration-300 open:border-gold/50 open:bg-surface open:shadow-lg"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-sm md:text-base text-foreground group-open:text-gold transition-colors">
                        <span>{faq.question}</span>
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-open:rotate-180">
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </summary>
                      <p className="mt-3.5 pt-3.5 border-t border-white/5 text-xs md:text-sm leading-loose text-muted-foreground">
                        {renderRichText(faq.answer)}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Share CTA */}
            <div className="rounded-3xl border border-gold/25 bg-surface/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <p className="text-xs sm:text-sm font-bold text-foreground">
                {locale === "fa"
                  ? "این آموزش برایت مفید بود؟ با دیگران به اشتراک بذار:"
                  : locale === "ar"
                  ? "هل كان هذا الدرس مفيداً لك؟ شاركه مع الآخرين:"
                  : "Found this handbook helpful? Share it with others:"}
              </p>
              <ShareButtons title={article.title} summary={article.summary} showLabel={false} />
            </div>

            {/* Tags Cloud */}
            <div className="pt-2">
              <p className="text-xs font-bold text-muted-foreground mb-3">{bd.tagsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground hover:border-gold/40 hover:text-gold transition-colors"
                  >
                    <Tag className="h-3 w-3 text-gold/70" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Profile */}
            <div className="rounded-[2rem] border border-gold/25 bg-surface/50 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
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

          {/* Sticky Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-5">
            {/* Desktop Sticky Live Command Search Box */}
            {allCommands.length > 0 && (
              <div className="rounded-2xl border border-gold/30 bg-surface/80 p-4 sm:p-5 backdrop-blur-xl shadow-xl">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-gold shadow-gold text-gold-foreground">
                      <Terminal className="h-3.5 w-3.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground">
                      {locale === "fa"
                        ? `جستجو در ${allCommands.length} دستور`
                        : locale === "ar"
                        ? `البحث في ${allCommands.length} أمراً`
                        : `Search ${allCommands.length} Commands`}
                    </h3>
                  </div>
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-gold">
                    {allCommands.length}
                  </span>
                </div>

                <div className="relative">
                  <Search
                    className={`absolute ${
                      dir === "rtl" ? "right-3" : "left-3"
                    } top-1/2 -translate-y-1/2 h-4 w-4 text-gold/80 pointer-events-none`}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      locale === "fa"
                        ? "فیلتر دستورات (/canvas, showcase)..."
                        : "Filter commands..."
                    }
                    className={`w-full rounded-xl border border-white/10 bg-background/90 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none transition-colors ${
                      dir === "rtl" ? "pr-9 pl-8" : "pl-9 pr-8"
                    }`}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className={`absolute ${
                        dir === "rtl" ? "left-2.5" : "right-2.5"
                      } top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground`}
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* Sidebar Search Results Dropdown */}
                <AnimatePresence>
                  {searchQuery.trim() && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 max-h-[250px] overflow-y-auto space-y-1.5 rounded-xl border border-gold/20 bg-background/95 p-2 shadow-inner"
                    >
                      {filteredCommands.length === 0 ? (
                        <p className="py-3 text-center text-xs text-muted-foreground">
                          {locale === "fa" ? "دستوری با این عبارت پیدا نشد." : "No matching commands found."}
                        </p>
                      ) : (
                        filteredCommands.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-surface/60 p-2 text-xs hover:border-gold/30 hover:bg-surface transition-all"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleCopyCode(item.command, `d-search-${idx}`)}
                                className="rounded-lg border border-gold/40 bg-gold/15 px-2 py-0.5 font-mono text-xs font-bold text-gold hover:bg-gold hover:text-gold-foreground transition-all shrink-0"
                                title="کپی"
                              >
                                {item.command}
                              </motion.button>
                              <span className="truncate text-xs text-muted-foreground">{item.desc}</span>
                            </div>
                            {copiedCodeIndex === `d-search-${idx}` ? (
                              <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            ) : (
                              <Copy
                                onClick={() => handleCopyCode(item.command, `d-search-${idx}`)}
                                className="h-3.5 w-3.5 text-muted-foreground/60 hover:text-gold cursor-pointer shrink-0"
                              />
                            )}
                          </div>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Table of Contents Widget with Animated ScrollSpy Indicator */}
            <div className="rounded-2xl border border-gold/25 bg-surface/60 p-4 sm:p-5 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 mb-3 text-gold font-bold text-xs sm:text-sm">
                <Sparkles className="h-4 w-4" />
                <span>{bd.tocHeading}</span>
              </div>
              <nav className="space-y-1 text-xs max-h-[30vh] xl:max-h-[35vh] overflow-y-auto pr-1">
                {article.toc.map((item) => {
                  const isActive = activeSectionId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-1.5 px-3 rounded-xl transition-all duration-200 leading-relaxed text-xs ${
                        isActive
                          ? "text-gold font-bold bg-gold/10 border border-gold/30 shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      <span className="truncate block">{item.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Consultation / Free Offer Card */}
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-surface-elevated to-surface p-4 sm:p-5 shadow-2xl relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 bg-gold/15 rounded-full blur-2xl" />
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-gold mb-2">
                {bd.sidebarWidgetBadge}
              </span>
              <h4 className="text-xs sm:text-sm font-black text-foreground mb-1.5 leading-snug">
                {bd.sidebarWidgetTitle}
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground mb-4 line-clamp-2">
                {bd.sidebarWidgetDesc}
              </p>
              <Link
                href="/#form"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold py-2.5 text-xs font-black text-gold-foreground shadow-gold hover:shadow-gold-lg hover:opacity-95 transition-all duration-300"
              >
                <span>{bd.sidebarWidgetBtn}</span>
                <Arrow className={`h-3.5 w-3.5 transition-transform duration-300 ${arrowHover}`} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Articles Carousel / Grid */}
        {relatedArticles.length > 0 && (
          <div className="mt-28 pt-14 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs text-gold font-bold mb-1">{bd.relatedHeading}</p>
                <h3 className="text-xl md:text-3xl font-black">{bd.relatedSubtitle}</h3>
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
                <motion.div
                  key={rel.slug}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-gold/20 bg-surface/50 hover:border-gold/50 hover:bg-surface/80 transition-all p-4 gap-4 shadow-lg"
                >
                  <div className="relative aspect-[16/10] sm:w-44 sm:h-32 shrink-0 overflow-hidden rounded-2xl bg-surface-elevated">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-1">
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
                        className="inline-flex items-center gap-1 font-bold text-gold group-hover:text-gold-bright"
                      >
                        <span>{bd.readMore}</span>
                        <Arrow className={`h-3 w-3 transition-transform duration-300 ${arrowHover}`} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Bottom Navigation Hub */}
      <AnimatePresence>
        {showBackToTop && (
          <div
            className={`fixed bottom-5 ${
              dir === "rtl" ? "left-4 sm:left-6" : "right-4 sm:right-6"
            } z-40 flex items-center gap-2`}
          >
            {/* Mobile-Only Sticky Lead CTA */}
            {article.leadMagnet && (
              <motion.a
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 15 }}
                transition={springTransition}
                href={article.leadMagnet.primaryAction.href}
                target={article.leadMagnet.primaryAction.isExternal ? "_blank" : undefined}
                rel={article.leadMagnet.primaryAction.isExternal ? "noopener noreferrer" : undefined}
                className="lg:hidden flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-xs font-black text-gold-foreground shadow-gold backdrop-blur-xl hover:opacity-95 transition-all"
                aria-label="Quick Action"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>{locale === "fa" ? "عضویت تلگرام VIP" : locale === "ar" ? "قناة VIP" : "VIP Channel"}</span>
              </motion.a>
            )}
            {/* Mobile-Only Floating TOC Trigger Button */}
            {article.toc && article.toc.length > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 15 }}
                transition={springTransition}
                onClick={() => setIsMobileTocOpen(true)}
                className="lg:hidden flex items-center gap-2 rounded-full border border-gold/40 bg-surface/95 px-4 py-2.5 text-xs font-bold text-gold shadow-2xl backdrop-blur-xl hover:bg-gold hover:text-gold-foreground transition-all"
                aria-label="Open mobile table of contents"
              >
                <Sparkles className="h-4 w-4" />
                <span>{bd.tocHeading}</span>
              </motion.button>
            )}

            {/* Back to Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 15 }}
              transition={springTransition}
              onClick={scrollToTop}
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full sm:rounded-2xl border border-gold/40 bg-surface/95 text-gold shadow-2xl backdrop-blur-xl hover:bg-gold hover:text-gold-foreground transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Floating TOC Drawer / Bottom-Sheet */}
      <AnimatePresence>
        {isMobileTocOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileTocOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Drawer Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed bottom-0 left-0 right-0 z-50 max-h-[82vh] rounded-t-[2rem] border-t border-gold/40 bg-[#0f1422]/98 p-5 shadow-2xl backdrop-blur-2xl lg:hidden flex flex-col"
              dir={dir}
            >
              {/* Handle Bar */}
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-white/20" />

              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2 text-gold font-bold text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>{bd.tocHeading}</span>
                  <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] text-gold font-bold">
                    {article.toc.length} {locale === "fa" ? "سرفصل" : "Sections"}
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileTocOpen(false)}
                  className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Sections List in Drawer */}
              <div className="overflow-y-auto space-y-1.5 flex-1 pr-1 pb-3">
                {article.toc.map((item, idx) => {
                  const isActive = activeSectionId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsMobileTocOpen(false)}
                      className={`flex items-center justify-between gap-2 rounded-xl p-3 text-xs transition-all ${
                        isActive
                          ? "border border-gold/40 bg-gold/15 font-bold text-gold shadow-sm"
                          : "border border-white/5 bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/5 text-[10px] font-mono text-gold/80">
                          {idx + 1}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </div>
                      {isActive && (
                        <span className="h-2 w-2 shrink-0 rounded-full bg-gold shadow-gold" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Bottom Quick Jump to Top */}
              <button
                onClick={() => {
                  setIsMobileTocOpen(false);
                  scrollToTop();
                }}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-surface/80 py-2.5 text-xs font-bold text-muted-foreground hover:text-gold transition-colors"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                <span>{locale === "fa" ? "رفتن به ابتدای مقاله" : "Back to top"}</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
