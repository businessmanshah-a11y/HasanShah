export type HeroSparkle = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  twinkle: number;
  phase: number;
};

export function createHeroSparkles(
  width: number,
  height: number,
  dpr: number,
  random: () => number = Math.random,
): HeroSparkle[] {
  const cssWidth = width / dpr;
  const cssHeight = height / dpr;
  const count = Math.min(520, Math.max(260, Math.floor((cssWidth * cssHeight) / 520)));

  return Array.from({ length: count }, () => {
    const depth = random();
    const topBias = Math.pow(random(), 1.8);

    return {
      x: random() * width,
      y: topBias * height * 0.74,
      radius: (0.32 + depth * 0.73) * dpr,
      vx: (random() - 0.5) * 0.11 * dpr,
      vy: (0.018 + random() * 0.057) * dpr,
      alpha: 0.16 + random() * 0.52,
      twinkle: 0.14 + random() * 0.22,
      phase: random() * Math.PI * 2,
    };
  });
}

export function moveHeroSparkle(sparkle: HeroSparkle, width: number, height: number) {
  sparkle.x += sparkle.vx;
  sparkle.y += sparkle.vy;
  sparkle.phase += 0.006 + sparkle.twinkle * 0.01;

  const margin = 18;
  if (sparkle.x < -margin) sparkle.x = width;
  if (sparkle.x > width) sparkle.x = 0;
  if (sparkle.y > height) sparkle.y = (sparkle.phase % 1) * height * 0.34;
}
