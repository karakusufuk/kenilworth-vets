// The Noticeboard: filter chips with counts and the six stories, alternating sides within the shown list.
import { $, $$ } from './site.js';
import { NOTICEBOARD, NOTICEBOARD_FILTERS } from './data.js';

const REL = '../';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
let filter = 'Everything';

$('[data-filters]').innerHTML = NOTICEBOARD_FILTERS.map(n => {
  const c = n === 'Everything' ? NOTICEBOARD.length : NOTICEBOARD.filter(x => x.k === n).length;
  return `<button type="button" class="chip" data-filter="${esc(n)}" aria-pressed="${n === filter}">${esc(n)} <span class="n">${c}</span></button>`;
}).join('');

function paint() {
  $$('[data-filter]').forEach(c => c.setAttribute('aria-pressed', c.dataset.filter === filter ? 'true' : 'false'));
  const items = NOTICEBOARD.filter(x => filter === 'Everything' || x.k === filter);
  $('[data-list]').innerHTML = items.map((s, i) => {
    const href = s.id === 'tina' && s.cta === 'Ask about Tina' ? `${REL}contact/` : `${REL}noticeboard/story/?s=${s.id}`;
    return `<article class="two nb-item${i % 2 ? ' is-flip' : ''}">
<div class="nb-item-ph"><div class="ph"><a href="${REL}noticeboard/story/?s=${s.id}" class="nb-item-link" aria-label="${esc(s.title)}"><img src="${REL}${s.img}" alt="${esc(s.alt)}"></a></div></div>
<div class="nb-item-copy">
<div class="nb-meta"><span class="tag ${s.tagClass}">${esc(s.tag)}</span><span class="nb-date">${esc(s.date)}</span></div>
<h2 class="serif">${esc(s.title)}</h2>
<p>${esc(s.body)}</p>
<div class="nb-item-foot"><a href="${href}" class="btn btn-line btn-sm">${esc(s.cta)}</a><span class="nb-who">${esc(s.who)}</span></div>
</div>
</article>`;
  }).join('');
}
$('[data-filters]').addEventListener('click', e => { const c = e.target.closest('[data-filter]'); if (c) { filter = c.dataset.filter; paint(); } });
paint();
