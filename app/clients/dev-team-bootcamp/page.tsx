"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  TerminalSquare,
  Code2,
  Cpu,
  Sparkles,
  Clock,
  Users,
  CheckCircle2,
  ArrowLeft,
  Send,
  PhoneCall,
  MessageSquare,
  Copy,
  Check,
  Layers,
  Bot,
  Workflow,
  ShieldCheck,
  Zap,
  BookOpen,
  HelpCircle,
  FolderCode,
  FileCheck,
  Flame,
  Target,
  Compass,
  GitPullRequest,
  ChevronDown,
  ExternalLink,
  Share2,
  AlertCircle,
  Laptop,
} from "lucide-react";
import { toast } from "sonner";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/ParticlesBackground";
import { BaleIcon } from "../../components/Icons";

// ── Contact Constants ────────────────────────────────────────────────────────
const PHONE = "09120870095";
const PHONE_FA = "۰۹۱۲۰۸۷۰۰۹۵";
const TEL = `tel:${PHONE}`;
const TELEGRAM = "https://t.me/shahbusinessman";
const BALE = "https://ble.ir/shahvibe";
const WHATSAPP_MSG = encodeURIComponent(
  "سلام آقای شاهمرادی، پروپوزال و مسیر بوت‌کمپ اختصاصی وایب‌کدینگ ویژه تیم برنامه‌نویسی را در سایت دیدیم. می‌خواستیم برای هماهنگی زمان‌بندی دو جلسه ۲ ساعته و شروع کارگاه هماهنگ کنیم."
);
const WHATSAPP = `https://wa.me/989120870095?text=${WHATSAPP_MSG}`;

