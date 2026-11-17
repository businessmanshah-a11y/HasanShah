"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  Copy,
  Check,
  Share2,
  ArrowUpRight,
  Code2,
  Terminal,
  Database,
  Layers,
  Layout,
  Brain,
  ShieldAlert,
  Lightbulb,
  BookOpen,
  Filter,
  ArrowLeft,
  X,
  ExternalLink,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/ParticlesBackground";
import {
  allDictionaryTerms,
  categoriesMeta,
  TermCategory,
  DifficultyLevel,
  EncyclopediaTerm,
} from "./data";

const quickAccessTools = [
  {
    title: "مستندات و کاوشگر هوک‌های وردپرس",
    url: "https://developer.wordpress.org/reference/hooks/",
    description: "مرجع رسمی و لحظه‌ای تمامی اکشن‌ها و فیلترهای هسته وردپرس با پارامترها و نمونه کد.",
    badge: "مستندات رسمی هسته",
    icon: "layers",
  },
  {
    title: "ژنراتور متادیتای block.json",
    url: "https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/",
    description: "استاندارد رسمی ساخت مانیفست بلاک‌های گوتنبرگ با پشتیبانی از apiVersion 3.",
    badge: "توسعه گوتنبرگ",
    icon: "code",
  },
  {
    title: "کاوشگر اندپوینت‌های WP REST API",
    url: "https://developer.wordpress.org/rest-api/reference/",
    description: "راهنمای کامل روت‌های استاندارد، هدرهای احراز هویت و پارامترهای وب‌سرویس وردپرس.",
    badge: "وب‌سرویس و API",
    icon: "database",
  },
  {
    title: "ابزار تعویض سریال‌شده دیتابیس (Search-Replace)",
    url: "https://interconnectit.com/search-and-replace-for-wordpress-databases/",
    description: "اسکریپت و شبیه‌ساز امن جابه‌جایی دامنه‌ها در دیتابیس بدون شکستن متغیرهای سریال PHP.",
    badge: "دیتابیس و مهاجرت",
    icon: "terminal",
  },
  {
    title: "سنجش سرعت و معیارهای Core Web Vitals",
    url: "https://pagespeed.web.dev/",
    description: "ابزار رسمی گوگل برای تحلیل امتیازهای LCP، INP و CLS در قالب‌های اختصاصی وردپرس.",
    badge: "سرعت و سئو تکنیکال",
    icon: "sparkles",
  },
];

