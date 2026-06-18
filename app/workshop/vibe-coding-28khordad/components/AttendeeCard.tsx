import { ExternalLink } from "lucide-react";
import type { Attendee } from "../lib/appsScript";

interface Props {
  attendee: Attendee;
  isOwnCard: boolean;
  onEdit: () => void;
}

export default function AttendeeCard({ attendee, isOwnCard, onEdit }: Props) {
  const initials = attendee.name.trim().slice(0, 1);
  return (
    <div className="relative rounded-2xl border border-border bg-surface p-4 flex flex-col gap-3">
      {isOwnCard && (
        <button onClick={onEdit} className="absolute top-3 left-3 text-xs text-gold/70 hover:text-gold transition">
          ویرایش
        </button>
      )}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold font-black text-sm shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-bold text-sm">{attendee.name}</p>
          {attendee.specialty && <p className="text-xs text-muted-foreground">{attendee.specialty}</p>}
        </div>
      </div>
      {attendee.bio && <p className="text-xs text-muted-foreground leading-relaxed">{attendee.bio}</p>}
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
    </div>
  );
}
