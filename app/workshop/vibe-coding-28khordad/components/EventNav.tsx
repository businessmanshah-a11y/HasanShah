"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogIn, LogOut, User } from "lucide-react";

interface Props {
  userName: string | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

const NAV_LINKS = [
  { href: "#video", label: "ویدیو" },
  { href: "#agenda", label: "سرفصل" },
  { href: "#presentation", label: "پرزنتیشن" },
  { href: "#attendees", label: "شرکت‌کنندگان" },
  { href: "#comments", label: "نظرات" },
  { href: "#followup", label: "پیگیری" },
];

export default function EventNav({ userName, onLoginClick, onLogout }: Props) {
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
        top:          s ? "16px" : "0px",
        width:        s ? "min(96vw, 1080px)" : "100%",
        transform:    "translateX(-50%)",
        borderRadius: s ? "9999px" : "0px",
        background:   s ? "rgba(10, 10, 10, 0.55)" : "transparent",
        backdropFilter:       s ? "blur(8px)" : "none",
        WebkitBackdropFilter: s ? "blur(8px)" : "none",
        boxShadow: s ? "0 0 0 1px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.45)" : "none",
        willChange: "transform",
        transition: "top 300ms ease, width 300ms ease, border-radius 350ms ease, background 300ms ease, box-shadow 300ms ease",
      }}
    >
      <div
        className="flex items-center justify-between"
        dir="rtl"
        style={{
          padding: s ? "10px 20px" : "16px 24px",
          background:           open ? "rgba(0,0,0,0.7)" : "transparent",
          backdropFilter:       open ? "blur(8px)" : "none",
          WebkitBackdropFilter: open ? "blur(8px)" : "none",
          transition: "padding 300ms ease, background 200ms ease",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/logo.webp`}
            alt="حسن شاهمرادی"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="hidden sm:block font-bold text-foreground text-base leading-none">
            کارگاه وایب‌کدینگ
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/45 hover:text-white/90 transition-colors duration-200 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Auth + burger */}
        <div className="flex items-center gap-2 shrink-0">
          {userName ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:flex items-center gap-1 text-xs text-gold">
                <User className="w-3.5 h-3.5" />
                {userName}
              </span>
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50 hover:text-white/80 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                خروج
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-gold-foreground shadow-gold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <LogIn className="w-3.5 h-3.5" />
              ورود
            </button>
          )}

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
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl rounded-b-2xl shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
          <nav className="flex flex-col gap-1 px-5 py-5" dir="rtl">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            {userName && (
              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-gold">
                  <User className="w-3.5 h-3.5" />
                  {userName}
                </span>
                <button onClick={() => { onLogout(); setOpen(false); }} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                  خروج
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
