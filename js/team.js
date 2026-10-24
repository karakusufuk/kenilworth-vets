// The team: three portrait cards (4:5) and two wide cards (3:2) with their facts, from js/data.js.
import { $ } from './site.js';
import { TEAM } from './data.js';

const REL = '../';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const card = t => `<article class="member">
<div class="ph member-ph"><img src="${REL}${t.img}" alt="${esc(t.name)}" style="object-position:${t.pos}"></div>
<div class="member-body">
<div class="member-head"><h3 class="serif">${esc(t.name)}</h3><span class="tag tag-blue">${esc(t.role)}</span></div>
<p class="member-bio">${esc(t.bio)}</p>
<div class="member-facts">${t.facts.map(f => `<div class="mfact"><span class="k">${esc(f[0])}</span><span class="v">${esc(f[1])}</span></div>`).join('')}</div>
</div>
</article>`;
$('[data-team3]').innerHTML = TEAM.slice(0, 3).map(card).join('');
$('[data-team2]').innerHTML = TEAM.slice(3).map(card).join('');
