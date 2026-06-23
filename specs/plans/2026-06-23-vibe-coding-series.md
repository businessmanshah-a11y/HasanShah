# Vibe Coding Series Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ایجاد سیستم «سری آموزشی» در سایت — صفحه لیست `/vibe-coding/series/` و صفحه داستان `/vibe-coding/series/[slug]/` با تایم‌لاین داستانی، مدیای inline، و باکس «درس این لحظه» برای هر مرحله.

**Architecture:** Data-driven — همه سری‌ها در `series-data.ts` به عنوان TypeScript objects تعریف می‌شن. یک template واحد (`[slug]/page.tsx`) همه سری‌ها رو رندر می‌کنه. چون سایت `output: "export"` داره، `generateStaticParams` در صفحه dynamic الزامیه. صفحات سری فارسی‌محور هستن و از i18n سراسری استفاده نمی‌کنن.

**Tech Stack:** Next.js 15 App Router، TypeScript، Tailwind CSS، Lucide React. توکن‌های موجود سایت: `bg-background`, `bg-surface`, `text-gold`, `bg-gradient-gold`, `shadow-gold`, `border-gold/20`, `text-muted-foreground`.

---

## File Map

| فایل | عملیات | مسئولیت |
|------|---------|----------|
| `app/vibe-coding/series/series-data.ts` | ایجاد | تایپ‌ها + داده همه سری‌ها |
| `app/vibe-coding/series/page.tsx` | ایجاد | صفحه لیست سری‌ها |
| `app/vibe-coding/series/[slug]/page.tsx` | ایجاد | صفحه داستان (dynamic route) |
| `app/components/SeriesCard.tsx` | ایجاد | کارت هر سری در لیست |
| `app/components/SeriesTimeline.tsx` | ایجاد | تایم‌لاین داستانی با مدیا + درس |
| `app/vibe-coding/VibeCodingPageContent.tsx` | تغییر | اضافه کردن لینک به بخش سری‌ها |
| `public/series/faktor-dadash/` | ایجاد | پوشه مدیا (کاور، صوت، ویدیو، عکس‌ها) |

---

## Task 1: Types + Data File

**Files:**
- Create: `app/vibe-coding/series/series-data.ts`

- [ ] **Step 1: فایل `series-data.ts` را با تایپ‌ها و داده placeholder ایجاد کن**

