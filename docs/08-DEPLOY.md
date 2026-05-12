# Deployment and Testing

## GitHub Pages

The app is hosted on GitHub Pages, served directly from the `main` branch root directory.
No build step, no CI pipeline — every push to `main` triggers a GitHub Pages rebuild.

**Live URL:** https://yapavelkulikov-dev.github.io/WordStick/

**Configuration:**
- Source branch: `main`
- Source path: `/` (root)
- HTTPS enforced: yes
- Build type: legacy (direct file serving, no Jekyll)

### How Deploys Work

1. Push commits to `main`
2. GitHub detects changes and queues a Pages build (usually starts within 10 seconds)
3. Build completes in 20–60 seconds
4. New version is live at the URL

Check status via GitHub API:
```bash
gh api repos/yapavelkulikov-dev/WordStick/pages
# Look for "status": "built"
```

Or wait in a loop:
```bash
until gh api repos/yapavelkulikov-dev/WordStick/pages 2>/dev/null \
  | python3 -c "import sys,json; d=json.load(sys.stdin); s=d['status']; print(s); exit(0 if s=='built' else 1)" \
  2>/dev/null; do sleep 5; done && echo "Deployed!"
```

### Important: Large Data Files

The data files are large (words-c2.js is ~3 MB). GitHub Pages serves them without
compression by default. On slow connections, initial load may take a few seconds.
The app is fully functional after first load (cached by browser).

## Playwright Test Suite

Location: `tests/wordstick.spec.js`
Config: `playwright.config.js`

Run with:
```bash
npx playwright test
npx playwright test --reporter=list    # show each test name
npx playwright show-report             # HTML report in browser
```

The config starts an http-server on port 8787 automatically for each test run.

### Test Coverage (29 tests)

**App loads (2 tests)**
- Home screen renders with logo and mode tabs
- Level selector has all 6 CEFR options (A1–C2)

**Data loading — word counts (6 tests)**
- A1: 748 words, A2: 750, B1: 1,008, B2: 1,500, C1: 4,014, C2: 8,012

**Data loading — phrase counts (6 tests)**
- A1: 150, A2: 150, B1: 150, B2: 159, C1: 150, C2: 150

**Data integrity (3 tests)**
- No null or sparse slots in any word array (spread operator catches holes that filter misses)
- All word entries have id, en, ru, level fields
- Word IDs are unique within each level (no within-level duplicates)

**Interaction (8 tests)**
- Clicking "Learn" card starts study session and shows a word
- "Next" button advances through study cards (counter updates)
- After all study cards, quiz screen appears with ≥2 options
- localStorage has data after starting a session
- Stats screen opens, shows level info, closes correctly
- Session size buttons (5/15/25/50) update selection state
- Phrases mode tab becomes active when clicked
- Quit button from study screen returns to home screen

**Responsive screenshots (4 tests)**
- Screenshot saved at 320×568 (small mobile)
- Screenshot saved at 375×812 (iPhone-sized mobile)
- Screenshot saved at 768×1024 (tablet)
- Screenshot saved at 1440×900 (desktop)
- Each screenshot test also verifies the logo is visible

Screenshots are saved to `screenshots/` directory:
- `home-mobile-320.png`
- `home-mobile-375.png`
- `home-tablet-768.png`
- `home-desktop-1440.png`

### Known Limitations

- Cross-level ID duplicates: 107 word IDs appear in multiple CEFR levels
  (e.g., `hotel` in A1 and A2). This is intentional — common words appear at
  multiple levels. The tests check within-level uniqueness only.
  In practice, `localStorage` progress tracks by word ID without level context, so
  studying `hotel` in A1 and A2 would share the same progress record. This is
  accepted behavior for v1; a level-qualified key (e.g., `A1:hotel`) is planned for v2.

- Audio tests are excluded: Web Speech API is not available in headless Chromium.
  TTS functionality is tested manually.
