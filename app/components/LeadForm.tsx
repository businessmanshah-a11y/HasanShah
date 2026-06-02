"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Send, Sparkles, Upload } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "../hooks/use-reveal";
import {
  businessTypes,
  hasSiteOptions,
  instagramLossOptions,
  competitorIncomeOptions,
  whyNowOptions,
  ageRangeOptions,
  audienceLocationOptions,
  expectedIncomeOptions,
  hasLogoOptions,
  palettePresets,
  vibesOptions,
  mainGoalOptions,
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
} from "../lib/form-schema";

type Data = Record<string, unknown>;

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
  placeholder = "انتخاب کن...",
}: {
  name: string;
  options: readonly string[];
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <select
        name={name}
        dir="rtl"
        value={value ?? ""}
        onChange={(e) => e.target.value && onChange(e.target.value)}
        className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/20 appearance-none cursor-pointer transition pl-10 ${
          value
            ? "border-gold/40 text-foreground focus:border-gold"
            : "border-gold/15 text-muted-foreground focus:border-gold"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#0d0d0d] text-foreground">
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" />
    </div>
  );
}

const steps = [
  { num: 1, title: "اطلاعات اولیه" },
  { num: 2, title: "روانشناختی" },
  { num: 3, title: "مخاطب و بازار" },
  { num: 4, title: "هویت بصری" },
];

