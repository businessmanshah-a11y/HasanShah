"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#about",     label: "درباره من" },
  { href: "#services",  label: "خدمات" },
  { href: "#portfolio", label: "نمونه‌کارها" },
  { href: "#offer",     label: "سایت رایگان" },
  { href: "#contact",   label: "تماس" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-gold/15 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="لوگو حسن شاهمرادی"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="hidden sm:block font-bold text-foreground text-lg">
            حسن شاهمرادی
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#form"
          className="hidden md:inline-flex items-center justify-center rounded-xl bg-gradient-gold px-5 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition hover:opacity-90"
        >
          سایت رایگان
        </a>

        <button
          aria-label="منو"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-gold"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 border-t border-gold/15 bg-background/95 backdrop-blur">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#form"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-xl bg-gradient-gold px-5 py-2.5 font-semibold text-gold-foreground"
            >
              سایت رایگان
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
