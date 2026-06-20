import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';

export const metadata: Metadata = {
  title: 'ورکشاپ‌ها | حسن شاه‌مرادی',
  description: 'ورکشاپ‌های وایب‌کدینگ — از ایده تا محصول با هوش مصنوعی',
  robots: { index: true },
};

const PAST_WORKSHOPS = [
  {
    id: 'vibe-coding-28khordad',
    title: 'وایب‌کدینگ: از ایده تا محصول',
    date: '۲۸ خرداد ۱۴۰۴',
    location: 'تهران',
    attendees: 24,
    duration: '۳ ساعت',
    href: '/workshop/vibe-coding-28khordad/',
  },
];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            ✦ ورکشاپ‌های من
          </div>
          <h1 className="text-4xl font-black md:text-6xl">
            کارگاه‌های{' '}
            <span className="text-gradient-gold">وایب‌کدینگ</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-md mx-auto">
            از ایده تا محصول — با هوش مصنوعی و بدون نوشتن کد خام
          </p>
        </div>
      </section>

      <div className="gold-divider mx-auto max-w-4xl mb-16" />

      {/* Past workshops */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-xl font-bold text-muted-foreground">برگزار شده</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {PAST_WORKSHOPS.map((w) => (
              <Link
                key={w.id}
                href={w.href}
                className="group glass-card rounded-2xl p-6 flex flex-col gap-4 gold-glow transition-all duration-300"
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                    ✓ برگزار شد
                  </span>
                  <span className="text-xs text-muted-foreground">{w.duration}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-black leading-snug group-hover:text-gold transition-colors">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {w.date} · {w.location}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex gap-5 text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
                  <span>{w.attendees} شرکت‌کننده</span>
                </div>

                <span className="text-xs font-semibold text-gold/70 group-hover:text-gold transition-colors">
                  مشاهده صفحه رویداد ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon placeholder */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface/50 px-8 py-10 text-center">
            <p className="text-sm text-muted-foreground">
              ورکشاپ‌های بعدی به‌زودی اعلام می‌شه
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
