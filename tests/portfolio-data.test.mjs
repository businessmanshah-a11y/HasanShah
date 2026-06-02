import assert from "node:assert/strict";
import test from "node:test";

import { filters, getVisibleProjects, projects } from "../app/components/portfolio-data.ts";

test("portfolio data keeps linked and unlinked projects for the visit button state", () => {
  const linked = projects.filter((project) => Boolean(project.url));
  const unlinked = projects.filter((project) => !project.url);

  assert.equal(projects.length, 5);
  assert.deepEqual(
    linked.map((project) => project.title),
    ["Lux Counter", "Rubifo"],
  );
  assert.deepEqual(
    unlinked.map((project) => project.title),
    ["Startup MVP", "Personal Brand", "Service Business"],
  );
});

test("portfolio filters return an ordered list with a first active item available", () => {
  assert.deepEqual(
    filters.map((filter) => filter.key),
    ["all", "shop", "service", "personal"],
  );
  assert.equal(getVisibleProjects("all")[0]?.title, "Lux Counter");
  assert.equal(getVisibleProjects("shop")[0]?.title, "Lux Counter");
  assert.equal(getVisibleProjects("service")[0]?.title, "Startup MVP");
  assert.equal(getVisibleProjects("personal")[0]?.title, "Personal Brand");
});
