"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import { useCounter, useReveal } from "../hooks/use-reveal";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";
import { type Locale, formatNum } from "../i18n/config";

function StatBlock({
  value,
  suffix,
  label,
  locale,
}: {
  value: number;
  suffix: string;
  label: string;
  locale: Locale;
}) {
  const ref = useCounter(value, locale);
  return (
    <div className="rounded-xl border border-gold/15 bg-surface p-4 text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span ref={ref} className="text-3xl font-black text-gold">
          {formatNum(0, locale)}
        </span>
        <span className="text-sm text-gold font-semibold">{suffix}</span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  const { t, locale } = useI18n();
  return (
    <section id="about" className="relative py-20 md:py-28 bg-surface/40">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-3xl opacity-60 blur-3xl bg-gradient-gold-soft" />
            <div className="relative overflow-hidden rounded-3xl border border-gold/25 shadow-elegant aspect-[3/4] max-w-md mx-auto">
              <Image
                src="/images/Shah2.webp"
                alt={t.brand.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="object-cover"
                style={{ objectPosition: "center 30%", transform: "scale(1.08)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, oklch(0.13 0.022 272 / 0.88))",
                }}
              />
              <div className="absolute bottom-0 right-0 left-0 p-5">
                <div className="text-xs text-gold uppercase tracking-widest mb-1">
                  {t.about.nameEyebrow}
                </div>
                <div className="text-xl font-bold">{t.about.roleTitle}</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6" style={{textWrap: "balance"}}>
              <Highlight text={t.about.title} />
            </h2>
            <p className="text-muted-foreground leading-loose mb-4 text-base md:text-lg">
              {t.about.p1}
            </p>
            <p className="text-muted-foreground leading-loose mb-8">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {t.about.numbers.map((n) => (
                <StatBlock key={n.label} {...n} locale={locale} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {t.about.expertise.map((e) => (
                <div
                  key={e.name}
                  className="flex items-start gap-2.5 rounded-xl border border-gold/12 bg-surface p-4"
                >
                  <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                  <div>
                    <div className="text-sm font-semibold leading-snug">{e.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{e.note}</div>
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
