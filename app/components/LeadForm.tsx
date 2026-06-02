"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Send, Sparkles, Upload } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "../hooks/use-reveal";
import { useI18n } from "../i18n/LanguageProvider";
import { Highlight } from "../i18n/Highlight";
import {
  businessTypeKeys,
  hasSiteKeys,
  instagramLossKeys,
  competitorIncomeKeys,
  whyNowKeys,
  ageRangeKeys,
  audienceLocationKeys,
  expectedIncomeKeys,
  hasLogoKeys,
  vibesKeys,
  mainGoalKeys,
  palettePresets,
  getStepSchemas,
  OTHER_COLOR,
} from "../lib/form-schema";

type Data = Record<string, unknown>;
type Option = { value: string; label: string };

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-foreground">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({
  name,
  options,
  value,
  onChange,
  placeholder,
}: {
  name: string;
  options: Option[];
  value?: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value ?? ""}
        onChange={(e) => e.target.value && onChange(e.target.value)}
        className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/20 appearance-none cursor-pointer transition pe-10 ${
          value
            ? "border-gold/40 text-foreground focus:border-gold"
            : "border-gold/15 text-muted-foreground focus:border-gold"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#0d0d0d] text-foreground">
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" />
    </div>
  );
}

export default function LeadForm() {
  const ref = useReveal<HTMLDivElement>();
  const { t, locale, dir } = useI18n();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>({ vibes: [] });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submittedRef = useRef(false);

  const opt = t.form.options;
  const PrevIcon = dir === "rtl" ? ArrowRight : ArrowLeft;
  const NextIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const phoneAlign = dir === "rtl" ? "text-right" : "text-left";

  const toOptions = (
    keys: readonly string[],
    labels: Record<string, string>
  ): Option[] => keys.map((k) => ({ value: k, label: labels[k] }));

  const set = (k: string, v: unknown) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const toggleVibe = (v: string) => {
    const cur = (data.vibes as string[]) ?? [];
    const next = cur.includes(v)
      ? cur.filter((x) => x !== v)
      : cur.length >= 4
      ? cur
      : [...cur, v];
    set("vibes", next);
  };

  const validate = () => {
    const schemas = getStepSchemas(t.form.errors);
    const res = schemas[step - 1].safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const issue of res.error.issues) errs[issue.path.join(".")] = issue.message;
      setErrors(errs);
      toast.error(t.form.toasts.incomplete);
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validate()) return;
    if (step < 4) setStep(step + 1);
    else submit();
  };

  // Resolve the selected keys to the labels the user actually saw, so the lead
  // is stored in their chosen language. `lang` records which language that is.
  const localizedPayload = () => {
    const brandColorKey = data.brandColor as string | undefined;
    const brandColorLabel =
      brandColorKey === OTHER_COLOR
        ? ((data.customColor as string) || t.form.color.otherShort)
        : brandColorKey
        ? opt.palettes[brandColorKey as keyof typeof opt.palettes]
        : "";
    const vibeLabels = ((data.vibes as string[]) ?? []).map(
      (v) => opt.vibes[v as keyof typeof opt.vibes]
    );

    return {
      lang: locale,
      fullName: data.fullName ?? "",
      contact: data.contact ?? "",
      businessType: data.businessType ? opt.businessType[data.businessType as keyof typeof opt.businessType] : "",
      businessDescription: data.businessDescription ?? "",
      hasSite: data.hasSite ? opt.hasSite[data.hasSite as keyof typeof opt.hasSite] : "",
      siteUrl: data.siteUrl ?? "",
      instagramLoss: data.instagramLoss ? opt.instagramLoss[data.instagramLoss as keyof typeof opt.instagramLoss] : "",
      competitorIncome: data.competitorIncome ? opt.competitorIncome[data.competitorIncome as keyof typeof opt.competitorIncome] : "",
      whyNow: data.whyNow ? opt.whyNow[data.whyNow as keyof typeof opt.whyNow] : "",
      ageRange: data.ageRange ? opt.ageRange[data.ageRange as keyof typeof opt.ageRange] : "",
      audienceLocation: data.audienceLocation ? opt.audienceLocation[data.audienceLocation as keyof typeof opt.audienceLocation] : "",
      expectedIncome: data.expectedIncome ? opt.expectedIncome[data.expectedIncome as keyof typeof opt.expectedIncome] : "",
      hasLogo: data.hasLogo ? opt.hasLogo[data.hasLogo as keyof typeof opt.hasLogo] : "",
      logoFileName: data.logoFileName ?? "",
      logoBase64: data.logoBase64 ?? "",
      brandColor: brandColorLabel,
      vibes: vibeLabels,
      mainGoal: data.mainGoal ? opt.mainGoal[data.mainGoal as keyof typeof opt.mainGoal] : "",
      firstAction: data.firstAction ?? "",
    };
  };

  const submit = async () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(localizedPayload()),
      });
      if (!res.ok) throw new Error("server error");
      setDone(true);
    } catch {
      submittedRef.current = false;
      toast.error(t.form.toasts.error);
    } finally {
      setSubmitting(false);
    }
  };

  const progress = (step / 4) * 100;

  return (
    <section id="form" className="relative py-20 md:py-28 bg-surface/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <Highlight text={t.form.title} />
            </h2>
            <p className="text-muted-foreground">{t.form.subtitle}</p>
          </div>

          {done ? (
            <div className="rounded-3xl border border-gold/30 bg-gradient-gold-soft p-10 text-center">
              <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <Sparkles className="h-8 w-8 text-gold-foreground" />
              </div>
              <h3 className="text-2xl font-black mb-3">{t.form.done.title}</h3>
              <p className="text-muted-foreground leading-loose mb-6">{t.form.done.desc}</p>
              <button
                onClick={() => {
                  setDone(false);
                  setStep(1);
                  setData({ vibes: [] });
                  submittedRef.current = false;
                }}
                className="rounded-xl border border-gold/40 px-6 py-2.5 text-sm text-gold hover:bg-gold/10"
              >
                {t.form.done.again}
              </button>
            </div>
          ) : (
            <div className="rounded-3xl border border-gold/20 bg-surface p-6 md:p-10 shadow-elegant">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  {t.form.steps.map((title, i) => (
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

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <Field label={t.form.labels.fullName} error={errors.fullName}>
                    <input
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder={t.form.placeholders.fullName}
                      value={(data.fullName as string) ?? ""}
                      onChange={(e) => set("fullName", e.target.value)}
                    />
                  </Field>
                  <Field label={t.form.labels.contact} error={errors.contact}>
                    <input
                      dir="ltr"
                      className={`w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${phoneAlign}`}
                      placeholder={t.form.placeholders.contact}
                      value={(data.contact as string) ?? ""}
                      onChange={(e) => set("contact", e.target.value)}
                    />
                  </Field>
                  <Field label={t.form.labels.businessType} error={errors.businessType}>
                    <Select
                      name="businessType"
                      options={toOptions(businessTypeKeys, opt.businessType)}
                      value={data.businessType as string}
                      onChange={(v) => set("businessType", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                  </Field>
                  <Field label={t.form.labels.businessDescription} error={errors.businessDescription}>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder={t.form.placeholders.businessDescription}
                      value={(data.businessDescription as string) ?? ""}
                      onChange={(e) => set("businessDescription", e.target.value)}
                    />
                  </Field>
                  <Field label={t.form.labels.hasSite} error={errors.hasSite}>
                    <Select
                      name="hasSite"
                      options={toOptions(hasSiteKeys, opt.hasSite)}
                      value={data.hasSite as string}
                      onChange={(v) => set("hasSite", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                    {(data.hasSite === "yes" || data.hasSite === "inactive") && (
                      <input
                        dir="ltr"
                        className={`mt-3 w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${phoneAlign}`}
                        placeholder={t.form.placeholders.siteUrl}
                        value={(data.siteUrl as string) ?? ""}
                        onChange={(e) => set("siteUrl", e.target.value)}
                      />
                    )}
                  </Field>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <Field label={t.form.labels.instagramLoss} error={errors.instagramLoss}>
                    <Select
                      name="instagramLoss"
                      options={toOptions(instagramLossKeys, opt.instagramLoss)}
                      value={data.instagramLoss as string}
                      onChange={(v) => set("instagramLoss", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                  </Field>
                  <Field label={t.form.labels.competitorIncome} error={errors.competitorIncome}>
                    <Select
                      name="competitorIncome"
                      options={toOptions(competitorIncomeKeys, opt.competitorIncome)}
                      value={data.competitorIncome as string}
                      onChange={(v) => set("competitorIncome", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                  </Field>
                  <Field label={t.form.labels.whyNow} error={errors.whyNow}>
                    <Select
                      name="whyNow"
                      options={toOptions(whyNowKeys, opt.whyNow)}
                      value={data.whyNow as string}
                      onChange={(v) => set("whyNow", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                  </Field>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <Field label={t.form.labels.ageRange} error={errors.ageRange}>
                    <Select
                      name="ageRange"
                      options={toOptions(ageRangeKeys, opt.ageRange)}
                      value={data.ageRange as string}
                      onChange={(v) => set("ageRange", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                  </Field>
                  <Field label={t.form.labels.audienceLocation} error={errors.audienceLocation}>
                    <Select
                      name="audienceLocation"
                      options={toOptions(audienceLocationKeys, opt.audienceLocation)}
                      value={data.audienceLocation as string}
                      onChange={(v) => set("audienceLocation", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                  </Field>
                  <Field label={t.form.labels.expectedIncome} error={errors.expectedIncome}>
                    <Select
                      name="expectedIncome"
                      options={toOptions(expectedIncomeKeys, opt.expectedIncome)}
                      value={data.expectedIncome as string}
                      onChange={(v) => set("expectedIncome", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                  </Field>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="space-y-5">
                  <Field label={t.form.labels.hasLogo} error={errors.hasLogo}>
                    <Select
                      name="hasLogo"
                      options={toOptions(hasLogoKeys, opt.hasLogo)}
                      value={data.hasLogo as string}
                      onChange={(v) => set("hasLogo", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                    {data.hasLogo === "yes" && (
                      <label className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-gold/30 bg-surface px-4 py-3 cursor-pointer hover:border-gold/50 transition">
                        <Upload className="h-4 w-4 text-gold/60 shrink-0" />
                        <span className="text-xs text-muted-foreground flex-1 truncate">
                          {(data.logoFileName as string) || t.form.logo.choose}
                        </span>
                        <span className="rounded-lg bg-gradient-gold px-3 py-1.5 text-xs font-semibold text-gold-foreground shrink-0">
                          {t.form.logo.pick}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            set("logoFileName", file.name);
                            const reader = new FileReader();
                            reader.onload = () => set("logoBase64", reader.result as string);
                            reader.readAsDataURL(file);
                          }}
                        />
                      </label>
                    )}
                  </Field>

                  <Field label={t.form.labels.brandColor} error={errors.brandColor}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {palettePresets.map((p) => {
                        const active = data.brandColor === p.key;
                        return (
                          <button
                            type="button"
                            key={p.key}
                            onClick={() => set("brandColor", p.key)}
                            className={`rounded-xl border p-3 text-start transition ${
                              active
                                ? "border-gold bg-gold/15 shadow-gold"
                                : "border-gold/15 bg-surface hover:border-gold/40"
                            }`}
                          >
                            <div className="flex gap-1.5 mb-2">
                              {p.colors.map((c) => (
                                <span
                                  key={c}
                                  className="h-6 w-6 rounded-full border border-white/10"
                                  style={{ background: c }}
                                />
                              ))}
                            </div>
                            <div className="text-xs">
                              {opt.palettes[p.key as keyof typeof opt.palettes]}
                            </div>
                          </button>
                        );
                      })}
                      {/* Other / custom color option */}
                      <button
                        type="button"
                        onClick={() => set("brandColor", OTHER_COLOR)}
                        className={`rounded-xl border p-3 text-start transition flex flex-col justify-between ${
                          data.brandColor === OTHER_COLOR
                            ? "border-gold bg-gold/15 shadow-gold"
                            : "border-gold/15 bg-surface hover:border-gold/40"
                        }`}
                      >
                        <div className="flex gap-1.5 mb-2 items-center h-6">
                          <span className="text-lg leading-none text-muted-foreground">+</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{t.form.color.otherTitle}</div>
                      </button>
                    </div>
                    {data.brandColor === OTHER_COLOR && (
                      <input
                        className="mt-3 w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder={t.form.placeholders.customColor}
                        value={(data.customColor as string) ?? ""}
                        onChange={(e) => set("customColor", e.target.value)}
                      />
                    )}
                  </Field>

                  <Field label={t.form.labels.vibes} error={errors.vibes}>
                    <div className="flex flex-wrap gap-2">
                      {vibesKeys.map((v) => {
                        const active = ((data.vibes as string[]) ?? []).includes(v);
                        return (
                          <button
                            type="button"
                            key={v}
                            onClick={() => toggleVibe(v)}
                            className={`rounded-xl border px-4 py-2 text-sm transition ${
                              active
                                ? "border-gold bg-gradient-gold text-gold-foreground"
                                : "border-gold/20 text-muted-foreground hover:border-gold/50"
                            }`}
                          >
                            {opt.vibes[v]}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field label={t.form.labels.mainGoal} error={errors.mainGoal}>
                    <Select
                      name="mainGoal"
                      options={toOptions(mainGoalKeys, opt.mainGoal)}
                      value={data.mainGoal as string}
                      onChange={(v) => set("mainGoal", v)}
                      placeholder={t.form.selectPlaceholder}
                    />
                  </Field>

                  <Field label={t.form.labels.firstAction} error={errors.firstAction}>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder={t.form.placeholders.firstAction}
                      value={(data.firstAction as string) ?? ""}
                      onChange={(e) => set("firstAction", e.target.value)}
                    />
                  </Field>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-gold/10">
                <button
                  type="button"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 rounded-xl border border-gold/30 px-5 py-2.5 text-sm font-semibold text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gold/10"
                >
                  <PrevIcon className="h-4 w-4" />
                  {t.form.buttons.prev}
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-2.5 text-sm font-bold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition disabled:opacity-60"
                >
                  {step === 4 ? (
                    <>
                      {submitting ? t.form.buttons.submitting : t.form.buttons.submit}
                      <Send className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      {t.form.buttons.next}
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
