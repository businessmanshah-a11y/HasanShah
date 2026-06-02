"use client";
import { Check, Gift, ArrowLeft, ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";

export default function Offer() {
  const ref = useReveal<HTMLDivElement>();
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1";
  return (
    <section id="offer" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[2rem] border border-gold/30 p-8 md:p-14 shadow-gold-lg"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.050 252), oklch(0.15 0.035 260))",
          }}
        >
          <div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40"
            style={{ background: "oklch(0.83 0.105 72 / 0.25)" }}
          />
          <div
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30"
            style={{ background: "oklch(0.27 0.080 248 / 0.45)" }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-bold text-gold-foreground mb-5">
                <Gift className="h-3.5 w-3.5" />
                {t.offer.badge}
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-5" style={{textWrap: "balance"}}>
                <Highlight text={t.offer.title} />
              </h2>

              <p className="text-muted-foreground text-lg leading-loose mb-6">
                {t.offer.desc}
              </p>

              <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mb-6">
                <h4 className="font-bold text-gold mb-2">{t.offer.afterTitle}</h4>
                <p className="text-sm text-muted-foreground leading-loose">
                  {t.offer.afterDesc}
                </p>
              </div>

              <a
                href="#form"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-8 py-4 font-bold text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5"
              >
                {t.offer.cta}
                <Arrow className={`h-5 w-5 transition-transform ${arrowHover}`} />
              </a>
            </div>

            {/* Features list */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-4 text-gold">{t.offer.featuresTitle}</h3>
              {t.offer.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-xl bg-surface/60 border border-gold/10 p-4 hover:border-gold/30 transition"
                >
                  <div className="flex-shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-gold mt-0.5">
                    <Check className="h-3.5 w-3.5 text-gold-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
