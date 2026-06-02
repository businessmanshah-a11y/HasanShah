"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#about",     label: "درباره من" },
  { href: "#services",  label: "خدمات" },
  { href: "#portfolio", label: "نمونه‌کارها" },
  { href: "#offer",     label: "سایت رایگان" },
];

export default function Nav() {
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
        backdropFilter:       s ? "blur(18px) saturate(160%)" : "none",
        WebkitBackdropFilter: s ? "blur(18px) saturate(160%)" : "none",
        boxShadow: s
          ? "0 0 0 1px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.45)"
          : "none",
        transition:
          "top 600ms cubic-bezier(.4,0,.2,1), " +
          "width 600ms cubic-bezier(.4,0,.2,1), " +
          "border-radius 600ms cubic-bezier(.4,0,.2,1), " +
          "background 600ms cubic-bezier(.4,0,.2,1), " +
          "backdrop-filter 600ms cubic-bezier(.4,0,.2,1), " +
          "box-shadow 600ms cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          padding: s ? "10px 20px" : "16px 24px",
          transition: "padding 600ms cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="لوگو حسن شاهمرادی"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="hidden sm:block font-bold text-foreground text-base leading-none">
            حسن شاهمرادی
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

        {/* CTA */}
        <a
          href="#form"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-gold-foreground shadow-gold hover:opacity-90 transition-opacity shrink-0"
        >
          سایت رایگان
        </a>

        {/* Mobile burger */}
        <button
          aria-label="منو"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl rounded-b-2xl">
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
            <a
              href="#form"
              onClick={() => setOpen(false)}
              className="mt-3 text-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground"
            >
              سایت رایگان
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
