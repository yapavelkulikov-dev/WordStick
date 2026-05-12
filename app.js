// WordStick — main application
// Vanilla JS, no frameworks, no build step.
'use strict';

// ─── Constants ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'wordstick.v1';
const LEVEL_TOTALS = { A1:750, A2:1500, B1:2500, B2:4000, C1:8000, C2:16000 };
const LEVELS = ['A1','A2','B1','B2','C1','C2'];

// ─── Speech ─────────────────────────────────────────────────────────────────
let _speechUnlocked = false;
function speak(text) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang  = 'en-US';
  u.rate  = 0.85;
  u.pitch = 1.0;
  speechSynthesis.speak(u);
}

// unlock on first user interaction (iOS requirement)
document.addEventListener('click', () => {
  if (_speechUnlocked) return;
  _speechUnlocked = true;
  const u = new SpeechSynthesisUtterance('');
  u.volume = 0;
  speechSynthesis.speak(u);
}, { once: false, passive: true });

// ─── Storage ─────────────────────────────────────────────────────────────────
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(_) {}
  return defaultState();
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(_) {}
}

function defaultState() {
  return {
    currentLevel:    'A1',
    currentCategory: '',
    currentMode:     'words',
    sessionSize:     15,
    words:   {},
    phrases: {},
  };
}

// word/phrase progress record
function initRecord() {
  return { correct:0, mistakesInSession:0, needsReview:false, reviewCorrect:0 };
}
function getWord(id)   { if (!state.words[id])   state.words[id]   = initRecord(); return state.words[id]; }
function getPhrase(id) { if (!state.phrases[id]) state.phrases[id] = initRecord(); return state.phrases[id]; }

// ─── Image manifest ──────────────────────────────────────────────────────────
let imageManifest = new Set();
async function loadManifest() {
  try {
    const r = await fetch('data/image-manifest.json');
    if (r.ok) { const d = await r.json(); imageManifest = new Set(d); }
  } catch(_) {}
}

function getWordVisual(word) {
  if (word.image && imageManifest.has(word.image)) {
    return `<img src="assets/images/${word.image}.png" alt="${word.en}" width="96" height="96" loading="lazy">`;
  }
  return `<span class="emoji">${word.emoji || '📝'}</span>`;
}

// ─── State ───────────────────────────────────────────────────────────────────
let state = loadState();

// ─── Data helpers ─────────────────────────────────────────────────────────────
function wordsForLevel(level) {
  if (level === 'A1') return (typeof WORDS_A1 !== 'undefined') ? WORDS_A1 : [];
  if (level === 'A2') return (typeof WORDS_A2 !== 'undefined') ? WORDS_A2 : [];
  if (level === 'B1') return (typeof WORDS_B1 !== 'undefined') ? WORDS_B1 : [];
  if (level === 'B2') return (typeof WORDS_B2 !== 'undefined') ? WORDS_B2 : [];
  if (level === 'C1') return (typeof WORDS_C1 !== 'undefined') ? WORDS_C1 : [];
  if (level === 'C2') return (typeof WORDS_C2 !== 'undefined') ? WORDS_C2 : [];
  return [];
}

function phrasesForLevel(level) {
  if (level === 'A1') return (typeof PHRASES_A1 !== 'undefined') ? PHRASES_A1 : [];
  if (level === 'A2') return (typeof PHRASES_A2 !== 'undefined') ? PHRASES_A2 : [];
  if (level === 'B1') return (typeof PHRASES_B1 !== 'undefined') ? PHRASES_B1 : [];
  if (level === 'B2') return (typeof PHRASES_B2 !== 'undefined') ? PHRASES_B2 : [];
  if (level === 'C1') return (typeof PHRASES_C1 !== 'undefined') ? PHRASES_C1 : [];
  if (level === 'C2') return (typeof PHRASES_C2 !== 'undefined') ? PHRASES_C2 : [];
  return [];
}

