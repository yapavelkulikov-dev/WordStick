# WordStick — Project Overview

## What is WordStick?

WordStick is a browser-based English vocabulary trainer for Russian-speaking engineers.
It covers all six CEFR levels (A1–C2) and includes 16,032 words and 909 phrases organized
into 34 thematic categories — with a strong emphasis on engineering, workplace, and
professional vocabulary.

The app runs entirely in the browser with no backend, no accounts, and no data sent anywhere.
Progress is saved locally via `localStorage`.

**Live URL:** https://yapavelkulikov-dev.github.io/WordStick/

## Target Audience

Primary users: Russian-speaking engineers and technical specialists who need to work in
English — reading documentation, writing emails, participating in international meetings,
and collaborating with colleagues abroad.

Secondary audience: anyone learning English at any CEFR level, from complete beginner (A1)
to near-native proficiency (C2).

## Design Goals

The UI was deliberately designed with three learning profiles in mind:

**Dyslexia** — Reading difficulties caused by letter confusion, reversal, or text tracking problems.
Addressed by: Lexend typeface (designed specifically for dyslexia), generous line-height (1.6),
wide letter-spacing (0.01em), soft warm background (#f5efe6) instead of harsh white,
large font size (2rem for English words), minimal visual clutter.

**Dysgraphia** — Difficulty with writing. The phrase builder uses tap-to-assemble chips instead
of free text input. The quiz uses multiple-choice tapping, never keyboard entry.

**ADHD** — Short attention spans and difficulty sustaining effort. Addressed by: short fixed sessions
(5/15/25/50 words selectable), clear visual progress dots (3 dots per word), immediate
feedback after each answer, automatic text-to-speech, emoji/image visual anchors for every word.

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla JS (ES5-compatible, no build step) |
| Styling | Pure CSS with CSS custom properties |
| Fonts | Google Fonts — Lexend (300/400/500/600) |
| Data | Plain JS files loaded as `<script>` tags |
| Storage | Browser `localStorage` |
| Hosting | GitHub Pages (static, free) |
| Testing | Playwright (29 tests, headless Chromium) |
| Images | FLUX.2-dev via ComfyUI on 2× NVIDIA A100 |
| Image server | `http-server` (dev only) |

No npm build, no webpack, no React — the entire app is a single `index.html` + `app.js` + `styles.css`.
This keeps it deployable to any static host and accessible on slow connections.
