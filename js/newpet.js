// New pet guide: Puppy/Kitten toggle swaps the timeline and the total line; the reminder sign-up shows its done state.
import { $, $$ } from './site.js';
import { NEW_PET, NEW_PET_TOTAL } from './data.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
let kind = 'Puppy';

function paint() {
  $$('[data-kind]').forEach(c => c.setAttribute('aria-pressed', c.dataset.kind === kind ? 'true' : 'false'));
  $('[data-timeline]').innerHTML = NEW_PET[kind].map(r => `<div class="two tl-row">
<div class="tl-age"><span class="serif">${esc(r[0])}</span><div class="tl-age-sub">${esc(r[1])}</div></div>
<div class="tl-spine"><span class="tl-line"></span><span class="tl-dot"></span></div>
<div class="tl-body"><span class="serif tl-t">${esc(r[2])}</span><span class="tl-d">${esc(r[3])}</span></div>
<div class="tl-price"><span class="serif tl-p">${esc(r[4])}</span><a href="../book/" class="btn btn-line btn-sm">Book</a></div>
</div>`).join('');
  $('[data-total]').textContent = NEW_PET_TOTAL[kind];
}
$('[data-kinds]').addEventListener('click', e => { const c = e.target.closest('[data-kind]'); if (c) { kind = c.dataset.kind; paint(); } });
paint();

const form = $('[data-remind-form]');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.hidden = true;
  const done = $('[data-remind-done]'); done.hidden = false;
  $('[data-remind-done-t]').focus({ preventScroll: true });
});
