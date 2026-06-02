"use client";
import { useEffect, useRef } from "react";
import { createHeroSparkles, moveHeroSparkle, type HeroSparkle } from "./particles";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let sparkles: HeroSparkle[] = [];

    const setCanvasSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(canvas.offsetWidth * dpr);
      h = canvas.height = Math.floor(canvas.offsetHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      sparkles = createHeroSparkles(w, h, dpr);
    };

    const onResize = () => {
      setCanvasSize();
    };
    setCanvasSize();
    window.addEventListener("resize", onResize);

    const drawTopLight = () => {
      const centerX = w * 0.5;
      const beam = ctx.createRadialGradient(centerX, -h * 0.08, 0, centerX, 0, h * 0.58);
      beam.addColorStop(0, "rgba(255, 236, 190, 0.22)");
      beam.addColorStop(0.2, "rgba(239, 192, 123, 0.115)");
      beam.addColorStop(0.48, "rgba(239, 192, 123, 0.045)");
      beam.addColorStop(1, "rgba(239, 192, 123, 0)");

      ctx.fillStyle = beam;
      ctx.fillRect(0, 0, w, h * 0.72);

      const rim = ctx.createLinearGradient(0, 0, 0, h * 0.22);
      rim.addColorStop(0, "rgba(255, 247, 222, 0.16)");
      rim.addColorStop(0.32, "rgba(239, 192, 123, 0.055)");
      rim.addColorStop(1, "rgba(239, 192, 123, 0)");

      ctx.fillStyle = rim;
      ctx.fillRect(0, 0, w, h * 0.22);
    };

    const drawSparkle = (sparkle: HeroSparkle) => {
      const twinkle = 0.72 + Math.sin(sparkle.phase) * sparkle.twinkle;
      const alpha = sparkle.alpha * twinkle;
      const topLift = 1 + Math.max(0, 1 - sparkle.y / (h * 0.58)) * 0.42;
      const glow = sparkle.radius * 4.4 * topLift;
      const gradient = ctx.createRadialGradient(
        sparkle.x,
        sparkle.y,
        0,
        sparkle.x,
        sparkle.y,
        glow,
      );

      gradient.addColorStop(0, `rgba(255, 236, 190, ${Math.min(alpha * topLift + 0.14, 0.9)})`);
      gradient.addColorStop(0.28, `rgba(239, 192, 123, ${alpha * 0.38 * topLift})`);
      gradient.addColorStop(1, "rgba(239, 192, 123, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(sparkle.x, sparkle.y, glow, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 247, 222, ${Math.min(alpha * topLift + 0.12, 1)})`;
      ctx.beginPath();
      ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      drawTopLight();
      for (const sparkle of sparkles) {
        moveHeroSparkle(sparkle, w, h);
        drawSparkle(sparkle);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
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
