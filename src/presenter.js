import * as THREE from 'three';
import { SECTIONS, STEPS } from './story.js';

// Drives the guided presentation: renders each step's card, runs its scene
// changes and handles the clicker / keyboard.
const CREW = 'Thailis · Alessandro · Jesus · Dyan · Abigail';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
// Texts may carry <mark> for highlights; everything else is escaped.
const rich = (s) => esc(s).replace(/&lt;(\/?)mark>/g, '<$1mark>');

export function createPresenter(ctx) {
  const body = document.body;
  const root = document.querySelector('#story');
  const card = root.querySelector('.story-card');
  const cover = root.querySelector('.story-cover');
  const dots = root.querySelector('.story-dots');
  let index = -1;
  let timers = [];

  // ---------- House build animation (cover) ----------
  let build = null;
  function startBuild() {
    const items = ctx.buildables.map((o) => ({ o, y: o.userData.buildY ??= o.position.y }));
    // Back of the house first, so it grows towards the audience.
    items.sort((a, b) => worldZ(a.o) - worldZ(b.o));
    items.forEach((it, i) => { it.delay = 0.3 + (i / items.length) * 2.2; it.o.position.y = it.y + 7; it.o.visible = false; });
    build = { items, t: 0 };
  }
  function worldZ(o) { const v = new THREE.Vector3(); o.getWorldPosition(v); return v.z * -1 + v.x * 0.15; }
  function finishBuild() {
    if (!build) return;
    for (const it of build.items) { it.o.position.y = it.y; it.o.visible = true; }
    build = null;
  }

  // ---------- Context given to every step ----------
  const c = {
    ...ctx,
    base({ lights = [], labels = true, wifi = false } = {}) {
      timers.forEach(clearTimeout);
      timers = [];
      finishBuild();
      ctx.callouts.clear();
      for (const id of Object.keys(ctx.rooms)) ctx.setLight(id, lights.includes(id), ctx.LAMP);
      ctx.devices.setTv(false);
      ctx.devices.setWasher(false);
      ctx.devices.setAc(false);
      ['microwave', 'coffee', 'dishwasher'].forEach((k) => ctx.devices.setKitchen(k, false));
      Object.assign(ctx.devices.fridge, { open: false, warned: true });
      ctx.setWifi(wifi);
      ctx.setDay(false);
      ctx.controls.autoRotate = false;
      if (ctx.robot.state.mode !== 'docked') ctx.robot.dock();
      body.classList.toggle('hide-labels', !labels);
    },
    later(ms, fn) { timers.push(setTimeout(fn, ms)); },
    fly(pose, dur = 1.3) { ctx.goTo(pose, dur); },
    look(target, off, dur = 1.4) {
      // Offsets give the direction; keep enough distance to see the room around it.
      const dir = new THREE.Vector3(...off).multiplyScalar(1.75);
      ctx.goTo({ pos: target.clone().add(dir), target: target.clone() }, dur);
    },
    orbit(on, speed = 0.5) { ctx.controls.autoRotate = on; ctx.controls.autoRotateSpeed = speed; },
    build: startBuild,
    alexaOrder(room) { ctx.runOrder(`enciende la luz de ${ctx.roomName(room)}`); },
  };

  // ---------- Rendering ----------
  dots.innerHTML = SECTIONS.map((s) => `<button type="button" class="story-dot" data-section="${s.id}"><span>${s.name}</span></button>`).join('');
  dots.addEventListener('click', (e) => {
    const id = e.target.closest('[data-section]')?.dataset.section;
    if (id) go(STEPS.findIndex((s) => s.section === id));
  });

  function renderCard(step) {
    const section = SECTIONS.find((s) => s.id === step.section);
    const parts = [];
    parts.push(`<p class="story-eyebrow">${section.name}${step.counter ? `<span>${step.counter[0]} de ${step.counter[1]}</span>` : ''}</p>`);
    if (step.title) parts.push(`<h2>${esc(step.title)}</h2>`);
    if (step.lead) parts.push(`<p class="story-lead">${esc(step.lead)}</p>`);
    for (const p of step.paragraphs ?? []) parts.push(`<p class="story-text">${rich(p)}</p>`);
    if (step.item) {
      const it = step.item;
      parts.push('<div class="story-item">');
      if (it.name) parts.push(`<h3>${esc(it.name)}</h3>`);
      parts.push(`<p class="story-text">${esc(it.text)}</p>`);
      if (it.quote) parts.push(`<p class="story-quote">${esc(it.quote)}</p>`);
      if (it.example) parts.push(`<p class="story-example"><b>Por ejemplo:</b> ${esc(it.example)}</p>`);
      if (it.note) parts.push(`<p class="story-note">${esc(it.note)}</p>`);
      parts.push('</div>');
    }
    if (step.meter) {
      parts.push(`<div class="story-meter"><p>Consumo de energía <small>(ejemplo)</small></p><div class="meter-track"><div class="meter-fill" style="width:${step.meter.from}%"></div></div><b class="meter-value">${step.meter.from}%</b></div>`);
    }
    if (step.led) {
      parts.push('<div class="story-led"><div><span>LED</span><i style="--w:15%"></i><b>9 W</b></div><div><span>Tradicional</span><i style="--w:100%"></i><b>60 W</b></div></div>');
    }
    if (step.ask) parts.push('<p class="story-hint">Mantén presionado el anillo de Alexa (o la barra espaciadora) y pregúntale.</p>');
    card.innerHTML = parts.join('');
    card.classList.remove('is-in');
    void card.offsetWidth;
    card.classList.add('is-in');
    if (step.meter) {
      const fill = card.querySelector('.meter-fill');
      const value = card.querySelector('.meter-value');
      setTimeout(() => { fill.style.width = `${step.meter.to}%`; value.textContent = `${step.meter.to}%`; }, 900);
    }
  }

  function renderCover(step) {
    cover.innerHTML = step.thanks
      ? `<p class="cover-eyebrow">La Informática en el Hogar</p><h1>¡Gracias!</h1><p class="cover-crew">${CREW}</p><p class="cover-grade">6to A</p>`
      : `<p class="cover-eyebrow">Proyecto escolar · 6to A</p><h1>La Informática <span>en el Hogar</span></h1><p class="cover-crew">${CREW}</p><p class="cover-hint">Presiona → para empezar</p><p class="cover-version">versión ${__BUILD__}</p>`;
    cover.classList.remove('is-in');
    void cover.offsetWidth;
    cover.classList.add('is-in');
  }

  function go(i) {
    if (i < 0 || i >= STEPS.length || i === index) return;
    index = i;
    const step = STEPS[i];
    body.classList.toggle('mode-story', !step.demo);
    body.classList.toggle('mode-demo', !!step.demo);
    body.classList.toggle('show-talk', !!step.ask);
    const full = !!(step.cover || step.thanks);
    body.classList.toggle('story-full', full);
    card.hidden = full || !!step.demo;
    cover.hidden = !full;
    if (full) renderCover(step);
    else if (!step.demo) renderCard(step);
    dots.querySelectorAll('.story-dot').forEach((d) => {
      const at = SECTIONS.findIndex((s) => s.id === d.dataset.section);
      const now = SECTIONS.findIndex((s) => s.id === step.section);
      d.classList.toggle('is-active', at === now);
      d.classList.toggle('is-done', at < now);
    });
    ctx.onModeChange();
    step.enter(c);
    window.__casaStep = { index: i, section: step.section };
  }

  const next = () => go(index + 1);
  const prev = () => go(index - 1);
  root.querySelector('.story-next').addEventListener('click', next);
  root.querySelector('.story-prev').addEventListener('click', prev);
  document.querySelector('#story-resume').addEventListener('click', next);

  // Capture phase: decide before the push-to-talk handler sees the Space key.
  window.addEventListener('keydown', (e) => {
    if (e.target.closest?.('input, textarea')) return;
    const talking = body.classList.contains('mode-demo') || body.classList.contains('show-talk');
    const onButton = !!e.target.closest?.('button');
    if (e.code === 'Space' && !talking) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (!e.repeat) next();
      return;
    }
    if (e.repeat) return;
    if (['ArrowRight', 'PageDown'].includes(e.key) || (e.key === 'Enter' && !onButton)) { e.preventDefault(); next(); }
    if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
  }, true);

  // Swipe left / right on the text card to change slides (iPad). Dragging on
  // the house keeps rotating the map.
  let swipe = null;
  card.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1 || e.target.closest('button')) { swipe = null; return; }
    swipe = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });
  card.addEventListener('touchend', (e) => {
    if (!swipe) return;
    const dx = e.changedTouches[0].clientX - swipe.x;
    const dy = e.changedTouches[0].clientY - swipe.y;
    swipe = null;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0) next(); else prev();
  });

  return {
    go,
    next,
    prev,
    get index() { return index; },
    demoIndex: STEPS.findIndex((s) => s.demo),
    get active() { return index >= 0 && !STEPS[index].demo; },
    update(dt) {
      if (!build) return;
      build.t += dt;
      let left = 0;
      for (const it of build.items) {
        const k = Math.min(1, Math.max(0, (build.t - it.delay) / 0.55));
        if (k > 0) it.o.visible = true;
        const e = 1 - Math.pow(1 - k, 3);
        it.o.position.y = it.y + (1 - e) * 7;
        if (k < 1) left++;
      }
      if (!left) build = null;
    },
  };
}
