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
  if (!series) return notFound();

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
