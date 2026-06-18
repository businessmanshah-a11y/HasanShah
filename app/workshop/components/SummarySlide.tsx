'use client'
import { motion } from 'framer-motion'
import type { SummarySlideData } from '../slides/types'

export function SummarySlide({ slide }: { slide: SummarySlideData }) {
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
        alignItems: 'center',
        padding: 'clamp(32px, 5vw, 64px)',
        direction: 'rtl',
        textAlign: 'center',
        gap: '32px',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.27 0.080 248 / 0.4), transparent 70%)',
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: 'clamp(28px, 3.8vw, 50px)',
          fontWeight: 700,
          color: 'var(--foreground)',
          margin: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {slide.title}
      </motion.h2>

      {/* 6-step grid: 3 cols × 2 rows */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(10px, 1.5vw, 20px)',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        {slide.steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'oklch(0.17 0.040 258)',
              border: '1px solid oklch(0.83 0.105 72 / 0.14)',
              borderRadius: '10px',
              padding: 'clamp(12px, 1.5vw, 20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(24px, 2.8vw, 38px)',
                fontWeight: 800,
                color: 'var(--gold)',
                lineHeight: 1,
              }}
            >
              {String(i + 1).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])}
            </span>
            <span
              style={{
                fontSize: 'clamp(14px, 1.7vw, 20px)',
                color: 'oklch(0.88 0.004 72)',
                lineHeight: 1.4,
              }}
            >
              {step}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}
      >
        <span style={{ fontSize: 'clamp(16px, 1.9vw, 22px)', color: 'var(--gold)', letterSpacing: '0.02em' }}>
          {slide.url}
        </span>
        <span style={{ fontSize: 'clamp(14px, 1.6vw, 19px)', color: 'oklch(0.65 0.012 230)' }}>
          {slide.closing} · سوالات؟
        </span>
      </motion.div>
    </div>
  )
}
