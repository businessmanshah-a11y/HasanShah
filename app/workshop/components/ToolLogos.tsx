'use client'
import React from 'react'
import { motion } from 'framer-motion'

export type ToolLogoName = 'cursor' | 'claude' | 'openai' | 'github' | 'vercel' | 'codium' | 'openrouter' | 'lovable' | 'bolt' | 'replit' | 'base44'

// ─── SVG Marks ───────────────────────────────────────────────────────────────

function CursorMark() {
  return (
    <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
    </svg>
  )
}

function ClaudeMark() {
  return (
    <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" />
    </svg>
  )
}

function OpenAIMark() {
  return (
    <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" />
    </svg>
  )
}

function GitHubMark() {
  return (
    <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path d="M12 0c6.63 0 12 5.276 12 11.79-.001 5.067-3.29 9.567-8.175 11.187-.6.118-.825-.25-.825-.56 0-.398.015-1.665.015-3.242 0-1.105-.375-1.813-.81-2.181 2.67-.295 5.475-1.297 5.475-5.822 0-1.297-.465-2.344-1.23-3.169.12-.295.54-1.503-.12-3.125 0 0-1.005-.324-3.3 1.209a11.32 11.32 0 00-3-.398c-1.02 0-2.04.133-3 .398-2.295-1.518-3.3-1.209-3.3-1.209-.66 1.622-.24 2.83-.12 3.125-.765.825-1.23 1.887-1.23 3.169 0 4.51 2.79 5.527 5.46 5.822-.345.294-.66.81-.765 1.577-.69.31-2.415.81-3.495-.973-.225-.354-.9-1.223-1.845-1.209-1.005.015-.405.56.015.781.51.28 1.095 1.327 1.23 1.666.24.663 1.02 1.93 4.035 1.385 0 .988.015 1.916.015 2.196 0 .31-.225.664-.825.56C3.303 21.374-.003 16.867 0 11.791 0 5.276 5.37 0 12 0z" />
    </svg>
  )
}

function VercelMark() {
  return (
    <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path d="M12 0l12 20.785H0L12 0z" />
    </svg>
  )
}

function CodiumMark() {
  return (
    <svg fill="none" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path
        d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 2v20M4 6.5l8 5.5 8-5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function OpenRouterMark() {
  return (
    <svg fill="none" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <circle cx="4" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 12h4l3-6h4M6.5 12h4l3 6h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Lovable — exact path from @lobehub/icons
function LovableMark() {
  return (
    <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path clipRule="evenodd" d="M7.082 0c3.91 0 7.081 3.179 7.081 7.1v2.7h2.357c3.91 0 7.082 3.178 7.082 7.1 0 3.923-3.17 7.1-7.082 7.1H0V7.1C0 3.18 3.17 0 7.082 0z" />
    </svg>
  )
}

// Bolt (bolt.new by StackBlitz) — not in lobe-icons, clean lightning bolt
function BoltMark() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path d="M13 2L3 14h8l-1 8 11-12h-8l2-8z" />
    </svg>
  )
}

// Replit — exact path from @lobehub/icons
function ReplitMark() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path d="M11.878 7.761H3.482A1.469 1.469 0 012 6.304V1.457C2 .644 2.67 0 3.482 0h6.913c.827 0 1.483.658 1.483 1.457v6.304zM20.882 16.215h-8.995V7.75h8.995c.87 0 1.588.717 1.588 1.586v5.294c0 .885-.717 1.586-1.588 1.586zM10.395 24H3.482C2.67 24 2 23.343 2 22.546v-4.853c0-.797.67-1.454 1.482-1.454h8.396v6.307c0 .797-.67 1.454-1.483 1.454z" />
    </svg>
  )
}

// Base44 (Iranian AI builder) — not in lobe-icons, custom mark
function Base44Mark() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
      <path d="M4 3h7.5C13.98 3 16 5.02 16 7.5S13.98 12 11.5 12H4V3zm0 9h8C14.43 12 17 14.57 17 17c0 2.43-2.57 4-5 4H4v-9z" />
    </svg>
  )
}

