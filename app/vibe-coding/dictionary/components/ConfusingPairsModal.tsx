"use client";

import { useState } from "react";
import { X, ArrowLeftRight, HelpCircle, CheckCircle2 } from "lucide-react";
import { confusingPairsData } from "../data";

interface ConfusingPairsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfusingPairsModal({ isOpen, onClose }: ConfusingPairsProps) {
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  if (!isOpen) return null;

  const currentPair = confusingPairsData[selectedPairIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" dir="rtl">
      <div className="relative w-full max-w-3xl rounded-3xl border border-gold/40 bg-surface-elevated p-6 md:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/30">
              <ArrowLeftRight className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground">کالبدشکافی تفاوت مفاهیم گیج‌کننده</h3>
              <p className="text-xs text-muted-foreground">تفاوت اصطلاحات شبیه به هم را یک‌بار برای همیشه با مثال ملموس یاد بگیر</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-3">
          {confusingPairsData.map((pair, idx) => (
            <button
              key={pair.id}
              type="button"
              onClick={() => setSelectedPairIndex(idx)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                selectedPairIndex === idx
                  ? "bg-gradient-gold text-gold-foreground shadow-gold"
                  : "border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {pair.title}
            </button>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Concept A */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-3">
            <div className="text-sm font-black text-amber-300 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-xs">A</span>
              <span>{currentPair.conceptA.name}</span>
            </div>
            <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
              {currentPair.conceptA.description}
            </p>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-100 leading-relaxed">
              <strong>💡 استعاره روزمره:</strong> {currentPair.conceptA.analogy}
            </div>
            <div className="text-xs text-muted-foreground pt-1">
              <strong>🎯 کِی استفاده کنیم؟</strong> {currentPair.conceptA.useWhen}
            </div>
          </div>

          {/* Concept B */}
          <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5 space-y-3">
            <div className="text-sm font-black text-sky-300 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-xs">B</span>
              <span>{currentPair.conceptB.name}</span>
            </div>
            <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
              {currentPair.conceptB.description}
            </p>
            <div className="rounded-xl border border-sky-500/20 bg-sky-500/10 p-3 text-xs text-sky-100 leading-relaxed">
              <strong>💡 استعاره روزمره:</strong> {currentPair.conceptB.analogy}
            </div>
            <div className="text-xs text-muted-foreground pt-1">
              <strong>🎯 کِی استفاده کنیم؟</strong> {currentPair.conceptB.useWhen}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            متوجه شدم، بستن
          </button>
        </div>
      </div>
    </div>
  );
}
