# Implementation Plan: HasanOS Completion

**Goal:** Fix all critical bugs, fill missing files, and complete all unimplemented features across all 5 phases of the HasanOS implementation plan.

**Scope:** This plan covers the gap between the current ~65% complete state and the 100% target state for the HasanOS project. It addresses broken imports, missing modules, incomplete web pages, and unimplemented Phase 4/5 features. The existing business-os markdown files are already parsed and the web dashboard renders — the focus is on making everything work end-to-end.

**Context:** The project is structured as a Python core (memory, planning, intelligence, parsing) with a Next.js 15 web dashboard (App Router, Prisma/SQLite). The Python core loads business-os markdown files and generates morning briefings, while the web dashboard provides visual interfaces for planning, tracking, and CRM. 4 critical import bugs prevent the Python core from running. Several web pages exist but are disconnected from real data. Multiple Phase 4 intelligence features and Phase 5 polish features are entirely unimplemented.

---

## Types

No new types are needed — the existing Prisma schema (shared between Python and web) is sufficient and complete. The schema covers: EpisodicLog, Pattern, Principle, CoreValue, DailyPlan, WeeklySprint, MonthlyPlan, QuarterlyOKR, Habit, HabitLog, EnergyLog, DeepWorkSession, DashboardSnapshot, CRMLead, Project.

---

## Files

This implementation touches 44 files: 21 Python core files (6 new, 15 modified), 10 web Next.js files (3 new pages, 7 modified), 2 infra files (new), and 2 configuration files (modified).

### New Files to Create

| # | File Path | Purpose |
|---|-----------|---------|
| 1 | `hasanos/config/agent.py` | Python module wrapping agent.yaml config loading with Pydantic models |
| 2 | `hasanos/core/business_os/sync.py` | Bidirectional sync engine: DB → business-os markdown (write path) |
| 3 | `hasanos/core/business_os/models.py` | Business-OS domain models matching Python Prisma schema |
| 4 | `hasanos/core/planning/daily.py` | Daily planning engine: interactive daily planning logic |
| 5 | `hasanos/core/planning/weekly.py` | Weekly sprint planning engine |
| 6 | `hasanos/core/planning/monthly.py` | Monthly planning engine |
| 7 | `hasanos/core/planning/quarterly.py` | Quarterly OKR planning engine |
| 8 | `hasanos/core/tracking/energy.py` | Energy logging and analytics module |
| 9 | `hasanos/core/tracking/deepwork.py` | Deep Work session tracking module |
| 10 | `hasanos/core/memory/episodic.py` | L1 Episodic memory (event/decision logging) - split from models.py |
| 11 | `hasanos/core/memory/patterns.py` | L2 Pattern extraction logic |
| 12 | `hasanos/core/memory/principles.py` | L3 Principle synthesis logic |
| 13 | `hasanos/core/memory/core_values.py` | L4 Core value management |
| 14 | `hasanos/core/intelligence/calibration.py` | L4 Calibration Check - detects drift between Constitution and actual behavior |
| 15 | `hasanos/core/intelligence/notifications.py` | Smart notification engine (ntfy.sh / terminal alerts) |
| 16 | `hasanos/core/intelligence/weekly_report.py` | Weekly Pattern Report auto-generation |
| 17 | `hasanos/web/src/app/review/monthly/page.tsx` | Monthly Review guided page |
| 18 | `hasanos/web/src/app/review/quarterly/page.tsx` | Quarterly Review guided page |
| 19 | `hasanos/web/infra/Dockerfile.core` | Dockerfile for Python core |
| 20 | `hasanos/web/infra/Dockerfile.web` | Dockerfile for Next.js web |
| 21 | `hasanos/web/src/app/api/notifications/route.ts` | API route for triggering notifications |
| 22 | `hasanos/web/src/app/api/weekly-report/route.ts` | API route for weekly pattern report |
| 23 | `hasanos/web/src/app/api/calibrate/route.ts` | API route for L4 calibration check |
| 24 | `hasanos/web/src/lib/db/seed.ts` | Database seed script for initial data |

### Modified Files

