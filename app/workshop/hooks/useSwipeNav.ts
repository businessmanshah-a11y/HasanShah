'use client'
import { useEffect, useRef } from 'react'

export function useSwipeNav(onNext: () => void, onPrev: () => void) {
  const startX = useRef<number | null>(null)

  useEffect(() => {
    function onTouchStart(e: TouchEvent) {
      startX.current = e.touches[0].clientY
    }
    function onTouchEnd(e: TouchEvent) {
      if (startX.current === null) return
      const delta = startX.current - e.changedTouches[0].clientY
      if (Math.abs(delta) < 50) return
      if (delta > 0) onNext()   // swipe up → next
      else onPrev()             // swipe down → prev
      startX.current = null
    }
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [onNext, onPrev])
}
