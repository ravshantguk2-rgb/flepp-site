const state = {
  page: "home",
  settings: null,
  applications: [],
  reviews: [],
  allReviews: [],
  adminAuthorized: false,
  selectedTeacher: null,
  selectedProgramCategory: "languages",
  selectedProgramKey: "Английский",
  testLanguage: "Английский",
  testAnswers: {},
  testSubmitted: false,
  reviewProvider: null
};

const branches = [
  { name: "Бустон", address: "Шерози 1", phone: "+992929730052", director: "Точибоева М." },
  { name: "Конибодом", address: "центр", phone: "+992927332202", director: "Мукаррамова З. Х." },
  { name: "Унчи", address: "н. Б. Гафуров, Мастура Авезова 87", phone: "+992927483008", director: "Фузайлова Махина Равшановна" },
  { name: "Овчикалача", address: "н. Б. Гафуров, Азамов", phone: "+992926123040", director: "Ахмедова Р. М." }
];

const teachers = [
  { name: "Фузайлов Р. К.", role: "Генеральный директор центра, преподаватель английского языка", directions: ["Английский", "IELTS"] },
  { name: "Точибоева М.", role: "Директор филиала г. Бустон", directions: [] },
  { name: "Мукаррамова З. Х.", role: "Директор филиала Конибодом, преподаватель английского языка", directions: ["Английский"] },
  { name: "Фузайлова Махина Равшановна", role: "Директор филиала Унчи", directions: [] },
  { name: "Ахмедова Р. М.", role: "Директор филиала Овчикалача, преподаватель английского языка", directions: ["Английский"] },
  { name: "Олимова З.", role: "Преподаватель английского языка", directions: ["Английский"] },
  { name: "Абдувалиева Д.", role: "Преподаватель русского языка", directions: ["Русский"] },
  { name: "Эхсонзода", role: "Преподаватель английского языка", directions: ["Английский"] },
  { name: "Кобилов Ч. Ш.", role: "Преподаватель английского языка", directions: ["Английский"] },
  { name: "Гавхар Батировна", role: "Преподаватель русского языка", directions: ["Русский"] },
  { name: "Рузиев К. Н.", role: "Преподаватель английского языка", directions: ["Английский"] },
  { name: "Бегмахмадов А. Б.", role: "Преподаватель английского языка", directions: ["Английский"] },
  { name: "Зиеева М. П.", role: "Преподаватель", directions: [] },
  { name: "Насриддинова Ш. З.", role: "Преподаватель китайского языка", directions: ["Китайский"] },
  { name: "Тухтаева Н. Я.", role: "Преподаватель русского языка", directions: ["Русский"] },
  { name: "Джураева Ш.", role: "Преподаватель английского языка", directions: ["Английский"] }
];

const languagePrograms = [
  { key: "Английский", title: "Английский язык", price: "от 220 сомон", description: "General English по уровням, разговорная практика, грамматика, чтение и развитие уверенного общения.", details: ["Группы по уровням", "Разговорная практика", "Подготовка к IELTS", "Контроль прогресса"] },
  { key: "Русский", title: "Русский язык", price: "от 220 сомон", description: "Практический курс русского языка для школьников, студентов и взрослых с упором на речь и грамотность.", details: ["Грамматика", "Письмо", "Разговорная практика", "Подготовка к учебе"] },
  { key: "Немецкий", title: "Немецкий язык", price: "от 350 сомон", description: "Современный курс немецкого языка для учебы, карьеры и международных возможностей.", details: ["Базовый и средний уровни", "Коммуникация", "Лексика", "Чтение и аудирование"] },
  { key: "Китайский", title: "Китайский язык", price: "от 280 сомон", description: "Курс китайского языка с акцентом на базовую коммуникацию, лексику и развитие практических навыков.", details: ["Базовые иероглифы", "Разговорная практика", "Аудирование", "Постепенное развитие уровня"] },
  { key: "Корейский", title: "Корейский язык", price: "по набору группы", description: "Изучение корейского языка по современным материалам с развитием всех основных навыков.", details: ["Чтение", "Разговорная практика", "Словарь", "Современные материалы"] },
  { key: "Таджикский", title: "Таджикский язык", price: "по запросу", description: "Занятия по таджикскому языку для улучшения речевых и письменных навыков.", details: ["Письмо", "Чтение", "Грамматика", "Устная речь"] },
  { key: "IELTS", title: "IELTS", price: "курс подготовки", description: "Подготовка к IELTS с упором на speaking, writing, reading и listening.", details: ["Mock tests", "Writing practice", "Speaking feedback", "Reading & Listening strategies"] }
];

