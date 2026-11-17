"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  Sparkles,
  ChevronRight,
  ChevronUp,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  ExternalLink,
  Flame,
  ArrowUpRight,
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
  const [promptEditorMode, setPromptEditorMode] = useState<Record<string, "cursor" | "claude">>({});

  // UI Modes
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");
  const [readTerms, setReadTerms] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Gamification & Quest State (Step 2)
  const [activeLearningView, setActiveLearningView] = useState<"quest" | "reference">("quest");
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

  // Keyboard shortcut Cmd+K or Ctrl+K
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

  const togglePromptEditor = (termId: string, mode: "cursor" | "claude") => {
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
            نسخه ارتقایافته ۲.۰ • مجهز به پرامپت‌های ۵ لایه‌ای و راهنمای تست
          </div>

          <h1 className="text-3xl font-black leading-tight md:text-5xl lg:text-6xl text-foreground">
            دانشنامه مهندسی <span className="text-gradient-gold">وایب‌کدینگ وردپرس</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            هوش مصنوعی کد را تولید می‌کند، اما معماری را شما دیکته می‌کنید. مرجع ۳۷ اصطلاح حیاتی با تمثیل‌های روزمره، پرامپت‌های ۵ لایه‌ای آماده کپی، و راه‌حل تست در ۳۰ ثانیه برای کسانی که می‌خواهند بدون باگ محصول خلق کنند.
          </p>

          {/* ── Elevated Clean Action Bar (Step 3: High UX Standard) ── */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() => setIsZeroToHeroOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/60 bg-emerald-500/15 px-6 py-3.5 text-xs md:text-sm font-black text-emerald-300 hover:bg-emerald-500/25 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              <Compass className="h-4 w-4 text-emerald-400" />
              <span>🌱 صفرِ صفری؟ از اینجا شروع کن (نقشه ورود به کار)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                handleToggleLearningView("quest");
                const el = document.getElementById("active-mission-spotlight");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 px-6 py-3.5 text-xs md:text-sm font-black text-black hover:opacity-95 shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Play className="h-4 w-4 fill-black" />
              <span>ادامه مأموریت یادگیری 🚀</span>
            </button>

            <button
              type="button"
              onClick={() => setIsSandboxOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/50 bg-amber-400/10 px-5 py-3.5 text-xs md:text-sm font-bold text-amber-300 hover:bg-amber-400/20 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/10"
            >
              <Code2 className="h-4 w-4 text-amber-400" />
              <span>سندباکس تست پرامپت ⚡</span>
            </button>

            <button
              type="button"
              onClick={() => setIsStudioDrawerOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs md:text-sm font-bold text-foreground hover:bg-white/10 transition-all hover:border-white/30"
            >
              <Wrench className="h-4 w-4 text-amber-400" />
              <span>استودیو و ابزارهای هوشمند (۷ ابزار) 🧰</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Player Gamification HUD Bar (Step 2 & 3) ── */}
      <GamificationHud
        profile={gamificationProfile}
        activeView={activeLearningView}
        onToggleView={handleToggleLearningView}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenPassport={() => setIsPassportOpen(true)}
        onOpenSpeedChallenge={() => setIsSpeedChallengeOpen(true)}
        onOpenZeroToHero={() => setIsZeroToHeroOpen(true)}
        onOpenFirstProject={() => setIsFirstProjectOpen(true)}
        completedStagesCount={gamificationProfile.completedStageNumbers.length}
        totalStagesCount={questStages.length}
        readTermsCount={readTerms.length}
        totalTermsCount={allDictionaryTerms.length}
      />

      {/* ── Section 0: Emergency Rescue Tools (Item 45 & AGENTS.md) ── */}
      <section id="quick-access-tools" className="container mx-auto px-4 pb-8">
        <div className="rounded-3xl border border-amber-400/30 bg-surface/80 p-6 md:p-8 backdrop-blur shadow-elegant">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-lg md:text-xl font-black text-foreground border-r-4 border-amber-400 pr-3">
                ۰. جعبه نجات اضطراری سایت در زمان بحران
              </h2>
              <p className="mt-1 text-xs text-muted-foreground pr-4">
                منابع رسمی و تست‌کننده‌های زنده که در زمان قفل شدن پیشخوان، باگ‌های دیتابیس یا افت سرعت نجاتت می‌دهند
              </p>
            </div>
            <span className="self-start sm:self-auto rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
              ابزارهای الزامی
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
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground group-hover:text-amber-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-amber-400/80 font-mono">
                  <span>باز کردن ابزار</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── View Switch: Gamified Quest Map (Step 3: Odyssey Track) vs Encyclopedia Reference ── */}
      {activeLearningView === "quest" ? (
        <section className="container mx-auto px-4 pb-16 space-y-10">
          <div id="active-mission-spotlight">
            <ActiveStageSpotlightCard
              stages={questStages}
              completedStageNumbers={gamificationProfile.completedStageNumbers}
              readTermIds={readTerms}
              onStartCheckpoint={(stage) => setActiveCheckpointStage(stage)}
              onSelectTerm={(termId) => {
                markAsRead(termId);
                setZenModeTermId(termId);
              }}
              onOpenCertificate={() => setIsCertificateOpen(true)}
              onOpenSandbox={() => setIsSandboxOpen(true)}
            />
          </div>

          <QuestStageMap
            stages={questStages}
            completedStageNumbers={gamificationProfile.completedStageNumbers}
            readTermIds={readTerms}
            onStartCheckpoint={(stage) => setActiveCheckpointStage(stage)}
            onSelectTerm={(termId) => {
              markAsRead(termId);
              setZenModeTermId(termId);
            }}
            onOpenCertificate={() => setIsCertificateOpen(true)}
            onOpenFirstProject={() => setIsFirstProjectOpen(true)}
          />
        </section>
      ) : (
        <>
          {/* ── Start Here Wizard Component (Items 1, 5, 6) ── */}
          <StartHereWizard
            onSelectPreset={(preset) => {
              setSelectedPreset(preset);
              setSelectedCategory("all");
              setSelectedStation("all");
            }}
          />

          {/* ── Learning Stations & Presets (Pillar 2) ── */}
          <section className="container mx-auto px-4 pb-8">
        <div className="rounded-3xl border border-white/10 bg-surface/50 p-6 md:p-8 backdrop-blur space-y-6">
          {/* Persona Switcher */}
          <PersonaRoleSelector
            activePersona={selectedPersona}
            onSelectPersona={(persona) => setSelectedPersona(persona)}
          />

          {/* Curriculum Stations */}
          <div className="border-t border-white/10 pt-5">
            <CurriculumRoadmapBar
              activeStation={selectedStation}
              onSelectStation={(st) => setSelectedStation(st)}
              activePreset={selectedPreset}
              onSelectPreset={(pr) => setSelectedPreset(pr)}
            />
          </div>

          {/* Search Box & Quick Intent Pills (Item 31) */}
          <div className="border-t border-white/10 pt-5 space-y-3">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو بر اساس نیاز (مثلاً: سایتم کند شده، هک نشم، لندینگ، رنگ، یا نام انگلیسی)..."
                className="w-full rounded-2xl border border-white/15 bg-background/80 py-4 pr-12 pl-28 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
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

            {/* Quick intent keywords pills (Item 31) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-muted-foreground font-semibold">🔍 امتحان کنید:</span>
              {[
                { label: "سایتم کند شده", query: "سایتم کند شده" },
                { label: "هک نشم (امنیت)", query: "هک" },
                { label: "صفحه سفید مرگ", query: "ارور" },
                { label: "فروشگاه آنلاین", query: "فروشگاه" },
                { label: "انتقال هاست", query: "انتقال" },
                { label: "بلاک گوتنبرگ", query: "بلاک" },
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

            {/* View Mode & Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-2">
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

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("detailed")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    viewMode === "detailed" ? "bg-amber-400 text-black font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  نمای تشریحی کامل
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("compact")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    viewMode === "compact" ? "bg-amber-400 text-black font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
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
        ) : (
          <div className={viewMode === "detailed" ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"}>
            {filteredTerms.map((term) => {
              const isFavorite = favorites.includes(term.id);
              const isRead = readTerms.includes(term.id);
              const activeTab = cardActiveTab[term.id] || "concept";
              const currentEditorMode = promptEditorMode[term.id] || "cursor";
              const isPromptCopied = copiedItem === `prompt-${term.id}`;
              const isDebugCopied = copiedItem === `debug-${term.id}`;

              return (
                <article
                  key={term.id}
                  id={term.id}
                  onClick={() => markAsRead(term.id)}
                  className={`scroll-mt-32 rounded-3xl border bg-surface/85 backdrop-blur transition-all duration-300 flex flex-col justify-between ${
                    isRead ? "border-white/10" : "border-amber-400/30 shadow-sm"
                  } hover:border-amber-400/50 hover:shadow-2xl ${viewMode === "detailed" ? "p-6 md:p-7" : "p-5"}`}
                >
                  <div className="space-y-4">
                    {/* Header Badges */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-full px-2.5 py-0.5">
                          قدم {term.sequenceOrder} از ۳۷
                        </span>
                        <span className="text-[11px] text-muted-foreground bg-white/5 rounded-full px-2 py-0.5">
                          ⏱️ {term.readingTimeMinutes} دقیقه مطالعه
                        </span>
                        {term.isNoCodeFriendly && (
                          <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-2 py-0.5">
                            بدون نیاز به کد
                          </span>
                        )}
                        {term.seriesEpisodeUrl && (
                          <Link
                            href={term.seriesEpisodeUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="text-[10px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-full px-2 py-0.5 hover:bg-amber-400/20 transition-colors inline-flex items-center gap-1"
                          >
                            <span>🎬 {term.seriesEpisodeLabel}</span>
                          </Link>
                        )}
                      </div>

                      {/* Action Icons */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setZenModeTermId(term.id);
                          }}
                          className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-amber-300 transition-colors"
                          title="مطالعه تمام‌صفحه و متمرکز (Zen Mode)"
                        >
                          <BookOpen className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedShareTerm(term);
                          }}
                          className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-amber-300 transition-colors"
                          title="اشتراک‌گذاری کارت در استوری"
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

                    {/* Titles & Pronunciation */}
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

                    {/* Human Question Subtitle */}
                    <div className="text-xs md:text-sm font-bold text-foreground/90 bg-white/[0.03] border-r-2 border-amber-400 pr-3 py-1">
                      ❓ {term.humanQuestion}
                    </div>

                    {/* ── 4-Tabs Switcher for each card ── */}
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTermTab(term.id, "concept");
                        }}
                        className={`flex-1 py-1.5 rounded-lg font-bold transition-all ${
                          activeTab === "concept"
                            ? "bg-amber-400 text-black shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        مفهوم و تمثیل
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTermTab(term.id, "prompt");
                        }}
                        className={`flex-1 py-1.5 rounded-lg font-bold transition-all ${
                          activeTab === "prompt"
                            ? "bg-amber-400 text-black shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        پرامپت ۵ لایه‌ای
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTermTab(term.id, "test");
                        }}
                        className={`flex-1 py-1.5 rounded-lg font-bold transition-all ${
                          activeTab === "test"
                            ? "bg-amber-400 text-black shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        تست ۳۰ ثانیه‌ای
                      </button>
                      {term.codeSnippet && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTermTab(term.id, "code");
                          }}
                          className={`flex-1 py-1.5 rounded-lg font-bold transition-all ${
                            activeTab === "code"
                              ? "bg-amber-400 text-black shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          کد فنی
                        </button>
                      )}
                    </div>

                    {/* Tab 1: Concept & Analogy */}
                    {activeTab === "concept" && (
                      <div className="space-y-3 pt-1">
                        {/* Everyday Analogy */}
                        <div className="rounded-2xl border border-amber-400/35 bg-gradient-to-r from-amber-400/15 to-amber-400/5 p-4 text-amber-100 leading-relaxed text-xs md:text-sm shadow-sm">
                          <div className="flex items-center gap-1.5 font-black text-amber-300 text-xs md:text-sm mb-1">
                            <Lightbulb className="h-4 w-4 shrink-0 text-amber-400" />
                            <span>به زبان آدمیزاد (استعاره روزمره):</span>
                          </div>
                          <p className="leading-loose text-amber-100/95 font-medium">
                            {term.analogy}
                          </p>
                        </div>

                        {/* Beginner Trap & Real Pain */}
                        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-3.5 text-xs text-rose-200 leading-relaxed">
                          <div className="flex items-center gap-1.5 font-bold text-rose-300 mb-1">
                            <AlertTriangle className="h-4 w-4 shrink-0" />
                            <span>تله مرگبار ۹۰ درصد تازه‌کارها:</span>
                          </div>
                          <p className="leading-relaxed">{term.beginnerTrap}</p>
                        </div>

                        {viewMode === "detailed" && (
                          <div className="space-y-3">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 text-xs text-muted-foreground leading-relaxed">
                              <span className="font-bold text-foreground block mb-1">
                                اگر ندانی چه فاجعه‌ای رخ می‌دهد؟
                              </span>
                              <p>{term.realPain}</p>
                            </div>

                            {/* ASCII Diagram if available */}
                            {term.asciiDiagram && (
                              <div className="rounded-2xl border border-white/10 bg-black/60 p-3 text-xs space-y-1.5">
                                <span className="font-bold text-muted-foreground flex items-center gap-1">
                                  <Terminal className="h-3.5 w-3.5 text-amber-400" />
                                  <span>دیاگرام سازوکار:</span>
                                </span>
                                <pre className="p-2.5 rounded-xl bg-black font-mono text-[10px] text-amber-300 leading-relaxed text-left overflow-x-auto" dir="ltr">
                                  {term.asciiDiagram}
                                </pre>
                              </div>
                            )}

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

                            {term.freelanceTip && (
                              <div className="rounded-2xl border border-purple-500/25 bg-purple-500/10 p-3 text-xs text-purple-200 leading-relaxed">
                                <strong>💼 فوت کوزه‌گری برای فریلنسرها:</strong> {term.freelanceTip}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 2: 5-Layer Battle-Tested Prompt */}
                    {activeTab === "prompt" && (
                      <div className="space-y-3 pt-1">
                        <div className="flex items-center justify-between text-xs">
                          {/* Mode switcher: Cursor vs Claude */}
                          <div className="flex items-center gap-1 p-0.5 rounded-lg bg-white/5 border border-white/10">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePromptEditor(term.id, "cursor");
                              }}
                              className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                                currentEditorMode === "cursor"
                                  ? "bg-amber-400 text-black"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              حالت Cursor (@file)
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePromptEditor(term.id, "claude");
                              }}
                              className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                                currentEditorMode === "claude"
                                  ? "bg-amber-400 text-black"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              حالت Claude / وب
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const promptText =
                                currentEditorMode === "cursor"
                                  ? term.cursorPrompt || term.goldenPrompt
                                  : term.claudePrompt || term.goldenPrompt;
                              handleCopy(promptText, `prompt-${term.id}`);
                            }}
                            className="inline-flex items-center gap-1 rounded-lg border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-300 hover:bg-amber-400/25 transition-all shadow-sm"
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

                        {/* Injection Target Location */}
                        <div className="text-[11px] text-muted-foreground bg-white/[0.02] p-2.5 rounded-xl border border-white/5 font-mono">
                          <strong className="font-sans text-amber-400">📁 محل قرارگیری کد:</strong>{" "}
                          <span>{term.injectionTarget}</span>
                        </div>

                        {/* Prompt Body */}
                        <div className="rounded-2xl border border-white/10 bg-black/70 p-4 font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto text-right font-sans select-all" dir="rtl">
                          {currentEditorMode === "cursor"
                            ? term.cursorPrompt || term.goldenPrompt
                            : term.claudePrompt || term.goldenPrompt}
                        </div>

                        {/* Emergency Debug Prompt */}
                        {term.debugPrompt && (
                          <div className="rounded-2xl border border-purple-400/20 bg-purple-400/5 p-3 text-xs space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-purple-300">
                                🛠️ اگر هوش مصنوعی ارور داد چی بگم؟
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(term.debugPrompt, `debug-${term.id}`);
                                }}
                                className="text-[10px] text-purple-300 hover:text-white"
                              >
                                {isDebugCopied ? "کپی شد!" : "کپی پرامپت نجات"}
                              </button>
                            </div>
                            <p className="text-muted-foreground font-sans leading-relaxed text-[11px]">
                              {term.debugPrompt}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 3: 30-Second Verification Guide */}
                    {activeTab === "test" && (
                      <div className="space-y-3 pt-1">
                        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-4 space-y-2.5 text-xs">
                          <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                            <span>چطور در ۳۰ ثانیه تست کنم که کار می‌کند؟</span>
                          </span>
                          <ol className="space-y-1.5 list-decimal list-inside text-muted-foreground font-sans pr-1">
                            {term.howToTest.steps.map((st, sI) => (
                              <li key={sI} className="leading-relaxed">
                                {st}
                              </li>
                            ))}
                          </ol>
                          <div className="pt-2 border-t border-white/10 text-[11px] text-muted-foreground">
                            🎯 <strong>خروجی تایید:</strong> {term.howToTest.expectedResult}
                          </div>
                        </div>

                        {/* Red flags */}
                        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-3.5 space-y-1.5 text-xs">
                          <span className="font-bold text-rose-400 flex items-center gap-1.5">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            <span>پرچم‌های قرمز (علائم تقلب یا توهم هوش مصنوعی):</span>
                          </span>
                          <ul className="space-y-1 list-disc list-inside text-muted-foreground font-sans text-[11px] pr-1">
                            {term.howToTest.redFlags.map((fl, fI) => (
                              <li key={fI}>{fl}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Tab 4: Code Snippet */}
                    {activeTab === "code" && term.codeSnippet && (
                      <div className="space-y-2 pt-1 animate-in fade-in duration-200">
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                          <span className="uppercase text-amber-400 font-mono font-bold">
                            {term.codeSnippet.language} {term.codeSnippet.runContext ? `(${term.codeSnippet.runContext})` : ""}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopy(term.codeSnippet!.code, `code-${term.id}`);
                            }}
                            className="text-muted-foreground hover:text-amber-400 transition-colors"
                          >
                            {copiedItem === `code-${term.id}` ? "کپی شد!" : "کپی کد"}
                          </button>
                        </div>
                        <pre className="font-mono text-xs text-foreground/90 overflow-x-auto leading-relaxed p-4 rounded-2xl bg-black/80 border border-white/10" dir="ltr">
                          <code>{term.codeSnippet.code}</code>
                        </pre>
                        <p className="text-[11px] text-muted-foreground">{term.codeSnippet.description}</p>
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
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-muted-foreground hover:border-amber-400/30 hover:text-amber-400 transition-colors"
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
        </>
      )}

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
