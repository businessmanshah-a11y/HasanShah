"use client";
import { LogIn, LogOut, User } from "lucide-react";

interface Props {
  userName: string | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

const NAV_LINKS = [
  { href: "#video", label: "🎥 ویدیو" },
  { href: "#agenda", label: "📋 سرفصل" },
  { href: "#attendees", label: "👥 شرکت‌کنندگان" },
  { href: "#comments", label: "💬 نظرات" },
  { href: "#followup", label: "📊 پیگیری" },
];

export default function EventNav({ userName, onLoginClick, onLogout }: Props) {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gold/10 bg-background/80 backdrop-blur-md" dir="rtl">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-4 overflow-x-auto">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 text-xs text-muted-foreground hover:text-gold transition">
              {link.label}
            </a>
          ))}
        </div>
        {userName ? (
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1 text-xs text-gold">
              <User className="w-3.5 h-3.5" />
              {userName}
            </span>
            <button onClick={onLogout} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition">
              <LogOut className="w-3.5 h-3.5" />
              خروج
            </button>
          </div>
        ) : (
          <button onClick={onLoginClick} className="shrink-0 flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-bold text-gold-foreground transition hover:-translate-y-0.5">
            <LogIn className="w-3.5 h-3.5" />
            ورود
          </button>
        )}
      </div>
    </nav>
  );
}
