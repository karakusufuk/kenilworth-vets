// Home page: live status line, the fixed header copy on scroll, banner-tab ↔ edge-tab hand-over.
// (Questions, founder line, slider and People we trust follow in Stage 5.)
import { status, addFilterTarget, setEdgeVisible, state, $, $$ } from './site.js';

const STUCK_AT = 600; // board: stuckAt()
const hfixed = $('[data-hfixed]');
const bannerTab = $('[data-etab="banner"]');
let stuck = false;

addFilterTarget(hfixed);

/* status line */
function paintStatus() {
  const s = status();
  const dot = $('[data-status-dot]'), txt = $('[data-status-text]');
  if (dot) dot.style.background = s.open ? '#8BC285' : '#E9967A';
  if (txt) txt.textContent = s.open ? `Open now · until ${s.close}` : 'Closed now · emergencies go to our out-of-hours partner';
}
paintStatus();
setInterval(paintStatus, 60000);

/* stuck header + tab hand-over */
function paint() {
  if (hfixed) hfixed.classList.toggle('is-stuck', stuck);
  if (bannerTab) bannerTab.classList.toggle('is-hidden', stuck || state.p > 0.02);
}
function onScroll() {
  const s = (window.scrollY || 0) > STUCK_AT;
  if (s !== stuck) { stuck = s; paint(); setEdgeVisible(() => stuck); }
}
window.addEventListener('scroll', onScroll, { passive: true });
document.addEventListener('kv:render', paint);
setEdgeVisible(() => stuck);
onScroll();
paint();
