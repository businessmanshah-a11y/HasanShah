"use client";
import { ArrowLeft, Sparkles } from "lucide-react";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <ParticlesBackground />

      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.27 0.080 248 / 0.40), transparent 70%)",
        }}
      />

      <div className="container relative mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        {/* Text side */}
        <div className="text-center md:text-right">
          <Image
            src="/images/logo.png"
            alt="HSH"
            width={96}
            height={96}
            className="mx-auto md:mx-0 mb-6 h-24 w-24 object-contain animate-float drop-shadow-[0_0_30px_rgba(74,144,164,0.5)]"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs text-gold mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            طراحی سایت + دیجیتال مارکتینگ
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.3] mb-6" style={{textWrap: "balance"}}>
            کی از{" "}
            <span className="text-gold">چشمه جاودان پول</span>
            <br />
            بدش میاد؟
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-loose mb-8 max-w-xl mx-auto md:mx-0">
            چشمه‌ای که <span className="text-gold">با هم</span> می‌سازیمش —
            با یک سایت حرفه‌ای، لوکس و دقیق که برندت رو هم‌سطح بزرگان بازار می‌کنه.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#form"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5 animate-pulse-gold"
            >
              لندینگ پیج رایگان
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/5 px-7 py-3.5 font-semibold text-foreground transition hover:bg-gold/10 hover:border-gold"
            >
              نمونه‌کارها
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              آماده پذیرش پروژه جدید
            </div>
            <div className="hidden sm:block">۷ سال تجربه</div>
          </div>
        </div>

        {/* Portrait side */}
        <div className="relative mx-auto">
          <div
            className="absolute -inset-4 rounded-3xl opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.83 0.105 72 / 0.22), transparent 70%)",
            }}
          />
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-elegant">
            <Image
              src="/images/profile.webp"
              alt="حسن شاهمرادی"
              width={500}
              height={650}
              priority
              className="h-[500px] md:h-[600px] w-auto object-cover object-top"
            />
            <div
              className="absolute inset-0 mix-blend-overlay opacity-40"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, oklch(0.13 0.022 272 / 0.75))",
              }}
            />
            <div className="absolute bottom-4 right-4 left-4 rounded-2xl glass-card px-4 py-3">
              <div className="text-xs text-gold mb-0.5">حسن شاهمرادی</div>
              <div className="text-sm font-semibold">طراح سایت و استراتژیست دیجیتال</div>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-divider mt-16 mx-auto max-w-md" />
    </section>
  );
}
