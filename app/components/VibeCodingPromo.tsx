"use client";

import { ArrowLeft, ArrowRight, Code2, Sparkles } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider";

export default function VibeCodingPromo() {
  const { t, dir } = useI18n();
  const vcp = t.vibeCodingPromo;
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1";

  return (
    <section className="relative bg-surface/25 py-10 md:py-14" aria-label={vcp.ariaLabel}>
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-6 rounded-3xl border border-gold/20 bg-background/70 p-5 shadow-elegant md:grid-cols-[auto_1fr_auto] md:p-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
            <Code2 className="h-7 w-7 text-gold-foreground" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              {vcp.badge}
            </div>
            <h2 className="text-2xl font-black leading-[1.45] md:text-3xl">
              {vcp.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-loose text-muted-foreground">
              {vcp.desc}
            </p>
          </div>
          <a
            href="/vibe-coding#workshop"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-black text-gold-foreground shadow-gold transition hover:-translate-y-0.5"
          >
            {vcp.cta}
            <Arrow className={`h-4 w-4 transition-transform ${arrowHover}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