```typescript
// app/vibe-coding/series/series-data.ts

export type SeriesMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "prompt"; content: string }

export type TimelineStep = {
  time: string
  title: string
  story: string
  media?: SeriesMedia[]
  lesson: string
  isEnd?: boolean
}

export type Series = {
  slug: string
  number: string
  tag: string
  title: string
  summary: string
  date: string
  duration: string
  tools: string[]
  coverImage: string
  audioSrc?: string
  steps: TimelineStep[]
  takeaways: string[]
}

export const allSeries: Series[] = [
  {
    slug: "faktor-dadash",
    number: "۰۱",
    tag: "فاکتورساز",
    title: "از پیام داداشم تا سیستم فاکتور کامل",
    summary: "یه شب با Claude Code یه سیستم فاکتور کامل ساختیم که از گوشی کار می‌کنه — از ساعت ۸ شب تا ۳ صبح.",
    date: "۲۳ خرداد ۱۴۰۵",
    duration: "۷ ساعت",
    tools: ["Claude Code", "Google Sheets", "Apps Script"],
    coverImage: "/series/faktor-dadash/cover.webp",
    audioSrc: "/series/faktor-dadash/audio.mp3",
    steps: [
      {
        time: "۲۰:۰۰",
        title: "پیام اول از داداشم",
        story:
          "ساعت ۸ شب داداشم پیام داد: «یه فاکتور می‌خوام». قبلاً پیشش حسابدار بودم و اینجور خواسته‌ها طبیعیه. ولی به جای فرستادن یه فایل Word، تصمیم گرفتم یه سیستم بسازم که هرچقدر دلش خواست ازش استفاده کنه — بدون اینکه دیگه نیازی به من داشته باشه.",
        media: [
          {
            type: "image",
            src: "/series/faktor-dadash/images/whatsapp.jpg",
            alt: "اسکرین‌شات پیام واتساپ داداشم",
          },
        ],
        lesson:
          "وقتی یه نفر یه چیز کوچیک می‌خواد، فرصته یه چیز بزرگ بسازی. بپرس «آیا این مشکل دوباره تکرار می‌شه؟» اگه آره، سیستم بساز — نه راه‌حل یه‌باره.",
      },
      {
        time: "۲۱:۰۰",
        title: "پرامپت اولیه به Claude",
        story:
          "نشستم و مشخصات سیستم رو نوشتم. مهم‌ترین چیز: باید از گوشی موبایل راحت کار کنه. Claude Code شروع کرد و توی اولین iteration یه ساختار پایه برگرداند.",
        media: [
          {
            type: "prompt",
            content:
              "یه سیستم فاکتورساز برای داداشم بساز که:\n- از موبایل راحت بشه باهاش کار کرد\n- فاکتورها ذخیره بشن و قابل ویرایش باشن\n- خروجی PDF برای چاپ و خروجی عکس برای ارسال داشته باشه\n- بدون نیاز به نصب اپ — مستقیم از مرورگر",
          },
        ],
        lesson:
          "پرامپت خوب با «کاربر نهایی کیه؟» شروع می‌شه، نه با «چی بسازیم؟». وقتی می‌دونی کاربرت داداشته که از گوشی کار می‌کنه، ابزار درست رو انتخاب می‌کنی.",
      },
      {
        time: "۰۰:۰۰",
        title: "چالش‌های ظاهری — پیش وحید خاتمی",
        story:
          "دوازده شب کار تموم نشده بود. رفتم پیش وحید خاتمی شام بخوریم. چند تا چیز ظاهری توی خروجی درست نبود — لی‌اوت موبایل، رنگ‌ها، فاصله‌ها. تا ۱ شب اونجا بودیم و Claude داشت تغییرات رو اعمال می‌کرد.",
        media: [
          {
            type: "image",
            src: "/series/faktor-dadash/images/vahid.jpg",
            alt: "عکس با وحید خاتمی",
          },
        ],
        lesson:
          "وقتی Claude جواب دقیق نمی‌ده، مشکل رو دقیق‌تر توصیف کن. «این باکس باید ۱۶px فاصله از لبه داشته باشه» بهتر از «ظاهرش خوب نیست».",
      },
      {
        time: "۰۳:۰۰",
        title: "سیستم آنلاین شد",
        story:
          "اومدم خونه و تا ۳ صبح کار ادامه داشت. در نهایت سیستم روی سرور بالا اومد. داداشم از گوشیش فاکتور می‌زنه، خروجی PDF می‌گیره، خروجی عکس می‌گیره. خیالش راحته.",
        media: [
          {
            type: "video",
            src: "/series/faktor-dadash/demo.mp4",
            poster: "/series/faktor-dadash/demo-poster.jpg",
          },
          {
            type: "image",
            src: "/series/faktor-dadash/images/invoice-result.jpg",
            alt: "اسکرین‌شات فاکتور نهایی",
          },
        ],
        lesson:
          "خروجی خوب یعنی کاربر بتونه بدون توضیح ازش استفاده کنه. تست واقعی: بده به کسی که ازش هیچی نمی‌دونه، ببین گیر می‌کنه یا نه.",
        isEnd: true,
      },
    ],
    takeaways: [
      "به جای یه کار یه‌باره، یه سیستم بساز که تکرارپذیر باشه",
      "پرامپت خوب = نیمی از کار Claude",
      "Claude Code + Google Sheets = قدرتمندترین ترکیب رایگان برای ابزارهای داخلی",
      "وقتی ظاهر کار نمی‌کنه، مشکل رو با جزئیات pixel-level توصیف کن",
    ],
  },
]

export function getSeriesBySlug(slug: string): Series | undefined {
  return allSeries.find((s) => s.slug === slug)
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/infinite/HasanShah && npx tsc --noEmit 2>&1 | head -20
```

Expected: بدون خطا (یا فقط خطاهای غیرمرتبط به این فایل)

- [ ] **Step 3: Commit**

```bash
git add app/vibe-coding/series/series-data.ts
git commit -m "feat: add series data types and faktor-dadash content"
```

---

## Task 2: SeriesCard Component

**Files:**
- Create: `app/components/SeriesCard.tsx`

