"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useI18n();
  const links = [
    { href: "/vibe-coding", label: "آموزش وایب‌کدینگ" },
    { href: "#about",     label: t.nav.about },
    { href: "#services",  label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#form",      label: t.nav.contact },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const s = scrolled && !open;

  return (
    <header
      className="fixed left-1/2 z-50"
      style={{
        top:          s ? "16px"  : "0px",
        width:        s ? "min(92vw, 760px)" : "100%",
        transform:    "translateX(-50%)",
        borderRadius: s ? "9999px" : "0px",
        background:   s
          ? "rgba(10, 10, 10, 0.55)"
          : "transparent",
        backdropFilter:       s ? "blur(8px)" : "none",
        WebkitBackdropFilter: s ? "blur(8px)" : "none",
        boxShadow: s
          ? "0 0 0 1px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.45)"
          : "none",
        willChange: "transform",
        transition:
          "top 300ms ease, " +
          "width 300ms ease, " +
          "border-radius 350ms ease, " +
          "background 300ms ease, " +
          "box-shadow 300ms ease",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          padding: s ? "10px 20px" : "16px 24px",
          background:            open ? "rgba(0, 0, 0, 0.7)" : "transparent",
          backdropFilter:        open ? "blur(8px)" : "none",
          WebkitBackdropFilter:  open ? "blur(8px)" : "none",
          transition: "padding 300ms ease, background 200ms ease",
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo.webp`}
            alt={t.brand.name}
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="hidden sm:block font-bold text-foreground text-base leading-none">
            {t.brand.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/45 hover:text-white/90 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + language + burger — always visible in the header */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher />
          <a
            href="#form"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-4 py-2 text-xs sm:text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t.nav.cta}
          </a>

          {/* Mobile burger */}
          <button
            aria-label={t.nav.menu}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden -me-1 p-2 text-white/60 hover:text-white transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <path d="M6 6l12 12M6 18L18 6" />
                : <path d="M4 7h16M4 12h16M4 17h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl rounded-b-2xl shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
          <nav className="flex flex-col gap-1 px-5 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
