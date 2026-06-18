'use client'
import { motion } from 'framer-motion'
import { NavHint } from './NavHint'
import { MARKS, CONFIG } from './ToolLogos'
import type { ToolsSlideData } from '../slides/types'

export function ToolsSlide({ slide }: { slide: ToolsSlideData }) {
  const row1 = slide.tools.slice(0, 3)
  const row2 = slide.tools.slice(3)

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
        padding: 'clamp(28px, 4vw, 56px) clamp(48px, 8vw, 112px)',
        direction: 'rtl',
        gap: 'clamp(24px, 3vw, 40px)',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.27 0.080 248 / 0.35), transparent 70%)',
        }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          fontSize: 'clamp(26px, 3.2vw, 44px)',
          fontWeight: 700,
          color: 'var(--foreground)',
          margin: 0,
          textAlign: 'center',
        }}
      >
        {slide.title}
      </motion.h2>

      {/* Tool rows */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(16px, 2vw, 28px)',
          width: '100%',
        }}
      >
        <ToolRow tools={row1} startIndex={0} />
        {row2.length > 0 && <ToolRow tools={row2} startIndex={3} centered />}
      </div>

      <NavHint />
    </div>
  )
}

function ToolRow({
  tools,
  startIndex,
  centered = false,
}: {
  tools: ToolsSlideData['tools']
  startIndex: number
  centered?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'clamp(12px, 2vw, 24px)',
        justifyContent: centered ? 'center' : 'center',
        flexWrap: 'wrap',
      }}
    >
      {tools.map((tool, i) => (
        <ToolCard key={tool.name} tool={tool} delay={0.1 + (startIndex + i) * 0.08} />
      ))}
    </div>
  )
}

function ToolCard({
  tool,
  delay,
}: {
  tool: ToolsSlideData['tools'][number]
  delay: number
}) {
  const cfg  = CONFIG[tool.name]
  const Mark = MARKS[tool.name]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        flex: '1 1 0',
        minWidth: 'clamp(140px, 16vw, 200px)',
        maxWidth: '220px',
        background: 'oklch(0.17 0.040 258 / 0.80)',
        border: '1px solid oklch(0.83 0.105 72 / 0.13)',
        borderRadius: '14px',
        padding: 'clamp(16px, 1.8vw, 24px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        textAlign: 'center',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Logo */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(32px, 3.5vw, 44px)',
          height: 'clamp(32px, 3.5vw, 44px)',
          color: cfg.color,
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: '-30%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${cfg.color.replace(')', ' / 0.12)')} 0%, transparent 70%)`,
          }}
        />
        <Mark />
      </div>

      {/* Name */}
      <span
        style={{
          fontSize: 'clamp(12px, 1.3vw, 16px)',
          fontWeight: 700,
          color: 'var(--gold)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          direction: 'ltr',
        }}
      >
        {cfg.label}
      </span>

      {/* Badge */}
      {tool.badge && (
        <span
          style={{
            fontSize: 'clamp(11px, 1.1vw, 13px)',
            fontWeight: 500,
            color: 'oklch(0.83 0.105 72 / 0.65)',
            background: 'oklch(0.83 0.105 72 / 0.08)',
            border: '1px solid oklch(0.83 0.105 72 / 0.18)',
            borderRadius: '100px',
            padding: '2px 10px',
            letterSpacing: '0.04em',
            direction: 'ltr',
          }}
        >
          {tool.badge}
        </span>
      )}

      {/* Personal note */}
      <p
        style={{
          fontSize: 'clamp(13px, 1.5vw, 17px)',
          color: 'oklch(0.62 0.012 230)',
          lineHeight: 1.55,
          margin: 0,
          direction: 'rtl',
          fontStyle: 'italic',
        }}
      >
        {tool.note}
      </p>
    </motion.div>
  )
}
