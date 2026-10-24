// People we trust: the sticky moments nav and the business rows; opens on the moment the homepage
// card stored in sessionStorage (`kvMoment`, SPEC §2.7) and then clears it; otherwise the first moment.
import { $, $$ } from './site.js';
import { PARTNERS } from './data.js';

const REL = '../';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
let m = 0;
try {
  const v = window.sessionStorage.getItem('kvMoment');
  if (v !== null) { m = parseInt(v, 10) || 0; window.sessionStorage.removeItem('kvMoment'); }
} catch (e) { /* storage blocked: first moment */ }
if (!PARTNERS[m]) m = 0;

const nav = $('[data-moments]');
nav.insertAdjacentHTML('beforeend', PARTNERS.map((p, i) => `<button type="button" class="moment" data-m="${i}" aria-pressed="false"><span>${esc(p.name)}</span><span class="n">${p.biz.length}</span></button>`).join(''));

function paint() {
  $$('[data-m]', nav).forEach(b => b.setAttribute('aria-pressed', +b.dataset.m === m ? 'true' : 'false'));
  const c = PARTNERS[m];
  $('[data-cur-name]').textContent = c.name;
  $('[data-cur-intro]').textContent = c.intro;
  $('[data-biz]').innerHTML = c.biz.map(b => {
    const link = b[4];
    const isPage = /\/$/.test(link), isTel = /^0/.test(link);
    const href = isPage ? REL + link : (isTel ? 'tel:' + link.replace(/\s/g, '') : 'https://' + link);
    const label = isPage ? 'See prices' : (isTel ? link : 'Website');
    return `<div class="two biz"><div class="biz-l"><span class="serif biz-n">${esc(b[0])}</span><span class="biz-k">${esc(b[1])} · ${esc(b[2])}</span></div><span class="biz-why">${esc(b[3])}</span><a href="${href}" class="btn btn-line btn-sm"${isPage || isTel ? '' : ' rel="noopener"'}>${esc(label)}</a></div>`;
  }).join('');
}
nav.addEventListener('click', e => { const b = e.target.closest('[data-m]'); if (b) { m = +b.dataset.m; paint(); } });
paint();