| # | File Path | Changes |
|---|-----------|---------|
| 1 | `hasanos/core/cli/main.py` | Fix broken imports (`.morning` → `..planning.morning`, remove `save_daily_plan_to_business_os`, add correct sync function) |
| 2 | `hasanos/core/planning/morning.py` | Fix broken import (`..config.agent` → `..config.agent`) and add `save_daily_plan_to_business_os()` function |
| 3 | `hasanos/core/intelligence/alignment.py` | Fix broken import (`.tracking.habits` → `..tracking.habits`) |
| 4 | `hasanos/core/memory/models.py` | Refactor to delegate to split modules (episodic, patterns, principles, core_values) for L1-L4 |
| 5 | `hasanos/core/tracking/habits.py` | No API changes needed; verified correct |
| 6 | `hasanos/core/business_os/parser.py` | Add `__all__` exports, fix minor edge cases in markdown parsing |
| 7 | `hasanos/main.py` | Fix `run_morning_briefing_cli` import path |
| 8 | `hasanos/web/src/app/layout.tsx` | Add navigation layout, sidebar integration, persistent nav structure |
| 9 | `hasanos/web/src/app/api/dashboard/route.ts` | Add real data aggregation for CEO Dashboard KPIs |
| 10 | `hasanos/web/src/app/api/energy/route.ts` | Add GET/POST for energy logs |
| 11 | `hasanos/web/src/app/api/deep-work/route.ts` | Create missing deep-work API route |
| 12 | `hasanos/web/src/app/api/risks/route.ts` | Connect to actual risk detection logic |
| 13 | `hasanos/web/src/app/api/daily-plan/route.ts` | Fix JSON serialization (avoid double-stringify) |
| 14 | `hasanos/web/scripts/sync-business-os.ts` | Complete the bidirectional sync script |
| 15 | `hasanos/web/tailwind.config.ts` | Add dark mode support (class-based) |
| 16 | `hasanos/web/src/app/globals.css` | Add dark mode CSS variables and RTL support classes |
| 17 | `hasanos/test_core.py` | Add tests for new modules |

### Files to Create (Backup/Export)

| # | File Path | Purpose |
|---|-----------|---------|
| 1 | `hasanos/web/src/lib/export.ts` | JSON + Markdown export utilities |
| 2 | `hasanos/web/src/app/api/export/route.ts` | API route for one-click export |

---

## Functions

### New Functions

| Function | File | Signature | Purpose |
|----------|------|-----------|---------|
| `save_daily_plan_to_business_os` | `core/planning/morning.py` | `async def save_daily_plan_to_business_os(briefing: dict) -> None` | Writes daily plan to business-os markdown |
| `sync_push_to_business_os` | `core/business_os/sync.py` | `async def sync_push_to_business_os() -> dict[str, int]` | Pushes all DB changes to business-os markdown files |
| `reconcile_conflicts` | `core/business_os/sync.py` | `async def reconcile_conflicts() -> list[dict]` | Detects timestamp-based markdown/DB conflicts |
| `calibrate_constitution_alignment` | `core/intelligence/calibration.py` | `async def calibrate_constitution_alignment() -> dict` | Quarterly check: flag if behavior drifts from Constitution |
| `detect_behavior_drift` | `core/intelligence/calibration.py` | `async def detect_behavior_drift() -> list[dict]` | Analyzes episodic logs vs core values |
| `send_notification` | `core/intelligence/notifications.py` | `async def send_notification(channel: str, title: str, message: str)` | Sends ntfy/terminal/telegram notification |
| `schedule_notifications` | `core/intelligence/notifications.py` | `async def schedule_notifications() -> None` | Morning briefing, DW block start, follow-ups |
| `generate_weekly_pattern_report` | `core/intelligence/weekly_report.py` | `async def generate_weekly_pattern_report() -> str` | Auto-generates Friday pattern report |
| `calculate_deep_work_metrics` | `core/tracking/deepwork.py` | `async def calculate_deep_work_metrics(days: int) -> dict` | Quality trend, interruption analysis |
| `get_energy_heatmap` | `core/tracking/energy.py` | `async def get_energy_heatmap(days: int) -> dict` | Day × Block energy data for heatmap |
| `export_json` | `web/src/lib/export.ts` | `export async function exportJSON(): Promise<Blob>` | One-click JSON export |
| `export_markdown` | `web/src/lib/export.ts` | `export async function exportMarkdown(): Promise<Blob>` | One-click markdown export |

### Modified Functions

