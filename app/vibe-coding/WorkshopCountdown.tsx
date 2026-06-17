"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Hourglass } from "lucide-react";

type Unit = "days" | "hours" | "minutes" | "seconds";

type TimeLeft = Record<Unit, number>;

type WorkshopCountdownProps = {
  targetISO: string;
  label: string;
  unitLabels: Record<Unit, string>;
  liveLabel: string;
};

const UNITS: Unit[] = ["days", "hours", "minutes", "seconds"];

function getTimeLeft(targetISO: string): TimeLeft | null {
  const diff = new Date(targetISO).getTime() - Date.now();
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export default function WorkshopCountdown({
  targetISO,
  label,
  unitLabels,
  liveLabel,
}: WorkshopCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const start = setTimeout(() => {
      setMounted(true);
      setTimeLeft(getTimeLeft(targetISO));
    }, 0);
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetISO)), 1000);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [targetISO]);

  // Mounted with the event over: show the "live" state.
  if (mounted && !timeLeft) {
    return (
      <div className="flex h-full items-center justify-center gap-2 rounded-2xl border border-gold/30 bg-gradient-gold-soft px-4 py-3.5 text-sm font-bold text-gold">
        <Hourglass className="h-4 w-4" aria-hidden="true" />
        {liveLabel}
      </div>
    );
  }

  // Server and first client paint must match exactly: render the shell with
  // placeholder digits before mount, then swap in the live countdown.
  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="rounded-2xl border border-gold/20 bg-background/40 p-3 animate-pulse-gold">
      <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
        <Hourglass className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
        {label}
      </p>
      <div className="grid grid-cols-4 gap-1.5">
        {UNITS.map((unit) => (
          <div
            key={unit}
            className="flex flex-col items-center gap-1 rounded-xl border border-gold/15 bg-gradient-to-b from-surface-elevated to-surface px-1 py-2"
          >
            <div className="relative h-6 w-full overflow-hidden text-center">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={display[unit]}
                  initial={reduceMotion || !mounted ? false : { y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduceMotion ? undefined : { y: -14, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 text-lg font-black text-gold sm:text-xl"
                >
                  {String(display[unit]).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-[10px] font-semibold text-muted-foreground">{unitLabels[unit]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