- [ ] **Step 1: کامپوننت `SeriesCard` را ایجاد کن**

```tsx
// app/components/SeriesCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Series } from "../vibe-coding/series/series-data";

export default function SeriesCard({ series }: { series: Series }) {
  return (
    <Link
      href={`/vibe-coding/series/${series.slug}/`}
      className="group block overflow-hidden rounded-3xl border border-gold/15 bg-surface transition hover:border-gold/30 hover:shadow-gold"
    >
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-[oklch(0.18_0.04_72)] to-surface">
        <Image
          src={series.coverImage}
          alt={series.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute right-3 top-3 rounded-lg bg-gradient-gold px-2.5 py-1 text-xs font-black text-gold-foreground shadow-gold">
          سری {series.number}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-xs font-bold text-gold">
            {series.tag}
          </span>
          <span className="text-xs text-muted-foreground">{series.duration}</span>
        </div>

        <h3 className="mb-2 text-lg font-black leading-snug">{series.title}</h3>
        <p className="mb-4 text-sm leading-loose text-muted-foreground line-clamp-2">
          {series.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {series.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/infinite/HasanShah && npx tsc --noEmit 2>&1 | head -20
```

Expected: بدون خطای جدید

- [ ] **Step 3: Commit**

```bash
git add app/components/SeriesCard.tsx
git commit -m "feat: add SeriesCard component"
```

---

## Task 3: Series Listing Page

**Files:**
- Create: `app/vibe-coding/series/page.tsx`

- [ ] **Step 1: صفحه لیست را ایجاد کن**

```tsx
// app/vibe-coding/series/page.tsx
import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/ParticlesBackground";
import SeriesCard from "../../components/SeriesCard";
import { allSeries } from "./series-data";

export const metadata: Metadata = {
  title: "سری‌های آموزشی کامل — از ایده تا خروجی واقعی",
  description:
    "هر سری یه پروژه‌ی واقعیه — داستان کامل + تایم‌لاین + ابزارها + خروجی نهایی. بیا ببین Vibe Coding واقعی چه شکلیه.",
  alternates: { canonical: "https://hasanshah.ir/vibe-coding/series/" },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "سری‌های آموزشی وایب‌کدینگ",
    description: "پروژه‌های واقعی از ایده تا خروجی — داستان + تایم‌لاین + درس هر لحظه",
    url: "https://hasanshah.ir/vibe-coding/series/",
    images: [{ url: "/series/faktor-dadash/cover.webp", width: 1200, height: 630 }],
  },
};

export default function SeriesListPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground" dir="rtl">
      <Nav />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <ParticlesBackground />
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.27 0.080 248 / 0.35), transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            <BookOpen className="h-3.5 w-3.5" />
            سری‌های آموزشی
          </div>
          <h1 className="text-4xl font-black leading-[1.35] md:text-6xl">
            از ایده تا خروجی واقعی
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-loose text-muted-foreground md:text-lg">
            هر سری یه پروژه‌ی واقعیه. داستان کامل، تایم‌لاین دقیق، ابزارها، چالش‌ها، و درس هر لحظه — همه‌چیز رو می‌بینی.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allSeries.map((series) => (
              <SeriesCard key={series.slug} series={series} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/infinite/HasanShah && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add app/vibe-coding/series/page.tsx
git commit -m "feat: add series listing page"
```

---

## Task 4: SeriesTimeline Component

**Files:**
- Create: `app/components/SeriesTimeline.tsx`

- [ ] **Step 1: کامپوننت `SeriesTimeline` را ایجاد کن**