export default function VibeDictionaryContent() {
  const [selectedCategory, setSelectedCategory] = useState<TermCategory | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTabByTerm, setActiveTabByTerm] = useState<Record<string, "concept" | "prompt" | "code">>({});
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("vibe_dict_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Keyboard shortcut Cmd+K or Ctrl+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("vibe_dict_favorites", JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => {
      setCopiedItem((curr) => (curr === id ? null : curr));
    }, 2000);
  };

  const handleShareAnchor = (termId: string) => {
    const url = `${window.location.origin}/vibe-coding/dictionary/#${termId}`;
    handleCopy(url, `share-${termId}`);
  };

  // Filter terms
  const filteredTerms = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return allDictionaryTerms.filter((term) => {
      if (showOnlyFavorites && !favorites.includes(term.id)) {
        return false;
      }
      if (selectedCategory !== "all" && term.category !== selectedCategory) {
        return false;
      }
      if (selectedLevel !== "all" && term.level !== selectedLevel) {
        return false;
      }
      if (!query) return true;

      const matchesEn = term.termEn.toLowerCase().includes(query);
      const matchesFa = term.termFa.toLowerCase().includes(query);
      const matchesDef = term.shortDefinition.toLowerCase().includes(query);
      const matchesDeep = term.deepExplanation.toLowerCase().includes(query);
      const matchesTags = term.tags.some((t) => t.toLowerCase().includes(query));
      const matchesSeo = term.seoKeywords.some((k) => k.toLowerCase().includes(query));

      return matchesEn || matchesFa || matchesDef || matchesDeep || matchesTags || matchesSeo;
    });
  }, [searchQuery, selectedCategory, selectedLevel, showOnlyFavorites, favorites]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="h-4 w-4" />;
      case "Layout":
        return <Layout className="h-4 w-4" />;
      case "Code2":
        return <Code2 className="h-4 w-4" />;
      case "Layers":
        return <Layers className="h-4 w-4" />;
      case "Database":
        return <Database className="h-4 w-4" />;
      case "Terminal":
        return <Terminal className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getLevelBadge = (level: DifficultyLevel) => {
    switch (level) {
      case "beginner":
        return (
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
            مقدماتی
          </span>
        );
      case "intermediate":
        return (
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
            متوسط
          </span>
        );
      case "advanced":
        return (
          <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-300">
            پیشرفته
          </span>
        );
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground" dir="rtl">
      <Nav />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <ParticlesBackground />
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.27 0.080 248 / 0.45), transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-gold transition-colors">
              صفحه اصلی
            </Link>
            <ChevronRight className="h-3 w-3 rotate-180" />
            <Link href="/vibe-coding" className="hover:text-gold transition-colors">
              وایب‌کدینگ
            </Link>
            <ChevronRight className="h-3 w-3 rotate-180" />
            <span className="text-gold font-semibold">دانشنامه تخصصی وردپرس</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            دانشنامه تخصصی و دیکشنری وایب‌کدینگ وردپرس
          </div>

          <h1 className="text-3xl font-black leading-tight md:text-5xl lg:text-6xl text-foreground">
            الفبای فول‌استک <span className="text-gradient-gold">وایب‌کدینگ</span> در وردپرس
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            هوش مصنوعی کد را تولید می‌کند، اما معماری را شما دیکته می‌کنید. مرجع جامع اصطلاحات، خطاهای رایج مدل‌های AI، پرامپت‌های مهندسی‌شده و قطعات استاندارد برای توسعه بدون نقص سایت‌های وردپرسی.
          </p>

          {/* Key Metrics Counter */}
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="rounded-2xl border border-white/10 bg-surface/70 px-5 py-3 backdrop-blur shadow-sm">
              <div className="text-2xl font-black text-gold">۳۶+</div>
              <div className="text-xs text-muted-foreground mt-0.5">مدخل تخصصی (فاز ۱)</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/70 px-5 py-3 backdrop-blur shadow-sm">
              <div className="text-2xl font-black text-gold">۶</div>
              <div className="text-xs text-muted-foreground mt-0.5">حوزه دانش فول‌استک</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/70 px-5 py-3 backdrop-blur shadow-sm">
              <div className="text-2xl font-black text-emerald-400">۱۰۰٪</div>
              <div className="text-xs text-muted-foreground mt-0.5">پرامپت‌های مهندسی‌شده</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 0: Quick Access Tools (Mandatory per AGENTS.md) ── */}
      <section id="quick-access-tools" className="container mx-auto px-4 pb-12">
        <div className="rounded-3xl border border-gold/25 bg-surface/80 p-6 md:p-8 backdrop-blur shadow-elegant">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-foreground border-r-4 border-gold pr-3">
                ۰. ابزارها و لینک‌های سریع وایب‌کدینگ وردپرس
              </h2>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground pr-4">
                دسته‌بندی مستقیم منابع رسمی و شبیه‌سازهای ضروری برای تست آنی هوک‌ها، بلاک‌ها و دیتابیس
              </p>
            </div>
            <span className="self-start md:self-auto rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
              دسترسی فوری
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickAccessTools.map((tool, idx) => (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-4 rounded-2xl border border-amber-500/25 bg-surface-elevated/70 hover:bg-surface-elevated hover:border-amber-400/60 transition-all duration-300 shadow-sm hover:shadow-gold hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full px-2.5 py-0.5">
                      {tool.badge}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground group-hover:text-gold transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gold/80 font-mono">
                  <span>مشاهده منبع</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search & Filter Controls Section ── */}
      <section className="container mx-auto px-4 pb-8">
        <div className="rounded-3xl border border-white/10 bg-surface/50 p-5 md:p-7 backdrop-blur space-y-6">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی سریع میان اصطلاحات، پرامپت‌ها و کلمات کلیدی (فارسی یا انگلیسی)..."
              className="w-full rounded-2xl border border-white/15 bg-background/80 py-4 pr-12 pl-28 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="پاک کردن جستجو"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2 py-1 text-[11px] font-mono text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          {/* Category Tabs */}
          <div>
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Filter className="h-3.5 w-3.5 text-gold" />
                فیلتر حوزه‌های تخصصی:
              </span>
              <span>{filteredTerms.length} اصطلاح یافت شد</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  selectedCategory === "all"
                    ? "bg-gradient-gold text-gold-foreground shadow-gold"
                    : "border border-white/10 bg-white/5 text-muted-foreground hover:border-gold/30 hover:text-foreground"
                }`}
              >
                <span>همه حوزه‌ها</span>
                <span className="rounded-full bg-black/20 px-1.5 py-0.2 text-[10px]">
                  {allDictionaryTerms.length}
                </span>
              </button>

              {categoriesMeta.map((cat) => {
                const count = allDictionaryTerms.filter((t) => t.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-gold/20 border border-gold text-gold shadow-sm"
                        : "border border-white/10 bg-white/5 text-muted-foreground hover:border-gold/30 hover:text-foreground"
                    }`}
                  >
                    {getCategoryIcon(cat.iconName)}
                    <span>{cat.titleFa}</span>
                    <span className="rounded-full bg-white/10 px-1.5 py-0.2 text-[10px]">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty and Favorites Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-semibold">سطح دشواری:</span>
              {(["all", "beginner", "intermediate", "advanced"] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                    selectedLevel === lvl
                      ? "bg-white/20 text-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground bg-white/5"
                  }`}
                >
                  {lvl === "all" ? "همه سطوح" : lvl === "beginner" ? "مقدماتی" : lvl === "intermediate" ? "متوسط" : "پیشرفته"}
                </button>
              ))}
            </div>

            {favorites.length > 0 && (
              <button
                type="button"
                onClick={() => setShowOnlyFavorites((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                  showOnlyFavorites
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "text-muted-foreground hover:text-foreground bg-white/5 border border-transparent"
                }`}
              >
                <BookmarkCheck className="h-3.5 w-3.5" />
                <span>برگزیده‌های من ({favorites.length})</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Terms Grid Section ── */}
      <section className="container mx-auto px-4 pb-20">
        {filteredTerms.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-surface/40 p-12 text-center">
            <Brain className="mx-auto h-12 w-12 text-muted-foreground/50 mb-3" />
            <h3 className="text-lg font-bold text-foreground">هیچ اصطلاحی با این مشخصات یافت نشد</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              کلمه دیگری را جستجو کنید یا فیلترهای دسته و سطح را ریست نمایید.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedLevel("all");
                setShowOnlyFavorites(false);
              }}
              className="mt-4 rounded-xl border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-bold text-gold hover:bg-gold/20 transition-all"
            >
              پاک کردن همه فیلترها
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTerms.map((term) => {
              const activeTab = activeTabByTerm[term.id] || "concept";
              const isFavorite = favorites.includes(term.id);
              const isPromptCopied = copiedItem === `prompt-${term.id}`;
              const isCodeCopied = copiedItem === `code-${term.id}`;
              const isShared = copiedItem === `share-${term.id}`;

              return (
                <article
                  key={term.id}
                  id={term.id}
                  className="scroll-mt-32 rounded-3xl border border-white/10 bg-surface/70 p-6 md:p-7 backdrop-blur transition-all duration-300 hover:border-gold/30 hover:shadow-elegant flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Titles and Badges */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h2 className="text-xl md:text-2xl font-black text-foreground">
                            {term.termEn}
                          </h2>
                          {term.phonetic && (
                            <span className="text-[11px] font-mono text-muted-foreground bg-white/5 rounded-md px-2 py-0.5 border border-white/5">
                              {term.phonetic}
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-gold">
                          {term.termFa}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {getLevelBadge(term.level)}
                        <button
                          type="button"
                          onClick={() => toggleFavorite(term.id)}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            isFavorite
                              ? "border-amber-400/40 bg-amber-400/20 text-amber-300"
                              : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
                          }`}
                          title="نشان کردن در برگزیده‌ها"
                        >
                          <Bookmark className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleShareAnchor(term.id)}
                          className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-gold transition-colors"
                          title="کپی لینک مستقیم این اصطلاح"
                        >
                          {isShared ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Short definition teaser */}
                    <p className="text-xs md:text-sm font-semibold text-foreground/90 leading-relaxed mb-5">
                      {term.shortDefinition}
                    </p>

                    {/* Tabs Navigation */}
                    <div className="flex border-b border-white/10 mb-5 gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveTabByTerm((prev) => ({ ...prev, [term.id]: "concept" }))
                        }
                        className={`pb-2.5 text-xs font-bold transition-all relative ${
                          activeTab === "concept"
                            ? "text-gold border-b-2 border-gold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        تحلیل مفهومی و دام‌های AI
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveTabByTerm((prev) => ({ ...prev, [term.id]: "prompt" }))
                        }
                        className={`pb-2.5 text-xs font-bold transition-all flex items-center gap-1.5 ${
                          activeTab === "prompt"
                            ? "text-gold border-b-2 border-gold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        پرامپت طلایی برای هوش مصنوعی
                      </button>
                      {term.codeSnippet && (
                        <button
                          type="button"
                          onClick={() =>
                            setActiveTabByTerm((prev) => ({ ...prev, [term.id]: "code" }))
                          }
                          className={`pb-2.5 text-xs font-bold transition-all flex items-center gap-1.5 ${
                            activeTab === "code"
                              ? "text-gold border-b-2 border-gold"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Code2 className="h-3.5 w-3.5" />
                          نمونه کد
                        </button>
                      )}
                    </div>

                    {/* Tab Contents */}
                    <div className="space-y-4">
                      {activeTab === "concept" && (
                        <div className="space-y-4 text-xs md:text-sm leading-relaxed">
                          <p className="text-muted-foreground leading-loose">
                            {term.deepExplanation}
                          </p>

                          {/* The AI Trap Warning Box */}
                          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200">
                            <div className="flex items-center gap-2 font-bold mb-1.5 text-amber-300">
                              <ShieldAlert className="h-4 w-4 shrink-0" />
                              <span>خطر هوش مصنوعی (The AI Trap):</span>
                            </div>
                            <p className="text-xs leading-relaxed text-amber-100/90">
                              {term.vibeCodingImpact}
                            </p>
                          </div>
                        </div>
                      )}

                      {activeTab === "prompt" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
                            <span className="flex items-center gap-1">
                              <Lightbulb className="h-3.5 w-3.5 text-gold" />
                              دستور آماده برای ارسال به Cursor یا Claude:
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(term.goldenPrompt, `prompt-${term.id}`)}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-bold text-gold hover:bg-gold/25 transition-all shadow-sm"
                            >
                              {isPromptCopied ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">کپی شد!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>کپی پرامپت</span>
                                </>
                              )}
                            </button>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-foreground/90 leading-relaxed whitespace-pre-wrap select-all">
                            {term.goldenPrompt}
                          </div>
                          <p className="text-[11px] text-muted-foreground">
                            * متغیرهای داخل براکت مانند [نام قابلیت] را متناسب با نیاز پروژه خود تغییر دهید.
                          </p>
                        </div>
                      )}

                      {activeTab === "code" && term.codeSnippet && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[11px] uppercase text-gold font-bold">
                                {term.codeSnippet.language}
                              </span>
                              {term.codeSnippet.runContext && (
                                <span className="text-[11px] text-muted-foreground font-mono">
                                  محل قرارگیری: {term.codeSnippet.runContext}
                                </span>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopy(term.codeSnippet!.code, `code-${term.id}`)}
                              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-gold transition-colors"
                            >
                              {isCodeCopied ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">کپی شد</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>کپی کد</span>
                                </>
                              )}
                            </button>
                          </div>

                          <pre className="rounded-2xl border border-white/10 bg-black/70 p-4 font-mono text-xs text-foreground/90 overflow-x-auto leading-relaxed" dir="ltr">
                            <code>{term.codeSnippet.code}</code>
                          </pre>
                          <p className="text-[11px] text-muted-foreground">
                            {term.codeSnippet.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Tags */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                    {term.tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSearchQuery(tag)}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-muted-foreground hover:border-gold/30 hover:text-gold transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Bottom CTA / Funnel Section ── */}
      <section className="container mx-auto px-4 pb-24">
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-b from-surface/90 to-surface/40 p-8 md:p-12 text-center backdrop-blur shadow-elegant relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, oklch(0.83 0.105 72 / 0.15), transparent 70%)",
            }}
          />

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            از دانشنامه تا ساخت محصول واقعی
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-foreground max-w-2xl mx-auto leading-tight">
            می‌خواهید تمام این اصطلاحات را در یک <span className="text-gradient-gold">پروژه زنده وردپرس</span> به کار بگیرید؟
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
            در دورهمی‌های حضوری و سریال‌های تخصصی وایب‌کدینگ حسن شاهمرادی، یاد می‌گیرید چطور با ترکیب ادیتورهای AI و مهندسی دقیق، پروژه‌های لوکس وردپرس را بدون باگ و با بالاترین سرعت خلق کنید.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/vibe-coding"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 text-sm font-black text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5"
            >
              شرکت در دورهمی حضوری وایب‌کدینگ
              <ArrowLeft className="h-4 w-4" />
            </Link>

            <Link
              href="/vibe-coding/series"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/35 bg-gold/5 px-7 py-3.5 text-sm font-bold text-foreground transition hover:border-gold hover:bg-gold/10"
            >
              مشاهده سریال رایگان وایب‌کدینگ
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
            >
              درخواست مشاوره و سفارش پروژه
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
