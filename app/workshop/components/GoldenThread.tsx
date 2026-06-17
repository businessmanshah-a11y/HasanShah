'use client'
import { motion, useReducedMotion } from 'framer-motion'

interface Props { current: number; total: number }

// X position (0–100) at each slide boundary.
// ENDPOINTS[i] = where the thread enters slide i (= where it exited slide i-1).
// Needs total+1 values. The alternating left/right creates the snake feel.
const ENDPOINTS = [55, 26, 74, 20, 80, 28, 72, 23, 77, 32, 68, 50]

function xAt(i: number): number {
  return ENDPOINTS[Math.min(i, ENDPOINTS.length - 1)]
}

export function GoldenThread({ current }: Props) {
  const reduced = useReducedMotion()

  const x0 = xAt(current)      // thread enters at top of this slide
  const x1 = xAt(current + 1)  // thread exits at bottom of this slide

  // Single gentle C-curve from top (y=2) to bottom (y=98) of the viewport.
  // Control points hug the start/end X so the curve transitions in the middle third.
  const d = `M ${x0} 2 C ${x0} 40 ${x1} 60 ${x1} 98`

  const drawTransition = reduced
    ? { duration: 0 }
    : { duration: 0.85, ease: [0.25, 0, 0.15, 1] as const }

  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        {/* Main golden thread — dim, decorative, stays behind slide content */}
        <motion.path
          key={`line-${current}`}
          d={d}
          stroke="oklch(0.83 0.105 72 / 0.30)"
          strokeWidth="0.26"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition}
        />
      </svg>
    </>
  )
}
