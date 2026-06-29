import { z } from "zod";

export type ServiceType = "website" | "app" | "vibecoding" | "startup";

export const siteSubTypeKeys = ["shop", "service", "landing", "personal"] as const;
export const hasSiteKeys = ["no", "yes", "inactive"] as const;
export const platformKeys = ["web", "android", "ios", "all"] as const;
export const appStatusKeys = ["idea", "designed", "mvp"] as const;
export const levelKeys = ["beginner", "familiar", "intermediate"] as const;
export const formatKeys = ["private", "group", "workshop"] as const;
export const stageKeys = ["idea", "developing", "mvp", "launched"] as const;
export const needKeys = ["tech", "strategy", "both"] as const;
export const budgetKeys = ["unknown", "under5", "from5to15", "from15to50", "over50"] as const;
export const timelineKeys = ["asap", "twoWeeks", "oneMonth", "twoThreeMonths", "flexible"] as const;

export type ConsultErrors = {
  required: string;
  name: string;
  phone: string;
  email: string;
  description: string;
};

export function getConsultSchemas(errs: ConsultErrors) {
  const contactSchema = z.object({
    name: z.string().trim().min(2, errs.name).max(100),
    phone: z.string().trim().min(8, errs.phone).max(20),
    email: z.string().trim().email(errs.email),
    telegram: z.string().trim().max(60).optional(),
  });

  const websiteSchema = z.object({
    siteSubType: z.enum(siteSubTypeKeys, { error: errs.required }),
    businessDescription: z.string().trim().min(5, errs.description).max(500),
    hasSite: z.enum(hasSiteKeys, { error: errs.required }),
    siteUrl: z.string().trim().max(200).optional(),
    budget: z.enum(budgetKeys, { error: errs.required }),
    timeline: z.enum(timelineKeys, { error: errs.required }),
  });

  const appSchema = z.object({
    platforms: z.array(z.enum(platformKeys)).min(1, errs.required),
    appIdea: z.string().trim().min(5, errs.description).max(500),
    appStatus: z.enum(appStatusKeys, { error: errs.required }),
    budget: z.enum(budgetKeys, { error: errs.required }),
    timeline: z.enum(timelineKeys, { error: errs.required }),
  });

  const vibecodingSchema = z.object({
    level: z.enum(levelKeys, { error: errs.required }),
    buildGoal: z.string().trim().min(5, errs.description).max(500),
    format: z.enum(formatKeys, { error: errs.required }),
  });

  const startupSchema = z.object({
    startupIdea: z.string().trim().min(5, errs.description).max(500),
    stage: z.enum(stageKeys, { error: errs.required }),
    need: z.enum(needKeys, { error: errs.required }),
    budget: z.enum(budgetKeys, { error: errs.required }),
  });

  return { contactSchema, websiteSchema, appSchema, vibecodingSchema, startupSchema };
}
