const DB = [
  { k: ["ferrari"], label: "FERRARI SPA", price: 180e6 },
  { k: ["lamborghini"], label: "AUTOMOBILI LAMBORGHINI", price: 220e6 },
  { k: ["porsche"], label: "PORSCHE AG", price: 130e6 },
  { k: ["tesla"], label: "TESLA INC", price: 90e6 },
  { k: ["iphone"], label: "APPLE IPHONE", price: 500e3 },
  { k: ["macbook"], label: "APPLE MACBOOK PRO", price: 700e3 },
  { k: ["tiktok", "тикток"], label: "BYTEDANCE / TIKTOK", price: 32e12 },
  { k: ["instagram"], label: "META / INSTAGRAM", price: 80e12 },
  { k: ["facebook", "meta"], label: "META PLATFORMS INC", price: 1.4e15 },
  { k: ["google", "гугл"], label: "ALPHABET INC", price: 2.1e15 },
  { k: ["microsoft"], label: "MICROSOFT CORP", price: 3e15 },
  { k: ["apple", "эппл"], label: "APPLE INC", price: 3.5e15 },
  { k: ["луна", "moon"], label: "LUNA ASSET (NATURAL)", price: 1.75e20 },
  { k: ["марс", "mars"], label: "MARS PLANETARY CORP", price: 8e23 },
  { k: ["земля", "earth"], label: "EARTH (INCL. OCEANS)", price: 5e30 },
  { k: ["звезда смерти", "death star"], label: "DEATH STAR LLC", price: 1.3e22 },
  { k: ["интернет", "internet"], label: "GLOBAL INTERNET BUNDLE", price: 1.5e21 },
  { k: ["арарат", "ararat"], label: "MT ARARAT HOLDINGS", price: 2e17 },
  { k: ["ереван", "yerevan"], label: "YEREVAN CITY ASSET", price: 8e12 },
  { k: ["юрский", "jurassic"], label: "JURASSIC PARK THEME", price: 8e15 },
  { k: ["ракета", "rocket", "spacex"], label: "SPACEX ROCKET", price: 80e9 },
  { k: ["яхта", "yacht"], label: "SUPERYACHT VESSEL", price: 15e9 },
  { k: ["концерт", "concert"], label: "WORLD ARTIST CONCERT", price: 3e9 },
  { k: ["биткоин", "bitcoin", "btc"], label: "BITCOIN (1 UNIT)", price: 32e6 },
  { k: ["свадьба", "wedding"], label: "ARMENIAN WEDDING FUND", price: 5e6 },
  { k: ["квартира", "apartment"], label: "YEREVAN APARTMENT", price: 60e6 },
  { k: ["хаш", "kash"], label: "KASH BOWL (PREMIUM)", price: 6e3 },
  { k: ["шаурма", "shawarma"], label: "SHAWARMA UNIT", price: 2500 },
  { k: ["кофе", "coffee"], label: "COFFEE BEVERAGE", price: 1500 },
  { k: ["лаваш", "lavash"], label: "LAVASH BREAD", price: 300 },
];

const EQUIVS = [
  { name: "COFFEE / AMD", unit: "чашек кофе", price: 1500 },
  { name: "SHAWARMA / AMD", unit: "шаурм", price: 2500 },
  { name: "KASH / AMD", unit: "порций хаша", price: 6000 },
  { name: "LAVASH / AMD", unit: "лавашей", price: 300 },
  { name: "TAXI / AMD", unit: "поездок на такси", price: 1500 },
  { name: "RENT / AMD", unit: "месяцев аренды", price: 250000 },
  { name: "WEDDING / AMD", unit: "армянских свадеб", price: 5000000 },
  { name: "APT / AMD", unit: "квартир в Ереване", price: 60000000 },
];

