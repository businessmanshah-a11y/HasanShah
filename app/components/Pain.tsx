"use client";
import { TrendingDown, Users, ShoppingBag, AlertTriangle } from "lucide-react";
import { useCounter, useReveal } from "../hooks/use-reveal";

const stats = [
  { value: 1, suffix: " مسیر", label: "فروش مستقل کنار اینستاگرام", icon: ShoppingBag },
  { value: 1, suffix: " صفحه", label: "معرفی حرفه‌ای برای مشتری جدی", icon: Users },
  { value: 1, suffix: " فرم",  label: "جمع‌آوری لید بدون گم‌شدن در دایرکت", icon: TrendingDown },
  { value: 1, suffix: " برند", label: "هویت قابل اعتماد و قابل جست‌وجو", icon: AlertTriangle },
];

const questions = [
  "اگر مشتری جدی لینک سایتت را بخواهد، چه چیزی برایش می‌فرستی؟",
  "فروش تو فقط به دایرکت و حال‌وهوای الگوریتم وابسته است؟",
  "مسیر معرفی، اعتمادسازی و سفارش برای مشتری چقدر روشن است؟",
  "برندت بیرون از اینستاگرام هم همان‌قدر حرفه‌ای دیده می‌شود؟",
];

function Stat({
  value,
  suffix,
  label,
  Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  Icon: typeof TrendingDown;
}) {
  const ref = useCounter(value);
  return (
    <div className="rounded-2xl border border-gold/15 bg-surface p-6 text-center transition-all hover:border-gold/30">
      <Icon className="mx-auto mb-3 h-6 w-6 text-gold opacity-70" />
      <div className="flex items-baseline justify-center gap-1">
        <span ref={ref} className="text-4xl md:text-5xl font-black text-gold">
          ۰
        </span>
        <span className="text-xl font-bold text-gold">{suffix}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{label}</p>
    </div>
  );
}

export default function Pain() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight" style={{textWrap: "balance"}}>
            وقتی سایت نداری، فقط یک صفحه{" "}
            <span className="text-gold">کم نداری</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-loose">
            یک بخش مهم از اعتماد، معرفی و فروش برندت بیرون از کنترل تو می‌ماند.
            سایت خوب قرار نیست جای اینستاگرام را بگیرد؛ قرار است ستون محکم‌تری
            کنار آن بسازد.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((s) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              Icon={s.icon}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {questions.map((q, i) => (
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
