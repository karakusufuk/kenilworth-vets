// Story page: one template filled from js/data.js by `?s=<id>` (unknown or missing → bobby).
// Bobby has the three-photo slider with caption, arrows and dots; single-photo stories show none of those.
import { $, $$ } from './site.js';
import { STORIES, STORY_ORDER } from './data.js';

const REL = '../../';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const param = new URLSearchParams(location.search).get('s');
const id = STORIES[param] ? param : 'bobby';
const s = STORIES[id];
const next = STORY_ORDER[(STORY_ORDER.indexOf(id) + 1) % STORY_ORDER.length];

document.title = `${s.title} · Kenilworth Vets`;
const tag = $('[data-tag]'); tag.textContent = s.tag; tag.classList.add(s.tagClass);
$('[data-date]').textContent = s.date;
$('[data-title]').textContent = s.title;
$('[data-body]').innerHTML = s.body.map(p => `<p>${esc(p)}</p>`).join('');
$('[data-author-ph]').innerHTML = `<img src="${REL}${s.author.img[0]}" alt="" style="object-position:${s.author.img[1]}">`;
$('[data-author-n]').textContent = s.author.name;
$('[data-author-s]').textContent = s.author.sub;
if (s.cta) { const c = $('[data-cta]'); c.hidden = false; c.innerHTML = `<a href="${REL}${s.cta.href}" class="btn btn-line btn-sm">${esc(s.cta.t)}</a>`; }
const nx = $('[data-next]'); nx.setAttribute('href', `./?s=${next}`); $('[data-next-t]').textContent = STORIES[next].title;

/* photos */
const frame = $('[data-frame]'), dotsHost = $('[data-dots]');
const P = s.photos, n = P.length;
frame.innerHTML = P.map(p => `<img class="slide-img" src="${REL}${p[0]}" alt="${esc(p[1])}">`).join('');
const imgs = $$('img', frame);
imgs[0].classList.add('is-cur');
if (n > 1) {
  frame.insertAdjacentHTML('beforeend', `<div class="story-cap" data-cap aria-live="polite"></div>
<div class="story-arrows"><button type="button" class="round" aria-label="Previous photo" data-prev><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg></button><button type="button" class="round" aria-label="Next photo" data-nextp><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></button></div>`);
  dotsHost.innerHTML = P.map((p, k) => `<button type="button" class="story-dot" aria-label="${esc(p[1])}" aria-current="${k === 0}" data-dot="${k}"></button>`).join('');
  let cur = 0, prev = null;
  const paint = () => {
    imgs.forEach((im, k) => { im.classList.toggle('is-cur', k === cur); im.classList.toggle('is-prev', k === prev); });
    $$('[data-dot]').forEach((d, k) => d.setAttribute('aria-current', k === cur ? 'true' : 'false'));
    $('[data-cap]').textContent = P[cur][2];
  };
  const go = k => { if (k === cur) return; prev = cur; cur = k; paint(); };
  $('[data-prev]').addEventListener('click', () => go((cur - 1 + n) % n));
  $('[data-nextp]').addEventListener('click', () => go((cur + 1) % n));
  dotsHost.addEventListener('click', e => { const d = e.target.closest('[data-dot]'); if (d) go(+d.dataset.dot); });
  paint();
} else {
  dotsHost.remove();
}