```tsx
// app/components/SeriesTimeline.tsx
import Image from "next/image";
import type { TimelineStep } from "../vibe-coding/series/series-data";

function MediaBlock({ media }: { media: NonNullable<TimelineStep["media"]>[number] }) {
  if (media.type === "prompt") {
    return (
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
        <div className="border-b border-white/10 px-4 py-2 text-xs font-bold text-gold">
          پرامپت اولیه به Claude
        </div>
        <pre className="whitespace-pre-wrap p-4 text-xs leading-loose text-[#7ee787] font-mono">
          {media.content}
        </pre>
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        className="w-full rounded-xl border border-white/10"
      />
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10">
      <Image
        src={media.src}
        alt={media.alt}
        width={800}
        height={450}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}

export default function SeriesTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <div key={step.time} className="flex gap-5">
            {/* خط زمانی عمودی */}
            <div className="flex flex-col items-center">
              <div
                className={`rounded-lg px-2.5 py-1 text-xs font-black whitespace-nowrap ${
                  step.isEnd
                    ? "border border-green-800 bg-green-950 text-green-400"
                    : index === 0
                    ? "bg-gradient-gold text-gold-foreground shadow-gold"
                    : "border border-white/10 bg-surface text-muted-foreground"
                }`}
              >
                {step.time}
                {step.isEnd && " ✅"}
              </div>
              {!isLast && (
                <div
                  className="mt-2 w-px flex-1"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(to bottom, oklch(0.83 0.105 72), oklch(0.2 0 0))"
                        : "oklch(0.25 0 0)",
                    minHeight: "2rem",
                  }}
                />
              )}
            </div>

            {/* محتوای مرحله */}
            <div className={`flex-1 pb-10 ${isLast ? "pb-0" : ""}`}>
              <h3 className="mb-3 text-xl font-black leading-snug">{step.title}</h3>
              <p className="mb-5 leading-loose text-muted-foreground">{step.story}</p>

              {step.media && step.media.length > 0 && (
                <div className="mb-5 flex flex-col gap-3">
                  {step.media.map((m, i) => (
                    <MediaBlock key={i} media={m} />
                  ))}
                </div>
              )}

              {/* باکس درس این لحظه */}
              <div className="rounded-xl border border-[oklch(0.50_0.10_72_/_0.25)] bg-[oklch(0.14_0.04_72_/_0.60)] p-4">
                <p className="mb-1.5 text-xs font-black text-gold">🧠 درس این لحظه</p>
                <p className="text-sm leading-loose text-[oklch(0.85_0.08_72)]">
                  {step.lesson}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/infinite/HasanShah && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add app/components/SeriesTimeline.tsx
git commit -m "feat: add SeriesTimeline component with inline media and lesson boxes"
```

---

## Task 5: Series Detail Page (Dynamic Route)

**Files:**
- Create: `app/vibe-coding/series/[slug]/page.tsx`

- [ ] **Step 1: صفحه داستان را با `generateStaticParams` ایجاد کن**

```tsx
// app/vibe-coding/series/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import SeriesTimeline from "../../../components/SeriesTimeline";
import { allSeries, getSeriesBySlug } from "../series-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allSeries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);
  if (!series) return {};
  return {
    title: series.title,
    description: series.summary,
    alternates: { canonical: `https://hasanshah.ir/vibe-coding/series/${series.slug}/` },
    openGraph: {
      locale: "fa_IR",
      type: "article",
      siteName: "حسن شاهمرادی",
      title: series.title,
      description: series.summary,
      url: `https://hasanshah.ir/vibe-coding/series/${series.slug}/`,
      images: [{ url: series.coverImage, width: 1200, height: 630, alt: series.title }],
    },
  };
}

