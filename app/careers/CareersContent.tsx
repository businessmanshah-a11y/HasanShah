"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Target,
  ShieldAlert,
  Smartphone,
  Flame,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Globe2,
  Video,
  Send,
  Zap,
  ArrowLeft,
  XCircle,
  HelpCircle,
  MapPin,
  Eye,
} from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LeadHunterModal from "./LeadHunterModal";

export default function CareersContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-gold/20 selection:text-gold">
      <Nav />

      {/* ── Background Glow Effects ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-[#111c30]/50 blur-[150px]" />
        <div className="absolute bottom-1/4 right-10 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[130px]" />
      </div>

      <div className="relative z-10">
        {/* ── 1. Hero Section ── */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 text-center px-4">
          <div className="container mx-auto max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-gold shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>فرصت همکاری اختصاصی | استودیو حسن شاهمرادی</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.25]"
            >
              کارشناس فروش، رشد برند و <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-300 via-gold to-yellow-200 bg-clip-text text-transparent">
                شکارچی لید (Lead Hunter)
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              استخدام همکار خانم جهت حضور در دفتر کار، شکار لید، برگزاری جلسات رسمی فروش و مدیریت ارتباط با مشتریان؛ همراه با حقوق پایه ثابت و پورسانت‌های نقدی و ارزی.
            </motion.p>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-gold">
                <MapPin className="h-4 w-4" />
                دفتر کار: تهران، مرکز نوآوری زی‌تک
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-surface/70 px-3.5 py-1.5 text-gold">
                <CheckCircle2 className="h-4 w-4" />
                حقوق پایه ۱۵ تا ۲۰ م تضمینی
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-surface/70 px-3.5 py-1.5 text-gold">
                <Flame className="h-4 w-4 text-amber-400" />
                پورسانت ۱۰ تا ۲۰٪ نقدی وب
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-emerald-400">
                <TrendingUp className="h-4 w-4" />
                درآمد سئو (۱۵٪ سپس ۵٪ مستمر)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-blue-400">
                <Globe2 className="h-4 w-4" />
                پورسانت ۲۰ تا ۳۰٪ دلاری
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-purple-300">
                <Smartphone className="h-4 w-4" />
                داشتن آیفون ۱۳ به بالا الزامی
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── 2. The Zero-Excuse Culture (منشور اخلاقی و روحیات) ── */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-to-b from-surface/90 via-surface/60 to-surface/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 text-gold mb-4">
                <ShieldAlert className="h-7 w-7 text-amber-400 animate-pulse" />
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                  فرهنگ تیمی و خط قرمز اخلاقی: در این تیم «نشد» نداریم!
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground/90">
                  قبل از بررسی وظایف، این بخش را با دقت بخوانید؛ این مهم‌ترین فیلتر همکاری ماست:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                      <XCircle className="h-4 w-4" />
                      <span>کلیدواژه‌های ممنوعه (خط قرمز اخراج):</span>
                    </div>
                    <p className="text-xs sm:text-sm text-red-300/80">
                      کلماتی مثل «نشد»، «نمی‌تونم»، «بلد نیستم» و «نفهمیدم» در این استودیو وجود ندارد. پاک کردن صورت‌مسئله قابل قبول نیست. اگر به بن‌بست خوردی، باید ریسرچ کنی و با ۳ راه‌حل برگردی.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-gold font-bold text-sm">
                      <Zap className="h-4 w-4" />
                      <span>کارهای ما مهندسی نفت نیست:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      کارهایی که به شما می‌سپاریم مهندسی هوافضا نیست! کار با وب، زدن چند دکمه، اینستاگرام، ChatGPT و پلتفرم‌های موجود است. اگر یک نفر در این سیاره توانسته کاری را انجام دهد، پس شدنی است و راه دارد.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 mt-3">
                  <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed">
                    ⚖️ <strong className="text-gold">تعادل دوگانه ما:</strong> در این استودیو بالاترین احترام، امنیت شغلی، پاداش‌های جذاب و حال دادن در کار برای شما فراهم است؛ اما در ازای آن، بالاترین دیسیپلین و سخت‌گیری بدون تعارف روی خروجی واقعی وجود دارد. ما به دنبال فردی خودران و کاشف هستیم، نه کارمندی که نیاز به هل دادن داشته باشد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Four Core Pillars (مأموریت‌های اصلی) ── */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black text-foreground">
                ۴ مأموریت اصلی شما در این جایگاه
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                وظایف دقیقاً چیست و چه انتظاری از شما می‌رود؟
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-6 space-y-3 hover:border-gold/40 transition-all">
                <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  ۱. شکار لید و نشاندن کارفرما پای میز جلسه
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  شناسایی برندها، کسب‌وکارهای نیازمند وب‌سایت، پیام‌رسانی هوشمند در لینکدین و اینستاگرام و ست کردن جلسات رسمی فروش با بنیان‌گذار. 
                  <span className="block mt-1 text-gold font-semibold">
                    (توجه: جلسه رسمی نهایی و بستن قرارداد با شخص بنیان‌گذار است؛ کار شما شکار و رساندن کارفرما به جلسه است).
                  </span>
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-6 space-y-3 hover:border-gold/40 transition-all">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  ۲. مدیریت مشتریان و سبک کردن بار ارتباطی
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  پس از بسته شدن قرارداد، شما پل ارتباطی مشتریان هستید. راه‌اندازی گروه تلگرامی برای پروژه، پیگیری مدارک و اقساط، و چارچوب‌گذاری محکم برای کارفرما تا بدانند ۹۰٪ ارتباطات در تلگرام است و نباید با تماس‌های مکرر تلفنی سربار شوند.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-6 space-y-3 hover:border-gold/40 transition-all">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Video className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  ۳. تصویربرداری با آیفون و استوری‌گذاری روزانه
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  تصویربرداری تمیز از دفتر کار با آیفون، سناریونویسی استوری با کمک ChatGPT، انتشار استوری‌های روزمره و برنامه‌ریزی لایوها. 
                  <span className="block mt-1 text-gold font-semibold">
                    (شما ادیتور نیستید! ادیت پست‌های اصلی با خود بنیان‌گذار است؛ شما تصویربرداری و آپلود را انجام می‌دهید).
                  </span>
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-6 space-y-3 hover:border-gold/40 transition-all">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  ۴. ورود به مارکت بین‌المللی و درآمد دلاری
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  ستاپ و بهینه‌سازی پروفایل‌ها در پلتفرم‌های بین‌المللی (Upwork، Freelancer، LinkedIn)، ارسال پروپوزال‌های انگلیسی و ریسرچ پیوسته مسیرهای فریلنسری دلاری جهت باز کردن جریان درآمد ارزی.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Requirements & Deal Breakers ── */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-center text-foreground">
              پیش‌نیازهای قطعی داوطلب (بدون استثنا)
            </h2>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {[
                { title: "جنسیت: خانم", desc: "به دلیل هوش اجتماعی، ارتباطات باوقار، مدیریت صبورانه مشتریان و هماهنگی تیمی." },
                { title: "حضور در دفتر کار (تهران)", desc: "دفتر کار: تهران، بلوار پژوهش، ساختمان رویش، مرکز نوآوری زی‌تک (ZTech)، واحد ۱۰۴" },
                { title: "داشتن گوشی شخصی آیفون ۱۳ به بالا", desc: "با دوربین باکیفیت و سالم جهت ثبت تصاویر و استوری‌های باکیفیت دفتر کار." },
                { title: "تسلط بر کار با ChatGPT و ابزارهای AI", desc: "جهت سناریونویسی استوری‌ها، ریسرچ سریع و سرعت بخشیدن به امور روزمره." },
                { title: "فن بیان قوی و جسارت در پیگیری", desc: "نترسیدن از چت، تماس و پیگیری کارفرمایان؛ پیگیری محترمانه اما خستگی‌ناپذیر." },
                { title: "روحیه خودران و کاشف", desc: "اگر چیزی را بلد نیستید، در یوتیوب و گوگل سرچ کنید و راهش را پیدا کنید («نشد» نداریم)." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-surface/40 p-4">
                  <div className="h-5 w-5 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Compensation Architecture (بسته مالی) ── */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                بسته مالی و مدل درآمدی شفاف (Win-Win)
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                شما شریک رشد مالی استودیو هستید؛ هرچه لید باکیفیت‌تر بیاورید، درآمدتان تصاعدی‌تر می‌شود.
              </p>
            </div>

            <div className="grid sm:grid-cols-4 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-surface/40 p-5 space-y-2">
                <span className="text-xs font-bold text-muted-foreground">امنیت پایه</span>
                <p className="text-lg font-black text-foreground">۱۵ الی ۲۰ م ثابت</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ۱۵ م تضمینی؛ پرش فوری به ۲۰ م با بستن حتی ۱ قرارداد
                </p>
              </div>

              <div className="rounded-2xl border border-gold/40 bg-gold/5 p-5 space-y-2">
                <span className="text-xs font-bold text-gold">پروژه‌های وب (میانگین ۱۰۰ م)</span>
                <p className="text-lg font-black text-gold">۱۰٪ الی ۲۰٪ نقد</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  تسویه فوری به محض واریز پیش‌پرداخت کارفرما
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-5 space-y-2">
                <span className="text-xs font-bold text-emerald-400">قراردادهای سئو (تعرفه ۵۰ م)</span>
                <p className="text-lg font-black text-emerald-400">۱۵٪ سپس ۵٪ مستمر</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ماه اول ۱۵٪؛ ماه‌های بعد ۵٪ مستمر تا زمان تمدید
                </p>
              </div>

              <div className="rounded-2xl border border-blue-500/40 bg-blue-500/5 p-5 space-y-2">
                <span className="text-xs font-bold text-blue-400">پروژه‌های بین‌المللی ($1,500)</span>
                <p className="text-lg font-black text-blue-400">۲۰٪ الی ۳۰٪ دلاری</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ۸۱ تا ۱۲۱.۵ میلیون پورسانت نقدی از هر قرارداد
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5.5 Detailed Persona Trigger Box (ویژگی‌های دقیق کسی که می‌خواهیم) ── */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div
              onClick={() => setIsModalOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-to-r from-gold/15 via-surface/85 to-surface/95 p-6 sm:p-8 shadow-2xl hover:border-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-right">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-2xl overflow-hidden border-2 border-gold/50 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/careers/lead-hunter-persona.jpg"
                      alt="همکار ایده‌آل ما - شکارچی لید"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>ماتریس جامع شایستگی و شناسنامه رسمی نقش</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-gold transition-colors">
                      ویژگی‌های دقیق کسی که می‌خواهیم (کلیک کنید)
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
                      مشاهده پروفایل شخصیتی (MBTI)، هوش هیجانی (EQ)، مهارت‌های سخت و نرم، اسکریپت‌های مکالمه تلگرام، جدول کمیسیون پلکانی و مدل پیش‌بینی درآمد در پاپ‌آپ جامع.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-xs sm:text-sm font-black text-gold-foreground shadow-gold group-hover:scale-105 transition-transform">
                  <span>مشاهده شناسنامه کامل</span>
                  <ArrowLeft className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. How to Apply (روش ارسال درخواست با ویدیو) ── */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center space-y-8">
            <div className="rounded-3xl border-2 border-gold bg-gradient-to-b from-surface/95 via-surface/80 to-surface/95 p-8 sm:p-12 shadow-2xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-bold text-gold">
                <Sparkles className="h-4 w-4" />
                <span>فرآیند مصاحبه سریع (بدون اتلاف وقت)</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-foreground">
                رزومه‌های متنی سنتی را فراموش کنید!
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                ما به جای خواندن صفحات تکراری رزومه، می‌خواهیم خود واقعی شما، لحن، صدا و انرژی‌تان را ببینیم:
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/50 p-5 text-right space-y-3">
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-gold text-gold-foreground font-black text-xs flex items-center justify-center shrink-0">۱</span>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    گوشی آیفون خود را به صورت عمودی جلوی خود بگیرید و یک <strong>ویدیوی سلفی ۳۰ ثانیه‌ای</strong> ساده ضبط کنید.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-gold text-gold-foreground font-black text-xs flex items-center justify-center shrink-0">۲</span>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    در ویدیو خودتان را معرفی کنید و بگویید <strong>چرا فکر می‌کنید روحیه یک کاشف و شکارچی لید را دارید و در مواجهه با چالش‌های غیرمنتظره چطور عمل می‌کنید؟</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-gold text-gold-foreground font-black text-xs flex items-center justify-center shrink-0">۳</span>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    ویدیو را به همراه شماره تماس و خلاصه‌ای از خود در تلگرام برای حسن شاهمرادی ارسال کنید.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://t.me/shahbusinessman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-gold px-8 py-4 text-sm sm:text-base font-black text-gold-foreground shadow-gold hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>ارسال ویدیوی معرفی در تلگرام (@shahbusinessman)</span>
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  پاسخ‌ها و بررسی ویدیوها ظرف حداکثر ۴۸ ساعت کاری انجام خواهد شد.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Detailed Lead Hunter Persona Modal ── */}
      <LeadHunterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Footer />
    </main>
  );
}

