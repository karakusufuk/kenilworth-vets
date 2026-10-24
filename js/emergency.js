// Emergency page: open/closed copy in the hero by Dublin time, the two triage lists, the "On the way" checklist.
import { status, $, $$ } from './site.js';
import { EMERGENCY_NOW, EMERGENCY_LATER, EMERGENCY_STEPS } from './data.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function paintHero() {
  const stat = status();
  const s = stat.open
    ? { line: "We're open now — ring us", who: 'Kenilworth Vets', num: '01 496 0000', tel: '014960000', sub: 'After 7pm, the same number puts you through to Southside Out-of-Hours Vets in Terenure.' }
    : { line: "We're closed — our out-of-hours partner is on", who: 'Southside Out-of-Hours Vets, Terenure', num: '01 490 1100', tel: '014901100', sub: 'Open all night, every night. They send us your notes first thing in the morning.' };
  $$('[data-es]').forEach(el => { const k = el.getAttribute('data-es'); if (k === 'tel') el.setAttribute('href', 'tel:' + s.tel); else el.textContent = s[k]; });
}
paintHero();
setInterval(paintHero, 60000);

const row = x => `<div class="triage-row"><span class="t">${esc(x.t)}</span><span class="d">${esc(x.d)}</span></div>`;
$('[data-now]').innerHTML = EMERGENCY_NOW.map(row).join('');
$('[data-later]').innerHTML = EMERGENCY_LATER.map(row).join('');

const host = $('[data-steps]');
host.innerHTML = EMERGENCY_STEPS.map(r => `<button type="button" class="step" aria-pressed="false">
<span class="step-l"><span class="step-t">${esc(r[0])}</span><span class="step-d">${esc(r[1])}</span></span>
<span class="step-tick"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg></span>
</button>`).join('');
host.addEventListener('click', e => {
  const b = e.target.closest('.step'); if (!b) return;
  b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  const n = $$('.step[aria-pressed="true"]', host).length;
  $('[data-done-label]').textContent = `${n} of 5 done`;
});
