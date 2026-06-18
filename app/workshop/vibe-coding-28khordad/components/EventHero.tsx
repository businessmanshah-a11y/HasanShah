import { EVENT } from "../config";

export default function EventHero() {
  return (
    <section className="py-16 md:py-24" dir="rtl">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
          {EVENT.date} · {EVENT.location}
        </div>
        <h1 className="text-4xl font-black leading-snug md:text-6xl">
          {EVENT.title}
        </h1>
        <p className="mt-2 text-sm tracking-widest text-muted-foreground uppercase">{EVENT.titleEn}</p>
        <div className="mt-10 flex justify-center gap-8 md:gap-16">
          {[
            { value: EVENT.attendeeCount, label: "شرکت‌کننده" },
            { value: EVENT.topicCount, label: "سرفصل" },
            { value: EVENT.durationHours, label: "ساعت" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-gold md:text-5xl">{value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
