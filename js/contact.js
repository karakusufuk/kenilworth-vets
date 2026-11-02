// Contact: the hours table with today's row marked (Dublin time), the "It's about" combobox, and a demo form
// whose Send button stays faded and inactive.
import { status, DAY_INDEX, $, $$ } from './site.js';
import { CONTACT_HOURS } from './data.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function paintHours() {
  const today = DAY_INDEX[status().day];
  $('[data-hours]').innerHTML = CONTACT_HOURS.map((h, i) => `<div class="hrow${i === today ? ' is-today' : ''}"><span>${esc(h[0])}${i === today ? ' · today' : ''}</span><span>${esc(h[1])}</span></div>`).join('');
}
paintHours();
setInterval(paintHours, 60000);

const form = $('[data-write-form]');
form.addEventListener('submit', e => e.preventDefault());

/* "It's about": the site's own combobox (no OS picker). Nothing is chosen until the visitor picks; tap or click
   opens it, arrows move, Enter or Space picks, Escape or a tap outside closes. */
(function combo() {
  const root = $('[data-combo]');
  if (!root) return;
  const btn = $('.combo-btn', root), list = $('.combo-list', root), val = $('.combo-v', root), input = $('input[type="hidden"]', root);
  const opts = $$('[role="option"]', list);
  let active = -1;
  const isOpen = () => !list.hidden;
  function mark(i) {
    active = i;
    opts.forEach((o, k) => o.classList.toggle('is-active', k === i));
    if (i >= 0) { list.setAttribute('aria-activedescendant', opts[i].id); opts[i].scrollIntoView({ block: 'nearest' }); } else list.removeAttribute('aria-activedescendant');
  }
  function open(keyboard) {
    list.hidden = false; root.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true');
    const sel = opts.findIndex(o => o.getAttribute('aria-selected') === 'true');
    mark(keyboard ? Math.max(0, sel) : -1); // a tap shows no highlighted row; keys start on the chosen one
    list.focus({ preventScroll: true });
  }
  function close(refocus) {
    if (!isOpen()) return;
    list.hidden = true; root.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); mark(-1);
    if (refocus) btn.focus({ preventScroll: true });
  }
  function pick(i) {
    opts.forEach((o, k) => o.setAttribute('aria-selected', k === i ? 'true' : 'false'));
    val.textContent = opts[i].textContent; val.classList.remove('is-empty'); input.value = opts[i].textContent;
    close(true);
  }
  btn.addEventListener('click', () => { if (isOpen()) close(true); else open(false); });
  btn.addEventListener('keydown', e => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(true); } });
  list.addEventListener('click', e => { const o = e.target.closest('[role="option"]'); if (o) pick(opts.indexOf(o)); });
  list.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); mark(Math.min(opts.length - 1, active + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); mark(Math.max(0, active - 1)); }
    else if (e.key === 'Home') { e.preventDefault(); mark(0); }
    else if (e.key === 'End') { e.preventDefault(); mark(opts.length - 1); }
    else if ((e.key === 'Enter' || e.key === ' ') && active >= 0) { e.preventDefault(); pick(active); }
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(true); }
    else if (e.key === 'Tab') close(false);
  });
  document.addEventListener('pointerdown', e => { if (isOpen() && !root.contains(e.target)) close(false); });
})();
