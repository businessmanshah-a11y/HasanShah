"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Globe, Sparkles, X, ArrowLeft, ArrowRight } from "lucide-react";
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

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasan_timed_popup_dismissed", "true");
  };

  const handleSelectPathway = (service: "vibecoding" | "website") => {
    sessionStorage.setItem("hasan_timed_popup_dismissed", "true");
    setIsOpen(false);
    router.push(`/contact?service=${service}`);
  };

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-gold/30 bg-[#0d0d0d]/95 p-6 sm:p-8 text-foreground shadow-[0_0_60px_rgba(212,175,55,0.2)] backdrop-blur-2xl"
          >
            {/* Ambient gold glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              aria-label="بستن"
              className="absolute top-5 left-5 sm:top-6 sm:left-6 rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground hover:border-gold/40 hover:text-foreground transition"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="text-center space-y-2 mb-6 sm:mb-8 pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>مشاوره و هدایت اختصاصی</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                دنبال چه هدفی در دنیای هوش مصنوعی و وب هستید؟
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                مسیر مورد نظر خود را انتخاب کنید تا مستقیماً به فرم مربوطه هدایت شوید:
              </p>
            </div>

            {/* 2 Choice Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pathway 1: Vibe Coding */}
              <button
                type="button"
                onClick={() => handleSelectPathway("vibecoding")}
                className="group relative flex flex-col justify-between rounded-2xl border border-gold/25 bg-gradient-to-b from-surface/90 to-surface/40 p-5 text-right transition-all hover:border-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:scale-[1.02]"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/15 text-gold shadow-sm group-hover:scale-110 transition-transform">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-gold transition-colors">
                      آموزش وایب‌کدینگ
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      تبدیل ایده به نرم‌افزار واقعی با هوش مصنوعی و بدون نیاز به برنامه‌نویسی سنتی.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3.5 text-xs font-bold text-gold">
                  <span>مشاوره و ثبت‌نام وایب‌کدینگ</span>
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-[-3px]" />
                </div>
              </button>

              {/* Pathway 2: Web Design */}
              <button
                type="button"
                onClick={() => handleSelectPathway("website")}
                className="group relative flex flex-col justify-between rounded-2xl border border-gold/25 bg-gradient-to-b from-surface/90 to-surface/40 p-5 text-right transition-all hover:border-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:scale-[1.02]"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/15 text-gold shadow-sm group-hover:scale-110 transition-transform">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-gold transition-colors">
                      درخواست طراحی سایت
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      طراحی وب‌سایت مدرن، لندینگ پیج پرفروش یا استفاده از آفر سایت رایگان ۷۲ ساعته.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3.5 text-xs font-bold text-gold">
                  <span>سفارش و برآورد پروژه</span>
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-[-3px]" />
                </div>
              </button>
            </div>

            {/* Bottom Note */}
            <div className="mt-6 text-center text-[11px] text-muted-foreground/70">
              بدون پیش‌پرداخت • پاسخگویی مستقیم حسن شاهمرادی ظرف ۲۴ ساعت
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
