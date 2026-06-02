"use client";
import { TrendingDown, Users, ShoppingBag, AlertTriangle } from "lucide-react";
import { useCounter, useReveal } from "../hooks/use-reveal";

const stats = [
  { value: 73,  suffix: "٪",    label: "کسب‌وکارهایی که فقط با اینستاگرام می‌فروشن",  icon: ShoppingBag },
  { value: 4,   suffix: " برابر", label: "اعتماد مشتری به برند دارای سایت اختصاصی",    icon: Users },
  { value: 89,  suffix: "٪",    label: "ضرر فروش هنگام قطعی اینستاگرام",              icon: TrendingDown },
  { value: 1,   suffix: " از ۳", label: "خریدار قبل از خرید سایت رو چک می‌کنه",       icon: AlertTriangle },
];

const questions = [
  "وقتی اینستاگرام قطع شد، چقدر ضرر کردی؟",
  "رقیبات دارن می‌فروشن، تو کجایی؟",
  "مشتری گفت «سایت‌تون رو بفرستین» — چی فرستادی؟",
  "تا کِی می‌خوای ۸۰٪ سهمت رو به الگوریتم بسپاری؟",
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
            داری ماهانه چقدر{" "}
            <span className="text-gold">از دست می‌دی</span>؟
          </h2>
          <p className="text-muted-foreground text-lg leading-loose">
            هر روزی که سایت نداری، رقبا یک قدم جلوتر می‌رن. آمارها حرف می‌زنن:
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
