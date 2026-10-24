// Home page: live status line, the fixed header copy on scroll, banner-tab ↔ edge-tab hand-over,
// the "What brings you in?" questions, the rotating founder line, the Noticeboard slider and the
// People we trust moments. Lists are rendered from js/data.js; the numbers are the board's.
import { status, addFilterTarget, setEdgeVisible, state, reduced, $, $$ } from './site.js';
import { QUESTIONS, FOUNDER_LINES, HOME_STORIES, MOMENTS } from './data.js';

const REL = './';
const ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const href = h => /^https?:/.test(h) ? h : REL + h;

/* ---------- banner: status, stuck header, tabs (Stage 4) ---------- */
const STUCK_AT = 600; // board: stuckAt()
const hfixed = $('[data-hfixed]');
const bannerTab = $('[data-etab="banner"]');
let stuck = false;
addFilterTarget(hfixed);

function paintStatus() {
  const s = status();
  const dot = $('[data-status-dot]'), txt = $('[data-status-text]');
  if (dot) dot.style.background = s.open ? '#8BC285' : '#E9967A';
  if (txt) txt.textContent = s.open ? `Open now · until ${s.close}` : 'Closed now · emergencies go to our out-of-hours partner';
}
paintStatus();
setInterval(paintStatus, 60000);

function paintTop() {
  if (hfixed) hfixed.classList.toggle('is-stuck', stuck);
  if (bannerTab) bannerTab.classList.toggle('is-hidden', stuck || state.p > 0.02);
}
function onScroll() {
  const s = (window.scrollY || 0) > STUCK_AT;
  if (s !== stuck) { stuck = s; paintTop(); setEdgeVisible(() => stuck); }
}
window.addEventListener('scroll', onScroll, { passive: true });
document.addEventListener('kv:render', paintTop);
setEdgeVisible(() => stuck);
onScroll();
paintTop();

/* ---------- a sliding photo frame (questions and moments): current slides in from the right, previous out to the left ---------- */
function makeFrame(host, items) {
  host.innerHTML = items.map(m => `<img class="slide-img" src="${href(m.img)}" alt="${esc(m.alt || '')}" style="object-position:${m.pos}">`).join('');
  const imgs = $$('.slide-img', host);
  let cur = 0, prev = null;
  imgs[0].classList.add('is-cur');
  return {
    show(i) {
      if (i === cur) return;
      prev = cur; cur = i;
      imgs.forEach((img, k) => { img.classList.toggle('is-cur', k === cur); img.classList.toggle('is-prev', k === prev); });
    }
  };
}

/* ---------- "What brings you in?" (board: LIST 504, OPEN 196, closed rows share the rest) ---------- */
(function questions() {
  const list = $('[data-qlist]'), frameHost = $('[data-qframe]');
  if (!list || !frameHost) return;
  const LIST = 504, OPEN = 196;
  list.innerHTML = QUESTIONS.map((q, i) => `<div class="qrow" data-q="${q.id}">
<button type="button" class="qbtn" aria-expanded="false" aria-controls="q-${q.id}" id="qb-${q.id}"><span class="serif">${esc(q.title)}</span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg></button>
<div class="qbody" id="q-${q.id}" role="region" aria-labelledby="qb-${q.id}"><p class="qdesc">${esc(q.desc)}</p><div class="qopts">${q.opts.map(o => o[1] === '#register'
    ? `<a href="${REL}" class="btn btn-mustard btn-sm" data-open-reg tabindex="-1">${esc(o[0])}</a>`
    : `<a href="${href(o[1])}" class="btn btn-mustard btn-sm" tabindex="-1">${esc(o[0])}</a>`).join('')}</div></div>
</div>`).join('');
  const frame = makeFrame(frameHost, QUESTIONS);
  const rows = $$('.qrow', list);
  let open = null;
  function paint() {
    const any = open !== null;
    const closedH = any ? (LIST - OPEN) / 5 : LIST / 6;
    rows.forEach(row => {
      const on = row.dataset.q === open;
      row.classList.toggle('is-open', on);
      row.style.height = (on ? OPEN : closedH).toFixed(2) + 'px';
      const b = $('.qbtn', row);
      b.style.height = (on ? 72 : closedH).toFixed(2) + 'px';
      b.setAttribute('aria-expanded', on ? 'true' : 'false');
      $$('.qopts a', row).forEach(a => a.setAttribute('tabindex', on ? '0' : '-1'));
    });
  }
  rows.forEach((row, i) => $('.qbtn', row).addEventListener('click', () => {
    if (open === row.dataset.q) { open = null; paint(); return; }
    open = row.dataset.q; paint(); frame.show(i);
  }));
  paint();
})();

