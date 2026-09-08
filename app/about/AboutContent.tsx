"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Sparkles,
  Rocket,
  Flame,
  Award,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Send,
  CheckCircle2,
  Terminal,
  Cpu,
  TrendingUp,
  Quote,
} from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "../components/Icons";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useI18n } from "../i18n/LanguageProvider";

interface Milestone {
  id: string;
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  tags: string[];
  icon: typeof Rocket;
  highlightColor: string;
}

const MILESTONES: Milestone[] = [
  {
    id: "startup-3soot",
    year: "۱۳۹۷ — ۱۳۹۸",
    badge: "جرقه کارآفرینی",
    title: "استارتاپ «۳ سوت» (3soot.app)؛ سفارش آنلاین نان داغ",
    subtitle: "اولین ورود جدی به دنیای استارتاپ‌ها، ساخت محصول دیجیتال و بازار سنتی",
    description:
      "همه چیز از عطش ساختن یک راهکار واقعی برای مردم شروع شد. استارتاپ ۳ سوت با هدف تحویل نان گرم سه سوته به درب منازل در تهران متولد شد؛ همراه با اپلیکیشن اختصاصی، ویدیوهای رونمایی در آپارات و ایجاد شبکه تحویل لجستیکی. اینجا اولین میدان نبرد واقعی من با چالش‌های بیزینس، کشش بازار و مدیریت محصول بود.",
    quote: "اولین تجربه بیزینسی من بود. فهمیدم داشتن یک ایده نو، فقط ۵ درصد کاره و ۹۵ درصد بقیه به اجرای دقیق و درک روانشناسی رفتار مشتری وابسته است.",
    tags: ["استارتاپ", "کارآفرینی", "مدیریت محصول", "لجستیک شهری"],
    icon: Rocket,
    highlightColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
  },
  {
    id: "corona-pivot",
    year: "۱۳۹۸ — ۱۳۹۹",
    badge: "نقطه عطف و بازسازی",
    title: "توقف استارتاپ، ورود کرونا و یک سال بازبینی مسیر",
    subtitle: "درس‌های عمیق شکست و بازتعریف پایه‌های تفکر استراتژیک",
    description:
      "بعد از ۸ ماه دوندگی نفس‌گیر و درست ۲ ماه قبل از ورود ناگهانی همه‌گیری کرونا به ایران، بیزینس متوقف و جمع‌آوری شد. یک سال بازبینی و بازسازی شخصی گذشت تا فهمیدم هیچ شکستی قطعی نیست مگر اینکه از آن یاد نگیری. فهمیدم قبل از هر خط کدنویسی و توسعه فنی، باید بازاریابی، جذب توجه و مهندسی ارزش را با گوشت و پوست لمس کرد.",
    quote: "یه جا دیدم هیچ‌وقت تو این بازار به اون چیزی که می‌خوام نمی‌رسم... یه ۱ سالی رفتم تو در و دیوار زندگی! ولی دقیقاً همون نقطه تاریک، سرآغاز ۵ سال تسلط من بر محتوا و فروش شد.",
    tags: ["تاب‌آوری", "تحلیل شکست", "تفکر بیزینسی", "نقطه عطف"],
    icon: Flame,
    highlightColor: "from-rose-500/20 to-red-500/10 border-rose-500/30 text-rose-400",
  },
  {
    id: "video-marketing-era",
    year: "۱۳۹۹ — ۱۴۰۲",
    badge: "۵ سال تجربه محتوایی",
    title: "حضور سنگین در ویدیو مارکتینگ و سناریونویسی صنعتی",
    subtitle: "خلق محتواهای وایرال، همکاری با کارخانجات و کشف قلاب‌های فروش",
    description:
      "ورود تخصصی و تمام‌وقت به عنوان مشاور، سناریونویس و مجری کمپین‌های ویدیویی برای برندهای سنگین صنعتی و خدماتی (مانند مرجع سنگ صفحه کابینت mr_countertop). تسلط بر اصول روانشناسی جلب توجه (Hook)، حفظ مخاطب در ویدیو و تبدیل نگاه‌های گذرا به قراردادهای تجاری میلیونی؛ کیفیتی که بعد از سال‌ها هنوز در این صنایع استاندارد محسوب می‌شود.",
    quote: "بهترین و فنی‌ترین سایت دنیا هم اگر نتونه در ثانیه‌های اول توجه مخاطب رو قلاب کنه و نیاز واقعیش رو برطرف کنه، یک بیابان سوت و کوره.",
    tags: ["ویدیو مارکتینگ", "سناریونویسی", "روانشناسی فروش", "برندینگ B2B"],
    icon: Award,
    highlightColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
  },
  {
    id: "web-dev-conversion",
    year: "۱۴۰۲ — ۱۴۰۳",
    badge: "توسعه فرانت‌اند و تبدیل",
    title: "تلفیق محتوا با کد؛ لندینگ‌پیج‌های پرفروش و وب‌سایت‌های مدرن",
    subtitle: "طراحی وب اختصاصی با React, Next.js, وردپرس و معماری لیدسازی",
    description:
      "تصمیم گرفتم فاصله بین «تیم مارکتینگ» و «تیم فنی» را برای همیشه از بین ببرم. با تسلط بر اکوسیستم مدرن فرانت‌اند (Next.js, React, Tailwind, TypeScript)، وب‌سایت‌ها و لندینگ‌هایی خلق کردم که به جای قالب‌های تکراری، بر مبنای سرعت موشکی، طراحی لوکس و روانشناسی تبدیل ساخته شدند. معرفی آفر انقلابی «طراحی سایت اختصاصی در ۷۲ ساعت بدون پیش‌پرداخت» ثمره همین دوران است.",
    quote: "من سایت رو یک کاتالوگ شیک نمی‌بینم؛ یک سایت باید ماشین تبدیل ۲۴ ساعته باشد که حتی وقتی شما خوابید، برای کسب‌وکارتان مشتری وفادار بسازد.",
    tags: ["React & Next.js", "لندینگ‌پیج پرفروش", "طراحی UI/UX", "آفر ۷۲ ساعته"],
    icon: Globe,
    highlightColor: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400",
  },
  {
    id: "vibe-coding-era",
    year: "۱۴۰۳ تا کنون",
    badge: "عصر هوش مصنوعی",
    title: "پرچمدار و مدرس «وایب‌کدینگ (Vibe Coding)» در ایران",
    subtitle: "خلق نرم‌افزار، اپلیکیشن و سیستم‌های اختصاصی با فارسی حرف زدن با AI",
    description:
      "با پیدایش مدل‌های پیشرفته زبانی و ابزارهای توسعه هوشمند (Cursor, Claude, Codex)، برنامه‌نویسی سنتی بازتعریف شد. من به عنوان اولین مروج ساختارمند مفهوم وایب‌کدینگ در ایران، روشی را ترویج دادم که در آن هر فرد دارای ایده و دید تجاری، می‌تواند بدون درگیر شدن با خطاهای فرسایشی سینتکس و صرفاً با شفاف‌سازی ذهنی و هدایت فارسی هوش مصنوعی، محصولات کامل وب و اپ بسازد. برگزاری دورهمی‌های حضوری تهران و انتشار آموزش‌های تخصصی گام بعدی این انقلاب است.",
    quote: "دوران ماه‌های طولانی کد زدن دستی به سر آمده؛ امروز برنده کسی است که چشم‌انداز محصول و سواد بیزینس داشته باشد و بتواند تفکرش را با پرامپت دقیق به واقعیت تبدیل کند.",
    tags: ["وایب‌کدینگ", "هوش مصنوعی مولد", "Cursor & Claude", "کارگاه‌های حضوری"],
    icon: Sparkles,
    highlightColor: "from-gold/30 to-amber-500/20 border-gold/50 text-gold",
  },
];