| Function | File | Changes |
|----------|------|---------|
| `load_config` (local) | `core/planning/morning.py` | Replace with import from `config/agent.py` |
| `morning` command | `core/cli/main.py` | Fix import path, replace `save_daily_plan_to_business_os` call |
| `plan` command | `core/cli/main.py` | Fix same import issue |
| `evening` command | `core/cli/main.py` | Fix import issue |
| `main` | `main.py` | Fix import path for `run_morning_briefing_cli` |
| `getDashboardData` | `web/src/app/dashboard/page.tsx` | Add real data connections for meetings, content, pipeline |
| `GET /api/daily-plan` | `web/src/app/api/daily-plan/route.ts` | Fix JSON parsing for deepWorkBlocks, noGoList |
| `POST /api/daily-plan` | `web/src/app/api/daily-plan/route.ts` | Fix JSON.stringify double-wrapping |

---

## Classes

No new Python classes are needed. The existing Pydantic models (`MorningBriefing` in `morning.py`) are sufficient. New Pydantic models will be added to `config/agent.py`:

| Class | File | Purpose |
|-------|------|---------|
| `AgentConfig` | `config/agent.py` | Pydantic model for agent.yaml with validation |
| `Notifier` | `core/intelligence/notifications.py` | Simple notification sending class |

---

## Dependencies

### Python Dependencies (pyproject.toml)
- **No new dependencies needed.** The existing dependencies (pydantic, prisma, pyyaml, httpx, apscheduler, openai, etc.) already cover all required functionality. The new modules use only existing dependencies.

### Web Dependencies (web/package.json)
- **No new npm packages needed.** All functionality uses existing dependencies (next, react, recharts, prisma, shadcn components).

---

## Testing

Tests already exist in `test_core.py` covering database, parser, morning briefing, and intelligence modules. New tests needed:

| Test File | New Tests |
|-----------|-----------|
| `hasanos/test_core.py` | `test_sync_push()` — verifies DB → markdown write path round-trip |
| `hasanos/test_core.py` | `test_calibration()` — verifies constitution alignment check |
| `hasanos/test_core.py` | `test_notifications()` — verifies notification sending |
| `hasanos/test_core.py` | `test_weekly_report()` — verifies pattern report generation |
| `hasanos/test_core.py` | `test_energy_heatmap()` — verifies energy data aggregation |
| `hasanos/test_core.py` | `test_deep_work_metrics()` — verifies DW analytics |

**Validation strategy:**
1. Run `python test_core.py` — all 12+ tests must pass
2. Run `cd web && npm run dev` — all pages render without errors
3. Manual: navigate each page in browser, verify data loads
4. Manual: run `python main.py morning` — valid JSON output

---

## Implementation Order

The work is organized into 8 sequential batches. Each batch builds on the previous one and is independently verifiable.

1. **Fix critical bugs (4 imports + 1 missing function):** Fix imports in `cli/main.py`, `morning.py`, `alignment.py`, `main.py`. Create `save_daily_plan_to_business_os()` in `morning.py`.
   - *Verify:* `python test_core.py` passes after fixes

2. **Create config/agent.py module:** Move YAML loading to a proper Pydantic module with validation.
   - *Verify:* `python -c "from config.agent import AgentConfig; print(AgentConfig())"` works

3. **Split memory module into L1-L4 sub-modules:** Create `episodic.py`, `patterns.py`, `principles.py`, `core_values.py`. Refactor `models.py` to delegate imports.
   - *Verify:* `python test_core.py` still passes

4. **Create missing planning/tracking sub-modules:** Create `daily.py`, `weekly.py`, `monthly.py`, `quarterly.py`, `energy.py`, `deepwork.py`. These wrap existing DB operations into domain-level APIs.
   - *Verify:* Each module can be imported without errors

5. **Complete sync engine:** Create `sync.py` in business_os with bidirectional sync. Complete `sync-business-os.ts` for web side. Create `seed.ts`.
   - *Verify:* `python -c "from core.business_os.sync import sync_push_to_business_os"` works

6. **Build missing intelligence features:** Create `calibration.py`, `notifications.py`, `weekly_report.py`.
   - *Verify:* All 4 missing Phase 4 features now have working code

7. **Complete missing web pages:** Create Monthly Review page, Quarterly Review page, fix API routes, add export/backup. Add dark mode + RTL CSS. Create Dockerfiles.
   - *Verify:* `npm run dev` — all pages load, export downloads work

8. **Final integration & testing:** Run full test suite, manually test end-to-end flows (morning briefing → daily plan → evening review → sync → dashboard). Fix any remaining edge cases.
   - *Verify:* `python test_core.py` passes all tests, web dashboard shows real data