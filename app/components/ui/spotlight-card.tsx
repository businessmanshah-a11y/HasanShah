"use client";
import React, { useEffect, useRef, useState, ReactNode } from 'react';

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
  const innerRef = useRef<HTMLDivElement>(null);
  // SSR-safe: assume pointer device; corrected on mount to avoid repaints on mobile
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    setIsPointerDevice(!isTouch);
    if (isTouch) return;

    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      const card = cardRef.current;
      if (!card) return;
      card.style.setProperty('--x', x.toFixed(2));
      card.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      card.style.setProperty('--y', y.toFixed(2));
      card.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      // Local coords for Firefox: pseudo-element mask+fixed is broken in Firefox,
      // so ::before/::after use scroll attachment with card-relative coordinates.
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--local-x', (x - rect.left).toFixed(2));
      card.style.setProperty('--local-y', (y - rect.top).toFixed(2));
    };
    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

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
      '--size': '220',
      '--outer': '1',
      '--saturation': '80',
      '--lightness': '65',
      '--bg-spot-opacity': '0.12',
      '--border-spot-opacity': '1',
      '--border-light-opacity': '0.7',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundColor: 'var(--backdrop, transparent)',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
    };

    // Use local coords (relative to each card) instead of fixed viewport coords.
    // background-attachment:fixed breaks in Firefox when the element also has
    // backdrop-filter (which creates a new stacking context) — produces wrong glow.
    // Scroll attachment + card-local --local-x/y is identical visually and cross-browser.
    if (isPointerDevice) {
      baseStyles.backgroundImage = `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--local-x, -9999) * 1px)
        calc(var(--local-y, -9999) * 1px),
        hsl(var(--hue, 40) calc(var(--saturation, 80) * 1%) calc(var(--lightness, 65) * 1%) / var(--bg-spot-opacity, 0.12)), transparent
      )`;
    }

    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles as React.CSSProperties;
  };

  // Pseudo-elements use background-attachment:scroll + local coordinates (--local-x/y).
  // Using fixed+mask is broken in Firefox: the mask doesn't clip the gradient correctly,
  // causing the glow to bleed across sibling cards. Local coords fix this cross-browser.
  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: inherit;
      background-attachment: scroll;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box;
      mask-composite: exclude;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box;
      -webkit-mask-composite: xor;
    }

    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--local-x, -9999) * 1px)
        calc(var(--local-y, -9999) * 1px),
        hsl(var(--hue, 40) calc(var(--saturation, 80) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
      );
      filter: brightness(2);
    }

    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--local-x, -9999) * 1px)
        calc(var(--local-y, -9999) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 0.7)), transparent 100%
      );
    }

    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      background: none;
      pointer-events: none;
      border: none;
    }

    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }

    @media (hover: hover) {
      [data-glow] [data-glow] {
        will-change: filter;
        filter: blur(calc(var(--border-size) * 10));
      }
    }

    @media (prefers-reduced-motion: reduce), (hover: none) {
      [data-glow]::before,
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
        <div ref={innerRef} data-glow />
        {children}
      </div>
    </>
  );
};

export { GlowCard };
