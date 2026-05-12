# Content Structure

## Word Entry Format

Every word in `data/words.js` through `data/words-c2.js` follows this structure:

```javascript
{
  id:             'wrench',          // kebab-case, unique within level
  en:             'wrench',          // English word or phrase
  ru:             'гаечный ключ',    // Russian translation
  image:          'wrench',          // PNG filename in assets/images/ (or null)
  emoji:          '🔧',              // fallback visual if no image
  imageEligible:  true,              // true = image was/should be generated
  level:          'A1',             // CEFR level
  category:       'engineer-tools', // category key from categories.js
  forms: {
    type: 'noun',          // 'noun' | 'verb-regular' | 'verb-irregular' | 'other'
    plural: 'wrenches',    // for nouns
    // for verb-regular: past, thirdPerson
    // for verb-irregular: base, past, pastParticiple
  },
  examples: [
    'Pass me the wrench.',
    'She tightened it with a wrench.',
    'The wrench slipped and scratched the surface.',
    'Always use the right size wrench.',
  ]
}
```

Minimal required fields: `id`, `en`, `ru`, `level`, `category`.
Optional but expected: `emoji`, `forms`, `examples` (4 sentences recommended).

## Phrase Entry Format

Phrases exist in two formats depending on level:

**A1 (phrase builder — token array):**
```javascript
{
  id:       'how-are-you',
  ru:       'Как дела?',
  en:       ['How', 'are', 'you', '?'],   // array of tokens for builder
  level:    'A1',
  category: 'small-talk',
  hint:     'Informal greeting asking about wellbeing.'
}
```

**A2–C2 (simple text — no builder):**
```javascript
{
  id:       'ph-c2-001',
  en:       'The epistemological implications of this finding warrant further scrutiny.',
  ru:       'Эпистемологические последствия этого открытия требуют дальнейшего изучения.',
  emoji:    '🔬',
  level:    'C2',
  category: 'academic-discourse'
}
```

Note: The phrase builder (screen-phrase) reads `phrase.en` as an array via `[...phrase.en]`.
For A2+ levels where `en` is a string, the phrase builder is bypassed — these phrases appear
only in the review/stats mode as "learned" items.

## Categories (34 total)

### Group: language (Язык)
| Key | Name | Icon |
|-----|------|------|
| pronouns | Местоимения | 👤 |
| question-words | Вопросительные | ❓ |
| numbers-time | Числа и время | 🕐 |
| prepositions | Предлоги | ↔️ |
| conjunctions | Союзы | 🔗 |

### Group: life (Жизнь)
| Key | Name | Icon |
|-----|------|------|
| home-basic | Дом — базовое | 🏠 |
| home-appliances | Бытовая техника | 🔌 |
| food-basic | Еда | 🍎 |
| clothing | Одежда | 👕 |
| body-health | Тело и здоровье | 🏥 |
| space-environment | Пространство | 🌳 |
| everyday-objects | Повседневные вещи | 📦 |

### Group: social (Общение)
| Key | Name | Icon |
|-----|------|------|
| shopping | Магазин | 🛒 |
| restaurant | Ресторан | 🍽️ |
| doctor | Врач | 🩺 |
| transport-travel | Транспорт | ✈️ |
| money-banking | Деньги и банк | 💳 |
| small-talk | Small talk | 💬 |

### Group: work (Работа)
| Key | Name | Icon |
|-----|------|------|
| work-office | Офис | 🏢 |
| work-colleagues | Коллеги | 🤝 |
| work-email | Переписка | 📧 |
| work-travel | Командировка | 🧳 |
| work-meetings | Совещания | 📋 |

### Group: engineer (Инженер)
| Key | Name | Icon |
|-----|------|------|
| engineer-drawings | Чертежи | 📐 |
| engineer-materials | Материалы | ⚙️ |
| engineer-tools | Инструменты | 🔧 |
| engineer-assembly | Сборка | 🔩 |
| engineer-cad | САПР / CAD | 💻 |
| engineer-docs | Документация | 📄 |
| engineer-shopfloor | Цех | 🏭 |
| engineer-management | Управление | 📊 |
| engineer-vendors | Поставщики | 🚚 |

### Group: verbs (Глаголы)
| Key | Name | Icon |
|-----|------|------|
| verbs-regular | Правильные глаголы | ✏️ |
| verbs-irregular | Неправильные глаголы | ⚡ |

## CEFR Levels and Volumes

| Level | Words | Phrases | Domain Focus |
|-------|-------|---------|-------------|
| A1 | 748 | 150 | Basic nouns, workplace basics, small talk, tools |
| A2 | 750 | 150 | Travel, business communication, phrasal verbs |
| B1 | 1,008 | 150 | Idioms, professional phrases, meetings |
| B2 | 1,500 | 159 | Advanced professional, academic, business |
| C1 | 4,014 | 150 | Specialist: science, law, finance, medicine |
| C2 | 8,012 | 150 | Ultra-advanced: 80+ scientific domains |
| **Total** | **16,032** | **909** | |

C1 and C2 categories include custom domain keys not in CATEGORIES (these entries have
`category` values like `'academic-vocabulary'`, `'quantum-physics'`, `'biogeochemistry'` etc.)
These display as "Все категории" in the dropdown since they are not registered, which is
intentional for higher levels.

## How to Add New Content

### Add a word:

1. Choose the correct level file (`data/words.js` = A1, `data/words-a2.js`, etc.)
2. Choose or create a category key
3. Add the entry to the array following the format above
4. Generate an ID: lowercase, spaces → hyphens, remove punctuation

```javascript
{ id:'torque-wrench', en:'torque wrench', ru:'динамометрический ключ',
  image:null, emoji:'🔧', imageEligible:true, level:'B1',
  category:'engineer-tools',
  forms:{ type:'noun', plural:'torque wrenches' },
  examples:['Set the torque wrench to 50 Nm.','She tightened the bolt with a torque wrench.',
            'Always calibrate the torque wrench before use.',
            'The torque wrench clicked at the specified setting.'] },
```

### Add a phrase (A2+):

```javascript
{ id:'ph-b1-new-001', en:'Let us circle back on that.', ru:'Вернёмся к этому позже.',
  emoji:'🔄', level:'B1', category:'work-meetings' },
```

### Add a category:

In `data/categories.js`, add to the appropriate group:
```javascript
{ key: 'new-category', name: 'Новая категория', group: 'work', icon: '🆕' },
```

Then run the Playwright tests to verify nothing broke:
```bash
npx playwright test
```