const subjectPrograms = [
  { key: "Математика", title: "Математика", price: "по запросу", description: "Системная подготовка по математике для школы, экзаменов и поступления.", details: ["Теория", "Задачи", "Подготовка к экзаменам"] },
  { key: "Физика", title: "Физика", price: "от 250 сомон", description: "Разбор теории, решение задач и подготовка к экзаменам по физике.", details: ["Теория", "Практика задач", "Экзамены"] },
  { key: "Химия", title: "Химия", price: "от 280 сомон", description: "Подготовка по химии для школьников и поступающих в вузы.", details: ["Базовая и углубленная химия", "Подготовка к экзаменам"] },
  { key: "Биология", title: "Биология", price: "от 280 сомон", description: "Академическая подготовка по биологии и поддержка успеваемости.", details: ["Теория", "Термины", "Подготовка к экзаменам"] },
  { key: "История", title: "История", price: "по запросу", description: "Подготовка по истории с системным объяснением тем и проверкой знаний.", details: ["Хронология", "Анализ тем", "Подготовка"] },
  { key: "Правоведение", title: "Правоведение", price: "по запросу", description: "Изучение основ правоведения и подготовка к экзаменам.", details: ["Правовые основы", "Подготовка к экзаменам"] }
];

const levelTests = {
  "Английский": [
    { q: "Выберите правильный вариант: I ___ from Tajikistan.", a: ["am", "is", "are"], correct: 0 },
    { q: "Какой вариант ближе по смыслу к уровню intermediate?", a: ["I can speak about everyday topics", "I know only alphabet", "I cannot introduce myself"], correct: 0 },
    { q: "Выберите корректное прошедшее время: Yesterday I ___ to school.", a: ["go", "went", "gone"], correct: 1 },
    { q: "Что лучше подходит для upper-intermediate?", a: ["understand simple words only", "write structured paragraphs", "cannot read short texts"], correct: 1 },
    { q: "Выберите правильный вопрос: ___ you like tea?", a: ["Do", "Does", "Did is"], correct: 0 }
  ],
  "Русский": [
    { q: "Выберите правильную форму: Я ___ в школу каждый день.", a: ["ходит", "хожу", "ходишь"], correct: 1 },
    { q: "Что ближе к среднему уровню?", a: ["могу вести простую беседу", "знаю только буквы", "не понимаю речь"], correct: 0 },
    { q: "Выберите правильный падеж: Я вижу ___ .", a: ["книга", "книгу", "книге"], correct: 1 },
    { q: "Какая фраза сложнее?", a: ["Меня зовут Али", "Я могу аргументированно выразить мнение", "Это стол"], correct: 1 },
    { q: "Выберите правильный вариант: Мы ___ дома.", a: ["был", "были", "было"], correct: 1 }
  ],
  "Немецкий": [
    { q: "Ich ___ Student.", a: ["bin", "ist", "seid"], correct: 0 },
    { q: "Ближе к A2/B1:", a: ["могу представиться", "могу рассказать о планах и повседневной жизни", "знаю несколько букв"], correct: 1 },
    { q: "Gestern ___ ich nach Hause gegangen.", a: ["bin", "ist", "habe"], correct: 0 },
    { q: "Выберите корректный артикль: ___ Buch", a: ["die", "das", "der"], correct: 1 },
    { q: "Какая задача сложнее?", a: ["сказать имя", "описать опыт и мнение", "прочитать одну букву"], correct: 1 }
  ]
};

