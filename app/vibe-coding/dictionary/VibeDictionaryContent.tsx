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
  HelpCircle,
  Download,
  Award,
  Zap,
  Eye,
  EyeOff,
  Flame,
  MessageSquarePlus,
  ArrowLeftRight,
} from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/ParticlesBackground";
import {
  allDictionaryTerms,
  categoriesMeta,
  TermCategory,
  DifficultyLevel,
  UserPersona,
  LearningStation,
  searchTerms,
} from "./data";
import StartHereWizard from "./components/StartHereWizard";
import PersonaRoleSelector from "./components/PersonaRoleSelector";
import CurriculumRoadmapBar from "./components/CurriculumRoadmapBar";
import InteractivePromptBuilderModal from "./components/InteractivePromptBuilderModal";
import ConfusingPairsModal from "./components/ConfusingPairsModal";
import FlashcardQuizModal from "./components/FlashcardQuizModal";
import StoryCardShareModal from "./components/StoryCardShareModal";
import FloatingSosHelp from "./components/FloatingSosHelp";
import CommunitySuggestModal from "./components/CommunitySuggestModal";
import { EncyclopediaTerm } from "./data/types";

// Emergency tools for Section 0 (Humanized & Reformulated per Item 45)
const emergencyRescueTools = [
  {
    title: "مستندات و پریزهای اتصال هسته (Hooks Reference)",
    url: "https://developer.wordpress.org/reference/hooks/",
    description: "اگر خواستی بدون شکستن قالب وردپرس، فیچر جدیدی به هدر یا فوتر اضافه کنی.",
    badge: "پریزهای اتصال هسته",
    icon: "layers",
  },
  {
    title: "ژنراتور شناسنامه بلاک (block.json Builder)",
    url: "https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/",
    description: "اگر خواستی بدون المنتور بلاک اختصاصی بسازی که در آپدیت‌های آینده خراب نشود.",
    badge: "بلاک ضد خرابی",
    icon: "code",
  },
  {
    title: "کاوشگر روت‌های REST API وردپرس",
    url: "https://developer.wordpress.org/rest-api/reference/",
    description: "اگر خواستی اپ موبایل یا سایت ری‌اکت را به پیشخوان وردپرس متصل کنی.",
    badge: "اتصال به اپلیکیشن",
    icon: "database",
  },
  {
    title: "ابزار نجات دیتابیس در زمان انتقال هاست (Search-Replace)",
    url: "https://interconnectit.com/search-and-replace-for-wordpress-databases/",
    description: "اگر دامنه سایتت رو عوض کردی و تنظیمات و فونت‌ها ناپدید شدند، این ابزار نجاتت می‌دهد.",
    badge: "تعمیر دیتابیس آسیب‌دیده",
    icon: "terminal",
  },
  {
    title: "سنجشگر زنده سرعت گوگل (PageSpeed Insights)",
    url: "https://pagespeed.web.dev/",
    description: "اگر می‌خواهی بدانی پرش صفحه (CLS) و سرعت لود سایتت از نظر گوگل سبزه یا قرمز.",
    badge: "چکاپ نبض لایت‌هاوس",
    icon: "sparkles",
  },
];

