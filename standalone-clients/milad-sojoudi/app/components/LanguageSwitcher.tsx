"use client";
import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider";
import { locales, localeNames, LOCALE_STORAGE_KEY } from "../i18n/config";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (!localStorage.getItem(LOCALE_STORAGE_KEY)) {
        const t = setTimeout(() => setOpen(true), 700);
        return () => clearTimeout(t);
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={localeNames[locale]}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-white/70 transition-colors hover:border-gold/50 hover:text-gold"
      >
        <Globe className="h-3.5 w-3.5 shrink-0" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
      </button>

      {open && (
        <div className="absolute end-0 z-50 mt-2 min-w-36 overflow-hidden rounded-2xl border border-gold/20 bg-black/85 backdrop-blur-xl shadow-elegant">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors ${
                l === locale ? "text-gold" : "text-white/70 hover:bg-gold/10 hover:text-white"
              }`}
            >
              {localeNames[l]}
              {l === locale && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
