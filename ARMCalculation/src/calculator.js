const knownItems = require("./database");
const { equivalents, comments, randomIdeas } = require("./equivalents");

function findKnownItem(text) {
  const lower = text.toLowerCase();
  for (const item of knownItems) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return { price: item.price, label: item.label };
    }
  }
  return null;
}

function estimateUnknown(text) {
  const lower = text.toLowerCase();
  let base = 10_000_000;

  const bigWords = [
    "галактика", "вселенная", "планета", "мир", "весь", "всю", "всё",
    "империя", "мировой", "global", "infinite", "бесконечн", "galaxy",
    "universe", "everything", "солнечная система",
  ];
  const actionWords = [
    "построить", "создать", "организовать", "открыть", "захватить",
    "запустить", "купить", "приобрести", "buy", "build", "create",
  ];
  const smallWords = [
    "один", "одну", "маленький", "маленькую", "small", "mini", "micro", "simple",
  ];

  for (const w of bigWords) if (lower.includes(w)) base *= 1_000_000;
  for (const w of actionWords) if (lower.includes(w)) base *= 500;
  for (const w of smallWords) if (lower.includes(w)) base /= 100;

  const randomFactor = 0.7 + Math.random() * 0.8;
  return Math.round(base * randomFactor);
}

function formatAMD(n) {
  if (n < 1_000) return `${n} ֏`;
  if (n < 1_000_000) return `${(n / 1_000).toFixed(1).replace(".0", "")} тыс. ֏`;
  if (n < 1_000_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")} млн ֏`;
  if (n < 1_000_000_000_000) return `${(n / 1_000_000_000).toFixed(1).replace(".0", "")} млрд ֏`;
  if (n < 1e15) return `${(n / 1e12).toFixed(1).replace(".0", "")} трлн ֏`;
  if (n < 1e18) return `${(n / 1e15).toFixed(1).replace(".0", "")} квадрлн ֏`;
  if (n < 1e21) return `${(n / 1e18).toFixed(1).replace(".0", "")} квинтлн ֏`;
  return `${n.toExponential(2).replace("e+", "×10^")} ֏`;
}

function formatCount(n) {
  if (n >= 1e18) return `${n.toExponential(1).replace("e+", "×10^")}`;
  if (n >= 1e12) return `${Math.round(n / 1e12)} трлн`;
  if (n >= 1e9) return `${Math.round(n / 1e9)} млрд`;
  if (n >= 1e6) return `${Math.round(n / 1e6)} млн`;
  if (n >= 1000) return `${Math.round(n / 1000)} тыс.`;
  return `${Math.round(n)}`;
}

function getEquivalents(price) {
  const shuffled = [...equivalents].sort(() => Math.random() - 0.5);
  return shuffled
    .filter((eq) => price / eq.price >= 1)
    .slice(0, 3)
    .map((eq) => `${formatCount(price / eq.price)} ${eq.name}`);
}

function randomComment() {
  return comments[Math.floor(Math.random() * comments.length)];
}

function calculate(item) {
  const known = findKnownItem(item);
  const price = known ? known.price : estimateUnknown(item);
  const label = known ? known.label : item;

  return {
    title: label,
    priceAMD: formatAMD(price),
    priceRaw: price,
    equivalents: getEquivalents(price),
    comment: randomComment(),
  };
}

function getRandomIdea() {
  return randomIdeas[Math.floor(Math.random() * randomIdeas.length)];
}

module.exports = { calculate, getRandomIdea };