// ─── Config ───────────────────────────────────────────────────────────────────

export const CONFIG: Record<ToolLogoName, { label: string; tagline: string; color: string }> = {
  cursor: {
    label: 'Cursor',
    tagline: 'محیط کدنویسی AI-First',
    color: 'oklch(0.96 0.003 240)',
  },
  claude: {
    label: 'Claude',
    tagline: 'دستیار هوش مصنوعی Anthropic',
    color: 'oklch(0.74 0.10 46)',
  },
  openai: {
    label: 'OpenAI Codex',
    tagline: 'هوش مصنوعی کدنویسی OpenAI',
    color: 'oklch(0.96 0.003 240)',
  },
  github: {
    label: 'GitHub',
    tagline: 'مخزن و انتشار کد',
    color: 'oklch(0.96 0.003 240)',
  },
  vercel: {
    label: 'Vercel',
    tagline: 'استقرار سریع وب‌سایت',
    color: 'oklch(0.96 0.003 240)',
  },
  codium: {
    label: 'Codeium',
    tagline: 'دستیار کدنویسی با توکن رایگان زیاد',
    color: 'oklch(0.72 0.14 158)',
  },
  openrouter: {
    label: 'OpenRouter',
    tagline: 'دسترسی به همه مدل‌ها از یک جا',
    color: 'oklch(0.75 0.12 280)',
  },
  lovable: {
    label: 'Lovable',
    tagline: 'ساخت سایت با پرامپت فارسی',
    color: 'oklch(0.65 0.22 10)',
  },
  bolt: {
    label: 'Bolt',
    tagline: 'سایت‌ساز سریع با هوش مصنوعی',
    color: 'oklch(0.68 0.18 270)',
  },
  replit: {
    label: 'Replit',
    tagline: 'کدنویسی و دیپلوی در یه جا',
    color: 'oklch(0.70 0.15 35)',
  },
  base44: {
    label: 'Base44',
    tagline: 'سایت‌ساز ایرانی با هوش مصنوعی',
    color: 'oklch(0.72 0.14 160)',
  },
}

export const MARKS: Record<ToolLogoName, () => React.ReactElement> = {
  cursor: CursorMark,
  claude: ClaudeMark,
  openai: OpenAIMark,
  github: GitHubMark,
  vercel: VercelMark,
  codium: CodiumMark,
  openrouter: OpenRouterMark,
  lovable: LovableMark,
  bolt: BoltMark,
  replit: ReplitMark,
  base44: Base44Mark,
}

// ─── Components ───────────────────────────────────────────────────────────────

interface LogoProps { name: ToolLogoName; size?: number; delay?: number }

export function ToolLogo({ name, size = 80, delay = 0 }: LogoProps) {
  const cfg  = CONFIG[name]
  const Mark = MARKS[name]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 + delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] as never }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
    >
      <div
        style={{
          position: 'relative',
          width: size,
          height: size,
          color: cfg.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: '-24%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${cfg.color.replace(')', ' / 0.09)')} 0%, transparent 70%)`,
          }}
        />
        <Mark />
      </div>

      <span
        style={{
          fontSize: '11px',
          fontWeight: 600,
          color: 'var(--gold)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          direction: 'ltr',
        }}
      >
        {cfg.label}
      </span>

      <span
        style={{
          fontSize: '11px',
          color: 'oklch(0.52 0.012 230)',
          direction: 'rtl',
          textAlign: 'center',
          lineHeight: 1.5,
          maxWidth: '130px',
        }}
      >
        {cfg.tagline}
      </span>
    </motion.div>
  )
}

export function ToolLogoRow({ names, size = 54 }: { names: ToolLogoName[]; size?: number }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'clamp(24px, 4vw, 48px)',
        alignItems: 'flex-start',
        justifyContent: 'center',
        direction: 'ltr',
        flexWrap: 'wrap',
      }}
    >
      {names.map((name, i) => (
        <ToolLogo key={name} name={name} size={size} delay={i * 0.07} />
      ))}
    </div>
  )
}
