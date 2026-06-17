"use client";

import { Calendar, CheckCircle2, Clock, MapPin, Send } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider";
import WorkshopCountdown from "./WorkshopCountdown";
import WorkshopUrgencyBar from "./WorkshopUrgencyBar";

type WorkshopSignupCardProps = {
  signupPlacement: "top" | "bottom";
};

const EVENT_START_ISO = "2026-06-18T11:00:00+03:30";
const SEATS_TOTAL = 30;
const SEATS_TAKEN = 30;

const INSTAGRAM_URL = "https://www.instagram.com/shahbusinessman";
const TELEGRAM_URL = "https://t.me/shahbusinessman";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.01" strokeWidth="3" />
    </svg>
  );
}

export default function WorkshopSignupCard({ signupPlacement }: WorkshopSignupCardProps) {
  const { t } = useI18n();
  const vc = t.vibeCoding;

  return (
    <section
      id={signupPlacement === "top" ? "workshop" : "workshop-bottom"}
      className="relative"
      aria-label={vc.workshopFormTitle}
    >
      <div className="rounded-3xl border border-gold/25 bg-surface/90 p-5 shadow-elegant md:p-7">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-gold">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1">
            {vc.workshopBadgeFree}
          </span>
          <span className="rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1 text-gold/80">
            {vc.workshopBadgeCapacity}
          </span>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <WorkshopUrgencyBar
            joinedLabel={vc.workshopUrgencyJoined}
            spotsLeftLabel={vc.workshopUrgencySpotsLeft}
            taken={SEATS_TAKEN}
            total={SEATS_TOTAL}
            soldOut
          />
          <WorkshopCountdown
            targetISO={EVENT_START_ISO}
            label={vc.workshopCountdownLabel}
            liveLabel={vc.workshopCountdownLive}
            unitLabels={{
              days: vc.workshopCountdownDays,
              hours: vc.workshopCountdownHours,
              minutes: vc.workshopCountdownMinutes,
              seconds: vc.workshopCountdownSeconds,
            }}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="text-2xl font-black leading-[1.45] md:text-4xl">
              {vc.workshopFormTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-loose text-muted-foreground md:text-base">
              {vc.workshopFormDesc}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                {vc.workshopEventDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                {vc.workshopEventTime}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                {vc.workshopEventLocation}
              </span>
            </div>

            <div className="mt-5">
              <p className="mb-2.5 text-xs font-semibold text-gold">{vc.workshopAgendaTitle}</p>
              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {vc.workshopAgendaItems.map((item) => (
                  <li key={item} dir="auto" className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sold-out panel */}
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/[0.12] to-gold/[0.04] p-5 text-center">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.83 0.105 72 / 0.25), transparent 70%)",
              }}
            />

            <div className="relative">
              <span className="text-4xl" role="img" aria-hidden="true">🔥</span>

              <h3 className="mt-3 text-lg font-black leading-snug">
                {vc.workshopSoldOutTitle}
              </h3>
              <p className="mt-1 text-xs font-semibold text-gold">
                {vc.workshopSoldOutDemand}
              </p>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {vc.workshopSoldOutDesc}
              </p>

              <p className="mt-4 mb-3 text-xs font-semibold text-gold/80">
                {vc.workshopSoldOutFollowLabel}
              </p>

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/30 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-white/80 transition hover:border-gold/60 hover:bg-gold/10 hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {vc.workshopSoldOutInstagram}
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-4 py-2.5 text-sm font-black text-gold-foreground shadow-gold transition hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  {vc.workshopSoldOutTelegram}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
