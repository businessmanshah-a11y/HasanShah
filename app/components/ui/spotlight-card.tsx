"use client";
import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue:   { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green:  { base: 120, spread: 200 },
  red:    { base: 0,   spread: 200 },
  orange: { base: 30,  spread: 200 },
  gold:   { base: 40,  spread: 12  }, // champagne gold — matches --gold token oklch(0.83 0.105 72)
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96',
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'gold',
  size = 'md',
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { base, spread } = glowColorMap[glowColor];

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const card = cardRef.current;
    if (!card) return;

    const syncPointer = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const distance = Math.hypot(dx, dy);
      const proximity = Number(getComputedStyle(card).getPropertyValue('--proximity')) || 120;
      const opacity = Math.max(0, 1 - distance / proximity);

      card.style.setProperty('--local-x', localX.toFixed(2));
      card.style.setProperty('--local-y', localY.toFixed(2));
      card.style.setProperty('--xp', Math.max(0, Math.min(1, localX / rect.width)).toFixed(2));
      card.style.setProperty('--glow-opacity', opacity.toFixed(3));
    };

    const resetPointer = () => {
      card.style.setProperty('--local-x', '-9999');
      card.style.setProperty('--local-y', '-9999');
      card.style.setProperty('--glow-opacity', '0');
    };

    document.addEventListener('pointermove', syncPointer);
    document.addEventListener('pointerleave', resetPointer);

    return () => {
      document.removeEventListener('pointermove', syncPointer);
      document.removeEventListener('pointerleave', resetPointer);
    };
  }, []);

  const getSizeClasses = () => {
    if (customSize) return '';
    return sizeMap[size];
  };

  const getInlineStyles = (): React.CSSProperties => {
    const baseStyles: Record<string, string | number> = {
      '--base': base,
      '--spread': spread,
      '--radius': '16',
      '--border': '2',
      '--backdrop': 'oklch(0.17 0.040 258)',
      '--backup-border': 'oklch(0.83 0.105 72 / 0.25)',
      '--size': '180',
      '--proximity': '120',
      '--saturation': '80',
      '--lightness': '66',
      '--glow-opacity': '0',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `
        linear-gradient(var(--backdrop), var(--backdrop)),
        radial-gradient(
          var(--spotlight-size) var(--spotlight-size) at
          calc(var(--local-x, -9999) * 1px)
          calc(var(--local-y, -9999) * 1px),
          hsl(var(--hue, 40) calc(var(--saturation, 80) * 1%) calc(var(--lightness, 66) * 1%) / var(--glow-opacity, 0)),
          transparent 68%
        ),
        linear-gradient(var(--backup-border), var(--backup-border))
      `,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box, border-box',
      border: 'var(--border-size) solid transparent',
      position: 'relative',
      isolation: 'isolate',
    };

    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles as React.CSSProperties;
  };

  const beforeAfterStyles = `
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      border-radius: inherit;
      opacity: var(--glow-opacity, 0);
      transition: opacity 120ms ease;
    }

    [data-glow]::after {
      inset: -18px;
      z-index: -1;
      background: radial-gradient(
        calc(var(--spotlight-size) * 0.85) calc(var(--spotlight-size) * 0.85) at
        calc(var(--local-x, -9999) * 1px)
        calc(var(--local-y, -9999) * 1px),
        hsl(var(--hue, 40) calc(var(--saturation, 80) * 1%) calc(var(--lightness, 62) * 1%) / 0.28),
        transparent 72%
      );
      filter: blur(16px);
    }

    [data-glow] > :not([data-glow]) {
      position: relative;
      z-index: 1;
    }

    @media (prefers-reduced-motion: reduce), (hover: none) {
      [data-glow]::after { display: none; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={{ ...getInlineStyles(), borderRadius: 'calc(var(--radius) * 1px)' } as React.CSSProperties}
        className={`
          ${getSizeClasses()}
          ${!customSize ? 'aspect-[3/4]' : ''}
          relative
          grid
          grid-rows-[1fr_auto]
          shadow-[0_1rem_2rem_-1rem_black]
          p-4
          gap-4
          backdrop-blur-[5px]
          ${className}
        `}
      >
        {children}
      </div>
    </>
  );
};

export { GlowCard };
