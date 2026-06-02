import { z } from "zod";

export const businessTypes = [
  "فروشگاه",
  "خدماتی",
  "استارتاپ",
  "پرسونال برند",
  "رستوران",
  "آموزشی",
  "دیگه",
] as const;

export const hasSiteOptions = ["آره دارم", "نه ندارم", "داشتم ولی فعال نیست"] as const;

export const instagramLossOptions = [
  "تقریباً هیچی، وابسته نیستم",
  "بین ۱ تا ۵ میلیون",
  "بین ۵ تا ۲۰ میلیون",
  "بیشتر از ۲۰ میلیون",
] as const;

export const competitorIncomeOptions = [
  "کمتر از ۱۰ میلیون",
  "بین ۱۰ تا ۵۰ میلیون",
  "بین ۵۰ تا ۲۰۰ میلیون",
  "بالای ۲۰۰ میلیون",
] as const;

export const whyNowOptions = [
  "تازه شروع کردم",
  "خسته شدم از وابستگی به اینستاگرام",
  "می‌خوام برند حرفه‌ای داشته باشم",
  "می‌خوام درآمدم رو چند برابر کنم",
] as const;

export const ageRangeOptions = [
  "زیر ۲۵ سال",
  "۲۵ تا ۳۵ سال",
  "۳۵ تا ۵۰ سال",
  "بالای ۵۰ سال",
  "متنوع",
] as const;

export const audienceLocationOptions = [
  "محلی (یک شهر)",
  "سراسر ایران",
  "خارج از کشور",
  "همه جا",
] as const;

export const expectedIncomeOptions = [
  "۵ تا ۲۰ میلیون",
  "۲۰ تا ۵۰ میلیون",
  "۵۰ تا ۱۰۰ میلیون",
  "بالای ۱۰۰ میلیون",
] as const;

export const hasLogoOptions = ["آره دارم", "نه ندارم", "دارم ولی نیاز به طراحی مجدد داره"] as const;

export const palettePresets = [
  { name: "طلایی-مشکی لوکس",     colors: ["#0a0a0a", "#d4af5f", "#1a1a1a"] },
  { name: "آبی-سفید اعتمادساز",   colors: ["#0f3a6e", "#3b82f6", "#ffffff"] },
  { name: "سبز-کرم طبیعی",        colors: ["#2d4a3e", "#a8c0a0", "#f5f0e8"] },
  { name: "قرمز-مشکی جسورانه",    colors: ["#0d0d0d", "#dc2626", "#fafafa"] },
  { name: "بنفش-صورتی مدرن",      colors: ["#1e1b4b", "#a855f7", "#ec4899"] },
  { name: "خاکستری-نارنجی گرم",   colors: ["#1f2937", "#f97316", "#f3f4f6"] },
];

export const vibesOptions = ["لوکس", "مدرن", "صمیمی", "جسورانه", "ساده", "اعتمادساز"];

export const mainGoalOptions = [
  "افزایش فروش",
  "جذب لید",
  "معرفی برند",
  "اعتمادسازی",
  "گرفتن نوبت/رزرو",
] as const;

export const step1Schema = z.object({
  fullName:     z.string().trim().min(2, "نام رو کامل وارد کن").max(100),
  contact:      z.string().trim().min(8, "شماره تماس یا آیدی تلگرام معتبر وارد کن").max(60),
  businessType: z.enum(businessTypes),
  hasSite:      z.enum(hasSiteOptions),
});

export const step2Schema = z.object({
  instagramLoss:     z.enum(instagramLossOptions),
  competitorIncome:  z.enum(competitorIncomeOptions),
  whyNow:            z.enum(whyNowOptions),
});

export const step3Schema = z.object({
  ageRange:          z.enum(ageRangeOptions),
  audienceLocation:  z.enum(audienceLocationOptions),
  expectedIncome:    z.enum(expectedIncomeOptions),
});

export const step4Schema = z.object({
  hasLogo:      z.enum(hasLogoOptions),
  logoFileName: z.string().optional(),
  brandColor:   z.string().min(1, "یک پالت انتخاب کن"),
  vibes:        z.array(z.string()).min(1, "حداقل یک حس انتخاب کن").max(4),
  mainGoal:     z.enum(mainGoalOptions),
  firstAction:  z.string().trim().min(3, "یک جمله کوتاه بنویس").max(300),
});

export const fullSchema = step1Schema
  .extend(step2Schema.shape)
  .extend(step3Schema.shape)
  .extend(step4Schema.shape);

export type FormData = z.infer<typeof fullSchema>;
