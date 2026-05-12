# UI/UX Design

## Design Philosophy

Every visual and interaction decision was made with three learning profiles in mind:
dyslexia, dysgraphia, and ADHD. The design avoids cognitive overload, minimizes visual
noise, and keeps interactions physically simple (large tap targets, no keyboard entry).

## Color Palette

```css
:root {
  --bg:          #f5efe6;  /* warm cream — background */
  --surface:     #faf6ef;  /* slightly lighter cream — cards */
  --ink:         #2b2a26;  /* dark warm brown — primary text */
  --ink-soft:    #6b665e;  /* medium warm brown — secondary text */
  --line:        #e3dccf;  /* warm beige — borders, dividers */
  --accent:      #2f6b5e;  /* muted dark teal — primary actions */
  --accent-soft: #d4e3df;  /* light teal tint — hover states */
  --correct:     #4a7c59;  /* muted green — correct answer */
  --wrong:       #b85450;  /* muted red — wrong answer */
  --wrong-soft:  #f3dad8;  /* pale red — wrong answer background */
}
```

**Why warm cream instead of white?**
Pure white (#ffffff) creates high contrast that can cause visual stress for dyslexic readers
(the "visual crowding" effect). A warm cream background with dark brown ink reduces this
contrast while maintaining readability.

**Why muted teal instead of vibrant blue/green?**
Saturated accent colors attract the eye and create visual noise. Muted teal is noticeable
without being distracting, and pairs naturally with the cream palette.

**Why muted red/green for feedback?**
Bright red and green can cause anxiety ("wrong = bad") and are inaccessible for color-blind
users. The muted versions communicate feedback clearly without emotional overload.

## Typography

**Font:** Lexend (Google Fonts)
Weights used: 300 (light), 400 (regular), 500 (medium), 600 (semibold)

Lexend was designed specifically for reading proficiency and is recommended by the
British Dyslexia Association. Its key properties:
- Wide letter spacing reduces crowding between characters
- Tall x-height improves lowercase legibility
- Slightly wider letterforms reduce reversals (b/d, p/q confusion)
- No decorative serifs that can blur together at small sizes

**Line height:** `1.6` (body) — generous vertical spacing reduces line-confusion
**Letter spacing:** `0.01em` — slight extra spacing throughout
**Base font size:** `16px` (never below 14px anywhere in the app)

**Word display sizes:**
- English word (study/quiz card): `2rem` / `600` weight — large and prominent
- Russian translation: `1.1rem` / `400` weight — softer, less dominant
- On very small screens (< 400px): English word scales to `1.6rem`

## Layout

Max width `720px`, centered, with `16px` side padding. This creates a comfortable reading
column on all devices — not too wide on desktop (avoids long lines), not cramped on mobile.

The layout is single-column throughout. No side panels, no tabs within screens, no
multi-column quiz options on larger screens (quiz stays 2-column max, 1-column on mobile).

## Touch Targets

All interactive elements meet or exceed the 44×44px minimum touch target recommended by
Apple HIG and Google Material Design:
- Primary buttons: full width, 14px padding → typically 48px+ height
- Quiz options: `min-height: 44px`
- Word chips: `min-height: 44px`
- Icon buttons: `44×44px` exactly

This is important for ADHD users who may have motor control variability.

## Progress Indicators

Three visual progress systems:

1. **Session progress bar** — thin 6px strip at top of study/quiz/phrase screens.
   Smooth CSS transition (0.4s). Gives a sense of pace without being distracting.

2. **Mastery dots** — three small circles below the English word in quiz mode.
   Filled = correct answer given. Visual representation of "3 correct = learned."

3. **Home progress bar** — shows closed/total for selected level+category.

These were chosen over numerical scores because percentages and numbers can be stressful
for learners with dyscalculia or ADHD. The dots and bar communicate progress spatially.

## Session Size Selector

Four options: 5 / 15 / 25 / 50 words. Default: 15.

- **5:** For very short attention spans or when studying in fragmented time
- **15:** Default — one complete study+quiz loop in ~10–15 minutes
- **25:** Extended session
- **50:** Marathon session for motivated learners

The small 5-word option is explicitly included for ADHD users who need to feel
accomplishment in very short bursts.

## Audio (Text-to-Speech)

Web Speech API with `lang = 'en-US'`, `rate = 0.85` (slightly slower than natural speech).

Auto-speaks the English word when:
- A new study card is shown
- A quiz card appears (normal mode)
- A correct quiz answer is selected

Manual speak buttons are available on study cards (🔊) and quiz cards.

iOS requires a user gesture before audio will play — the app unlocks TTS on first click
by sending a silent utterance (`volume = 0`).

30% of quiz questions use "audio mode" — the English word is hidden and only the speaker
button is shown. The user must recall the meaning from sound alone, training listening skills.

## What We Deliberately Did NOT Do

**No streaks / gamification:** Streaks punish missed days and create anxiety for ADHD users.
No fire emojis, no streak counters, no penalties for taking a break.

**No timer:** Timed quizzes create stress and are counterproductive for dyslexia/ADHD.
Every question stays on screen until the user is ready to answer.

**No spaced repetition (SRS) scheduler:** SRS (like Anki) calculates optimal review dates.
Not implemented in v1 because it requires persistent date tracking and the scheduling
logic adds complexity. The `needsReview` flag provides a simpler alternative. Planned for v2.

**No keyboard input anywhere:** The phrase builder uses tap chips, the quiz uses tap buttons.
Keyboard input is a significant burden for dysgraphic users. Never required.

**No dark mode:** Not implemented in v1. The warm cream palette is gentler than typical
dark modes which use high-contrast white text on black. Dark mode planned for v2.

**No animations beyond transitions:** No flying cards, no confetti, no score popups.
Motion can be distracting for ADHD; celebratory effects can feel patronizing to adults.
The only animations are the progress bar width transition and button hover states.

**No ads, no accounts, no telemetry:** The app works offline after first load and sends
zero data anywhere.
