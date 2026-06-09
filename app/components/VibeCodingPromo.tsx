import { ArrowLeft, Code2, Sparkles } from "lucide-react";

export default function VibeCodingPromo() {
  return (
    <section className="relative bg-surface/25 py-10 md:py-14" aria-label="آموزش وایب‌کدینگ">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-6 rounded-3xl border border-gold/20 bg-background/70 p-5 shadow-elegant md:grid-cols-[auto_1fr_auto] md:p-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
            <Code2 className="h-7 w-7 text-gold-foreground" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              دوره و دورهمی رایگان وایب‌کدینگ
            </div>
            <h2 className="text-2xl font-black leading-[1.45] md:text-3xl">
              می‌خوای یاد بگیری با AI ایده‌ات رو به محصول تبدیل کنی؟
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-loose text-muted-foreground">
              صفحه آموزش وایب‌کدینگ از صفر آماده شده؛ سرفصل‌ها، ابزارها و پیش‌ثبت‌نام
              دورهمی حضوری رایگان را همان اول ببین.
            </p>
          </div>
          <a
            href="/vibe-coding#workshop"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-black text-gold-foreground shadow-gold transition hover:-translate-y-0.5"
          >
            ورود به آموزش
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
