"use client";

import {
  ArrowLeft,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Compass,
  FileText,
  Layers3,
  MessageSquareText,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import WorkshopSignupCard from "./WorkshopSignupCard";

const ParticlesBackground = dynamic(() => import("../components/ParticlesBackground"), { ssr: false });
import { useI18n } from "../i18n/LanguageProvider";

const toolIcons = [Code2, Brain, TerminalSquare];
const preprodIcons = [Compass, FileText, Layers3];

export default function VibeCodingPageContent() {
  const { t, dir } = useI18n();
  const vc = t.vibeCoding;

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground" dir={dir}>
      <Nav />

      <section id="hero" className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <ParticlesBackground />
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.27 0.080 248 / 0.40), transparent 70%)",
          }}
        />

        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              {vc.heroBadge}
            </div>
            <h1 className="text-4xl font-black leading-[1.35] md:text-6xl">
              {vc.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-muted-foreground md:text-lg lg:mx-0">
              {vc.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#workshop"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 text-sm font-black text-gold-foreground shadow-gold-lg transition hover:-translate-y-0.5"
              >
                {vc.heroCtaWorkshop}
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/35 bg-gold/5 px-7 py-3.5 text-sm font-bold transition hover:border-gold hover:bg-gold/10"
              >
                {vc.heroCtaCurriculum}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gold/20 bg-surface/70 p-5 shadow-elegant backdrop-blur md:p-7">
            <div className="grid gap-3">
              {vc.heroSteps.map((title, i) => (
                <div key={title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-sm font-black text-gold-foreground">
                    {i + 1}
                  </span>
                  <span className="font-bold">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <WorkshopSignupCard signupPlacement="top" />
      </div>

      <section id="roadmap" className="bg-surface/25 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold text-gold">{vc.roadmapEyebrow}</p>
            <h2 className="text-3xl font-black leading-[1.4] md:text-5xl">
              {vc.roadmapTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vc.roadmap.map((item, index) => (
              <div key={item} className="rounded-2xl border border-gold/15 bg-background/70 p-5">
                <div className="mb-4 text-2xl font-black text-gold">{String(index + 1).padStart(2, "0")}</div>
                <p className="leading-loose text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {vc.tools.map((tool, i) => {
              const Icon = toolIcons[i];
              return (
                <div key={tool.name} className="rounded-3xl border border-gold/15 bg-surface p-6 shadow-elegant">
                  <Icon className="mb-5 h-9 w-9 text-gold" />
                  <h3 className="text-2xl font-black">{tool.name}</h3>
                  <p className="mt-3 leading-loose text-muted-foreground">{tool.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface/25 py-20 md:py-28">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold text-gold">{vc.preprodEyebrow}</p>
            <h2 className="text-3xl font-black leading-[1.4] md:text-5xl">
              {vc.preprodTitle}
            </h2>
            <p className="mt-5 leading-loose text-muted-foreground">
              {vc.preprodDesc}
            </p>
          </div>
          <div className="grid gap-4">
            {vc.preprodItems.map((item, i) => {
              const Icon = preprodIcons[i];
              return (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-gold/15 bg-background/70 p-5">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-black">{item.title}</h3>
                    <p className="mt-1 leading-loose text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold text-gold">{vc.lessonsEyebrow}</p>
              <h2 className="text-3xl font-black md:text-5xl">{vc.lessonsTitle}</h2>
            </div>
            <a href="#workshop" className="inline-flex items-center gap-2 text-sm font-bold text-gold">
              {vc.lessonsCtaLabel}
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {vc.lessons.map((lesson) => (
              <div key={lesson.title} className="rounded-3xl border border-gold/15 bg-surface p-6">
                <h3 className="mb-4 text-2xl font-black">{lesson.title}</h3>
                <div className="grid gap-3">
                  {lesson.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/25 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <MessageSquareText className="mx-auto mb-5 h-10 w-10 text-gold" />
            <h2 className="text-3xl font-black leading-[1.4] md:text-5xl">
              {vc.habitsTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {vc.habits.map((habit) => (
              <div key={habit} className="rounded-2xl border border-gold/15 bg-background/70 p-5 leading-loose text-muted-foreground">
                {habit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Bot className="mx-auto mb-4 h-10 w-10 text-gold" />
            <h2 className="text-3xl font-black md:text-5xl">{vc.workshopReadyTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-loose text-muted-foreground">
              {vc.workshopReadyDesc}
            </p>
          </div>
          <WorkshopSignupCard signupPlacement="bottom" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
