"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "../hooks/use-reveal";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";

type FormState = { name: string; contact: string; message: string };

export default function LeadForm() {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>({ name: "", contact: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) {
      toast.error(t.form.errorRequired);
      return;
    }
    setSubmitting(true);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setDone(true);
    } catch {
      toast.error(t.form.errorServer);
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full rounded-xl border border-gold/20 bg-surface px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none transition";

  return (
    <section id="form" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-xl">
          {done ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-black mb-2">{t.form.doneTitle}</h3>
              <p className="text-muted-foreground">{t.form.doneDesc}</p>
              <button onClick={() => setDone(false)} className="mt-6 text-sm text-gold underline underline-offset-4">
                {t.form.again}
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs text-gold mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t.form.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ textWrap: "balance" }}>
                  <Highlight text={t.form.title} />
                </h2>
                <p className="mt-3 text-muted-foreground">{t.form.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  className={inputCls}
                  placeholder={t.form.namePlaceholder}
                  value={form.name}
                  onChange={set("name")}
                  required
                />
                <input
                  className={inputCls}
                  placeholder={t.form.contactPlaceholder}
                  value={form.contact}
                  onChange={set("contact")}
                  required
                />
                <textarea
                  className={`${inputCls} min-h-[120px] resize-none`}
                  placeholder={t.form.messagePlaceholder}
                  value={form.message}
                  onChange={set("message")}
                  rows={4}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-gradient-gold py-3.5 font-bold text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {submitting ? t.form.submitting : t.form.submit}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