/* ---------- founder: rotating line every 3.6 s, paused while the mouse is over the text column ---------- */
(function founder() {
  const host = $('[data-lines]'), col = $('[data-founder]');
  if (!host) return;
  host.innerHTML = FOUNDER_LINES.map(l => `<div class="serif fline">${esc(l[0])}<span class="hi">${esc(l[1])}</span>${esc(l[2])}</div>`).join('');
  const lines = $$('.fline', host);
  let cur = 0, prev = null, paused = false;
  const paint = () => lines.forEach((el, k) => { el.classList.toggle('is-cur', k === cur); el.classList.toggle('is-prev', k === prev); });
  paint();
  setInterval(() => { if (paused) return; prev = cur; cur = (cur + 1) % lines.length; paint(); }, 3600);
  if (col) { col.addEventListener('mouseenter', () => { paused = true; }); col.addEventListener('mouseleave', () => { paused = false; }); }
})();

/* ---------- Noticeboard slider: 74 % cards, tilts alternate, only the current card in colour ---------- */
(function slider() {
  const track = $('[data-track]');
  if (!track) return;
  const n = HOME_STORIES.length;
  track.innerHTML = HOME_STORIES.map(s => `<article class="nb-card">
<div class="nb-card-ph"><div class="ph"><img src="${href(s.img)}" alt="${esc(s.alt)}"></div></div>
<div class="nb-card-copy">
<div class="nb-meta"><span class="tag ${s.tagClass}">${esc(s.tag)}</span><span class="nb-date">${esc(s.date)}</span></div>
<h3 class="serif">${esc(s.title)}</h3>
<p>${esc(s.body)}</p>
<div class="nb-cta"><a href="${REL}noticeboard/story/?s=${s.id}" class="btn btn-line btn-sm">${esc(s.cta)}</a></div>
</div>
</article>`).join('');
  const cards = $$('.nb-card', track), label = $('[data-slide-label]');
  let slide = 0;
  function paint() {
    track.style.transform = `translateX(calc(${-slide} * (74% + 44px)))`;
    cards.forEach((c, i) => { c.classList.toggle('is-cur', i === slide); c.classList.toggle('is-past', i < slide); });
    if (label) label.textContent = `${slide + 1} / ${n}`;
  }
  $('[data-slide-prev]').addEventListener('click', () => { slide = Math.max(0, slide - 1); paint(); });
  $('[data-slide-next]').addEventListener('click', () => { slide = (slide + 1) % n; paint(); });
  paint();
})();

/* ---------- People we trust: hover previews the moment, click hands it to /people-we-trust/ via sessionStorage ---------- */
(function moments() {
  const host = $('[data-moments]'), frameHost = $('[data-mframe]');
  if (!host || !frameHost) return;
  const frame = makeFrame(frameHost, MOMENTS);
  host.innerHTML = MOMENTS.map((m, i) => `<a href="${REL}people-we-trust/" class="mcard${i === 0 ? ' is-on' : ''}" data-moment="${i}"><span class="mcard-t">${esc(m.t)}</span><span class="mcard-dot">${ARROW}</span></a>`).join('');
  const cards = $$('.mcard', host);
  let mom = 0;
  const set = i => { if (i === mom) return; mom = i; cards.forEach((c, k) => c.classList.toggle('is-on', k === mom)); frame.show(i); };
  cards.forEach((c, i) => {
    c.addEventListener('mouseenter', () => set(i));
    c.addEventListener('focus', () => set(i));
    c.addEventListener('click', () => { try { window.sessionStorage.setItem('kvMoment', String(i)); } catch (e) { /* storage blocked: the page simply opens on the first moment */ } });
  });
})();

export { reduced };
