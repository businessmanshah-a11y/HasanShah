"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  Sparkles,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  List,
  LayoutGrid,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  ExternalLink,
  Flame,
  ArrowUpRight,
  Shield,
  ShieldAlert,
  Lightbulb,
  Award,
  ArrowLeftRight,
  MessageSquarePlus,
  Share2,
  Brain,
  X,
  Printer,
  Gauge,
  FileCode2,
  BookOpen,
  Terminal,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Eye,
  EyeOff,
  SlidersHorizontal,
  Wrench,
  Code2,
  Play,
  Compass,
  Rocket,
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
import PrintableCheatSheetModal from "./components/PrintableCheatSheetModal";
import ContextWindowCalculatorModal from "./components/ContextWindowCalculatorModal";
import CursorRulesDownloadModal from "./components/CursorRulesDownloadModal";
import ZenModeModal from "./components/ZenModeModal";
import VibeManifestoSection from "./components/VibeManifestoSection";
import GamificationHud from "./components/GamificationHud";
import QuestStageMap from "./components/QuestStageMap";
import StageCheckpointModal from "./components/StageCheckpointModal";
import DigitalCertificateModal from "./components/DigitalCertificateModal";
import ActiveStageSpotlightCard from "./components/ActiveStageSpotlightCard";
import InteractivePromptSandboxModal from "./components/InteractivePromptSandboxModal";
import StudioToolsDrawerModal from "./components/StudioToolsDrawerModal";
import PromptLinterModal from "./components/PromptLinterModal";
import VibeSkillPassportModal from "./components/VibeSkillPassportModal";
import SpeedDebugChallengeModal from "./components/SpeedDebugChallengeModal";
import ZeroToHeroGuideModal from "./components/ZeroToHeroGuideModal";
import FirstRealProjectBuilderModal from "./components/FirstRealProjectBuilderModal";
import QualityGuaranteeSealSection from "./components/QualityGuaranteeSealSection";
import { questStages, calculateUserLevel } from "./data/quest-stages";
import { EncyclopediaTerm, QuestStage, UserGamificationProfile } from "./data/types";
import { playClickSound, playSuccessChime, playLevelUpFanfare } from "./utils/soundEffects";

