"use client";

import { useRef, useState } from "react";
import { ArrowLeft, CheckCircle2, Loader2, Send, UserRound } from "lucide-react";
import { toast } from "sonner";

type WorkshopSignupCardProps = {
  signupPlacement: "top" | "bottom";
};

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpeXNbe7xY5JPuCpuaA6TcRi9YnakWplBJw5WnAq8JmaUEQk9PsNW5dK41ooh0IxtNyg/exec";

export default function WorkshopSignupCard({ signupPlacement }: WorkshopSignupCardProps) {
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
      toast.error("اسم و شماره تماس رو کامل وارد کن.");
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
          registrationOpens: "شنبه ۲۳ خرداد",
        }),
      });
      setDone(true);
      toast.success("پیش‌ثبت‌نامت ثبت شد. برای هماهنگی باهات تماس می‌گیریم.");
    } catch {
      submittedRef.current = false;
      toast.error("ارسال انجام نشد. لطفاً دوباره امتحان کن یا مستقیم تماس بگیر.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id={signupPlacement === "top" ? "workshop" : "workshop-bottom"}
      className="relative"
      aria-label="پیش‌ثبت‌نام دورهمی حضوری وایب‌کدینگ"
    >
      <div className="rounded-3xl border border-gold/25 bg-surface/90 p-5 shadow-elegant md:p-7">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-gold">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1">
            دورهمی حضوری رایگان
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-muted-foreground">
            ظرفیت از شنبه ۲۳ خرداد باز می‌شود
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="text-2xl font-black leading-[1.45] md:text-4xl">
              پیش‌ثبت‌نام رایگان آموزش حضوری وایب‌کدینگ
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-loose text-muted-foreground md:text-base">
              پنجشنبه هفته آینده، وایب‌کدینگ را از صفر و با زبان ساده باز می‌کنیم:
              از انتخاب ابزار تا تبدیل ایده خام به محصول قابل تست. فقط اسم و شماره‌ات را بگذار
              تا وقتی ظرفیت باز شد، اول بهت خبر بدهیم.
            </p>
          </div>

          {done ? (
            <div className="rounded-2xl border border-gold/25 bg-gradient-gold-soft p-5 text-center">
              <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-gold" />
              <p className="font-bold">ثبت شد؛ منتظر تماس ما باش.</p>
              <p className="mt-1 text-xs text-muted-foreground">
                اگر شماره را اشتباه وارد کردی، یک بار دیگر فرم را پر کن.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold text-muted-foreground">اسم و فامیل</span>
                <div className="relative">
                  <UserRound className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/55" />
                  <input
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="w-full rounded-xl border border-gold/15 bg-background py-3 pe-4 ps-4 pr-10 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="مثلاً: علی محمدی"
                  />
                </div>
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold text-muted-foreground">شماره تماس</span>
                <input
                  dir="ltr"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full rounded-xl border border-gold/15 bg-background px-4 py-3 text-right text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="09120000000"
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
                پیش‌ثبت‌نام رایگان
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
