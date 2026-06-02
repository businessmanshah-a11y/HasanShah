"use client";
import { ShoppingBag, Briefcase, Rocket, User, Megaphone } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

const services = [
  {
    icon: ShoppingBag,
    title: "طراحی سایت فروشگاهی",
    desc: "فروشگاه آنلاین حرفه‌ای با درگاه پرداخت، مدیریت محصول و سبد خرید بهینه برای فروش بیشتر.",
  },
  {
    icon: Briefcase,
    title: "سایت خدماتی",
    desc: "وب‌سایت‌هایی که اعتماد می‌سازن — مناسب کلینیک، آژانس، مشاور، رستوران و کسب‌وکارهای محلی.",
  },
  {
    icon: Rocket,
    title: "سایت استارتاپ و معرفی",
    desc: "لندینگ پیج‌های جذاب برای استارتاپ‌ها — با فوکوس روی تبدیل بازدیدکننده به مشتری.",
  },
  {
    icon: User,
    title: "پرسونال برندینگ",
    desc: "وب‌سایت شخصی برای متخصص‌ها، مربی‌ها و چهره‌های عمومی — یک نمایش لوکس از هویت تو.",
  },
  {
    icon: Megaphone,
    title: "دیجیتال مارکتینگ",
    desc: "استراتژی کامل سئو، تبلیغات گوگل، محتوا و رشد فالوور — تا سایتت دیده بشه و بفروشه.",
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight" style={{textWrap: "balance"}}>
            هر چیزی که کسب‌وکارت{" "}
            <span className="text-gold">نیاز داره</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            از طراحی تا اجرا — یک تیم، یک کیفیت، نتیجه تضمینی.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl border border-gold/15 bg-surface p-7 transition-all hover:border-gold/50 hover:-translate-y-1 hover:shadow-gold ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className="absolute -top-12 -left-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity"
                style={{ background: "oklch(0.83 0.105 72 / 0.15)" }}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="h-5 w-5 text-gold shrink-0 opacity-80" />
                  <h3 className="text-lg font-bold group-hover:text-gold transition-colors leading-snug">
                    {s.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-loose">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
