"use client";

import { useState } from "react";
import { Copy, Check, Send, Share2 } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "../i18n/LanguageProvider";

interface ShareButtonsProps {
  url?: string;
  title: string;
  summary?: string;
  className?: string;
  showLabel?: boolean;
}

export default function ShareButtons({
  url: customUrl,
  title,
  summary = "",
  className = "",
  showLabel = true,
}: ShareButtonsProps) {
  const { t, locale, dir } = useI18n();
  const bd = t.blogDetail;
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    if (customUrl) {
      return customUrl.startsWith("http")
        ? customUrl
        : typeof window !== "undefined"
        ? `${window.location.origin}${customUrl}`
        : `https://hasanshah.ir${customUrl}`;
    }
    return typeof window !== "undefined" ? window.location.href : "https://hasanshah.ir";
  };

  const copyToClipboard = (customMsg?: string) => {
    const url = getFullUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success(customMsg || bd.copiedToast || "لینک در کلیپ‌بورد کپی شد");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = (platform: "telegram" | "whatsapp" | "twitter" | "linkedin" | "instagram" | "copy") => {
    const url = getFullUrl();

    switch (platform) {
      case "telegram":
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n\n${url}`)}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "instagram": {
        copyToClipboard(
          locale === "fa"
            ? "لینک کپی شد — در حال باز کردن اینستاگرام برای استوری یا دایرکت..."
            : locale === "ar"
            ? "تم نسخ الرابط — جارٍ فتح إنستغرام للقصة أو الرسائل..."
            : "Link copied — Opening Instagram for Story or Direct..."
        );
        setTimeout(() => {
          window.open("https://instagram.com", "_blank");
        }, 500);
        break;
      }
      case "copy":
        copyToClipboard();
        break;
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`} dir={dir}>
      {showLabel && (
        <span className="text-xs font-bold text-muted-foreground me-1 flex items-center gap-1.5">
          <Share2 className="h-3.5 w-3.5 text-gold/80" />
          <span>{bd.shareLabel}</span>
        </span>
      )}

      {/* Telegram */}
      <button
        onClick={() => handleShare("telegram")}
        aria-label="Share on Telegram"
        title="Telegram"
        className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-surface text-white/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#24A1DE] hover:bg-[#24A1DE]/20 hover:text-[#24A1DE] hover:shadow-[0_4px_16px_rgba(36,161,222,0.3)]"
      >
        <Send className="h-4 w-4 transition-transform group-hover:scale-110" />
      </button>

      {/* WhatsApp (Official Logo) */}
      <button
        onClick={() => handleShare("whatsapp")}
        aria-label="Share on WhatsApp"
        title="WhatsApp"
        className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-surface text-white/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]/20 hover:text-[#25D366] hover:shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
      >
        <svg className="h-4 w-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.947 3.296.947 3.181 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.768-5.768zm0 13.062c-1.229 0-2.31-.351-3.235-.951l-2.613.685.698-2.548c-.672-.989-1.031-2.091-1.03-3.262.001-3.298 2.684-5.98 5.98-5.98 3.299 0 5.982 2.683 5.981 5.98 0 3.299-2.683 5.981-5.981 5.981zm7.469-13.062c-1.996-1.996-4.65-3.097-7.469-3.097-5.819 0-10.553 4.734-10.555 10.554-.001 1.86.486 3.676 1.411 5.278l-1.501 5.483 5.611-1.472c1.536.837 3.264 1.278 5.034 1.278h.004c5.818 0 10.553-4.734 10.555-10.554.001-2.82-.999-5.474-2.99-7.47zm-4.757 8.358c-.147-.074-.871-.43-1.006-.48-.135-.049-.233-.074-.332.074-.098.147-.381.48-.467.579-.086.098-.172.111-.319.037-.147-.074-.622-.229-1.184-.73-.438-.39-.733-.872-.82-.102-.086-.147-.009-.227.064-.3.067-.066.147-.172.221-.258.074-.086.098-.147.147-.246.049-.098.025-.184-.012-.258-.037-.074-.332-.8-.455-1.096-.12-.288-.242-.249-.332-.254l-.283-.005c-.098 0-.258.037-.393.184-.135.147-.516.504-.516 1.229 0 .725.528 1.425.602 1.523.074.098 1.039 1.587 2.518 2.225.352.152.627.243.841.311.353.112.674.096.928.058.283-.042.871-.356.994-.7.123-.344.123-.639.086-.7-.037-.061-.135-.098-.282-.172z" />
        </svg>
      </button>

      {/* Instagram (Crisp White Line Icon) */}
      <button
        onClick={() => handleShare("instagram")}
        aria-label="Share on Instagram"
        title={locale === "fa" ? "اشتراک در اینستاگرام (استوری / دایرکت)" : "Share on Instagram"}
        className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-surface text-white/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E1306C] hover:bg-[#E1306C]/20 hover:text-[#E1306C] hover:shadow-[0_4px_16px_rgba(225,48,108,0.3)]"
      >
        <svg
          className="h-4 w-4 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </button>

      {/* X / Twitter */}
      <button
        onClick={() => handleShare("twitter")}
        aria-label="Share on X (Twitter)"
        title="X (Twitter)"
        className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-surface text-white/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/20 hover:text-gold hover:shadow-[0_4px_16px_rgba(239,192,123,0.25)]"
      >
        <svg className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>

      {/* LinkedIn */}
      <button
        onClick={() => handleShare("linkedin")}
        aria-label="Share on LinkedIn"
        title="LinkedIn"
        className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-surface text-white/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:shadow-[0_4px_16px_rgba(10,102,194,0.3)]"
      >
        <svg className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      </button>

      {/* Copy Link */}
      <button
        onClick={() => handleShare("copy")}
        aria-label="Copy Link"
        title={bd.copy}
        className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-surface text-white/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/20 hover:text-gold hover:shadow-[0_4px_16px_rgba(239,192,123,0.25)]"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4 transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
