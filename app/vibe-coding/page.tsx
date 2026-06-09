import type { Metadata } from "next";
import {
  ArrowLeft,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Compass,
  FileText,
  Layers3,
  MessageSquareText,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ParticlesBackground from "../components/ParticlesBackground";
import WorkshopSignupCard from "./WorkshopSignupCard";
import { VibeCodingCourseJsonLd, VibeCodingEventJsonLd, VibeCodingFaqJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "آموزش وایب‌کدینگ از صفر تا ساخت محصول با هوش مصنوعی",
  description:
    "یاد بگیر با Cursor، Claude و Codex ایده‌ات را به محصول دیجیتال واقعی تبدیل کنی. پیش‌تولید ایده، پرامپت‌نویسی و دورهمی حضوری رایگان وایب‌کدینگ در تهران.",
  keywords: [
    "آموزش وایب‌کدینگ",
    "وایب کدینگ",
    "vibe coding",
    "ساخت محصول با هوش مصنوعی",
    "Cursor آموزش",
    "Claude آموزش",
    "Codex آموزش",
    "دورهمی وایب‌کدینگ تهران",
    "پیش‌تولید محصول دیجیتال",
    "پرامپت نویسی",
    "آموزش AI برنامه‌نویسی",
  ],
  authors: [{ name: "حسن شاهمرادی", url: "https://hasanshah.ir" }],
  alternates: {
    canonical: "https://hasanshah.ir/vibe-coding",
    languages: {
      "fa": "https://hasanshah.ir/vibe-coding",
      "x-default": "https://hasanshah.ir/vibe-coding",
    },
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "آموزش وایب‌کدینگ از صفر تا ساخت محصول",
    description:
      "با Cursor، Claude و Codex ایده‌ات را به محصول دیجیتال تبدیل کن. دورهمی حضوری رایگان + سرفصل کامل.",
    url: "https://hasanshah.ir/vibe-coding",
    images: [
      {
        url: "/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "آموزش وایب‌کدینگ با حسن شاهمرادی — دورهمی حضوری رایگان تهران",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آموزش وایب‌کدینگ از صفر | حسن شاهمرادی",
    description:
      "با Cursor، Claude و Codex ایده‌ات را به محصول دیجیتال تبدیل کن. دورهمی حضوری رایگان.",
    images: ["/images/profile.webp"],
    creator: "@hasanshah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const tools = [
  {
    name: "Cursor",
    desc: "محیط کدنویسی AI-first برای وقتی که می‌خواهی داخل پروژه واقعی با فایل‌ها، خطاها و تغییرات کار کنی.",
    icon: Code2,
  },
  {
    name: "Claude",
    desc: "همراه خوب برای فکر کردن، تحلیل متن، نوشتن ساختار محصول، شکستن مسئله و گرفتن خروجی‌های تمیز.",
    icon: Brain,
  },
  {
    name: "Codex",
    desc: "برای اجرای دقیق روی کد، خواندن پروژه، تغییر فایل‌ها، تست گرفتن و جلو بردن کار مثل یک هم‌تیمی فنی.",
    icon: TerminalSquare,
  },
];

const roadmap = [
  "یک مسئله واقعی کوچک انتخاب کن، نه یک ایده خیلی بزرگ.",
  "قبل از کد، خروجی مطلوب را با متن، فلو و وایرفریم ساده توضیح بده.",
  "ابزارها را آماده کن: اکانت AI، ادیتور، GitHub و یک جای ساده برای دیپلوی.",
  "نسخه اول را خیلی کوچک بساز؛ فقط چیزی که کاربر بتواند امتحان کند.",
  "بعد از هر تغییر تست بگیر، اسکرین‌شات ببین و از AI بخواه خطاها را پیدا کند.",
  "وقتی جواب گرفتی، تازه برو سراغ زیبایی، سرعت، فرم‌ها و مسیر جذب لید.",
];

const lessons = [
  {
    title: "شروع درست",
    items: ["وایب‌کدینگ دقیقاً چیست؟", "چه چیزهایی را AI خوب انجام می‌دهد؟", "کجا نباید چشم‌بسته به AI اعتماد کرد؟"],
  },
  {
    title: "ابزار و اکانت‌ها",
    items: ["Cursor برای کار داخل پروژه", "Claude برای طراحی فکر و متن", "Codex برای اجرای تغییرات و تست", "GitHub و Vercel برای نگهداری و انتشار"],
  },
  {
    title: "پیش‌تولید ایده",
    items: ["تعریف کاربر و مشکل", "نوشتن سناریوی استفاده", "شکستن ایده به نسخه صفر، نسخه یک و نسخه بعدی"],
  },
  {
    title: "قلق‌های عملی",
    items: ["پرامپت کوتاه ولی دقیق", "دادن کانتکست واقعی به AI", "درخواست تست، نه فقط کد", "بازبینی خروجی قبل از ادامه دادن"],
  },
];

const habits = [
  "به AI نقش بده، ولی تصمیم نهایی را خودت بگیر.",
  "هر درخواست را با هدف، محدودیت و معیار موفقیت بنویس.",
  "از AI بخواه قبل از کد، فرض‌هایش را بگوید.",
  "تغییرات بزرگ را به چند تغییر کوچک بشکن.",
  "وقتی خروجی خراب شد، دعوا نکن؛ زمینه را دقیق‌تر کن.",
  "برای هر صفحه، اول تجربه کاربر را روشن کن بعد برو سراغ ظاهر.",
];

export default function VibeCodingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground" dir="rtl">
      <VibeCodingCourseJsonLd />
      <VibeCodingEventJsonLd />
      <VibeCodingFaqJsonLd />
      <Nav />

      <section id="hero" className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <ParticlesBackground />
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, oklch(0.27 0.080 248 / 0.55), transparent 72%)",
          }}
        />

        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              آموزش وایب‌کدینگ از صفر تا ساخت محصول
            </div>
            <h1 className="text-4xl font-black leading-[1.35] md:text-6xl">
              ایده‌ات را با AI از حرف به محصول واقعی تبدیل کن
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-muted-foreground md:text-lg lg:mx-0">
              این صفحه یک نقشه راه ساده و ساختاربندی‌شده برای وایب‌کدینگ است:
              از اینکه از کجا شروع کنی و چه اکانت‌هایی لازم داری، تا اینکه چطور
              با Cursor، Claude و Codex یک ایده را مرحله‌به‌مرحله جلو ببری.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#workshop"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 text-sm font-black text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5"
              >
                پیش‌ثبت‌نام رایگان دورهمی
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/35 bg-gold/5 px-7 py-3.5 text-sm font-bold transition hover:border-gold hover:bg-gold/10"
              >
                دیدن سرفصل‌ها
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gold/20 bg-surface/70 p-5 shadow-elegant backdrop-blur md:p-7">
            <div className="grid gap-3">
              {[
                ["۱", "ایده خام"],
                ["۲", "پیش‌تولید و نقشه محصول"],
                ["۳", "ساخت نسخه اول با AI"],
                ["۴", "تست، اصلاح و انتشار"],
              ].map(([step, title]) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-sm font-black text-gold-foreground">
                    {step}
                  </span>
                  <span className="font-bold">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <WorkshopSignupCard signupPlacement="top" />
      </div>

      <section id="roadmap" className="bg-surface/25 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold text-gold">از کجا شروع کنیم؟</p>
            <h2 className="text-3xl font-black leading-[1.4] md:text-5xl">
              مسیر یادگیری را کوچک، واقعی و قابل اجرا نگه دار
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roadmap.map((item, index) => (
              <div key={item} className="rounded-2xl border border-gold/15 bg-background/70 p-5">
                <div className="mb-4 text-2xl font-black text-gold">{String(index + 1).padStart(2, "0")}</div>
                <p className="leading-loose text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.name} className="rounded-3xl border border-gold/15 bg-surface p-6 shadow-elegant">
                  <Icon className="mb-5 h-9 w-9 text-gold" />
                  <h3 className="text-2xl font-black">{tool.name}</h3>
                  <p className="mt-3 leading-loose text-muted-foreground">{tool.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface/25 py-20 md:py-28">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold text-gold">پیش‌تولید یعنی چی؟</p>
            <h2 className="text-3xl font-black leading-[1.4] md:text-5xl">
              قبل از اینکه AI کد بزند، باید بفهمد چه چیزی قرار است ساخته شود
            </h2>
            <p className="mt-5 leading-loose text-muted-foreground">
              وایب‌کدینگ موفق از پرامپت جادویی شروع نمی‌شود؛ از شفاف کردن مسئله،
              کاربر، خروجی، محدودیت و نسخه اول شروع می‌شود. هر چقدر پیش‌تولید
              دقیق‌تر باشد، AI کمتر حدس می‌زند و خروجی کمتر شلخته می‌شود.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              [Compass, "جهت محصول", "کاربر کیست، چه مشکلی دارد و چرا الان این راه‌حل به دردش می‌خورد؟"],
              [FileText, "اسکوپ نسخه اول", "کدام بخش باید همین امروز ساخته شود و کدام بخش باید برای بعد بماند؟"],
              [Layers3, "فلو و محتوا", "کاربر از کجا وارد می‌شود، چه می‌بیند و قدم بعدی‌اش چیست؟"],
            ].map(([Icon, title, desc]) => {
              const TypedIcon = Icon as typeof Compass;
              return (
                <div key={title as string} className="flex gap-4 rounded-2xl border border-gold/15 bg-background/70 p-5">
                  <TypedIcon className="mt-1 h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-black">{title as string}</h3>
                    <p className="mt-1 leading-loose text-muted-foreground">{desc as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold text-gold">سرفصل‌های کلی</p>
              <h2 className="text-3xl font-black md:text-5xl">از ابزار تا قلق اجرا</h2>
            </div>
            <a href="#workshop" className="inline-flex items-center gap-2 text-sm font-bold text-gold">
              ثبت‌نام بالای صفحه
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {lessons.map((lesson) => (
              <div key={lesson.title} className="rounded-3xl border border-gold/15 bg-surface p-6">
                <h3 className="mb-4 text-2xl font-black">{lesson.title}</h3>
                <div className="grid gap-3">
                  {lesson.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/25 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <MessageSquareText className="mx-auto mb-5 h-10 w-10 text-gold" />
            <h2 className="text-3xl font-black leading-[1.4] md:text-5xl">
              چند قلق مهم که همان اول کارت را جلو می‌اندازد
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {habits.map((habit) => (
              <div key={habit} className="rounded-2xl border border-gold/15 bg-background/70 p-5 leading-loose text-muted-foreground">
                {habit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Bot className="mx-auto mb-4 h-10 w-10 text-gold" />
            <h2 className="text-3xl font-black md:text-5xl">برای دورهمی آماده‌ای؟</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-loose text-muted-foreground">
              اگر از بالا رد شدی و بعد از خواندن سرفصل‌ها کنجکاوتر شدی، همینجا هم می‌توانی
              پیش‌ثبت‌نام کنی. هر دو فرم به یک لیست می‌روند.
            </p>
          </div>
          <WorkshopSignupCard signupPlacement="bottom" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
