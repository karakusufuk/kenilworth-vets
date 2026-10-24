// My Pet: the demo account. Starts signed in, as the board; "Sign out" shows the prefilled login and
// "Sign in" brings the dashboard back. Overview lists come from js/data.js; Reminders drive the preview.
import { $, $$ } from './site.js';
import { MYPET } from './data.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const st = { inn: true, tab: 'Overview', ch: Object.assign({}, MYPET.defaults), focus: 'booster', second: false, saved: false };

/* overview lists (static once) */
$('[data-facts]').innerHTML = MYPET.facts.map(f => `<div class="fact"><span class="k">${esc(f[0])}</span><span class="v">${esc(f[1])}</span></div>`).join('');
$('[data-meds]').innerHTML = MYPET.meds.map(m => `<div class="med"><span class="med-l"><span class="med-t">${esc(m.t)}</span><span class="med-d">${esc(m.d)}</span></span><span class="tag tag-plain ${m.cls}">${esc(m.when)}</span></div>`).join('');
$('[data-vax]').insertAdjacentHTML('beforeend', MYPET.vax.map(v => `<div class="vax-item${v.due ? ' is-due' : ''}"><span class="vax-dot"></span><span class="vax-t">${esc(v.t)}</span><span class="vax-d">${esc(v.d)}</span></div>`).join(''));
$('[data-visits]').innerHTML = MYPET.visits.map(v => `<div class="visit"><span class="visit-date">${esc(v.date)}</span><span class="visit-m"><span class="visit-t">${esc(v.t)}</span><span class="visit-n">${esc(v.note)}</span></span><span class="visit-who">${esc(v.who)}</span></div>`).join('');
$('[data-rem]').innerHTML = MYPET.reminders.map(r => `<div class="rem"><span class="rem-l"><span class="rem-t">${esc(r.t)}</span><span class="rem-d">${esc(r.d)}</span></span><span class="rem-ch" role="group" aria-label="${esc(r.t)}">${MYPET.channels.map(c => `<button type="button" class="chip chip-ch" data-rem="${r.id}" data-ch="${c}" aria-pressed="false">${c}</button>`).join('')}</span></div>`).join('');

function paint() {
  $('[data-login]').hidden = st.inn;
  $('[data-dash]').hidden = !st.inn;
  $$('[data-tab]').forEach(t => { const on = t.dataset.tab === st.tab; t.setAttribute('aria-pressed', on ? 'true' : 'false'); t.setAttribute('aria-selected', on ? 'true' : 'false'); });
  $$('[data-pane]').forEach(p => { p.hidden = p.dataset.pane !== st.tab; });
  $$('[data-rem][data-ch]').forEach(c => c.setAttribute('aria-pressed', st.ch[c.dataset.rem] === c.dataset.ch ? 'true' : 'false'));
  $('[data-second-d]').textContent = st.second ? MYPET.second.on : MYPET.second.off;
  const sb = $('[data-second]'); sb.textContent = st.second ? 'Added' : 'Add someone'; sb.setAttribute('aria-pressed', st.second ? 'true' : 'false');
  const ch = st.ch[st.focus];
  const label = ch === 'Call' ? 'automated call' : (ch === 'Email' ? 'email' : 'text');
  $('[data-preview-lbl]').textContent = `Preview · ${label}`;
  $('[data-preview-from]').textContent = ch === 'Email' ? 'reminders@kenilworthvets.ie' : (ch === 'Call' ? 'Incoming call · 01 496 0000' : 'KenilworthV · now');
  const msg = $('[data-preview-msg]');
  msg.textContent = ch === 'Call' ? '“' + MYPET.msgs[st.focus].replace(' — Kenilworth Vets', '') + '” — read out by our automated line from 01 496 0000.' : MYPET.msgs[st.focus];
  msg.classList.toggle('is-email', ch === 'Email');
  const saved = $('[data-saved]'); saved.hidden = !st.saved; saved.textContent = `Saved — a test ${label} is on its way.`;
}
const set = part => { Object.assign(st, part); paint(); };

$('[data-login-form]').addEventListener('submit', e => { e.preventDefault(); set({ inn: true }); $('.profile-name').setAttribute('tabindex', '-1'); $('.profile-name').focus({ preventScroll: true }); });
$('[data-logout]').addEventListener('click', () => { set({ inn: false }); $('[data-login] input').focus({ preventScroll: true }); });
$('.tabs').addEventListener('click', e => { const t = e.target.closest('[data-tab]'); if (t) set({ tab: t.dataset.tab, saved: false }); });
$('[data-rem]').addEventListener('click', e => { const c = e.target.closest('[data-rem][data-ch]'); if (!c) return; const ch = Object.assign({}, st.ch); ch[c.dataset.rem] = c.dataset.ch; set({ ch, focus: c.dataset.rem, saved: false }); });
$('[data-second]').addEventListener('click', () => set({ second: !st.second, saved: false }));
$('[data-save]').addEventListener('click', () => set({ saved: true }));
paint();
