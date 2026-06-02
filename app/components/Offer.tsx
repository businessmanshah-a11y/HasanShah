"use client";
import { Check, Gift, ArrowLeft } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

const features = [
  "طراحی و اجرای سایت تک‌صفحه‌ای اختصاصی",
  "تحویل حداکثر تا ۷۲ ساعت روی دامنه آزمایشی",
  "ریسپانسیو روی موبایل، تبلت و دسکتاپ",
  "دیزاین اختصاصی با توجه به برند، مخاطب و هدف فروش",
  "فرم تماس یا مسیر ارتباطی مناسب برای جذب لید",
  "یک ماه فرصت بررسی و تصمیم برای همکاری بعدی",
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
                کمپین ویژه — سایت تک‌صفحه‌ای رایگان
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-5" style={{textWrap: "balance"}}>
                یک سایت واقعی تحویل بگیر،{" "}
                <span className="text-gold">بعد تصمیم بگیر</span>
                <br />
                ادامه همکاری می‌خوای یا نه
              </h2>

              <p className="text-muted-foreground text-lg leading-loose mb-6">
                فرم را پر کن تا تیم فنی ما بر اساس برند، مخاطب و هدفت یک سایت
                تک‌صفحه‌ای اختصاصی طراحی و اجرا کند. حداکثر تا ۷۲ ساعت، نسخه آماده
                روی دامنه آزمایشی تحویل می‌شود؛ بدون پیش‌پرداخت، بدون قرارداد و
                بدون هیچ پیش‌شرطی.
              </p>

              <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mb-6">
                <h4 className="font-bold text-gold mb-2">بعد از تحویل چه اتفاقی می‌افته؟</h4>
                <p className="text-sm text-muted-foreground leading-loose">
                  سایت روی دامنه آزمایشی تا یک ماه قابل بررسی است. اگر کیفیت
                  کار، سرعت اجرا و مسیر پیشنهادی به کارت آمد، درباره همکاری
                  بلندمدت یا توسعه نسخه کامل‌تر صحبت می‌کنیم؛ اگر هم نه، هیچ
                  تعهدی برای تو ایجاد نمی‌شود.
                </p>
              </div>

              <a
                href="#form"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-8 py-4 font-bold text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5"
              >
                فرم سایت رایگان
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>

            {/* Features list */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-4 text-gold">این کمپین شامل چیه؟</h3>
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
