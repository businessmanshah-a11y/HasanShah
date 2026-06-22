import { ExternalLink, Phone } from "lucide-react";
import type { Attendee } from "../lib/appsScript";

interface Props {
  attendee: Attendee;
  isOwnCard: boolean;
  onEdit: () => void;
}

export default function AttendeeCard({ attendee, isOwnCard, onEdit }: Props) {
  const initials = attendee.name.trim().slice(0, 1);
  const isRegistered = attendee.registered !== false;

  return (
    <div className={`relative rounded-2xl border p-4 flex flex-col gap-3 transition ${isRegistered ? "border-border bg-surface" : "border-border/40 bg-surface/40"}`}>
      {isOwnCard && (
        <button onClick={onEdit} className="absolute top-3 left-3 text-xs text-gold/70 hover:text-gold transition">
          ویرایش
        </button>
      )}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 ${isRegistered ? "bg-gold/15 text-gold" : "bg-white/5 text-white/30"}`}>
          {initials}
        </div>
        <div>
          <p className={`font-bold text-sm ${!isRegistered && "text-white/50"}`}>{attendee.name}</p>
          {attendee.specialty
            ? <p className="text-xs text-muted-foreground">{attendee.specialty}</p>
            : !isRegistered && <p className="text-xs text-white/25">هنوز ثبت‌نام نکرده</p>
          }
        </div>
      </div>
      {attendee.bio && <p className="text-xs text-muted-foreground leading-relaxed">{attendee.bio}</p>}
      <div className="flex flex-wrap gap-2 mt-auto">
        {attendee.linkedin && (
          <a
            href={attendee.linkedin.startsWith("http") ? attendee.linkedin : `https://${attendee.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-gold/80 hover:text-gold transition"
          >
            <ExternalLink className="w-3 h-3" />
            LinkedIn
          </a>
        )}
        {attendee.phone && (
          <a
            href={`tel:${attendee.phone}`}
            className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition"
            dir="ltr"
          >
            <Phone className="w-3 h-3" />
            {attendee.phone}
          </a>
        )}
      </div>
    </div>
  );
}
