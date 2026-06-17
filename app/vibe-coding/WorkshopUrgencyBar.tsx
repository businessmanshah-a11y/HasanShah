"use client";

import { motion, useReducedMotion } from "framer-motion";

type WorkshopUrgencyBarProps = {
  joinedLabel: string;
  spotsLeftLabel: string;
  taken: number;
  total: number;
  soldOut?: boolean;
};

export default function WorkshopUrgencyBar({
  joinedLabel,
  spotsLeftLabel,
  taken,
  total,
  soldOut = false,
}: WorkshopUrgencyBarProps) {
  const reduceMotion = useReducedMotion();
  const pct = Math.min(100, Math.round((taken / total) * 100));

  if (soldOut) {
    return (
      <div className="flex h-full flex-col justify-center gap-2.5 rounded-2xl border border-gold/30 bg-gold/[0.07] px-4 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">{joinedLabel}</span>
          <span className="flex items-center gap-1.5 text-xs font-black text-gold">
            <svg viewBox="0 0 8 8" className="h-2 w-2 fill-gold" aria-hidden="true">
              <circle cx="4" cy="4" r="4" />
            </svg>
            {spotsLeftLabel}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-gold shadow-[0_0_8px_2px_oklch(0.83_0.105_72_/_0.35)]"
            initial={{ width: reduceMotion ? "100%" : 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-center gap-2.5 rounded-2xl border border-red-500/25 bg-red-500/[0.07] px-4 py-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">{joinedLabel}</span>
        <span className="flex items-center gap-1.5 text-xs font-black text-red-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/70 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
          </span>
          {spotsLeftLabel}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-gold"
          initial={{ width: reduceMotion ? `${pct}%` : 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
