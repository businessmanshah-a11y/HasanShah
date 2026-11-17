"use client";

import { UserPersona } from "../data/types";
import { Palette, Briefcase, Code, Rocket, Sparkles } from "lucide-react";

interface PersonaRoleSelectorProps {
  activePersona: UserPersona | 'all';
  onSelectPersona: (persona: UserPersona | 'all') => void;
}

const personas = [
  {
    id: 'all' as const,
    title: 'همه مخاطبان',
    icon: Sparkles,
    badge: 'نمای کامل',
    advice: 'در حال مشاهده تمام اصطلاحات دانشنامه هستید.',
  },
  {
    id: 'beginner' as const,
    title: 'صفر کیلومتر و کنجکاو',
    icon: Rocket,
    badge: 'شروع از صفر',
    advice: 'اصطلاحات بدون کد، ساده و به زبان عامیانه که بهت کمک می‌کنند بدون پیش‌زمینه فنی با هوش مصنوعی کار کنی.',
  },
  {
    id: 'designer' as const,
    title: 'طراح و UI/UX',
    icon: Palette,
    badge: 'دیزاین و فرانت',
    advice: 'توکن‌های طراحی، تایپوگرافی شناور، بلاک‌های اختصاصی و ریزتعاملاتی که طرح‌های فیگما را پیکسل‌به‌پیکسل پیاده می‌کنند.',
  },
  {
    id: 'founder' as const,
    title: 'کارفرما و مدیر کسب‌وکار',
    icon: Briefcase,
    badge: 'امنیت و بیزینس',
    advice: 'این اصطلاحات را یاد بگیر تا فریب طراحان سایت گران‌فروش را نخوری و بدانی چطور سایتی با امنیت بالا و سرعت ۱۰۰ بسازی.',
  },
  {
    id: 'developer' as const,
    title: 'برنامه‌نویس و فریلنسر',
    icon: Code,
    badge: 'مهندسی فول‌استک',
    advice: 'معماری هوک‌ها، REST API، کوئری‌های بهینه دیتابیس و دستورات WP-CLI برای بستن قراردادهای دلاری و پروژه‌های لوکس.',
  },
];

export default function PersonaRoleSelector({ activePersona, onSelectPersona }: PersonaRoleSelectorProps) {
  const currentPersona = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
        <span>نقش خود را انتخاب کنید (فیلتر بر اساس نیاز شما):</span>
        <span className="text-gold font-mono">{currentPersona.badge}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {personas.map((p) => {
          const Icon = p.icon;
          const isActive = activePersona === p.id;

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPersona(p.id)}
              className={`p-3 rounded-2xl border text-start transition-all flex items-center gap-2.5 ${
                isActive
                  ? "border-gold bg-gold/15 text-gold shadow-sm font-bold"
                  : "border-white/10 bg-white/5 text-muted-foreground hover:border-gold/30 hover:text-foreground"
              }`}
            >
              <div className={`p-1.5 rounded-xl ${isActive ? "bg-gold text-gold-foreground" : "bg-white/10 text-muted-foreground"}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="truncate">
                <div className="text-xs font-bold truncate">{p.title}</div>
              </div>
            </button>
          );
        })}
      </div>

      {activePersona !== 'all' && (
        <div className="rounded-xl border border-gold/20 bg-gold/5 p-3 text-xs text-gold/90 leading-relaxed flex items-center gap-2">
          <Sparkles className="h-4 w-4 shrink-0 text-gold" />
          <span>{currentPersona.advice}</span>
        </div>
      )}
    </div>
  );
}
