"use client";
import { type CSSProperties, useState } from "react";
import Image from "next/image";
import { ExternalLink, EyeOff } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { filters, getVisibleProjects, type Category } from "./portfolio-data";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";

export default function Portfolio() {
  const [filter, setFilter] = useState<Category>("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  const filterLabel = (key: Category) => t.portfolio.filters[key as keyof typeof t.portfolio.filters];

  const visible = getVisibleProjects(filter);
  const tracks = visible.map((_, index) => (index === activeIndex ? "5fr" : "1fr")).join(" ");
  const accordionStyle = {
    "--portfolio-rows": tracks,
    "--portfolio-columns": tracks,
  } as CSSProperties;

  const selectFilter = (category: Category) => {
    setFilter(category);
    setActiveIndex(0);
  };

  return (
    <section id="portfolio" className="relative py-20 md:py-28 bg-surface/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
            <Highlight text={t.portfolio.title} />
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.portfolio.desc}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => selectFilter(f.key)}
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition ${
                filter === f.key
                  ? "bg-gradient-gold text-gold-foreground shadow-gold"
                  : "border border-gold/20 text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {filterLabel(f.key)}
            </button>
          ))}
        </div>

        <ul
          className="mx-auto grid h-[700px] w-full max-w-7xl gap-3 transition-[grid-template-columns,grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [grid-template-rows:var(--portfolio-rows)] md:h-[500px] md:[grid-template-columns:var(--portfolio-columns)] md:[grid-template-rows:1fr]"
          style={accordionStyle}
        >
          {visible.map((p, index) => {
            const isActive = activeIndex === index;

            return (
              <li
                key={p.title}
                role="button"
                tabIndex={0}
                aria-label={`${t.portfolio.openPrefix} ${p.title}`}
                aria-expanded={isActive}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                data-active={isActive}
                className={`group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-3xl border bg-surface outline-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-gold/60 ${
                  isActive
                    ? "border-gold/50 shadow-gold-lg"
                    : "border-gold/15 hover:border-gold/35"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 44vw, 100vw"
                  loading="lazy"
                  className={`object-cover object-top transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "scale-105 opacity-100 grayscale-0" : "scale-100 opacity-85 grayscale"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-black/80 via-black/30 to-black/5"
                      : "bg-gradient-to-t from-black/65 via-black/20 to-transparent"
                  }`}
                />

                <div
                  className={`absolute inset-0 flex items-end justify-center p-4 transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm font-bold md:rotate-180 md:[writing-mode:vertical-rl]">
                      {p.title}
                    </span>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 z-10 flex flex-col justify-end p-5 transition-all duration-500 md:p-6 ${
                    isActive
                      ? "pointer-events-auto translate-y-0 opacity-100 delay-200"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <div className="flex flex-col items-start gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                      {filterLabel(p.category) ?? t.portfolio.fallbackCategory}
                    </span>
                    <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                          {p.title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-loose text-white/70 md:text-base">
                          {t.portfolio.projects[p.title] ?? p.desc}
                        </p>
                      </div>
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-extrabold text-gold transition hover:bg-gold hover:text-gold-foreground active:translate-y-px"
                        >
                          {t.portfolio.view}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex shrink-0 cursor-not-allowed items-center gap-2 rounded-full border border-gold/15 bg-white/5 px-4 py-2 text-sm font-extrabold text-white/45"
                        >
                          {t.portfolio.view}
                          <EyeOff className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
