"use client";
import { ShoppingBag, Briefcase, Rocket, User, Megaphone } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { GlowCard } from "./ui/spotlight-card";

const services = [
  {
    icon: ShoppingBag,
    title: "طراحی سایت فروشگاهی",
    desc: "فروشگاهی که مسیر دیدن محصول، اعتماد، پرداخت و پیگیری سفارش را برای مشتری ساده و تمیز می‌کند.",
  },
  {
    icon: Briefcase,
    title: "سایت خدماتی",
    desc: "سایتی برای توضیح شفاف خدمات، ساختن اعتماد و تبدیل تماس‌های پراکنده به درخواست‌های قابل پیگیری.",
  },
  {
    icon: Rocket,
    title: "سایت استارتاپ و معرفی",
    desc: "سایت تک‌صفحه‌ای و معرفی برای وقتی که باید ایده، محصول یا مزیتت را سریع و قابل فهم ارائه کنی.",
  },
  {
    icon: User,
    title: "پرسونال برندینگ",
    desc: "وب‌سایت شخصی برای متخصص‌ها و چهره‌هایی که می‌خواهند هویت، تجربه و مسیر همکاری‌شان روشن باشد.",
  },
  {
    icon: Megaphone,
    title: "دیجیتال مارکتینگ",
    desc: "کمک به چیدن مسیر محتوا، سوشال، سئو و جذب لید تا سایت فقط ساخته نشود؛ وارد چرخه رشد شود.",
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
            از طراحی تا اجرا، با نگاهی که هم تجربه کاربری را می‌بیند هم واقعیت فروش را.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-5">
          {services.map((s, i) => (
            <GlowCard
              key={s.title}
              customSize
              glowColor="gold"
              className={`group transition-all hover:-translate-y-1 hover:shadow-gold ${
                i < 2
                  ? "col-span-6 sm:col-span-3"
                  : "col-span-6 sm:col-span-2"
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-gold shrink-0 opacity-80" />
                  <h3 className="text-lg font-bold group-hover:text-gold transition-colors leading-snug">
                    {s.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-loose">{s.desc}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
