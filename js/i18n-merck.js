window.METRICS = {
  en: [
    { metric: 'Monthly Active Users (excl. calculator)', baseline: '~Near zero', arrow: '↑', dir: 'Primary growth metric' },
    { metric: 'Notes created per user', baseline: "0 (feature didn't exist)", arrow: '↑', dir: 'North star' },
    { metric: 'Email open rate', baseline: '19.5%', arrow: '↑', dir: 'Toward 27% market average' },
    { metric: 'F2F visit dependency', baseline: '~90% of all touchpoints', arrow: '↓', dir: 'Shift volume to digital' },
    { metric: 'Offline event conversion', baseline: 'Unmeasured', arrow: '↑', dir: 'Platform → conference attendance' }
  ],
  ru: [
    { metric: 'Активные пользователи в месяц (без калькулятора)', baseline: '~почти ноль', arrow: '↑', dir: 'Главная метрика роста' },
    { metric: 'Создано заметок на пользователя', baseline: '0 (функции не было)', arrow: '↑', dir: 'Полярная звезда' },
    { metric: 'Open rate писем', baseline: '19,5%', arrow: '↑', dir: 'К рыночным 27%' },
    { metric: 'Зависимость от личных визитов', baseline: '~90% всех контактов', arrow: '↓', dir: 'Сместить объём в digital' },
    { metric: 'Конверсия офлайн-мероприятий', baseline: 'Не измерялась', arrow: '↑', dir: 'Платформа → участие в конференциях' }
  ]
};

window.FINDINGS = {
  en: [
    { n: '01', title: 'Time is fragmented, not scarce', body: "Doctors don't have learning blocks — they have a commute, five minutes between patients, ten minutes before a shift. Anything needing sustained focus faces a structural adoption barrier. Every feature is designed for sessions under five minutes.", quote: 'I read in the gaps — there are no big blocks of time.' },
    { n: '02', title: 'Information has no home', body: 'Bookmarks across browsers, notes in phone apps, handwritten references for consultations. One doctor Googled the same calculator every time. The pinboard came directly from this — a personal layer over content that already exists.', quote: 'I just Google the same calculator every single time.' },
    { n: '03', title: 'Pharma content is presumed biased', body: 'Selectively edited data, the same presentation every quarter, lectures tied to implicit prescribing pressure. Trust was structural, not a messaging problem. The response: approved third-party sources alongside Merck content.', quote: "It's the same slide deck from a different rep each quarter." },
    { n: '04', title: 'Emotional load is high and unaddressed', body: 'Multiple respondents described arriving at complete emotional exhaustion, coping through boxing or breathing exercises with no institutional support. Not in the brief — but ignoring it would have made the platform feel tone-deaf.', quote: 'There is no one to talk to about the hard cases.' }
  ],
  ru: [
    { n: '01', title: 'Время фрагментировано, а не дефицитно', body: 'У врачей нет временных блоков для обучения — у них есть дорога, пять минут между пациентами, десять минут до смены. Всё, что требует длительной концентрации, сталкивается со структурным барьером принятия. Каждая функция рассчитана на сессии короче пяти минут.', quote: 'Я читаю в промежутках — больших отрезков времени просто нет.' },
    { n: '02', title: 'У информации нет дома', body: 'Закладки в разных браузерах, заметки в приложениях телефона, рукописные шпаргалки для консультаций. Один врач каждый раз гуглил один и тот же калькулятор. Доска (pinboard) выросла прямо из этого — личный слой поверх уже существующего контента.', quote: 'Я просто каждый раз гуглю один и тот же калькулятор.' },
    { n: '03', title: 'Фарм-контент считают предвзятым', body: 'Выборочно отредактированные данные, одна и та же презентация каждый квартал, лекции с неявным давлением на назначения. Недоверие было структурным, а не проблемой формулировок. Ответ: одобренные сторонние источники рядом с контентом Merck.', quote: 'Это одна и та же презентация от разного представителя каждый квартал.' },
    { n: '04', title: 'Эмоциональная нагрузка высока и не закрыта', body: 'Несколько респондентов описывали полное эмоциональное истощение, с которым справлялись через бокс или дыхательные упражнения, без поддержки со стороны системы. Этого не было в брифе — но игнорировать это значило бы сделать платформу глухой к людям.', quote: 'Основной пункт, который помогает, у меня это дыхание по квадрату.' }
  ]
};

