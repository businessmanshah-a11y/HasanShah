'use client'
import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import type { CodeSlideData } from '../slides/types'

function toPersianNum(n: number): string {
  return String(n).padStart(2, '0').replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])
}

function DialogueLines({ text, done }: { text: string; done: boolean }) {
  const lines = text.split('\n')
  const annotatedLines = lines.reduce<Array<{ line: string; speaker: 'ai' | 'me' | null }>>((acc, line) => {
    const previousSpeaker = acc.length ? acc[acc.length - 1].speaker : null
    const speaker = line.startsWith('AI:') ? 'ai' : line.startsWith('من:') ? 'me' : previousSpeaker
    acc.push({ line, speaker })
    return acc
  }, [])

  return (
    <>
      {annotatedLines.map(({ line, speaker }, i) => {
        const color =
          speaker === 'ai'
            ? 'var(--gold)'
            : speaker === 'me'
            ? 'oklch(0.94 0.006 72)'
            : 'oklch(0.60 0.008 240)'

        const isLast = i === lines.length - 1
        return (
          <span key={i} style={{ color, display: 'block' }}>
            {line}
            {isLast && !done && (
              <span
                aria-hidden
                style={{ display: 'inline-block', color: 'var(--gold)', animation: 'blink 1s step-end infinite' }}
              >
                ▌
              </span>
            )}
          </span>
        )
      })}
    </>
  )
}

export function CodeSlide({ slide }: { slide: CodeSlideData }) {
  const { displayed, done } = useTypewriter(slide.code, 28, 500)

  return (
    <div
      role="region"
      aria-label={slide.title}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        direction: 'rtl',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.27 0.080 248 / 0.35), transparent 70%)',
        }}
      />

      {/* Right panel — text (RTL: this visually appears on the right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          flex: '0 0 42%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(28px, 4vw, 56px) clamp(32px, 5vw, 64px)',
          gap: '20px',
          borderLeft: '1px solid oklch(0.83 0.105 72 / 0.14)',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(18px, 2.4vw, 30px)',
            fontWeight: 700,
            color: 'var(--foreground)',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          <span style={{ color: 'var(--gold-muted)', fontWeight: 300, fontSize: '0.7em', marginLeft: '10px' }}>
            {toPersianNum(slide.number)}
          </span>
          {slide.title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {slide.bullets.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                fontSize: 'clamp(11px, 1.4vw, 15px)',
                color: 'oklch(0.88 0.004 72)',
                lineHeight: 1.5,
              }}
            >
              <div
                aria-hidden
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  flexShrink: 0,
                  marginTop: '0.5em',
                }}
              />
              {text}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Left panel — code (in RTL layout, this is on the left) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(24px, 3vw, 48px)',
        }}
      >
        <motion.pre
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            background: 'oklch(0.10 0.018 272)',
            border: '1px solid oklch(0.83 0.105 72 / 0.12)',
            borderRadius: '10px',
            padding: 'clamp(16px, 2vw, 28px)',
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: 'clamp(10px, 1.2vw, 14px)',
            lineHeight: 1.75,
            color: 'var(--foreground)',
            direction: slide.dir ?? 'ltr',
            textAlign: slide.dir === 'rtl' ? 'right' : 'left',
            margin: 0,
            whiteSpace: 'pre',
            overflowX: 'auto',
          }}
          aria-live="polite"
          aria-label="کد نمونه"
        >
          {slide.dir === 'rtl'
            ? <DialogueLines text={displayed} done={done} />
            : <>
                {displayed}
                {!done && (
                  <span
                    aria-hidden
                    style={{ display: 'inline-block', color: 'var(--gold)', animation: 'blink 1s step-end infinite' }}
                  >
                    ▌
                  </span>
                )}
              </>
          }
        </motion.pre>
        <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
      </div>
    </div>
  )
}
