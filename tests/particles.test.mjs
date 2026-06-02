import assert from "node:assert/strict";
import test from "node:test";

import { createHeroSparkles, moveHeroSparkle } from "../app/components/particles.ts";

test("createHeroSparkles favors tiny gold dust in the upper hero area", () => {
  const sparkles = createHeroSparkles(1200, 560, 2, () => 0.42);

  assert.equal(sparkles.length, 323);
  assert.ok(sparkles.every((sparkle) => sparkle.radius >= 0.45 && sparkle.radius <= 2.1));
  assert.ok(sparkles.every((sparkle) => sparkle.y <= 560 * 0.74));
  assert.ok(sparkles.every((sparkle) => Math.abs(sparkle.vx) <= 0.055 * 2));
  assert.ok(sparkles.every((sparkle) => sparkle.vy >= 0.018 * 2 && sparkle.vy <= 0.075 * 2));
});

test("moveHeroSparkle wraps softly when it drifts beyond the canvas", () => {
  const sparkle = {
    x: 1210,
    y: 570,
    radius: 1,
    vx: 0.04,
    vy: 0.06,
    alpha: 0.5,
    twinkle: 0.2,
    phase: 1,
  };

  moveHeroSparkle(sparkle, 1200, 560);

  assert.ok(sparkle.x >= 0 && sparkle.x <= 1200);
  assert.ok(sparkle.y >= 0 && sparkle.y <= 560 * 0.34);
});
