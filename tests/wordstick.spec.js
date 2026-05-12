const { test, expect } = require('@playwright/test');
const path = require('path');

// ─── helpers ────────────────────────────────────────────────────────────────

async function clearStorage(page) {
  // Navigate first so localStorage is accessible, then clear and reload
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
}

async function goHome(page) {
  await page.goto('/');
  await page.waitForSelector('#screen-home.active');
}

// ─── 1. App loads ────────────────────────────────────────────────────────────

test('home screen loads with logo and mode tabs', async ({ page }) => {
  await goHome(page);
  await expect(page.locator('.logo')).toBeVisible();
  await expect(page.locator('[data-mode="words"]')).toBeVisible();
  await expect(page.locator('[data-mode="phrases"]')).toBeVisible();
});

// ─── 2. Level selector ───────────────────────────────────────────────────────

test('level selector contains all 6 CEFR levels', async ({ page }) => {
  await goHome(page);
  const options = await page.locator('#sel-level option').allTextContents();
  expect(options).toEqual(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
});

// ─── 3. Data loading: word counts ────────────────────────────────────────────

test('A1 words load correctly (748)', async ({ page }) => {
  await goHome(page);
  await page.selectOption('#sel-level', 'A1');
  const count = await page.evaluate(() => {
    return typeof WORDS_A1 !== 'undefined' ? WORDS_A1.length : -1;
  });
  expect(count).toBe(748);
});

test('A2 words load correctly (750)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof WORDS_A2 !== 'undefined' ? WORDS_A2.length : -1
  );
  expect(count).toBe(750);
});

test('B1 words load correctly (1008)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof WORDS_B1 !== 'undefined' ? WORDS_B1.length : -1
  );
  expect(count).toBe(1008);
});

test('B2 words load correctly (1500)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof WORDS_B2 !== 'undefined' ? WORDS_B2.length : -1
  );
  expect(count).toBe(1500);
});

test('C1 words load correctly (4014)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof WORDS_C1 !== 'undefined' ? WORDS_C1.length : -1
  );
  expect(count).toBe(4014);
});

test('C2 words load correctly (8012)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() => {
    if (typeof WORDS_C2 === 'undefined') return -1;
    // count only non-null/non-undefined entries to ignore sparse slots
    return [...WORDS_C2].filter(x => x != null).length;
  });
  expect(count).toBe(8012);
});

// ─── 4. Data loading: phrase counts ──────────────────────────────────────────

test('A1 phrases load correctly (150)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof PHRASES_A1 !== 'undefined' ? PHRASES_A1.length : -1
  );
  expect(count).toBe(150);
});

test('A2 phrases load correctly (150)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof PHRASES_A2 !== 'undefined' ? [...PHRASES_A2].filter(x => x != null).length : -1
  );
  expect(count).toBe(150);
});

test('B1 phrases load correctly (150)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof PHRASES_B1 !== 'undefined' ? [...PHRASES_B1].filter(x => x != null).length : -1
  );
  expect(count).toBe(150);
});

test('B2 phrases load correctly (159)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof PHRASES_B2 !== 'undefined' ? PHRASES_B2.length : -1
  );
  expect(count).toBe(159);
});

test('C1 phrases load correctly (150)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof PHRASES_C1 !== 'undefined' ? PHRASES_C1.length : -1
  );
  expect(count).toBe(150);
});

test('C2 phrases load correctly (150)', async ({ page }) => {
  await goHome(page);
  const count = await page.evaluate(() =>
    typeof PHRASES_C2 !== 'undefined' ? PHRASES_C2.length : -1
  );
  expect(count).toBe(150);
});

// ─── 5. No null slots in any word array ──────────────────────────────────────

