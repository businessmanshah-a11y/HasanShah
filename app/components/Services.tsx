"use client";
import { ShoppingBag, Briefcase, Rocket, User, Megaphone } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { GlowCard } from "./ui/spotlight-card";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";

const icons = [ShoppingBag, Briefcase, Rocket, User, Megaphone];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight" style={{textWrap: "balance"}}>
            <Highlight text={t.services.title} />
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.services.desc}
          </p>
        </div>

        <div className="grid grid-cols-6 gap-5">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <GlowCard
                key={s.title}
                customSize
                glowColor="gold"
                className={`group transition-all hover:-translate-y-1 hover:shadow-gold ${
                  i < 2
                    ? "col-span-6 sm:col-span-3"
                    : "col-span-6 sm:col-span-2"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gold shrink-0 opacity-80" />
                    <h3 className="text-lg font-bold group-hover:text-gold transition-colors leading-snug">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-loose">{s.desc}</p>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
