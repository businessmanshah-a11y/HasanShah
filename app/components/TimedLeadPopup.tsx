"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Globe, X, ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider";

export default function TimedLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { dir } = useI18n();

  useEffect(() => {
    // Only show on article and tutorial pages (/blog/...)
    const isArticlePage = Boolean(pathname?.startsWith("/blog"));
    if (!isArticlePage) return;

    // Check if user already dismissed or interacted with the popup in this session
    const isDismissed = sessionStorage.getItem("hasan_timed_popup_dismissed");
    if (isDismissed) return;

    const timer = setTimeout(() => {
      // Re-check in case user navigated away from articles during the 30 seconds
      if (!window.location.pathname.startsWith("/blog")) return;
      setIsOpen(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("hasan_timed_popup_dismissed", "true");
  }, []);

  const handleSelectPathway = (service: "vibecoding" | "website") => {
    sessionStorage.setItem("hasan_timed_popup_dismissed", "true");
    setIsOpen(false);
    router.push(`/contact?service=${service}`);
  };

  // Lock body scroll and prevent background swiping when popup is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const preventTouchScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };

    document.addEventListener("touchmove", preventTouchScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      document.removeEventListener("touchmove", preventTouchScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleDismiss]);

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 touch-none overscroll-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/80 backdrop-blur-md touch-none"
          />

          {/* Modal Card - Compact & Focused */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gold/30 bg-[#0d0d0d]/95 p-5 sm:p-6 text-foreground shadow-[0_0_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
          >
            {/* Subtle ambient gold accent */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gold/15 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              aria-label="بستن"
              className="absolute top-4 left-4 rounded-full border border-white/10 bg-white/5 p-1.5 text-muted-foreground hover:border-gold/40 hover:text-foreground transition"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="text-right pt-0.5 mb-4 pl-8">
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                چطور می‌تونم کمکتون کنم؟
              </h2>
            </div>

            {/* 2 Concise Pathway Buttons */}
            <div className="flex flex-col gap-2.5">
              {/* Pathway 1: Vibe Coding */}
              <button
                type="button"
                onClick={() => handleSelectPathway("vibecoding")}
                className="group flex items-center justify-between rounded-xl border border-gold/25 bg-surface/70 p-3 sm:p-3.5 text-right transition-all hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gold/15 text-gold group-hover:scale-105 transition-transform">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-gold transition-colors">
                      آموزش وایب‌کدینگ
                    </h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      ساخت نرم‌افزار و محصول با هوش مصنوعی
                    </p>
                  </div>
                </div>
                <ArrowIcon className="h-4 w-4 text-gold shrink-0 transition-transform group-hover:translate-x-[-3px]" />
              </button>

              {/* Pathway 2: Web Design */}
              <button
                type="button"
                onClick={() => handleSelectPathway("website")}
                className="group flex items-center justify-between rounded-xl border border-gold/25 bg-surface/70 p-3 sm:p-3.5 text-right transition-all hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gold/15 text-gold group-hover:scale-105 transition-transform">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-gold transition-colors">
                      درخواست طراحی سایت
                    </h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      طراحی وب‌سایت مدرن و لندینگ‌پیج
                    </p>
                  </div>
                </div>
                <ArrowIcon className="h-4 w-4 text-gold shrink-0 transition-transform group-hover:translate-x-[-3px]" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

