"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { TimelineStep } from "../vibe-coding/series/series-data"

function toFarsi(n: number) {
  return n.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d])
}

function MediaBlock({ media }: { media: NonNullable<TimelineStep["media"]>[number] }) {
  if (media.type === "prompt") {
    return (
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
        <div className="border-b border-white/10 px-4 py-2 text-xs font-bold text-gold" dir="rtl">
          پرامپت اولیه به Claude
        </div>
        <pre className="whitespace-pre-wrap p-4 text-xs leading-loose text-[#7ee787] font-mono" dir="rtl">
          {media.content}
        </pre>
      </div>
    )
  }

  if (media.type === "aparat") {
    return (
      <div>
        <div
          className="mb-3 flex items-start gap-2 rounded-lg border border-amber-800/40 bg-amber-950/30 px-4 py-3 text-xs text-amber-300"
          dir="rtl"
        >
          <span className="mt-0.5 shrink-0">⚠️</span>
          <span>اگه VPN روشنه، بهتره خاموشش کنی — آپارات با VPN به‌کندی بارگذاری می‌شه.</span>
        </div>
        <div
          className="relative w-full overflow-hidden rounded-xl border border-white/10"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            src={`https://www.aparat.com/video/video/embed/videohash/${media.hash}/vt/frame`}
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    )
  }

  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        className="w-full rounded-xl border border-white/10"
      />
    )
  }

  return (
    <div className="relative h-80 w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
      <Image
        src={media.src}
        alt={media.alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}

function LessonBox({ lesson }: { lesson: string }) {
  return (
    <div
      className="rounded-xl border border-[oklch(0.50_0.10_72_/_0.25)] bg-[oklch(0.14_0.04_72_/_0.60)] p-4"
      dir="rtl"
    >
      <p className="mb-1.5 text-xs font-black text-gold">🧠 درس این لحظه</p>
      <p className="text-sm leading-loose text-[oklch(0.85_0.08_72)]">{lesson}</p>
    </div>
  )
}

function TextContent({
  step,
  isActive,
  delay,
}: {
  step: TimelineStep
  isActive: boolean
  delay: string
}) {
  return (
    <div
      className={`transition-all duration-700 ${delay} ${
        isActive ? "opacity-100 translate-y-0" : "opacity-20 translate-y-4"
      }`}
      dir="rtl"
    >
      <h3 className="mb-3 text-xl font-black leading-snug">{step.title}</h3>
      <p className="mb-5 text-sm leading-loose text-muted-foreground">{step.story}</p>
      <LessonBox lesson={step.lesson} />
    </div>
  )
}

function MediaContent({
  step,
  isActive,
  delay,
}: {
  step: TimelineStep
  isActive: boolean
  delay: string
}) {
  if (!step.media || step.media.length === 0) return null
  const isTwoImages =
    step.media.length === 2 && step.media.every((m) => m.type === "image")
  return (
    <div
      className={`transition-all duration-700 ${delay} ${
        isActive ? "opacity-100 translate-y-0" : "opacity-20 translate-y-4"
      } ${isTwoImages ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}`}
    >
      {step.media.map((m, i) => (
        <MediaBlock key={i} media={m} />
      ))}
    </div>
  )
}

export default function SeriesTimeline({ steps }: { steps: TimelineStep[] }) {
  const [activeStep, setActiveStep] = useState(-1)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const activationLine = window.innerHeight * 0.42

    const handleScroll = () => {
      let closest = -1
      let closestDist = Infinity

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        const stepMid = (rect.top + rect.bottom) / 2
        const dist = Math.abs(stepMid - activationLine)
        if (dist < closestDist) {
          closestDist = dist
          closest = index
        }
      })

      if (closest !== -1) setActiveStep(closest)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [steps.length])

  const progressPct =
    activeStep >= 0 ? ((activeStep + 0.5) / steps.length) * 100 : 0

  return (
    <div className="relative" dir="ltr">
      {/* Static background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/8 hidden md:block" />

      {/* Animated gold progress line */}
      <div
        className="absolute left-1/2 top-0 w-px -translate-x-1/2 hidden md:block transition-all duration-700 ease-out"
        style={{
          height: `${progressPct}%`,
          background:
            "linear-gradient(to bottom, oklch(0.83 0.105 72), oklch(0.83 0.105 72 / 0.15))",
        }}
      />

      <div className="flex flex-col">
        {steps.map((step, index) => {
          const isActive = index <= activeStep
          const isCurrent = index === activeStep
          const isMediaLeft = index % 2 === 0
          const delay = "delay-100"

          return (
            <div
              key={step.time}
              ref={(el) => {
                stepRefs.current[index] = el
              }}
              className="relative mb-16 last:mb-0"
            >
              {/* ── Mobile: stacked ── */}
              <div className="md:hidden" dir="rtl">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black transition-all duration-500 ${
                      isCurrent
                        ? "bg-gradient-gold text-gold-foreground shadow-gold"
                        : "border border-white/15 bg-surface text-muted-foreground"
                    }`}
                  >
                    {toFarsi(index + 1)}
                  </div>
                  <span
                    className={`rounded border px-2 py-0.5 text-xs font-bold ${
                      step.isEnd
                        ? "border-green-800 bg-green-950 text-green-400"
                        : "border-white/10 bg-surface text-muted-foreground"
                    }`}
                  >
                    {step.time}
                    {step.isEnd && " ✅"}
                  </span>
                </div>
                <div className="mb-4">
                  <MediaContent step={step} isActive={isActive} delay={delay} />
                </div>
                <TextContent step={step} isActive={isActive} delay={delay} />
              </div>

              {/* ── Desktop: alternating ── */}
              <div className="hidden md:grid grid-cols-[1fr_80px_1fr] items-center">
                {/* Left column */}
                <div className="pr-10">
                  {isMediaLeft ? (
                    <MediaContent step={step} isActive={isActive} delay={delay} />
                  ) : (
                    <TextContent step={step} isActive={isActive} delay={delay} />
                  )}
                </div>

                {/* Center node */}
                <div className="flex flex-col items-center gap-1.5 z-10">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-black transition-all duration-500 ${
                      isCurrent
                        ? "bg-gradient-gold text-gold-foreground shadow-gold scale-125 ring-4 ring-gold/20"
                        : isActive
                        ? "border border-gold/50 bg-background text-gold scale-110"
                        : "border border-white/15 bg-background text-muted-foreground"
                    }`}
                  >
                    {toFarsi(index + 1)}
                  </div>
                  <span
                    className={`text-[10px] font-bold transition-colors duration-500 ${
                      step.isEnd
                        ? "text-green-400"
                        : isCurrent
                        ? "text-gold"
                        : "text-muted-foreground/40"
                    }`}
                  >
                    {step.time}
                    {step.isEnd && " ✅"}
                  </span>
                </div>

                {/* Right column */}
                <div className="pl-10">
                  {isMediaLeft ? (
                    <TextContent step={step} isActive={isActive} delay={delay} />
                  ) : (
                    <MediaContent step={step} isActive={isActive} delay={delay} />
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Fixed step counter */}
      {activeStep >= 0 && (
        <div
          className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-gold/25 bg-background/90 px-4 py-2 text-xs font-bold shadow-2xl backdrop-blur-md"
          dir="rtl"
        >
          <span className="text-gold">{toFarsi(activeStep + 1)}</span>
          <span className="text-muted-foreground">از</span>
          <span className="text-muted-foreground">{toFarsi(steps.length)}</span>
        </div>
      )}
    </div>
  )
}