// Emergency tools for Section 0 (Humanized & Reformulated per Item 45 & AGENTS.md)
const emergencyRescueTools = [
  {
    title: "مستندات و پریزهای اتصال هسته (Hooks Reference)",
    url: "https://developer.wordpress.org/reference/hooks/",
    description: "اگر خواستی بدون شکستن قالب وردپرس، فیچر جدیدی به هدر یا فوتر اضافه کنی.",
    badge: "پریزهای اتصال هسته",
  },
  {
    title: "ژنراتور شناسنامه بلاک (block.json Builder)",
    url: "https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/",
    description: "اگر خواستی بدون المنتور بلاک اختصاصی بسازی که در آپدیت‌های آینده خراب نشود.",
    badge: "بلاک ضد خرابی",
  },
  {
    title: "کاوشگر روت‌های REST API وردپرس",
    url: "https://developer.wordpress.org/rest-api/reference/",
    description: "اگر خواستی اپ موبایل یا سایت ری‌اکت را به پیشخوان وردپرس متصل کنی.",
    badge: "اتصال به اپلیکیشن",
  },
  {
    title: "ابزار نجات دیتابیس در زمان انتقال هاست (Search-Replace)",
    url: "https://interconnectit.com/search-and-replace-for-wordpress-databases/",
    description: "اگر دامنه سایتت رو عوض کردی و تنظیمات و فونت‌ها ناپدید شدند، این ابزار نجاتت می‌دهد.",
    badge: "تعمیر دیتابیس آسیب‌دیده",
  },
  {
    title: "سنجشگر زنده سرعت گوگل (PageSpeed Insights)",
    url: "https://pagespeed.web.dev/",
    description: "اگر می‌خواهی بدانی پرش صفحه (CLS) و سرعت لود سایتت از نظر گوگل سبزه یا قرمز.",
    badge: "چکاپ نبض لایت‌هاوس",
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

  // Card Tab States (termId -> "concept" | "prompt" | "test" | "code")
  const [cardActiveTab, setCardActiveTab] = useState<Record<string, "concept" | "prompt" | "test" | "code">>({});
  const [promptEditorMode, setPromptEditorMode] = useState<Record<string, "universal" | "cursor" | "claude">>({});
  const [expandedCardDetails, setExpandedCardDetails] = useState<Record<string, boolean>>({});

  // UI Modes
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("compact");
  const [readTerms, setReadTerms] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const toggleCardDetails = (termId: string) => {
    setExpandedCardDetails((prev) => ({
      ...prev,
      [termId]: !prev[termId],
    }));
  };

  // Gamification & Quest State (Step 2)
  const [activeLearningView, setActiveLearningView] = useState<"quest" | "reference">("reference");
  const [gamificationProfile, setGamificationProfile] = useState<UserGamificationProfile>({
    xp: 0,
    level: 1,
    rankTitle: "شاگرد صفر کیلومتر",
    streakDays: 1,
    completedTermIds: [],
    completedStageNumbers: [],
    unlockedBadgeIds: [],
    quizAttempts: {},
  });
  const [activeCheckpointStage, setActiveCheckpointStage] = useState<QuestStage | null>(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Modals States
  const [isPromptBuilderOpen, setIsPromptBuilderOpen] = useState(false);
  const [isConfusingPairsOpen, setIsConfusingPairsOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSuggestOpen, setIsSuggestOpen] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCursorRulesOpen, setIsCursorRulesOpen] = useState(false);
  const [isSandboxOpen, setIsSandboxOpen] = useState(false);
  const [isStudioDrawerOpen, setIsStudioDrawerOpen] = useState(false);
  const [isLinterOpen, setIsLinterOpen] = useState(false);
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const [isSpeedChallengeOpen, setIsSpeedChallengeOpen] = useState(false);
  const [isZeroToHeroOpen, setIsZeroToHeroOpen] = useState(false);
  const [isFirstProjectOpen, setIsFirstProjectOpen] = useState(false);
  const [zenModeTermId, setZenModeTermId] = useState<string | null>(null);
  const [selectedShareTerm, setSelectedShareTerm] = useState<EncyclopediaTerm | null>(null);

  // Scroll Progress
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load persistence from localStorage
  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem("vibe_dict_favorites");
      if (savedFavs) setFavorites(JSON.parse(savedFavs));

      const savedRead = localStorage.getItem("vibe_dict_read_terms");
      if (savedRead) setReadTerms(JSON.parse(savedRead));

      const savedView = localStorage.getItem("vibe_dict_learning_view");
      if (savedView === "quest" || savedView === "reference") {
        setActiveLearningView(savedView);
      }

      const savedProfile = localStorage.getItem("vibe_gamification_profile");
      if (savedProfile) {
        const parsed: UserGamificationProfile = JSON.parse(savedProfile);
        
        // Calculate daily streak
        const todayStr = new Date().toISOString().split("T")[0];
        const lastActiveDate = localStorage.getItem("vibe_last_active_date");
        let streak = parsed.streakDays || 1;
        if (lastActiveDate) {
          const diffDays = Math.round(
            (new Date(todayStr).getTime() - new Date(lastActiveDate).getTime()) / (1000 * 60 * 60 * 24)
          );
          if (diffDays === 1) {
            streak = streak + 1;
          } else if (diffDays > 1) {
            streak = 1;
          }
        }
        localStorage.setItem("vibe_last_active_date", todayStr);

        const lvl = calculateUserLevel(parsed.xp || 0);
        setGamificationProfile({
          ...parsed,
          level: lvl.level,
          rankTitle: lvl.rankTitle,
          streakDays: streak,
        });
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Keyboard shortcut Cmd+K, Ctrl+K, /, and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setIsSandboxOpen(false);
        setIsStudioDrawerOpen(false);
        setIsLinterOpen(false);
        setIsPassportOpen(false);
        setIsSpeedChallengeOpen(false);
        setIsZeroToHeroOpen(false);
        setIsFirstProjectOpen(false);
        setIsPromptBuilderOpen(false);
        setIsConfusingPairsOpen(false);
        setIsQuizOpen(false);
        setIsCheatSheetOpen(false);
        setIsCalculatorOpen(false);
        setIsCursorRulesOpen(false);
        setIsCertificateOpen(false);
        setActiveCheckpointStage(null);
        setZenModeTermId(null);
        setSelectedShareTerm(null);
        setIsSuggestOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Track scroll for Back-to-Top and Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleLearningView = (mode: "quest" | "reference") => {
    setActiveLearningView(mode);
    try {
      localStorage.setItem("vibe_dict_learning_view", mode);
    } catch {}
  };

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
    let updatedReadTerms = readTerms;
    if (!readTerms.includes(id)) {
      updatedReadTerms = [...readTerms, id];
      setReadTerms(updatedReadTerms);
      try {
        localStorage.setItem("vibe_dict_read_terms", JSON.stringify(updatedReadTerms));
      } catch {}
    }

    // Award +30 XP for reading/exploring a term
    setGamificationProfile((prev) => {
      if (prev.completedTermIds.includes(id)) return prev;
      playSuccessChime();
      const newXp = prev.xp + 30;
      const lvl = calculateUserLevel(newXp);
      const updated: UserGamificationProfile = {
        ...prev,
        xp: newXp,
        level: lvl.level,
        rankTitle: lvl.rankTitle,
        completedTermIds: [...prev.completedTermIds, id],
      };
      try {
        localStorage.setItem("vibe_gamification_profile", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleStagePassed = (stageNumber: number, earnedXp: number, badgeId?: string) => {
    playSuccessChime();
    setGamificationProfile((prev) => {
      const isAlreadyCompleted = prev.completedStageNumbers.includes(stageNumber);
      const newStages = isAlreadyCompleted
        ? prev.completedStageNumbers
        : [...prev.completedStageNumbers, stageNumber];

      const newBadges =
        badgeId && !prev.unlockedBadgeIds.includes(badgeId)
          ? [...prev.unlockedBadgeIds, badgeId]
          : prev.unlockedBadgeIds;

      const newXp = prev.xp + earnedXp;
      const lvl = calculateUserLevel(newXp);

      const updated: UserGamificationProfile = {
        ...prev,
        xp: newXp,
        level: lvl.level,
        rankTitle: lvl.rankTitle,
        completedStageNumbers: newStages,
        unlockedBadgeIds: newBadges,
      };

      try {
        localStorage.setItem("vibe_gamification_profile", JSON.stringify(updated));
      } catch {}

      return updated;
    });
  };

  const handleFirstProjectComplete = (earnedXp: number, badgeId: string) => {
    playLevelUpFanfare();
    setGamificationProfile((prev) => {
      const newBadges = !prev.unlockedBadgeIds.includes(badgeId)
        ? [...prev.unlockedBadgeIds, badgeId]
        : prev.unlockedBadgeIds;

      const newXp = prev.xp + earnedXp;
      const lvl = calculateUserLevel(newXp);

      const updated: UserGamificationProfile = {
        ...prev,
        xp: newXp,
        level: lvl.level,
        rankTitle: lvl.rankTitle,
        unlockedBadgeIds: newBadges,
      };

      try {
        localStorage.setItem("vibe_gamification_profile", JSON.stringify(updated));
      } catch {}

      return updated;
    });
  };

  const handleSpeedChallengeComplete = (earnedXp: number, badgeId?: string) => {
    playSuccessChime();
    setGamificationProfile((prev) => {
      const newBadges =
        badgeId && !prev.unlockedBadgeIds.includes(badgeId)
          ? [...prev.unlockedBadgeIds, badgeId]
          : prev.unlockedBadgeIds;

      const newXp = prev.xp + earnedXp;
      const lvl = calculateUserLevel(newXp);

      const updated: UserGamificationProfile = {
        ...prev,
        xp: newXp,
        level: lvl.level,
        rankTitle: lvl.rankTitle,
        unlockedBadgeIds: newBadges,
      };

      try {
        localStorage.setItem("vibe_gamification_profile", JSON.stringify(updated));
      } catch {}

      return updated;
    });
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    playClickSound();
    setTimeout(() => {
      setCopiedItem((curr) => (curr === id ? null : curr));
    }, 2000);
  };

  const setTermTab = (termId: string, tab: "concept" | "prompt" | "test" | "code") => {
    setCardActiveTab((prev) => ({ ...prev, [termId]: tab }));
  };

  const togglePromptEditor = (termId: string, mode: "universal" | "cursor" | "claude") => {
    setPromptEditorMode((prev) => ({ ...prev, [termId]: mode }));
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

      {/* ── Modals Hub ── */}
      <StageCheckpointModal
        stage={activeCheckpointStage}
        isOpen={!!activeCheckpointStage}
        onClose={() => setActiveCheckpointStage(null)}
        onStagePassed={handleStagePassed}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />
      <DigitalCertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        userXp={gamificationProfile.xp}
        completedStagesCount={gamificationProfile.completedStageNumbers.length}
      />
      <InteractivePromptSandboxModal
        isOpen={isSandboxOpen}
        onClose={() => setIsSandboxOpen(false)}
      />
      <PromptLinterModal
        isOpen={isLinterOpen}
        onClose={() => setIsLinterOpen(false)}
      />
      <VibeSkillPassportModal
        isOpen={isPassportOpen}
        onClose={() => setIsPassportOpen(false)}
        profile={gamificationProfile}
      />
      <SpeedDebugChallengeModal
        isOpen={isSpeedChallengeOpen}
        onClose={() => setIsSpeedChallengeOpen(false)}
        onChallengeComplete={handleSpeedChallengeComplete}
      />
      <StudioToolsDrawerModal
        isOpen={isStudioDrawerOpen}
        onClose={() => setIsStudioDrawerOpen(false)}
        onOpenPromptBuilder={() => setIsPromptBuilderOpen(true)}
        onOpenCursorRules={() => setIsCursorRulesOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenConfusingPairs={() => setIsConfusingPairsOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenZenMode={() => setZenModeTermId(allDictionaryTerms[0].id)}
        onOpenSandbox={() => setIsSandboxOpen(true)}
        onOpenLinter={() => setIsLinterOpen(true)}
        onOpenPassport={() => setIsPassportOpen(true)}
        onOpenSpeedChallenge={() => setIsSpeedChallengeOpen(true)}
        onOpenZeroToHero={() => setIsZeroToHeroOpen(true)}
        onOpenFirstProject={() => setIsFirstProjectOpen(true)}
      />
      <ZeroToHeroGuideModal
        isOpen={isZeroToHeroOpen}
        onClose={() => setIsZeroToHeroOpen(false)}
        onStartFirstProject={() => setIsFirstProjectOpen(true)}
        onOpenRulesDownload={() => setIsCursorRulesOpen(true)}
      />
      <FirstRealProjectBuilderModal
        isOpen={isFirstProjectOpen}
        onClose={() => setIsFirstProjectOpen(false)}
        onProjectComplete={handleFirstProjectComplete}
      />
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
      <PrintableCheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
      <ContextWindowCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
      <CursorRulesDownloadModal
        isOpen={isCursorRulesOpen}
        onClose={() => setIsCursorRulesOpen(false)}
      />
      <ZenModeModal
        initialTermId={zenModeTermId || undefined}
        isOpen={!!zenModeTermId}
        onClose={() => setZenModeTermId(null)}
      />
      <FloatingSosHelp
        onTriggerPreset={(preset) => {
          setSelectedPreset(preset);
          setSelectedCategory("all");
          setSelectedStation("all");
        }}
      />

      {/* ── Back to Top Button with Circular Progress (Item 48) ── */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 bg-[#090D16]/90 text-amber-300 shadow-2xl backdrop-blur-md hover:scale-105 hover:bg-amber-400/10 transition-all group"
          title="بازگشت به ابتدای صفحه"
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              className="text-white/10"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              className="text-amber-400 transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={125.6}
              strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <ChevronUp className="h-5 w-5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

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
            <span className="text-gold font-semibold">دانشنامه و پرامپت‌های طلایی</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            نسخه ۳.۰ • مجهز به ۶۰ اصطلاح حیاتی، استاندارد جهانی AGENTS.md و پرامپت‌های ۵ لایه‌ای
          </div>

          <h1 className="text-3xl font-black leading-tight md:text-5xl lg:text-6xl text-foreground">
            دانشنامه مهندسی <span className="text-gradient-gold">وایب‌کدینگ وردپرس</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            هوش مصنوعی کد را تولید می‌کند، اما معماری را شما دیکته می‌کنید. مرجع ۶۰ اصطلاح حیاتی وردپرس با قوانین استاندارد <code className="text-emerald-400 font-mono text-sm px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">AGENTS.md</code> برای همه مدل‌های هوش مصنوعی (Cursor, Claude, Copilot, ChatGPT, Antigravity)، تمثیل‌های ملموس، پرامپت‌های ۵ لایه‌ای و راه‌حل تست ۳۰ ثانیه‌ای.
          </p>

          {/* ── Central Hero Search Box (Instant Access to 60 Terms) ── */}
          <div className="mt-8 max-w-2xl mx-auto space-y-3">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-400/80" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در ۶۰ اصطلاح یا ارور (مثلاً: AGENTS.md، transients، هوک، دیتابیس، کش، هاست)..."
                className="w-full rounded-2xl border border-amber-400/30 bg-[#090D16]/90 py-4 pr-12 pl-28 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 shadow-2xl backdrop-blur-xl transition-all"
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

            {/* Quick intent keywords pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
              <span className="text-muted-foreground font-semibold">🔍 کلمات پرتکرار:</span>
              {[
                { label: "AGENTS.md", query: "AGENTS.md" },
                { label: "سایتم کند شده (کش)", query: "کش" },
                { label: "ارور و باگ", query: "ارور" },
                { label: "امنیت و نانس", query: "امنیت" },
                { label: "دیتابیس و ایندکس", query: "دیتابیس" },
                { label: "REST API", query: "REST" },
              ].map((pill) => (
                <button
                  key={pill.label}
                  type="button"
                  onClick={() => setSearchQuery(pill.query)}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground hover:border-amber-400/40 hover:text-amber-300 transition-colors"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Elevated Clean Action Bar: Just 2 Refined Actions ── */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 max-w-xl mx-auto">
            <button
              type="button"
              onClick={() => setIsZeroToHeroOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-xs md:text-sm font-bold text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <Compass className="h-4 w-4 text-emerald-400" />
              <span>🌱 راهنمای شروع سریع (صفر تا صد)</span>
            </button>

            <button
              type="button"
              onClick={() => setIsStudioDrawerOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/40 bg-amber-400/10 px-5 py-2.5 text-xs md:text-sm font-bold text-amber-300 hover:bg-amber-400/20 hover:border-amber-400 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <Wrench className="h-4 w-4 text-amber-400" />
              <span>🧰 استودیو و جعبه‌ابزار هوشمند</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Section 0: Emergency Rescue Tools (Item 45 & AGENTS.md Compliant) ── */}
      <section id="quick-access-tools" className="container mx-auto px-4 pb-6">
        <div className="rounded-2xl border border-amber-400/25 bg-surface/60 p-3.5 md:p-4 backdrop-blur shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <h2 className="text-xs md:text-sm font-bold text-foreground">
                ۰. دسترسی سریع به ابزارهای رسمی و نجات سایت:
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {emergencyRescueTools.map((tool, idx) => (
                <a
                  key={idx}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/20 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 transition-all"
                  title={tool.description}
                >
                  <span className="font-medium">{tool.title}</span>
                  <ExternalLink className="h-3 w-3 text-amber-400/70" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Bar & Dual View Mode Switcher (Clean, Modern & High-Performance) ── */}
      <section className="container mx-auto px-4 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
            {[
              { id: "all", label: "همه (۶۰)" },
              { id: "vibe-ai", label: "🤖 هوش مصنوعی (۱۲)" },
              { id: "wp-core", label: "⚡ هسته وردپرس (۱۳)" },
              { id: "database-api", label: "🗄️ دیتابیس (۱۰)" },
              { id: "frontend", label: "🎨 فرانت‌اند (۹)" },
              { id: "ui-ux", label: "📱 طراحی (۸)" },
              { id: "devops-server", label: "🛠️ دواپس (۸)" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id as any);
                  setSelectedStation("all");
                  setSelectedPreset("all");
                }}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                    : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* View Mode Switcher (Compact Directory vs Cards) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("compact")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "compact"
                  ? "bg-amber-400 text-black shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="نمایش فهرست ردیفی سریع و سبک"
            >
              <List className="h-3.5 w-3.5" />
              <span>فهرست سریع</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("detailed")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "detailed"
                  ? "bg-amber-400 text-black shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="نمایش کارتی مفصل"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>کارت‌ها</span>
            </button>
          </div>
        </div>

        {/* Quick Result Info */}
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground px-1">
          <span className="font-medium">
            نمایش <strong>{filteredTerms.length}</strong> اصطلاح تخصصی
            {searchQuery ? ` برای جستجوی «${searchQuery}»` : ""}
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
              <span>برگزیده‌ها ({favorites.length})</span>
            </button>
          )}
        </div>
      </section>

      {/* ── Terms Grid Section ── */}
      <section className="container mx-auto px-4 pb-12">
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
              className="mt-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-bold text-amber-300 hover:bg-amber-400/20 transition-all"
            >
              پاک کردن همه فیلترها
            </button>
          </div>
        ) : viewMode === "compact" ? (
          /* ── 1. Compact Directory View (Default: Ultra-Light, Super Fast, 0-Clutter) ── */
          <div className="space-y-2.5">
            {filteredTerms.map((term) => {
              const isPromptCopied = copiedItem === `prompt-${term.id}`;
              const isExpanded = !!expandedCardDetails[term.id];
              const currentPromptText =
                term.universalPrompt || term.goldenPrompt || term.cursorPrompt || term.claudePrompt;

              return (
                <div
                  key={term.id}
                  id={term.id}
                  className="rounded-2xl border border-white/10 bg-surface/75 hover:border-amber-400/40 transition-all duration-200 overflow-hidden"
                >
                  {/* Row Header */}
                  <div
                    onClick={() => toggleCardDetails(term.id)}
                    className="flex flex-col md:flex-row md:items-center justify-between p-3.5 md:p-4 cursor-pointer gap-3 hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-bold text-amber-300">
                        {String(term.sequenceOrder).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 truncate">
                        <span className="font-bold text-sm md:text-base text-foreground font-mono">
                          {term.termEn}
                        </span>
                        <span className="text-xs text-amber-400 font-medium">
                          {term.termFa}
                        </span>
                      </div>
                      <span className="hidden lg:inline-block text-xs text-muted-foreground truncate border-r border-white/10 pr-2">
                        {term.humanQuestion}
                      </span>
                    </div>

                    {/* Quick 1-Click Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(currentPromptText, `prompt-${term.id}`);
                        }}
                        className="inline-flex items-center gap-1 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400/20 hover:border-amber-400 transition-all shadow-sm"
                        title="کپی پرامپت طلایی فارسی"
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

                      {term.agentsMdRule && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(term.agentsMdRule!, `agents-rule-${term.id}`);
                          }}
                          className="hidden sm:inline-flex items-center gap-1 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all shadow-sm"
                          title="کپی بند قانون AGENTS.md"
                        >
                          {copiedItem === `agents-rule-${term.id}` ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              <span>کپی شد!</span>
                            </>
                          ) : (
                            <>
                              <Shield className="h-3.5 w-3.5 text-emerald-400" />
                              <span>AGENTS.md</span>
                            </>
                          )}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardDetails(term.id);
                        }}
                        className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-amber-300 hover:border-amber-400/30 transition-all"
                        title={isExpanded ? "بستن جزئیات" : "مشاهده جزئیات کامل و تست"}
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Row Content */}
                  {isExpanded && (
                    <div className="border-t border-white/10 p-5 space-y-4 bg-black/40 animate-in fade-in duration-200">
                      <div className="lg:hidden text-xs font-bold text-foreground/90 bg-white/[0.03] border-r-2 border-amber-400 pr-3 py-1">
                        ❓ {term.humanQuestion}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-3.5 text-xs md:text-sm leading-relaxed">
                          <div className="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
                            <Lightbulb className="h-4 w-4 text-amber-400 shrink-0" />
                            <span>به زبان آدمیزاد:</span>
                          </div>
                          <p className="text-amber-100/90 leading-relaxed font-medium">
                            {term.analogy}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-rose-500/25 bg-rose-500/10 p-3.5 text-xs text-rose-200 leading-relaxed">
                          <div className="flex items-center gap-1.5 font-bold text-rose-300 mb-1">
                            <AlertTriangle className="h-4 w-4 shrink-0" />
                            <span>تله مرگبار:</span>
                          </div>
                          <p className="leading-relaxed">{term.beginnerTrap}</p>
                        </div>
                      </div>

                      {/* Full Prompt Display */}
                      <div className="rounded-2xl border border-white/10 bg-black/70 p-3.5 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-amber-300 flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                            <span>پرامپت طلایی فارسی:</span>
                          </span>
                          <span className="font-mono text-[11px] text-muted-foreground">
                            📁 {term.injectionTarget}
                          </span>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-black/90 p-3 font-sans text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed max-h-44 overflow-y-auto select-all" dir="rtl">
                          {currentPromptText}
                        </div>
                      </div>

                      {/* AGENTS.md Rule Box */}
                      {term.agentsMdRule && (
                        <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-3.5 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                              <Shield className="h-3.5 w-3.5 shrink-0" />
                              <span>بند استاندارد برای AGENTS.md:</span>
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(term.agentsMdRule!, `agents-rule-${term.id}`);
                              }}
                              className="text-[11px] text-emerald-300 hover:text-white"
                            >
                              {copiedItem === `agents-rule-${term.id}` ? "کپی شد!" : "کپی بند"}
                            </button>
                          </div>
                          <pre className="p-2.5 rounded-xl bg-black/80 font-mono text-[11px] text-emerald-300/95 leading-relaxed text-left overflow-x-auto whitespace-pre-wrap select-all border border-emerald-500/20" dir="ltr">
                            {term.agentsMdRule}
                          </pre>
                        </div>
                      )}

                      {/* 30-Second Verification & Code Snippet */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                        <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-3.5 space-y-1.5">
                          <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                            <span>تست ۳۰ ثانیه‌ای:</span>
                          </span>
                          <ol className="space-y-1 list-decimal list-inside text-muted-foreground font-sans pr-1">
                            {term.howToTest.steps.slice(0, 3).map((st, sI) => (
                              <li key={sI} className="leading-relaxed truncate">
                                {st}
                              </li>
                            ))}
                          </ol>
                          <div className="pt-1 border-t border-white/10 text-[11px] text-muted-foreground truncate">
                            🎯 <strong>تایید:</strong> {term.howToTest.expectedResult}
                          </div>
                        </div>

                        {term.codeSnippet ? (
                          <div className="rounded-2xl border border-white/10 bg-black/60 p-3.5 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                              <span className="uppercase text-amber-400 font-mono font-bold">
                                {term.codeSnippet.language}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(term.codeSnippet!.code, `code-${term.id}`);
                                }}
                                className="hover:text-amber-400 transition-colors"
                              >
                                {copiedItem === `code-${term.id}` ? "کپی شد!" : "کپی کد"}
                              </button>
                            </div>
                            <pre className="font-mono text-xs text-foreground/90 overflow-x-auto leading-relaxed p-2.5 rounded-xl bg-black border border-white/10 max-h-24" dir="ltr">
                              <code>{term.codeSnippet.code}</code>
                            </pre>
                          </div>
                        ) : term.debugPrompt ? (
                          <div className="rounded-2xl border border-purple-400/20 bg-purple-400/5 p-3.5 space-y-1.5">
                            <span className="font-bold text-purple-300">
                              🛠️ اگر ارور داد چی بگم؟
                            </span>
                            <p className="text-muted-foreground font-sans leading-relaxed text-[11px]">
                              {term.debugPrompt}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* ── 2. Clean Cards Grid View (Detailed reading without 180 clutter buttons) ── */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTerms.map((term) => {
              const isPromptCopied = copiedItem === `prompt-${term.id}`;
              const isExpanded = !!expandedCardDetails[term.id];
              const currentPromptText =
                term.universalPrompt || term.goldenPrompt || term.cursorPrompt || term.claudePrompt;

              return (
                <article
                  key={term.id}
                  id={term.id}
                  className="rounded-3xl border border-white/10 bg-surface/85 backdrop-blur hover:border-amber-400/40 transition-all p-6 md:p-7 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Clean Minimal Header */}
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-full px-2.5 py-0.5">
                        قدم {term.sequenceOrder} از {allDictionaryTerms.length}
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

                    {/* Titles */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl md:text-2xl font-black text-foreground">
                          {term.termEn}
                        </h2>
                        {term.phonetic && (
                          <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-md px-2 py-0.5">
                            {term.phonetic}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-amber-400">
                        {term.termFa}
                      </h3>
                    </div>

                    {/* Human Question */}
                    <div className="text-xs md:text-sm font-bold text-foreground/90 bg-white/[0.03] border-r-2 border-amber-400 pr-3 py-1">
                      ❓ {term.humanQuestion}
                    </div>

                    {/* Everyday Analogy */}
                    <div className="rounded-2xl border border-amber-400/30 bg-amber-400/[0.08] p-3.5 md:p-4 text-xs md:text-sm leading-relaxed">
                      <div className="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
                        <Lightbulb className="h-4 w-4 shrink-0 text-amber-400" />
                        <span>به زبان آدمیزاد:</span>
                      </div>
                      <p className="leading-relaxed text-amber-100/90 font-medium">
                        {term.analogy}
                      </p>
                    </div>

                    {/* Beginner Trap */}
                    <div className="rounded-2xl border border-rose-500/25 bg-rose-500/10 p-3 text-xs text-rose-200 leading-relaxed">
                      <div className="flex items-center gap-1.5 font-bold text-rose-300 mb-0.5">
                        <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                        <span>تله مرگبار:</span>
                      </div>
                      <p className="leading-relaxed">{term.beginnerTrap}</p>
                    </div>

                    {/* Golden Persian Prompt */}
                    <div className="space-y-2 rounded-2xl border border-white/10 bg-black/60 p-3.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                          <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                          <span>پرامپت طلایی فارسی:</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(currentPromptText, `prompt-${term.id}`)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-300 hover:bg-amber-400/25 transition-all shadow-sm shrink-0"
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
                      <div className="text-[11px] text-muted-foreground font-mono bg-white/[0.02] px-2.5 py-1 rounded-lg border border-white/5">
                        <span className="text-amber-400 font-sans font-bold">📁 محل اجرا: </span>
                        <span>{term.injectionTarget}</span>
                      </div>
                      <div
                        className="rounded-xl border border-white/5 bg-black/80 p-3 font-sans text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto text-right select-all"
                        dir="rtl"
                      >
                        {currentPromptText}
                      </div>
                    </div>

                    {/* AGENTS.md Rule */}
                    {term.agentsMdRule && (
                      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-3 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                            <Shield className="h-3.5 w-3.5 shrink-0" />
                            <span>بند استاندارد برای AGENTS.md:</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(term.agentsMdRule!, `agents-rule-${term.id}`)}
                            className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-1 text-[11px] font-bold text-emerald-300 hover:bg-emerald-500/30 transition-all shrink-0"
                          >
                            {copiedItem === `agents-rule-${term.id}` ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-400" />
                                <span>کپی شد!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>کپی بند</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre
                          className="p-2.5 rounded-xl bg-black/80 font-mono text-[11px] text-emerald-300/95 leading-relaxed text-left overflow-x-auto whitespace-pre-wrap select-all border border-emerald-500/20"
                          dir="ltr"
                        >
                          {term.agentsMdRule}
                        </pre>
                      </div>
                    )}

                    {/* Collapsible Details */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => toggleCardDetails(term.id)}
                        className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 text-xs text-muted-foreground hover:text-amber-300 transition-all"
                      >
                        <span className="font-bold">
                          {isExpanded
                            ? "▲ بستن جزئیات فنی"
                            : "▼ مشاهده تست ۳۰ ثانیه‌ای و نمونه کد فنی"}
                        </span>
                        <span className="text-[10px] text-muted-foreground/70">
                          {isExpanded ? "خلاصه‌سازی" : "تست و کد"}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-3 pt-2 border-t border-white/10 animate-in fade-in duration-200">
                          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-3.5 space-y-2 text-xs">
                            <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                              <span>تست ۳۰ ثانیه‌ای صحت کارکرد:</span>
                            </span>
                            <ol className="space-y-1 list-decimal list-inside text-muted-foreground font-sans pr-1">
                              {term.howToTest.steps.map((st, sI) => (
                                <li key={sI} className="leading-relaxed">
                                  {st}
                                </li>
                              ))}
                            </ol>
                            <div className="pt-1.5 border-t border-white/10 text-[11px] text-muted-foreground">
                              🎯 <strong>نتیجه مورد انتظار:</strong> {term.howToTest.expectedResult}
                            </div>
                          </div>

                          {term.codeSnippet && (
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                                <span className="uppercase text-amber-400 font-mono font-bold">
                                  {term.codeSnippet.language}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleCopy(term.codeSnippet!.code, `code-${term.id}`)}
                                  className="text-muted-foreground hover:text-amber-400 transition-colors"
                                >
                                  {copiedItem === `code-${term.id}` ? "کپی شد!" : "کپی کد"}
                                </button>
                              </div>
                              <pre className="font-mono text-xs text-foreground/90 overflow-x-auto leading-relaxed p-3.5 rounded-2xl bg-black/80 border border-white/10" dir="ltr">
                                <code>{term.codeSnippet.code}</code>
                              </pre>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Quality Guarantee Seal Section (Step 6) ── */}
      <QualityGuaranteeSealSection />

      {/* ── The Vibe Coder's Manifesto Section (Item 50) ── */}
      <section className="container mx-auto px-4">
        <VibeManifestoSection />
      </section>

      {/* ── Bottom CTA / Funnel Section ── */}
      <section className="container mx-auto px-4 pb-24">
        <div className="rounded-3xl border border-amber-400/30 bg-gradient-to-b from-surface/90 to-surface/40 p-8 md:p-12 text-center backdrop-blur shadow-elegant relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, oklch(0.83 0.105 72 / 0.15), transparent 70%)",
            }}
          />

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300">
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
              className="inline-flex items-center gap-2 rounded-xl border border-amber-400/35 bg-amber-400/5 px-7 py-3.5 text-sm font-bold text-foreground transition hover:border-amber-400 hover:bg-amber-400/10"
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
