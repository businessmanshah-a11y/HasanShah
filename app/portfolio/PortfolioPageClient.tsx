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

export default function PortfolioPageClient() {
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

      <main className="pt-28 md:pt-36 pb-24">
        {/* ── Breadcrumb ── */}
        <div className="container mx-auto px-4 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-gold transition">
              {locale === "fa" ? "صفحه اصلی" : locale === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold">
              {locale === "fa" ? "نمونه‌کارها" : locale === "ar" ? "الأعمال" : "Portfolio"}
            </span>
          </nav>
        </div>

        {/* ── Hero Section ── */}
        <section className="container mx-auto px-4 mb-16 md:mb-24">
          <div className="relative max-w-4xl mx-auto text-center">
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

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
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

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-black text-gold">۶+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {locale === "fa" ? "سایت آنلاین و فعال" : locale === "ar" ? "مواقع نشطة" : "Live Web Apps"}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-black text-gold">۱۰۰٪</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {locale === "fa" ? "طراحی اختصاصی و سفارشی" : locale === "ar" ? "تصميم مخصص" : "Bespoke UI/UX"}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-black text-gold">&lt; ۱.۵s</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {locale === "fa" ? "سرعت بارگذاری بهینه" : locale === "ar" ? "سرعة التحميل" : "Fast Page Load"}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-black text-gold">Mobile</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {locale === "fa" ? "تجربه لمسی و سئو" : locale === "ar" ? "متوافق مع الجوال" : "Mobile-First UX"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Filters & Search Controls ── */}
        <section className="container mx-auto px-4 mb-12">
          <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-surface/50 p-4 md:p-6 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Category tabs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full lg:w-auto">
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
                      className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-300 ${
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
              <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
                {/* Live Only Toggle */}
                <button
                  onClick={() => setLiveOnly(!liveOnly)}
                  className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition border ${
                    liveOnly
                      ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-300 shadow-sm"
                      : "border-white/10 bg-white/5 text-muted-foreground hover:text-white"
                  }`}
                  title={locale === "fa" ? "فقط پروژه‌های آنلاین فعال" : "Only live websites"}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      liveOnly ? "bg-emerald-400 animate-ping" : "bg-emerald-400/50"
                    }`}
                  />
                  <span>
                    {locale === "fa"
                      ? "فقط آنلاین"
                      : locale === "ar"
                      ? "فقط المتصلة"
                      : "Live Only"}
                  </span>
                </button>

                {/* Quick search input */}
                <div className="relative min-w-[160px] sm:min-w-[200px]">
                  <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
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
                    className="w-full rounded-xl border border-white/10 bg-black/40 py-2 ps-9 pe-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 transition"
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
                  className="text-gold hover:underline"
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
        </section>

        {/* ── Section 1: Live Commercial Projects ── */}
        {liveProjects.length > 0 && (
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white">
                  {locale === "fa"
                    ? "وب‌سایت‌های آنلاین و فعال در بازار"
                    : locale === "ar"
                    ? "المواقع النشطة والمتصلة حاليًا"
                    : "Active Live Client Websites"}
                </h2>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {liveProjects.length} {locale === "fa" ? "سایت فعال" : "Live"}
              </span>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {liveProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} locale={locale} isRtl={isRtl} />
              ))}
            </div>
          </section>
        )}

        {/* ── Section 2: Custom Systems & Startups ── */}
        {customProjects.length > 0 && (
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-gold" />
                <h2 className="text-xl md:text-2xl font-black text-white">
                  {locale === "fa"
                    ? "سیستم‌های اختصاصی، محصولات نرم‌افزاری و استارتاپ‌ها"
                    : locale === "ar"
                    ? "الأنظمة المخصصة والمنتجات البرمجية"
                    : "Proprietary Software & Startup Concepts"}
                </h2>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {customProjects.length} {locale === "fa" ? "سیستم اختصاصی" : "Systems"}
              </span>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {customProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} locale={locale} isRtl={isRtl} />
              ))}
            </div>
          </section>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-surface/40 p-8">
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
        )}

        {/* ── Conversion Bottom CTA ── */}
        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-surface via-surface/90 to-background p-8 md:p-14 shadow-gold/20 text-center">
            {/* Ambient background glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold text-gold mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>
                  {locale === "fa"
                    ? "آماده شروع هستید؟"
                    : locale === "ar"
                    ? "هل أنت مستعد للبدء؟"
                    : "Ready for the next step?"}
                </span>
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                {locale === "fa" ? (
                  <Highlight text="پروژه بعدی شما *اینجا* خواهد درخشید" />
                ) : locale === "ar" ? (
                  <Highlight text="مشروعك القادم *سيتألق* هنا" />
                ) : (
                  <Highlight text="Your next digital asset *starts here*" />
                )}
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                {locale === "fa"
                  ? "یک وب‌سایت حرفه‌ای تفاوت میان یک کسب‌وکار معمولی و لیدر بازار است. بیایید بررسی کنیم چگونه می‌توانیم با یک طراحی اختصاصی و سئوی هدفمند، فروش و اعتبار برند شما را جهش دهیم."
                  : locale === "ar"
                  ? "الموقع الاحترافي يصنع الفارق بين النشاط التجاري العادي وقائد السوق. احجز استشارة مجانية لمناقشة أهداف مشروعك."
                  : "A bespoke, conversion-oriented website separates market leaders from ordinary competitors. Let's build yours with uncompromising quality."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact/"
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
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gold/30 bg-surface/80 px-6 py-4 text-sm font-bold text-white hover:border-gold hover:text-gold transition-all duration-300"
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
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ── Subcomponent: Project Card ──
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
      className="group relative flex flex-col rounded-3xl border border-white/10 bg-surface/70 shadow-xl overflow-hidden transition-all duration-500 hover:border-gold/50 hover:shadow-gold-lg"
    >
      {/* Browser Mockup Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-3 text-xs" dir="ltr">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Address bar mockup */}
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/60 max-w-[220px] truncate">
          <Globe className="h-3 w-3 shrink-0 text-gold/70" />
          <span className="truncate">{project.domain || project.titleEn}</span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-1.5">
          {isLive ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 border border-gold/40 px-2 py-0.5 text-[10px] font-bold text-gold">
              <span>{project.status === "proprietary" ? "CUSTOM" : "CONCEPT"}</span>
            </span>
          )}
        </div>
      </div>

      {/* Image Preview Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
        <Image
          src={project.image}
          alt={locale === "en" ? project.titleEn : project.title}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          loading={index < 2 ? "eager" : "lazy"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

        {/* Floating Category Badge */}
        <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"} z-10`}>
          <span className="rounded-full border border-black/40 bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-gold shadow-md">
            {locale === "en" ? project.nicheEn : project.niche}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Title & Subtitle */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-gold transition">
              {locale === "en" ? project.titleEn : project.title}
            </h3>
            {project.domain && (
              <span className="text-xs font-mono text-muted-foreground" dir="ltr">
                {project.domain}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm font-semibold text-gold/85">
            {locale === "en" ? project.subtitleEn : project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground mb-6">
          {locale === "en" ? project.descEn : project.desc}
        </p>

        {/* Feature Highlights */}
        <div className="mb-6 space-y-2 border-t border-white/5 pt-4">
          {(locale === "en" ? project.featuresEn : project.features).map((feat, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2 text-xs text-white/80">
              <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-white/70"
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/50 bg-gradient-gold px-5 py-2.5 text-xs sm:text-sm font-black text-gold-foreground shadow-gold transition hover:scale-105 active:scale-95"
            >
              <span>{locale === "fa" ? "مشاهده وب‌سایت آنلاین" : locale === "ar" ? "زيارة الموقع الحي" : "Visit Live Website"}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-bold text-white/50 cursor-default">
              <span>{locale === "fa" ? "سیستم اختصاصی / کانسپت" : "Custom System"}</span>
            </span>
          )}

          <Link
            href={`/contact/?service=website&ref=${encodeURIComponent(project.title)}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:border-gold/40 hover:text-gold transition"
          >
            <span>{locale === "fa" ? "سفارش مشابه" : locale === "ar" ? "طلب مماثل" : "Order Similar"}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
