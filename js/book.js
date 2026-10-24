// Book: the four-step pill stepper, each step, the sticky summary, Back / Continue and the confirmation.
// State and rules are the board's: a reason click moves straight to step 3; Continue is disabled until the
// step is complete; the slot availability is seeded by day and vet; "Book another" keeps vet and day.
import { $, $$ } from './site.js';
import { BOOK_REASONS, BOOK_STEPS, BOOK_SPECIES, BOOK_VETS, BOOK_DAYS, BOOK_DAYS_FULL, BOOK_FREE, BOOK_TIMES } from './data.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const st = { step: 1, bsp: null, name: '', reason: null, vet: "Whoever's free", day: 1, slot: null };

const stepper = $('[data-stepper]'), speciesHost = $('[data-species]'), nameInput = $('[data-name]'), reasonsHost = $('[data-reasons]');
const vetsHost = $('[data-vets]'), daysHost = $('[data-days]'), slotsHost = $('[data-slots]');
const sumRows = $('[data-sum-rows]'), sumPrice = $('[data-sum-price]'), go = $('[data-go]');

/* one-off markup */
speciesHost.innerHTML = BOOK_SPECIES.map(x => `<button type="button" class="chip chip-lg" data-sp="${esc(x)}" aria-pressed="false">${esc(x)}</button>`).join('');
reasonsHost.innerHTML = BOOK_REASONS.map(r => `<button type="button" class="reason" data-reason="${esc(r[0])}" aria-pressed="false"><span class="reason-l"><span class="reason-t">${esc(r[0])}</span><span class="reason-d">${esc(r[1])}</span></span><span class="reason-len">${esc(r[2])}</span></button>`).join('');
vetsHost.innerHTML = BOOK_VETS.map(v => `<button type="button" class="chip" data-vet="${esc(v)}" aria-pressed="false">${esc(v)}</button>`).join('');
daysHost.innerHTML = BOOK_DAYS.map((d, i) => `<button type="button" class="day" data-day="${i}" aria-pressed="false"><span class="day-w">${d[0]}</span><span class="serif day-n">${d[1]}</span><span class="day-f">${BOOK_FREE[i]} free</span></button>`).join('');

const ampm = t => { const h = parseInt(t, 10); return t + (h >= 9 && h <= 12 ? (h === 12 ? 'pm' : 'am') : 'pm'); };
const taken = i => ((i * 5 + st.day * 7 + st.vet.length) % 7) < 3;

function paint() {
  const r = BOOK_REASONS.find(x => x[0] === st.reason);
  // stepper
  stepper.innerHTML = BOOK_STEPS.map((n, i) => { const k = i + 1, cur = st.step === k, done = st.step > k; return `<div class="stp${cur ? ' is-cur' : ''}${done ? ' is-done' : ''}"${cur ? ' aria-current="step"' : ''}><span class="stp-n">${done ? '✓' : k}</span><span class="stp-t">${n}</span></div>`; }).join('');
  // steps
  $$('[data-step]').forEach(el => { el.hidden = +el.dataset.step !== st.step; });
  $$('[data-sp]', speciesHost).forEach(c => c.setAttribute('aria-pressed', c.dataset.sp === st.bsp ? 'true' : 'false'));
  if (nameInput.value !== st.name) nameInput.value = st.name;
  $$('[data-reason]', reasonsHost).forEach(b => b.setAttribute('aria-pressed', b.dataset.reason === st.reason ? 'true' : 'false'));
  $$('[data-vet]', vetsHost).forEach(c => c.setAttribute('aria-pressed', c.dataset.vet === st.vet ? 'true' : 'false'));
  $$('[data-day]', daysHost).forEach(d => d.setAttribute('aria-pressed', +d.dataset.day === st.day ? 'true' : 'false'));
  slotsHost.innerHTML = BOOK_TIMES.map((t, i) => { const dis = taken(i); return `<button type="button" class="slot" data-slot="${t}" aria-pressed="${st.slot === t}"${dis ? ' disabled aria-disabled="true"' : ''}>${t}</button>`; }).join('');
  // summary
  const petLabel = st.bsp ? (st.name ? st.name + ' · ' + st.bsp.toLowerCase() : st.bsp) : '—';
  const dd = BOOK_DAYS[st.day];
  const rows = [['Who', petLabel], ['What for', st.reason || '—'], ['How long', r ? r[2] : '—'], ['With', st.vet], ['When', st.slot ? `${dd[0]} ${dd[1]} Oct, ${ampm(st.slot)}` : '—']];
  sumRows.innerHTML = rows.map(x => `<div class="bsum-row"><span class="k">${esc(x[0])}</span><span class="v">${esc(x[1])}</span></div>`).join('');
  sumPrice.textContent = r ? r[3] : '—';
  const dis = (st.step === 1 && !st.bsp) || (st.step === 2 && !st.reason) || (st.step === 3 && !st.slot);
  go.hidden = st.step >= 5;
  go.disabled = dis;
  go.setAttribute('aria-disabled', dis ? 'true' : 'false');
  go.textContent = st.step === 4 ? 'Confirm booking' : 'Continue';
  if (st.step === 5) $('[data-confirm-t]').textContent = `See you ${BOOK_DAYS_FULL[st.day]} the ${dd[1]}${dd[1] === '31' ? 'st' : 'th'} at ${ampm(st.slot)}.`;
}
function set(part) { Object.assign(st, part); paint(); }

speciesHost.addEventListener('click', e => { const c = e.target.closest('[data-sp]'); if (c) set({ bsp: c.dataset.sp }); });
nameInput.addEventListener('input', () => { st.name = nameInput.value; paint(); });
reasonsHost.addEventListener('click', e => { const b = e.target.closest('[data-reason]'); if (b) { set({ reason: b.dataset.reason, step: 3 }); focusStep(); } });
vetsHost.addEventListener('click', e => { const c = e.target.closest('[data-vet]'); if (c) set({ vet: c.dataset.vet, slot: null }); });
daysHost.addEventListener('click', e => { const d = e.target.closest('[data-day]'); if (d) set({ day: +d.dataset.day, slot: null }); });
slotsHost.addEventListener('click', e => { const s = e.target.closest('[data-slot]'); if (s && !s.disabled) set({ slot: s.dataset.slot }); });
$$('[data-back]').forEach(b => b.addEventListener('click', () => { set({ step: Math.max(1, st.step - 1) }); focusStep(); }));
go.addEventListener('click', () => { if (go.disabled) return; set({ step: st.step + 1 }); focusStep(); });
$('[data-reset]').addEventListener('click', () => { set({ step: 1, bsp: null, name: '', reason: null, slot: null }); focusStep(); });

// keep keyboard users oriented: focus the new step's heading (or the confirmation title)
function focusStep() {
  const el = st.step === 5 ? $('[data-confirm-t]') : $(`[data-step="${st.step}"] h1`);
  if (el) { if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: true }); }
}
paint();
