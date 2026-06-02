"use client";
import { Check, Gift, ArrowLeft } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

const features = [
  "طراحی اختصاصی و کاملاً مطابق برند شما",
  "ریسپانسیو روی موبایل، تبلت و دسکتاپ",
  "بهینه‌سازی سرعت و سئو پایه",
  "فرم تماس و اتصال به واتساپ/تلگرام",
  "هاستینگ یک‌ماهه رایگان روی دامنه آزمایشی",
  "آموزش مدیریت محتوا (ویدئویی)",
];

export default function Offer() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="offer" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[2rem] border border-gold/30 p-8 md:p-14 shadow-gold-lg"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.050 252), oklch(0.15 0.035 260))",
          }}
        >
          <div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40"
            style={{ background: "oklch(0.83 0.105 72 / 0.25)" }}
          />
          <div
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30"
            style={{ background: "oklch(0.27 0.080 248 / 0.45)" }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-bold text-gold-foreground mb-5">
                <Gift className="h-3.5 w-3.5" />
                پیشنهاد ویژه — ۱۰۰٪ رایگان
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-5" style={{textWrap: "balance"}}>
                یک لندینگ پیج{" "}
                <span className="text-gold">کامل و حرفه‌ای</span>
                <br />
                هدیه من به کسب‌وکار توئه
              </h2>

              <p className="text-muted-foreground text-lg leading-loose mb-6">
                بدون شرط، بدون پیش‌پرداخت، بدون قرارداد. فقط فرم رو پر کن —
                تا ۷۲ ساعت آینده، اولین نسخه سایتت آماده‌ست.
              </p>

              <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mb-6">
                <h4 className="font-bold text-gold mb-2">چرا رایگانه؟</h4>
                <p className="text-sm text-muted-foreground leading-loose">
                  چون می‌خوام کیفیت کارم رو ببینی، نه اینکه دربارش بشنوی.
                  وقتی نتیجه رو دیدی، انتخاب با خودته که برای پروژه‌های
                  بزرگ‌تر با هم همکاری کنیم یا نه.
                </p>
              </div>

              <a
                href="#form"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-8 py-4 font-bold text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5"
              >
                همین الان شروع کن
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>

            {/* Features list */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-4 text-gold">چی شامل می‌شه؟</h3>
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-xl bg-surface/60 border border-gold/10 p-4 hover:border-gold/30 transition"
                >
                  <div className="flex-shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-gold mt-0.5">
                    <Check className="h-3.5 w-3.5 text-gold-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