function wordsForSelection(level, category) {
  return wordsForLevel(level).filter(w => !category || w.category === category);
}

function phrasesForSelection(level, category) {
  return phrasesForLevel(level).filter(p =>
    (!category || p.category === category)
  );
}

function categoriesForLevel(level) {
  const words   = wordsForLevel(level);
  const usedCat = new Set(words.map(w => w.category));
  return CATEGORIES.filter(c => usedCat.has(c.key));
}

function isClosed(id, mode) {
  const rec = mode === 'words' ? state.words[id] : state.phrases[id];
  return rec && rec.correct >= 3;
}

// ─── Algorithm helpers ────────────────────────────────────────────────────────
function weightedRandom(items, weightFn) {
  const total = items.reduce((s, x) => s + weightFn(x), 0);
  let r = Math.random() * total;
  for (const x of items) { r -= weightFn(x); if (r <= 0) return x; }
  return items[items.length - 1];
}

function getNextItem(active, recentIds) {
  const queueLen = Math.min(3, Math.max(0, active.length - 1));
  let candidates = active.filter(w => !recentIds.slice(-queueLen).includes(w.id));
  if (!candidates.length) candidates = active;
  return weightedRandom(candidates, w => {
    const rec = state.words[w.id] || state.phrases[w.id] || initRecord();
    return 3 - rec.correct;
  });
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Quiz distractors ─────────────────────────────────────────────────────────
function getDistractors(correctWord, allWords, count = 5) {
  const pool = allWords.filter(w => w.id !== correctWord.id);
  return shuffleArray(pool).slice(0, count);
}

// ─── Stats helpers ────────────────────────────────────────────────────────────
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

// ─── UI helpers ──────────────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

function setProgress(barId, pct) {
  $(barId).style.width = `${Math.min(100, Math.max(0, pct))}%`;
}

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────
function buildCategorySelect() {
  const sel  = $('sel-category');
  const cats = categoriesForLevel(state.currentLevel);
  sel.innerHTML = '<option value="">Все категории</option>';
  let lastGroup = '';
  for (const c of cats) {
    if (c.group !== lastGroup) {
      if (lastGroup) sel.appendChild(document.createElement('option')).disabled = true;
      lastGroup = c.group;
    }
    const opt = document.createElement('option');
    opt.value = c.key;
    opt.textContent = `${c.icon} ${c.name}`;
    if (c.key === state.currentCategory) opt.selected = true;
    sel.appendChild(opt);
  }
  if (!cats.find(c => c.key === state.currentCategory)) state.currentCategory = '';
}

function refreshHome() {
  buildCategorySelect();

  const isWords = state.currentMode === 'words';
  const items = isWords
    ? wordsForSelection(state.currentLevel, state.currentCategory)
    : phrasesForSelection(state.currentLevel, state.currentCategory);

  const total  = items.length;
  const closed = items.filter(i => isClosed(i.id, state.currentMode)).length;
  const left   = total - closed;
  const pct    = total ? (closed / total) * 100 : 0;

  const levelName = state.currentLevel;
  const catName   = state.currentCategory
    ? (CATEGORIES.find(c => c.key === state.currentCategory)?.name || '')
    : 'Все категории';

  $('home-progress-text').innerHTML =
    `<strong>${closed}</strong> / ${total} ${isWords ? 'слов' : 'фраз'} · ${levelName} · ${catName}`;
  setProgress('home-progress-bar', pct);

  $('card-learn-sub').textContent = left > 0
    ? `${left} ${isWords ? 'слов' : 'фраз'} осталось`
    : 'Всё выучено в этой категории!';

  // Review card
  const review = Object.values(isWords ? state.words : state.phrases)
    .filter(r => r.needsReview).length;
  $('card-review').style.display = review > 0 ? 'flex' : 'none';
  $('card-review-sub').textContent = `${review} ${isWords ? 'слов' : 'фраз'} на повторении`;
}

// ─── SESSION STATE ────────────────────────────────────────────────────────────
let session = null; // active session object

function startLearnSession() {
  const mode = state.currentMode;
  const items = mode === 'words'
    ? wordsForSelection(state.currentLevel, state.currentCategory)
    : phrasesForSelection(state.currentLevel, state.currentCategory);

  const unlearned = items.filter(i => !isClosed(i.id, mode));
  const pool = shuffleArray(unlearned).slice(0, state.sessionSize);

  if (!pool.length) { alert('Нет слов для изучения в этой категории.'); return; }

  // For words mode: first show study phase, then quiz
  // For phrases mode: go directly to phrase builder
  session = {
    mode,
    items: pool,
    allWords: wordsForLevel(state.currentLevel),
    phase: mode === 'words' ? 'study' : 'phrase',
    studyIndex: 0,
    // Quiz tracking
    active: pool.map(i => ({ ...i, _correct:0, _mistakes:0 })),
    closed: 0,
    totalAnswers: 0,
    totalCorrect: 0,
    recentIds: [],
    current: null,
    isReview: false,
  };

  if (mode === 'words') {
    startStudyPhase();
  } else {
    startPhrasePhase();
  }
}

function startReviewSession() {
  const mode = state.currentMode;
  const store = mode === 'words' ? state.words : state.phrases;
  const allItems = mode === 'words'
    ? wordsForLevel(state.currentLevel)
    : phrasesForLevel(state.currentLevel);

  const reviewItems = allItems.filter(i => store[i.id]?.needsReview);
  const pool = shuffleArray(reviewItems).slice(0, state.sessionSize);

  if (!pool.length) { refreshHome(); return; }

  session = {
    mode,
    items: pool,
    allWords: wordsForLevel(state.currentLevel),
    phase: mode === 'words' ? 'study' : 'phrase',
    studyIndex: 0,
    active: pool.map(i => ({ ...i, _correct:0, _mistakes:0 })),
    closed: 0,
    totalAnswers: 0,
    totalCorrect: 0,
    recentIds: [],
    current: null,
    isReview: true,
  };

  if (mode === 'words') {
    startStudyPhase();
  } else {
    startPhrasePhase();
  }
}

// ─── STUDY PHASE ─────────────────────────────────────────────────────────────
function startStudyPhase() {
  session.phase = 'study';
  session.studyIndex = 0;
  showStudyCard(session.items[0]);
  showScreen('screen-study');
}

function showStudyCard(item) {
  $('study-counter').textContent = `${session.studyIndex + 1} из ${session.items.length}`;
  setProgress('study-progress-bar', (session.studyIndex / session.items.length) * 100);

  $('study-visual').innerHTML = getWordVisual(item);
  $('study-en').textContent   = item.en;
  $('study-ru').textContent   = item.ru;

  // Forms
  const formsEl = $('study-forms');
  const f = item.forms;
  if (f && f.type !== 'other') {
    let txt = '';
    if (f.type === 'noun' && f.plural)
      txt = `Мн. число: ${f.plural}`;
    else if (f.type === 'verb-irregular')
      txt = `${f.base} · ${f.past} · ${f.pastParticiple}`;
    else if (f.type === 'verb-regular')
      txt = `${item.en} · ${f.past} · ${f.thirdPerson}s`;
    formsEl.textContent = txt;
    formsEl.style.display = txt ? '' : 'none';
  } else {
    formsEl.style.display = 'none';
  }

  $('btn-study-prev').disabled = session.studyIndex === 0;

  // Auto-speak
  speak(item.en);
}

// ─── QUIZ PHASE ───────────────────────────────────────────────────────────────
function startQuizPhase() {
  session.phase = 'quiz';
  session.active = session.items.map(i => ({
    ...i, _correct: getWord(i.id).correct, _mistakes:0
  }));
  // Filter out already closed
  session.active = session.active.filter(i => i._correct < 3);
  session.closed  = session.items.length - session.active.length;
  showScreen('screen-quiz');
  nextQuizCard();
}

function nextQuizCard() {
  if (!session.active.length) { endSession(); return; }

  const item = getNextItem(session.active, session.recentIds);
  session.current = item;
  session.recentIds.push(item.id);

  const rec = getWord(item.id);

  // Choose mode: 30% audio if enough sessions done
  const audioMode = Math.random() < 0.3 && _speechUnlocked;
  session.audioMode = audioMode;

  $('quiz-counter').textContent = `Закрыто ${session.closed} из ${session.items.length}`;
  setProgress('quiz-progress-bar', (session.closed / session.items.length) * 100);

  // Card visuals
  $('quiz-visual').innerHTML = getWordVisual(item);
  $('quiz-en').textContent   = item.en;

  if (audioMode) {
    $('quiz-word-area').style.display  = 'none';
    $('quiz-audio-area').style.display = 'flex';
    speak(item.en);
  } else {
    $('quiz-word-area').style.display  = '';
    $('quiz-audio-area').style.display = 'none';
  }

  // Dots
  const dotsEl = $('quiz-dots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const d = document.createElement('div');
    d.className = `dot${i < rec.correct ? ' filled' : ''}`;
    dotsEl.appendChild(d);
  }

  // Build options
  const distractors = getDistractors(item, session.allWords, 5);
  const options = shuffleArray([item, ...distractors]);
  const optEl = $('quiz-options');
  optEl.innerHTML = '';
  for (const opt of options) {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt.ru;
    btn.dataset.id  = opt.id;
    btn.addEventListener('click', () => handleQuizAnswer(opt, item));
    optEl.appendChild(btn);
  }
}

function handleQuizAnswer(chosen, correct) {
  const buttons = $('quiz-options').querySelectorAll('.quiz-option');
  buttons.forEach(b => b.disabled = true);

  session.totalAnswers++;
  const isRight = chosen.id === correct.id;

  if (isRight) {
    session.totalCorrect++;
    buttons.forEach(b => { if (b.dataset.id === correct.id) b.classList.add('correct'); });

    const rec = getWord(correct.id);
    rec.correct = Math.min(3, rec.correct + 1);
    correct._correct = rec.correct;

    if (rec.correct >= 3) {
      session.active = session.active.filter(i => i.id !== correct.id);
      session.closed++;
    }
    saveState();
    speak(correct.en);
    setTimeout(nextQuizCard, 700);

  } else {
    // Show wrong + correct
    buttons.forEach(b => {
      if (b.dataset.id === chosen.id)  b.classList.add('wrong');
      if (b.dataset.id === correct.id) b.classList.add('correct');
    });

    const rec = getWord(correct.id);
    rec.mistakesInSession++;
    correct._mistakes++;
    if (correct._mistakes > 2) rec.needsReview = true;
    saveState();

    // Show study card briefly then return to quiz
    setTimeout(() => {
      showQuickStudy(correct, () => {
        setTimeout(nextQuizCard, 300);
      });
    }, 1500);
  }
}

function showQuickStudy(item, onDone) {
  $('study-visual').innerHTML = getWordVisual(item);
  $('study-en').textContent   = item.en;
  $('study-ru').textContent   = item.ru;
  const formsEl = $('study-forms');
  formsEl.style.display = 'none';
  showScreen('screen-study');
  $('btn-study-prev').style.display  = 'none';
  $('btn-study-next').style.display  = 'none';
  $('btn-study-examples').style.display = 'none';
  $('btn-study-quit').style.display  = 'none';
  $('study-counter').textContent = '';
  speak(item.en);
  setTimeout(() => {
    $('btn-study-prev').style.display  = '';
    $('btn-study-next').style.display  = '';
    $('btn-study-examples').style.display = '';
    $('btn-study-quit').style.display  = '';
    showScreen('screen-quiz');
    onDone();
  }, 3000);
}

// ─── PHRASE PHASE ─────────────────────────────────────────────────────────────
function startPhrasePhase() {
  session.phase  = 'phrase';
  session.phraseIndex = 0;
  session.phraseClosed = 0;
  showPhraseCard(session.items[session.phraseIndex]);
  showScreen('screen-phrase');
}

function showPhraseCard(phrase) {
  $('phrase-counter').textContent =
    `Фраза ${session.phraseIndex + 1} из ${session.items.length} (${phrase.level})`;
  setProgress('phrase-progress-bar',
    (session.phraseIndex / session.items.length) * 100);

  $('phrase-ru').textContent = phrase.ru;
  $('phrase-hint').textContent = phrase.hint || '';
  $('phrase-hint').classList.remove('visible');

  // Pool = shuffled words
  session._phraseTokens = [...phrase.en];
  session._phraseBuilt  = [];
  renderPhrase();
}

function renderPhrase() {
  const phrase = session.items[session.phraseIndex];
  const assembly = $('phrase-assembly');
  const pool     = $('phrase-pool');

  // Assembly area
  assembly.innerHTML = '';
  if (!session._phraseBuilt.length) {
    assembly.innerHTML = '<span class="phrase-assembly-placeholder">Нажимай на слова ниже →</span>';
  } else {
    for (let i = 0; i < session._phraseBuilt.length; i++) {
      const chip = document.createElement('button');
      chip.className = 'word-chip placed';
      chip.textContent = session._phraseBuilt[i];
      chip.dataset.idx = i;
      chip.addEventListener('click', () => {
        const tok = session._phraseBuilt.splice(i, 1)[0];
        session._phraseTokens.push(tok);
        renderPhrase();
      });
      assembly.appendChild(chip);
    }
  }

  // Pool area
  const shuffledPool = shuffleArray(session._phraseTokens.filter((v, i, a) => a.indexOf(v) === i));
  pool.innerHTML = '';
  for (const tok of shuffledPool) {
    const count = session._phraseTokens.filter(t => t === tok).length;
    for (let n = 0; n < count; n++) {
      const chip = document.createElement('button');
      chip.className = 'word-chip';
      chip.textContent = tok;
      chip.addEventListener('click', () => {
        const idx = session._phraseTokens.indexOf(tok);
        if (idx !== -1) session._phraseTokens.splice(idx, 1);
        session._phraseBuilt.push(tok);
        renderPhrase();
      });
      pool.appendChild(chip);
    }
  }
}

function checkPhrase() {
  const phrase = session.items[session.phraseIndex];
  const built  = session._phraseBuilt.join(' ');
  const correct = phrase.en.join(' ');
  const isRight = built.toLowerCase() === correct.toLowerCase();

  if (isRight) {
    const rec = getPhrase(phrase.id);
    if (session.isReview) {
      rec.reviewCorrect++;
      if (rec.reviewCorrect >= 3) { rec.needsReview = false; rec.reviewCorrect = 0; }
    } else {
      rec.correct = Math.min(3, rec.correct + 1);
    }
    session.phraseClosed++;
    session.totalCorrect++;
    saveState();

    // Flash correct
    $('phrase-pool').querySelectorAll('.word-chip').forEach(c => c.classList.add('correct-chip'));
    speak(correct);
    setTimeout(nextPhrase, 1000);
  } else {
    // Show correct answer highlighted
    const assembly = $('phrase-assembly');
    assembly.innerHTML = '';
    phrase.en.forEach(tok => {
      const chip = document.createElement('button');
      chip.className = 'word-chip correct-chip';
      chip.textContent = tok;
      chip.disabled = true;
      assembly.appendChild(chip);
    });
    // Show hint
    $('phrase-hint').classList.add('visible');

    const rec = getPhrase(phrase.id);
    if (session.isReview) { rec.reviewCorrect = 0; }
    rec.mistakesInSession++;
    if (rec.mistakesInSession > 2) rec.needsReview = true;
    session.totalAnswers++;
    saveState();

    speak(correct);
  }
  session.totalAnswers++;
}

function nextPhrase() {
  session.phraseIndex++;
  if (session.phraseIndex >= session.items.length) {
    endSession();
  } else {
    showPhraseCard(session.items[session.phraseIndex]);
  }
}

// ─── END SESSION ─────────────────────────────────────────────────────────────
function endSession() {
  const closed = session.mode === 'words'
    ? session.closed
    : (session.phraseClosed || 0);
  const total  = session.items.length;
  const acc    = session.totalAnswers
    ? Math.round((session.totalCorrect / session.totalAnswers) * 100)
    : 100;

  const reviewCount = Object.values(
    session.mode === 'words' ? state.words : state.phrases
  ).filter(r => r.needsReview).length;

  $('fin-closed').textContent   = `${closed} из ${total}`;
  $('fin-accuracy').textContent = `${acc}%`;

  const reviewRow = $('fin-review-row');
  if (reviewCount > 0) {
    reviewRow.style.display  = '';
    $('fin-review').textContent = reviewCount;
  } else {
    reviewRow.style.display = 'none';
  }

  showScreen('screen-finish');
}

// ─── STATS SCREEN ─────────────────────────────────────────────────────────────
function renderStats() {
  $('stats-current-level').textContent = computeLevel();

  const totalW = Object.values(state.words).filter(r => r.correct >= 3).length;
  const totalP = Object.values(state.phrases).filter(r => r.correct >= 3).length;
  const revW   = Object.values(state.words).filter(r => r.needsReview).length;
  const revP   = Object.values(state.phrases).filter(r => r.needsReview).length;

  $('stats-total-words').textContent   = totalW;
  $('stats-total-phrases').textContent = totalP;
  $('stats-review-words').textContent  = revW;
  $('stats-review-phrases').textContent = revP;

  // Per-level bars
  const levelsEl = $('stats-levels');
  levelsEl.innerHTML = '';
  for (const lv of LEVELS) {
    const words  = wordsForLevel(lv);
    const target = LEVEL_TOTALS[lv];
    const closed = words.filter(w => isClosed(w.id, 'words')).length;
    const pct    = target ? Math.round((closed / target) * 100) : 0;

    levelsEl.insertAdjacentHTML('beforeend', `
      <div class="stats-level-row">
        <div class="stats-level-label">
          <strong>${lv}</strong>
          <span>${closed} / ${target}</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `);
  }
}

// ─── EXPORT / IMPORT ─────────────────────────────────────────────────────────
function exportProgress() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type:'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `wordstick-progress-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.words && data.phrases) {
        Object.assign(state, data);
        saveState();
        refreshHome();
        alert('Прогресс импортирован!');
      } else {
        alert('Неверный формат файла.');
      }
    } catch(_) { alert('Ошибка при чтении файла.'); }
  };
  reader.readAsText(file);
}