export default function DevTeamBootcampPage() {
  const [copied, setCopied] = useState(false);
  const [activeSession, setActiveSession] = useState<"session1" | "sprint" | "session2">("session1");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("لینک اختصاصی این برنامه کپی شد!");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground" dir="rtl">
      {/* ── اصلی سایت هدر ── */}
      <Nav />

      {/* ── هیرو پرمیوم با زمینه داینامیک ── */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <ParticlesBackground />
        <div
          className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, oklch(0.83 0.105 72 / 0.18), transparent 75%)",
          }}
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* بج اختصاصی */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs md:text-sm font-semibold text-gold shadow-gold-sm backdrop-blur-md"
            >
              <TerminalSquare className="h-4 w-4" />
              <span>پروپوزال و مسیر آموزشی کارگاه اختصاصی مهندسی ایجنتیک</span>
              <span className="hidden md:inline-block h-1.5 w-1.5 rounded-full bg-gold/60" />
              <span className="hidden md:inline text-gold/80">ویژه تیم‌های نرم‌افزاری ۴ تا ۵ نفره</span>
            </motion.div>

            {/* تیتر اصلی */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-black leading-[1.3] md:text-5xl lg:text-6xl text-foreground"
            >
              از کدنویسی دستی و فرسایشی تا{" "}
              <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
                رهبری و ارکستراسیون ایجنت‌ها
              </span>
            </motion.h1>

            {/* توضیحات هدفمند */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-loose text-muted-foreground md:text-lg"
            >
              کارگاه فشرده ۴ ساعته (۲ جلسه ۲ ساعته + ۱ هفته اسپرینت عملی) برای تیم برنامه‌نویسان.
              تمرکز بر <strong className="text-foreground">یادگیری ماهیگیری</strong>، تسلط بر ساخت Custom Skills،
              کدنویسی با گفتگوی طبیعی فارسی، و تبدیل استانداردهای مهندسان سینیور به قوانین هوش مصنوعی بدون افت کیفیت و معماری.
            </motion.p>

            {/* دکمه‌های اکشن سریع */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
            >
              <a
                href="#schedule"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-gold px-7 py-3.5 text-sm font-black text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5 hover:shadow-gold"
              >
                <span>مشاهده سرفصل‌های ۴ ساعته</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-surface/80 px-6 py-3.5 text-sm font-bold text-foreground transition hover:border-gold hover:bg-gold/10"
              >
                <MessageSquare className="h-4 w-4 text-gold" />
                <span>هماهنگی زمان‌بندی جلسات</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
                title="کپی لینک اختصاصی"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span className="text-xs">{copied ? "کپی شد" : "اشتراک لینک با تیم"}</span>
              </button>
            </motion.div>

            {/* کارت‌های مشخصات کلیدی (Quick Specs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
            >
              <div className="rounded-2xl border border-gold/15 bg-surface/60 p-4 text-center backdrop-blur shadow-sm">
                <Clock className="mx-auto mb-2 h-6 w-6 text-gold" />
                <div className="text-xl font-black text-foreground">۴ ساعت فشرده</div>
                <div className="mt-1 text-xs text-muted-foreground">۲ جلسه ۲ ساعته زنده</div>
              </div>

              <div className="rounded-2xl border border-gold/15 bg-surface/60 p-4 text-center backdrop-blur shadow-sm">
                <Flame className="mx-auto mb-2 h-6 w-6 text-amber-400" />
                <div className="text-xl font-black text-foreground">۱ هفته اسپرینت</div>
                <div className="mt-1 text-xs text-muted-foreground">تمرین و چالش عملی واقعی</div>
              </div>

              <div className="rounded-2xl border border-gold/15 bg-surface/60 p-4 text-center backdrop-blur shadow-sm">
                <Users className="mx-auto mb-2 h-6 w-6 text-gold" />
                <div className="text-xl font-black text-foreground">۴ تا ۵ نفر</div>
                <div className="mt-1 text-xs text-muted-foreground">تیم سینیور، جونیور و فول‌استک</div>
              </div>

              <div className="rounded-2xl border border-gold/15 bg-surface/60 p-4 text-center backdrop-blur shadow-sm">
                <Workflow className="mx-auto mb-2 h-6 w-6 text-emerald-400" />
                <div className="text-xl font-black text-foreground">Custom Skills</div>
                <div className="mt-1 text-xs text-muted-foreground">استانداردسازی و قوانین تیمی</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── فلسفه و جهان‌بینی کارگاه (Core Philosophy) ── */}
      <section className="bg-surface/20 py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
              <Compass className="h-4 w-4" />
              جهان‌بینی و اصول اساسی کارگاه
            </span>
            <h2 className="mt-3 text-3xl font-black leading-snug md:text-4xl text-foreground">
              چرا این کارگاه با تمام آموزش‌های تئوری هوش مصنوعی فرق دارد؟
            </h2>
            <p className="mt-4 text-muted-foreground leading-loose">
              در آموزش وایب‌کدینگ قرار نیست لقمه آماده به کسی بدهیم. برنامه‌نویسان واقعی نیازی به کدهای کپی‌پیستی ندارند؛
              آن‌ها به مهارت تفکر مهندسی، تسلط بر ایجنت‌ها و ابزارهایی نیاز دارند که راندمانشان را ده‌برابر کند.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* اصل ۱ */}
            <div className="group rounded-3xl border border-gold/15 bg-surface/80 p-7 shadow-elegant transition hover:border-gold/30 hover:bg-surface">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-5 transition group-hover:scale-110">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-foreground">
                ۱. ماهیگیری به جای ماهی آماده (Mindset First)
              </h3>
              <p className="mt-3 text-sm leading-loose text-muted-foreground">
                ما فرمول ثابت یا دستورالعمل خطی به شما دیکته نمی‌کنیم. ما یاد می‌دهیم چطور با گفتگوی طبیعی و فارسی با ایجنت‌ها،
                مسائل پیچیده فنی را بشکنید، پرامپت‌ها را هدایت کنید و از اولین ایده تا تست و تحویل نهایی، کنترل کامل معماری را در دست داشته باشید.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gold">
                <CheckCircle2 className="h-4 w-4" />
                <span>تبدیل مهندس به معمار و فرمانده ارکستر کدنویسی</span>
              </div>
            </div>

            {/* اصل ۲ */}
            <div className="group rounded-3xl border border-gold/15 bg-surface/80 p-7 shadow-elegant transition hover:border-gold/30 hover:bg-surface">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-5 transition group-hover:scale-110">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-foreground">
                ۲. مدل‌ها بی‌اهمیت‌اند؛ اسکیل‌ها و ایجنت‌ها پادشاهند
              </h3>
              <p className="mt-3 text-sm leading-loose text-muted-foreground">
                چه با Claude Code کار کنید، چه با Antigravity، Codex، Cursor یا Windsurf، مدل‌ها تنها موتور محاسباتی هستند و مداوم عوض می‌شوند.
                برگ برنده تیم شما، مهارت در ساختن ایجنت‌های تخصصی، سازماندهی کانتکست پروژه و طراحی اسکیل‌های اختصاصی است.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gold">
                <CheckCircle2 className="h-4 w-4" />
                <span>نگرش Model-Agnostic و ماندگار در برابر آپدیت‌های هوش مصنوعی</span>
              </div>
            </div>

            {/* اصل ۳ */}
            <div className="group rounded-3xl border border-gold/15 bg-surface/80 p-7 shadow-elegant transition hover:border-gold/30 hover:bg-surface">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-5 transition group-hover:scale-110">
                <FolderCode className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-foreground">
                ۳. استانداردسازی با ساخت Custom Skills و Rules
              </h3>
              <p className="mt-3 text-sm leading-loose text-muted-foreground">
                قابلیت انقلابی کارگاه: یاد می‌گیرید سلیقه معماری، الگوهای کلین‌کد و تجارب سالیان برنامه‌نویسان سینیور تیم را در قالب فایل‌های قوانین
                (مانند <code className="text-gold">.cursorrules</code> و <code className="text-gold">AGENTS.md</code>) و مهارت‌های سفارشی کدنویسی فرمول‌بندی کنید تا هوش مصنوعی همیشه مطابق استانداردهای سخت‌گیرانه شما کد بزند.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gold">
                <CheckCircle2 className="h-4 w-4" />
                <span>صفر شدن کدهای نامرغوب (AI Slop) و حفظ یکپارچگی کدبیس</span>
              </div>
            </div>

            {/* اصل ۴ */}
            <div className="group rounded-3xl border border-gold/15 bg-surface/80 p-7 shadow-elegant transition hover:border-gold/30 hover:bg-surface">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-5 transition group-hover:scale-110">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-foreground">
                ۴. هوش مصنوعی اهرم ۱۰ برابری است، نه جایگزین مهندس
              </h3>
              <p className="mt-3 text-sm leading-loose text-muted-foreground">
                توسعه‌دهنده باهوش از هوش مصنوعی نمی‌ترسد، بلکه آن را رام می‌کند. کارهایی که قبلاً ساعت‌ها کدنویسی دستی، تایپ بویلرپلیت
                و سرچ‌های بی‌پایان می‌طلبید، با سرعت مافوق‌صوت به هوش مصنوعی سپرده می‌شود تا انرژی تیم بر ارزش‌آفرینی تجاری و زیرساخت‌های کلان متمرکز شود.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gold">
                <CheckCircle2 className="h-4 w-4" />
                <span>شتاب‌بخشی چشمگیر به ریلیز فیچرها بدون فرسودگی ذهنی تیم</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── نقشه راه ۴ ساعته و تایم‌لاین کارگاه ── */}
      <section id="schedule" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
              <Clock className="h-4 w-4" />
              برنامه زمانی و ایستگاه‌های بوت‌کمپ
            </span>
            <h2 className="mt-3 text-3xl font-black leading-snug md:text-4xl text-foreground">
              مسیر دقیق کارگاه: ۴ ساعت فشرده + ۱ هفته اسپرینت تمرینی
            </h2>
            <p className="mt-4 text-muted-foreground leading-loose">
              برنامه طوری چیده شده که هرگز در یک روز تمام نشود. فاصله یک‌هفته‌ای بین دو جلسه حیاتی‌ترین بخش یادگیری است؛
              چون مهارت واقعی زمانی در مغز تیم نهادینه می‌شود که خودشان دست‌به‌کد شوند و با چالش‌های میدانی روبرو گردند.
            </p>
          </div>

          {/* تب‌های انتخاب جلسه */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex rounded-2xl border border-gold/20 bg-surface/70 p-1.5 backdrop-blur">
              <button
                onClick={() => setActiveSession("session1")}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs md:text-sm font-bold transition ${
                  activeSession === "session1"
                    ? "bg-gradient-gold text-gold-foreground shadow-gold-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>جلسه ۱ (۲ ساعت)</span>
                <span className="hidden md:inline text-[11px] opacity-80">ذهنیت، ابزارها و اسکیل‌ها</span>
              </button>

              <button
                onClick={() => setActiveSession("sprint")}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs md:text-sm font-bold transition ${
                  activeSession === "sprint"
                    ? "bg-gradient-gold text-gold-foreground shadow-gold-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>اسپرینت ۱ هفته‌ای</span>
                <span className="hidden md:inline text-[11px] opacity-80">تکلیف عملی اعضا</span>
              </button>

              <button
                onClick={() => setActiveSession("session2")}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs md:text-sm font-bold transition ${
                  activeSession === "session2"
                    ? "bg-gradient-gold text-gold-foreground shadow-gold-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>جلسه ۲ (۲ ساعت)</span>
                <span className="hidden md:inline text-[11px] opacity-80">کلینیک کد و رفع باگ</span>
              </button>
            </div>
          </div>

          {/* محتوای تب‌ها */}
          <div className="mt-10 mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              {activeSession === "session1" && (
                <motion.div
                  key="session1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-gold/20 bg-surface/90 p-6 md:p-9 shadow-elegant"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                    <div>
                      <span className="text-xs font-black text-gold">ایستگاه اول | ۲ ساعت آموزش زنده تعاملی</span>
                      <h3 className="mt-1 text-2xl font-black text-foreground">
                        تغییر پارادایم به مهندسی ایجنتیک، آرایش ابزارها و ساخت Custom Skill
                      </h3>
                    </div>
                    <span className="rounded-xl border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-bold text-gold">
                      مدت زمان: ۱۲۰ دقیقه
                    </span>
                  </div>

                  <div className="mt-8 space-y-6">
                    {/* بخش ۱ */}
                    <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 md:p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-sm font-black text-gold">
                        ۰۱
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-foreground">
                            جایگاه واقعی AI، روانشناسی تغییر نقش مهندس و مکالمه طبیعی (۳۰ دقیقه)
                          </h4>
                          <span className="text-xs text-muted-foreground">۰۰:۰۰ تا ۰۰:۳۰</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          بحث‌محور و گفتگو با اعضای تیم درباره چالش‌های روانی و فنی کار با هوش مصنوعی.
                          چطور با فارسی و لحن طبیعی با ایجنت صحبت کنیم و یک تسک گنگ را بدون افت دقت فنی به اجزای اجرایی تبدیل نماییم.
                        </p>
                      </div>
                    </div>

                    {/* بخش ۲ */}
                    <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 md:p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-sm font-black text-gold">
                        ۰۲
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-foreground">
                            استک ابزارها، مدیریت کانتکست و ساخت Custom Skills اختصاصی (۴۰ دقیقه)
                          </h4>
                          <span className="text-xs text-muted-foreground">۰۰:۳۰ تا ۰۱:۱۰</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          بررسی عمیق ابزارهای مدرن (Claude Code, Antigravity, Cursor, Codex). تدوین فایل‌های قوانین تیمی
                          (<code className="text-gold">.cursorrules</code>, <code className="text-gold">AGENTS.md</code>, <code className="text-gold">CLAUDE.md</code>) و آموزش نحوه تجمیع تجارب سینیورها در یک اسکیل قابل بازیافت برای کل پروژه‌ها.
                        </p>
                      </div>
                    </div>

                    {/* بخش ۳ */}
                    <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 md:p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-sm font-black text-gold">
                        ۰۳
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-foreground">
                            لایو کدینگ عملی و مهندسی پرامپت در دنیای واقعی توسط حسن شاهمرادی (۳۰ دقیقه)
                          </h4>
                          <span className="text-xs text-muted-foreground">۰۱:۱۰ تا ۰۱:۴۰</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          پیاده‌سازی زنده و بلادرنگ یک فیچر یا ریفکتور سنگین در ۲۰ دقیقه جلوی چشم بچه‌ها.
                          نمایش عملی تکنیک‌های هدایت ایجنت، تست‌نویسی خودکار و چگونگی غلبه بر توهمات لحظه‌ای مدل.
                        </p>
                      </div>
                    </div>

                    {/* بخش ۴ */}
                    <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 md:p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-sm font-black text-gold">
                        ۰۴
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-foreground">
                            تدوین تسک‌های عملی و آماده‌سازی اسپرینت ۱ هفته‌ای (۲۰ دقیقه)
                          </h4>
                          <span className="text-xs text-muted-foreground">۰۱:۴۰ تا ۰۲:۰۰</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          تحویل چالش‌ها و تسک‌های عملی به هر کدام از اعضای تیم بر اساس استک فنی‌شان،
                          تنظیم پروتکل لاگ‌برداری از باگ‌ها و پرامپت‌های به بن‌بست خورده در طول هفته.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSession === "sprint" && (
                <motion.div
                  key="sprint"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-gold/20 bg-surface/90 p-6 md:p-9 shadow-elegant"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                    <div>
                      <span className="text-xs font-black text-amber-400">ایستگاه دوم | فاصله زمانی بین دو جلسه</span>
                      <h3 className="mt-1 text-2xl font-black text-foreground">
                        اسپرینت ۱ هفته‌ای: تمرین عملی روی ماژول‌های واقعی تیم
                      </h3>
                    </div>
                    <span className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold text-amber-400">
                      مدت: ۷ روز تمرین مستقل
                    </span>
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                      <div className="flex items-center gap-2.5 font-bold text-foreground mb-3">
                        <Laptop className="h-5 w-5 text-gold" />
                        <span>ماموریت عملی اعضای تیم</span>
                      </div>
                      <p className="text-sm leading-loose text-muted-foreground">
                        هر کدام از افراد (یا در قالب ساب‌تیم‌های ۲ نفره)، یک فیچر یا تسک مشخص از پروژه‌های واقعی‌شان را صرفاً با
                        متدولوژی وایب‌کدینگ، تدوین مستندات Spec و فایل قوانین اختصاصی پیاده می‌کنند.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                      <div className="flex items-center gap-2.5 font-bold text-foreground mb-3">
                        <AlertCircle className="h-5 w-5 text-amber-400" />
                        <span>لاگ‌برداری از چالش‌ها و توهمات</span>
                      </div>
                      <p className="text-sm leading-loose text-muted-foreground">
                        ثبت دقیق جاهایی که هوش مصنوعی وارد حلقه بی‌پایان خطا شد، کانتکست قاطی شد، یا کد نامرغوب زد.
                        این لاگ‌ها ماده خام کلینیک تخصصی جلسه دوم خواهند بود.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-gold/15 bg-gold/5 p-5 text-center">
                    <p className="text-sm font-bold text-gold">
                      💡 هدف این هفته: شکستن ترس از دست دادن کنترل و کشف لیمیت‌ها و پتانسیل واقعی ایجنت در کدبیس شرکت.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeSession === "session2" && (
                <motion.div
                  key="session2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-gold/20 bg-surface/90 p-6 md:p-9 shadow-elegant"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                    <div>
                      <span className="text-xs font-black text-emerald-400">ایستگاه سوم | ۲ ساعت بررسی زنده و تثبیت</span>
                      <h3 className="mt-1 text-2xl font-black text-foreground">
                        کلینیک کدهای تیم، دیباگ خطاهای تعاملی و ادغام در پایپ‌لاین تولید
                      </h3>
                    </div>
                    <span className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-bold text-emerald-400">
                      مدت زمان: ۱۲۰ دقیقه
                    </span>
                  </div>

                  <div className="mt-8 space-y-6">
                    {/* بخش ۱ */}
                    <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 md:p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-sm font-black text-emerald-400">
                        ۰۱
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-foreground">
                            کلینیک کدهای تولیدی تیم و بازبینی موشکافانه تسک‌ها (۵۰ دقیقه)
                          </h4>
                          <span className="text-xs text-muted-foreground">۰۰:۰۰ تا ۰۰:۵۰</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          اسکرین‌شیر تک‌تک اعضا و بررسی اینکه آیا تسک‌ها به درستی و با استاندارد بالا کامل شدند یا خیر؟
                          کالبدشکافی جاهایی که مدل گیج شد، نحوه هرس کردن کانتکست (Context Pruning) و ریفکتور لایو کدهای مشکل‌دار.
                        </p>
                      </div>
                    </div>

                    {/* بخش ۲ */}
                    <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 md:p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-sm font-black text-emerald-400">
                        ۰۲
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-foreground">
                            پایپ‌لاین‌های خود-تصحیح‌گر (Self-Healing)، تست خودکار و Git Workflows (۴۰ دقیقه)
                          </h4>
                          <span className="text-xs text-muted-foreground">۰۰:۵۰ تا ۰۱:۳۰</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          اتصال تست‌های خودکار و لینترها به ایجنت تا خودش کدهای خودش را قبل از کامیت تست و اصلاح کند.
                          تدوین استانداردهای تیمی برای PR Review کدهای وایب‌شده روی گیت‌هاب/گیت‌لب به گونه‌ای که کل تیم هماهنگ بماند.
                        </p>
                      </div>
                    </div>

                    {/* بخش ۳ */}
                    <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 md:p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-sm font-black text-emerald-400">
                        ۰۳
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-foreground">
                            فرمول تثبیت در فرآیند روزمره شرکت و پرسش‌وپاسخ اختصاصی (۳۰ دقیقه)
                          </h4>
                          <span className="text-xs text-muted-foreground">۰۱:۳۰ تا ۰۲:۰۰</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          طراحی چک‌لیست روزانه مهندسی ایجنتیک برای شرکت شما، پاسخ به سوالات فنی عمیق،
                          و تدوین گام‌های بعدی برای تبدیل شدن تیم به پرچمداران سرعت در اکوسیستم محصولی‌تان.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── جعبه‌ابزار و مزیت کلیدی Custom Skills ── */}
      <section className="bg-surface/25 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                <Workflow className="h-4 w-4" />
                قابلیت انحصاری وایب‌کدینگ در سطح سینیور
              </span>
              <h2 className="mt-3 text-3xl font-black leading-snug md:text-4xl text-foreground">
                چگونه دانش فنی سینیورهای تیم به یک «اسکیل اختصاصی ماندگار» تبدیل می‌شود؟
              </h2>
              <p className="mt-5 text-sm md:text-base leading-loose text-muted-foreground">
                یکی از بزرگ‌ترین خطرات هوش مصنوعی در شرکت‌ها این است که جونیورها کدهای بدون ضابطه تولید می‌کنند و سینیورها
                وقتشان را صرف پاک‌کردن کدهای شلخته می‌کنند. راهکار انقلابی حسن شاهمرادی، ایجاد سیستم{" "}
                <strong className="text-foreground">Custom Skills & Team Rules</strong> است.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-background/70 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-bold text-foreground">تدوین استانداردهای کدنویسی تمیز در فایل قوانین</h4>
                    <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      قراردادهای نام‌گذاری، معماری لایه‌ای، کنترل خطاها، استایل‌های سازمانی و پترن‌های تاییدشده شرکت
                      در یک فایل قوانین شفاف ریخته می‌شود تا هوش مصنوعی موظف به رعایت ۱۰۰٪ آن‌ها باشد.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-background/70 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-bold text-foreground">ساخت Skill اختصاصی برای هر تسک تکرارشونده</h4>
                    <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      آیا ساخت فرم‌ها، نوشتن API اندپوینت‌ها، یا تست‌نویسی فرآیند ثابتی دارد؟ یکبار اسکیل آن را با هم می‌سازیم،
                      تا از این به بعد با یک اشاره کوتاه، کل فرآیند بر اساس بهترین روش تیم پیاده شود.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-background/70 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-bold text-foreground">اشتراک‌گذاری مهارت در گیت بین تمام اعضا</h4>
                    <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      این فایل‌ها همراه با مخزن گیت پروژه کامیت می‌شوند؛ یعنی هر عضو جدیدی که به تیم اضافه شود،
                      از روز اول دقیقاً با همان سطح کیفیت و دقت سینیورها از هوش مصنوعی خروجی می‌گیرد.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* کارت مقایسه بصری */}
            <div className="rounded-3xl border border-gold/20 bg-surface p-6 md:p-8 shadow-elegant">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">team-rules / SKILL.md</span>
              </div>

              <div className="mt-5 space-y-4 font-mono text-xs leading-relaxed text-muted-foreground">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                  <div className="flex items-center gap-2 text-red-400 font-bold mb-1">
                    <span>❌ وایب‌کدینگ بدون متدولوژی (AI Slop):</span>
                  </div>
                  <p className="text-[11px] leading-loose text-red-300/80">
                    &ldquo;لطفاً صفحه پنل مدیریت رو بساز.&rdquo;<br />
                    خروجی: کدهای درهم‌برهم، لایبرری‌های متفرقه، کامپوننت‌های بدون تست، نقض معماری شرکت و تحمیل ۵ روز دیباگ دستی به سینیورها.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                    <span>✅ مهندسی ایجنتیک با Custom Skills & Rules:</span>
                  </div>
                  <p className="text-[11px] leading-loose text-emerald-300/80">
                    &ldquo;بر اساس @team-design-system و معماری لایه‌ای، ماژول ادمین را با پوشش تست ۹۰٪ پیاده کن.&rdquo;<br />
                    خروجی: کد تایپ‌سیف، پیروی بی‌چون‌وچرا از توکن‌های طراحی تیم، تست‌های خودکار سبز، و قابلیت ادغام فوری در مستر.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/10 p-4 text-center">
                <p className="text-xs font-bold text-gold">
                  خروجی نهایی: ارتقای سرعت تیم از ۵ فیچر در ماه به ۲۰+ فیچر تست‌شده و مطمئن.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── چک‌لیست و دستاوردهای نهایی تیم ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
              <ShieldCheck className="h-4 w-4" />
              تعهدات و دستاوردهای ملموس
            </span>
            <h2 className="mt-3 text-3xl font-black leading-snug md:text-4xl text-foreground">
              در پایان این بوت‌کمپ، تیم شما صاحب چه دارایی‌هایی خواهد بود؟
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-gold/15 bg-surface/70 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-4">
                <FileCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-foreground">پکیج اختصاصی قوانین تیم (.cursorrules)</h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground">
                فایل قوانین کاملاً شخصی‌سازی‌شده مطابق با زبان برنامه‌نویسی، فریم‌ورک و استاندارد کیفیت پروژه‌های واقعی شرکت شما.
              </p>
            </div>

            <div className="rounded-3xl border border-gold/15 bg-surface/70 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-4">
                <Workflow className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-foreground">حداقل ۱ اسکیل اختصاصی تست‌شده</h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground">
                یک Custom Skill پیاده‌سازی شده در طول دوره که پرتکرارترین کارهای تیمتان را با یک کلیک به صورت استاندارد انجام می‌دهد.
              </p>
            </div>

            <div className="rounded-3xl border border-gold/15 bg-surface/70 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-4">
                <GitPullRequest className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-foreground">پروتکل یکپارچه کار تیمی و ریویوی PR</h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground">
                ورک‌فلوی شفاف و مشخص برای اینکه چطور اعضای تیم بدون تداخل و بدون شکستن کدهای یکدیگر با هوش مصنوعی کامیت بزنند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── سوالات متداول تیم فنی (FAQ) ── */}
      <section className="bg-surface/20 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
              <HelpCircle className="h-4 w-4" />
              پاسخ به سوالات فنی تیم
            </span>
            <h2 className="mt-3 text-3xl font-black leading-snug md:text-4xl text-foreground">
              پرسش‌های متداول پیش از برگزاری
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-3xl space-y-4">
            {[
              {
                q: "آیا این آموزش برای برنامه‌نویسان سینیور که سال‌ها دستی کد زده‌اند مفید است؟",
                a: "دقیقاً برای سینیورها ساخته شده است. سینیورها بیشترین مقاومت را در برابر کدهای نامرغوب هوش مصنوعی دارند. این کارگاه به سینیورها یاد می‌دهد چطور هوش مصنوعی را رام کنند و به عنوان یک کارآموز فوق‌سریع و مطیع به کار بگیرند تا از شر کارهای زمان‌بر خلاص شوند.",
              },
              {
                q: "ما استک فنی خاصی داریم؛ آیا این دوره به فریم‌ورک خاصی وابسته است؟",
                a: "خیر، متدولوژی کارگاه کاملاً آگنوستیک نسبت به زبان و استک است. چه با React/Next.js کار کنید، چه با Python/Django/FastAPI، Go، Flutter یا لاراول؛ اصول مهندسی کانتکست، ساخت اسکیل و شکستن تسک‌ها در تمام زبان‌ها یکسان و قدرتمند است.",
              },
              {
                q: "آیا بعد از دوره به ابزار گران‌قیمت یا خاصی وابسته می‌شویم؟",
                a: "اصلاً. ما تفکر و مهارت ارکستراسیون ایجنت را یاد می‌دهیم. ابزارهایی مثل Claude Code، Cursor، Antigravity، Codex یا اکستنشن‌های رایگان همه ابزار هستند و شما پس از دوره می‌توانید با هر ابزاری که مایل بودید با بالاترین بازدهی کار کنید.",
              },
              {
                q: "تکالیف اسپرینت میان‌دوره چطور انتخاب می‌شوند؟",
                a: "در پایان جلسه اول، با مشارکت خود اعضای تیم، تسک‌های واقعی از بک‌لاگ پروژه‌های جاری شرکت انتخاب می‌شود؛ بنابراین زمانی از تیم برای پروژه‌های فیک تلف نمی‌شود و خروجی مستقیم وارد محصول خودتان خواهد شد.",
              },
            ].map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gold/15 bg-surface/80 transition hover:border-gold/30"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-start font-bold text-foreground"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="border-t border-white/5 px-5 pb-5 pt-3 text-xs md:text-sm leading-loose text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── بخش تماس و اقدام نهایی (CTA) ── */}
      <section id="contact" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-gold/30 bg-gradient-to-b from-surface to-surface/90 p-8 md:p-12 shadow-gold text-center relative overflow-hidden">
            <div
              className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, oklch(0.83 0.105 72 / 0.25), transparent 70%)",
              }}
            />

            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-gold text-gold-foreground shadow-gold mb-6">
              <Sparkles className="h-8 w-8" />
            </div>

            <h2 className="text-3xl font-black md:text-4xl text-foreground">
              آماده‌اید سرعت و راندمان تیم مهندسی‌تان را متحول کنید؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-loose text-muted-foreground">
              این برنامه برای تیم‌های ۴ تا ۵ نفره تدوین شده است. جهت هماهنگی تقویم زمان‌بندی دو جلسه ۲ ساعته
              و دریافت جزییات اولیه قبل از برگزاری، مستقیماً از طریق پیام‌رسان بله، تلگرام، واتساپ یا تماس تلفنی با حسن شاهمرادی در ارتباط باشید.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={BALE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-[#00B894]/40 bg-[#00B894]/15 px-7 py-4 text-sm font-black text-[#00B894] transition hover:bg-[#00B894]/25 hover:border-[#00B894]/70 hover:-translate-y-0.5 shadow-sm"
              >
                <BaleIcon className="h-5 w-5 text-[#00B894]" />
                <span>پیام در بله</span>
              </a>

              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-8 py-4 text-sm font-black text-gold-foreground shadow-gold transition hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                <span>پیام در تلگرام به حسن شاهمرادی</span>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-7 py-4 text-sm font-bold text-emerald-300 transition hover:bg-emerald-500/20"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>ارسال پیام در واتساپ</span>
              </a>

              <a
                href={TEL}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-foreground transition hover:border-white/30 hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4 text-gold" />
                <span>تماس مستقیم: {PHONE_FA}</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 pt-6 border-t border-white/10 text-xs text-muted-foreground">
              <span>لینک مستقیم این پروپوزال:</span>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 font-mono text-gold hover:underline"
              >
                <span>hasanshah.ir/clients/dev-team-bootcamp</span>
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── اصلی سایت فوتر ── */}
      <Footer />
    </main>
  );
}
