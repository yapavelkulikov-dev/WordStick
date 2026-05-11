const CATEGORIES = [
  // Basic language
  { key: 'pronouns',        name: 'Местоимения',        group: 'language', icon: '👤' },
  { key: 'question-words',  name: 'Вопросительные',     group: 'language', icon: '❓' },
  { key: 'numbers-time',    name: 'Числа и время',       group: 'language', icon: '🕐' },
  { key: 'prepositions',    name: 'Предлоги',            group: 'language', icon: '↔️' },
  { key: 'conjunctions',    name: 'Союзы',               group: 'language', icon: '🔗' },

  // Life
  { key: 'home-basic',        name: 'Дом — базовое',      group: 'life', icon: '🏠' },
  { key: 'home-appliances',   name: 'Бытовая техника',    group: 'life', icon: '🔌' },
  { key: 'food-basic',        name: 'Еда',                group: 'life', icon: '🍎' },
  { key: 'clothing',          name: 'Одежда',             group: 'life', icon: '👕' },
  { key: 'body-health',       name: 'Тело и здоровье',    group: 'life', icon: '🏥' },
  { key: 'space-environment', name: 'Пространство',       group: 'life', icon: '🌳' },
  { key: 'everyday-objects',  name: 'Повседневные вещи',  group: 'life', icon: '📦' },

  // Social
  { key: 'shopping',        name: 'Магазин',             group: 'social', icon: '🛒' },
  { key: 'restaurant',      name: 'Ресторан',            group: 'social', icon: '🍽️' },
  { key: 'doctor',          name: 'Врач',                group: 'social', icon: '🩺' },
  { key: 'transport-travel',name: 'Транспорт',           group: 'social', icon: '✈️' },
  { key: 'money-banking',   name: 'Деньги и банк',       group: 'social', icon: '💳' },
  { key: 'small-talk',      name: 'Small talk',          group: 'social', icon: '💬' },

  // Work
  { key: 'work-office',     name: 'Офис',                group: 'work', icon: '🏢' },
  { key: 'work-colleagues', name: 'Коллеги',             group: 'work', icon: '🤝' },
  { key: 'work-email',      name: 'Переписка',           group: 'work', icon: '📧' },
  { key: 'work-travel',     name: 'Командировка',        group: 'work', icon: '🧳' },
  { key: 'work-meetings',   name: 'Совещания',           group: 'work', icon: '📋' },

  // Engineer
  { key: 'engineer-drawings',   name: 'Чертежи',          group: 'engineer', icon: '📐' },
  { key: 'engineer-materials',  name: 'Материалы',        group: 'engineer', icon: '⚙️' },
  { key: 'engineer-tools',      name: 'Инструменты',      group: 'engineer', icon: '🔧' },
  { key: 'engineer-assembly',   name: 'Сборка',           group: 'engineer', icon: '🔩' },
  { key: 'engineer-cad',        name: 'САПР / CAD',       group: 'engineer', icon: '💻' },
  { key: 'engineer-docs',       name: 'Документация',     group: 'engineer', icon: '📄' },
  { key: 'engineer-shopfloor',  name: 'Цех',              group: 'engineer', icon: '🏭' },
  { key: 'engineer-management', name: 'Управление',       group: 'engineer', icon: '📊' },
  { key: 'engineer-vendors',    name: 'Поставщики',       group: 'engineer', icon: '🚚' },

  // Verbs
  { key: 'verbs-regular',   name: 'Правильные глаголы',  group: 'verbs', icon: '✏️' },
  { key: 'verbs-irregular', name: 'Неправильные глаголы',group: 'verbs', icon: '⚡' },
];

const CATEGORY_GROUPS = {
  language: 'Язык',
  life:     'Жизнь',
  social:   'Общение',
  work:     'Работа',
  engineer: 'Инженер',
  verbs:    'Глаголы',
};

if (typeof module !== 'undefined') module.exports = { CATEGORIES, CATEGORY_GROUPS };
