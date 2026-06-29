"use client";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";

export default function ConsultationHighlight() {
  const ref = useReveal<HTMLDivElement>();
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const arrowHover = dir === "rtl" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1";

  return (
    <section id="consultation" className="relative py-20 md:py-28">
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
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-bold text-gold-foreground mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                {t.consultationHighlight.badge}
              </div>

              <h2
                className="text-3xl md:text-5xl font-black leading-tight mb-8"
                style={{ textWrap: "balance" }}
              >
                <Highlight text={t.consultationHighlight.title} />
              </h2>

              <a
                href="#form"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-8 py-4 font-bold text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5"
              >
                {t.consultationHighlight.cta}
                <Arrow className={`h-5 w-5 transition-transform ${arrowHover}`} />
              </a>
            </div>

            <div className="space-y-4">
              {t.consultationHighlight.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl bg-surface/60 border border-gold/10 p-5 hover:border-gold/30 transition"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
