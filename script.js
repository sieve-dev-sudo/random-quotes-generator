const IDEAS = {
  "make": [
    "A lamp that only turns on when the room is quiet enough to hear it hum.",
    "Business cards printed on seed paper — plant them instead of filing them.",
    "A birdhouse shaped like the house you grew up in.",
    "A set of coasters that map the coastline of somewhere you've never been.",
    "A wind chime tuned to a single chord instead of random notes."
  ],
  "write": [
    "A letter from your future self, mailed to arrive exactly one year late.",
    "A story told entirely through the customer reviews of a cursed object.",
    "An obituary for a bad habit you finally broke.",
    "A field guide to the moods of your morning commute.",
    "Two strangers narrate the same event from opposite ends of a train."
  ],
  "build": [
    "A to-do list app where unfinished tasks slowly fade instead of nagging.",
    "A tiny tool that turns any playlist into a color gradient.",
    "A browser extension that replaces 'breaking news' with 'breaking noon' at lunchtime.",
    "A doorbell that plays a different tiny melody each visitor gets assigned.",
    "A weather app that only describes what to wear, never the numbers."
  ],
  "cook": [
    "Rebuild your favorite childhood snack using only ingredients from one country.",
    "A dinner where every course is a different temperature of the same soup.",
    "Bread shaped like the skyline of your hometown.",
    "A dessert that's intentionally too salty until the very last bite.",
    "A one-pot meal you're only allowed to season with things grown outdoors."
  ],
  "start": [
    "A subscription box for other people's unfinished side projects.",
    "A repair café that only fixes things older than the person bringing them in.",
    "A tiny agency that writes apology notes on behalf of the terminally busy.",
    "A rental service for one single good houseplant, swapped monthly.",
    "A newsletter that reviews silence in different rooms of the city."
  ],
  "reflect": [
    "A closed notebook has never finished a single sentence.",
    "The bulb doesn't choose when to flicker — you choose when to pull the cord.",
    "Small sparks start bigger fires than big plans ever do.",
    "An idea kept in the dark just gets colder.",
    "The first draft is only a match, not the fire.",
    "Nobody remembers the idea you didn't write down.",
    "A good idea interrupted still beats a perfect one delayed.",
    "The cord only works if somebody's willing to pull it.",
    "Ideas rot faster in silence than they ever do in failure.",
    "Every finished thing was once somebody's rough sketch.",
    "A dim idea shared beats a bright idea kept.",
    "The spark doesn't ask permission before it catches.",
    "Waiting for the perfect idea is how good ones go dark.",
    "One pulled cord is worth ten unlit bulbs.",
    "The room only feels small until you turn something on.",
    "A single spark still counts, even if nothing burns.",
    "Ideas stay cheap until somebody starts building one.",
    "The bulb was always there — someone just had to reach for the cord."
  ]
};

const CAT_LABELS = {
  make: 'something to make',
  write: 'something to write',
  build: 'something to build',
  cook: 'something to cook',
  start: 'something to start',
  reflect: 'something to sit with'
};

const CATS = Object.keys(IDEAS);
const bulbWrap = document.getElementById('bulbWrap');
const ideaText = document.getElementById('ideaText');
const cardLabel = document.getElementById('cardLabel');
const pullBtn = document.getElementById('pullBtn');
const countEl = document.getElementById('count');
const pullRing = document.getElementById('pullRing');
const cord = document.getElementById('cord');

let sparkCount = 0;
let busy = false;
let powerOn = true;

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

    const cat = CATS[Math.floor(Math.random() * CATS.length)];
    const list = IDEAS[cat];
    const idea = list[Math.floor(Math.random() * list.length)];

    cardLabel.innerHTML = cat + ' <span class="n">·</span> <span class="n">' + CAT_LABELS[cat] + '</span>';
    renderWords(idea);

    sparkCount += 1;
    countEl.textContent = sparkCount + (sparkCount === 1 ? ' spark' : ' sparks');

    busy = false;
    pullBtn.disabled = false;
  }, 650);
}

function toggleBulb() {
  if (busy) return;

  powerOn = !powerOn;

  if (powerOn) {
    bulbWrap.classList.remove('off');
    pullBtn.disabled = false;
  } else {
    bulbWrap.classList.remove('lit', 'charging');
    bulbWrap.classList.add('off');
    pullRing.classList.remove('lit');
    cardLabel.textContent = '';
    ideaText.innerHTML = '<span class="empty-state">lights off — tap the bulb to switch it back on</span>';
    pullBtn.disabled = true;
  }
}

pullBtn.addEventListener('click', pull);
bulbWrap.addEventListener('click', toggleBulb);
pullRing.addEventListener('click', toggleBulb);