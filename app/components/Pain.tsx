"use client";
import { TrendingDown, Users, ShoppingBag, AlertTriangle } from "lucide-react";
import { useCounter, useReveal } from "../hooks/use-reveal";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";
import { type Locale, formatNum } from "../i18n/config";

const icons = [ShoppingBag, Users, TrendingDown, AlertTriangle];

function Stat({
  suffix,
  label,
  Icon,
  locale,
}: {
  suffix: string;
  label: string;
  Icon: typeof TrendingDown;
  locale: Locale;
}) {
  const ref = useCounter(1, locale);
  return (
    <div className="rounded-2xl border border-gold/15 bg-surface p-6 text-center transition-all hover:border-gold/30">
      <Icon className="mx-auto mb-3 h-6 w-6 text-gold opacity-70" />
      <div className="flex items-baseline justify-center gap-1">
        <span ref={ref} className="text-4xl md:text-5xl font-black text-gold">
          {formatNum(0, locale)}
        </span>
        <span className="text-xl font-bold text-gold">{suffix}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{label}</p>
    </div>
  );
}

export default function Pain() {
  const ref = useReveal<HTMLDivElement>();
  const { t, locale } = useI18n();
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight" style={{textWrap: "balance"}}>
            <Highlight text={t.pain.title} />
          </h2>
          <p className="text-muted-foreground text-lg leading-loose">
            {t.pain.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {t.pain.stats.map((s, i) => (
            <Stat
              key={s.label}
              suffix={s.suffix}
              label={s.label}
              Icon={icons[i]}
              locale={locale}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {t.pain.questions.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border border-gold/15 bg-surface px-6 py-5 transition hover:border-gold/35 hover:bg-surface-elevated"
            >
              <p className="text-base md:text-lg font-medium">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
