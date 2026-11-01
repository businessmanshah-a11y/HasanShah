"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Box,
  ChevronDown,
  Layers,
  SlidersHorizontal,
  Flame,
  CheckCircle2,
  XCircle,
  User,
  Building2,
  CalendarCheck,
  ShoppingBag,
  Cpu,
  AlertTriangle,
  LifeBuoy,
  DollarSign,
} from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useI18n } from "../i18n/LanguageProvider";
import {
  PRICING_CATEGORIES,
  ADDONS_3D,
  COMPARISON_DIMENSIONS,
  PRICING_FAQS,
  ANNUAL_SUPPORT_DATA,
  type PricingCategoryKey,
} from "../lib/pricing-data";

export default function PricingContent() {
  const { locale, dir } = useI18n();
  const isRtl = dir === "rtl";
  const isEn = locale === "en";
  const isAr = locale === "ar";
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<"all" | PricingCategoryKey>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case "personal":
        return <User className="h-5 w-5 text-gold" />;
      case "corporate":
        return <Building2 className="h-5 w-5 text-gold" />;
      case "service":
        return <CalendarCheck className="h-5 w-5 text-gold" />;
      case "shop":
        return <ShoppingBag className="h-5 w-5 text-gold" />;
      case "app":
        return <Cpu className="h-5 w-5 text-gold" />;
      default:
        return <Box className="h-5 w-5 text-gold" />;
    }
  };

  const filteredCategories = activeTab === "all"
    ? PRICING_CATEGORIES
    : PRICING_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-gold-foreground">
      <Nav />

      {/* ── Background Ambient Glows ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] rounded-full bg-gold/5 blur-[140px]" />
        <div className="absolute top-[35%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[160px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px]" />
      </div>

      <main className="relative z-10 pt-28 sm:pt-36 pb-24">
        {/* ── Breadcrumb ── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground/70">
            <Link href="/" className="hover:text-gold transition-colors">
              {isEn ? "Home" : isAr ? "الرئيسية" : "صفحه اصلی"}
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-gold font-medium">
              {isEn ? "Pricing" : isAr ? "الأسعار" : "تعرفه‌ها"}
            </span>
          </nav>
        </div>

        {/* ── Section 1: Hero ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold mb-5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span>
              {isEn
                ? "Bespoke Code • Sub-Second Speed • Zero Elementor"
                : isAr
                ? "برمجة مخصصة • سرعة فائقة • بلا قوالب جاهزة"
                : "کدنویسی اختصاصی • سرعت زیر ۱ ثانیه • بدون قالب آماده"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight max-w-4xl mx-auto mb-4">
            {isEn ? (
              <>
                Invest in <span className="text-gold text-glow">Bespoke Engineering</span>
              </>
            ) : isAr ? (
              <>
                استثمر في <span className="text-gold text-glow whitespace-nowrap">الهندسة البرمجية المخصصة</span>
              </>
            ) : (
              <>
                سرمایه‌گذاری روی <span className="text-gold text-glow whitespace-nowrap">مهندسی وب اختصاصی</span>
              </>
            )}
          </h1>

          <p className="text-muted-foreground text-xs sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            {isEn
              ? "High-performance web architecture crafted in clean, lightweight PHP. Sub-second load times, 100% custom visual design, and zero plugin bloat."
              : isAr
              ? "هندسة مواقع عالية الأداء مبرمجة كودياً بتقنية PHP. سرعة تحميل أقل من ثانية، تصميم متفرد بالكامل، واستغناء تام عن الإضافات الثقيلة."
              : "توسعه وب‌سایت‌های پرسرعت و پایدار با کدنویسی تمیز PHP. لود زیر ۱ ثانیه، طراحی ۱۰۰٪ اختصاصی و بدون وابستگی به افزونه‌های سنگین."}
          </p>

          {/* Micro Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-3xl mx-auto mb-10">
            {[
              {
                icon: <Zap className="h-4 w-4 text-gold" />,
                title: isEn ? "Sub-Second Load" : isAr ? "تحميل فوري" : "سرعت لود زیر ۱ ثانیه",
                desc: isEn ? "PageSpeed 95+" : isAr ? "درجة تفوق ٩٥+" : "امتیاز ۹۵+ گوگل",
              },
              {
                icon: <ShieldCheck className="h-4 w-4 text-emerald-400" />,
                title: isEn ? "Zero Bloatware" : isAr ? "بلا إضافات" : "بدون پلاگین سنگین",
                desc: isEn ? "Clean Core Code" : isAr ? "كود نقي ومستقل" : "کدنویسی خالص و تمیز",
              },
              {
                icon: <Layers className="h-4 w-4 text-amber-400" />,
                title: isEn ? "100% Custom Visuals" : isAr ? "تصميم أصلي مخصص" : "دیزاین ۱۰۰٪ اختصاصی",
                desc: isEn ? "No Copied Themes" : isAr ? "بدون قوالب" : "هویت یکتا و برندینگ",
              },
              {
                icon: <Clock className="h-4 w-4 text-sky-400" />,
                title: isEn ? "Direct Warranty" : isAr ? "ضمان مباشر" : "پشتیبانی و گارانتی مستقیم",
                desc: isEn ? "By Hasan Shahmoradi" : isAr ? "مع حسن شهمرادي" : "با حسن شاهمرادی",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/10 bg-surface/40 backdrop-blur-md text-center"
              >
                <div className="mb-1.5 p-1.5 rounded-lg bg-white/5">{item.icon}</div>
                <span className="text-xs sm:text-sm font-bold text-foreground mb-0.5">{item.title}</span>
                <span className="text-[11px] text-muted-foreground/70">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Visual Showcase Card */}
          <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden border border-gold/20 shadow-[0_15px_40px_rgba(0,0,0,0.7)] group">
            <Image
              src="/images/pricing/hero-art.webp"
              alt="Hasan Shahmoradi Bespoke Web Engineering"
              width={1376}
              height={768}
              priority
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500 ease-out"
            />
            <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-5 z-20 flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-surface/90 backdrop-blur-xl border border-white/10 text-start">
              <div>
                <span className="text-[11px] text-gold font-bold uppercase tracking-wider block">
                  {isEn ? "Engineering Standards" : isAr ? "معايير الجودة" : "استاندارد مهندسی"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-foreground">
                  {isEn
                    ? "Component-driven code engineered for long-term reliability."
                    : isAr
                    ? "معمارية قائمة على المكونات الخفيفة لضمان استقرار دائم."
                    : "معماری کامپوننت‌محور و پایدار، بدون استهلاک و دوباره‌کاری."}
                </span>
              </div>
              <Link
                href="/portfolio/"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gold/15 border border-gold/30 hover:bg-gold/25 px-3 py-1.5 text-xs font-bold text-gold transition-all"
              >
                <span>{isEn ? "View Work" : isAr ? "معاينة الأعمال" : "نمونه‌کارها"}</span>
                <ArrowForward className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 2: Filter Tabs ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="text-start w-full sm:w-auto">
              <span className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                <SlidersHorizontal className="h-3 w-3" />
                {isEn ? "Category" : isAr ? "التصنيف" : "دسته‌بندی"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === "all"
                    ? "bg-gold text-gold-foreground shadow-gold"
                    : "bg-surface/60 border border-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {isEn ? "All Plans" : isAr ? "الكل" : "همه حوزه‌ها"}
              </button>

              {PRICING_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeTab === cat.id
                      ? "bg-gold text-gold-foreground shadow-gold"
                      : "bg-surface/60 border border-white/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isEn ? cat.titleEn : isAr ? cat.titleAr : cat.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Pricing Cards ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
          {filteredCategories.map((category) => {
            const isAppCategory = category.id === "app";

            // ── SPECIAL BALANCED REDESIGN FOR WEB APPS & STARTUPS ──
            if (isAppCategory) {
              const tier = category.tiers[0];

              return (
                <div key={category.id} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-surface/30 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-gold/15 border border-gold/30">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-black text-foreground">
                            {isEn ? category.titleEn : isAr ? category.titleAr : category.title}
                          </h3>
                          <span className="text-[10px] font-bold text-gold px-2 py-0.5 rounded-full border border-gold/30 bg-gold/10">
                            {isEn ? category.badgeEn : isAr ? category.badgeAr : category.badge}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {isEn ? category.descriptionEn : isAr ? category.descriptionAr : category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Balanced 2-Column Split-Card */}
                  <div className="mx-auto max-w-5xl rounded-3xl p-6 sm:p-8 bg-surface/70 border-2 border-gold/40 shadow-[0_12px_40px_rgba(239,192,123,0.1)]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                      {/* Left/Main Column: Scope & Features (7 cols) */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 border border-gold/30 px-3 py-0.5 text-[11px] font-bold text-gold">
                          <Flame className="h-3 w-3" />
                          <span>{isEn ? "Bespoke Scoped" : isAr ? "مشروع مخصص" : "پروژه‌ای و سفارشی"}</span>
                        </div>

                        <div>
                          <h4 className="text-xl sm:text-2xl font-black text-foreground">
                            {isEn ? tier.nameEn : isAr ? tier.nameAr : tier.name}
                          </h4>
                          <span className="text-xs text-muted-foreground/80 flex items-center gap-1 mt-1">
                            <Clock className="h-3.5 w-3.5 text-gold/70" />
                            {isEn ? tier.subtitleEn : isAr ? tier.subtitleAr : tier.subtitle}
                          </span>
                        </div>

                        <p className="text-xs text-foreground/85 leading-relaxed">
                          <span className="font-bold text-gold">{isEn ? "Target: " : isAr ? "الفئة: " : "مناسب برای: "}</span>
                          {isEn ? tier.targetEn : isAr ? tier.targetAr : tier.target}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-white/5">
                          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                            {isEn ? "Core Architectural Modules:" : isAr ? "المخرجات المعمارية:" : "خروجی‌های کلیدی معماری:"}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/85">
                            {(isEn ? tier.featuresEn : isAr ? tier.featuresAr : tier.features).map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2">
                                <div className="rounded-full p-0.5 bg-gold/15 text-gold shrink-0">
                                  <Check className="h-3 w-3" />
                                </div>
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Pricing & Scoped CTA (5 cols) */}
                      <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-surface-elevated/90 border border-gold/30 shadow-xl space-y-4 text-center">
                        <div>
                          <span className="text-[11px] text-muted-foreground block mb-1">
                            {isEn ? "Investment Framework:" : isAr ? "إطار الاستثمار:" : "چارچوب سرمایه‌گذاری:"}
                          </span>
                          <div className="flex items-center justify-center gap-2 flex-wrap">
                            <div className="text-2xl sm:text-3xl font-black text-gold tracking-tight" dir={isEn || isAr ? "ltr" : undefined}>
                              {isEn ? tier.priceFormattedEn : isAr ? tier.priceFormattedAr : tier.priceFormatted}
                            </div>
                            {(isEn || isAr) && (
                              <span className="inline-flex items-center gap-0.5 text-[10px] font-black text-gold px-2 py-0.5 rounded-full bg-gold/15 border border-gold/30 tracking-wider">
                                <DollarSign className="w-3 h-3" />
                                <span>USD</span>
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-amber-300/80 mt-1.5 font-medium leading-relaxed">
                            {isEn
                              ? "No fixed ceiling. Scoped following technical RFP & discovery."
                              : isAr
                              ? "بلا سقف مالي ثابت. التكلفة الدقيقة تحدد بعد جلسة المتطلبات."
                              : "بدون سقف عددی. برآورد مالی دقیق صرفاً پس از جلسه نیازسنجی و RFP."}
                          </p>
                        </div>

                        <div className="space-y-2.5 pt-2">
                          <Link
                            href="/portfolio/"
                            className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl border border-white/10 bg-white/5 hover:border-gold/40 text-xs font-semibold text-foreground transition-all"
                          >
                            <ExternalLink className="h-3.5 w-3.5 text-gold" />
                            <span>
                              {isEn
                                ? (tier.sampleNameEn || "Explore 5Setare Platform Case Study")
                                : isAr
                                ? (tier.sampleNameAr || "معاينة منصة 5Setare")
                                : (tier.sampleName || "بررسی پلتفرم‌های اختصاصی (مثل ۵ ستاره)")}
                            </span>
                          </Link>

                          <Link
                            href="/contact/?service=startup&budget=tier4"
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90 active:scale-95 transition-all"
                          >
                            <span>{isEn ? "Request Discovery Session & RFP" : isAr ? "طلب جلسة تحليل المتطلبات" : "درخواست جلسه تحلیل و RFP"}</span>
                            <ArrowForward className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // ── STANDARD 3-COLUMN GRID FOR OTHER CATEGORIES ──
            return (
              <div key={category.id} className="space-y-4">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-surface/30 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gold/15 border border-gold/30">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-black text-foreground">
                          {isEn ? category.titleEn : isAr ? category.titleAr : category.title}
                        </h3>
                        <span className="text-[10px] font-bold text-gold px-2 py-0.5 rounded-full border border-gold/30 bg-gold/10">
                          {isEn ? category.badgeEn : isAr ? category.badgeAr : category.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {isEn ? category.descriptionEn : isAr ? category.descriptionAr : category.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/contact/?service=${category.id === "shop" ? "shop" : category.id === "service" ? "service" : "website"}`}
                    className="self-start sm:self-auto inline-flex items-center gap-1 text-xs font-bold text-gold hover:text-gold-bright transition-colors"
                  >
                    <span>{isEn ? "Direct Inquiry" : isAr ? "استفسار" : "استعلام این حوزه"}</span>
                    <ArrowForward className="h-3 w-3" />
                  </Link>
                </div>

                {/* Tiers Grid */}
                <div
                  className={`grid gap-5 ${
                    category.tiers.length === 2
                      ? "grid-cols-1 lg:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {category.tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-200 ${
                        tier.highlight
                          ? "bg-surface-elevated/90 border-2 border-gold/50 shadow-[0_8px_30px_rgba(239,192,123,0.1)]"
                          : "bg-surface/50 border border-white/10 hover:border-gold/30 hover:bg-surface/70"
                      }`}
                    >
                      {tier.highlight && (
                        <div className="absolute -top-3 right-5 z-20">
                          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-0.5 text-[10px] font-black text-gold-foreground shadow-gold uppercase tracking-wider">
                            <Flame className="h-3 w-3 fill-gold-foreground" />
                            {isEn ? "Recommended" : isAr ? "الخيار الأفضل" : "پیشنهاد اصلی"}
                          </span>
                        </div>
                      )}

                      <div>
                        {/* Title & Timeline */}
                        <div className="mb-3">
                          <h4 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
                            {isEn ? tier.nameEn : isAr ? tier.nameAr : tier.name}
                          </h4>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3 text-gold/70" />
                            {isEn ? tier.subtitleEn : isAr ? tier.subtitleAr : tier.subtitle}
                          </span>
                        </div>

                        {/* Price */}
                        <div className="my-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <span className="text-[10px] text-muted-foreground block mb-0.5">
                            {isEn ? "Investment:" : isAr ? "الاستثمار:" : "برآورد سرمایه‌گذاری:"}
                          </span>
                          <div className="flex items-center justify-center gap-1.5 flex-wrap">
                            <div className="text-xl sm:text-2xl font-black text-gold tracking-tight" dir={isEn || isAr ? "ltr" : undefined}>
                              {isEn ? tier.priceFormattedEn : isAr ? tier.priceFormattedAr : tier.priceFormatted}
                            </div>
                            {(isEn || isAr) && (
                              <span className="inline-flex items-center gap-0.5 text-[9px] font-black text-gold px-1.5 py-0.5 rounded bg-gold/15 border border-gold/30 tracking-wider">
                                <DollarSign className="w-2.5 h-2.5" />
                                <span>USD</span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Target */}
                        <p className="text-xs text-foreground/80 leading-relaxed mb-4 border-b border-white/5 pb-3">
                          <span className="font-bold text-gold/90">{isEn ? "Target: " : isAr ? "الفئة: " : "مناسب: "}</span>
                          {isEn ? tier.targetEn : isAr ? tier.targetAr : tier.target}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                          {(isEn ? tier.featuresEn : isAr ? tier.featuresAr : tier.features).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-foreground/85 leading-snug">
                              <div className="mt-0.5 rounded-full p-0.5 bg-gold/15 text-gold shrink-0">
                                <Check className="h-3 w-3" />
                              </div>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action */}
                      <div className="space-y-2 pt-3 border-t border-white/10">
                        <Link
                          href={tier.sampleLink || "/portfolio/"}
                          className="inline-flex items-center justify-center gap-1 w-full py-1.5 px-2 rounded-lg border border-white/10 bg-white/5 hover:border-gold/30 text-[11px] font-semibold text-foreground transition-all"
                        >
                          <ExternalLink className="h-3 w-3 text-gold" />
                          <span>
                            {isEn
                              ? (tier.sampleNameEn || "View Samples in Portfolio")
                              : isAr
                              ? (tier.sampleNameAr || "معاينة النماذج في المعرض")
                              : (tier.sampleName || "مشاهده نمونه‌های زنده در پورتفولیو")}
                          </span>
                        </Link>

                        <Link
                          href={`/contact/?service=${tier.consultationType}&budget=${tier.budgetTier}`}
                          className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                            tier.highlight
                              ? "bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90 active:scale-95"
                              : "bg-surface hover:bg-gold/15 border border-gold/30 text-gold hover:border-gold active:scale-95"
                          }`}
                        >
                          <span>{isEn ? "Request Consultation" : isAr ? "طلب استشارة" : "درخواست مشاوره این پلن"}</span>
                          <ArrowForward className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ── Section 4: 3D Add-ons ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="relative rounded-3xl overflow-hidden border border-gold/30 bg-surface/40 backdrop-blur-xl p-5 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-xs font-semibold text-gold">
                  <Box className="h-3 w-3" />
                  <span>{isEn ? "3D WebGL Add-ons" : isAr ? "إضافات 3D" : "افزودنی‌های سه‌بعدی و WebGL"}</span>
                </div>

                <h3 className="text-xl sm:text-3xl font-black text-foreground leading-tight">
                  {isEn ? (
                    <>
                      Elevate with <span className="text-gold text-glow">3D & WebGL</span>
                    </>
                  ) : isAr ? (
                    <>
                      ارتقِ بعلامتك مع <span className="text-gold text-glow">تفاعل 3D</span>
                    </>
                  ) : (
                    <>
                      تمایز خیره‌کننده با <span className="text-gold text-glow">المان‌های سه‌بعدی و WebGL</span>
                    </>
                  )}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {isEn
                    ? "Add 360-degree interactive product viewports and cinematic scrollytelling to any plan."
                    : isAr
                    ? "إمكانية إضافة مجسمات ثلاثية الأبعاد تفاعلية بزاوية ٣٦٠ درجة وحركات سينمائية لأي باقة."
                    : "امکان افزودن چرخش ۳۶۰ درجه محصولات، انیمیشن‌های اسکرول‌محور و فضاهای سه‌بعدی Three.js به هر پلن."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {ADDONS_3D.map((addon) => (
                    <div
                      key={addon.id}
                      className="p-3 rounded-xl bg-surface/70 border border-white/10 hover:border-gold/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[9px] font-bold text-gold px-1.5 py-0.5 rounded-full bg-gold/10 border border-gold/20 inline-block mb-1.5">
                          {isEn ? addon.badgeEn : isAr ? addon.badgeAr : addon.badge}
                        </span>
                        <h5 className="text-xs font-bold text-foreground mb-0.5">
                          {isEn ? addon.titleEn : isAr ? addon.titleAr : addon.title}
                        </h5>
                        <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">
                          {isEn ? addon.descEn : isAr ? addon.descAr : addon.desc}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs font-black text-gold pt-1.5 border-t border-white/5">
                        <span dir={isEn || isAr ? "ltr" : undefined}>
                          {isEn ? addon.priceEn : isAr ? addon.priceAr : addon.price}
                        </span>
                        {(isEn || isAr) && (
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-gold px-1.5 py-0.5 rounded bg-gold/15 border border-gold/30">
                            <DollarSign className="w-2.5 h-2.5" />
                            <span>USD</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-white/10 shadow-xl group">
                <Image
                  src="/images/pricing/3d-craft.webp"
                  alt="3D WebGL Development"
                  width={1376}
                  height={768}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Comparison Table ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">
              {isEn ? "Comparison" : isAr ? "مقارنة" : "مقایسه روبه‌رویی"}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-foreground">
              {isEn ? "Bespoke Code vs. Templates" : isAr ? "الهندسة المخصصة مقابل القوالب" : "کدنویسی اختصاصی در برابر قالب آماده المنتوری"}
            </h2>
          </div>

          <div className="hidden md:block rounded-2xl overflow-hidden border border-white/10 bg-surface/50 backdrop-blur-md">
            <table className="w-full text-start border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-surface/80">
                  <th className="py-3 px-5 font-bold text-muted-foreground w-1/4">
                    {isEn ? "Criteria" : isAr ? "المعيار" : "شاخص فنی"}
                  </th>
                  <th className="py-3 px-5 font-black text-gold bg-gold/5 border-x border-gold/20 w-3/8">
                    {isEn ? "Hasan Shahmoradi Bespoke" : isAr ? "كود حسن شهمرادي" : "کدنویسی اختصاصی حسن شاهمرادی"}
                  </th>
                  <th className="py-3 px-5 font-bold text-muted-foreground/80 w-3/8">
                    {isEn ? "Generic Template / Elementor" : isAr ? "القوالب الجاهزة" : "قالب آماده / المنتور"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_DIMENSIONS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 font-bold text-foreground">
                      {isEn ? row.dimensionEn : isAr ? row.dimensionAr : row.dimension}
                    </td>
                    <td className="py-3 px-5 bg-gold/[0.02] border-x border-gold/15 font-semibold text-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span>{isEn ? row.customCodeEn : isAr ? row.customCodeAr : row.customCode}</span>
                      </div>
                    </td>
                    <td className="py-3 px-5 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-3.5 w-3.5 text-red-400/70 shrink-0" />
                        <span>{isEn ? row.templateThemeEn : isAr ? row.templateThemeAr : row.templateTheme}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-3">
            {COMPARISON_DIMENSIONS.map((row, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-surface/60 p-3 space-y-2 text-xs">
                <span className="font-bold text-gold block border-b border-white/5 pb-1">
                  {isEn ? row.dimensionEn : isAr ? row.dimensionAr : row.dimension}
                </span>
                <div className="flex items-center gap-1.5 text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span>{isEn ? row.customCodeEn : isAr ? row.customCodeAr : row.customCode}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <XCircle className="h-3.5 w-3.5 text-red-400/70 shrink-0" />
                  <span>{isEn ? row.templateThemeEn : isAr ? row.templateThemeAr : row.templateTheme}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: Trust & Authority Card ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-md p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold/40 shadow-gold shrink-0">
                <Image
                  src="/images/Shah2.webp"
                  alt="حسن شاهمرادی"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-gold uppercase tracking-wider">
                  {isEn ? "Direct Supervision" : isAr ? "إشراف هندسي" : "نظارت و پیاده‌سازی مستقیم"}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-foreground">
                  {isEn ? "Hasan Shahmoradi" : isAr ? "حسن شهمرادي" : "حسن شاهمرادی"}
                </h3>
                <p className="text-xs text-muted-foreground max-w-lg leading-relaxed">
                  {isEn
                    ? "Senior Web Engineer & AI Vibe Coding Pioneer with over 12 years of hands-on experience building high-conversion platforms and digital assets."
                    : isAr
                    ? "مهندس وب ومطور خبير في الذكاء الاصطناعي بخبرة تفوق ١٢ عاماً في بناء المنصات الرقمية الفاخرة."
                    : "توسعه‌دهنده ارشد وب و پیشگام وایب‌کدینگ با بیش از ۱۲ سال تجربه تخصصی در مهندسی پلتفرم‌های پرفروش، فروشگاه‌های لوکس و سامانه‌های نرم‌افزاری."}
                </p>
                <div className="flex items-center gap-3 pt-1 justify-center sm:justify-start text-xs font-bold">
                  <Link href="/about/" className="text-gold hover:text-gold-bright transition-colors">
                    {isEn ? "About Me" : isAr ? "من أنا" : "درباره من"}
                  </Link>
                  <span className="text-white/20">·</span>
                  <Link href="/vibe-coding/" className="text-foreground/80 hover:text-gold transition-colors">
                    {isEn ? "Vibe Coding" : isAr ? "Vibe Coding" : "وایب‌کدینگ"}
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/portfolio/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3 text-xs sm:text-sm font-black text-gold-foreground shadow-gold hover:opacity-95 active:scale-95 transition-all shrink-0 w-full md:w-auto"
            >
              <span>{isEn ? "View Live Projects" : isAr ? "معاينة المشاريع الحية" : "مشاهده نمونه‌کارهای زنده"}</span>
              <ArrowForward className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ── Section 7: FAQ ── */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">
              {isEn ? "FAQ" : isAr ? "الأسئلة الشائعة" : "سوالات متداول"}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-foreground">
              {isEn ? "Frequently Asked Questions" : isAr ? "إجابات واضحة ومباشرة" : "پاسخ شفاف به سوالات شما"}
            </h2>
          </div>

          <div className="space-y-2.5">
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-surface/50 backdrop-blur-md overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-start hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                      {isEn ? faq.qEn : isAr ? faq.qAr : faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                      {isEn ? faq.aEn : isAr ? faq.aAr : faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 8: Annual Support & Maintenance ── */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 bg-surface/80 backdrop-blur-xl p-6 sm:p-10 shadow-[0_15px_45px_rgba(239,192,123,0.12)]">
            {/* Top Header & Free Year Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/15 px-3.5 py-1 text-xs font-bold text-gold">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  <span>{isEn ? ANNUAL_SUPPORT_DATA.badgeEn : isAr ? ANNUAL_SUPPORT_DATA.badgeAr : ANNUAL_SUPPORT_DATA.badge}</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-foreground tracking-tight">
                  {isEn ? ANNUAL_SUPPORT_DATA.titleEn : isAr ? ANNUAL_SUPPORT_DATA.titleAr : ANNUAL_SUPPORT_DATA.title}
                </h2>
              </div>

              {/* Free 1 Year studio guarantee pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-xs sm:text-sm shadow-sm shrink-0">
                <Sparkles className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>
                  {isEn ? ANNUAL_SUPPORT_DATA.freeBadgeEn : isAr ? ANNUAL_SUPPORT_DATA.freeBadgeAr : ANNUAL_SUPPORT_DATA.freeBadge}
                </span>
              </div>
            </div>

            {/* Split Grid: 5 Features (Left) + Pricing Card & Scope Notice (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Features List (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                  {isEn ? "Included Support Scope:" : isAr ? "الخدمات المشمولة في الدعم الفني:" : "خدمات مشمول در قرارداد پشتیبانی و نگهداری:"}
                </span>

                <div className="space-y-3">
                  {ANNUAL_SUPPORT_DATA.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-colors"
                    >
                      <div className="mt-0.5 rounded-full p-1 bg-gold/15 text-gold shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-foreground">
                          {isEn ? feat.titleEn : isAr ? feat.titleAr : feat.title}
                        </h4>
                        <p className="text-xs text-muted-foreground/80 mt-0.5 leading-relaxed">
                          {isEn ? feat.descEn : isAr ? feat.descAr : feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Out-of-Scope Notice Box (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-surface-elevated/90 border border-gold/30 shadow-xl space-y-5">
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">
                    {isEn ? ANNUAL_SUPPORT_DATA.externalTitleEn : isAr ? ANNUAL_SUPPORT_DATA.externalTitleAr : ANNUAL_SUPPORT_DATA.externalTitle}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-2xl sm:text-3xl font-black text-gold tracking-tight" dir={isEn || isAr ? "ltr" : undefined}>
                      {isEn ? ANNUAL_SUPPORT_DATA.priceRangeEn : isAr ? ANNUAL_SUPPORT_DATA.priceRangeAr : ANNUAL_SUPPORT_DATA.priceRange}
                    </div>
                    {(isEn || isAr) && (
                      <span className="inline-flex items-center gap-0.5 text-[11px] font-black text-gold px-2 py-0.5 rounded-full bg-gold/15 border border-gold/30 tracking-wider">
                        <DollarSign className="w-3 h-3" />
                        <span>USD</span>
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground/80 mt-1.5 leading-relaxed">
                    {isEn ? ANNUAL_SUPPORT_DATA.priceNoteEn : isAr ? ANNUAL_SUPPORT_DATA.priceNoteAr : ANNUAL_SUPPORT_DATA.priceNote}
                  </p>
                </div>

                {/* Transparent Out-of-Scope Notice */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-start">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] sm:text-xs text-amber-300/90 leading-relaxed font-medium">
                      {isEn ? ANNUAL_SUPPORT_DATA.outOfScopeNoticeEn : isAr ? ANNUAL_SUPPORT_DATA.outOfScopeNoticeAr : ANNUAL_SUPPORT_DATA.outOfScopeNotice}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact/?service=website"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90 active:scale-95 transition-all"
                >
                  <LifeBuoy className="h-4 w-4" />
                  <span>
                    {isEn ? "Inquire Annual Maintenance Retainer" : isAr ? "طلب عقد الصيانة السنوية" : "استعلام و تنظیم قرارداد پشتیبانی سالانه"}
                  </span>
                  <ArrowForward className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 9: Final CTA ── */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-surface-elevated to-surface p-6 sm:p-10 text-center shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <h3 className="text-xl sm:text-3xl font-black text-foreground max-w-xl mx-auto leading-tight mb-3">
              {isEn
                ? "Ready to build a digital asset that outclasses your competitors?"
                : isAr
                ? "هل أنت مستعد لبناء أصل رقمي يتفوق على منافسيك؟"
                : "آماده‌اید برای بیزینس‌تان یک دارایی دیجیتال ماندگار و پول‌ساز بسازیم؟"}
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed mb-6">
              {isEn
                ? "Book a direct consultation with Hasan Shahmoradi to review your roadmap and receive a clear proposal."
                : isAr
                ? "احجز جلسة استشارة مباشرة مع حسن شهمرادي لتحليل متطلباتك ورسم خطة تنفيذية واضحة."
                : "در یک گفتگوی تخصصی، اهداف شما را بررسی کرده و پیش‌فاکتور شفاف به همراه نقشه راه تقدیمتان می‌کنیم."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact/?service=website"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-xs sm:text-sm font-black text-gold-foreground shadow-gold hover:opacity-90 active:scale-95 transition-all"
              >
                <span>{isEn ? "Request Strategy Session" : isAr ? "طلب استشارة" : "ثبت درخواست مشاوره و استعلام"}</span>
                <ArrowForward className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:border-gold/30 px-6 py-3 text-xs sm:text-sm font-bold text-foreground transition-all"
              >
                <span>{isEn ? "View Portfolio" : isAr ? "مشاهدة الأعمال" : "مشاهده نمونه‌کارها"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
