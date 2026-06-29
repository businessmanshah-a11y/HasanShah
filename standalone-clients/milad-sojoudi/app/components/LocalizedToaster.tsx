"use client";
import { Toaster } from "sonner";
import { useI18n } from "../i18n/LanguageProvider";

export default function LocalizedToaster() {
  const { dir } = useI18n();
  return (
    <Toaster
      position="top-center"
      dir={dir}
      toastOptions={{
        style: {
          background: "oklch(0.19 0.015 230)",
          color: "oklch(0.95 0.006 210)",
          border: "1px solid oklch(0.57 0.07 208 / 0.3)",
          fontFamily: "'Peyda', Tahoma, sans-serif",
          direction: dir,
        },
      }}
    />
  );
}
