"use client";

import React from "react";
import { X, Printer, Download, Sparkles, AlertTriangle, FileCode } from "lucide-react";
import { allDictionaryTerms } from "../data";

interface PrintableCheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintableCheatSheetModal({
  isOpen,
  onClose,
}: PrintableCheatSheetModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static print:inset-auto">
      <div className="relative w-full max-w-5xl rounded-3xl border border-amber-400/30 bg-[#090D16] p-6 md:p-8 text-foreground shadow-2xl my-8 print:border-none print:shadow-none print:bg-white print:text-black print:my-0 print:p-4">
        {/* Header - Hidden on Print */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Printer className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                چیت‌شیت رومیزی و قابل چاپ دانشنامه وایب‌کدینگ
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                خلاصه ۳۷ اصطلاح حیاتی وردپرس همراه با تله مرگبار و آدرس فایل‌ها برای میز کار شما
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2.5 text-xs font-bold text-black hover:opacity-95 shadow-lg shadow-amber-500/20 transition-all"
            >
              <Printer className="h-4 w-4" />
              <span>چاپ یا ذخیره PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Content */}
        <div className="mt-6 space-y-6">
          <div className="text-center pb-4 border-b border-white/10 print:border-black/20">
            <h1 className="text-2xl font-black text-amber-400 print:text-black">
              دانشنامه و چیت‌شیت سریع وایب‌کدینگ وردپرس
            </h1>
            <p className="text-xs text-muted-foreground print:text-gray-600 mt-1">
              طراحی و گردآوری: حسن شاهمرادی (hasanshah.ir) • نسخه پاییز ۲۰۲۶
            </p>
          </div>

          {/* Grid of Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            {allDictionaryTerms.map((term, idx) => (
              <div
                key={term.id}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs space-y-2 print:border-gray-300 print:bg-transparent print:p-2.5 print:break-inside-avoid"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-foreground print:text-black">
                    {idx + 1}. {term.termFa}
                  </span>
                  <span className="font-mono text-[10px] text-amber-400 print:text-gray-700">
                    {term.termEn}
                  </span>
                </div>

                <p className="text-muted-foreground print:text-gray-800 leading-relaxed font-sans">
                  💡 {term.elevatorPitch}
                </p>

                <div className="pt-2 border-t border-white/5 print:border-gray-200 flex flex-col gap-1 text-[11px]">
                  <div className="text-rose-400/90 print:text-red-700 flex items-start gap-1">
                    <span className="font-bold shrink-0">⚠️ تله مرگبار:</span>
                    <span className="line-clamp-2">{term.beginnerTrap}</span>
                  </div>
                  <div className="text-amber-300/80 print:text-gray-600 flex items-center gap-1 font-mono text-[10px]">
                    <span className="font-bold font-sans">📁 محل کد:</span>
                    <span className="truncate">{term.injectionTarget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-white/10 print:border-gray-200 text-xs text-muted-foreground print:text-gray-600">
            دانشنامه تخصصی وایب‌کدینگ و توسعه مدرن وردپرس • hasanshah.ir/vibe-coding/dictionary
          </div>
        </div>
      </div>
    </div>
  );
}
