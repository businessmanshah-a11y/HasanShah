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
