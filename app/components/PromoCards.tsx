"use client";

import { ArrowLeft, ArrowRight, CalendarDays, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";

export default function PromoCards() {
  const { t, dir } = useI18n();
  const vcp = t.vibeCodingPromo;
  const wp = t.workshopsPromo;
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1";

  return (
    <section className="bg-surface/25 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-2">

          {/* Vibe Coding */}
          <div className="flex flex-col gap-5 rounded-3xl border border-gold/20 bg-background/70 p-6 shadow-elegant md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
                <Code2 className="h-5 w-5 text-gold-foreground" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                {vcp.badge}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-black leading-snug md:text-2xl">{vcp.title}</h2>
              <p className="mt-2 text-sm leading-loose text-muted-foreground">{vcp.desc}</p>
            </div>
            <a
              href="/vibe-coding#workshop"
              className="group inline-flex items-center gap-2 self-start rounded-xl bg-gradient-gold px-5 py-2.5 text-sm font-black text-gold-foreground shadow-gold transition hover:-translate-y-0.5"
            >
              {vcp.cta}
              <Arrow className={`h-4 w-4 transition-transform ${arrowHover}`} />
            </a>
          </div>

          {/* Workshops */}
          <div className="flex flex-col gap-5 rounded-3xl border border-gold/20 bg-background/70 p-6 shadow-elegant md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
                <CalendarDays className="h-5 w-5 text-gold-foreground" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                {wp.badge}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-black leading-snug md:text-2xl">
                <Highlight text={wp.title} />
              </h2>
              <p className="mt-2 text-sm leading-loose text-muted-foreground">{wp.desc}</p>
            </div>
            <Link
              href="/workshop/"
              className="group inline-flex items-center gap-2 self-start rounded-xl bg-gradient-gold px-5 py-2.5 text-sm font-black text-gold-foreground shadow-gold transition hover:-translate-y-0.5"
            >
              {wp.cta}
              <Arrow className={`h-4 w-4 transition-transform ${arrowHover}`} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
