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
  { id:'by-the-way', en:'by the way', ru:'кстати', emoji:'💬', level:'A1',
    examples:['By the way, the meeting is at 3.','By the way, did you see the email?','By the way, the part arrived.','By the way, I need your signature.'] },
  { id:'as-soon-as-possible', en:'as soon as possible', ru:'как можно скорее', emoji:'⚡', level:'A1',
    examples:['Please send the report as soon as possible.','I need the answer as soon as possible.','They will fix it as soon as possible.','Call me as soon as possible.'] },
  { id:'right-away', en:'right away', ru:'прямо сейчас / немедленно', emoji:'🏃', level:'A1',
    examples:['I will do it right away.','They fixed the problem right away.','He left right away.','I will call you right away.'] },
  { id:'of-course', en:'of course', ru:'конечно', emoji:'✅', level:'A1',
    examples:['Of course, I can help you.','Of course, we will meet the deadline.','Of course, that is fine.','Of course, you are right.'] },
  { id:'good-morning', en:'good morning', ru:'доброе утро', emoji:'🌅', level:'A1',
    examples:['Good morning! How are you?','Good morning, team.','He said good morning to everyone.','Good morning, welcome to the meeting.'] },
  { id:'good-afternoon', en:'good afternoon', ru:'добрый день', emoji:'☀️', level:'A1',
    examples:['Good afternoon, everyone.','Good afternoon! Is the part ready?','Good afternoon, nice to meet you.','They greeted us with a good afternoon.'] },
  { id:'good-evening', en:'good evening', ru:'добрый вечер', emoji:'🌙', level:'A1',
    examples:['Good evening! The shift is starting.','Good evening, here is the report.','Good evening, thanks for staying late.','Good evening, the meeting is at 7.'] },
  { id:'see-you-later', en:'see you later', ru:'увидимся позже', emoji:'👋', level:'A1',
    examples:['See you later at the meeting.','OK, see you later.','See you later, have a good day.','She said see you later and left.'] },
  { id:'take-care', en:'take care', ru:'берегите себя', emoji:'💙', level:'A1',
    examples:['Take care, drive safe.','Thanks for your help, take care.','Take care and have a great weekend.','He said take care before hanging up.'] },
  { id:'can-i-help', en:'can I help you?', ru:'могу я вам помочь?', emoji:'🙋', level:'A1',
    examples:['Can I help you find the drawing?','Can I help you with the calculation?','Can I help you carry the part?','Can I help you schedule the test?'] },
  { id:'i-dont-understand', en:'I do not understand', ru:'я не понимаю', emoji:'❓', level:'A1',
    examples:['I do not understand the specification.','I do not understand the question.','I do not understand the process.','I do not understand the drawing.'] },
  { id:'can-you-repeat', en:'can you repeat that?', ru:'вы можете повторить?', emoji:'🔄', level:'A1',
    examples:['Can you repeat that? I missed it.','Can you repeat that more slowly?','Can you repeat the dimension?','Can you repeat that, please?'] },
  { id:'how-do-you-spell', en:'how do you spell that?', ru:'как это пишется?', emoji:'✍️', level:'A1',
    examples:['How do you spell the part number?','How do you spell your last name?','How do you spell that word?','How do you spell the material name?'] },
  { id:'what-does-it-mean', en:'what does it mean?', ru:'что это значит?', emoji:'❓', level:'A1',
    examples:['What does GD&T mean?','What does this symbol mean on the drawing?','What does the abbreviation mean?','What does this specification mean?'] },
  { id:'just-a-moment', en:'just a moment', ru:'одну минуту', emoji:'⏳', level:'A1',
    examples:['Just a moment, I will check.','Just a moment, the file is loading.','Just a moment, let me ask.','Just a moment, I need to confirm.'] },
  { id:'that-makes-sense', en:'that makes sense', ru:'это понятно / логично', emoji:'💡', level:'A1',
    examples:['That makes sense, thank you.','That makes sense to me.','Ah, that makes sense now.','That makes sense for this application.'] },
  { id:'i-agree', en:'I agree', ru:'я согласен', emoji:'👍', level:'A1',
    examples:['I agree with your approach.','I agree, we should test it first.','I agree that the deadline is tight.','I agree completely.'] },
  { id:'i-disagree', en:'I disagree', ru:'я не согласен', emoji:'🚫', level:'A1',
    examples:['I disagree with that specification.','I disagree, the tolerance is too tight.','I respectfully disagree.','I disagree because the data shows otherwise.'] },
  { id:'no-problem', en:'no problem', ru:'нет проблем', emoji:'👌', level:'A1',
    examples:['No problem, I can do that.','No problem, the part will be ready.','No problem at all.','No problem, I will send it today.'] },
  { id:'you-are-welcome', en:"you're welcome", ru:'пожалуйста (ответ на спасибо)', emoji:'🙏', level:'A1',
    examples:["Thank you! — You're welcome.","You're welcome, anytime.","You're welcome, glad I could help.","You're welcome, it was no trouble."] },
  { id:'excuse-me', en:'excuse me', ru:'извините / простите', emoji:'🙋', level:'A1',
    examples:['Excuse me, can I ask a question?','Excuse me, I did not catch that.','Excuse me, where is the conference room?','Excuse me, is this seat taken?'] },
  { id:'i-am-sorry', en:'I am sorry', ru:'мне жаль / извините', emoji:'😔', level:'A1',
    examples:['I am sorry for the mistake.','I am sorry, I will fix it.','I am sorry, I did not know.','I am sorry the part is delayed.'] },
  { id:'get-back-to-you', en:'I will get back to you', ru:'я вернусь к вам с ответом', emoji:'🔙', level:'A1',
    examples:['I will get back to you by Friday.','I will get back to you after I check.','I will get back to you with the answer.','I will get back to you on that.'] },
  { id:'do-you-have-time', en:'do you have time?', ru:'у вас есть время?', emoji:'⏰', level:'A1',
    examples:['Do you have time to review the drawing?','Do you have time for a quick call?','Do you have time this afternoon?','Do you have time to discuss the issue?'] },
  { id:'what-time-is', en:'what time is...?', ru:'в котором часу...?', emoji:'🕐', level:'A1',
    examples:['What time is the meeting?','What time is the inspection?','What time is the delivery?','What time is the conference call?'] },
  { id:'when-is-the-deadline', en:'when is the deadline?', ru:'когда срок?', emoji:'📅', level:'A1',
    examples:['When is the deadline for the report?','When is the deadline for the drawing?','When is the deadline for the order?','When is the deadline for the approval?'] },
  { id:'how-long-does-it-take', en:'how long does it take?', ru:'сколько это займёт?', emoji:'⏱️', level:'A1',
    examples:['How long does it take to machine the part?','How long does it take to get approval?','How long does it take to ship?','How long does it take to test?'] },
  { id:'first-of-all', en:'first of all', ru:'прежде всего', emoji:'1️⃣', level:'A1',
    examples:['First of all, we need the drawings.','First of all, let me explain the problem.','First of all, check the specification.','First of all, gather the team.'] },
  { id:'in-other-words', en:'in other words', ru:'другими словами', emoji:'💬', level:'A1',
    examples:['In other words, the part is out of spec.','In other words, we need to start over.','In other words, the cost is too high.','In other words, the test failed.'] },
  { id:'for-example', en:'for example', ru:'например', emoji:'📌', level:'A1',
    examples:['For example, we can use stainless steel.','For example, the torque spec is 25 Nm.','For example, the deadline is next Friday.','For example, this drawing shows the detail.'] },
  { id:'such-as', en:'such as', ru:'такой как / например', emoji:'📋', level:'A1',
    examples:['Materials such as aluminum are lightweight.','Tools such as a torque wrench are needed.','Standards such as ISO 9001 apply here.','Tests such as hardness and tensile are required.'] },
  { id:'on-the-other-hand', en:'on the other hand', ru:'с другой стороны', emoji:'⚖️', level:'A1',
    examples:['Steel is strong; on the other hand, it is heavy.','The cost is high; on the other hand, the quality is excellent.','On the other hand, the timeline is tight.','On the other hand, the risk is low.'] },
  { id:'in-addition', en:'in addition', ru:'кроме того', emoji:'➕', level:'A1',
    examples:['In addition, we need to test the seal.','In addition, the drawing must be approved.','In addition, please order the material.','In addition, the team needs training.'] },
  { id:'at-the-same-time', en:'at the same time', ru:'в то же время', emoji:'⏰', level:'A1',
    examples:['At the same time, we can inspect the parts.','Run the tests at the same time to save time.','At the same time, consider the cost.','The two operations run at the same time.'] },
  { id:'as-a-result', en:'as a result', ru:'в результате', emoji:'➡️', level:'A1',
    examples:['As a result, the part was rejected.','As a result, the project was delayed.','As a result, the cost increased.','As a result, the design was changed.'] },
  { id:'therefore', en:'therefore', ru:'поэтому / следовательно', emoji:'∴', level:'A1',
    examples:['The part is too heavy; therefore, we need a lighter material.','The test failed; therefore, we need to redesign.','The cost is too high; therefore, we need alternatives.','The deadline passed; therefore, we missed the shipment.'] },
  { id:'however', en:'however', ru:'однако', emoji:'⚡', level:'A1',
    examples:['The part is strong; however, it is expensive.','We want to meet the deadline; however, the material is delayed.','However, the test passed.','However, the customer has a different requirement.'] },
  { id:'in-conclusion', en:'in conclusion', ru:'в заключение', emoji:'🏁', level:'A1',
    examples:['In conclusion, the design meets all requirements.','In conclusion, we recommend the steel option.','In conclusion, the project was successful.','In conclusion, we need more testing.'] },
  { id:'i-need-help', en:'I need help with...', ru:'мне нужна помощь с...', emoji:'🆘', level:'A1',
    examples:['I need help with the calculation.','I need help with the drawing.','I need help with the translation.','I need help with the specification.'] },
  { id:'can-you-show-me', en:'can you show me?', ru:'вы можете показать мне?', emoji:'👁️', level:'A1',
    examples:['Can you show me the process?','Can you show me the drawing?','Can you show me how to use the tool?','Can you show me the measurement?'] },
  { id:'i-will-take-care', en:'I will take care of it', ru:'я займусь этим', emoji:'✅', level:'A1',
    examples:['I will take care of the paperwork.','I will take care of the order.','I will take care of the inspection.',"Don't worry, I will take care of it."] },
  { id:'what-is-the-status', en:'what is the status?', ru:'каков статус?', emoji:'📊', level:'A1',
    examples:['What is the status of the order?','What is the status of the test?','What is the status of the drawing?','What is the status of the repair?'] },
  { id:'on-time', en:'on time', ru:'вовремя', emoji:'⏰', level:'A1',
    examples:['The delivery arrived on time.','We finished the project on time.','The shipment was on time.','The report was submitted on time.'] },
  { id:'ahead-of-schedule', en:'ahead of schedule', ru:'раньше запланированного срока', emoji:'🏃', level:'A1',
    examples:['We finished ahead of schedule.','The parts arrived ahead of schedule.','The project is ahead of schedule.','They completed the test ahead of schedule.'] },
  { id:'behind-schedule', en:'behind schedule', ru:'с опозданием', emoji:'🐢', level:'A1',
    examples:['The project is behind schedule.','The delivery is behind schedule.','We are two weeks behind schedule.','They fell behind schedule due to material delay.'] },
  { id:'within-budget', en:'within budget', ru:'в рамках бюджета', emoji:'💰', level:'A1',
    examples:['The project finished within budget.','We completed the work within budget.','The purchase was within budget.','They stayed within budget all year.'] },
  { id:'over-budget', en:'over budget', ru:'превысив бюджет', emoji:'💸', level:'A1',
    examples:['The project went over budget.','They were over budget by 15 percent.','The repair was over budget.','We need to avoid going over budget.'] },
  { id:'good-job', en:'good job', ru:'хорошая работа / молодец', emoji:'👏', level:'A1',
    examples:['Good job on the presentation!','Good job finishing early.','Good job, the part passed inspection.','Everyone did a good job this week.'] },
  { id:'well-done', en:'well done', ru:'отлично сделано', emoji:'🏆', level:'A1',
    examples:['Well done on the project!','Well done, all tests passed.','Well done, the customer is happy.','Well done, you met every deadline.'] },
  { id:'keep-it-up', en:'keep it up', ru:'продолжай в том же духе', emoji:'💪', level:'A1',
    examples:['Great work, keep it up.','Keep it up and we will meet the target.','Keep it up, the quality is improving.','Keep it up, the team is impressed.'] },
  { id:'work-in-progress', en:'work in progress', ru:'работа в процессе', emoji:'🔧', level:'A1',
    examples:['The drawing is a work in progress.','The prototype is a work in progress.','The report is a work in progress.','The software is still a work in progress.'] },
  { id:'under-review', en:'under review', ru:'на рассмотрении', emoji:'🔍', level:'A1',
    examples:['The drawing is under review.','The proposal is under review.','The design change is under review.','The contract is under review.'] },
  { id:'pending-approval', en:'pending approval', ru:'ожидает одобрения', emoji:'⏳', level:'A1',
    examples:['The change is pending approval.','The order is pending approval.','The drawing is pending approval.','The budget is pending approval.'] },
  { id:'approved', en:'approved', ru:'одобрено', emoji:'✅', level:'A1',
    examples:['The design is approved.','The order was approved this morning.','The drawing is approved and released.','The budget has been approved.'] },
  { id:'rejected', en:'rejected', ru:'отклонено', emoji:'❌', level:'A1',
    examples:['The part was rejected at inspection.','The proposal was rejected.','The drawing was rejected for revision.','The order was rejected due to the error.'] },
  { id:'on-hold', en:'on hold', ru:'на паузе / приостановлено', emoji:'⏸️', level:'A1',
    examples:['The project is on hold.','The order is on hold pending approval.','The shipment is on hold.','The design is on hold while we investigate.'] },
  { id:'in-stock', en:'in stock', ru:'в наличии', emoji:'📦', level:'A1',
    examples:['The part is in stock.','We have it in stock.','Is the material in stock?','The fastener is in stock at the warehouse.'] },
  { id:'out-of-stock', en:'out of stock', ru:'нет в наличии', emoji:'🚫', level:'A1',
    examples:['The part is out of stock.','The material is out of stock.','The supplier is out of stock.','We are out of stock on that size.'] },
  { id:'lead-time-phrase', en:'the lead time is...', ru:'срок поставки составляет...', emoji:'📅', level:'A1',
    examples:['The lead time is 6 weeks.','The lead time is 3 business days.','What is the lead time for this part?','The lead time has increased to 12 weeks.'] },
  { id:'place-an-order', en:'to place an order', ru:'разместить заказ', emoji:'🛒', level:'A1',
    examples:['We need to place an order today.','They placed an order for 500 parts.','Please place the order before 5 PM.','I will place the order as soon as I get approval.'] },
  { id:'cancel-an-order', en:'to cancel an order', ru:'отменить заказ', emoji:'❌', level:'A1',
    examples:['We had to cancel the order.','They cancelled the order last minute.','Can we cancel the order?','The customer asked us to cancel the order.'] },
  { id:'submit-a-report', en:'to submit a report', ru:'представить отчёт', emoji:'📄', level:'A1',
    examples:['Please submit the report by Friday.','They submitted the report on time.','I need to submit a report this week.','The engineer submitted a report after the test.'] },
  { id:'raise-a-concern', en:'to raise a concern', ru:'выразить беспокойство', emoji:'⚠️', level:'A1',
    examples:['I want to raise a concern about the timeline.','She raised a concern about the specification.','He raised a concern at the meeting.','Please raise a concern if you see a problem.'] },
  { id:'follow-up', en:'to follow up', ru:'отследить / напомнить', emoji:'🔄', level:'A1',
    examples:['I will follow up with the supplier.','Please follow up on the order.','They followed up after the meeting.','Follow up if you do not get a response.'] },
  { id:'wrap-up', en:'to wrap up', ru:'завершить / подвести итог', emoji:'🏁', level:'A1',
    examples:['Let us wrap up the meeting.','They wrapped up the project on time.','We need to wrap up by noon.','He wrapped up the presentation quickly.'] },
  { id:'look-into', en:'to look into', ru:'изучить / разобраться', emoji:'🔍', level:'A1',
    examples:['I will look into the issue.','Let me look into the drawing.','They looked into the problem.','Please look into the delivery status.'] },
  { id:'find-out', en:'to find out', ru:'выяснить', emoji:'🔎', level:'A1',
    examples:['I need to find out the lead time.','Can you find out the price?','She found out the answer.','Let me find out and I will call you back.'] },
  { id:'point-out', en:'to point out', ru:'указать на / отметить', emoji:'👉', level:'A1',
    examples:['He pointed out the error in the drawing.','She pointed out the risk.','I want to point out one issue.','The inspector pointed out three defects.'] },
  { id:'bring-up', en:'to bring up', ru:'поднять вопрос', emoji:'🙋', level:'A1',
    examples:['He brought up the schedule issue.','She brought up the safety concern.','I want to bring up the cost increase.','The engineer brought up a good point.'] },
  { id:'check-in', en:'to check in', ru:'уточнить / проверить', emoji:'✔️', level:'A1',
    examples:['I will check in with the team tomorrow.','She checked in on the progress.','Please check in before the end of the day.','They check in every morning at the stand-up.'] }

,
  { id:'bear-in-mind', en:'bear in mind', ru:'иметь в виду', emoji:'💡', level:'A1',
    examples:['Bear in mind that the deadline is Friday.','Bear in mind the safety rules.','Bear in mind the customer requirement.','Please bear in mind the budget limit.'] }

];

if (typeof module !== 'undefined') module.exports = { PHRASES_A1 };