window.SCALE_CAPTIONS = {
  en: ['Wave #1 — pinboard, mental support, library, chatbot and running club.', 'Wave #2 — browser extension and mentorship with specialist booking.', 'Wave #3 — knowledge system linking notes with a knowledge map.'],
  ru: ['Волна #1 — пинборд, ментальная поддержка, библиотека, чат-бот и беговой клуб.', 'Волна #2 — расширение для браузера и менторство с записью к специалистам.', 'Волна #3 — система знаний со связями между записями и картой знаний.']
};

window.I18N = {
  en: {
    navWork: 'Work', navLife: 'Life', navCV: 'Download CV',
    heroEyebrow: 'Pharma platform for oncologists · April 2025 — July 2025',
    heroTitle: 'Merck — a companion for oncologists, on the floor and after it.',
    metaRole: 'Role', metaRoleValue: 'Product manager · UX researcher · Product designer<br><span style="color:rgba(26,24,21,0.6);">Research · UI · Prototyping</span>',
    metaContext: 'Context', metaContextVal: 'BHSAD capstone · commissioned by Merck Russia',
    metaPlatform: 'Platform', metaPlatformVal: 'Desktop · responsive for mobile',
    metaScope: 'Scope', metaScopeVal: 'Research → synthesis → concept design',
    tldrTab: 'TL;DR', fullTab: 'Full case',
    tldrFramingLabel: 'Problem framing',
    tldrFrame: 'The brief asked for higher engagement metrics. The research showed that metrics were low because oncologists had no reason to trust a pharma platform with their limited attention — so we designed for <span style="font-style:italic;">their day first</span>, and Merck\u2019s funnel second.',
    inShort: 'In short',
    shortProblemLabel: 'Problem', shortProblem: 'Oncologists engage with pharma companies out of inertia, not interest: rep visits bring no new information and email campaigns are ignored. A doctor has no reason to be engaged.',
    shortConstraintsLabel: 'Constraints', shortConstraints: 'The work was bound by many legal and ethical constraints. The most important: Federal Law 38-FZ ("On Advertising", 13.03.2006), mandatory content moderation (we couldn\u2019t allow open discussion on the platform), and the impossibility of directly affecting a doctor\u2019s workflow because of personal-data rules and institutions\u2019 internal systems.',
    shortDidLabel: 'What I did', shortDid: 'Designed one calm companion holding three jobs — a knowledge hub, fast clinical tools, and room to breathe — side by side, reachable between patients.',
    shortOutcomeLabel: 'Outcome', shortOutcome: 'A phased launch of a platform for doctors where the central value is creating and saving notes. It strengthens engagement, shifts part of the communication into digital, and works toward the brand\u2019s trust, loyalty, and business growth.',
    shortRoleLine: 'Role: Product Designer · April 2025 — July 2025 · Desktop · responsive for mobile · Research → UI → prototype',
    theProblemLabel: 'The problem', theProblemBody: "Merck Russia's oncology platform was effectively invisible: 2,000 visits/month driven almost entirely by one calculator page, email open rates at 19.5% against a 27% market average, and 90% of all physician engagement locked inside expensive face-to-face sales visits costing ~₽8M/year. From 10,000 oncologists in Russia, only 400 were actively engaged with Merck.",
    theGoalLabel: 'The goal', theGoalBody: 'Extend the marketing funnel so that oncologists encounter genuinely useful content before a sales visit — reducing cost-per-touch and increasing the quality of F2F time when it does happen.',
    proposedLabel: 'What we proposed',
    proposedBody: 'A closed, verified professional platform centred on a <strong style="font-weight:600;color:#1A1815;">personal pinboard</strong> — a workspace where doctors save, annotate, and audio-convert clinical materials. Supporting features: contextual calculators, peer-matching (Medical Buddy), a micro mental-health module, and an anonymised clinical case feed ("Mistake of the Day").',
    metricsLabel: 'Target metrics', tblMetric: 'Metric', tblBaseline: 'As is', tblDirection: 'To be (target)',
    metricsNote: '<strong style="font-weight:600;color:#1A1815;">Notes per user</strong> was the north star because it\u2019s hard to game: a note means a doctor read something, found it worth keeping, and used the platform\u2019s structure. Page views were rejected as a primary signal — they\u2019re inflated by the calculator regardless of what else happens.',
    featureImgCaption: "Responsive version of the home screen of Merck's redesigned knowledge base.",
    s01Label: '01 — The problem',
    s01Lead: 'Pharma companies reach oncologists through two channels: face-to-face rep visits (90% of contacts) and email campaigns. Both work poorly.',
    s01Body: 'Doctors see rep visits as a formality: an oncologist — a highly expert, time-starved specialist — gets no value from the contact, and email campaigns show open rates below the market average. As a result, engagement with the pharma company is met with condescension.',
    s02Label: '02 — Context & constraints',
    s02Lead: 'To actually move the metrics, the platform\u2019s value had to come entirely from usefulness to the doctor — not from Merck\u2019s commercial interest.',
    s02Body1: 'Russian federal law (FZ-38) prohibits branded pharmaceutical advertising. All physician engagement must route through educational content or tools, and every piece of content requires legal moderation before publication. This ruled out free-form community discussion and direct product promotion.',
    s02Body2: 'A second constraint: oncologists work 10+ hour shifts, manage ~170 patients a month without nursing support, and are deeply sceptical of pharma companies. Several respondents described sales representatives as an interruption. Any platform that felt like marketing would be ignored.',
    s02ImgCaption: 'The Merck platform as is',
    s03Label: '03 — Research',
    s03Lead: '16 depth interviews with people across 3 segments: students, future oncologists, and experienced and early-career doctors.',
    s03Body1: 'From these we built a mindset matrix. The main differentiators were attitude toward learning and the content format each respondent prefers.',
    findingsHeader: 'Four findings strong enough to shape design decisions',
    s04Label: '04 — Mindsets',
    s04Lead: 'Mapped across two axes — learning orientation and format flexibility. Three segments to design for; one we deliberately set aside.',
    s04Body: 'We excluded the low-learning, high-flexibility cluster — they had the least need for a knowledge platform and no authority figures to draw them in.',
    seg1Label: 'Primary audience', seg1Title: 'Inquisitive Learners', seg1Body: 'Learn continuously, high digital literacy, motivated by being ahead of peers. Likely early adopters.',
    seg2Label: 'Secondary', seg2Title: 'Methodical Researchers', seg2Body: 'High learning orientation, traditional format preference. Value first-source accuracy; slower to adopt.',
    seg3Label: 'Community-led', seg3Title: 'Followers', seg3Body: 'Conservative about their own knowledge needs, but highly responsive to respected peers. Community features are their hook.',
    funnelStageLabel: 'Sub-stage', funnelTitle: 'Reworked Merck marketing funnel',
    funnelCaption: 'Funnel diagram — the doctor\u2019s path from first touch to a pinned, verified space.',
    s05Label: '05 — The solution',
    s05Lead: 'The result is a platform concept that closes the gap in useful professional content and gives doctors a single digital space to engage with the brand.',
    ftATitle: 'Pinboard with audio and annotation', ftABody: 'Doctors save articles, convert them to audio for the commute, and add timestamped notes — all as a single object. The platform becomes the place a fragmented habit finally lives.',
    ftACaption: 'Pinboard — article open with audio player active and a timestamped note panel alongside.',
    ftBTitle: 'Calculators, in context', ftBBody: 'The site\u2019s most-visited page is a GFR calculator. We extended it into a multi-calculator workspace beside pinned materials — reference an article and run the math on one screen, mid-consultation.',
    ftBBefore: 'One calculator', ftBAfter: 'Workspace', ftBCaption: 'Drag to compare — a single calculator versus the multi-calculator workspace.',
    ftCBody: 'Lightweight peer-matching for doctors who work with Merck products. Many respondents were the only oncologist in their building. The community feature that works within FZ-38: connection without an unmoderated public channel.',
    ftCCaption: 'Medical Buddy — a weekly match arrives as a push, then opens in the oncology bot chat.',
    ftDTitle: 'Mental health module', ftDBody: 'A one-to-three minute breathing and relaxation tool, accessible mid-shift. Deliberately scoped: no therapy, no helpline, nothing requiring clinical oversight or creating FZ-38 liability. A partial response to a real need.',
    ftDCaption: 'Mental health — the page auto-scrolls down to the visual-relaxation tools in its lower third.',
    ftETitle: '\u201cMistake of the Day\u201d', ftEBody: 'An anonymised clinical case with a reflective quiz, for Inquisitive Learners who told us they enjoy unusual cases. Drives return visits without requiring Merck to generate original content.',
    ftECaption: 'Mistake of the Day — an anonymised case with \u201cbest mistakes\u201d and a prompt to share your own.',
    s06Label: '06 — Scaling',
    s06Lead: 'Scope is a design decision. Two things were cut on purpose — not for lack of time.',
    s06Body1: '<strong style="font-weight:600;color:#1A1815;">Mentorship moved to phase three.</strong> It needs an established user base before senior clinicians have any reason to participate. Launching it empty would damage the platform\u2019s credibility.',
    s06Body2: '<strong style="font-weight:600;color:#1A1815;">Free-form community features were excluded entirely.</strong> FZ-38\u2019s moderation requirement makes asynchronous open discussion unworkable — you can\u2019t pre-approve real-time conversation. Medical Buddy is the answer: connection without an unmoderated channel.',
    s07Label: '07 — Reflection',
    s07Lead: 'The binding constraint is attention and trust.',
    s07Body1: 'We framed this initially as an information-access problem. The research reframed it: a better platform isn\u2019t one with more content — it\u2019s one that costs less effort to use and earns its place in an already exhausted workday. That shift produced the pinboard: not a library, but a personal layer over content that already exists.',
    s07Body2: 'The main gap is testing. We prototyped the pinboard and calculator workspace but never put them in front of oncologists. The audio-conversion feature in particular — built from a single respondent who described dictating notes to listen back to — is an assumption we couldn\u2019t validate. That test would have changed the confidence level of everything downstream.',
    mentorLabel: 'Mentor feedback',
    mentorsInfo: 'You can get feedback on my work from the BHSAD mentors:',
    mentor1: 'Victoria · @VictoriaStrelets', mentor2: 'Alisa · @pa_alisa',
    nextLabel: 'Next project', nextTitle: 'Precheck — Medical Copilot',
    footPortfolio: 'Portfolio by', footElsewhere: 'Contact'
  },
  ru: {
    navWork: 'Проекты', navLife: 'Жизнь', navCV: 'Скачать резюме',
    heroEyebrow: 'Платформа фармкомпании для врачей-онкологов · апрель, 2025 — июль, 2025',
    heroTitle: 'Merck — помощник для онкологов: в отделении и после смены.',
    metaRole: 'Роль', metaRoleValue: 'Продуктовый менеджер · UX-исследователь · Продуктовый дизайнер<br><span style="color:rgba(26,24,21,0.6);">Исследования · UI · Прототипирование</span>',
    metaContext: 'Контекст', metaContextVal: 'Дипломный проект БВШД по брифу от Merck Россия',
    metaPlatform: 'Платформа', metaPlatformVal: 'Десктоп версия и адаптив для мобильных устройств',
    metaScope: 'Объём работ', metaScopeVal: 'Исследование → синтез → концепт-дизайн',
    tldrTab: 'Кратко', fullTab: 'Полный кейс',
    tldrFramingLabel: 'Постановка проблемы',
    tldrFrame: 'Бриф просил повысить метрики вовлечённости. Исследование показало, что метрики были низкими, потому что у онкологов не было причин доверять фарм-платформе своё ограниченное внимание — поэтому мы проектировали платформу прежде всего <span style="font-style:italic;">под их день</span>, а воронку Merck — во вторую очередь.',
    inShort: 'Коротко',
    shortProblemLabel: 'Проблема', shortProblem: 'Онкологи взаимодействуют с фармкомпаниями по инерции, а не по интересу: встречи с представителями не дают новой информации, email-рассылки игнорируются. У врача нет причины быть вовлечённым.',
    shortConstraintsLabel: 'Ограничения', shortConstraints: 'Работа велась с большим количеством юридических и этических ограничений. Наиболее важные это 38-ФЗ («О рекламе» от 13.03.2006), необходимость модерации контента (мы не можем позволить свободно общаться на платформе) и невозможность повлиять на рабочие процессы врача напрямую из-за персональных данных и внутренних систем учреждений.',
    shortDidLabel: 'Что я сделала', shortDid: 'Спроектировала один спокойный помощник с тремя задачами — база знаний, быстрые клинические инструменты и место, чтобы выдохнуть — рядом друг с другом, доступные между пациентами.',
    shortOutcomeLabel: 'Результат', shortOutcome: 'Поэтапный запуск платформы для врачей, где центральная ценность — создание и сохранение заметок. Это решение усиливает вовлеченность, переносит часть коммуникации в digital и работает на доверие, лояльность и бизнес-рост бренда.',
    shortRoleLine: 'Роль: Продуктовый дизайнер · апрель 2025 — июль 2025 · Десктоп версия и адаптив для мобильных устройств · Исследование → UI → прототип',
    theProblemLabel: 'Проблема', theProblemBody: 'Онкологическая платформа Merck Россия: 2 000 визитов в месяц почти полностью за счёт одной страницы с калькулятором СКФ, Open Rate писем 19,5% против рыночных 27%, и 90% всего взаимодействия с врачами заперто внутри дорогих личных визитов представителей стоимостью ~₽8 млн в год. Из 10 000 онкологов в России только 400 были активно вовлечены в Merck.',
    theGoalLabel: 'Цель', theGoalBody: 'Расширить маркетинговую воронку так, чтобы онкологи встречали по-настоящему полезный контент до визита представителя — снижая стоимость контакта и повышая качество личных встреч, когда они всё же происходят.',
    proposedLabel: 'Что мы предложили',
    proposedBody: 'Закрытая, верифицированная профессиональная платформа вокруг <strong style="font-weight:600;color:#1A1815;">личной доски (pinboard)</strong> — рабочего пространства, где врачи сохраняют, аннотируют и переводят в аудио клинические материалы. Поддерживающие функции: контекстные калькуляторы, подбор коллег (Medical Buddy), микромодуль ментального здоровья и анонимная лента клинических случаев («Ошибка дня»).',
    metricsLabel: 'Целевые метрики', tblMetric: 'Метрика', tblBaseline: 'As is', tblDirection: 'TO BE (Target)',
    metricsNote: '<strong style="font-weight:600;color:#1A1815;">«Заметки на пользователя»</strong> были «полярной звездой», потому что их трудно накрутить: заметка означает, что врач что-то прочитал, счёл это достойным сохранения и воспользовался структурой платформы. Просмотры страниц отвергли как основной сигнал — они раздуты калькулятором независимо от всего остального.',
    featureImgCaption: 'Адаптивная версия главного экрана обновленной базы знаний Merck',
    s01Label: '01 — Проблема',
    s01Lead: 'Фармкомпании строят коммуникацию с онкологами через два канала: личные встречи с представителями (90% контактов) и email-рассылки. Оба работают плохо.',
    s01Body: 'Встречи воспринимаются врачами как формальность: онколог — специалист с высокой экспертизой и дефицитом времени — не получает от этого контакта никакой ценности, а email-рассылки показывают открываемость ниже среднего по рынку. В результате взаимодействие с фармкомпанией воспринимается снисходительно.',
    s02Label: '02 — Контекст и ограничения',
    s02Lead: 'Для реального влияния на метрики ценность платформы должна была полностью исходить из пользы для врача, а не из коммерческого интереса Merck.',
    s02Body1: 'Российский федеральный закон (ФЗ-38) запрещает брендированную рекламу лекарств. Любое взаимодействие с врачами должно идти через образовательный контент или инструменты, и каждый материал требует юридической модерации перед публикацией. Это исключило свободное обсуждение в сообществе и прямое продвижение продукта.',
    s02Body2: 'Второе ограничение: онкологи работают сменами по 10+ часов, ведут ~170 пациентов в месяц без поддержки медсестёр и глубоко скептичны к фарм-компаниям. Несколько респондентов описывали визиты представителей как помеху. Любую платформу, которая ощущалась бы как маркетинг, проигнорировали бы.',
    s02ImgCaption: 'Платформа Merck as is',
    s03Label: '03 — Исследование',
    s03Lead: '16 глубинных интервью с представителями 3 сегментов: студенты, будущие онкологи, опытные и молодые врачи.',
    s03Body1: 'На основе этого составили матрицу майндсетов. За главные дифференциаторы взяли отношение к обучению и формат, предпочтение которому отдают респонденты.',
    findingsHeader: 'Четыре вывода, достаточно сильных, чтобы определять дизайн-решения',
    s04Label: '04 — Типы мышления',
    s04Lead: 'Размечены по двум осям — ориентация на обучение и гибкость к форматам. Три сегмента, под которые проектируем; один сознательно отложили.',
    s04Body: 'Мы исключили кластер с низкой ориентацией на обучение и высокой гибкостью — у них была наименьшая потребность в платформе знаний и не было авторитетов, которые могли бы их вовлечь.',
    seg1Label: 'Основная аудитория', seg1Title: 'Пытливые умы', seg1Body: 'Учатся постоянно, высокая цифровая грамотность, мотивированы быть впереди коллег. Вероятные ранние последователи.',
    seg2Label: 'Вторичная', seg2Title: 'Методичные', seg2Body: 'Высокая ориентация на обучение, предпочтение традиционным форматам. Ценят точность первоисточника; медленнее принимают новое.',
    seg3Label: 'Ведомые сообществом', seg3Title: 'Последователи', seg3Body: 'Консервативны в отношении собственных потребностей в знаниях, но очень отзывчивы к уважаемым коллегам. Их крючок — функции сообщества.',
    funnelStageLabel: 'Доп. этап', funnelTitle: 'Переработанная маркетинговая воронка Merck',
    funnelCaption: 'Схема воронки — путь врача от первого касания до закреплённого, верифицированного пространства.',
    s05Label: '05 — Решение',
    s05Lead: 'В результате мы сформировали концепт платформы, который закрывает проблему нехватки полезного профессионального контента и создает для врачей единое digital-пространство для взаимодействия с брендом.',
    ftATitle: 'Аудиоверсии статей и добавление таймкодов', ftABody: 'Врачи сохраняют статьи на платформе, которая автоматически переводит их в аудио для прослушивания в дороге, а затем добавляют к ним заметки с таймкодами — всё собирается в единый объект. Так платформа становится "домом" для фрагментированной привычки.',
    ftACaption: 'Доска — открытая статья с активным аудиоплеером и панелью заметок с таймкодами рядом.',
    ftBTitle: 'Калькуляторы в контексте', ftBBody: 'Самая посещаемая страница сайта — калькулятор СКФ. Мы развили его в рабочее пространство с несколькими калькуляторами рядом с закреплёнными материалами — теперь можно сослаться на статью и посчитать на одном экране прямо во время консультации.',
    ftBBefore: 'Один калькулятор', ftBAfter: 'Рабочее пространство', ftBCaption: 'Перетащите, чтобы сравнить — один калькулятор и рабочее пространство с несколькими.',
    ftCBody: 'Лёгкий подбор коллег для врачей, работающих с продуктами Merck. Многие респонденты были единственным онкологом в своём здании. Функция сообщества, которая работает в рамках ФЗ-38: связь без немодерируемого публичного канала.',
    ftCCaption: 'Medical Buddy — пара недели приходит пушем, а затем открывается в чате онко-бота.',
    ftDTitle: 'Модуль ментального здоровья', ftDBody: 'Инструмент дыхания и релаксации на одну-три минуты, доступный посреди смены. Сознательно ограничен: без терапии, без горячей линии, без всего, что требует клинического надзора или создаёт риски по ФЗ-38. Частичный ответ на реальную потребность.',
    ftDCaption: 'Внизу страницы ментальное здоровье есть блок визуального расслабления, предлагающий дыхательные медитации.',
    ftETitle: '«Ошибка дня»', ftEBody: 'Анонимный клинический случай с рефлексивным тестом — для «Пытливых умов», которые говорили, что любят необычные случаи. Стимулирует возвраты, не требуя от Merck создавать оригинальный контент.',
    ftECaption: '«Ошибка дня» — анонимный случай с «лучшими ошибками» и предложением рассказать свою.',
    s06Label: '06 — Масштабирование',
    s06Lead: 'Объём — это дизайн-решение. Два пункта были вырезаны намеренно — не из-за нехватки времени.',
    s06Body1: '<strong style="font-weight:600;color:#1A1815;">Менторство перенесли в третью фазу.</strong> Ему нужна сформированная база пользователей, прежде чем у лидеров мнений появится причина участвовать. Запуск с пустотой подорвал бы доверие к платформе.',
    s06Body2: '<strong style="font-weight:600;color:#1A1815;">Свободные функции сообщества исключили полностью.</strong> Требование модерации по ФЗ-38 делает асинхронное открытое обсуждение нерабочим — нельзя заранее одобрить разговор в реальном времени. Medical Buddy — ответ: связь без немодерируемого канала.',
    s07Label: '07 — Рефлексия',
    s07Lead: 'Ограничивающий фактор — внимание и доверие.',
    s07Body1: 'Сначала мы сформулировали это как проблему доступа к информации. Исследование переосмыслило её: лучшая платформа — не та, где больше контента, а та, которая требует меньше усилий и заслуживает место в и без того изматывающем рабочем дне. Этот сдвиг породил доску: не библиотеку, а личный слой поверх уже существующего контента.',
    s07Body2: 'Главный пробел — тестирование. Мы прототипировали доску и рабочее пространство калькуляторов, но так и не показали их онкологам. В особенности функция перевода в аудио — построенная на одном респонденте, описавшем, как надиктовывает заметки, чтобы потом слушать — это допущение, которое мы не смогли проверить. Этот тест изменил бы уровень уверенности во всём, что идёт дальше.',
    mentorLabel: 'Обратная связь от менторов',
    mentorsInfo: 'Получить ОС на мою работу можно у менторов БВШД:',
    mentor1: 'Виктория · @VictoriaStrelets', mentor2: 'Алиса · @pa_alisa',
    nextLabel: 'Следующий проект', nextTitle: 'Precheck — Medical Copilot',
    footPortfolio: 'Портфолио', footElsewhere: 'Контакты'
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function renderMetrics(lang) {
    var rows = document.getElementById('metrics-rows');
    if (!rows) return;
    rows.innerHTML = '';
    window.METRICS[lang].forEach(function (m, i) {
      var bg = (i === 1 || i === 3) ? '#FFFDF7' : (i % 2 === 0 ? '#FFFDF7' : '#CCD7A3');
      var row = document.createElement('div');
      row.className = 'metrics-row';
      row.style.background = bg;
      row.innerHTML = '<div>' + m.metric + '</div><div style="color:rgba(26,24,21,0.7);">' + m.baseline + '</div><div class="m-dir"><span style="font-size:16px;">' + m.arrow + '</span><span>' + m.dir + '</span></div>';
      rows.appendChild(row);
    });
  }

  function renderFindings(lang) {
    var grid = document.getElementById('findings-grid');
    if (!grid) return;
    grid.innerHTML = '';
    window.FINDINGS[lang].forEach(function (f) {
      var card = document.createElement('div');
      card.className = 'finding-card';
      card.innerHTML = '<div style="font-family:\'Space Grotesk\',sans-serif;font-size:12px;color:rgba(26,24,21,0.45);">' + f.n + '</div>' +
        '<h3>' + f.title + '</h3>' +
        '<p style="font-size:15px;line-height:1.55;color:rgba(26,24,21,0.7);">' + f.body + '</p>' +
        '<div class="finding-quote">\u201c' + f.quote + '\u201d</div>';
      grid.appendChild(card);
    });
  }

  var scaleIdx = 0;
  function renderScaleCaption(lang) {
    var el = document.getElementById('scale-caption');
    if (!el) return;
    el.textContent = window.SCALE_CAPTIONS[lang][scaleIdx];
  }
  document.querySelectorAll('.scale-frame [data-carousel-dot], .scale-frame [data-carousel-prev], .scale-frame [data-carousel-next]').forEach(function (btn, idx, all) {
    btn.addEventListener('click', function () {
      var dots = document.querySelectorAll('.scale-frame [data-carousel-dot]');
      dots.forEach(function (d, di) { if (d.classList.contains('is-active')) scaleIdx = di; });
      renderScaleCaption((localStorage.getItem('pf_lang') === 'ru') ? 'ru' : 'en');
    });
  });

  function renderAll(lang) {
    renderMetrics(lang);
    renderFindings(lang);
    renderScaleCaption(lang);
  }

  window.onLangApplied = (function (prev) {
    return function (lang) { if (prev) prev(lang); renderAll(lang); };
  })(window.onLangApplied);

  renderAll((localStorage.getItem('pf_lang') === 'ru') ? 'ru' : 'en');
});
