"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { InstagramIcon, LinkedInIcon, BaleIcon } from "../components/Icons";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";
import { useI18n } from "../i18n/LanguageProvider";
import type { ServiceType } from "../lib/consult-schema";

export default function ContactContent() {
  const searchParams = useSearchParams();
  const rawService = searchParams.get("service");
  const { dir, locale } = useI18n();

  const initialService: ServiceType | undefined =
    rawService === "vibecoding" || rawService === "website" || rawService === "app" || rawService === "startup"
      ? rawService
      : undefined;

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-gold flex flex-col justify-between">
      <Nav />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span>پاسخگویی سریع | حداکثر ظرف ۲۴ ساعت کاری</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight"
          >
            شروع یک مسیر جدید با <span className="text-gold">حسن شاهمرادی</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            چه برای یادگیری تخصصی وایب‌کدینگ (توسعه محصول با AI) آمده‌اید و چه به دنبال سفارش طراحی سایت و سیستم‌های اختصاصی با متدهای روز هستید، فرم زیر را تکمیل نمایید.
          </motion.p>
        </div>

        {/* Two-Column Grid: Left Features/Contacts, Right The Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Side Info & Fast Channels (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {/* Direct Contact Card */}
            <div className="rounded-3xl border border-white/10 bg-surface/70 p-6 backdrop-blur-xl shadow-xl space-y-5">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-gold" />
                <span>راه‌های ارتباط مستقیم</span>
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href="https://t.me/shahbusinessman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/5 bg-background/50 hover:border-gold/40 hover:bg-gold/5 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Send className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">تلگرام</div>
                      <div className="text-xs text-muted-foreground">@shahbusinessman</div>
                    </div>
                  </div>
                  <ArrowIcon className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="https://ble.ir/shahvibe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/5 bg-background/50 hover:border-[#00B894]/40 hover:bg-[#00B894]/5 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-[#00B894]/15 border border-[#00B894]/30 flex items-center justify-center text-[#00B894]">
                      <BaleIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">پیام‌رسان بله</div>
                      <div className="text-xs text-muted-foreground" dir="ltr">@shahvibe</div>
                    </div>
                  </div>
                  <ArrowIcon className="h-4 w-4 text-muted-foreground group-hover:text-[#00B894] transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="tel:09120870095"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/5 bg-background/50 hover:border-gold/40 hover:bg-gold/5 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">تماس مستقیم</div>
                      <div className="text-xs text-muted-foreground" dir="ltr">0912 087 0095</div>
                    </div>
                  </div>
                  <ArrowIcon className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="https://www.instagram.com/shahbusinessman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/5 bg-background/50 hover:border-gold/40 hover:bg-gold/5 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
                      <InstagramIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">اینستاگرام رسمی</div>
                      <div className="text-xs text-muted-foreground" dir="ltr">@shahbusinessman</div>
                    </div>
                  </div>
                  <ArrowIcon className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="https://www.linkedin.com/in/hasanshahmoradi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/5 bg-background/50 hover:border-gold/40 hover:bg-gold/5 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <LinkedInIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">لینکدین حرفه‌ای</div>
                      <div className="text-xs text-muted-foreground" dir="ltr">hasanshahmoradi</div>
                    </div>
                  </div>
                  <ArrowIcon className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="mailto:info@hasanshah.ir"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/5 bg-background/50 hover:border-gold/40 hover:bg-gold/5 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">ایمیل</div>
                      <div className="text-xs text-muted-foreground">info@hasanshah.ir</div>
                    </div>
                  </div>
                  <ArrowIcon className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            {/* Guarantee / Value Card */}
            <div className="rounded-3xl border border-gold/20 bg-gradient-to-b from-gold/10 to-transparent p-6 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-gold font-bold text-sm">
                <ShieldCheck className="h-5 w-5" />
                <span>تعهد و استانداردهای همکاری</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>سایت تک‌صفحه‌ای آزمایشی در ۷۲ ساعت:</strong> بدون پیش‌پرداخت، با مهلت یک ماه برای بررسی و تصمیم‌گیری.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>آموزش عملی و نتیجه‌محور:</strong> در وایب‌کدینگ بدون نیاز به پیش‌زمینه فنی، مستقیماً محصول آماده لانچ می‌سازید.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>پشتیبانی و ارتباط مستقیم:</strong> تمام پروژه‌ها شخصاً توسط حسن شاهمرادی بررسی و هدایت می‌شوند.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Container (8 cols on lg) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="rounded-3xl border border-gold/30 bg-surface/80 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -end-24 w-60 h-60 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -start-24 w-60 h-60 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <LeadForm initialService={initialService} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
