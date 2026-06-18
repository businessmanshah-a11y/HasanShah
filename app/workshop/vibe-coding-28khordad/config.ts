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
  { time: "۱۴:۰۰", topic: "معرفی وایب‌کدینگ و هوش مصنوعی" },
  { time: "۱۴:۴۵", topic: "دمو زنده: ساخت لندینگ در ۳۰ دقیقه" },
  { time: "۱۵:۳۰", topic: "ابزارها: Cursor، Claude، Codex" },
  { time: "۱۵:۵۵", topic: "پرامپت‌نویسی برای ساخت محصول" },
  { time: "۱۶:۳۰", topic: "نمایش پروژه‌های شرکت‌کنندگان" },
  { time: "۱۷:۰۰", topic: "پرسش و پاسخ آزاد" },
];

// بعد از دیپلوی Apps Script، این رو آپدیت کن
export const SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";
