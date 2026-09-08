"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Globe,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Search,
  MessageSquare,
  Laptop,
  Cpu,
} from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";
import {
  ALL_PROJECTS,
  PORTFOLIO_FILTER_TABS,
  type ProjectCategory,
  type ProjectItem,
} from "../lib/portfolio-data";

export default function PortfolioContent() {
  const { locale, dir } = useI18n();
  const isRtl = dir === "rtl";
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [liveOnly, setLiveOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      // Category filter
      if (activeCategory !== "all" && project.category !== activeCategory) {
        return false;
      }
      // Live only toggle
      if (liveOnly && project.status !== "live") {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = project.title.toLowerCase().includes(q) || project.titleEn.toLowerCase().includes(q);
        const inNiche = project.niche.toLowerCase().includes(q) || project.nicheEn.toLowerCase().includes(q);
        const inDesc = project.desc.toLowerCase().includes(q) || project.descEn.toLowerCase().includes(q);
        const inTech = project.techStack.some((t) => t.toLowerCase().includes(q));
        const inDomain = project.domain ? project.domain.toLowerCase().includes(q) : false;
        return inTitle || inNiche || inDesc || inTech || inDomain;
      }
      return true;
    });
  }, [activeCategory, liveOnly, searchQuery]);

  const liveProjects = useMemo(
    () => filteredProjects.filter((p) => p.status === "live"),
    [filteredProjects]
  );

  const customProjects = useMemo(
    () => filteredProjects.filter((p) => p.status !== "live"),
    [filteredProjects]
  );

  return (
    <div
      dir={dir}
      className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-gold-foreground font-sans overflow-x-hidden"
    >
      <Nav />

      <main className="pt-32 md:pt-40">
        {/* ── 1. Hero Section ── */}
        <section className="pt-6 pb-12 md:pb-16 relative overflow-hidden">
          {/* Ambient ambient glow */}
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px]" />

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground mb-8">
              <Link href="/" prefetch={false} className="hover:text-gold transition-colors duration-200">
                {locale === "fa" ? "صفحه اصلی" : locale === "ar" ? "الرئيسية" : "Home"}
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-foreground font-semibold">
                {locale === "fa" ? "نمونه‌کارها" : locale === "ar" ? "الأعمال" : "Portfolio"}
              </span>
            </nav>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs md:text-sm font-bold text-gold shadow-gold/10 backdrop-blur-sm mb-6">
                <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse" />
                <span>
                  {locale === "fa"
                    ? "ویترین آثار و پروژه‌های اجراشده"
                    : locale === "ar"
                    ? "معرض الأعمال والمشاريع المنفذة"
                    : "Delivered Client Case Studies"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.3] tracking-tight mb-6">
                {locale === "fa" ? (
                  <Highlight text="پروژه‌هایی که *زنده و فعالند*؛ ساخته‌شده برای رقابت واقعی" />
                ) : locale === "ar" ? (
                  <Highlight text="مشاريع *حية وناجحة*؛ صُممت للمنافسة في السوق" />
                ) : (
                  <Highlight text="Digital products that *actually run and convert*" />
                )}
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                {locale === "fa"
                  ? "گزیده‌ای از وب‌سایت‌های آنلاین تجاری با ترافیک واقعی، فروشگاه‌های تخصصی، منوهای دیجیتال لمسی و پلتفرم‌های نرم‌افزاری اختصاصی."
                  : locale === "ar"
                  ? "مختارات من المواقع التجارية النشطة والمتاجر الإلكترونية المتخصصة والقوائم الرقمية التفاعلية."
                  : "A showcase of verified live websites, luxury e-commerce platforms, interactive digital menus, and custom software systems."}
              </p>

              {/* Luminous Floating Metrics Strip */}
              <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm p-4 text-center transition-all duration-300 hover:border-gold/30">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gold tracking-tight">۶+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-medium">
                    {locale === "fa" ? "سایت آنلاین و فعال" : locale === "ar" ? "مواقع نشطة" : "Live Web Apps"}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm p-4 text-center transition-all duration-300 hover:border-gold/30">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gold tracking-tight">۱۰۰٪</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-medium">
                    {locale === "fa" ? "طراحی اختصاصی و سفارشی" : locale === "ar" ? "تصميم مخصص" : "Bespoke UI/UX"}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm p-4 text-center transition-all duration-300 hover:border-gold/30">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gold tracking-tight" dir={isRtl ? "rtl" : "ltr"}>
                    {locale === "fa" ? "زیر ۱.۵ ثانیه" : locale === "ar" ? "أقل من ۱.۵ ثانية" : "< 1.5s"}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-medium">
                    {locale === "fa" ? "سرعت بارگذاری بهینه" : locale === "ar" ? "سرعة التحميل" : "Fast Page Load"}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm p-4 text-center transition-all duration-300 hover:border-gold/30">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gold tracking-tight">
                    {locale === "fa" ? "موبایل‌فرست" : locale === "ar" ? "متوافق جوال" : "Mobile"}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-medium">
                    {locale === "fa" ? "تجربه لمسی و سئو" : locale === "ar" ? "متوافق مع الجوال" : "Touch UX & SEO"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Filters & Search Controls ── */}
        <section className="py-6 md:py-8 relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="rounded-3xl border border-white/10 bg-surface/40 p-4 sm:p-5 backdrop-blur-md shadow-2xl">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                {/* Category tabs: smooth horizontal scroll on mobile without annoying desktop scrollbar */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none py-1 w-full lg:w-auto -mx-1 px-1 sm:mx-0 sm:px-0">
                  {PORTFOLIO_FILTER_TABS.map((tab) => {
                    const isActive = activeCategory === tab.key;
                    const label =
                      locale === "fa"
                        ? tab.labelFa
                        : locale === "ar"
                        ? tab.labelAr
                        : tab.labelEn;

                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveCategory(tab.key)}
                        className={`shrink-0 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                          isActive
                            ? "bg-gradient-gold text-gold-foreground shadow-gold scale-105"
                            : "border border-white/10 bg-white/5 text-muted-foreground hover:border-gold/40 hover:text-gold"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Search + Live toggle */}
                <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end pt-3 lg:pt-0 border-t lg:border-t-0 border-white/5">
                  {/* Live Only Toggle */}
                  <button
                    onClick={() => setLiveOnly(!liveOnly)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition border ${
                      liveOnly
                        ? "border-emerald-500/60 bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:text-white"
                    }`}
                    title={locale === "fa" ? "فقط پروژه‌های آنلاین فعال" : "Only live websites"}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        liveOnly ? "bg-emerald-400 animate-ping" : "bg-emerald-400/50"
                      }`}
                    />
                    <span className="whitespace-nowrap">
                      {locale === "fa"
                        ? "فقط آنلاین"
                        : locale === "ar"
                        ? "فقط المتصلة"
                        : "Live Only"}
                    </span>
                  </button>

                  {/* Quick search input */}
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={
                        locale === "fa"
                          ? "جستجوی پروژه یا تکنولوژی..."
                          : locale === "ar"
                          ? "بحث عن مشروع..."
                          : "Search project or tech..."
                      }
                      className="w-full h-11 rounded-2xl border border-white/10 bg-black/40 py-2 ps-10 pe-4 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Results counter */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {locale === "fa"
                    ? `نمایش ${filteredProjects.length} مورد از ${ALL_PROJECTS.length} پروژه ثبت‌شده`
                    : locale === "ar"
                    ? `عرض ${filteredProjects.length} من أصل ${ALL_PROJECTS.length} مشروع`
                    : `Showing ${filteredProjects.length} of ${ALL_PROJECTS.length} projects`}
                </span>
                {(activeCategory !== "all" || liveOnly || searchQuery) && (
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setLiveOnly(false);
                      setSearchQuery("");
                    }}
                    className="text-gold hover:underline font-medium"
                  >
                    {locale === "fa"
                      ? "پاک کردن فیلترها"
                      : locale === "ar"
                      ? "إعادة ضبط الفلاتر"
                      : "Reset filters"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Section 1: Live Commercial Projects ── */}
        {liveProjects.length > 0 && (
          <section className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {locale === "fa"
                      ? "وب‌سایت‌های آنلاین و فعال در بازار"
                      : locale === "ar"
                      ? "المواقع النشطة والمتصلة حاليًا"
                      : "Active Live Client Websites"}
                  </h2>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3.5 py-1 w-fit">
                  {locale === "fa"
                    ? `${(liveProjects.length).toLocaleString("fa-IR")} سایت فعال`
                    : locale === "ar"
                    ? `${liveProjects.length} مواقع نشطة`
                    : `${liveProjects.length} Live Projects`}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {liveProjects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} locale={locale} isRtl={isRtl} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 4. Section 2: Custom Systems & Startups ── */}
        {customProjects.length > 0 && (
          <section className="py-16 md:py-24 relative bg-surface/15 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
              {/* Chapter Tag */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
                  <Cpu className="h-3.5 w-3.5 text-gold" />
                  <span>
                    {locale === "fa"
                      ? "بخش دوم: سیستم‌های اختصاصی و نرم‌افزارها"
                      : locale === "ar"
                      ? "القسم الثاني: الأنظمة المخصصة والبرمجيات"
                      : "Part II: Proprietary Systems & Startups"}
                  </span>
                </div>
              </div>

              <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-gold" />
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {locale === "fa"
                      ? "سیستم‌های اختصاصی، محصولات نرم‌افزاری و استارتاپ‌ها"
                      : locale === "ar"
                      ? "الأنظمة المخصصة والمنتجات البرمجية"
                      : "Proprietary Software & Startup Concepts"}
                  </h2>
                </div>
                <span className="text-xs font-bold text-gold bg-gold/10 border border-gold/30 rounded-full px-3.5 py-1 w-fit">
                  {locale === "fa"
                    ? `${(customProjects.length).toLocaleString("fa-IR")} سیستم اختصاصی`
                    : locale === "ar"
                    ? `${customProjects.length} أنظمة مخصصة`
                    : `${customProjects.length} Systems`}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {customProjects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} locale={locale} isRtl={isRtl} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <section className="py-20 text-center">
            <div className="container mx-auto px-4 max-w-md">
              <div className="rounded-3xl border border-white/10 bg-surface/40 p-8">
                <Laptop className="h-12 w-12 text-gold mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {locale === "fa" ? "موردی با این فیلترها یافت نشد" : "No projects found"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {locale === "fa"
                    ? "عبارت جستجو یا فیلتر دسته‌بندی را تغییر دهید تا پروژه‌ها نمایش داده شوند."
                    : "Try clearing filters or adjusting your search term."}
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setLiveOnly(false);
                    setSearchQuery("");
                  }}
                  className="rounded-full bg-gold px-6 py-2 text-xs font-bold text-gold-foreground hover:bg-gold/90 transition"
                >
                  {locale === "fa" ? "مشاهده همه پروژه‌ها" : "View All Projects"}
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ── 5. Bridge Section: About Me Story (Editorial Strip) ── */}
        <section className="py-20 md:py-28 relative bg-surface/20 border-y border-white/5 overflow-hidden">
          {/* Subtle ambient gold aura */}
          <div className="pointer-events-none absolute -top-24 start-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-surface/40 via-surface/20 to-transparent p-8 sm:p-12 md:p-14 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12">
                <div className={`space-y-4 max-w-2xl ${isRtl ? "text-right" : "text-left"}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold">
                    <Sparkles className="h-3.5 w-3.5 text-gold" />
                    <span>
                      {locale === "fa"
                        ? "پشت صحنه این پروژه‌ها"
                        : locale === "ar"
                        ? "ما وراء كواليس هذه المشاريع"
                        : "Behind These Digital Products"}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
                    {locale === "fa"
                      ? "می‌خواهید بدانید پشت صحنه خلق این پروژه‌ها کیست؟"
                      : locale === "ar"
                      ? "هل ترغب في معرفة من يقف وراء هندسة هذه المشاريع؟"
                      : "Curious about the creator and philosophy behind these projects?"}
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {locale === "fa"
                      ? "یک وب‌سایت با نرخ تبدیل بالا نتیجه شانس نیست؛ حاصل ۸ سال آزمون در استارتاپ‌ها، ۵ سال سناریونویسی و ویدیو مارکتینگ صنعتی و متدولوژی Vibe Coding است. با داستان، تجربیات شکست و پیروزی و فلسفه کاری حسن شاهمرادی آشنا شوید."
                      : locale === "ar"
                      ? "بناء منتج رقمي استثنائي ليس صدفة؛ بل نتاج ۸ سنوات من التحديات في الشركات الناشئة، وخبرة عميقة في التسويق المرئي ومنهجية فايب كودينغ. اكتشف القصة والمعايير."
                      : "A high-conversion digital product isn't luck. It's built on 8 years of startup grit, industrial video marketing, and pioneering Vibe Coding methodology. Learn about Hasan's journey."}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm font-semibold text-gold/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                      <span>
                        {locale === "fa"
                          ? "۸+ سال تجربه در بازار دیجیتال و استارتاپ‌ها"
                          : locale === "ar"
                          ? "۸+ سنوات خبرة في السوق"
                          : "8+ Years Market Experience"}
                      </span>
                    </div>
                    <span className="opacity-30 hidden sm:inline">•</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                      <span>
                        {locale === "fa"
                          ? "ظرفیت ماهانه محدود (کیفیت لوکس و اختصاصی)"
                          : locale === "ar"
                          ? "طاقة استيعابية محددة شهرياً"
                          : "Bespoke & Limited Capacity"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 w-full lg:w-auto">
                  <Link
                    href="/about/"
                    prefetch={false}
                    className="group w-full lg:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm sm:text-base font-black text-gold-foreground shadow-gold hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <span>
                      {locale === "fa"
                        ? "داستان و مسیر من (درباره من)"
                        : locale === "ar"
                        ? "القصة والمسيرة (عن حسن)"
                        : "Read My Story (About Me)"}
                    </span>
                    <ArrowForward className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Conversion Bottom CTA: Standalone High-Impact Hub ── */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-surface via-surface/90 to-background p-8 sm:p-12 md:p-16 shadow-gold/20 text-center">
              {/* Ambient background glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold text-gold mb-6">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>
                    {locale === "fa"
                      ? "آماده شروع هستید؟"
                      : locale === "ar"
                      ? "هل أنت مستعد للبدء؟"
                      : "Ready for the next step?"}
                  </span>
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-5">
                  {locale === "fa" ? (
                    <Highlight text="پروژه بعدی شما *اینجا* خواهد درخشید" />
                  ) : locale === "ar" ? (
                    <Highlight text="مشروعك القادم *سيتألق* هنا" />
                  ) : (
                    <Highlight text="Your next digital asset *starts here*" />
                  )}
                </h2>

                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-10">
                  {locale === "fa"
                    ? "یک وب‌سایت حرفه‌ای تفاوت میان یک کسب‌وکار معمولی و لیدر بازار است. بیایید بررسی کنیم چگونه می‌توانیم با یک طراحی اختصاصی و سئوی هدفمند، فروش و اعتبار برند شما را جهش دهیم."
                    : locale === "ar"
                    ? "الموقع الاحترافي يصنع الفارق بين النشاط التجاري العادي وقائد السوق. احجز استشارة مجانية لمناقشة أهداف مشروعك."
                    : "A bespoke, conversion-oriented website separates market leaders from ordinary competitors. Let's build yours with uncompromising quality."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact/"
                    prefetch={false}
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm sm:text-base font-black text-gold-foreground shadow-gold transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <span>
                      {locale === "fa"
                        ? "درخواست مشاوره رایگان ۳۰ دقیقه‌ای"
                        : locale === "ar"
                        ? "طلب استشارة مجانية لمدة ۳۰ دقيقة"
                        : "Book Free 30-Min Consultation"}
                    </span>
                    <ArrowForward className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </Link>

                  <a
                    href="https://t.me/businessmanshah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gold/30 bg-surface/80 px-7 py-4 text-sm sm:text-base font-bold text-white hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <MessageSquare className="h-4 w-4 text-gold" />
                    <span>
                      {locale === "fa"
                        ? "پیام در تلگرام"
                        : locale === "ar"
                        ? "مراسلة عبر تيليجرام"
                        : "Chat on Telegram"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ── Subcomponent: High-End Agency Project Card (Concentric Bezel Architecture) ──
function ProjectCard({
  project,
  index,
  locale,
  isRtl,
}: {
  project: ProjectItem;
  index: number;
  locale: string;
  isRtl: boolean;
}) {
  const isLive = project.status === "live" && Boolean(project.url);

  return (
    <article
      id={project.id}
      className="group relative rounded-3xl border border-white/10 bg-surface/40 p-2 sm:p-3 shadow-xl transition-all duration-500 hover:border-gold/40 hover:bg-surface/70 hover:shadow-gold-lg flex flex-col"
    >
      <div className="rounded-[1.25rem] bg-background/90 border border-white/5 overflow-hidden flex flex-col h-full">
        {/* Browser Mockup Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3 text-xs" dir="ltr">
          {/* macOS window controls */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Address bar mockup */}
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] text-white/70 max-w-[220px] truncate">
            <Globe className="h-3 w-3 shrink-0 text-gold/80" />
            <span className="truncate">{project.domain || project.titleEn}</span>
          </div>

          {/* Status badge */}
          <div>
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-black text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 border border-gold/40 px-2.5 py-0.5 text-[10px] font-black text-gold">
                <span>{project.status === "proprietary" ? "CUSTOM" : "CONCEPT"}</span>
              </span>
            )}
          </div>
        </div>

        {/* Image Preview Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/90">
          <Image
            src={project.image}
            alt={locale === "en" ? project.titleEn : project.title}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            loading={index < 2 ? "eager" : "lazy"}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />

          {/* Category Badge */}
          <div className={`absolute top-3.5 ${isRtl ? "right-3.5" : "left-3.5"} z-10`}>
            <span className="rounded-full border border-black/40 bg-black/80 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold text-gold shadow-md">
              {locale === "en" ? project.nicheEn : project.niche}
            </span>
          </div>
        </div>

        {/* Card Content with Generous Spacing */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 gap-6">
          {/* Header & Subtitle */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-gold transition-colors duration-300">
                {locale === "en" ? project.titleEn : project.title}
              </h3>
              {project.domain && (
                <span className="text-xs text-muted-foreground font-medium" dir="ltr">
                  {project.domain}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gold/85">
              {locale === "en" ? project.subtitleEn : project.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground mt-3">
              {locale === "en" ? project.descEn : project.desc}
            </p>
          </div>

          {/* High-Value Highlights (Top 3 key points with clean airy rhythm) */}
          <div className="space-y-2.5">
            {(locale === "en" ? project.featuresEn : project.features).slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 leading-snug">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Bottom Area: Tech Stack & Action Buttons */}
          <div className="space-y-5 pt-2 border-t border-white/5">
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {isLive ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-xs sm:text-sm font-black text-gold-foreground shadow-gold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{locale === "fa" ? "مشاهده وب‌سایت آنلاین" : locale === "ar" ? "زيارة الموقع الحي" : "Visit Live Website"}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs sm:text-sm font-bold text-white/40 cursor-default">
                  <span>{locale === "fa" ? "سیستم اختصاصی / کانسپت" : "Custom System"}</span>
                </span>
              )}

              <Link
                href={`/contact/?service=website&ref=${encodeURIComponent(project.title)}`}
                prefetch={false}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-xs sm:text-sm font-bold text-white hover:border-gold/40 hover:text-gold transition-all duration-300"
              >
                <span>{locale === "fa" ? "سفارش مشابه" : locale === "ar" ? "طلب مماثل" : "Order Similar"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
