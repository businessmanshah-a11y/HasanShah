'use client'
import { useEffect } from 'react'

export function useKeyboardNav(
  onNext: () => void,
  onPrev: () => void,
  onFirst: () => void,
  onLast: () => void,
  onFullscreen: () => void,
) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          onNext()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          onPrev()
          break
        case 'Home':
          e.preventDefault()
          onFirst()
          break
        case 'End':
          e.preventDefault()
          onLast()
          break
        case 'f':
        case 'F':
          onFullscreen()
          break
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onNext, onPrev, onFirst, onLast, onFullscreen])
}