function initials(name){return name.split(" ").filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase();}
function escapeHtml(str){return String(str ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");}
async function api(url, options={}){const res=await fetch(url, options); if(!res.ok) throw new Error(await res.text()); return await res.json();}

async function loadData(){
  state.settings = await api("/api/settings");
  state.applications = await api("/api/applications");
  state.reviews = await api("/api/reviews");
  state.allReviews = await api("/api/reviews?all=1");
  render();
}

function setPage(page){state.page=page; render();}
function sectionTitle(badge,title,text,dark=false){
  return `<div class="section-title"><div class="badge"${dark?` style="background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.1);color:#fff"`:""}>${badge}</div><h2>${title}</h2><p${dark?` style="color:#cbd5e1"`:""}>${text}</p></div>`;
}

function heroHtml(){
  const s = state.settings;
  return `
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="badge">Полная серверная версия</div>
        <h1>${escapeHtml(s.centerName)} — ${escapeHtml(s.heroTitle)}</h1>
        <div class="slogan-en">${escapeHtml(s.sloganEn)}</div>
        <div class="slogan-ru">${escapeHtml(s.sloganRu)}</div>
        <div class="lead">${escapeHtml(s.heroText)}</div>
        <div class="actions">
          <button class="btn primary" onclick="setPage('level-test')">Определить уровень</button>
          <button class="btn" onclick="setPage('programs')">Открыть программы</button>
        </div>
        <div class="stats">
          <div class="card pad"><strong>4</strong><div class="small">филиала</div></div>
          <div class="card pad"><strong>11+</strong><div class="small">направлений</div></div>
          <div class="card pad"><strong>15+</strong><div class="small">преподавателей</div></div>
          <div class="card pad"><strong>от 220 сомон</strong><div class="small">стоимость</div></div>
        </div>
      </div>
      <div class="card pad">
        <div class="panel-dark">
          <p>Что добавлено</p>
          <h3 style="margin:10px 0 0;font-size:30px">Новые рабочие каталоги</h3>
          <div class="panel-grid">
            <div class="mini-pill">Тест уровня</div>
            <div class="mini-pill">Отзывы</div>
            <div class="mini-pill">Открываемые программы</div>
            <div class="mini-pill">Серверная форма</div>
          </div>
        </div>
        <div class="stack" style="margin-top:14px">
          <div class="notice">Тест уровня работает по выбранному языку.</div>
          <div class="notice">Отзывы сохраняются на сервере и требуют выбора Google/Yandex.</div>
          <div class="notice">Каталог программ открывается и показывает преподавателей направления.</div>
          <div class="notice">Заявки сохраняются на сервере в applications.json.</div>
        </div>
      </div>
    </div>
  </section>`;
}

function aboutHtml(){
  return `<section class="section">
    <div class="container">
      ${sectionTitle("О центре","Образовательный центр FLEPP имени профессора Фузайлова","Мы открываем двери к знаниям, языкам и будущему. Центр основан в 2016 году и объединяет филиалы в Бустоне, Унчи, Конибодоме и Овчикалаче.")}
      <div class="grid-2" style="margin-top:32px">
        <div class="card pad">
          <h3 style="margin:0">История и развитие</h3>
          <p class="lead" style="font-size:16px">FLEPP — современный центр обучения для детей, подростков и взрослых. За годы работы центр стал местом, где тысячи студентов сделали первые шаги к международному образованию, профессиональному росту и новым возможностям.</p>
          <div class="chips">
            <span class="chip">Основан в 2016 году</span>
            <span class="chip">4 филиала</span>
            <span class="chip">Языки и дисциплины</span>
            <span class="chip">Современная методика</span>
          </div>
        </div>
        <div class="card pad" style="background:#f8fafc">
          <h3 style="margin:0">Наша миссия</h3>
          <div class="stack" style="margin-top:16px">
            <div class="notice">повысить уровень языковой грамотности</div>
            <div class="notice">развивать академические знания учащихся</div>
            <div class="notice">формировать уверенность и лидерские качества</div>
            <div class="notice">готовить к международным стандартам</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function programsHtml(){
  const list = state.selectedProgramCategory === "languages" ? languagePrograms : subjectPrograms;
  const selected = list.find(x => x.key === state.selectedProgramKey) || list[0];
  const relatedTeachers = teachers.filter(t => t.directions.includes(selected.key));
  return `<section class="section soft">
    <div class="container">
      ${sectionTitle("Программы","Каталог программ теперь открывается","Можно переключаться между языками и предметами, открывать информацию о курсе и просматривать преподавателей направления.")}
      <div class="actions" style="margin-top:24px">
        <button class="btn ${state.selectedProgramCategory==='languages'?'dark':''}" onclick="switchProgramCategory('languages')">Языки</button>
        <button class="btn ${state.selectedProgramCategory==='subjects'?'dark':''}" onclick="switchProgramCategory('subjects')">Предметы</button>
      </div>
      <div class="grid-2" style="margin-top:32px;grid-template-columns:0.9fr 1.1fr">
        <div class="card pad">
          <h3 style="margin:0">Каталог направлений</h3>
          <div class="stack" style="margin-top:16px">
            ${list.map(item => `<button class="program-list-btn ${selected.key===item.key?'active':''}" onclick="selectProgram('${escapeHtml(item.key)}')"><div style="font-weight:700">${escapeHtml(item.title)}</div><div class="small"${selected.key===item.key?' style="color:#cbd5e1"':''}>${escapeHtml(item.price)}</div></button>`).join("")}
          </div>
        </div>
        <div class="card pad">
          <div style="display:flex;justify-content:space-between;gap:14px;align-items:start">
            <div>
              <h3 style="margin:0;font-size:30px">${escapeHtml(selected.title)}</h3>
              <p class="lead" style="font-size:16px">${escapeHtml(selected.description)}</p>
            </div>
            <span class="chip">${escapeHtml(selected.price)}</span>
          </div>
          <div class="grid-2" style="margin-top:18px">
            ${(selected.details||[]).map(d => `<div class="notice">${escapeHtml(d)}</div>`).join("")}
          </div>
          <div style="margin-top:22px">
            <h4 style="margin:0 0 12px">Преподаватели направления</h4>
            <div class="stack">
              ${relatedTeachers.length ? relatedTeachers.map(t => `<div class="notice"><strong>${escapeHtml(t.name)}</strong><br><span class="small">${escapeHtml(t.role)}</span></div>`).join("") : `<div class="notice">Для этого направления преподаватели пока не привязаны отдельно, но программа отображается корректно.</div>`}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function levelTestHtml(){
  const langs = Object.keys(levelTests);
  const questions = levelTests[state.testLanguage];
  const score = questions.reduce((acc, q, i) => acc + (state.testAnswers[i] === q.correct ? 1 : 0), 0);
  let result = "";
  if (state.testSubmitted) {
    if (score <= 1) result = "Предварительно: Beginner / A1";
    else if (score <= 3) result = "Предварительно: Elementary / A2";
    else if (score === 4) result = "Предварительно: Pre-Intermediate / B1";
    else result = "Предварительно: Intermediate и выше";
  }
  return `<section class="section">
    <div class="container">
      ${sectionTitle("Тест уровня","Определение уровня для нового посетителя","Этот каталог помогает человеку, который впервые зашел на сайт, пройти короткий тест и получить ориентировочный уровень по выбранному языку.")}
      <div class="actions" style="margin-top:24px">${langs.map(l => `<button class="btn ${state.testLanguage===l?'dark':''}" onclick="selectTestLanguage('${escapeHtml(l)}')">${escapeHtml(l)}</button>`).join("")}</div>
      <div class="card pad" style="margin-top:24px">
        <h3 style="margin:0">Тест по языку: ${escapeHtml(state.testLanguage)}</h3>
        <div class="stack" style="margin-top:18px">
          ${questions.map((q, qi) => `
            <div class="notice">
              <div style="font-weight:700">${qi+1}. ${escapeHtml(q.q)}</div>
              <div class="stack" style="margin-top:12px">
                ${q.a.map((option, oi) => `<button class="program-list-btn ${state.testAnswers[qi]===oi?'active':''}" onclick="chooseAnswer(${qi},${oi})">${escapeHtml(option)}</button>`).join("")}
              </div>
            </div>`).join("")}
        </div>
        <div class="actions" style="margin-top:20px">
          <button class="btn primary" onclick="submitTest()">Показать результат</button>
          <button class="btn" onclick="resetTest()">Сбросить</button>
        </div>
        ${state.testSubmitted ? `<div class="notice" style="margin-top:18px"><strong>${escapeHtml(result)}</strong><br><span class="small">Это предварительная оценка. Для точного распределения в группу администратор или преподаватель может провести дополнительное собеседование.</span></div>` : ``}
      </div>
    </div>
  </section>`;
}

function reviewsHtml(){
  return `<section class="section">
    <div class="container">
      ${sectionTitle("Отзывы","Отзывы с обязательной авторизацией","Оставить отзыв можно только после выбора авторизации через Google или Yandex. В этой версии backend принимает отзывы и сохраняет провайдера.")}
      <div class="grid-2" style="margin-top:32px;grid-template-columns:0.9fr 1.1fr">
        <div class="card pad">
          <h3 style="margin:0">Оставить отзыв</h3>
          <p class="small" style="margin-top:10px">Для продакшна нужно подключить реальный OAuth Google / Yandex. Сейчас включена серверная логика с обязательным выбором провайдера.</p>
          <div class="actions" style="margin-top:16px">
            <button class="btn ${state.reviewProvider==='Google'?'dark':''}" onclick="chooseProvider('Google')">Google</button>
            <button class="btn ${state.reviewProvider==='Yandex'?'dark':''}" onclick="chooseProvider('Yandex')">Yandex</button>
          </div>
          <form class="stack" style="margin-top:16px" onsubmit="submitReview(event)">
            <input class="input" name="author" placeholder="Ваше имя" required>
            <select class="select" name="rating">
              <option value="5">5</option><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option>
            </select>
            <textarea class="textarea" name="text" placeholder="Ваш отзыв" required></textarea>
            <button class="btn primary" type="submit">Оставить отзыв</button>
          </form>
          <div id="reviewMessage" class="small" style="margin-top:12px"></div>
        </div>
        <div class="stack">
          ${state.reviews.map(r => `
            <div class="card pad">
              <div style="display:flex;justify-content:space-between;gap:12px;align-items:start">
                <div><strong>${escapeHtml(r.author)}</strong><div class="small">через ${escapeHtml(r.provider)}</div></div>
                <div class="rating">${Array.from({length:Number(r.rating)}).map(()=>`<span class="star">★</span>`).join("")}</div>
              </div>
              <p class="lead" style="font-size:16px">${escapeHtml(r.text)}</p>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function teamHtml(){
  return `<section class="section">
    <div class="container">
      ${sectionTitle("Команда","Руководство и преподаватели","Карточки преподавателей открываются. Здесь можно посмотреть базовую информацию о сотруднике.")}
      <div class="grid-3" style="margin-top:32px">
        ${teachers.map((t,i)=>`
          <div class="card pad">
            <div class="teacher-row">
              <div class="teacher-fallback">${escapeHtml(initials(t.name))}</div>
              <div><h3 style="margin:0;font-size:20px">${escapeHtml(t.name)}</h3><div class="small" style="margin-top:8px">${escapeHtml(t.role)}</div></div>
            </div>
            <button class="btn" style="width:100%;margin-top:18px" onclick="openTeacher(${i})">Открыть карточку</button>
          </div>`).join("")}
      </div>
    </div>
  </section>`;
}

function contactsHtml(){
  const s = state.settings;
  const whatsappHref = `https://wa.me/${(s.whatsapp || "").replace(/[^\d]/g, "")}`;
  return `<section class="section">
    <div class="container">
      ${sectionTitle("Контакты","Связь и заявка","Форма заявки подключена к серверу. После отправки заявка сохраняется в applications.json и видна в админ-панели.")}
      <div class="grid-2" style="margin-top:32px">
        <div class="card pad">
          <h3 style="margin:0">Контакты центра</h3>
          <div class="stack" style="margin-top:16px">
            <div class="notice">Телефон директора: ${escapeHtml(s.directorPhone)}</div>
            <div class="notice">WhatsApp: <a href="${escapeHtml(whatsappHref)}" target="_blank">${escapeHtml(s.whatsapp)}</a></div>
            <div class="notice">Telegram: <a href="${escapeHtml(s.telegram)}" target="_blank">Перейти</a></div>
            <div class="notice">Instagram: <a href="${escapeHtml(s.instagram)}" target="_blank">Перейти</a></div>
            <div class="notice">График: ${escapeHtml(s.workTime)}</div>
          </div>
        </div>
        <div class="card pad">
          <h3 style="margin:0">Оставить заявку</h3>
          <form class="stack" style="margin-top:16px" onsubmit="submitApplication(event)">
            <input class="input" name="name" placeholder="Ваше имя" required>
            <input class="input" name="phone" placeholder="Телефон" required>
            <input class="input" name="course" placeholder="Интересующий курс">
            <input class="input" name="branch" placeholder="Филиал">
            <textarea class="textarea" name="note" placeholder="Комментарий"></textarea>
            <button class="btn primary" type="submit">Отправить заявку</button>
          </form>
          <div id="formMessage" class="small" style="margin-top:12px"></div>
        </div>
      </div>
    </div>
  </section>`;
}

function adminHtml(){
  if (!state.adminAuthorized) {
    return `<section class="section"><div class="container" style="max-width:560px"><div class="card pad"><h2 style="margin:0">Вход в админ-панель</h2><p class="lead" style="font-size:16px">Здесь можно менять настройки сайта, просматривать заявки и модерировать отзывы.</p><div class="stack" style="margin-top:16px"><input id="adminPin" class="input" placeholder="Введите PIN"><button class="btn primary" onclick="adminLogin()">Войти</button></div><div id="adminLoginMessage" class="small" style="margin-top:12px">Стартовый PIN: 1234</div></div></div></section>`;
  }
  const s = state.settings;
  return `<section class="section">
    <div class="container">
      ${sectionTitle("Админ","Управление сайтом и заявками","Здесь можно менять настройки сайта, просматривать заявки и модерировать отзывы.")}
      <div class="grid-2" style="margin-top:32px">
        <div class="card pad">
          <h3 style="margin:0">Настройки сайта</h3>
          <div class="stack" style="margin-top:16px">
            <input id="setCenterName" class="input" value="${escapeHtml(s.centerName)}" placeholder="Название центра">
            <input id="setHeroTitle" class="input" value="${escapeHtml(s.heroTitle)}" placeholder="Главный заголовок">
            <textarea id="setHeroText" class="textarea" placeholder="Главный текст">${escapeHtml(s.heroText)}</textarea>
            <input id="setSloganEn" class="input" value="${escapeHtml(s.sloganEn)}" placeholder="Слоган EN">
            <input id="setSloganRu" class="input" value="${escapeHtml(s.sloganRu)}" placeholder="Слоган RU">
            <input id="setDirectorPhone" class="input" value="${escapeHtml(s.directorPhone)}" placeholder="Телефон директора">
            <input id="setWhatsapp" class="input" value="${escapeHtml(s.whatsapp)}" placeholder="WhatsApp">
            <input id="setTelegram" class="input" value="${escapeHtml(s.telegram)}" placeholder="Telegram">
            <input id="setInstagram" class="input" value="${escapeHtml(s.instagram)}" placeholder="Instagram">
            <input id="setWorkTime" class="input" value="${escapeHtml(s.workTime)}" placeholder="Время работы">
            <input id="setAdminPin" class="input" value="${escapeHtml(s.adminPin)}" placeholder="PIN">
            <button class="btn primary" onclick="saveSettings()">Сохранить настройки</button>
            <div id="settingsMessage" class="small"></div>
          </div>
        </div>
        <div class="stack">
          <div class="card pad">
            <h3 style="margin:0">Заявки</h3>
            <div class="stack" style="margin-top:16px">
              ${state.applications.length ? state.applications.map(app => `<div class="notice"><strong>${escapeHtml(app.name)}</strong><br>${escapeHtml(app.phone)}<br>Курс: ${escapeHtml(app.course || "не указан")}<br>Филиал: ${escapeHtml(app.branch || "не указан")}<br>Комментарий: ${escapeHtml(app.note || "нет")}<br><span class="small">${escapeHtml(app.createdAt)}</span><br><button class="btn" style="margin-top:8px" onclick="deleteApplication('${escapeHtml(app.id)}')">Удалить</button></div>`).join("") : `<div class="notice">Пока заявок нет.</div>`}
            </div>
          </div>
          <div class="card pad">
            <h3 style="margin:0">Отзывы на модерации</h3>
            <div class="stack" style="margin-top:16px">
              ${state.allReviews.filter(r => !r.approved).length ? state.allReviews.filter(r => !r.approved).map(r => `<div class="notice"><strong>${escapeHtml(r.author)}</strong><br><span class="small">через ${escapeHtml(r.provider)}</span><br>${escapeHtml(r.text)}<br><div class="actions" style="margin-top:8px"><button class="btn primary" onclick="approveReview('${escapeHtml(r.id)}')">Одобрить</button><button class="btn" onclick="deleteReview('${escapeHtml(r.id)}')">Удалить</button></div></div>`).join("") : `<div class="notice">Нет новых отзывов на модерации.</div>`}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function teacherModalHtml(){
  if (state.selectedTeacher === null) return "";
  const t = teachers[state.selectedTeacher];
  return `<div class="modal" onclick="closeTeacher(event)"><div class="modal-card" onclick="event.stopPropagation()"><div style="display:flex;justify-content:space-between;gap:16px;align-items:start"><div class="teacher-row"><div class="teacher-fallback">${escapeHtml(initials(t.name))}</div><div><h3 style="margin:0">${escapeHtml(t.name)}</h3><div class="small" style="margin-top:8px">${escapeHtml(t.role)}</div></div></div><button class="btn" onclick="state.selectedTeacher=null;render()">Закрыть</button></div><div class="notice" style="margin-top:18px">Подробная карточка преподавателя. Здесь можно позже добавить достижения, стаж, график и сертификаты.</div></div></div>`;
}

function footerHtml(){
  const s = state.settings;
  return `<footer class="footer"><div class="container grid-2"><div><div class="brand"><div class="logo">F</div><div><div style="font-weight:700">FLEPP</div><div class="small">имени профессора Фузайлова</div></div></div><p class="small" style="margin-top:14px">Полная серверная версия: тест уровня, отзывы с модерацией, открываемые программы и серверная форма.</p></div><div class="stack"><div class="notice">Телефон директора: ${escapeHtml(s.directorPhone)}</div><div class="notice">Время работы: ${escapeHtml(s.workTime)}</div></div></div></footer>`;
}

function layout(content){
  return `<header class="topbar"><div class="container nav"><div class="brand"><div class="logo">F</div><div><div style="font-weight:700">FLEPP</div><div class="small">имени профессора Фузайлова</div></div></div><nav class="menu">${[
    ["home","Главная"],["programs","Программы"],["level-test","Тест уровня"],["reviews","Отзывы"],["team","Команда"],["contacts","Контакты"],["admin","Админ"]
  ].map(([k,l]) => `<button class="${state.page===k?'active':''}" onclick="setPage('${k}')">${l}</button>`).join("")}</nav></div></header>${content}${footerHtml()}${teacherModalHtml()}`;
}

function render(){
  if (!state.settings) return;
  let content = "";
  if (state.page === "home") content = heroHtml() + aboutHtml();
  if (state.page === "programs") content = programsHtml();
  if (state.page === "level-test") content = levelTestHtml();
  if (state.page === "reviews") content = reviewsHtml();
  if (state.page === "team") content = teamHtml();
  if (state.page === "contacts") content = contactsHtml();
  if (state.page === "admin") content = adminHtml();
  document.getElementById("app").innerHTML = layout(content);
}

function switchProgramCategory(category){
  state.selectedProgramCategory = category;
  state.selectedProgramKey = category === "languages" ? languagePrograms[0].key : subjectPrograms[0].key;
  render();
}
function selectProgram(key){ state.selectedProgramKey = key; render(); }
function selectTestLanguage(lang){ state.testLanguage = lang; state.testAnswers={}; state.testSubmitted=false; render(); }
function chooseAnswer(qi, oi){ state.testAnswers[qi] = oi; render(); }
function submitTest(){ state.testSubmitted = true; render(); }
function resetTest(){ state.testAnswers = {}; state.testSubmitted = false; render(); }

async function submitApplication(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd.entries());
  const msg = document.getElementById("formMessage");
  msg.textContent = "Отправка...";
  try {
    await api("/api/applications", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
    state.applications = await api("/api/applications");
    msg.textContent = "Заявка сохранена на сервере.";
    e.target.reset();
  } catch {
    msg.textContent = "Ошибка отправки заявки.";
  }
}

function chooseProvider(provider){
  state.reviewProvider = provider;
  render();
  const msg = document.getElementById("reviewMessage");
  if (msg) msg.textContent = `Выбран провайдер: ${provider}. Для продакшна нужен реальный OAuth Google/Yandex.`;
}

async function submitReview(e){
  e.preventDefault();
  const msg = document.getElementById("reviewMessage");
  if (!state.reviewProvider) {
    msg.textContent = "Сначала выберите Google или Yandex.";
    return;
  }
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd.entries());
  payload.provider = state.reviewProvider;
  msg.textContent = "Отправка...";
  try {
    await api("/api/reviews", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
    state.reviews = await api("/api/reviews");
    state.allReviews = await api("/api/reviews?all=1");
    msg.textContent = "Отзыв отправлен. После модерации он появится в общем списке.";
    e.target.reset();
  } catch {
    msg.textContent = "Ошибка отправки отзыва.";
  }
}

function adminLogin(){
  const pin = document.getElementById("adminPin").value;
  const msg = document.getElementById("adminLoginMessage");
  if (pin === state.settings.adminPin) {
    state.adminAuthorized = true;
    render();
  } else msg.textContent = "Неверный PIN.";
}

async function saveSettings(){
  const payload = {
    centerName: document.getElementById("setCenterName").value,
    heroTitle: document.getElementById("setHeroTitle").value,
    heroText: document.getElementById("setHeroText").value,
    sloganEn: document.getElementById("setSloganEn").value,
    sloganRu: document.getElementById("setSloganRu").value,
    directorPhone: document.getElementById("setDirectorPhone").value,
    whatsapp: document.getElementById("setWhatsapp").value,
    telegram: document.getElementById("setTelegram").value,
    instagram: document.getElementById("setInstagram").value,
    workTime: document.getElementById("setWorkTime").value,
    adminPin: document.getElementById("setAdminPin").value
  };
  await api("/api/settings", { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
  state.settings = await api("/api/settings");
  document.getElementById("settingsMessage").textContent = "Настройки сохранены.";
}

async function deleteApplication(id){
  await api(`/api/applications/${id}`, { method:"DELETE" });
  state.applications = await api("/api/applications");
  render();
}
async function approveReview(id){
  await api(`/api/reviews/${id}/approve`, { method:"PUT" });
  state.reviews = await api("/api/reviews");
  state.allReviews = await api("/api/reviews?all=1");
  render();
}
async function deleteReview(id){
  await api(`/api/reviews/${id}`, { method:"DELETE" });
  state.reviews = await api("/api/reviews");
  state.allReviews = await api("/api/reviews?all=1");
  render();
}
function openTeacher(i){ state.selectedTeacher = i; render(); }
function closeTeacher(e){ if (e.target.classList.contains("modal")) { state.selectedTeacher = null; render(); } }

window.setPage = setPage;
window.switchProgramCategory = switchProgramCategory;
window.selectProgram = selectProgram;
window.selectTestLanguage = selectTestLanguage;
window.chooseAnswer = chooseAnswer;
window.submitTest = submitTest;
window.resetTest = resetTest;
window.submitApplication = submitApplication;
window.chooseProvider = chooseProvider;
window.submitReview = submitReview;
window.adminLogin = adminLogin;
window.saveSettings = saveSettings;
window.deleteApplication = deleteApplication;
window.approveReview = approveReview;
window.deleteReview = deleteReview;
window.openTeacher = openTeacher;
window.closeTeacher = closeTeacher;

loadData();