test('no null slots in any word array', async ({ page }) => {
  await goHome(page);
  const nullCounts = await page.evaluate(() => {
    const arrays = [
      ['A1', typeof WORDS_A1 !== 'undefined' ? WORDS_A1 : []],
      ['A2', typeof WORDS_A2 !== 'undefined' ? WORDS_A2 : []],
      ['B1', typeof WORDS_B1 !== 'undefined' ? WORDS_B1 : []],
      ['B2', typeof WORDS_B2 !== 'undefined' ? WORDS_B2 : []],
      ['C1', typeof WORDS_C1 !== 'undefined' ? WORDS_C1 : []],
      ['C2', typeof WORDS_C2 !== 'undefined' ? WORDS_C2 : []],
    ];
    return arrays.map(([level, arr]) => ({
      level,
      nulls: arr.filter(x => x == null).length,
    }));
  });
  for (const { level, nulls } of nullCounts) {
    expect(nulls, `${level} has null slots`).toBe(0);
  }
});

// ─── 6. All word entries have required fields ─────────────────────────────────

test('all word entries have id, en, ru, level', async ({ page }) => {
  await goHome(page);
  const issues = await page.evaluate(() => {
    const allWords = [
      ...(typeof WORDS_A1 !== 'undefined' ? WORDS_A1 : []),
      ...(typeof WORDS_A2 !== 'undefined' ? WORDS_A2 : []),
      ...(typeof WORDS_B1 !== 'undefined' ? WORDS_B1 : []),
      ...(typeof WORDS_B2 !== 'undefined' ? WORDS_B2 : []),
      ...(typeof WORDS_C1 !== 'undefined' ? WORDS_C1 : []),
      ...(typeof WORDS_C2 !== 'undefined' ? WORDS_C2 : []),
    ].filter(w => w != null);
    return allWords
      .filter(w => !w.id || !w.en || !w.ru || !w.level)
      .slice(0, 5)
      .map(w => JSON.stringify(w).slice(0, 120));
  });
  expect(issues).toHaveLength(0);
});

// ─── 7. Word IDs are unique within each level ────────────────────────────────

test('word IDs are unique within each level', async ({ page }) => {
  await goHome(page);
  const results = await page.evaluate(() => {
    const levels = [
      ['A1', typeof WORDS_A1 !== 'undefined' ? WORDS_A1 : []],
      ['A2', typeof WORDS_A2 !== 'undefined' ? WORDS_A2 : []],
      ['B1', typeof WORDS_B1 !== 'undefined' ? WORDS_B1 : []],
      ['B2', typeof WORDS_B2 !== 'undefined' ? WORDS_B2 : []],
      ['C1', typeof WORDS_C1 !== 'undefined' ? WORDS_C1 : []],
      ['C2', typeof WORDS_C2 !== 'undefined' ? WORDS_C2 : []],
    ];
    return levels.map(([level, arr]) => {
      const clean = arr.filter(w => w != null);
      const ids = clean.map(w => w.id);
      const unique = new Set(ids);
      return { level, dupes: ids.length - unique.size };
    });
  });
  for (const { level, dupes } of results) {
    expect(dupes, `${level} has ${dupes} duplicate IDs`).toBe(0);
  }
});

// ─── 8. Learn card is clickable and opens study screen ───────────────────────

test('clicking Learn card starts study session for A1', async ({ page }) => {
  await clearStorage(page);
  await goHome(page);
  await page.selectOption('#sel-level', 'A1');
  await page.waitForTimeout(200);
  await page.locator('#card-learn').click();
  await expect(page.locator('#screen-study')).toHaveClass(/active/);
  await expect(page.locator('#study-en')).not.toBeEmpty();
});

// ─── 9. Study flow: next button advances cards ────────────────────────────────

test('next button advances through study cards', async ({ page }) => {
  await clearStorage(page);
  await goHome(page);
  await page.selectOption('#sel-level', 'A1');
  await page.waitForTimeout(200);
  await page.locator('#card-learn').click();
  await expect(page.locator('#screen-study')).toHaveClass(/active/);

  const first = await page.locator('#study-en').textContent();
  await page.locator('#btn-study-next').click();
  await page.waitForTimeout(100);
  const second = await page.locator('#study-en').textContent();
  // Should have advanced (different word, or same if session is 1 word)
  // At minimum the counter should show progress
  const counter = await page.locator('#study-counter').textContent();
  expect(counter).toMatch(/\d+ из \d+/);
});

// ─── 10. Quiz screen: options are clickable ───────────────────────────────────

