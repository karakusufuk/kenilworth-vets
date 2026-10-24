// Contact: the hours table with today's row marked (Dublin time), and the form's done state.
import { status, DAY_INDEX, $ } from './site.js';
import { CONTACT_HOURS } from './data.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function paintHours() {
  const today = DAY_INDEX[status().day];
  $('[data-hours]').innerHTML = CONTACT_HOURS.map((h, i) => `<div class="hrow${i === today ? ' is-today' : ''}"><span>${esc(h[0])}${i === today ? ' · today' : ''}</span><span>${esc(h[1])}</span></div>`).join('');
}
paintHours();
setInterval(paintHours, 60000);

const form = $('[data-write-form]');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.hidden = true;
  $('[data-write-done]').hidden = false;
  $('[data-write-done-t]').focus({ preventScroll: true });
});
