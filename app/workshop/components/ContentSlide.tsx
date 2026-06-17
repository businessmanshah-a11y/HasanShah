'use client'
import { motion } from 'framer-motion'
import { NavHint } from './NavHint'
import type { ContentSlideData } from '../slides/types'

function toPersianNum(n: number): string {
  return String(n).padStart(2, '0').replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])
}

const bulletVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] as number[] },
  }),
}

export function ContentSlide({ slide }: { slide: ContentSlideData }) {
  return (
    <div
      role="region"
      aria-label={slide.title}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(32px, 5vw, 64px) clamp(40px, 7vw, 96px)',
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

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(22px, 3vw, 40px)',
            fontWeight: 700,
            color: 'var(--foreground)',
            lineHeight: 1.3,
            margin: 0,
            textWrap: 'balance' as never,
          }}
        >
          <span
            style={{
              color: 'var(--gold-muted)',
              fontWeight: 300,
              fontSize: '0.7em',
              marginLeft: '12px',
            }}
          >
            {toPersianNum(slide.number)}
          </span>
          {slide.title}
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {slide.bullets.map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={bulletVariants}
              initial="hidden"
              animate="show"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                fontSize: 'clamp(13px, 1.8vw, 19px)',
                color: 'oklch(0.92 0.004 72)',
                lineHeight: 1.55,
              }}
            >
              <div
                aria-hidden
                style={{
                  width: '6px',
                  height: '6px',
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
      </div>

      <NavHint />
    </div>
  )
}