export default function LeadForm() {
  const ref = useReveal<HTMLDivElement>();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>({ vibes: [] });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submittedRef = useRef(false);

  const set = (k: string, v: unknown) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const toggleVibe = (v: string) => {
    const cur = (data.vibes as string[]) ?? [];
    const next =
      cur.includes(v)
        ? cur.filter((x) => x !== v)
        : cur.length >= 4
        ? cur
        : [...cur, v];
    set("vibes", next);
  };

  const validate = () => {
    const schemas = [step1Schema, step2Schema, step3Schema, step4Schema];
    const res = schemas[step - 1].safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const issue of res.error.issues) errs[issue.path.join(".")] = issue.message;
      setErrors(errs);
      toast.error("لطفاً فیلدهای الزامی رو کامل کن");
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validate()) return;
    if (step < 4) setStep(step + 1);
    else submit();
  };

  const submit = async () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server error");
      setDone(true);
    } catch {
      submittedRef.current = false;
      toast.error("خطا در ارسال. لطفاً دوباره امتحان کن یا مستقیم تماس بگیر.");
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
              فرم دریافت <span className="text-gold">سایت رایگان</span>
            </h2>
            <p className="text-muted-foreground">
              چند سوال کوتاه تا تیم فنی ما بتواند سایت تک‌صفحه‌ای اختصاصی تو را
              تا ۷۲ ساعت روی دامنه آزمایشی آماده کند.
            </p>
          </div>

          {done ? (
            <div className="rounded-3xl border border-gold/30 bg-gradient-gold-soft p-10 text-center">
              <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <Sparkles className="h-8 w-8 text-gold-foreground" />
              </div>
              <h3 className="text-2xl font-black mb-3">پاسخ‌هات ثبت شد!</h3>
              <p className="text-muted-foreground leading-loose mb-6">
                ممنون که با حوصله جواب دادی. اطلاعاتت برای شروع طراحی سایت
                ثبت شد و از همان راه ارتباطی که وارد کردی، درباره تحویل نسخه
                آزمایشی و زمان‌بندی با تو هماهنگ می‌شویم.
              </p>
              <button
                onClick={() => {
                  setDone(false);
                  setStep(1);
                  setData({ vibes: [] });
                  submittedRef.current = false;
                }}
                className="rounded-xl border border-gold/40 px-6 py-2.5 text-sm text-gold hover:bg-gold/10"
              >
                ارسال یک فرم دیگه
              </button>
            </div>
          ) : (
            <div className="rounded-3xl border border-gold/20 bg-surface p-6 md:p-10 shadow-elegant">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  {steps.map((s) => (
                    <div
                      key={s.num}
                      className={`flex-1 text-center text-xs ${
                        s.num <= step ? "text-gold font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {s.title}
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
                  <Field label="اسم و نام خانوادگی" error={errors.fullName}>
                    <input
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="مثلاً: علی محمدی"
                      value={(data.fullName as string) ?? ""}
                      onChange={(e) => set("fullName", e.target.value)}
                    />
                  </Field>
                  <Field label="شماره تماس / آیدی تلگرام" error={errors.contact}>
                    <input
                      dir="ltr"
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-right"
                      placeholder="09120000000 یا @username"
                      value={(data.contact as string) ?? ""}
                      onChange={(e) => set("contact", e.target.value)}
                    />
                  </Field>
                  <Field label="نوع کسب‌وکارت چیه؟" error={errors.businessType}>
                    <Select
                      name="businessType"
                      options={businessTypes}
                      value={data.businessType as string}
                      onChange={(v) => set("businessType", v)}
                    />
                  </Field>
                  <Field
                    label="کسب‌وکارت رو در یکی دو جمله توضیح بده — چی می‌فروشی یا چه خدماتی ارائه می‌دی؟"
                    error={errors.businessDescription}
                  >
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder="مثلاً: فروش پوشاک زنانه آنلاین | کلینیک پوست و زیبایی | تدریس خصوصی ریاضی..."
                      value={(data.businessDescription as string) ?? ""}
                      onChange={(e) => set("businessDescription", e.target.value)}
                    />
                  </Field>
                  <Field label="الان سایت داری؟" error={errors.hasSite}>
                    <Select
                      name="hasSite"
                      options={hasSiteOptions}
                      value={data.hasSite as string}
                      onChange={(v) => set("hasSite", v)}
                    />
                  </Field>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <Field
                    label="اگر اینستاگرام چند روز در دسترس نباشد، فروش تو چقدر تحت تاثیر قرار می‌گیرد؟"
                    error={errors.instagramLoss}
                  >
                    <Select
                      name="instagramLoss"
                      options={instagramLossOptions}
                      value={data.instagramLoss as string}
                      onChange={(v) => set("instagramLoss", v)}
                    />
                  </Field>
                  <Field
                    label="فکر می‌کنی سایت برای رقبای جدی تو چه نقشی دارد؟"
                    error={errors.competitorIncome}
                  >
                    <Select
                      name="competitorIncome"
                      options={competitorIncomeOptions}
                      value={data.competitorIncome as string}
                      onChange={(v) => set("competitorIncome", v)}
                    />
                  </Field>
                  <Field
                    label="چرا تا الان سایت نداشتی (یا چی آوردت اینجا)؟"
                    error={errors.whyNow}
                  >
                    <Select
                      name="whyNow"
                      options={whyNowOptions}
                      value={data.whyNow as string}
                      onChange={(v) => set("whyNow", v)}
                    />
                  </Field>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <Field label="مشتریات بیشتر چه رده سنی‌ای هستن؟" error={errors.ageRange}>
                    <Select
                      name="ageRange"
                      options={ageRangeOptions}
                      value={data.ageRange as string}
                      onChange={(v) => set("ageRange", v)}
                    />
                  </Field>
                  <Field label="مشتری ایده‌آلت کجاست؟" error={errors.audienceLocation}>
                    <Select
                      name="audienceLocation"
                      options={audienceLocationOptions}
                      value={data.audienceLocation as string}
                      onChange={(v) => set("audienceLocation", v)}
                    />
                  </Field>
                  <Field
                    label="از سایت انتظار داری بیشتر روی کدام بازه فروش اثر بگذارد؟"
                    error={errors.expectedIncome}
                  >
                    <Select
                      name="expectedIncome"
                      options={expectedIncomeOptions}
                      value={data.expectedIncome as string}
                      onChange={(v) => set("expectedIncome", v)}
                    />
                  </Field>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="space-y-5">
                  <Field label="لوگو داری؟" error={errors.hasLogo}>
                    <Select
                      name="hasLogo"
                      options={hasLogoOptions}
                      value={data.hasLogo as string}
                      onChange={(v) => set("hasLogo", v)}
                    />
                    {data.hasLogo === "آره دارم" && (
                      <label className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-gold/30 bg-surface px-4 py-3 cursor-pointer hover:border-gold/50 transition">
                        <Upload className="h-4 w-4 text-gold/60 shrink-0" />
                        <span className="text-xs text-muted-foreground flex-1 truncate">
                          {(data.logoFileName as string) || "فایل لوگو را انتخاب کن..."}
                        </span>
                        <span className="rounded-lg bg-gradient-gold px-3 py-1.5 text-xs font-semibold text-gold-foreground shrink-0">
                          انتخاب
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => set("logoFileName", e.target.files?.[0]?.name ?? "")}
                        />
                      </label>
                    )}
                  </Field>

                  <Field label="پالت رنگی برند" error={errors.brandColor}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {palettePresets.map((p) => {
                        const active = data.brandColor === p.name;
                        return (
                          <button
                            type="button"
                            key={p.name}
                            onClick={() => set("brandColor", p.name)}
                            className={`rounded-xl border p-3 text-right transition ${
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
                            <div className="text-xs">{p.name}</div>
                          </button>
                        );
                      })}
                      {/* Other / custom color option */}
                      <button
                        type="button"
                        onClick={() => set("brandColor", "سایر")}
                        className={`rounded-xl border p-3 text-right transition flex flex-col justify-between ${
                          data.brandColor === "سایر"
                            ? "border-gold bg-gold/15 shadow-gold"
                            : "border-gold/15 bg-surface hover:border-gold/40"
                        }`}
                      >
                        <div className="flex gap-1.5 mb-2 items-center h-6">
                          <span className="text-lg leading-none text-muted-foreground">+</span>
                        </div>
                        <div className="text-xs text-muted-foreground">سایر (رنگ دلخواه)</div>
                      </button>
                    </div>
                    {data.brandColor === "سایر" && (
                      <input
                        className="mt-3 w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder="کد رنگ یا توضیح رنگ — مثلاً #2563eb یا آبی تیره و طلایی"
                        value={(data.customColor as string) ?? ""}
                        onChange={(e) => set("customColor", e.target.value)}
                      />
                    )}
                  </Field>

                  <Field
                    label="حس و حال سایتت چجوری باشه؟ (حداکثر ۴ تا)"
                    error={errors.vibes}
                  >
                    <div className="flex flex-wrap gap-2">
                      {vibesOptions.map((v) => {
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
                            {v}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field label="مهم‌ترین هدفت از داشتن سایت؟" error={errors.mainGoal}>
                    <Select
                      name="mainGoal"
                      options={mainGoalOptions}
                      value={data.mainGoal as string}
                      onChange={(v) => set("mainGoal", v)}
                    />
                  </Field>

                  <Field
                    label="وقتی سایت رایگانت روی دامنه آزمایشی آماده شد، اولین جایی که لینکش را استفاده می‌کنی کجاست؟"
                    error={errors.firstAction}
                  >
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder="مثلاً: لینک را در بیو اینستاگرام می‌گذارم یا برای مشتری‌های جدی می‌فرستم..."
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
                  <ArrowRight className="h-4 w-4" />
                  قبلی
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-2.5 text-sm font-bold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition disabled:opacity-60"
                >
                  {step === 4 ? (
                    <>
                      {submitting ? "در حال ارسال..." : "ارسال نهایی"}
                      <Send className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      مرحله بعد
                      <ArrowLeft className="h-4 w-4" />
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
