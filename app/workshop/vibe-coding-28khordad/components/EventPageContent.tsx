"use client";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import EventNav from "./EventNav";
import EventHero from "./EventHero";
import VideoSection from "./VideoSection";
import AgendaSection from "./AgendaSection";
import AttendeesSection from "./AttendeesSection";
import CommentsSection from "./CommentsSection";
import FollowUpSection from "./FollowUpSection";
import LoginModal from "./LoginModal";

export default function EventPageContent() {
  const { session, ready, saveSession, logout } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EventNav
        userName={session?.name ?? null}
        onLoginClick={() => setLoginOpen(true)}
        onLogout={logout}
      />
      <main>
        <EventHero />
        <VideoSection />
        <AgendaSection />
        <AttendeesSection
          phone={session?.phone ?? null}
          token={session?.token ?? null}
          userName={session?.name ?? null}
          onLoginRequest={() => setLoginOpen(true)}
        />
        <CommentsSection
          phone={session?.phone ?? null}
          token={session?.token ?? null}
          onLoginRequest={() => setLoginOpen(true)}
        />
        <FollowUpSection
          phone={session?.phone ?? null}
          token={session?.token ?? null}
          onLoginRequest={() => setLoginOpen(true)}
        />
      </main>

      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onSuccess={(phone, token, name) => {
            saveSession({ phone, token, name });
            setLoginOpen(false);
          }}
        />
      )}
    </div>
  );
}