const COMMENTS = [
  "Наши аналитики рекомендуют начать с хаша и вернуться к этому вопросу позже.",
  "Модель показывает положительный ROI. Через 4 000 000 лет.",
  "Ликвидность актива вызывает вопросы. Армянские бабушки настроены скептически.",
  "Риск-профиль: ЭКСТРЕМАЛЬНЫЙ. Рекомендуем диверсификацию в лаваш.",
  "Теоретически возможно. Практически — позвони маме.",
  "Фундаментальный анализ показывает: денег нет, но вы держитесь.",
  "Консенсус-прогноз аналитиков: «Ара, это серьёзно?»",
  "Оценка основана на методе дисконтирования денежных потоков из хаш-ресторана.",
  "По нашим данным, ВВП Армении не готов к подобной транзакции.",
  "Desk Research: подобная сделка не была закрыта ни разу в истории Еревана.",
];

const RANDOMS = [
  "Buy the Moon", "Build Death Star", "Organize dinosaur concert",
  "Buy all internet", "Open shawarma chain in orbit", "Build second Ararat",
  "Armenian wedding on ISS", "Buy Tesla with lavash",
  "Colonize Mars with kash restaurants", "Purchase NASDAQ",
  "Build metro to Jupiter", "Acquire entire Armenia",
];

const MARKET = [
  { sym: "KASH/AMD", price: "6,000", chg: "+2.3%", up: true },
  { sym: "LAVASH/AMD", price: "300", chg: "-0.5%", up: false },
  { sym: "WEDDING/AMD", price: "5.0M", chg: "+12.1%", up: true },
  { sym: "SHAWARMA/AMD", price: "2,500", chg: "+0.8%", up: true },
  { sym: "APT-YER/AMD", price: "60.0M", chg: "+4.2%", up: true },
  { sym: "TAXI/AMD", price: "1,500", chg: "0.0%", up: true },
  { sym: "COFFEE/AMD", price: "1,500", chg: "+1.1%", up: true },
];

const TICKERS = [
  { sym: "KASH", val: "6,000 ֏", chg: "+2.3%", up: true },
  { sym: "SHAWARMA", val: "2,500 ֏", chg: "+0.8%", up: true },
  { sym: "LAVASH", val: "300 ֏", chg: "-0.5%", up: false },
  { sym: "WEDDING", val: "5.0M ֏", chg: "+12.1%", up: true },
  { sym: "ARARAT", val: "2×10^17 ֏", chg: "+0.0%", up: true },
  { sym: "TIKTOK", val: "32T ֏", chg: "-3.1%", up: false },
  { sym: "MOON", val: "1.75×10^20 ֏", chg: "+0.2%", up: true },
  { sym: "COFFEE", val: "1,500 ֏", chg: "+1.1%", up: true },
  { sym: "TAXI-YER", val: "1,500 ֏", chg: "0.0%", up: true },
  { sym: "FERRARI", val: "180M ֏", chg: "-1.4%", up: false },
];

let history = [];

// ── Ticker ──
function buildTicker() {
  const items = [...TICKERS, ...TICKERS]
    .map(i => `
      <span class="ticker-item">
        <span class="ticker-sym">${i.sym}</span>
        <span class="ticker-val">${i.val}</span>
        <span class="ticker-chg ${i.up ? "" : "down"}">${i.chg}</span>
      </span>·`)
    .join("");
  document.getElementById("ticker").innerHTML = items;
}

// ── Market data ──
function buildMarket() {
  document.getElementById("market-data").innerHTML = MARKET
    .map(m => `
      <div class="market-row">
        <span class="market-sym">${m.sym}</span>
        <span class="market-price">${m.price} ֏</span>
        <span class="market-chg ${m.up ? "" : "neg"}">${m.chg}</span>
      </div>`)
    .join("");
}

// ── Formatting ──
function fmtAMD(n) {
  if (n < 1e3) return `${Math.round(n)} ֏`;
  if (n < 1e6) return `${(n / 1e3).toFixed(1).replace(".0", "")}K ֏`;
  if (n < 1e9) return `${(n / 1e6).toFixed(2)}M ֏`;
  if (n < 1e12) return `${(n / 1e9).toFixed(2)}B ֏`;
  if (n < 1e15) return `${(n / 1e12).toFixed(2)}T ֏`;
  if (n < 1e18) return `${(n / 1e15).toFixed(2)}Q ֏`;
  return `${n.toExponential(2).replace("e+", "×10^")} ֏`;
}

