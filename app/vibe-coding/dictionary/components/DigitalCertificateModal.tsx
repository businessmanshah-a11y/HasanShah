"use client";

import { useState, useId } from "react";
import {
  X,
  Printer,
  Share2,
  Copy,
  Check,
  Award,
  Crown,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

interface DigitalCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  userXp: number;
  completedStagesCount: number;
}

export default function DigitalCertificateModal({
  isOpen,
  onClose,
  userXp,
  completedStagesCount,
}: DigitalCertificateModalProps) {
  const [studentName, setStudentName] = useState("مهندس وایب‌کدینگ");
  const [isCopied, setIsCopied] = useState(false);

  // Generate static verification hash
  const certificateId = "HS-VCWP-7821-X49M";
  const issueDateShamsi = "آبان ۱۴۰۳ • نوامبر ۲۰۲۴";

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(`https://hasanshah.ir/vibe-coding/dictionary/?cert=${certificateId}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-6 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-amber-400/50 bg-[#070A12] p-5 md:p-8 text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Modal Controls */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5 print:hidden">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            <h3 id="certificate-modal-title" className="text-base font-black text-foreground">
              گواهی‌نامه دیجیتال پایان دوره وایب‌کدینگ وردپرس
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            aria-label="بستن مدرک"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Student Name Input Bar (Print Hidden) */}
        <div className="mb-6 flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs print:hidden">
          <label htmlFor="student-name-input" className="text-muted-foreground font-bold shrink-0">
            نام شما جهت درج روی مدرک:
          </label>
          <input
            id="student-name-input"
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="نام و نام خانوادگی خود را بنویسید..."
            className="flex-1 w-full rounded-xl border border-white/15 bg-background/80 px-3 py-1.5 text-sm font-bold text-amber-300 focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* ── Luxury Certificate Card ── */}
        <div
          id="printable-certificate"
          className="relative overflow-hidden rounded-3xl border-2 border-amber-400/60 bg-gradient-to-b from-[#0D1322] via-[#080C16] to-[#04060B] p-6 md:p-10 text-center shadow-2xl"
          style={{
            boxShadow: "0 0 50px -10px rgba(245, 158, 11, 0.25)",
          }}
        >
          {/* Guilloche Corner Decorations */}
          <div className="absolute top-3 right-3 h-8 w-8 border-t-2 border-r-2 border-amber-400/80 rounded-tr-lg pointer-events-none" />
          <div className="absolute top-3 left-3 h-8 w-8 border-t-2 border-l-2 border-amber-400/80 rounded-tl-lg pointer-events-none" />
          <div className="absolute bottom-3 right-3 h-8 w-8 border-b-2 border-r-2 border-amber-400/80 rounded-br-lg pointer-events-none" />
          <div className="absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-amber-400/80 rounded-bl-lg pointer-events-none" />

          {/* Background Watermark Crest */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
            <Crown className="h-96 w-96 text-amber-400" />
          </div>

          {/* Certificate Header */}
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-black text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>HASAN SHAH VIBE CODING ACADEMY</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gradient-gold">
              گواهینامه رسمی شایستگی وایب‌کدینگ وردپرس
            </h2>
            <p className="font-mono text-[11px] md:text-xs text-amber-400/80 tracking-widest uppercase">
              WordPress Vibe Coding Certified Practitioner
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          {/* Body Content */}
          <div className="relative z-10 space-y-4 max-w-xl mx-auto">
            <p className="text-xs md:text-sm text-muted-foreground">
              بدین‌وسیله تایید و گواهی می‌گردد که:
            </p>

            <div className="py-2">
              <h3 className="text-2xl md:text-4xl font-black text-white underline decoration-amber-400/60 decoration-wavy underline-offset-8">
                {studentName || "دانشجوی برگزیده"}
              </h3>
            </div>

            <p className="text-xs md:text-sm text-foreground/90 leading-relaxed pt-2">
              با گذراندن موفقیت‌آمیز هر ۱۲ مرحله مأموریت تخصصی، حل ۲۴ آزمون سناریومحور مهندسی، تسلط عمیق بر ۳۷ اصطلاح حیاتی دانشنامه و رعایت استانداردهای Clean Code وردپرس، شایستگی کامل خود را در معماری و توسعه با دستیارهای هوش مصنوعی به اثبات رسانده است.
            </p>
          </div>

          {/* Certificate Footer: Seal & Signatures */}
          <div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-3 items-end gap-6 border-t border-white/10 pt-6 text-right">
            {/* Verification Hash */}
            <div className="space-y-1">
              <span className="text-[10px] text-muted-foreground block font-bold">شناسه اعتبارسنجی:</span>
              <span className="font-mono text-xs font-bold text-amber-400 block" dir="ltr">
                {certificateId}
              </span>
              <span className="text-[10px] text-muted-foreground block">
                تاریخ صدور: {issueDateShamsi}
              </span>
            </div>

            {/* Official Gold Seal Badge */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-400/30 to-amber-600/40 text-amber-300 shadow-lg shadow-amber-500/20">
                <ShieldCheck className="h-8 w-8 text-amber-400" />
              </div>
              <span className="text-[10px] font-bold text-amber-400 mt-1">مُهر رسمی اصالت</span>
            </div>

            {/* Signature */}
            <div className="text-left space-y-1">
              <span className="text-[10px] text-muted-foreground block font-bold">مدرس و منتور دوره:</span>
              <span className="text-sm font-black text-foreground block">حسن شاهمرادی</span>
              <span className="text-[10px] text-amber-400/80 block font-mono">
                Architect & Founder
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions (Print Hidden) */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 print:hidden">
          <button
            type="button"
            onClick={handleCopyId}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-foreground hover:bg-white/10 transition-colors"
          >
            {isCopied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-amber-400" />}
            <span>{isCopied ? "لینک اعتبارسنجی کپی شد" : "کپی لینک استعلام مدرک"}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-xs font-black text-black hover:opacity-95 shadow-md shadow-amber-500/20 transition-all"
            >
              <Printer className="h-4 w-4" />
              <span>چاپ مدرک / ذخیره PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-4 py-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
