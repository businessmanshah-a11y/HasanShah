// app/workshop/vibe-coding-28khordad/config.ts

export const EVENT = {
  title: "کارگاه وایب‌کدینگ",
  titleEn: "Vibe Coding Workshop",
  date: "۲۸ خرداد ۱۴۰۴",
  location: "تهران",
  durationHours: 3,
  attendeeCount: 24,
  topicCount: 6,
  aparatEmbedUrl: "https://www.aparat.com/video/YOUR_VIDEO_ID",
  // تاریخ باز شدن بخش پیگیری — ۲۸ تیر ۱۴۰۴ = 2025-07-19
  followupUnlockDate: new Date("2025-07-19"),
};

export const AGENDA: { time: string; topic: string }[] = [
  { time: "۱۴:۰۰", topic: "چرا باید مهارت جدیدی یاد بگیریم؟" },
  { time: "۱۴:۱۵", topic: "ذهنیت مهم‌تر از دانش فنیه" },
  { time: "۱۴:۳۰", topic: "وایب‌کدینگ یعنی چه؟" },
  { time: "۱۴:۴۵", topic: "ابزارها: Cursor، Claude، OpenAI، OpenRouter" },
  { time: "۱۵:۱۵", topic: "پیش‌تولید ۱ و ۲: ایده‌پردازی و سند معماری" },
  { time: "۱۵:۴۵", topic: "پیش‌تولید ۳ و ۴: طراحی ظاهر و تصمیمات فنی" },
  { time: "۱۶:۱۵", topic: "پیش‌تولید ۵: میلستون‌ها" },
  { time: "۱۶:۳۰", topic: "اینو ساختیم — نمایش محصول زنده" },
  { time: "۱۷:۰۰", topic: "پرسش و پاسخ آزاد" },
];

// هدیه پس از ثبت نظر
export const COMMENT_GIFT = {
  code: "VIBECODING28",           // کد تخفیف
  shopUrl: "https://example.com", // لینک سایت خرید — جایگزین کن
  description: "۲۰٪ تخفیف اکانت هوش مصنوعی (ChatGPT / Gemini / Cursor)",
};

// بعد از دیپلوی Apps Script، این رو آپدیت کن
export const SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";
