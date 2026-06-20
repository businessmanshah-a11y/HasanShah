import Link from 'next/link';

export default function PresentationSection() {
  return (
    <section id="presentation" className="py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-black md:text-3xl">پرزنتیشن کارگاه</h2>
        <div className="mx-auto max-w-2xl">
          <div className="glass-card rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Icon */}
            <div className="shrink-0 w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-2xl">
              🖥
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-lg font-bold">اسلایدهای کارگاه</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                تمام اسلایدهای ارائه‌شده در کارگاه — از ایده‌پردازی تا محصول زنده
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/workshop/vibe-coding-28khordad/slides/"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              مشاهده اسلایدها
              <span aria-hidden>←</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
