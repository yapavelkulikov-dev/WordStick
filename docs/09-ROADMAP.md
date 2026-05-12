# Roadmap

## Current Version: v1.0

**What's in v1:**
- 16,032 words across A1–C2 (6 CEFR levels)
- 909 phrases (150–159 per level)
- 34 thematic categories
- 75 vintage-style illustrations (A1 words)
- Study phase → Quiz phase → Finish screen flow
- Phrase builder (tap-to-assemble, A1 phrases)
- 3-correct mastery model (not a streak)
- Weighted random selection with anti-repetition buffer
- `needsReview` flag + review session
- Text-to-speech (Web Speech API, 30% audio quiz mode)
- Progress bars + mastery dots
- Session size selector (5/15/25/50)
- Level selector + category filter
- Stats screen with per-level progress bars
- Export/import progress as JSON
- Fully offline after first load
- GitHub Pages deployment (free, no backend)
- 29 Playwright tests

## Planned: v2

### Spaced Repetition System (SRS)

Replace the current `needsReview` boolean with a proper SRS scheduler (SM-2 or FSRS algorithm).
Track review due dates in `localStorage`. Add a "Due Today" session type on the home screen.

This is the single most impactful improvement for long-term retention.

**Implementation sketch:**
```javascript
// Per-word record would add:
{
  interval: 1,       // days until next review
  easeFactor: 2.5,   // SM-2 ease factor
  nextReview: '2026-06-01', // ISO date string
}
```

### Reverse Quiz Mode

Add EN→RU quiz (current) **and** RU→EN quiz where the user sees the Russian translation
and must choose the correct English word from 6 options.

Toggle on the quiz options row. Harder, more useful for active vocabulary production.

### Voice Input Mode

Allow the user to speak the English word aloud instead of tapping a button.
Web Speech API `SpeechRecognition` — available in Chrome/Edge but not Firefox/Safari.
Compare recognized text to correct answer (fuzzy match to handle TTS variation).

### Dark Theme

Add a CSS class toggle on `<body>` for dark mode:
```css
body.dark {
  --bg:      #1e1c18;
  --surface: #2a2720;
  --ink:     #e8e0d0;
  /* ... */
}
```

Persist preference in `localStorage`. Honor `prefers-color-scheme` system setting by default.

### Level-Qualified Progress Keys

Fix the cross-level ID collision issue by qualifying localStorage keys with level:
```javascript
// Current:  state.words['hotel']
// Proposed: state.words['A1:hotel']
```

Requires a migration path for existing user data.

### Expand Image Coverage to ~3,800

Currently 75 of ~3,800 `imageEligible` words have images. Generating the remainder
requires approximately:
- ~3,725 ComfyUI jobs
- At 28 steps per image: ~3,725 × 28 = ~104,000 total diffusion steps
- At ~15 seconds per image on A100: ~15.5 hours on 1 GPU, ~8 hours on 2 GPUs

Strategy:
1. Run `python3 scripts/generate-images.py --from-words-js --only-missing` on both GPUs
2. Review outputs — reject and re-generate failures
3. Commit in batches of 100 (the script auto-commits every 100)

### Offline PWA

Add a Service Worker and Web App Manifest so the app can be installed as a PWA
(home screen shortcut, offline support, app-like fullscreen).

### Per-Session Stats

Show a more detailed finish screen: time spent, words per minute answered, comparison
to previous session average.
