import { z } from "zod";

// Option values are stable, language-independent keys. The visible labels for
// each key live in the i18n dictionaries (form.options.*). On submit, LeadForm
// maps the selected keys to localized labels.

export const businessTypeKeys = ["shop", "service", "startup", "personal", "restaurant", "education", "other"] as const;
export const hasSiteKeys = ["yes", "no", "inactive"] as const;
export const instagramLossKeys = ["low", "some", "major", "critical"] as const;
export const competitorIncomeKeys = ["brand", "leads", "directSales", "trust"] as const;
export const whyNowKeys = ["justStarted", "tiredOfInsta", "professional", "organized"] as const;
export const ageRangeKeys = ["under25", "from25to35", "from35to50", "over50", "mixed"] as const;
export const audienceLocationKeys = ["local", "iran", "abroad", "everywhere"] as const;
export const expectedIncomeKeys = ["small", "leads", "orders", "big"] as const;
export const hasLogoKeys = ["yes", "no", "redesign"] as const;
export const vibesKeys = ["luxury", "modern", "friendly", "bold", "simple", "trust"] as const;
export const mainGoalKeys = ["sales", "leads", "brand", "trust", "booking"] as const;

/** Custom-color sentinel for the brand palette field. */
export const OTHER_COLOR = "other";

export const palettePresets: { key: string; colors: string[] }[] = [
  { key: "luxGoldBlack", colors: ["#0a0a0a", "#d4af5f", "#1a1a1a"] },
  { key: "blueWhite", colors: ["#0f3a6e", "#3b82f6", "#ffffff"] },
  { key: "greenCream", colors: ["#2d4a3e", "#a8c0a0", "#f5f0e8"] },
  { key: "redBlack", colors: ["#0d0d0d", "#dc2626", "#fafafa"] },
  { key: "purplePink", colors: ["#1e1b4b", "#a855f7", "#ec4899"] },
  { key: "grayOrange", colors: ["#1f2937", "#f97316", "#f3f4f6"] },
];

/** Localized validation messages, supplied from the active dictionary. */
export type FormErrors = {
  required: string;
  fullName: string;
  contact: string;
  businessDescription: string;
  brandColor: string;
  vibes: string;
  firstAction: string;
};

/** Build the per-step Zod schemas with localized error messages. */
export function getStepSchemas(errs: FormErrors) {
  const step1 = z.object({
    fullName: z.string().trim().min(2, errs.fullName).max(100),
    contact: z.string().trim().min(8, errs.contact).max(60),
    businessType: z.enum(businessTypeKeys, { error: errs.required }),
    businessDescription: z.string().trim().min(5, errs.businessDescription).max(500),
    hasSite: z.enum(hasSiteKeys, { error: errs.required }),
  });

  const step2 = z.object({
    instagramLoss: z.enum(instagramLossKeys, { error: errs.required }),
    competitorIncome: z.enum(competitorIncomeKeys, { error: errs.required }),
    whyNow: z.enum(whyNowKeys, { error: errs.required }),
  });

  const step3 = z.object({
    ageRange: z.enum(ageRangeKeys, { error: errs.required }),
    audienceLocation: z.enum(audienceLocationKeys, { error: errs.required }),
    expectedIncome: z.enum(expectedIncomeKeys, { error: errs.required }),
  });

  const step4 = z.object({
    hasLogo: z.enum(hasLogoKeys, { error: errs.required }),
    logoFileName: z.string().optional(),
    brandColor: z.string().min(1, errs.brandColor),
    customColor: z.string().optional(),
    vibes: z.array(z.string()).min(1, errs.vibes).max(4),
    mainGoal: z.enum(mainGoalKeys, { error: errs.required }),
    firstAction: z.string().trim().min(3, errs.firstAction).max(300),
  });

  return [step1, step2, step3, step4] as const;
}
