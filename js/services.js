// Services: chip filter over the groups, and the sticky "What happens" panel that follows the selected row.
import { $, $$ } from './site.js';
import { SERVICES } from './data.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';

const groupsHost = $('[data-groups]'), listHost = $('[data-services]');
let group = 'All';
let sel = 'Annual booster & health check'; // board: initial selection

const allItems = SERVICES.flatMap(g => g.items);

groupsHost.innerHTML = ['All'].concat(SERVICES.map(g => g.name)).map(n =>
  `<button type="button" class="chip" data-group="${esc(n)}" aria-pressed="${n === group}">${esc(n === 'All' ? 'Everything' : n)}</button>`).join('');

listHost.innerHTML = SERVICES.map(g => `<div class="svc-group" data-gname="${esc(g.name)}">
<div class="svc-ghead"><h2 class="serif">${esc(g.name)}</h2><span class="svc-blurb">${esc(g.blurb)}</span></div>
${g.items.map(s => `<button type="button" class="svc-row" data-svc="${esc(s[0])}" aria-pressed="false">
<span class="svc-row-l"><span class="serif svc-t">${esc(s[0])}</span><span class="svc-d">${esc(s[1])}</span></span>
<span class="svc-row-r"><span class="svc-from">from <b class="serif">${esc(s[2])}</b></span><span class="svc-dot">${ARROW}</span></span>
</button>`).join('')}
</div>`).join('');

function paint() {
  $$('[data-group]', groupsHost).forEach(c => c.setAttribute('aria-pressed', c.dataset.group === group ? 'true' : 'false'));
  $$('.svc-group', listHost).forEach(g => { g.hidden = !(group === 'All' || g.dataset.gname === group); });
  $$('.svc-row', listHost).forEach(r => r.setAttribute('aria-pressed', r.dataset.svc === sel ? 'true' : 'false'));
  const s = allItems.find(x => x[0] === sel);
  $('[data-panel-t]').textContent = s[0];
  $('[data-panel-d]').textContent = s[1];
  $('[data-panel-p]').textContent = s[2];
  $('[data-panel-steps]').innerHTML = s[3].map((t, i) => `<div class="svc-step"><span class="serif n">${i + 1}</span><span class="t">${esc(t)}</span></div>`).join('');
}
groupsHost.addEventListener('click', e => { const c = e.target.closest('[data-group]'); if (c) { group = c.dataset.group; paint(); } });
listHost.addEventListener('click', e => { const r = e.target.closest('[data-svc]'); if (r) { sel = r.dataset.svc; paint(); } });
paint();
