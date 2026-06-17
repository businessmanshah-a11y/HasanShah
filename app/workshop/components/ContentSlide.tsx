'use client'
import { motion } from 'framer-motion'
import { NavHint } from './NavHint'
import { ToolLogo, ToolLogoRow } from './ToolLogos'
import type { ContentSlideData } from '../slides/types'

function toPersianNum(n: number): string {
  return String(n).padStart(2, '0').replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])
}

const bulletVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: { delay: 0.3 + i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] as any },
  }),
}

// ─── Shared sub-components ───────────────────────────────────────────────────

function SlideHeading({ number, title }: { number: number; title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        fontSize: 'clamp(20px, 2.8vw, 38px)',
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
        {toPersianNum(number)}
      </span>
      {title}
    </motion.h2>
  )
}

function BulletList({ bullets, visibleCount }: { bullets: string[]; visibleCount?: number }) {
  const limit = visibleCount ?? bullets.length
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {bullets.slice(0, limit).map((text, i) => (
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
            fontSize: 'clamp(13px, 1.7vw, 18px)',
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
  )
}

function BgGlow() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.27 0.080 248 / 0.35), transparent 70%)',
      }}
    />
  )
}

// ─── Layout: single logo (split panel) ───────────────────────────────────────

function SingleLogoLayout({ slide, visibleCount }: { slide: ContentSlideData; visibleCount: number }) {
  const logo = slide.logos![0]
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        direction: 'rtl',
      }}
    >
      <BgGlow />

      {/* Text panel — right side in RTL (first child) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: '0 0 58%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(32px, 5vw, 64px) clamp(36px, 6vw, 80px)',
          gap: '28px',
        }}
      >
        <SlideHeading number={slide.number} title={slide.title} />
        <BulletList bullets={slide.bullets} visibleCount={visibleCount} />
      </div>

      {/* Logo panel — left side in RTL (second child) */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          flex: '0 0 42%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRight: '1px solid oklch(0.83 0.105 72 / 0.13)',
        }}
      >
        {/* Large ambient glow behind logo */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            width: '60%',
            aspectRatio: '1',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, oklch(0.83 0.105 72 / 0.07) 0%, transparent 70%)',
          }}
        />
        <ToolLogo name={logo} size={92} />
      </motion.div>

      <NavHint />
    </div>
  )
}

// ─── Layout: multi-logo row (logos shown below bullets) ──────────────────────

function MultiLogoLayout({ slide, visibleCount }: { slide: ContentSlideData; visibleCount: number }) {
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
        padding: 'clamp(32px, 5vw, 56px) clamp(40px, 7vw, 96px)',
        direction: 'rtl',
        gap: '24px',
      }}
    >
      <BgGlow />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <SlideHeading number={slide.number} title={slide.title} />
        <BulletList bullets={slide.bullets} visibleCount={visibleCount} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 'clamp(12px, 2vw, 24px)',
          borderTop: '1px solid oklch(0.83 0.105 72 / 0.12)',
        }}
      >
        <ToolLogoRow names={slide.logos!} size={50} />
      </motion.div>

      <NavHint />
    </div>
  )
}

// ─── Layout: default (no logos) ───────────────────────────────────────────────

function DefaultLayout({ slide, visibleCount }: { slide: ContentSlideData; visibleCount: number }) {
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
      <BgGlow />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <SlideHeading number={slide.number} title={slide.title} />
        <BulletList bullets={slide.bullets} visibleCount={visibleCount} />
      </div>

      <NavHint />
    </div>
  )
}

// ─── Entry point ─────────────────────────────────────────────────────────────

export function ContentSlide({ slide, revealCount = 0 }: { slide: ContentSlideData; revealCount?: number }) {
  const count       = slide.logos?.length ?? 0
  const visibleCount = slide.sequential ? revealCount + 1 : slide.bullets.length

  if (count === 1) return <SingleLogoLayout slide={slide} visibleCount={visibleCount} />
  if (count > 1)  return <MultiLogoLayout slide={slide} visibleCount={visibleCount} />
  return <DefaultLayout slide={slide} visibleCount={visibleCount} />
}
