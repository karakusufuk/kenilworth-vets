// Kenilworth Vets — shared behaviour: Dublin-time status, the emergency edge tab + strip,
// the registration panel, scroll lock and focus handling. Numbers and easing are the board's.

const EASE = 'cubic-bezier(.2,.75,.2,1)';
const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

/* ---------- opening hours by Dublin time (board: status()) ---------- */
const HOURS = { Mon: [510, 1140], Tue: [510, 1140], Wed: [510, 1140], Thu: [510, 1140], Fri: [510, 1140], Sat: [540, 840], Sun: null };
export function status(now = new Date()) {
  const parts = {};
  try {
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Dublin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(now).forEach(x => { parts[x.type] = x.value; });
  } catch (e) { /* fall through to defaults */ }
  const day = parts.weekday || 'Mon';
  const mins = (parseInt(parts.hour || '10', 10) % 24) * 60 + parseInt(parts.minute || '0', 10);
  const s = HOURS[day];
  const open = !!(s && mins >= s[0] && mins < s[1]);
  return { open, day, close: s ? (s[1] === 1140 ? '7pm' : '2pm') : '' };
}

export const DAY_INDEX = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };

/* ---------- focus helpers ---------- */
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
function trapTab(e, root) {
  if (e.key !== 'Tab') return;
  const items = $$(FOCUSABLE, root).filter(el => el.offsetParent !== null || el === root);
  if (!items.length) { e.preventDefault(); root.focus(); return; }
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && (document.activeElement === first || document.activeElement === root)) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ---------- state ---------- */
const st = { p: 0, dragging: false, reg: false, regDone: false, sp: 'Dog', opener: null, emOpener: null };
const page = $('[data-page]');
const strip = $('[data-estrip]');
const stripIn = strip && $('.estrip-in', strip);
const ebody = strip && $('[data-ebody]', strip);
const scrim = $('[data-scrim]');
const reg = $('[data-reg]');
const edgeTab = $('[data-etab="edge"]');
let drag = null;
let hideTimer = null;

// Pages with their own filtered layers (home's fixed header copy) register them here.
const filterTargets = page ? [page] : [];
export function addFilterTarget(el) { if (el) filterTargets.push(el); }
// Home swaps between its banner tab and the edge tab; it can tell the shared code whether the edge tab should show.
let edgeVisible = () => true;
export function setEdgeVisible(fn) { edgeVisible = fn; render(); }

function render() {
  const p = st.p, dim = (1 - 0.38 * p).toFixed(3);
  const filter = p > 0 ? `grayscale(${p.toFixed(3)}) brightness(${dim})` : 'none';
  const filterT = st.dragging ? 'none' : `filter .55s ${EASE}`;
  filterTargets.forEach(el => { el.style.filter = filter; el.style.transition = filterT; });

  if (scrim) {
    scrim.style.opacity = st.reg ? '1' : (p * 0.9).toFixed(3);
    scrim.style.pointerEvents = (st.reg || p > 0.5) ? 'auto' : 'none';
    scrim.style.transition = st.dragging ? 'none' : `opacity .55s ${EASE}`;
  }
  if (strip) {
    stripIn.style.transform = `translateX(${((1 - p) * 101).toFixed(2)}%)`;
    stripIn.style.transition = st.dragging ? 'none' : `transform .65s ${EASE}`;
    strip.style.visibility = p > 0 ? 'visible' : 'hidden';
    strip.style.transition = (p > 0 || st.dragging) ? 'visibility 0s' : 'visibility 0s linear .65s';
    const open = p > 0.5;
    strip.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) strip.removeAttribute('inert'); else strip.setAttribute('inert', '');
    ebody.classList.toggle('is-in', p > 0.6);
  }
  if (edgeTab) {
    const vis = edgeVisible();
    edgeTab.classList.toggle('is-hidden', !(vis && p < 0.05));
    edgeTab.classList.toggle('is-away', !vis);
    edgeTab.setAttribute('aria-expanded', p > 0.5 ? 'true' : 'false');
  }
  if (reg) {
    reg.classList.toggle('is-open', st.reg);
    reg.setAttribute('aria-hidden', st.reg ? 'false' : 'true');
    if (st.reg) reg.removeAttribute('inert'); else reg.setAttribute('inert', '');
    const form = $('[data-reg-form]', reg), done = $('[data-reg-done]', reg);
    if (form) form.hidden = st.regDone;
    if (done) done.hidden = !st.regDone;
    $$('[data-species] .chip', reg).forEach(c => c.setAttribute('aria-pressed', c.textContent.trim() === st.sp ? 'true' : 'false'));
  }
  const lock = p > 0.01 || st.reg;
  document.documentElement.style.overflow = lock ? 'hidden' : '';
  document.body.style.overflow = lock ? 'hidden' : '';
  document.dispatchEvent(new CustomEvent('kv:render', { detail: { p, reg: st.reg, dragging: st.dragging } }));
}

function setState(part) { Object.assign(st, part); render(); }

