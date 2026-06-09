"use client";
import { useEffect, useRef } from "react";
import { createHeroSparkles, moveHeroSparkle, type HeroSparkle } from "./particles";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let lastFrame = 0;
    const isMobile = window.innerWidth < 768;
    let dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
    let w = 0;
    let h = 0;
    let sparkles: HeroSparkle[] = [];

    const setCanvasSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2);
      w = canvas.width = Math.floor(canvas.offsetWidth * dpr);
      h = canvas.height = Math.floor(canvas.offsetHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      sparkles = createHeroSparkles(w, h, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Cache the two shared gradients for the background light — recreate only on resize
    let beamGrad: CanvasGradient | null = null;
    let rimGrad: CanvasGradient | null = null;
    let gradW = 0;
    let gradH = 0;

    const ensureGrads = () => {
      if (gradW === w && gradH === h) return;
      gradW = w; gradH = h;
      beamGrad = ctx.createRadialGradient(w * 0.5, -h * 0.08, 0, w * 0.5, 0, h * 0.58);
      beamGrad.addColorStop(0, "rgba(255, 236, 190, 0.22)");
      beamGrad.addColorStop(0.2, "rgba(239, 192, 123, 0.115)");
      beamGrad.addColorStop(0.48, "rgba(239, 192, 123, 0.045)");
      beamGrad.addColorStop(1, "rgba(239, 192, 123, 0)");
      rimGrad = ctx.createLinearGradient(0, 0, 0, h * 0.22);
      rimGrad.addColorStop(0, "rgba(255, 247, 222, 0.16)");
      rimGrad.addColorStop(0.32, "rgba(239, 192, 123, 0.055)");
      rimGrad.addColorStop(1, "rgba(239, 192, 123, 0)");
    };

    const drawSparkle = (sparkle: HeroSparkle) => {
      const twinkle = 0.72 + Math.sin(sparkle.phase) * sparkle.twinkle;
      const alpha = sparkle.alpha * twinkle;
      const topLift = 1 + Math.max(0, 1 - sparkle.y / (h * 0.58)) * 0.42;
      // Simple circle — avoids creating a RadialGradient object every frame per sparkle
      ctx.globalAlpha = Math.min(alpha * topLift + 0.05, 0.9);
      ctx.fillStyle = "rgba(255, 236, 190, 1)";
      ctx.beginPath();
      ctx.arc(sparkle.x, sparkle.y, sparkle.radius * (1 + topLift * 0.5), 0, Math.PI * 2);
      ctx.fill();
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      // Throttle to ~30 fps — skip frames on high-refresh or slow devices
      if (now - lastFrame < 32) return;
      lastFrame = now;
      if (document.hidden) return;

      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, w, h);
      ensureGrads();
      ctx.fillStyle = beamGrad!;
      ctx.fillRect(0, 0, w, h * 0.72);
      ctx.fillStyle = rimGrad!;
      ctx.fillRect(0, 0, w, h * 0.22);

      for (const sparkle of sparkles) {
        moveHeroSparkle(sparkle, w, h);
        drawSparkle(sparkle);
      }
      ctx.globalAlpha = 1;
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}
