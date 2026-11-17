"use client";

import { LearningStation, learningStationsMeta } from "../data";
import { Brain, Layout, Layers, Terminal, Zap, ShoppingCart, ShieldAlert, CheckCircle2 } from "lucide-react";

interface CurriculumRoadmapBarProps {
  activeStation: LearningStation | 'all';
  onSelectStation: (station: LearningStation | 'all') => void;
  activePreset: 'landing24h' | 'ecommerce' | 'critical5' | 'nocode' | 'all';
  onSelectPreset: (preset: 'landing24h' | 'ecommerce' | 'critical5' | 'nocode' | 'all') => void;
}

export default function CurriculumRoadmapBar({
  activeStation,
  onSelectStation,
  activePreset,
  onSelectPreset,
}: CurriculumRoadmapBarProps) {
  const getStationIcon = (name: string) => {
    switch (name) {
      case "Brain":
        return <Brain className="h-4 w-4" />;
      case "Layout":
        return <Layout className="h-4 w-4" />;
      case "Layers":
        return <Layers className="h-4 w-4" />;
      case "Terminal":
        return <Terminal className="h-4 w-4" />;
      default:
        return <CheckCircle2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* 4 Learning Stations */}
      <div>
        <div className="flex items-center justify-between text-xs font-bold text-muted-foreground mb-2">
          <span>ایستگاه‌های ۴ گانه یادگیری قدم‌به‌قدم:</span>
          {activeStation !== 'all' && (
            <button
              type="button"
              onClick={() => onSelectStation('all')}
              className="text-gold hover:underline text-[11px]"
            >
              نمایش همه ایستگاه‌ها
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {learningStationsMeta.map((station) => {
            const isActive = activeStation === station.id;

            return (
              <button
                key={station.id}
                type="button"
                onClick={() => {
                  onSelectStation(isActive ? 'all' : station.id);
                  onSelectPreset('all');
                }}
                className={`p-3.5 rounded-2xl border text-start transition-all ${
                  isActive
                    ? "border-gold bg-gold/15 text-gold shadow-md font-bold"
                    : "border-white/10 bg-white/5 text-muted-foreground hover:border-gold/30 hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`p-1.5 rounded-xl border ${station.accentColor}`}>
                    {getStationIcon(station.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-gold">گام {station.stepNumber}</span>
                </div>
                <div className="text-xs font-bold text-foreground truncate">{station.titleFa}</div>
                <p className="text-[11px] text-muted-foreground line-clamp-1 mt-1">{station.subtitleFa}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Preset Fast-Track Shortcuts */}
      <div className="border-t border-white/5 pt-3">
        <div className="text-xs text-muted-foreground font-semibold mb-2">
          مسیرهای میان‌بر بر اساس هدف شما:
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              onSelectPreset(activePreset === 'critical5' ? 'all' : 'critical5');
              onSelectStation('all');
            }}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
              activePreset === 'critical5'
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm"
                : "border border-white/10 bg-white/5 text-muted-foreground hover:border-rose-400/40 hover:text-rose-300"
            }`}
          >
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>۵ اصطلاح مرگ و زندگی</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectPreset(activePreset === 'landing24h' ? 'all' : 'landing24h');
              onSelectStation('all');
            }}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
              activePreset === 'landing24h'
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm"
                : "border border-white/10 bg-white/5 text-muted-foreground hover:border-sky-400/40 hover:text-sky-300"
            }`}
          >
            <Zap className="h-3.5 w-3.5" />
            <span>مسیر لندینگ ۲۴ ساعته</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectPreset(activePreset === 'ecommerce' ? 'all' : 'ecommerce');
              onSelectStation('all');
            }}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
              activePreset === 'ecommerce'
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                : "border border-white/10 bg-white/5 text-muted-foreground hover:border-amber-400/40 hover:text-amber-300"
            }`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span>مسیر فروشگاه آنلاین</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectPreset(activePreset === 'nocode' ? 'all' : 'nocode');
              onSelectStation('all');
            }}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
              activePreset === 'nocode'
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                : "border border-white/10 bg-white/5 text-muted-foreground hover:border-emerald-400/40 hover:text-emerald-300"
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>اصطلاحات بدون نیاز به کد (No-Code)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
