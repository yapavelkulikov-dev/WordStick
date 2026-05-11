// WordStick — A1 Phrases
// 150 real-use American collocations and fixed phrases
// Format: en array = word tokens for phrase-builder exercise

const PHRASES_A1 = [

  // ─── SMALL TALK ────────────────────────────────────────────────────────────
  { id:'how-are-you',        ru:'Как дела?',
    en:['How','are','you','?'],              level:'A1', category:'small-talk',
    hint:'Стандартное приветствие. Ответ: "Good, thanks. You?"' },

  { id:'nice-to-meet-you',   ru:'Приятно познакомиться.',
    en:['Nice','to','meet','you','.'],       level:'A1', category:'small-talk',
    hint:'"Nice to meet you" — устойчивая фраза при знакомстве. "You too" — в ответ.' },

  { id:'how-was-your-weekend', ru:'Как прошли выходные?',
    en:['How','was','your','weekend','?'],   level:'A1', category:'small-talk',
    hint:'"How was your...?" — вопрос о прошедшем времени (was = был/была/было).' },

  { id:'see-you-tomorrow',   ru:'Увидимся завтра.',
    en:['See','you','tomorrow','.'],         level:'A1', category:'small-talk',
    hint:'Краткое прощание. "See you" = "увидимся". Monday/later — альтернативы.' },

  { id:'have-a-good-one',    ru:'Хорошего дня!',
    en:['Have','a','good','one','!'],        level:'A1', category:'small-talk',
    hint:'"Have a good one" — неформальное прощание, типично американское.' },

  { id:'my-bad',             ru:'Моя ошибка, виноват.',
    en:['My','bad','.'],                    level:'A1', category:'small-talk',
    hint:'"My bad" — разговорное признание ошибки, без лишнего. Уместно между коллегами.' },

  { id:'no-worries',         ru:'Не проблема / Всё ок.',
    en:['No','worries','.'],                level:'A1', category:'small-talk',
    hint:'"No worries" — типично американский ответ на извинение или просьбу.' },

  { id:'sounds-good',        ru:'Звучит хорошо / договорились.',
    en:['Sounds','good','!'],               level:'A1', category:'small-talk',
    hint:'Короткое согласие с предложением. "Sounds good to me" — чуть длиннее.' },

  { id:'got-it',             ru:'Понял / Принял.',
    en:['Got','it','.'],                    level:'A1', category:'small-talk',
    hint:'"Got it" = "Понял". Разговорное подтверждение что вы поняли инструкцию.' },

  { id:'hang-on',            ru:'Подожди секунду.',
    en:['Hang','on','a','second','.'],      level:'A1', category:'small-talk',
    hint:'"Hang on" — просьба подождать. "Hold on" — то же самое, чуть формальнее.' },

  { id:'what-do-you-mean',   ru:'Что ты имеешь в виду?',
    en:['What','do','you','mean','?'],      level:'A1', category:'small-talk',
    hint:'Запрос уточнения. Важная фраза — не бойтесь её использовать.' },

  { id:'could-you-repeat',   ru:'Не могли бы вы повторить?',
    en:['Could','you','repeat','that','?'], level:'A1', category:'small-talk',
    hint:'"Could you repeat that?" — вежливая просьба повторить. Всегда уместна.' },

  // ─── WORK — MEETINGS ───────────────────────────────────────────────────────
  { id:'ill-get-back-to-you',ru:'Я свяжусь с тобой позже.',
    en:["I'll",'get','back','to','you','.'], level:'A1', category:'work-meetings',
    hint:'"Get back to someone" = устойчивое выражение «связаться позже с ответом». I\'ll = I will.' },

  { id:'lets-take-that-offline', ru:'Обсудим это отдельно, не на встрече.',
    en:["Let's",'take','that','offline','.'], level:'A1', category:'work-meetings',
    hint:'"Take it offline" = отложить тему для отдельного разговора. Стандартная фраза.' },

  { id:'can-we-table-that',  ru:'Отложим это на потом?',
    en:['Can','we','table','that','?'],     level:'A1', category:'work-meetings',
    hint:'В США "table" = отложить (в Британском = поставить на повестку). Американский контекст.' },

  { id:'who-owns-this',      ru:'Кто за это отвечает?',
    en:['Who','owns','this','?'],           level:'A1', category:'work-meetings',
    hint:'"Own" = нести ответственность за что-то. "I own this task" = это моя задача.' },

  { id:'next-steps',         ru:'Следующие шаги.',
    en:['What','are','the','next','steps','?'], level:'A1', category:'work-meetings',
    hint:'Типичный вопрос в конце встречи. Всегда уместен чтобы подвести итог.' },

  { id:'do-we-have-quorum',  ru:'Все пришли? (Есть кворум?)',
    en:['Do','we','have','everyone','?'],   level:'A1', category:'work-meetings',
    hint:'Проверка присутствия перед началом встречи.' },

  { id:'lets-get-started',   ru:'Начнём.',
    en:["Let's",'get','started','.'],       level:'A1', category:'work-meetings',
    hint:'"Let\'s get started" — стандартное начало любого совещания.' },

  { id:'on-the-same-page',   ru:'Мы понимаем одно и то же.',
    en:['Are','we','on','the','same','page','?'], level:'A1', category:'work-meetings',
    hint:'"On the same page" = одинаковое понимание ситуации. Очень частое выражение.' },

  { id:'circle-back',        ru:'Вернёмся к этому позже.',
    en:["Let's",'circle','back','on','this','.'], level:'A1', category:'work-meetings',
    hint:'"Circle back" = вернуться к теме позже. Типичный корпоративный оборот.' },

  { id:'touch-base',         ru:'Созвониться / встретиться чтобы сверить статус.',
    en:["Let's",'touch','base','later','.'], level:'A1', category:'work-meetings',
    hint:'"Touch base" = быстро переговорить чтобы убедиться что все в курсе.' },

  // ─── WORK — EMAIL ──────────────────────────────────────────────────────────
  { id:'please-find-attached',ru:'Во вложении найдёте документ.',
    en:['Please','find','attached','.'],    level:'A1', category:'work-email',
    hint:'Стандартная фраза при отправке вложения. Formal but common.' },

  { id:'per-our-conversation',ru:'Как мы обсуждали,',
    en:['Per','our','conversation',','],    level:'A1', category:'work-email',
    hint:'"Per our conversation" = "согласно нашему разговору". Используется в follow-up email.' },

  { id:'following-up',       ru:'Пишу в продолжение нашего разговора.',
    en:['I','am','following','up','on','this','.'], level:'A1', category:'work-email',
    hint:'"Follow up" = напомнить о задаче или запросить ответ. Нейтральный тон.' },

  { id:'let-me-know',        ru:'Дай знать (если что-то нужно).',
    en:['Let','me','know','if','you','need','anything','.'], level:'A1', category:'work-email',
    hint:'Типичное завершение email. "Let me know" = "сообщи мне".' },

  { id:'looking-forward',    ru:'С нетерпением жду.',
    en:['Looking','forward','to','hearing','from','you','.'], level:'A1', category:'work-email',
    hint:'Формальное закрытие email. "Look forward to" + gerund (-ing).' },

  { id:'cc-the-team',        ru:'Поставь команду в копию.',
    en:['Can','you','CC','the','team','?'], level:'A1', category:'work-email',
    hint:'"CC" как глагол — "поставить в копию". "CC me on that" — типичная просьба.' },

  // ─── WORK — ENGINEER ───────────────────────────────────────────────────────
  { id:'to-spec',            ru:'По спецификации / как надо.',
    en:['Is','it','to','spec','?'],         level:'A1', category:'engineer-docs',
    hint:'"To spec" = в соответствии со спецификацией. "Out of spec" = не соответствует.' },

  { id:'tighten-to-torque',  ru:'Затяни до нужного момента.',
    en:['Tighten','to','torque','spec','.'], level:'A1', category:'engineer-assembly',
    hint:'"Torque spec" = требуемый момент затяжки из документации.' },

  { id:'out-of-tolerance',   ru:'За пределами допуска.',
    en:['It','is','out','of','tolerance','.'], level:'A1', category:'engineer-drawings',
    hint:'"Out of tolerance" = деталь не проходит по размерам. Критичная фраза.' },

  { id:'per-drawing',        ru:'По чертежу.',
    en:['Per','the','drawing','.'],         level:'A1', category:'engineer-drawings',
    hint:'"Per the drawing" = согласно чертежу. "It says on the drawing" — альтернатива.' },

  { id:'measure-twice',      ru:'Семь раз отмерь.',
    en:['Measure','twice',',','cut','once','.'], level:'A1', category:'engineer-shopfloor',
    hint:'Буквальная американская поговорка — проверь перед тем как делать.' },

  { id:'the-machine-is-down',ru:'Станок не работает.',
    en:['The','machine','is','down','.'],   level:'A1', category:'engineer-shopfloor',
    hint:'"Down" = не работает (о технике). "The line is down" — линия встала.' },

  { id:'stop-the-line',      ru:'Останови линию.',
    en:['Stop','the','line','!'],           level:'A1', category:'engineer-shopfloor',
    hint:'Команда остановить производственную линию. Используется при дефекте или опасности.' },

  { id:'what-revision',      ru:'Какая ревизия чертежа?',
    en:['What','revision','is','this','?'], level:'A1', category:'engineer-drawings',
    hint:'"Revision" = буква или номер версии документа (Rev A, Rev B...).' },

  { id:'do-we-have-stock',   ru:'Есть ли на складе?',
    en:['Do','we','have','this','in','stock','?'], level:'A1', category:'engineer-vendors',
    hint:'"In stock" = в наличии на складе. "Out of stock" = закончилось.' },

  { id:'lead-time-question', ru:'Какой срок поставки?',
    en:['What','is','the','lead','time','?'], level:'A1', category:'engineer-vendors',
    hint:'"Lead time" = время от заказа до получения товара. Ключевой вопрос при заказе.' },

  { id:'pass-the-wrench',    ru:'Передай гаечный ключ.',
    en:['Can','you','pass','me','the','wrench','?'], level:'A1', category:'engineer-tools',
    hint:'Простая просьба на цеху. "Pass me the..." — очень частая конструкция.' },

  { id:'needs-rework',       ru:'Нужна переделка.',
    en:['This','needs','rework','.'],       level:'A1', category:'engineer-shopfloor',
    hint:'"Rework" = исправление уже сделанного. "Send it to rework" — альтернатива.' },

  { id:'failed-inspection',  ru:'Не прошло проверку.',
    en:['It','failed','inspection','.'],    level:'A1', category:'engineer-shopfloor',
    hint:'"Failed inspection" = не прошло контроль качества. Также "passed inspection".' },

  { id:'safety-glasses',     ru:'Надень защитные очки.',
    en:['Put','on','your','safety','glasses','.'], level:'A1', category:'engineer-shopfloor',
    hint:'Safety rule. "Safety glasses/goggles are required in this area."' },

  // ─── SHOPPING & MONEY ──────────────────────────────────────────────────────
  { id:'how-much-is-this',   ru:'Сколько стоит это?',
    en:['How','much','is','this','?'],      level:'A1', category:'shopping',
    hint:'Базовый вопрос о цене. "What does this cost?" — более формальный вариант.' },

  { id:'do-you-take-card',   ru:'Вы принимаете карту?',
    en:['Do','you','take','card','?'],      level:'A1', category:'shopping',
    hint:'"Take card/credit cards" = принимать карты к оплате. Типично в США.' },

  { id:'keep-the-change',    ru:'Оставьте сдачу себе.',
    en:['Keep','the','change','.'],         level:'A1', category:'shopping',
    hint:'"Keep the change" — типичная фраза при наличной оплате в США.' },

  { id:'on-sale',            ru:'По скидке / распродажа.',
    en:['Is','it','on','sale','?'],         level:'A1', category:'shopping',
    hint:'"On sale" = по акции, со скидкой. Не путать с "for sale" = продаётся.' },

  { id:'do-you-have-receipt',ru:'У вас есть чек?',
    en:['Do','you','have','a','receipt','?'], level:'A1', category:'shopping',
    hint:'"Receipt" читается как "ресит" — буква P не произносится.' },

  // ─── TRANSPORT ─────────────────────────────────────────────────────────────
  { id:'where-is-the-nearest',ru:'Где ближайший...?',
    en:['Where','is','the','nearest','pharmacy','?'], level:'A1', category:'transport-travel',
    hint:'Замени "pharmacy" на hotel/ATM/store и т.д. Универсальная конструкция.' },

  { id:'how-far-is-it',      ru:'Как далеко это?',
    en:['How','far','is','it','?'],         level:'A1', category:'transport-travel',
    hint:'Вопрос о расстоянии. Ответ: "About 10 minutes" / "Five miles away".' },

  { id:'can-you-call-an-uber',ru:'Можешь вызвать Убер?',
    en:['Can','you','call','an','Uber','?'], level:'A1', category:'transport-travel',
    hint:'Uber используется как глагол в США: "Let\'s Uber there".' },

  { id:'my-flight-is-delayed',ru:'Мой рейс задержан.',
    en:['My','flight','is','delayed','.'],  level:'A1', category:'transport-travel',
    hint:'"Delayed" = задержан. "Cancelled" = отменён. Оба слова нужны в аэропорту.' },

  { id:'where-do-i-check-in', ru:'Где я могу зарегистрироваться?',
    en:['Where','do','I','check','in','?'], level:'A1', category:'transport-travel',
    hint:'"Check in" = зарегистрироваться на рейс или в отель. Тоже "check-in counter".' },

  // ─── RESTAURANT ────────────────────────────────────────────────────────────
  { id:'table-for-two',      ru:'Столик на двоих.',
    en:['Table','for','two',',','please','.'], level:'A1', category:'restaurant',
    hint:'Запрос столика при входе. Замени цифру на нужное количество.' },

  { id:'can-i-get-the-check', ru:'Принесите счёт, пожалуйста.',
    en:['Can','I','get','the','check',',','please','?'], level:'A1', category:'restaurant',
    hint:'В США говорят "check", в Британии — "bill". Оба варианта понятны.' },

  { id:'ill-have-the-same',  ru:'Мне то же самое.',
    en:["I'll",'have','the','same','.'],    level:'A1', category:'restaurant',
    hint:'Когда ты заказываешь то же что и предыдущий гость.' },

  { id:'can-i-get-this-to-go',ru:'Можно с собой?',
    en:['Can','I','get','this','to','go','?'], level:'A1', category:'restaurant',
    hint:'"To go" = с собой (вынос). "For here" = буду есть здесь.' },

  { id:'split-the-bill',     ru:'Разделим счёт?',
    en:["Let's",'split','the','bill','.'],  level:'A1', category:'restaurant',
    hint:'"Split the bill" = платить каждый за себя. "Go Dutch" = то же самое.' },

  { id:'is-tip-included',    ru:'Чаевые включены?',
    en:['Is','the','tip','included','?'],   level:'A1', category:'restaurant',
    hint:'В США чаевые обычно не включены (18-20% стандарт). Всегда уточняй.' },

  // ─── DOCTOR / HEALTH ───────────────────────────────────────────────────────
  { id:'i-dont-feel-well',   ru:'Я плохо себя чувствую.',
    en:["I","don't","feel","well",'.'],     level:'A1', category:'doctor',
    hint:'"I don\'t feel well" — базовая фраза. "I feel sick" — то же. Уместно везде.' },

  { id:'call-911',           ru:'Вызови скорую!',
    en:['Call','911','!'],                  level:'A1', category:'doctor',
    hint:'911 — единый номер экстренных служб в США. Полиция, пожар, скорая.' },

  { id:'where-does-it-hurt', ru:'Где болит?',
    en:['Where','does','it','hurt','?'],    level:'A1', category:'doctor',
    hint:'"Hurt" — неправильный глагол: hurt/hurt/hurt. Не изменяется.' },

  { id:'do-you-have-insurance',ru:'У вас есть страховка?',
    en:['Do','you','have','insurance','?'], level:'A1', category:'doctor',
    hint:'Первый вопрос в любой американской клинике. Медицинская страховка обязательна.' },

  // ─── HOUSING ───────────────────────────────────────────────────────────────
  { id:'looking-for-a-place', ru:'Ищу жильё для аренды.',
    en:["I'm",'looking','for','a','place','to','rent','.'], level:'A1', category:'money-banking',
    hint:'"Looking for a place to rent" — стандартная фраза при поиске квартиры.' },

  { id:'utilities-included',  ru:'Коммунальные включены?',
    en:['Are','utilities','included','?'],  level:'A1', category:'money-banking',
    hint:'"Utilities" = коммунальные (вода, свет, газ). Важный вопрос при аренде.' },

  { id:'first-month-last',    ru:'Первый и последний месяц вперёд.',
    en:['First','and','last','month',',','please','.'], level:'A1', category:'money-banking',
    hint:'Типичное требование при аренде в США: первый месяц + залог (last month).' },

  // ─── OFFICE / GENERAL ──────────────────────────────────────────────────────
  { id:'bear-with-me',        ru:'Потерпи немного.',
    en:['Bear','with','me','.'],            level:'A1', category:'work-office',
    hint:'"Bear with me" = подожди/потерпи пока я разбираюсь. Уместно в любой ситуации.' },

  { id:'heads-up',            ru:'Заранее предупреждаю.',
    en:['Just','a','heads-up',':'],         level:'A1', category:'work-office',
    hint:'"Heads-up" = предупреждение о чём-то. "Thanks for the heads-up" — в ответ.' },

  { id:'in-the-loop',         ru:'В курсе дел.',
    en:['Keep','me','in','the','loop','.'], level:'A1', category:'work-office',
    hint:'"In the loop" = в курсе происходящего. "Out of the loop" = не в курсе.' },

  { id:'bring-up-to-speed',   ru:'Введи меня в курс дела.',
    en:['Can','you','bring','me','up','to','speed','?'], level:'A1', category:'work-office',
    hint:'"Bring up to speed" = объяснить что происходит тому, кто пропустил.' },

  { id:'give-green-light',    ru:'Дать добро / разрешение.',
    en:['Give','us','the','green','light','.'], level:'A1', category:'work-office',
    hint:'"Green light" = разрешение начать. "We got the green light" = нам разрешили.' },

  { id:'put-on-hold',         ru:'Поставить на паузу.',
    en:['Put','it','on','hold','.'],        level:'A1', category:'work-office',
    hint:'"On hold" = приостановлено. Также "hold" на телефоне = ожидание.' },

  { id:'asap',                ru:'Как можно скорее.',
    en:['Send','it','ASAP','.'],            level:'A1', category:'work-office',
    hint:'ASAP = As Soon As Possible. Читается как слово "эй-сэп" или по буквам.' },

  { id:'back-to-back',        ru:'Встречи подряд без перерыва.',
    en:["I'm",'back','to','back','all','day','.'], level:'A1', category:'work-office',
    hint:'"Back-to-back" = один за другим без паузы. Про совещания или задачи.' },

  { id:'working-remotely',    ru:'Работаю удалённо.',
    en:["I'm",'working','remotely','today','.'], level:'A1', category:'work-office',
    hint:'"Work remotely" = работать из дома или вне офиса. "WFH" = work from home.' },

  { id:'call-in-sick',        ru:'Позвонить и сообщить что болен.',
    en:["I",'need','to','call','in','sick','today','.'], level:'A1', category:'work-office',
    hint:'"Call in sick" — устойчивое выражение, так говорят когда берут больничный.' },

  // ─── NUMBERS & QUANTITIES ──────────────────────────────────────────────────
  { id:'give-or-take',        ru:'Плюс-минус / примерно.',
    en:['About','ten',',','give','or','take','.'], level:'A1', category:'numbers-time',
    hint:'"Give or take" = приблизительно, плюс-минус. "About 5 days, give or take."' },

  { id:'at-least',            ru:'Минимум / по крайней мере.',
    en:['At','least','two','weeks','.'],    level:'A1', category:'numbers-time',
    hint:'"At least" = не меньше чем. "At most" = не больше чем.' },

  { id:'a-couple-of',         ru:'Пара / несколько (2-3).',
    en:['A','couple','of','days','.'],      level:'A1', category:'numbers-time',
    hint:'"A couple of" = 2-3, неформально. Не всегда ровно два.' },

  { id:'ballpark-figure',     ru:'Примерная цифра / грубая оценка.',
    en:['Give','me','a','ballpark','figure','.'], level:'A1', category:'numbers-time',
    hint:'"Ballpark figure" = грубая прикидка. "In the ballpark of $500" = около 500.' },

];

if (typeof module !== 'undefined') module.exports = { PHRASES_A1 };
