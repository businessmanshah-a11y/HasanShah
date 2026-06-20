"use client";
import Link from "next/link";
import { useI18n } from "../i18n/LanguageProvider";
import Nav from "../components/Nav";

export default function WorkshopsPageContent() {
  const { t, dir } = useI18n();
  const wp = t.workshopsPage;
  const arrow = dir === "rtl" ? "←" : "→";

  return (
    <div className="min-h-screen bg-background text-foreground" dir={dir}>
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            {wp.badge}
          </div>
          <h1 className="text-4xl font-black md:text-6xl">
            {dir === "ltr" ? (
              <>
                <span className="text-gradient-gold">{wp.titleAccent}</span>
                {" "}{wp.titlePlain}
              </>
            ) : (
              <>
                {wp.titlePlain}{" "}
                <span className="text-gradient-gold">{wp.titleAccent}</span>
              </>
            )}
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-md mx-auto">
            {wp.subtitle}
          </p>
        </div>
      </section>

      <div className="gold-divider mx-auto max-w-4xl mb-16" />

      {/* Past workshops */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-xl font-bold text-muted-foreground">{wp.pastLabel}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {wp.workshops.map((w) => (
              <Link
                key={w.id}
                href={w.href}
                className="group glass-card rounded-2xl p-6 flex flex-col gap-4 gold-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                    {wp.workshopBadge}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {w.duration} {wp.durationLabel}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black leading-snug group-hover:text-gold transition-colors">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {w.date} · {w.location}
                  </p>
                </div>

                <div className="flex gap-5 text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
                  <span>{w.attendees} {wp.attendeesLabel}</span>
                </div>

                <span className="text-xs font-semibold text-gold/70 group-hover:text-gold transition-colors">
                  {wp.viewEvent} {arrow}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface/50 px-8 py-10 text-center">
            <p className="text-sm text-muted-foreground">{wp.comingSoon}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