export default function VibeDictionaryContent() {
  // Navigation & Filtering States
  const [selectedCategory, setSelectedCategory] = useState<TermCategory | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | "all">("all");
  const [selectedPersona, setSelectedPersona] = useState<UserPersona | "all">("all");
  const [selectedStation, setSelectedStation] = useState<LearningStation | "all">("all");
  const [selectedPreset, setSelectedPreset] = useState<'landing24h' | 'ecommerce' | 'critical5' | 'nocode' | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState("");

  // UI Modes
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");
  const [revealedCodeTerms, setRevealedCodeTerms] = useState<string[]>([]);
  const [readTerms, setReadTerms] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Modals States
  const [isPromptBuilderOpen, setIsPromptBuilderOpen] = useState(false);
  const [isConfusingPairsOpen, setIsConfusingPairsOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSuggestOpen, setIsSuggestOpen] = useState(false);
  const [selectedShareTerm, setSelectedShareTerm] = useState<EncyclopediaTerm | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load persistence from localStorage
  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem("vibe_dict_favorites");
      if (savedFavs) setFavorites(JSON.parse(savedFavs));

      const savedRead = localStorage.getItem("vibe_dict_read_terms");
      if (savedRead) setReadTerms(JSON.parse(savedRead));
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
      } catch {}
      return updated;
    });
  };

  const markAsRead = (id: string) => {
    if (readTerms.includes(id)) return;
    setReadTerms((prev) => {
      const updated = [...prev, id];
      try {
        localStorage.setItem("vibe_dict_read_terms", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const toggleCodeReveal = (id: string) => {
    setRevealedCodeTerms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => {
      setCopiedItem((curr) => (curr === id ? null : curr));
    }, 2000);
  };

  const handleDownloadRules = () => {
    const content = `# قوانین و چیت‌شیت جامع وایب‌کدینگ وردپرس (HasanShah.ir)
# این فایل را در ریشه پروژه خود با نام .cursorrules یا CHEATSHEET.md ذخیره کنید.

${allDictionaryTerms.map((t) => `## ${t.termEn} (${t.termFa})
- به زبان ساده: ${t.analogy}
- چرا مهم است؟ ${t.realPain}
- پرامپت طلایی:
\`\`\`
${t.goldenPrompt}
\`\`\`
`).join('\n\n')}`;

    const blob = new Blob([content], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "cursorrules-vibe-wordpress.md");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered terms calculation
  const filteredTerms = useMemo(() => {
    let result = searchTerms(
      searchQuery,
      selectedCategory,
      selectedLevel,
      selectedPersona,
      selectedStation,
      selectedPreset
    );

    if (showOnlyFavorites) {
      result = result.filter((t) => favorites.includes(t.id));
    }

    return result;
  }, [
    searchQuery,
    selectedCategory,
    selectedLevel,
    selectedPersona,
    selectedStation,
    selectedPreset,
    showOnlyFavorites,
    favorites,
  ]);

  const readPercentage = Math.round((readTerms.length / allDictionaryTerms.length) * 100);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground" dir="rtl">
      <Nav />

      {/* ── Modals ── */}
      <InteractivePromptBuilderModal
        isOpen={isPromptBuilderOpen}
        onClose={() => setIsPromptBuilderOpen(false)}
      />
      <ConfusingPairsModal
        isOpen={isConfusingPairsOpen}
        onClose={() => setIsConfusingPairsOpen(false)}
      />
      <FlashcardQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
      <StoryCardShareModal
        term={selectedShareTerm}
        onClose={() => setSelectedShareTerm(null)}
      />
      <CommunitySuggestModal
        isOpen={isSuggestOpen}
        onClose={() => setIsSuggestOpen(false)}
      />
      <FloatingSosHelp
        onTriggerPreset={(preset) => {
          setSelectedPreset(preset);
          setSelectedCategory("all");
          setSelectedStation("all");
        }}
      />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-14">
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
            مرجع جامع و هدایت‌شده وایب‌کدینگ وردپرس
          </div>

          <h1 className="text-3xl font-black leading-tight md:text-5xl lg:text-6xl text-foreground">
            الفبای مهندسی <span className="text-gradient-gold">وایب‌کدینگ</span> در وردپرس
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            هوش مصنوعی کد را تولید می‌کند، اما معماری را شما دیکته می‌کنید. مرجع اصطلاحات با استعاره‌های ملموس، پرامپت‌های ضد باگ و راهنمای گام‌به‌گام برای کسانی که می‌خواهند با AI سایت‌های واقعی بسازند.
          </p>

          {/* Quick Action Tools Hub */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() => setIsPromptBuilderOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-gold/15 border border-gold/40 px-4 py-2.5 text-xs font-bold text-gold hover:bg-gold/25 transition-all shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>شبیه‌ساز تولید پرامپت پویا</span>
            </button>

            <button
              type="button"
              onClick={() => setIsConfusingPairsOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/30 bg-purple-400/10 px-4 py-2.5 text-xs font-bold text-purple-300 hover:bg-purple-400/20 transition-all"
            >
              <ArrowLeftRight className="h-4 w-4" />
              <span>تفاوت مفاهیم گیج‌کننده</span>
            </button>

            <button
              type="button"
              onClick={() => setIsQuizOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 text-xs font-bold text-emerald-300 hover:bg-emerald-400/20 transition-all"
            >
              <Award className="h-4 w-4" />
              <span>کوییز تعیین سطح وایب‌کدینگ</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadRules}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
            >
              <Download className="h-4 w-4" />
              <span>دانلود فایل .cursorrules</span>
            </button>

            <button
              type="button"
              onClick={() => setIsSuggestOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
            >
              <MessageSquarePlus className="h-4 w-4" />
              <span>پیشنهاد اصطلاح جدید</span>
            </button>
          </div>

          {/* Reading Progress Tracker (Item 7) */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-surface/70 p-4 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-bold text-muted-foreground mb-2">
              <span className="flex items-center gap-1.5 text-foreground">
                <Flame className="h-4 w-4 text-gold" />
                میزان پیشرفت یادگیری شما:
              </span>
              <span className="text-gold font-mono">{readTerms.length} از {allDictionaryTerms.length} ({readPercentage}٪)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-gold transition-all duration-500 rounded-full"
                style={{ width: `${Math.max(readPercentage, 3)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Start Here Wizard Component (Items 1, 5, 6) ── */}
      <StartHereWizard
        onSelectPreset={(preset) => {
          setSelectedPreset(preset);
          setSelectedCategory("all");
          setSelectedStation("all");
        }}
      />

      {/* ── Section 0: Emergency Rescue Tools (Item 45 & AGENTS.md) ── */}
      <section id="quick-access-tools" className="container mx-auto px-4 pb-8">
        <div className="rounded-3xl border border-gold/30 bg-surface/80 p-6 md:p-8 backdrop-blur shadow-elegant">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-lg md:text-xl font-black text-foreground border-r-4 border-gold pr-3">
                ۰. جعبه نجات اضطراری سایت در زمان بحران
              </h2>
              <p className="mt-1 text-xs text-muted-foreground pr-4">
                منابع رسمی و تست‌کننده‌های زنده که در زمان قفل شدن پیشخوان، باگ‌های دیتابیس یا افت سرعت نجاتت می‌دهند
              </p>
            </div>
            <span className="self-start sm:self-auto rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
              ابزارهای ضروری
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {emergencyRescueTools.map((tool, idx) => (
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
                  <span>باز کردن ابزار</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learning Stations & Presets (Pillar 2) ── */}
      <section className="container mx-auto px-4 pb-8">
        <div className="rounded-3xl border border-white/10 bg-surface/50 p-6 md:p-8 backdrop-blur space-y-6">
          {/* Persona Switcher (Pillar 6) */}
          <PersonaRoleSelector
            activePersona={selectedPersona}
            onSelectPersona={(persona) => setSelectedPersona(persona)}
          />

          {/* Curriculum Stations (Pillar 2) */}
          <div className="border-t border-white/10 pt-5">
            <CurriculumRoadmapBar
              activeStation={selectedStation}
              onSelectStation={(st) => setSelectedStation(st)}
              activePreset={selectedPreset}
              onSelectPreset={(pr) => setSelectedPreset(pr)}
            />
          </div>

          {/* Search Box & Controls */}
          <div className="border-t border-white/10 pt-5 space-y-4">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو بر اساس نیاز (مثلاً: سایتم کند شده، هک نشم، لندینگ، رنگ، یا نام انگلیسی)..."
                className="w-full rounded-2xl border border-white/15 bg-background/80 py-4 pr-12 pl-28 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-1 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2 py-1 text-[11px] font-mono text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>

            {/* View Mode & Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-bold text-muted-foreground">
                  {filteredTerms.length} اصطلاح متناسب با فیلتر شما یافت شد
                </span>
                {favorites.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold border ${
                      showOnlyFavorites
                        ? "border-amber-400 bg-amber-400/20 text-amber-300"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <BookmarkCheck className="h-3.5 w-3.5" />
                    <span>برگزیده‌های من ({favorites.length})</span>
                  </button>
                )}
              </div>

              {/* View Mode Toggle (Item 27) */}
              <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("detailed")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    viewMode === "detailed" ? "bg-gold text-gold-foreground font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  نمای تشریحی کامل
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("compact")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    viewMode === "compact" ? "bg-gold text-gold-foreground font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  نمای فشرده بنتو
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Terms Grid Section ── */}
      <section className="container mx-auto px-4 pb-20">
        {filteredTerms.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-surface/40 p-12 text-center space-y-3">
            <Brain className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h3 className="text-lg font-bold text-foreground">هیچ اصطلاحی با این شرایط پیدا نشد</h3>
            <p className="text-sm text-muted-foreground">
              کلمه دیگری را جستجو کنید یا فیلترهای مسیر و نقش را بازنشانی فرمایید.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedLevel("all");
                setSelectedPersona("all");
                setSelectedStation("all");
                setSelectedPreset("all");
                setShowOnlyFavorites(false);
              }}
              className="mt-2 rounded-xl border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-bold text-gold hover:bg-gold/20 transition-all"
            >
              پاک کردن همه فیلترها
            </button>
          </div>
        ) : (
          <div className={viewMode === "detailed" ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"}>
            {filteredTerms.map((term) => {
              const isFavorite = favorites.includes(term.id);
              const isRead = readTerms.includes(term.id);
              const isPromptCopied = copiedItem === `prompt-${term.id}`;
              const isCodeRevealed = revealedCodeTerms.includes(term.id);

              return (
                <article
                  key={term.id}
                  id={term.id}
                  onClick={() => markAsRead(term.id)}
                  className={`scroll-mt-32 rounded-3xl border bg-surface/75 backdrop-blur transition-all duration-300 flex flex-col justify-between ${
                    isRead ? "border-white/10" : "border-gold/30 shadow-sm"
                  } hover:border-gold/50 hover:shadow-elegant ${viewMode === "detailed" ? "p-6 md:p-7" : "p-5"}`}
                >
                  <div className="space-y-4">
                    {/* Header Badges */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-1 text-[11px] font-bold text-gold bg-gold/10 border border-gold/30 rounded-full px-2.5 py-0.5">
                          قدم {term.sequenceOrder} از ۳۶
                        </span>
                        <span className="text-[11px] text-muted-foreground bg-white/5 rounded-full px-2 py-0.5">
                          ⏱️ {term.readingTimeMinutes} دقیقه مطالعه
                        </span>
                        {term.isNoCodeFriendly && (
                          <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-2 py-0.5">
                            بدون نیاز به کد
                          </span>
                        )}
                      </div>

                      {/* Action Icons */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedShareTerm(term);
                          }}
                          className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-gold transition-colors"
                          title="اشتراک‌گذاری در استوری"
                        >
                          <Share2 className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(term.id);
                          }}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            isFavorite
                              ? "border-amber-400/40 bg-amber-400/20 text-amber-300"
                              : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
                          }`}
                          title="نشان کردن در برگزیده‌ها"
                        >
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Titles */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl md:text-2xl font-black text-foreground">
                          {term.termEn}
                        </h2>
                        {term.phonetic && (
                          <span className="text-[11px] font-mono text-muted-foreground bg-white/5 rounded-md px-2 py-0.5">
                            {term.phonetic}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-gold">
                        {term.termFa}
                      </h3>
                    </div>

                    {/* Human Question Subtitle (Item 20) */}
                    <div className="text-xs md:text-sm font-bold text-foreground/90 bg-white/[0.03] border-r-2 border-gold pr-3 py-1">
                      ❓ {term.humanQuestion}
                    </div>

                    {/* Everyday Analogy Callout (Item 19 - به زبان آدمیزاد) */}
                    <div className="rounded-2xl border border-amber-400/35 bg-gradient-to-r from-amber-400/15 to-amber-400/5 p-4 text-amber-100 leading-relaxed text-xs md:text-sm shadow-sm">
                      <div className="flex items-center gap-1.5 font-black text-amber-300 text-xs md:text-sm mb-1">
                        <Lightbulb className="h-4 w-4 shrink-0 text-amber-400" />
                        <span>به زبان آدمیزاد (استعاره روزمره):</span>
                      </div>
                      <p className="leading-loose text-amber-100/95 font-medium">
                        {term.analogy}
                      </p>
                    </div>

                    {/* Detailed View Exclusive Content */}
                    {viewMode === "detailed" && (
                      <div className="space-y-3 pt-1">
                        {/* Real Pain Alert (Item 21) */}
                        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-3.5 text-xs text-rose-200 leading-relaxed">
                          <div className="flex items-center gap-1.5 font-bold text-rose-300 mb-1">
                            <ShieldAlert className="h-4 w-4 shrink-0" />
                            <span>اگر ندانی چه فاجعه‌ای رخ میده؟</span>
                          </div>
                          <p className="leading-relaxed">{term.realPain}</p>
                        </div>

                        {/* AI Common Error Box (Item 22) */}
                        {term.commonAiError && (
                          <div className="rounded-2xl border border-white/10 bg-black/40 p-3.5 space-y-1.5 text-xs">
                            <div className="text-muted-foreground font-semibold flex items-center gap-1">
                              <span>🤖 خطای متداول هوش مصنوعی در ادیتور:</span>
                            </div>
                            <code className="block font-mono text-[11px] text-rose-300/90 bg-rose-950/40 p-2 rounded-xl truncate" dir="ltr">
                              {term.commonAiError.errorSnippet}
                            </code>
                            <div className="text-muted-foreground text-[11px] pt-1 leading-relaxed">
                              <strong>مفهوم به فارسی:</strong> {term.commonAiError.explanationFa}
                            </div>
                          </div>
                        )}

                        {/* Freelance Tip (Item 43) */}
                        {term.freelanceTip && (
                          <div className="rounded-2xl border border-purple-500/25 bg-purple-500/10 p-3 text-xs text-purple-200 leading-relaxed">
                            <strong>💼 فوت کوزه‌گری برای فریلنسرها:</strong> {term.freelanceTip}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Golden Prompt Box (Always Visible) */}
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-gold flex items-center gap-1">
                          <Sparkles className="h-3.5 w-3.5" />
                          پرامپت طلایی برای تحویل به هوش مصنوعی:
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(term.goldenPrompt, `prompt-${term.id}`);
                          }}
                          className="inline-flex items-center gap-1 rounded-lg border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-bold text-gold hover:bg-gold/25 transition-all shadow-sm"
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

                      <div className="font-mono text-xs text-foreground/90 leading-relaxed line-clamp-3 select-all">
                        {term.goldenPrompt}
                      </div>
                    </div>

                    {/* Hide Code by Default (Item 26) */}
                    {term.codeSnippet && (
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCodeReveal(term.id);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors py-1"
                        >
                          {isCodeRevealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                          <span>{isCodeRevealed ? "مخفی کردن نمونه کد فنی" : "مشاهده نمونه کد (اختیاری برای برنامه‌نویسان)"}</span>
                        </button>

                        {isCodeRevealed && (
                          <div className="mt-2 rounded-2xl border border-white/10 bg-black/80 p-4 space-y-2 animate-in fade-in duration-200">
                            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                              <span className="uppercase text-gold font-mono font-bold">
                                {term.codeSnippet.language} {term.codeSnippet.runContext ? `(${term.codeSnippet.runContext})` : ""}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(term.codeSnippet!.code, `code-${term.id}`);
                                }}
                                className="text-muted-foreground hover:text-gold transition-colors"
                              >
                                {copiedItem === `code-${term.id}` ? "کپی شد!" : "کپی کد"}
                              </button>
                            </div>
                            <pre className="font-mono text-xs text-foreground/90 overflow-x-auto leading-relaxed" dir="ltr">
                              <code>{term.codeSnippet.code}</code>
                            </pre>
                            <p className="text-[11px] text-muted-foreground">{term.codeSnippet.description}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Tags */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                    {term.tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSearchQuery(tag);
                        }}
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