export default function AboutContent() {
  const { dir } = useI18n();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-gold-foreground">
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left/Main Column: Text & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-right"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>داستان واقعی، چالش‌ها و چشم‌انداز من</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.25] text-foreground">
                از شکست‌های استارتاپی تا{" "}
                <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                  بازتعریف خلق نرم‌افزار
                </span>{" "}
                با وایب‌کدینگ
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                سلام؛ من <strong>حسن شاهمرادی</strong> هستم. فعال اکوسیستم دیجیتال با بیش از ۸ سال تجربه در تقاطع استارتاپ، بازاریابی ویدیویی، فرانت‌اند مدرن و آموزش وایب‌کدینگ با هوش مصنوعی.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground/90 leading-loose">
                من معتقدم ارزشمندترین دارایی یک متخصص، شکست‌ها و بن‌بست‌هایی است که پشت سر گذاشته. در این صفحه، به جای یک رزومه خشک شرکتی، خط زمانی واقعی مسیری که پیموده‌ام را پیش روی شما گذاشته‌ام؛ از اپلیکیشن نان داغ در سال ۹۷ تا تبدیل ایده‌ها به محصول در سال ۱۴۰۵.
              </p>

              {/* Social Channels Quick Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/hasanshahmoradi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  <span>لینکدین رسمی</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>

                <a
                  href="https://www.instagram.com/shahbusinessman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold text-pink-400 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>اینستاگرام (@shahbusinessman)</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>

                <a
                  href="https://t.me/shahbusinessman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold hover:bg-gold/20 transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>تلگرام</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-sm rounded-3xl border border-gold/30 bg-surface/70 p-6 backdrop-blur-xl shadow-2xl">
                {/* Gold Glow behind avatar */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-gold/20 to-transparent blur-xl pointer-events-none" />

                <div className="relative overflow-hidden rounded-2xl border border-gold/25 aspect-[4/5] shadow-inner mb-5">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Shah2.webp`}
                    alt="حسن شاهمرادی — طراح وب و مدرس وایب‌کدینگ"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4 text-right">
                    <div className="text-xs font-bold text-gold tracking-widest uppercase mb-1">
                      Hasan Shahmoradi
                    </div>
                    <div className="text-lg font-black text-white">
                      حسن شاهمرادی
                    </div>
                    <div className="text-xs text-white/70 mt-0.5">
                      طراح سایت، توسعه‌دهنده فرانت‌اند و مدرس Vibe Coding
                    </div>
                  </div>
                </div>

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 gap-2.5 text-right text-xs">
                  <div className="rounded-xl border border-white/5 bg-background/60 p-3">
                    <div className="font-black text-gold text-base">۸+ سال</div>
                    <div className="text-muted-foreground mt-0.5">حضور حرفه‌ای دیجیتال</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-background/60 p-3">
                    <div className="font-black text-emerald-400 text-base">۵ سال</div>
                    <div className="text-muted-foreground mt-0.5">ویدیو مارکتینگ و سناریو</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-background/60 p-3">
                    <div className="font-black text-blue-400 text-base">۱۰۰+ پروژه</div>
                    <div className="text-muted-foreground mt-0.5">سایت و لندینگ پرفروش</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-background/60 p-3">
                    <div className="font-black text-pink-400 text-base">تهران، ایران</div>
                    <div className="text-muted-foreground mt-0.5">ورکشاپ‌ها و جلسات حضوری</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Interactive Timeline Album Section */}
      <section className="relative py-20 bg-surface/30 border-t border-b border-gold/10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
              <Calendar className="h-3.5 w-3.5" />
              <span>ایستگاه به ایستگاه</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
              آلبوم تصویری و خط زمانی مسیر حرفه‌ای
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              هر ایستگاه، بخشی از هویت کاری امروز من را شکل داده است. با اسکرول، با جزئیات این سفر آشنا شوید:
            </p>
          </div>

          {/* Timeline Spine */}
          <div className="relative">
            {/* Center / Right Line */}
            <div className="absolute right-4 md:right-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-500 via-gold to-emerald-500 opacity-30 transform md:translate-x-1/2" />

            {/* Milestones */}
            <div className="space-y-12 md:space-y-16">
              {MILESTONES.map((m, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node Dot on the Line */}
                    <div className="absolute right-4 md:right-1/2 top-6 md:top-1/2 transform translate-x-1/2 md:-translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold bg-[#09090b] shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                      <div className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse" />
                    </div>

                    {/* Content Card */}
                    <div className="pr-12 md:pr-0 md:w-1/2 w-full">
                      <div
                        className={`rounded-3xl border bg-gradient-to-b p-6 sm:p-7 backdrop-blur-xl shadow-xl transition-all hover:scale-[1.01] ${m.highlightColor}`}
                      >
                        {/* Header of milestone */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="rounded-full border border-current px-3 py-0.5 text-[11px] font-bold">
                            {m.badge}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground" dir="ltr">
                            {m.year}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-foreground mb-1">
                          {m.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-foreground/80 mb-4 leading-relaxed">
                          {m.subtitle}
                        </p>

                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                          {m.description}
                        </p>

                        {/* Quote Box */}
                        {m.quote && (
                          <div className="relative rounded-2xl border border-white/10 bg-background/50 p-4 mb-4 text-xs text-foreground/90 italic leading-relaxed">
                            <Quote className="h-4 w-4 text-gold/60 mb-1 inline-block -scale-x-100 me-1" />
                            <span>{m.quote}</span>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                          {m.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground border border-white/5"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Empty spacer for the other column in desktop */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Skill Ecosystem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
              <Cpu className="h-3.5 w-3.5" />
              <span>فلسفه کاری و ابزارها</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              اصولی که کار مرا تعریف می‌کنند
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gold/20 bg-surface/60 p-6 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-foreground">۱. اولویت ارزش تجاری بر ادعاهای فنی</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                پیچیده‌ترین کدها اگر به لید، فروش یا حل مشکل کسب‌وکار ختم نشوند، بی‌ارزشند. من هر سایت یا اپلیکیشن را مثل یک بیزینس مستقل طراحی می‌کنم.
              </p>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-surface/60 p-6 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-foreground">۲. شفافیت مطلق، بدون پیش‌پرداخت</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                اعتقاد به کیفیت خروجی باعث شد آفر ۷۲ ساعته سایت رایگان را خلق کنم؛ مشتری اول کار واقعی را روی دامین تست می‌بیند، سپس تصمیم می‌گیرد.
              </p>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-surface/60 p-6 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-foreground">۳. فارسی حرف زدن با هوش مصنوعی</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                در وایب‌کدینگ یاد می‌گیرید که چطور تفکر شفاف، پرامپت مهندسی‌شده و ایده‌های ناب را بدون نیاز به ماه‌ها کدنویسی دستی مستقیماً به محصول زنده تبدیل کنید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Banner */}
      <section className="py-16 bg-surface/40 border-t border-gold/15">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
              می‌خواهید در کجای این مسیر همراه من باشید؟
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              چه قصد یادگیری وایب‌کدینگ با هوش مصنوعی را داشته باشید و چه نیازمند طراحی یک سایت یا سیستم فروشگاهی اختصاصی باشید، مسیر آماده است:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <Link
              href="/contact?service=vibecoding"
              className="group flex items-center justify-between p-4 rounded-2xl border border-gold/30 bg-gradient-to-b from-surface to-surface/40 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all"
            >
              <div className="flex items-center gap-3 text-right">
                <div className="h-10 w-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-foreground group-hover:text-gold transition-colors">
                    آموزش وایب‌کدینگ
                  </div>
                  <div className="text-xs text-muted-foreground">مشاوره و ثبت‌نام دوره‌ها</div>
                </div>
              </div>
              <ArrowIcon className="h-4 w-4 text-gold group-hover:translate-x-[-3px] transition-transform" />
            </Link>

            <Link
              href="/contact?service=website"
              className="group flex items-center justify-between p-4 rounded-2xl border border-gold/30 bg-gradient-to-b from-surface to-surface/40 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all"
            >
              <div className="flex items-center gap-3 text-right">
                <div className="h-10 w-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-foreground group-hover:text-gold transition-colors">
                    سفارش طراحی سایت
                  </div>
                  <div className="text-xs text-muted-foreground">آفر ۷۲ ساعته اختصاصی</div>
                </div>
              </div>
              <ArrowIcon className="h-4 w-4 text-gold group-hover:translate-x-[-3px] transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
