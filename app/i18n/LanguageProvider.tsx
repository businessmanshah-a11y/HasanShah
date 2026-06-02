"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  type Locale,
  LOCALE_STORAGE_KEY,
  dirOf,
  isLocale,
  matchLocale,
} from "./config";
import { dictionaries, type Dictionary } from "./dictionaries";

type I18nValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

function persist(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
  // 1 year, root path so the server layout can read it on the next request.
  document.cookie = `${LOCALE_STORAGE_KEY}=${locale};path=/;max-age=31536000;samesite=lax`;
}

function applyToDocument(locale: Locale) {
  const el = document.documentElement;
  el.lang = locale;
  el.dir = dirOf(locale);
}

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persist(next);
    applyToDocument(next);
  }, []);

  // On first mount, reconcile with the visitor's stored choice or browser language.
  // The server rendered `initialLocale` (from cookie, default fa); if this is a
  // first visit with no cookie, fall back to auto-detecting the browser language.
  useEffect(() => {
    let resolved: Locale | null = null;
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isLocale(stored)) resolved = stored;
    } catch {
      /* ignore */
    }
    if (!resolved) {
      const hasCookie = document.cookie
        .split("; ")
        .some((c) => c.startsWith(`${LOCALE_STORAGE_KEY}=`));
      resolved = hasCookie ? initialLocale : matchLocale(navigator.language);
    }
    if (resolved !== initialLocale) setLocale(resolved);
    else persist(resolved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: I18nValue = {
    locale,
    dir: dirOf(locale),
    t: dictionaries[locale],
    setLocale,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within a LanguageProvider");
  return ctx;
}
