"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { getAttendees, type Attendee } from "../lib/appsScript";
import AttendeeCard from "./AttendeeCard";
import ProfileEditModal from "./ProfileEditModal";

interface Props {
  phone: string | null;
  token: string | null;
  userName: string | null;
  onLoginRequest: () => void;
}

export default function AttendeesSection({ phone, token, userName, onLoginRequest }: Props) {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    getAttendees().then(setAttendees).catch(() => setAttendees([])).finally(() => setLoading(false));
  }, []);

  const myProfile = userName ? attendees.find((a) => a.name === userName) : null;

  function handleSaved(linkedin: string, specialty: string, bio: string) {
    setAttendees((prev) =>
      prev.map((a) => (a.name === userName ? { ...a, linkedin, specialty, bio } : a))
    );
  }

  return (
    <section id="attendees" className="py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-black md:text-3xl">شرکت‌کنندگان</h2>
          <span className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold/80">
            {loading ? "..." : `${attendees.length} نفر`}
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 rounded-2xl border border-border bg-surface animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {attendees.map((a, i) => (
              <AttendeeCard
                key={i}
                attendee={a}
                isOwnCard={!!phone && a.name === userName}
                onEdit={() => setEditOpen(true)}
              />
            ))}
            {!phone && (
              <button
                onClick={onLoginRequest}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gold/30 bg-gold/5 p-4 text-center transition hover:border-gold/60 hover:bg-gold/10"
              >
                <Plus className="w-5 h-5 text-gold/60" />
                <span className="text-xs text-gold/70">اطلاعاتم رو ثبت کنم</span>
              </button>
            )}
          </div>
        )}
      </div>

      {editOpen && phone && token && myProfile && (
        <ProfileEditModal
          phone={phone}
          token={token}
          initialLinkedin={myProfile.linkedin}
          initialSpecialty={myProfile.specialty}
          initialBio={myProfile.bio}
          onClose={() => setEditOpen(false)}
          onSaved={handleSaved}
        />
      )}
    </section>
  );
}
