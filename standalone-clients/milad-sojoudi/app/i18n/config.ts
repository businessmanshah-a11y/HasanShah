export const locales = ["fa"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

/** Cookie + localStorage key used to persist the visitor's language choice. */
export const LOCALE_STORAGE_KEY = "lang";

/** Reading direction for each locale. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function dirOf(_locale: Locale): "rtl" | "ltr" {
  return "rtl";
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/**
 * Resolve a BCP-47 browser language (e.g. "en-US", "fa", "ar-EG") to one of our
 * supported locales, falling back to the default.
 */
export function matchLocale(navLang: string | undefined | null): Locale {
  if (!navLang) return defaultLocale;
  const base = navLang.toLowerCase().split("-")[0];
  return isLocale(base) ? base : defaultLocale;
}

/** Locale-aware number formatting. Persian uses its own digits; en/ar use Western digits. */
export function formatNum(n: number, locale: Locale): string {
  return locale === "fa" ? n.toLocaleString("fa-IR") : String(n);
}

/** Native display name for each language, used in the switcher. */
export const localeNames: Record<Locale, string> = {
  fa: "فارسی",
};