function fmtCount(n) {
  if (n >= 1e18) return n.toExponential(1).replace("e+", "×10^");
  if (n >= 1e12) return Math.round(n / 1e12) + " ТРЛН";
  if (n >= 1e9) return Math.round(n / 1e9) + " МЛД";
  if (n >= 1e6) return Math.round(n / 1e6) + " МЛН";
  if (n >= 1e3) return Math.round(n / 1e3) + " ТЫС";
  return Math.round(n).toLocaleString();
}

// ── Lookup ──
function lookup(text) {
  const l = text.toLowerCase();
  for (const it of DB) {
    if (it.k.some(k => l.includes(k))) return { price: it.price, label: it.label };
  }
  let base = 10e6;
  const big = ["галактика","вселенная","планета","мир","весь","всю","всё","galaxy","universe","everything","global","infinite","солнечная"];
  const act = ["построить","создать","организовать","открыть","захватить","запустить","купить","buy","build","create","acquire","purchase"];
  const small = ["один","маленький","small","mini","micro","single","one"];
  for (const w of big) if (l.includes(w)) base *= 1e6;
  for (const w of act) if (l.includes(w)) base *= 500;
  for (const w of small) if (l.includes(w)) base /= 100;
  return { price: Math.round(base * (0.7 + Math.random() * 0.8)), label: text.toUpperCase() };
}

// ── Calculate ──
function calculate() {
  const val = document.getElementById("input").value.trim();
  if (!val) return;

  const { price, label } = lookup(val);
  const usd = Math.round(price / 387.4);

  document.getElementById("res-title").textContent = label;
  document.getElementById("res-price").textContent = fmtAMD(price);
  document.getElementById("res-usd").textContent =
    `≈ USD ${usd >= 1e9 ? (usd / 1e9).toFixed(1) + "B" : usd >= 1e6 ? (usd / 1e6).toFixed(1) + "M" : usd.toLocaleString()} AT 387.4 RATE`;

  const shuffled = [...EQUIVS].sort(() => Math.random() - 0.5);
  const rows = shuffled
    .filter(e => price / e.price >= 1)
    .slice(0, 4)
    .map(e => `
      <div class="equiv-row">
        <span class="equiv-name">${e.name}</span>
        <span class="equiv-val">${fmtCount(price / e.price)} ${e.unit}</span>
      </div>`)
    .join("");

  document.getElementById("res-equivs").innerHTML = rows ||
    '<div style="font-family:var(--mono);font-size:11px;color:var(--muted);padding:8px 0">BELOW MINIMUM THRESHOLD</div>';

  document.getElementById("res-comment").textContent =
    COMMENTS[Math.floor(Math.random() * COMMENTS.length)];

  const r = document.getElementById("result");
  r.style.opacity = "0";
  setTimeout(() => { r.classList.add("visible"); r.style.opacity = "1"; }, 50);

  history.unshift({ label, price });
  if (history.length > 6) history.pop();
  renderHistory();
}

function randomIdea() {
  document.getElementById("input").value = RANDOMS[Math.floor(Math.random() * RANDOMS.length)];
  calculate();
}

// ── History ──
function renderHistory() {
  const el = document.getElementById("history");
  if (!history.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-text">NO RECENT VALUATIONS<br>SUBMIT A QUERY<br>TO BEGIN</div></div>';
    return;
  }
  el.innerHTML = history
    .map((h, i) => `
      <div class="history-item" onclick="rerun(${i})">
        <div class="h-name">${h.label}</div>
        <div class="h-price">${fmtAMD(h.price)}</div>
      </div>`)
    .join("");
}

function rerun(i) {
  document.getElementById("input").value = history[i].label;
  calculate();
}

// ── Clock ──
function updateClock() {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString("en-GB") + " | YER";
}

// ── Init ──
buildTicker();
buildMarket();
renderHistory();
updateClock();
setInterval(updateClock, 1000);