export default async function SeriesDetailPage({ params }: Props) {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);
  if (!series) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground" dir="rtl">
      <Nav />

      {/* ── Hero ── */}
      <section className="pt-28 pb-10 md:pt-36">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/vibe-coding/" className="hover:text-gold transition-colors">
              آموزش وایب‌کدینگ
            </Link>
            <ArrowRight className="h-3 w-3 rotate-180" />
            <Link href="/vibe-coding/series/" className="hover:text-gold transition-colors">
              سری‌های آموزشی
            </Link>
            <ArrowRight className="h-3 w-3 rotate-180" />
            <span className="text-gold">سری {series.number}</span>
          </nav>

          {/* Meta chips */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-lg border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
              {series.tag}
            </span>
            <span className="text-xs text-muted-foreground">{series.date}</span>
            <span className="text-xs text-muted-foreground">⏱ {series.duration}</span>
          </div>

          <h1 className="mb-4 text-3xl font-black leading-[1.35] md:text-5xl">
            {series.title}
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-loose text-muted-foreground">
            {series.summary}
          </p>

          {/* Tools */}
          <div className="mb-8 flex flex-wrap gap-2">
            {series.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Cover image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-gold/10">
            <Image
              src={series.coverImage}
              alt={series.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </section>

      {/* ── Audio Player ── */}
      {series.audioSrc && (
        <section className="pb-4">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl border border-gold/15 bg-surface p-5">
              <p className="mb-3 text-sm font-black text-gold">
                🎧 روایت صوتی — اگه وقت نداری بخونی، گوش بده
              </p>
              <audio
                src={series.audioSrc}
                controls
                className="w-full"
                style={{ colorScheme: "dark" }}
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Timeline ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <p className="mb-2 text-sm font-bold text-gold">📖 داستان — قدم‌به‌قدم</p>
            <h2 className="text-2xl font-black md:text-4xl">مسیر کامل این شب</h2>
          </div>
          <div className="max-w-3xl">
            <SeriesTimeline steps={series.steps} />
          </div>
        </div>
      </section>

      {/* ── Takeaways ── */}
      <section className="bg-surface/25 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-bold text-gold">💡 جمع‌بندی</p>
            <h2 className="mb-8 text-2xl font-black md:text-4xl">درس‌های این سری</h2>
            <div className="flex flex-col gap-3">
              {series.takeaways.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-gold/15 bg-background/70 p-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-xs font-black text-gold-foreground shadow-gold">
                    {i + 1}
                  </span>
                  <p className="leading-loose text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Back link ── */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <Link
            href="/vibe-coding/series/"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline"
          >
            <ArrowRight className="h-4 w-4" />
            مشاهده همه سری‌ها
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/infinite/HasanShah && npx tsc --noEmit 2>&1 | head -30
```

Expected: بدون خطای مرتبط با فایل‌های جدید

- [ ] **Step 3: Commit**

```bash
git add app/vibe-coding/series/[slug]/page.tsx
git commit -m "feat: add series detail page with dynamic route"
```

---

## Task 6: Prepare Media Assets

**Files:**
- Create: `public/series/faktor-dadash/` (پوشه با فایل‌های مدیا)

- [ ] **Step 1: پوشه مدیا را بساز و عکس‌های موجود را کپی کن**

```bash
mkdir -p /Users/infinite/HasanShah/public/series/faktor-dadash/images

# عکس با وحید خاتمی (ساعت ۱ شب)
cp "/Users/infinite/HasanShah/docs/داستان-فاکتور-داداشم/IMG_20260623_010246.jpg" \
   /Users/infinite/HasanShah/public/series/faktor-dadash/images/vahid.jpg

# اسکرین‌شات پیام واتساپ داداشم
cp "/Users/infinite/HasanShah/docs/داستان-فاکتور-داداشم/Screenshot_2026-06-23-12-46-45-607_com.whatsapp.w4b-edit.jpg" \
   /Users/infinite/HasanShah/public/series/faktor-dadash/images/whatsapp.jpg

# اسکرین‌شات‌های فاکتور نهایی (chrome)
cp "/Users/infinite/HasanShah/docs/داستان-فاکتور-داداشم/Screenshot_2026-06-23-12-47-53-076_com.android.chrome.jpg" \
   /Users/infinite/HasanShah/public/series/faktor-dadash/images/invoice-result.jpg
```

- [ ] **Step 2: فایل‌هایی که حسن باید اضافه کنه**

فایل‌های زیر رو دریافت کن و در مسیرهای مشخص‌شده بذار:

| فایل | مسیر نهایی | توضیح |
|------|-----------|-------|
| عکس کاور AI-generated | `public/series/faktor-dadash/cover.webp` | تصویر ChatGPT — پرامپت در Task 8 |
| فایل صوتی روایت | `public/series/faktor-dadash/audio.mp3` | ضبط MP3 یا M4A (نام رو mp3 بذار) |
| ویدیوی demo | `public/series/faktor-dadash/demo.mp4` | screen recording فاکتورساز |
| poster ویدیو | `public/series/faktor-dadash/demo-poster.jpg` | یه فریم از ویدیو (اختیاری) |

- [ ] **Step 3: Commit عکس‌های کپی‌شده**

```bash
git add public/series/
git commit -m "feat: add faktor-dadash media assets"
```

---

## Task 7: Add Series Promo to Vibe Coding Page

**Files:**
- Modify: `app/vibe-coding/VibeCodingPageContent.tsx`

یه بنر کوچیک به بخش lessons اضافه می‌کنیم که از سری‌های کامل معرفی کنه.

- [ ] **Step 1: فایل را بخوان و محل درست رو پیدا کن**

در `VibeCodingPageContent.tsx` بخش lessons (خط ۱۶۴-۱۹۲) رو پیدا کن. بعد از بستن `</section>` اون بخش، قطعه زیر را اضافه کن:

```tsx
{/* ── Series promo ── */}
<section className="py-14 md:py-20">
  <div className="container mx-auto px-4">
    <div className="grid items-center gap-6 rounded-3xl border border-gold/20 bg-surface/60 p-6 shadow-elegant md:grid-cols-[auto_1fr_auto] md:p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
        <BookOpen className="h-7 w-7 text-gold-foreground" />
      </div>
      <div>
        <div className="mb-1.5 text-xs font-bold text-gold">سری‌های آموزشی کامل</div>
        <h2 className="text-xl font-black leading-snug md:text-2xl">
          داستان کامل + تایم‌لاین + درس هر لحظه
        </h2>
        <p className="mt-1.5 max-w-xl text-sm leading-loose text-muted-foreground">
          یه پروژه‌ی واقعی رو از ساعت شروع تا انتشار می‌بینی — چالش‌ها، پرامپت‌ها، و چیزی که یاد گرفتیم.
        </p>
      </div>
      <Link
        href="/vibe-coding/series/"
        className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-black text-gold-foreground shadow-gold transition hover:-translate-y-0.5 whitespace-nowrap"
      >
        مشاهده سری‌ها
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  </div>
</section>
```

همچنین `BookOpen` را به import های lucide اضافه کن:

```tsx
// در خط اول import از lucide-react، BookOpen را اضافه کن:
import {
  ArrowLeft,
  BookOpen,      // ← اضافه شد
  Bot,
  Brain,
  // ... بقیه همونطور که بودن
} from "lucide-react";
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/infinite/HasanShah && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add app/vibe-coding/VibeCodingPageContent.tsx
git commit -m "feat: add series promo section to vibe-coding page"
```

---

## Task 8: Build Verification + Cover Image Prompt

- [ ] **Step 1: Build کامل بگیر**

```bash
cd /Users/infinite/HasanShah && npm run build 2>&1 | tail -30
```

Expected:
```
✓ Compiled successfully
Route (app)                           Size
├ ○ /vibe-coding/series               ...
└ ● /vibe-coding/series/[slug]        ...
    └ /vibe-coding/series/faktor-dadash
```

- [ ] **Step 2: اگه build موفق بود، locally تست کن**

```bash
cd /Users/infinite/HasanShah && npx serve out -p 3001
```

صفحات زیر رو چک کن:
- `http://localhost:3001/vibe-coding/series/` — لیست باید یه کارت داشته باشه
- `http://localhost:3001/vibe-coding/series/faktor-dadash/` — صفحه داستان با تایم‌لاین
- `http://localhost:3001/vibe-coding/` — بنر سری‌ها باید وسط صفحه باشه

- [ ] **Step 3: پرامپت عکس کاور برای ChatGPT**

این پرامپت رو به ChatGPT Image Generation بده تا عکس کاور بسازه:

```
A cinematic dark-themed illustration for a Persian developer blog.
Scene: A young Iranian man coding late at night, glowing laptop screen,
soft gold and amber light, an invoice document appearing on screen.
Cozy night atmosphere, 01:00 AM, warm indoor lighting.
Style: editorial photography meets digital art, dark background with gold accents.
Aspect ratio: 16:9, 1200x630px. No text in image.
```

فایل خروجی رو به `public/series/faktor-dadash/cover.webp` ذخیره کن.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete vibe-coding series feature — listing + story pages"
```

---

## Checklist پیش از Deploy

- [ ] `cover.webp` در `public/series/faktor-dadash/` وجود داره
- [ ] `audio.mp3` در همون پوشه وجود داره (یا `audioSrc` رو از data حذف کن تا player نشون داده نشه)
- [ ] `demo.mp4` وجود داره (یا اون step را از `media` حذف کن تا خطای 404 نده)
- [ ] `images/vahid.jpg`، `images/whatsapp.jpg`، `images/invoice-result.jpg` همه وجود دارن
- [ ] `npm run build` بدون خطا رد می‌شه
