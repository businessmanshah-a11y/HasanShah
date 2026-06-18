'use client'
import { motion } from 'framer-motion'
import {
  Blocks,
  Brain,
  CheckCircle2,
  Code2,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Route,
  Sparkles,
  Target,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
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
        fontSize: 'clamp(28px, 3.8vw, 52px)',
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
            fontSize: 'clamp(18px, 2.3vw, 26px)',
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
        }}
      >
        <ToolLogoRow names={slide.logos!} size={50} />
      </motion.div>

      <NavHint />
    </div>
  )
}

// ─── Layout: default (no logos) ───────────────────────────────────────────────

type SlideVisualKey = NonNullable<ContentSlideData['visual']>

interface VisualItem {
  icon: LucideIcon
  label: string
}

const visualConfig: Record<SlideVisualKey, { hero: LucideIcon; items: VisualItem[] }> = {
  'idea-barrier': {
    hero: Lightbulb,
    items: [
      { icon: Target, label: 'ایده' },
      { icon: HeartHandshake, label: 'کمک' },
      { icon: Wrench, label: 'اجرا' },
    ],
  },
  mindset: {
    hero: Brain,
    items: [
      { icon: MessageCircle, label: 'سوال' },
      { icon: Target, label: 'چرایی' },
      { icon: Sparkles, label: 'شفافیت' },
    ],
  },
  'vibe-coding': {
    hero: Sparkles,
    items: [
      { icon: MessageCircle, label: 'زبان طبیعی' },
      { icon: Brain, label: 'AI' },
      { icon: Code2, label: 'کد' },
    ],
  },
  milestones: {
    hero: Route,
    items: [
      { icon: Blocks, label: 'مرحله' },
      { icon: CheckCircle2, label: 'تست' },
      { icon: Target, label: 'مسیر' },
    ],
  },
}

function SlideVisual({ visual, visibleCount }: { visual: SlideVisualKey; visibleCount: number }) {
  const config = visualConfig[visual]
  const HeroIcon = config.hero

  return (
    <motion.div
      className="workshop-slide-visual"
      initial={{ opacity: 0, x: -18, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.18, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
      }}
      aria-hidden
    >
      <div
        style={{
          position: 'absolute',
          width: 'min(74%, 360px)',
          aspectRatio: '1',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, oklch(0.83 0.105 72 / 0.14) 0%, oklch(0.27 0.080 248 / 0.14) 42%, transparent 72%)',
          filter: 'blur(4px)',
        }}
      />

      <div
        className="workshop-slide-visual-core"
        style={{
          position: 'relative',
          aspectRatio: '1',
          borderRadius: '32px',
          display: 'grid',
          placeItems: 'center',
          background:
            'linear-gradient(145deg, oklch(0.23 0.055 252 / 0.68), oklch(0.13 0.022 272 / 0.72))',
          border: '1px solid oklch(0.83 0.105 72 / 0.22)',
          boxShadow:
            'inset 0 1px 0 oklch(0.96 0.004 72 / 0.08), 0 24px 80px -42px oklch(0.83 0.105 72 / 0.58)',
        }}
      >
        <HeroIcon
          size={94}
          strokeWidth={1.55}
          color="var(--gold)"
          style={{ filter: 'drop-shadow(0 14px 28px oklch(0.83 0.105 72 / 0.24))' }}
        />
      </div>

      <div
        className="workshop-slide-visual-items"
        style={{
          position: 'absolute',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '10px',
        }}
      >
        {config.items.map((item, i) => {
          const Icon = item.icon
          const active = i < Math.min(visibleCount, config.items.length)
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: active ? 1 : 0.44, y: 0 }}
              transition={{ delay: 0.38 + i * 0.08, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              style={{
                minHeight: '82px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '18px',
                border: `1px solid ${
                  active ? 'oklch(0.83 0.105 72 / 0.24)' : 'oklch(0.83 0.105 72 / 0.10)'
                }`,
                background: active
                  ? 'oklch(0.83 0.105 72 / 0.075)'
                  : 'oklch(0.17 0.040 258 / 0.36)',
              }}
            >
              <Icon size={25} strokeWidth={1.6} color={active ? 'var(--gold)' : 'oklch(0.70 0.090 72 / 0.62)'} />
              <span
                style={{
                  fontSize: 'clamp(14px, 1.6vw, 20px)',
                  fontWeight: 500,
                  color: active ? 'oklch(0.96 0.004 72)' : 'oklch(0.92 0.004 72 / 0.62)',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

function VisualLayout({ slide, visibleCount }: { slide: ContentSlideData; visibleCount: number }) {
  return (
    <div
      className="workshop-slide-visual-layout"
      role="region"
      aria-label={slide.title}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'grid',
        direction: 'ltr',
      }}
    >
      <BgGlow />

      <SlideVisual visual={slide.visual!} visibleCount={visibleCount} />

      <div
        className="workshop-slide-visual-copy"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '28px',
          padding: 'clamp(32px, 5vw, 64px) clamp(40px, 7vw, 96px)',
          direction: 'rtl',
        }}
      >
        <SlideHeading number={slide.number} title={slide.title} />
        <BulletList bullets={slide.bullets} visibleCount={visibleCount} />
      </div>

      <NavHint />
    </div>
  )
}

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
  if (slide.visual) return <VisualLayout slide={slide} visibleCount={visibleCount} />
  return <DefaultLayout slide={slide} visibleCount={visibleCount} />
}
