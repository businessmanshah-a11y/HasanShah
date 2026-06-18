'use client'
import { motion } from 'framer-motion'
import type { TitleSlideData } from '../slides/types'

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export function TitleSlide({ slide }: { slide: TitleSlideData }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* hero bg matching site body */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.27 0.080 248 / 0.45), transparent 70%),
            radial-gradient(circle at 80% 80%, oklch(0.27 0.080 248 / 0.12), transparent 50%)
          `,
        }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '16px',
          padding: '48px',
          maxWidth: '720px',
        }}
      >
        <motion.div
          variants={item}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            border: '1px solid oklch(0.83 0.105 72 / 0.30)',
            borderRadius: '100px',
            fontSize: '15px',
            color: 'var(--gold)',
            letterSpacing: '1px',
          }}
        >
          {slide.kicker}
        </motion.div>

        <motion.h1
          variants={item}
          style={{
            fontSize: 'clamp(48px, 6.5vw, 88px)',
            fontWeight: 800,
            color: 'var(--foreground)',
            lineHeight: 1.2,
            textWrap: 'balance' as never,
            margin: 0,
          }}
        >
          {slide.title}
          <br />
          <span style={{ color: 'var(--gold)' }}>{slide.titleAccent}</span>
        </motion.h1>

        <motion.div
          variants={item}
          style={{
            width: '48px',
            height: '2px',
            background: 'var(--gold)',
            opacity: 0.5,
            borderRadius: '1px',
          }}
        />

        <motion.p
          variants={item}
          style={{
            fontSize: 'clamp(18px, 2.2vw, 26px)',
            color: 'oklch(0.65 0.012 230)',
            maxWidth: '480px',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {slide.subtitle}
        </motion.p>

        <motion.span
          variants={item}
          style={{
            fontSize: '16px',
            color: 'oklch(0.83 0.105 72 / 0.55)',
            marginTop: '8px',
          }}
        >
          {slide.author}
        </motion.span>
      </motion.div>
    </div>
  )
}
