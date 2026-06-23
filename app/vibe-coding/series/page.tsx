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
