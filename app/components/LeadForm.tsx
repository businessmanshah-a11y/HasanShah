"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "../hooks/use-reveal";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";
import {
  type ServiceType,
  siteSubTypeKeys,
  hasSiteKeys,
  platformKeys,
  appStatusKeys,
  levelKeys,
  formatKeys,
  stageKeys,
  needKeys,
  budgetKeys,
  timelineKeys,
  getConsultSchemas,
} from "../lib/consult-schema";

type FormData = Record<string, unknown>;

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpeXNbe7xY5JPuCpuaA6TcRi9YnakWplBJw5WnAq8JmaUEQk9PsNW5dK41ooh0IxtNyg/exec";

function Field({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-foreground">
        {label}
        {required && <span className="text-gold ms-1">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  value,
  onChange,
  placeholder,
  options,
}: {
  value?: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value ?? ""}
        onChange={(e) => e.target.value && onChange(e.target.value)}
        className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/20 appearance-none cursor-pointer transition pe-10 ${
          value
            ? "border-gold/40 text-foreground focus:border-gold"
            : "border-gold/15 text-muted-foreground focus:border-gold"
        }`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-[#0d0d0d] text-foreground">
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" />
    </div>
  );
}

function CardToggle({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          type="button"
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`rounded-xl border px-4 py-2 text-sm transition ${
            value === o.value
              ? "border-gold bg-gradient-gold text-gold-foreground"
              : "border-gold/20 text-muted-foreground hover:border-gold/50"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function MultiCardToggle({
  options,
  values,
  onChange,
}: {
  options: { value: string; label: string }[];
  values: string[];
  onChange: (vs: string[]) => void;
}) {
  const toggle = (v: string) => {
    const next = values.includes(v) ? values.filter((x) => x !== v) : [...values, v];
    onChange(next);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          type="button"
          key={o.value}
          onClick={() => toggle(o.value)}
          className={`rounded-xl border px-4 py-2 text-sm transition ${
            values.includes(o.value)
              ? "border-gold bg-gradient-gold text-gold-foreground"
              : "border-gold/20 text-muted-foreground hover:border-gold/50"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function LeadForm() {
  const ref = useReveal<HTMLDivElement>();
  const { t, locale, dir } = useI18n();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState<ServiceType | null>(null);
  const [data, setData] = useState<FormData>({ platforms: [] });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submittedRef = useRef(false);

  const f = t.consultForm;
  const PrevIcon = dir === "rtl" ? ArrowRight : ArrowLeft;
  const NextIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const phoneAlign = dir === "rtl" ? "text-right" : "text-left";

  const set = (k: string, v: unknown) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const toOpts = (keys: readonly string[], map: Record<string, string>) =>
    keys.map((k) => ({ value: k, label: map[k] ?? k }));

  const schemas = getConsultSchemas(f.errors);

  const validateStep2 = (): boolean => {
    if (!service) return false;
    const schema =
      service === "website" ? schemas.websiteSchema
      : service === "app" ? schemas.appSchema
      : service === "vibecoding" ? schemas.vibecodingSchema
      : schemas.startupSchema;

    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[issue.path.join(".")] = issue.message;
      setErrors(errs);
      toast.error(f.toasts.incomplete);
      return false;
    }
    return true;
  };

  const validateStep3 = (): boolean => {
    const result = schemas.contactSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[issue.path.join(".")] = issue.message;
      setErrors(errs);
      toast.error(f.toasts.incomplete);
      return false;
    }
    return true;
  };

  const next = () => {
    if (step === 1) {
      if (!service) { toast.error(f.toasts.incomplete); return; }
      setStep(2);
    } else if (step === 2) {
      if (!validateStep2()) return;
      setStep(3);
    } else {
      if (!validateStep3()) return;
      submit();
    }
  };

  const prev = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const buildPayload = () => {
    const platforms = (data.platforms as string[]) ?? [];
    return {
      timestamp: new Date().toISOString(),
      lang: locale,
      serviceType: service ?? "",
      name: data.name ?? "",
      phone: data.phone ?? "",
      email: data.email ?? "",
      telegram: data.telegram ?? "",
      siteSubType: data.siteSubType ?? "",
      businessDescription: data.businessDescription ?? "",
      hasSite: data.hasSite ?? "",
      siteUrl: data.siteUrl ?? "",
      budget: data.budget ?? "",
      timeline: data.timeline ?? "",
      platforms: platforms.join(", "),
      appIdea: data.appIdea ?? "",
      appStatus: data.appStatus ?? "",
      level: data.level ?? "",
      buildGoal: data.buildGoal ?? "",
      format: data.format ?? "",
      startupIdea: data.startupIdea ?? "",
      stage: data.stage ?? "",
      need: data.need ?? "",
    };
  };

  const submit = async () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });
      setDone(true);
    } catch {
      submittedRef.current = false;
      toast.error(f.toasts.error);
    } finally {
      setSubmitting(false);
    }
  };

  const progress = (step / 3) * 100;

  const serviceEntries = Object.entries(f.services) as [ServiceType, { title: string; icon: string }][];

  return (
    <section id="form" className="relative py-20 md:py-28 bg-surface/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <Highlight text={f.title} />
            </h2>
            <p className="text-muted-foreground">{f.subtitle}</p>
          </div>

          {done ? (
            <div className="rounded-3xl border border-gold/30 bg-gradient-gold-soft p-10 text-center">
              <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <Sparkles className="h-8 w-8 text-gold-foreground" />
              </div>
              <h3 className="text-2xl font-black mb-3">{f.done.title}</h3>
              <p className="text-muted-foreground leading-loose mb-6">{f.done.desc}</p>
              <button
                onClick={() => {
                  setDone(false);
                  setStep(1);
                  setService(null);
                  setData({ platforms: [] });
                  submittedRef.current = false;
                }}
                className="rounded-xl border border-gold/40 px-6 py-2.5 text-sm text-gold hover:bg-gold/10"
              >
                {f.done.again}
              </button>
            </div>
          ) : (
            <div className="rounded-3xl border border-gold/20 bg-surface p-6 md:p-10 shadow-elegant">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  {f.steps.map((title, i) => (
                    <div
                      key={i}
                      className={`flex-1 text-center text-xs ${
                        i + 1 <= step ? "text-gold font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {title}
                    </div>
                  ))}
                </div>
                <div className="h-2 rounded-full bg-surface-elevated overflow-hidden">
                  <div
                    className="h-full bg-gradient-gold transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Service selection */}
              {step === 1 && (
                <div className="space-y-5">
                  <p className="text-sm font-semibold text-foreground mb-4">{f.serviceTitle}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceEntries.map(([key, val]) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setService(key)}
                        className={`rounded-2xl border p-5 text-start transition ${
                          service === key
                            ? "border-gold bg-gold/15 shadow-gold"
                            : "border-gold/15 bg-surface hover:border-gold/40"
                        }`}
                      >
                        <div className="text-3xl mb-3">{val.icon}</div>
                        <div className="text-sm font-bold">{val.title}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Service-specific fields */}
              {step === 2 && service === "website" && (
                <div className="space-y-5">
                  <Field label={f.website.siteSubType} error={errors.siteSubType} required>
                    <CardToggle
                      options={toOpts(siteSubTypeKeys, f.website.subTypes)}
                      value={data.siteSubType as string}
                      onChange={(v) => set("siteSubType", v)}
                    />
                  </Field>
                  <Field label={f.website.businessDescription} error={errors.businessDescription} required>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder={f.contact.placeholders.businessDescription}
                      value={(data.businessDescription as string) ?? ""}
                      onChange={(e) => set("businessDescription", e.target.value)}
                    />
                  </Field>
                  <Field label={f.website.hasSite} error={errors.hasSite} required>
                    <CardToggle
                      options={toOpts(hasSiteKeys, f.website.hasSiteOptions)}
                      value={data.hasSite as string}
                      onChange={(v) => set("hasSite", v)}
                    />
                    {(data.hasSite === "yes" || data.hasSite === "inactive") && (
                      <input
                        dir="ltr"
                        className={`mt-3 w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${phoneAlign}`}
                        placeholder={f.contact.placeholders.siteUrl}
                        value={(data.siteUrl as string) ?? ""}
                        onChange={(e) => set("siteUrl", e.target.value)}
                      />
                    )}
                  </Field>
                  <Field label={f.website.budget} error={errors.budget} required>
                    <SelectField
                      value={data.budget as string}
                      onChange={(v) => set("budget", v)}
                      placeholder={f.selectPlaceholder}
                      options={toOpts(budgetKeys, f.budgetOptions)}
                    />
                  </Field>
                  <Field label={f.website.timeline} error={errors.timeline} required>
                    <SelectField
                      value={data.timeline as string}
                      onChange={(v) => set("timeline", v)}
                      placeholder={f.selectPlaceholder}
                      options={toOpts(timelineKeys, f.timelineOptions)}
                    />
                  </Field>
                </div>
              )}

              {step === 2 && service === "app" && (
                <div className="space-y-5">
                  <Field label={f.app.platforms} error={errors.platforms} required>
                    <MultiCardToggle
                      options={toOpts(platformKeys, f.app.platformOptions)}
                      values={(data.platforms as string[]) ?? []}
                      onChange={(vs) => set("platforms", vs)}
                    />
                  </Field>
                  <Field label={f.app.appIdea} error={errors.appIdea} required>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder={f.contact.placeholders.appIdea}
                      value={(data.appIdea as string) ?? ""}
                      onChange={(e) => set("appIdea", e.target.value)}
                    />
                  </Field>
                  <Field label={f.app.appStatus} error={errors.appStatus} required>
                    <CardToggle
                      options={toOpts(appStatusKeys, f.app.statusOptions)}
                      value={data.appStatus as string}
                      onChange={(v) => set("appStatus", v)}
                    />
                  </Field>
                  <Field label={f.app.budget} error={errors.budget} required>
                    <SelectField
                      value={data.budget as string}
                      onChange={(v) => set("budget", v)}
                      placeholder={f.selectPlaceholder}
                      options={toOpts(budgetKeys, f.budgetOptions)}
                    />
                  </Field>
                  <Field label={f.app.timeline} error={errors.timeline} required>
                    <SelectField
                      value={data.timeline as string}
                      onChange={(v) => set("timeline", v)}
                      placeholder={f.selectPlaceholder}
                      options={toOpts(timelineKeys, f.timelineOptions)}
                    />
                  </Field>
                </div>
              )}

              {step === 2 && service === "vibecoding" && (
                <div className="space-y-5">
                  <Field label={f.vibecoding.level} error={errors.level} required>
                    <CardToggle
                      options={toOpts(levelKeys, f.vibecoding.levelOptions)}
                      value={data.level as string}
                      onChange={(v) => set("level", v)}
                    />
                  </Field>
                  <Field label={f.vibecoding.buildGoal} error={errors.buildGoal} required>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder={f.contact.placeholders.buildGoal}
                      value={(data.buildGoal as string) ?? ""}
                      onChange={(e) => set("buildGoal", e.target.value)}
                    />
                  </Field>
                  <Field label={f.vibecoding.format} error={errors.format} required>
                    <CardToggle
                      options={toOpts(formatKeys, f.vibecoding.formatOptions)}
                      value={data.format as string}
                      onChange={(v) => set("format", v)}
                    />
                  </Field>
                </div>
              )}

              {step === 2 && service === "startup" && (
                <div className="space-y-5">
                  <Field label={f.startup.startupIdea} error={errors.startupIdea} required>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder={f.contact.placeholders.startupIdea}
                      value={(data.startupIdea as string) ?? ""}
                      onChange={(e) => set("startupIdea", e.target.value)}
                    />
                  </Field>
                  <Field label={f.startup.stage} error={errors.stage} required>
                    <CardToggle
                      options={toOpts(stageKeys, f.startup.stageOptions)}
                      value={data.stage as string}
                      onChange={(v) => set("stage", v)}
                    />
                  </Field>
                  <Field label={f.startup.need} error={errors.need} required>
                    <CardToggle
                      options={toOpts(needKeys, f.startup.needOptions)}
                      value={data.need as string}
                      onChange={(v) => set("need", v)}
                    />
                  </Field>
                  <Field label={f.startup.budget} error={errors.budget} required>
                    <SelectField
                      value={data.budget as string}
                      onChange={(v) => set("budget", v)}
                      placeholder={f.selectPlaceholder}
                      options={toOpts(budgetKeys, f.budgetOptions)}
                    />
                  </Field>
                </div>
              )}

              {/* Step 3: Contact info */}
              {step === 3 && (
                <div className="space-y-5">
                  <p className="text-sm font-semibold text-gold mb-2">{f.contact.title}</p>
                  <Field label={f.contact.name} error={errors.name} required>
                    <input
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder={f.contact.placeholders.name}
                      value={(data.name as string) ?? ""}
                      onChange={(e) => set("name", e.target.value)}
                    />
                  </Field>
                  <Field label={f.contact.phone} error={errors.phone} required>
                    <input
                      dir="ltr"
                      className={`w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${phoneAlign}`}
                      placeholder={f.contact.placeholders.phone}
                      value={(data.phone as string) ?? ""}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </Field>
                  <Field label={f.contact.email} error={errors.email} required>
                    <input
                      dir="ltr"
                      type="email"
                      className={`w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${phoneAlign}`}
                      placeholder={f.contact.placeholders.email}
                      value={(data.email as string) ?? ""}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </Field>
                  <Field label={f.contact.telegram} error={errors.telegram}>
                    <input
                      dir="ltr"
                      className={`w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${phoneAlign}`}
                      placeholder={f.contact.placeholders.telegram}
                      value={(data.telegram as string) ?? ""}
                      onChange={(e) => set("telegram", e.target.value)}
                    />
                  </Field>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-gold/10">
                <button
                  type="button"
                  onClick={prev}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 rounded-xl border border-gold/30 px-5 py-2.5 text-sm font-semibold text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gold/10"
                >
                  <PrevIcon className="h-4 w-4" />
                  {f.buttons.prev}
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-2.5 text-sm font-bold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition disabled:opacity-60"
                >
                  {step === 3 ? (
                    <>
                      {submitting ? f.buttons.submitting : f.buttons.submit}
                      <Send className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      {f.buttons.next}
                      <NextIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
