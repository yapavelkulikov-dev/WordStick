# Learning Algorithm

## Overview

WordStick uses a simple mastery-based repetition algorithm. Each word or phrase is tracked
independently with a small progress record in `localStorage`. The goal is to "close" each item
by answering it correctly 3 times across quiz sessions.

## localStorage Structure

Storage key: `wordstick.v1`

```json
{
  "currentLevel":    "B1",
  "currentCategory": "engineer-tools",
  "currentMode":     "words",
  "sessionSize":     15,
  "words": {
    "wrench":   { "correct": 3, "mistakesInSession": 0, "needsReview": false, "reviewCorrect": 0 },
    "gasket":   { "correct": 1, "mistakesInSession": 2, "needsReview": true,  "reviewCorrect": 0 },
    "caliper":  { "correct": 0, "mistakesInSession": 0, "needsReview": false, "reviewCorrect": 0 }
  },
  "phrases": {
    "how-are-you": { "correct": 3, "mistakesInSession": 0, "needsReview": false, "reviewCorrect": 0 }
  }
}
```

Each `words[id]` / `phrases[id]` record:

| Field | Type | Meaning |
|-------|------|---------|
| `correct` | 0–3 | Cumulative correct answers; reaches 3 → word is "closed" (learned) |
| `mistakesInSession` | int | Number of wrong answers accumulated across sessions |
| `needsReview` | bool | Flagged for review queue when mistakes exceed threshold |
| `reviewCorrect` | 0–3 | Correct answers during review mode; 3 clears `needsReview` |

## The "3 Correct" Rule

A word is considered **learned** (closed) when `correct >= 3`.

**Important:** This is a cumulative count across all sessions, not a streak.
If you answer correctly twice, then wrong, then correct once more — `correct` stays at 2
(wrong answers do not decrease the counter). The counter is capped at 3.

This was a deliberate design choice: punishing mistakes by resetting the counter creates
frustration loops for learners with ADHD. The current model rewards persistence over perfection.

```javascript
// On correct answer:
rec.correct = Math.min(3, rec.correct + 1);
if (rec.correct >= 3) {
  // Remove from active set — word is closed
  session.active = session.active.filter(i => i.id !== correct.id);
  session.closed++;
}

// On wrong answer — counter is NOT changed:
rec.mistakesInSession++;
correct._mistakes++;
if (correct._mistakes > 2) rec.needsReview = true;
```

## Weighted Random Selection

Within a quiz session, the next question is chosen from the active (not yet closed) words
using weighted random selection. Words with fewer correct answers get higher weight:

```javascript
function weightedRandom(items, weightFn) {
  const total = items.reduce((s, x) => s + weightFn(x), 0);
  let r = Math.random() * total;
  for (const x of items) { r -= weightFn(x); if (r <= 0) return x; }
  return items[items.length - 1];
}

// Weight = (3 - correct). So:
//   correct=0 → weight 3  (most likely to appear)
//   correct=1 → weight 2
//   correct=2 → weight 1  (least likely, but still appears)
```

## Anti-Repetition Queue

To avoid showing the same word twice in a row, a `recentIds` buffer tracks the last N shown
items (where N = min(3, activeCount − 1)). New candidates are filtered to exclude these:

```javascript
function getNextItem(active, recentIds) {
  const queueLen = Math.min(3, Math.max(0, active.length - 1));
  let candidates = active.filter(w => !recentIds.slice(-queueLen).includes(w.id));
  if (!candidates.length) candidates = active;  // fallback if pool is tiny
  return weightedRandom(candidates, w => {
    const rec = state.words[w.id] || state.phrases[w.id] || initRecord();
    return 3 - rec.correct;
  });
}
```

## Study Phase (Word Mode)

Before the quiz, all session words are shown one at a time on "study cards" (EN + RU + image/emoji
+ forms + auto-TTS). This exposure phase is not scored. The user can browse forwards and backwards,
open examples, or listen again. When they tap "Next" on the last card, the quiz begins.

## Quiz Phase (Word Mode)

- 6 options shown (1 correct + 5 distractors from the level pool)
- 30% chance of "audio mode" (word hidden, only speaker button shown; user guesses from sound)
- On correct: green highlight, TTS replay, move to next card after 700ms
- On wrong: red wrong + green correct revealed for 1.5s, then 3-second quick-study flash
  (study card reappears briefly with no buttons), then back to quiz

## NeedsReview Flag

A word is flagged `needsReview = true` when it accumulates more than 2 mistakes within
a single quiz session (`correct._mistakes > 2`). This triggers a "Review" card on the home
screen. The review session works identically to a regular session, but tracks `reviewCorrect`
separately. Three correct answers in review mode clears the flag.

## Phrase Builder Phase

Phrases use a different interaction — tap-to-assemble:
1. Russian translation shown at top
2. English word chips shuffled in pool at bottom
3. User taps chips to move them to the assembly zone
4. Tapping a placed chip returns it to pool
5. "Check" button compares assembled order to correct answer (case-insensitive)
6. On wrong: correct answer shown in green chips, hint revealed, `mistakesInSession++`
7. On correct: correct flash, TTS, move to next phrase

## Active Level Calculation

The stats screen computes the user's "active level" — the highest level at which ≥80% of
words are closed:

```javascript
function computeLevel() {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    const lv = LEVELS[i];
    const words = wordsForLevel(lv);
    if (!words.length) continue;
    const closed = words.filter(w => isClosed(w.id, 'words')).length;
    if (closed / words.length >= 0.8) return lv;
  }
  return 'A1';
}
```

## Shuffle Algorithm

Fisher-Yates (Knuth) shuffle used for session word pools and quiz distractors:

```javascript
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
```