// ─── EXAMPLES MODAL ───────────────────────────────────────────────────────────
function showExamples(item) {
  const list = $('modal-examples-list');
  list.innerHTML = '';
  if (item.examples?.length) {
    item.examples.forEach(ex => {
      list.insertAdjacentHTML('beforeend',
        `<div class="example-item">${ex}</div>`);
    });
  } else if (item.hint) {
    list.insertAdjacentHTML('beforeend',
      `<div class="example-item">${item.hint}</div>`);
  }
  $('modal-examples').classList.add('open');
}

// ─── EVENT WIRING ─────────────────────────────────────────────────────────────
function wireEvents() {
  // ── Home ──
  document.querySelectorAll('.mode-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentMode = btn.dataset.mode;
      saveState();
      refreshHome();
    });
  });

  $('sel-level').value = state.currentLevel;
  $('sel-level').addEventListener('change', e => {
    state.currentLevel    = e.target.value;
    state.currentCategory = '';
    saveState();
    refreshHome();
  });

  $('sel-category').addEventListener('change', e => {
    state.currentCategory = e.target.value;
    saveState();
    refreshHome();
  });

  document.querySelectorAll('.session-size-btn').forEach(btn => {
    if (parseInt(btn.dataset.n) === state.sessionSize) btn.classList.add('selected');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.session-size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.sessionSize = parseInt(btn.dataset.n);
      saveState();
    });
  });

  $('card-learn').addEventListener('click', startLearnSession);
  $('card-review').addEventListener('click', startReviewSession);

  $('btn-stats').addEventListener('click', () => { renderStats(); showScreen('screen-stats'); });
  $('btn-stats-close').addEventListener('click', () => showScreen('screen-home'));
  $('btn-export').addEventListener('click', exportProgress);
  $('btn-import').addEventListener('click', () => $('import-file').click());
  $('import-file').addEventListener('change', e => {
    if (e.target.files[0]) importProgress(e.target.files[0]);
    e.target.value = '';
  });

  // ── Study screen ──
  $('btn-study-quit').addEventListener('click', () => { session=null; showScreen('screen-home'); refreshHome(); });
  $('btn-study-speak').addEventListener('click', () => {
    if (session?.items[session.studyIndex]) speak(session.items[session.studyIndex].en);
  });
  $('btn-study-examples').addEventListener('click', () => {
    if (session?.items[session.studyIndex]) showExamples(session.items[session.studyIndex]);
  });
  $('btn-study-prev').addEventListener('click', () => {
    if (session.studyIndex > 0) {
      session.studyIndex--;
      showStudyCard(session.items[session.studyIndex]);
    }
  });
  $('btn-study-next').addEventListener('click', () => {
    session.studyIndex++;
    if (session.studyIndex >= session.items.length) {
      startQuizPhase();
    } else {
      showStudyCard(session.items[session.studyIndex]);
    }
  });

  // ── Quiz screen ──
  $('btn-quiz-quit').addEventListener('click',   () => { session=null; showScreen('screen-home'); refreshHome(); });
  $('btn-quiz-speak').addEventListener('click',  () => { if (session?.current) speak(session.current.en); });
  $('btn-quiz-audio').addEventListener('click',  () => { if (session?.current) speak(session.current.en); });

  // ── Phrase screen ──
  $('btn-phrase-quit').addEventListener('click', () => { session=null; showScreen('screen-home'); refreshHome(); });
  $('btn-phrase-hint').addEventListener('click', () => $('phrase-hint').classList.toggle('visible'));
  $('btn-phrase-speak').addEventListener('click', () => {
    if (session?.items[session.phraseIndex]) speak(session.items[session.phraseIndex].en.join(' '));
  });
  $('btn-phrase-reset').addEventListener('click', () => {
    const phrase = session.items[session.phraseIndex];
    session._phraseTokens = [...phrase.en];
    session._phraseBuilt  = [];
    $('phrase-hint').classList.remove('visible');
    renderPhrase();
  });
  $('btn-phrase-check').addEventListener('click', checkPhrase);

  // ── Finish screen ──
  $('btn-continue-session').addEventListener('click', () => {
    if (session?.mode === 'words') {
      startLearnSession();
    } else {
      startPhrasePhase();
    }
  });
  $('btn-go-home').addEventListener('click', () => { session=null; showScreen('screen-home'); refreshHome(); });

  // ── Modal ──
  $('btn-modal-close').addEventListener('click', () => $('modal-examples').classList.remove('open'));
  $('modal-examples').addEventListener('click', e => {
    if (e.target === $('modal-examples')) $('modal-examples').classList.remove('open');
  });

  // Mode tab state sync
  document.querySelectorAll('.mode-tab').forEach(btn => {
    if (btn.dataset.mode === state.currentMode) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
async function init() {
  await loadManifest();
  wireEvents();
  $('sel-level').value = state.currentLevel;
  refreshHome();
}

init();
