const IDEAS = {
  "make": [
    "Make something that makes you smile.",
    "Create with your hands and your heart.",
    "Every masterpiece begins with one idea.",
    "Make today a little more colorful.",
    "Creativity grows when you use it.",
    "Turn simple ideas into something amazing.",
    "What you make reflects who you are.",
    "Start creating, stop waiting.",
    "Every creation tells a story.",
    "Make memories, not excuses."
  ],
  "write": [
    "Write what your heart cannot say.",
    "Every great story starts with one word.",
    "Your thoughts deserve to be written.",
    "Write today, inspire tomorrow.",
    "Words have the power to change lives.",
    "Fill the page with your imagination.",
    "Every sentence is a step forward.",
    "Write your own future.",
    "Let your ideas find a voice.",
    "A blank page is full of possibilities."
  ],
  "build": [
    "Build the future you dream about.",
    "Great things are built one step at a time.",
    "Strong foundations create lasting success.",
    "Build with patience and purpose.",
    "Every brick brings you closer.",
    "Build skills before seeking success.",
    "Dreams become real when you build them.",
    "Keep building, even when it's hard.",
    "Build something you'll be proud of.",
    "Success is built, not found."
  ],
  "cook": [
    "Cook with love, serve with joy.",
    "Great meals begin with simple ingredients.",
    "Every recipe tells a story.",
    "Happiness is homemade.",
    "A good meal brings people together.",
    "Cook with passion, not pressure.",
    "Flavor comes from creativity.",
    "Every dish is a chance to learn.",
    "Fresh ingredients make happy moments.",
    "The secret ingredient is always care."
  ],
  "start": [
    "Start before you're ready.",
    "Every journey begins with one step.",
    "Today is the perfect day to begin.",
    "A fresh start changes everything.",
    "Start small, dream big.",
    "Don't wait for the perfect moment.",
    "New beginnings create new opportunities.",
    "One decision can change your future.",
    "The hardest part is getting started.",
    "Start now and thank yourself later."
  ],
  "quotes": [
    "Every day is a fresh start.",
    "Dream big, stay humble.",
    "Success comes with patience.",
    "Stay focused on your goals.",
    "Your potential is limitless.",
    "Focus on what you can control.",
    "A positive mind creates positive results.",
    "Every ending is a new beginning.",
    "Be patient with your growth.",
    "Today is another chance to shine."
  ]
};

const CAT_LABELS = {
  make: 'something to make',
  write: 'something to write',
  build: 'something to build',
  cook: 'something to cook',
  start: 'something to start',
  quotes: 'a quote for today'
};

const CATS = Object.keys(IDEAS);
const bulbWrap = document.getElementById('bulbWrap');
const ideaText = document.getElementById('ideaText');
const cardLabel = document.getElementById('cardLabel');
const pullBtn = document.getElementById('pullBtn');
const countEl = document.getElementById('count');
const pullRing = document.getElementById('pullRing');
const cord = document.getElementById('cord');
const powerBtn = document.getElementById('powerBtn');

let sparkCount = Number(localStorage.getItem('sparkCount')) || 0;
let busy = false;
let powerOn = localStorage.getItem('powerOn') !== 'false';
let lastIdea = null;

if (sparkCount > 0) {
  countEl.textContent = sparkCount + (sparkCount === 1 ? ' spark' : ' sparks');
}

if (!powerOn) {
  bulbWrap.classList.add('off');
  ideaText.innerHTML = '<span class="empty-state">lights off, tap the bulb to switch it back on</span>';
  pullBtn.disabled = true;
}

function pickIdea() {
  let cat = CATS[Math.floor(Math.random() * CATS.length)];
  let idea = IDEAS[cat][Math.floor(Math.random() * IDEAS[cat].length)];

  // Avoid showing the exact same quote twice in a row when alternatives exist
  const totalIdeas = CATS.reduce((sum, c) => sum + IDEAS[c].length, 0);
  if (totalIdeas > 1) {
    let attempts = 0;
    while (idea === lastIdea && attempts < 10) {
      cat = CATS[Math.floor(Math.random() * CATS.length)];
      idea = IDEAS[cat][Math.floor(Math.random() * IDEAS[cat].length)];
      attempts += 1;
    }
  }

  lastIdea = idea;
  return { cat, idea };
}

function renderWords(text) {
  ideaText.innerHTML = '';
  const words = text.split(' ');
  words.forEach((w, i) => {
    const span = document.createElement('span');
    span.textContent = w + (i < words.length - 1 ? '\u00A0' : '');
    span.style.animationDelay = (i * 0.025) + 's';
    ideaText.appendChild(span);
  });
}

function pull() {
  if (busy || !powerOn) return;
  busy = true;
  pullBtn.disabled = true;

  bulbWrap.classList.remove('lit');
  bulbWrap.classList.add('charging');
  cardLabel.textContent = '';

  cord.classList.remove('tug');
  void cord.offsetWidth;
  cord.classList.add('tug');

  setTimeout(() => {
    bulbWrap.classList.remove('charging');
    bulbWrap.classList.add('lit');
    pullRing.classList.add('lit');
    powerBtn.classList.add('is-on');

    const { cat, idea } = pickIdea();

    cardLabel.innerHTML = cat + ' <span class="n">·</span> <span class="n">' + CAT_LABELS[cat] + '</span>';
    renderWords(idea);

    sparkCount += 1;
    countEl.textContent = sparkCount + (sparkCount === 1 ? ' spark' : ' sparks');
    localStorage.setItem('sparkCount', String(sparkCount));

    busy = false;
    pullBtn.disabled = false;
  }, 650);
}

function toggleBulb() {
  if (busy) return;

  powerOn = !powerOn;
  localStorage.setItem('powerOn', String(powerOn));

  if (powerOn) {
    bulbWrap.classList.remove('off');
    pullBtn.disabled = false;
  } else {
    bulbWrap.classList.remove('lit', 'charging');
    bulbWrap.classList.add('off');
    pullRing.classList.remove('lit');
    powerBtn.classList.remove('is-on');
    cardLabel.textContent = '';
    ideaText.innerHTML = '<span class="empty-state">lights off, tap the bulb to switch it back on</span>';
    pullBtn.disabled = true;
  }
}

function handleToggleKey(e) {
  if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
    e.preventDefault();
    toggleBulb();
  }
}

pullBtn.addEventListener('click', pull);
bulbWrap.addEventListener('click', toggleBulb);
bulbWrap.addEventListener('keydown', handleToggleKey);
pullRing.addEventListener('click', toggleBulb);
pullRing.addEventListener('keydown', handleToggleKey);
powerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleBulb();
});
