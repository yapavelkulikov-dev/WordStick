# Development History

## Phase A — Initial Setup

Created the base application: HTML/CSS/JS scaffold, home screen with level/category selectors,
study screen, quiz screen, phrase builder, finish screen, and stats screen. Set up GitHub remote
at `yapavelkulikov-dev/WordStick` and enabled GitHub Pages from `main` branch root.

Initial A1 word set (750 words) and phrase set (150 phrases) were created covering all 34
categories, with special depth in engineering vocabulary.

**Key decisions:**
- No framework. Vanilla JS was chosen to eliminate build-step friction and make the project
  trivially deployable as a static site.
- No API calls. All data is bundled as JS files loaded via `<script>` tags. This means the
  app works fully offline after first load.
- `localStorage` for progress. No accounts, no server, no privacy concerns.

## Phase B — Image Generation Infrastructure

Set up dual ComfyUI instances on a server with two NVIDIA A100 GPUs:
- GPU 0: ComfyUI on port 8188 (already running pre-project)
- GPU 1: ComfyUI launched on port 8189 for the project

Wrote `scripts/generate-images.py` — a dual-GPU parallel image generator using
`ThreadPoolExecutor`. The script queues prompts to both ComfyUI instances simultaneously,
waits for results, downloads images, downscales to 256×256, and quantizes to ≤25 KB per PNG.

**Image style — 3 iterations:**

**Iteration 1: Flat design / app icons.**
First prompt attempt used modern illustration style with clean shapes and vibrant colors.
Problem: results looked like generic stock icons, had no educational warmth, and felt out of
place against the warm cream UI. Rejected.

**Iteration 2: Colorful cartoon.**
Second attempt used bright cartoon style. Problem: too many colors, busy compositions, some
results had text baked in (FLUX tends to add labels). At 256×256 the detail was lost.
The style conflicted with the calm, dyslexia-friendly UI palette. Rejected.

**Iteration 3: Vintage educational textbook (FINAL).**
Inspired by Soviet and American school textbooks from the 1960s–1980s. Hand-drawn ink outlines,
simple cross-hatching, muted sage/teal palette on warm cream background. This style:
- Matches the app's warm #f5efe6 background exactly
- Is simple enough to read at 256×256
- Feels educational rather than commercial
- Has low visual noise (important for dyslexia/ADHD)
- Is visually distinctive and consistent

75 images generated across 4 packs (A: engineering drawings/tools, B: office/shop floor,
C: transport/safety, D: everyday objects/food/home).

## Phase C — Full A1–C2 Content Generation

All 16,032 words and 909 phrases were generated in Python batch scripts using Claude as the
AI author.

| Level | Words | Phrases | Notes |
|-------|-------|---------|-------|
| A1 | 748 | 150 | Engineering-heavy; 2 duplicates removed post-hoc |
| A2 | 750 | 150 | Business, travel, daily communication |
| B1 | 1,008 | 150 | Idioms, professional phrasal verbs, workplace vocabulary |
| B2 | 1,500 | 159 | Advanced professional, business, academic vocabulary |
| C1 | 4,014 | 150 | Specialist vocabulary across sciences, law, finance |
| C2 | 8,012 | 150 | Ultra-advanced: 80+ scientific domains, scholarly discourse |

**Deduplication strategy:** Each batch script loaded all existing word IDs from all previously
generated files before generating new entries. As the C2 corpus grew, duplicate rates climbed
to ~30% per batch — the script filtered these out automatically.

**Data quality issues found and fixed:**

- Apostrophe syntax errors (`'you're welcome'` treated as JS string boundary) in multiple files.
  Fixed with an iterative line-by-line fixer (not a regex — regex caused collateral damage).
- Null array slots (sparse arrays) from extra commas (`},,,` patterns) in words-b1.js,
  words-b2.js, words-c2.js, phrases-a2.js, phrases-b1.js.
  Fixed by removing double-commas and standalone comma lines, restoring missing separators.
- Rogue `]` closing the PHRASES_C1 array at entry 99 (out of 150). Fixed by removing the line.
- phrases-b2.js was too corrupted (typos `ru':'` and `examples':[` throughout) — regenerated
  entirely with 159 clean business vocabulary phrases.
- 2 within-level duplicate IDs in A1 (`fruit`, `hospital`). Removed duplicate entries.

## Phase D — Validation and Testing

Installed Playwright and wrote 29 automated tests covering:
- Data loading counts for all 12 word/phrase files
- Null slot detection (using spread operator to catch sparse array holes)
- Field integrity (every entry has id, en, ru, level)
- Within-level ID uniqueness
- Study session flow (learn card → study screen → next/prev)
- Quiz options rendering
- localStorage persistence
- Stats screen open/close
- Session size selector
- Phrases mode tab
- Quit button navigation
- Responsive screenshots at 320×568, 375×812, 768×1024, 1440×900

All 29 tests pass in ~23 seconds.

## Phase E — Deployment

GitHub Pages was already configured from Phase A. Final push deployed all 13 commits.
Build confirmed at status `built` via GitHub API.
