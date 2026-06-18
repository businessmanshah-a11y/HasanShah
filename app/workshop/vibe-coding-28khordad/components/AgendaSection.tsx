import { AGENDA } from "../config";

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-black md:text-3xl">سرفصل‌های کارگاه</h2>
        <div className="mx-auto max-w-2xl space-y-3">
          {AGENDA.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4"
            >
              <span className="shrink-0 text-xs font-mono text-gold/70 w-12 text-left">{item.time}</span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm font-medium">{item.topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
