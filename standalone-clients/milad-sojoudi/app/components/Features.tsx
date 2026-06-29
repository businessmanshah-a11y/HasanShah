"use client";
import { Sparkles, Star, Zap } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider";

const ICONS = [Sparkles, Star, Zap];

export default function Features() {
  const { t } = useI18n();

  return (
    <section className="bg-surface/25 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-3">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[i] ?? Sparkles;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-3xl border border-gold/20 bg-background/70 p-6 shadow-elegant md:p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
                    <Icon className="h-5 w-5 text-gold-foreground" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold">
                    <Sparkles className="h-3.5 w-3.5" />
                    {item.badge}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-black leading-snug md:text-2xl">{item.title}</h2>
                  <p className="mt-2 text-sm leading-loose text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
