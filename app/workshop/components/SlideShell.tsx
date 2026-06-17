// app/workshop/components/SlideShell.tsx
'use client'
import { useState, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { slides } from '../slides/data'
import { useKeyboardNav } from '../hooks/useKeyboardNav'
import { useSwipeNav } from '../hooks/useSwipeNav'
import { GoldenThread } from './GoldenThread'
import { TitleSlide } from './TitleSlide'
import { ContentSlide } from './ContentSlide'
import { CodeSlide } from './CodeSlide'
import { ToolsSlide } from './ToolsSlide'
import { SummarySlide } from './SummarySlide'
import type { SlideData } from '../slides/types'

const slideVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] as never },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] as never },
  }),
}

const reducedVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, y: 0, transition: { duration: 0 } },
  exit: { opacity: 0, y: 0, transition: { duration: 0 } },
}

function renderSlide(slide: SlideData, revealCount: number) {
  switch (slide.type) {
    case 'title':   return <TitleSlide slide={slide} />
    case 'content': return <ContentSlide slide={slide} revealCount={revealCount} />
    case 'code':    return <CodeSlide slide={slide} />
    case 'tools':   return <ToolsSlide slide={slide} />
    case 'summary': return <SummarySlide slide={slide} />
  }
}

export function SlideShell() {
  const [index, setIndex]           = useState(0)
  const [direction, setDirection]   = useState(1)
  const [revealCount, setRevealCount] = useState(0)
  const total = slides.length
  const prefersReduced = useReducedMotion()

  const goNext = useCallback(() => {
    const slide = slides[index]
    // Sequential slide: reveal one more bullet before navigating
    if (
      slide.type === 'content' &&
      slide.sequential &&
      revealCount < slide.bullets.length - 1
    ) {
      setRevealCount(r => r + 1)
      return
    }
    if (index < total - 1) {
      setDirection(1)
      setIndex(i => i + 1)
      setRevealCount(0)
    }
  }, [index, total, revealCount])

  const goPrev = useCallback(() => {
    if (index > 0) {
      setDirection(-1)
      setIndex(i => i - 1)
      setRevealCount(0)
    }
  }, [index])

  const goFirst = useCallback(() => {
    setDirection(-1)
    setIndex(0)
    setRevealCount(0)
  }, [])

  const goLast = useCallback(() => {
    setDirection(1)
    setIndex(total - 1)
    setRevealCount(0)
  }, [total])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen()
    else document.exitFullscreen()
  }, [])

  useKeyboardNav(goNext, goPrev, goFirst, goLast, toggleFullscreen)
  useSwipeNav(goNext, goPrev)

  const current  = slides[index]
  const variants = prefersReduced ? reducedVariants : slideVariants

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--background)',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <GoldenThread current={index} total={total} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ position: 'absolute', inset: 0 }}
          role="region"
          aria-label={`اسلاید ${index + 1} از ${total}`}
          aria-live="polite"
        >
          {renderSlide(current, revealCount)}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