/* ---------- emergency text by time ---------- */
export function emergencyCopy(stat = status()) {
  return stat.open
    ? { lead: `We're open until ${stat.close} today. Ring us and come straight down — we'll be at the door when you get here.`, who: 'Kenilworth Vets — open now', num: '01 496 0000', tel: '014960000', altLabel: 'Out of hours, the same number puts you through to', alt: 'Southside Out-of-Hours Vets, Terenure', altSub: 'Open all night, every night · 01 490 1100' }
    : { lead: `We're closed right now, so ring our out-of-hours partner in Terenure. They're open all night and send us your notes in the morning.`, who: 'Southside Out-of-Hours Vets', num: '01 490 1100', tel: '014901100', altLabel: `We're back`, alt: 'Weekdays from 8:30, Saturdays from 9', altSub: 'Kenilworth Vets · 01 496 0000' };
}
function fillEmergency() {
  if (!strip) return;
  const em = emergencyCopy();
  $$('[data-em]', strip).forEach(el => {
    const k = el.getAttribute('data-em');
    if (k === 'tel') el.setAttribute('href', 'tel:' + em.tel); else el.textContent = em[k];
  });
}

/* ---------- open / close ---------- */
function focusStrip() {
  if (!strip) return;
  const delay = reduced() ? 0 : 350;
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => { if (st.p > 0.5) strip.focus({ preventScroll: true }); }, delay);
}
export function openEmergency(opener) {
  st.emOpener = opener || document.activeElement;
  setState({ p: 1, reg: false, dragging: false });
  focusStrip();
}
export function openReg(opener) {
  st.opener = opener || document.activeElement;
  setState({ reg: true, regDone: false, p: 0 });
  const delay = reduced() ? 0 : 200;
  setTimeout(() => { if (reg && st.reg) reg.focus({ preventScroll: true }); }, delay);
}
export function closeAll() {
  const wasEm = st.p > 0.5, wasReg = st.reg;
  setState({ reg: false, p: 0, dragging: false });
  let back = null;
  if (wasReg && st.opener && document.contains(st.opener)) back = st.opener;
  else if (wasEm) back = (st.emOpener && document.contains(st.emOpener) && st.emOpener !== document.body) ? st.emOpener : (currentTab() || edgeTab);
  if (back && typeof back.focus === 'function') back.focus({ preventScroll: true });
  st.opener = null; st.emOpener = null;
}
// the tab the user should land on after closing: the visible one
function currentTab() {
  const tabs = $$('[data-etab]');
  return tabs.find(t => !t.classList.contains('is-hidden') && getComputedStyle(t).opacity !== '0') || tabs[0];
}

/* ---------- tab: click, drag, keyboard ---------- */
function tabDown(e) {
  if (e.button !== undefined && e.button !== 0) return;
  drag = { x: e.clientX, p0: st.p, moved: false, tab: e.currentTarget };
  e.preventDefault();
  try { e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ }
}
function onMove(e) {
  if (!drag) return;
  const w = Math.max(320, window.innerWidth - 56);
  const dx = drag.x - e.clientX;
  if (Math.abs(dx) > 5) drag.moved = true;
  if (!drag.moved) return;
  setState({ p: Math.max(0, Math.min(1, drag.p0 + dx / w)), dragging: true });
}
function onUp() {
  const d = drag; if (!d) return; drag = null;
  if (!d.moved) { // a click without movement toggles
    if (d.p0 > 0.5) closeAll(); else openEmergency(d.tab);
    return;
  }
  const open = st.p > 0.3;
  if (open) { st.emOpener = d.tab; setState({ p: 1, dragging: false }); focusStrip(); }
  else setState({ p: 0, dragging: false });
}
function tabKey(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    if (st.p > 0.5) closeAll(); else openEmergency(e.currentTarget);
  }
}
export function bindTab(tab) {
  if (!tab) return;
  tab.addEventListener('pointerdown', tabDown);
  tab.addEventListener('keydown', tabKey);
  tab.addEventListener('click', e => e.preventDefault());
}

/* ---------- wiring ---------- */
function init() {
  fillEmergency();
  setInterval(fillEmergency, 60000);
  $$('[data-etab]').forEach(bindTab);
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && (st.p > 0 || st.reg)) { e.preventDefault(); closeAll(); return; }
    if (st.reg && reg && reg.contains(document.activeElement)) trapTab(e, reg);
    else if (st.p > 0.5 && strip && (strip.contains(document.activeElement) || document.activeElement === strip)) trapTab(e, strip);
  });
  if (scrim) scrim.addEventListener('click', closeAll);
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open-reg]'); if (o) { e.preventDefault(); openReg(o); return; }
    const m = e.target.closest('[data-open-em]'); if (m) { e.preventDefault(); openEmergency(m); return; }
    const c = e.target.closest('[data-close-all]'); if (c) { e.preventDefault(); closeAll(); }
  });
  if (reg) {
    const form = $('[data-reg-form]', reg);
    if (form) form.addEventListener('submit', e => {
      e.preventDefault();
      setState({ regDone: true });
      reg.scrollTop = 0;
      const t = $('[data-reg-done-ttl]', reg); if (t) t.focus({ preventScroll: true });
    });
    $$('[data-species] .chip', reg).forEach(c => c.addEventListener('click', () => setState({ sp: c.textContent.trim() })));
  }
  render();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

export const state = st;
export { $, $$, EASE, reduced, setState as _setState };