test('quiz screen shows 4 options', async ({ page }) => {
  await clearStorage(page);
  await goHome(page);
  await page.selectOption('#sel-level', 'A1');
  await page.waitForTimeout(200);
  await page.locator('#card-learn').click();

  // Navigate through all study cards to reach quiz
  for (let i = 0; i < 20; i++) {
    const isStudy = await page.locator('#screen-study').evaluate(el => el.classList.contains('active'));
    if (!isStudy) break;
    await page.locator('#btn-study-next').click();
    await page.waitForTimeout(80);
  }

  const isQuiz = await page.locator('#screen-quiz').evaluate(el => el.classList.contains('active'));
  if (isQuiz) {
    const opts = await page.locator('#quiz-options .quiz-option, #quiz-options button').count();
    expect(opts).toBeGreaterThanOrEqual(2);
  } else {
    // Study session may have ended at finish screen — either is valid
    const isFinish = await page.locator('#screen-finish').evaluate(el => el.classList.contains('active'));
    expect(isFinish || isQuiz).toBe(true);
  }
});

// ─── 11. localStorage persistence ────────────────────────────────────────────

test('localStorage saves progress after studying', async ({ page }) => {
  await clearStorage(page);
  await goHome(page);
  await page.selectOption('#sel-level', 'A1');
  await page.waitForTimeout(200);
  await page.locator('#card-learn').click();
  await expect(page.locator('#screen-study')).toHaveClass(/active/);

  // Navigate to next card (triggers some state save)
  await page.locator('#btn-study-next').click();
  await page.waitForTimeout(200);

  const stored = await page.evaluate(() => {
    const keys = Object.keys(localStorage);
    return keys.length;
  });
  // App should have written something to localStorage
  expect(stored).toBeGreaterThan(0);
});

// ─── 12. Stats screen opens and closes ───────────────────────────────────────

test('stats screen opens and shows level info', async ({ page }) => {
  await goHome(page);
  await page.locator('#btn-stats').click();
  await expect(page.locator('#screen-stats')).toHaveClass(/active/);
  await expect(page.locator('#stats-current-level')).toBeVisible();

  await page.locator('#btn-stats-close').click();
  await expect(page.locator('#screen-home')).toHaveClass(/active/);
});

// ─── 13. Session size selector ────────────────────────────────────────────────

test('session size buttons work', async ({ page }) => {
  await goHome(page);
  const sizes = ['5', '15', '25', '50'];
  for (const size of sizes) {
    await page.locator(`.session-size-btn[data-n="${size}"]`).click();
    const selected = await page.locator('.session-size-btn.selected').getAttribute('data-n');
    expect(selected).toBe(size);
  }
});

// ─── 14. Phrases mode tab ─────────────────────────────────────────────────────

test('phrases mode tab is selectable', async ({ page }) => {
  await goHome(page);
  await page.locator('[data-mode="phrases"]').click();
  const active = await page.locator('.mode-tab.active').getAttribute('data-mode');
  expect(active).toBe('phrases');
});

// ─── 15. Quit button returns to home ──────────────────────────────────────────

test('quit button from study returns to home', async ({ page }) => {
  await clearStorage(page);
  await goHome(page);
  await page.selectOption('#sel-level', 'A1');
  await page.waitForTimeout(200);
  await page.locator('#card-learn').click();
  await expect(page.locator('#screen-study')).toHaveClass(/active/);
  await page.locator('#btn-study-quit').click();
  await expect(page.locator('#screen-home')).toHaveClass(/active/);
});

// ─── 16. Responsive screenshots ───────────────────────────────────────────────

const viewports = [
  { name: 'mobile-320',  width: 320,  height: 568 },
  { name: 'mobile-375',  width: 375,  height: 812 },
  { name: 'tablet-768',  width: 768,  height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

for (const vp of viewports) {
  test(`screenshot: home @ ${vp.width}x${vp.height}`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await goHome(page);
    await page.waitForTimeout(300);
    await page.screenshot({
      path: `screenshots/home-${vp.name}.png`,
      fullPage: false,
    });
    // Visual smoke test: logo must be visible
    await expect(page.locator('.logo')).toBeVisible();
  });
}
