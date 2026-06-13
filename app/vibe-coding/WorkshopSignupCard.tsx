"use client";

import { useRef, useState } from "react";
import { ArrowLeft, Calendar, CheckCircle2, Clock, Loader2, MapPin, Send, UserRound } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "../i18n/LanguageProvider";

type WorkshopSignupCardProps = {
  signupPlacement: "top" | "bottom";
};

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpeXNbe7xY5JPuCpuaA6TcRi9YnakWplBJw5WnAq8JmaUEQk9PsNW5dK41ooh0IxtNyg/exec";

export default function WorkshopSignupCard({ signupPlacement }: WorkshopSignupCardProps) {
  const { t } = useI18n();
  const vc = t.vibeCoding;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submittedRef = useRef(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = fullName.trim();
    const cleanPhone = phone.trim();

    if (cleanName.length < 3 || cleanPhone.length < 8) {
      toast.error(vc.workshopValidationMsg);
      return;
    }
    if (submittedRef.current) return;

    submittedRef.current = true;
    setSubmitting(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          lang: "fa",
          leadType: "vibeCodingWorkshop",
          placement: signupPlacement,
          name: cleanName,
          contact: cleanPhone,
          source: "vibe-coding-page",
          eventTitle: "دورهمی آموزشی حضوری رایگان وایب‌کدینگ",
          registrationStatus: "open",
        }),
      });
      setDone(true);
      toast.success(vc.workshopSuccessMsg);
    } catch {
      submittedRef.current = false;
      toast.error(vc.workshopErrorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id={signupPlacement === "top" ? "workshop" : "workshop-bottom"}
      className="relative"
      aria-label={vc.workshopFormTitle}
    >
      <div className="rounded-3xl border border-gold/25 bg-surface/90 p-5 shadow-elegant md:p-7">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-gold">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1">
            {vc.workshopBadgeFree}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-muted-foreground">
            {vc.workshopBadgeCapacity}
          </span>
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-red-400">
            {vc.workshopBadgeLimit}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="text-2xl font-black leading-[1.45] md:text-4xl">
              {vc.workshopFormTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-loose text-muted-foreground md:text-base">
              {vc.workshopFormDesc}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                {vc.workshopEventDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                {vc.workshopEventTime}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                {vc.workshopEventLocation}
              </span>
            </div>

            <div className="mt-5">
              <p className="mb-2.5 text-xs font-semibold text-gold">{vc.workshopAgendaTitle}</p>
              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {vc.workshopAgendaItems.map((item) => (
                  <li key={item} dir="auto" className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {done ? (
            <div className="rounded-2xl border border-gold/25 bg-gradient-gold-soft p-5 text-center">
              <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-gold" />
              <p className="font-bold">{vc.workshopDoneTitle}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {vc.workshopDoneDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold text-muted-foreground">{vc.workshopLabelName}</span>
                <div className="relative">
                  <UserRound className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/55" />
                  <input
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="w-full rounded-xl border border-gold/15 bg-background py-3 pe-4 ps-4 pr-10 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder={vc.workshopPlaceholderName}
                  />
                </div>
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold text-muted-foreground">{vc.workshopLabelPhone}</span>
                <input
                  dir="ltr"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-right text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder={vc.workshopPlaceholderPhone}
                />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="group mt-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3 text-sm font-black text-gold-foreground shadow-gold transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {vc.workshopSubmitBtn}
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
