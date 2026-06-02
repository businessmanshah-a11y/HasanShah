"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

type Category = "all" | "shop" | "service" | "personal";

const projects = [
  {
    title: "Lux Counter",
    desc: "فروشگاه لوکس ساعت — دوزبانه با دو تم",
    image: "/images/portfolio/portfolio-luxcounter.jpg",
    category: "shop" as const,
    url: "https://luxcounter.ir",
  },
  {
    title: "Rubifo",
    desc: "فروشگاه آنلاین چندمنظوره — فارسی با دو تم",
    image: "/images/portfolio/portfolio-rubifo.jpg",
    category: "shop" as const,
    url: "https://rubifo.ir",
  },
  {
    title: "Startup MVP",
    desc: "لندینگ پیج استارتاپ هوش مصنوعی",
    image: "/images/portfolio/portfolio-startup.jpg",
    category: "service" as const,
  },
  {
    title: "Personal Brand",
    desc: "وب‌سایت پرسونال برندینگ یک متخصص",
    image: "/images/portfolio/portfolio-personal.jpg",
    category: "personal" as const,
  },
  {
    title: "Service Business",
    desc: "وب‌سایت معرفی خدمات حرفه‌ای",
    image: "/images/portfolio/portfolio-service.jpg",
    category: "service" as const,
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all",      label: "همه" },
  { key: "shop",     label: "فروشگاهی" },
  { key: "service",  label: "خدماتی" },
  { key: "personal", label: "پرسونال" },
];

export default function Portfolio() {
  const [filter, setFilter]   = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="portfolio" className="relative py-20 md:py-28 bg-surface/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
            کارهایی که <span className="text-gold">حرف می‌زنن</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            هر پروژه یک داستان — هر داستان یک نتیجه.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition ${
                filter === f.key
                  ? "bg-gradient-gold text-gold-foreground shadow-gold"
                  : "border border-gold/20 text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => {
            const realIdx = projects.indexOf(p);
            return (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-surface transition-all hover:border-gold/50 hover:-translate-y-1 hover:shadow-gold-lg"
              >
                <button
                  onClick={() => setLightbox(realIdx)}
                  className="block w-full aspect-[4/3] overflow-hidden bg-background"
                  aria-label={`دیدن ${p.title}`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-gold hover:underline"
                      >
                        مشاهده زنده
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 left-4 rounded-full bg-surface border border-gold/30 p-2 text-gold hover:bg-gold/10"
            onClick={() => setLightbox(null)}
            aria-label="بستن"
          >
            <X className="h-5 w-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={projects[lightbox].image}
            alt={projects[lightbox].title}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl border border-gold/30 shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
