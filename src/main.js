import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { buildHouse } from './house.js';
import { buildDevices } from './devices.js';
import { buildRobot } from './robot.js';
import { buildWifi, buildBeams, buildBursts } from './fx.js';
import { parseCommand, COLORS, GRAMMAR_WORDS, ROOMS as ROOM_NAMES } from './commands.js';
import { REPLY } from './replies.js';
import { INFO } from './info.js';
import { sfx, speak, stopSpeaking } from './audio.js';
import { createVoice } from './voice.js';
import { createCallouts } from './callouts.js';
import { createPresenter } from './presenter.js';
import { setupOffline } from './offline.js';

const $ = (sel) => document.querySelector(sel);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const lerp = (a, b, k) => a + (b - a) * k;
const LAMP = 0xffc77a;

// ---------- Scene ----------
const stage = $('#stage');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
stage.appendChild(renderer.domElement);

const labels = new CSS2DRenderer();
labels.domElement.className = 'labels';
stage.appendChild(labels.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
const VIEWS = {
  maqueta: { pos: new THREE.Vector3(-21.5, 19.5, 2.2), target: new THREE.Vector3(0.6, 0, -0.2) },
  arriba: { pos: new THREE.Vector3(0, 40, 1.4), target: new THREE.Vector3(0, 0, 0.3) },
  bano: { pos: new THREE.Vector3(-10.5, 8.5, 3.2), target: new THREE.Vector3(-3.6, 0, 0.1) },
};
camera.position.copy(VIEWS.maqueta.pos);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(VIEWS.maqueta.target);
controls.enableDamping = true;
controls.maxPolarAngle = 1.3;
controls.minDistance = 7;
controls.maxDistance = 42;

const hemi = new THREE.HemisphereLight(0x8d86d6, 0x2a2140, 0.55);
scene.add(hemi);
const moon = new THREE.DirectionalLight(0xc7c3ff, 0.55);
moon.position.set(-10, 18, 8);
moon.castShadow = true;
moon.shadow.mapSize.set(2048, 2048);
Object.assign(moon.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 50 });
moon.shadow.bias = -0.0005;
scene.add(moon);

const { group: houseGroup, rooms } = buildHouse();
scene.add(houseGroup);
const devices = buildDevices(scene, rooms);
const robot = buildRobot(scene, rooms);
const beams = buildBeams(scene);
const bursts = buildBursts(scene);
const wifi = buildWifi(scene, devices.anchors.router(), [
  devices.anchors.echo(), devices.anchors.tv(), devices.anchors.fridge(), devices.anchors.washer(),
  devices.anchors.ac(), robot.body.position.clone().setY(0.3),
  ...Object.keys(rooms).map((r) => rooms[r].bulb.position.clone()),
]);

// Lights start on in the rooms where the family is (it is evening).
for (const id of ['sala', 'cocina', 'ninos', 'pasillo']) rooms[id].on = true;

const LIGHT_POWER = 5.5;
let daytime = false;
function updateLights() {
  for (const room of Object.values(rooms)) {
    room.level = lerp(room.level, room.on ? 1 : 0, 0.12);
    const color = new THREE.Color(room.color);
    room.light.color.copy(color);
    room.light.intensity = room.level * LIGHT_POWER * (daytime ? 0.4 : 1);
    room.bulb.material.emissive.copy(color);
    room.bulb.material.emissiveIntensity = room.level * 2.4;
    room.bulb.material.color.set(room.level > 0.5 ? 0xffffff : 0x9b9bb4);
    room.halo.material.color.copy(color);
    room.halo.material.opacity = room.level * 0.85;
  }
}

function setDaytime(on) {
  daytime = on;
  document.body.classList.toggle('is-day', on);
}

function updateSky() {
  const k = daytime ? 1 : 0;
  hemi.intensity = lerp(hemi.intensity, daytime ? 1.5 : 0.55, 0.06);
  hemi.color.lerp(new THREE.Color(daytime ? 0xdff1ff : 0x8d86d6), 0.06);
  hemi.groundColor.lerp(new THREE.Color(daytime ? 0x6c8f5a : 0x2a2140), 0.06);
  moon.intensity = lerp(moon.intensity, daytime ? 2.2 : 0.55, 0.06);
  moon.color.lerp(new THREE.Color(daytime ? 0xfff2d8 : 0xc7c3ff), 0.06);
  return k;
}

// ---------- Camera tween ----------
let tween = null;
// Accepts a named view or a { pos, target } pose.
function goTo(view, duration = 1.1) {
  const v = typeof view === 'string' ? VIEWS[view] : view;
  tween = { fromPos: camera.position.clone(), fromT: controls.target.clone(), to: v, t: 0, duration };
}

function resize() {
  const w = stage.clientWidth;
  const h = stage.clientHeight;
  renderer.setSize(w, h);
  labels.setSize(w, h);
  camera.aspect = w / h;
  // Keep the house centered in the free area: the orders panel takes the
  // right side and the Alexa bar the bottom.
  const panel = document.querySelector('#orders');
  // In the presentation the story card covers the left side instead.
  const story = document.body.classList;
  let shiftX;
  if (story.contains('mode-story')) shiftX = story.contains('story-full') || w <= 900 ? 0 : -Math.min(620, w * 0.44) / 2;
  else shiftX = (panel && !panel.classList.contains('is-collapsed') && w > 900 ? 330 : 0) / 2;
  const shiftY = story.contains('story-full') ? -h * 0.14 : story.contains('mode-story') && !story.contains('show-talk') ? 0 : 50;
  camera.setViewOffset(w, h, shiftX, shiftY, w, h);
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

// ---------- UI helpers ----------
const ui = {
  you: $('#bubble-you'),
  alexa: $('#bubble-alexa'),
  ring: $('#alexa-ring'),
  hint: $('#ring-hint'),
  status: $('#voice-status'),
  toasts: $('#toasts'),
  card: $('#info-card'),
  flow: [...document.querySelectorAll('.flow li')],
};

function showYou(text) {
  ui.you.querySelector('p').textContent = text;
  ui.you.hidden = false;
}
function showAlexa(text) {
  ui.alexa.querySelector('p').textContent = text;
  ui.alexa.hidden = false;
}
function setFlow(step) {
  ui.flow.forEach((li, i) => {
    li.classList.toggle('is-active', i + 1 === step);
    li.classList.toggle('is-done', step > 0 && i + 1 < step);
  });
}
function setRing(state) {
  ui.ring.dataset.state = state;
  devices.setAlexa(state);
}
function toast(text, kind = 'info') {
  const el = document.createElement('div');
  el.className = `toast toast--${kind}`;
  el.textContent = text;
  ui.toasts.appendChild(el);
  setTimeout(() => el.classList.add('is-leaving'), 4200);
  setTimeout(() => el.remove(), 4800);
}

let speaking = Promise.resolve();
function alexaSay(text) {
  showAlexa(text);
  setRing('speaking');
  speaking = new Promise((resolve) => {
    speak(text, {
      onEnd: () => {
        if (ui.ring.dataset.state === 'speaking') setRing('idle');
        setFlow(0);
        resolve();
      },
    });
  });
  return speaking;
}

// ---------- Orders ----------
const setLight = (roomId, on, color) => {
  rooms[roomId].on = on;
  if (color !== undefined) rooms[roomId].color = color;
};

function plan(intent) {
  const a = devices.anchors;
  const robotPos = () => robot.body.position.clone().setY(0.35);
  switch (intent.type) {
    case 'light': {
      const room = rooms[intent.room];
      if (room.on === intent.on) return { reply: intent.on ? REPLY.lightAlreadyOn(intent.room) : REPLY.lightAlreadyOff(intent.room), targets: [a.light(intent.room)] };
      return { targets: [a.light(intent.room)], apply: () => setLight(intent.room, intent.on), reply: intent.on ? REPLY.lightOn(intent.room) : REPLY.lightOff(intent.room) };
    }
    case 'light.color':
      return { targets: [a.light(intent.room)], apply: () => setLight(intent.room, true, COLORS[intent.color]), reply: REPLY.lightColor(intent.room, intent.color) };
    case 'light.all':
      return {
        targets: Object.keys(rooms).map((r) => a.light(r)),
        apply: () => Object.keys(rooms).forEach((r) => setLight(r, intent.on, intent.on ? LAMP : undefined)),
        reply: intent.on ? REPLY.allOn() : REPLY.allOff(),
      };
    case 'robot.clean':
      return { targets: [robotPos()], apply: () => robot.clean(intent.room), reply: intent.room === 'bano' ? REPLY.robotTryBath() : REPLY.robotClean(intent.room) };
    case 'robot.dock':
      if (robot.state.mode === 'docked') return { reply: REPLY.robotAlreadyDocked() };
      return { targets: [robotPos()], apply: () => robot.dock(), reply: REPLY.robotDock() };
    case 'device': {
      const map = {
        tv: [a.tv, (on) => devices.setTv(on), REPLY.tvOn, REPLY.tvOff],
        washer: [a.washer, (on) => devices.setWasher(on), REPLY.washerOn, REPLY.washerOff],
        ac: [a.ac, (on) => devices.setAc(on), REPLY.acOn, REPLY.acOff],
      }[intent.device];
      return { targets: [map[0]()], apply: () => map[1](intent.on), reply: intent.on ? map[2]() : map[3]() };
    }
    case 'scene.night':
      return {
        targets: [...Object.keys(rooms).map((r) => a.light(r)), a.tv()],
        apply: () => { Object.keys(rooms).forEach((r) => setLight(r, false)); devices.setTv(false); robot.dock(); },
        reply: REPLY.night(),
      };
    case 'scene.morning':
      return { targets: [a.light('sala'), a.light('cocina')], apply: () => { setLight('sala', true, LAMP); setLight('cocina', true, LAMP); }, reply: REPLY.morning() };
    case 'talk.think': return { reply: REPLY.think() };
    case 'talk.whoami': return { reply: REPLY.whoami() };
    case 'talk.hello': return { reply: REPLY.hello() };
    case 'talk.thanks': return { reply: REPLY.thanks() };
    case 'wake': return { reply: REPLY.wake() };
    case 'empty': return { reply: REPLY.empty(), error: true };
    default: return { reply: REPLY.unknown(), error: true };
  }
}

let busy = false;
async function runOrder(text, { fromVoice = false, handsFree = false } = {}) {
  const intent = parseCommand(text);
  if (handsFree && !intent.wake) return;
  if (busy) return;
  busy = true;
  try {
    showYou(text ? capitalize(text) : '…');
    ui.alexa.hidden = true;
    setFlow(1);
    setRing('thinking');
    await wait(fromVoice ? 250 : 450);
    setFlow(2);
    await wait(500);
    const p = plan(intent);
    if (p.error) sfx.error();
    if (p.targets?.length) {
      setFlow(3);
      const from = [devices.anchors.echo(), devices.anchors.router()];
      await Promise.all(p.targets.map((t, i) => wait(i * 60).then(() => beams.send([...from, t], 1.3))));
      p.targets.forEach((t) => bursts.at(t));
      p.apply?.();
      sfx.ok();
      setFlow(4);
    }
    await alexaSay(p.reply);
  } finally {
    busy = false;
  }
}

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Events coming from the house itself (sensors, robot).
devices.bathroom.onEvent = (ev) => {
  if (ev === 'motion-on') { focusBathroom(); setLight('bano', true, LAMP); toast('Sensor de movimiento: detectó a alguien y encendió la luz del baño.', 'sensor'); }
  if (ev === 'motion-off') { setTimeout(releaseBathroom, 1200); setLight('bano', false); toast('Sensor de movimiento: ya no hay nadie. Apagó la luz del baño.', 'sensor'); }
  if (ev === 'flush') { sfx.flush(); toast('Sensor sin contacto: detectó la mano y descargó la taza.', 'sensor'); }
  if (ev === 'fridge-open') { sfx.beep(); toast('¡La puerta de la heladera quedó abierta! Ciérrala para no gastar energía.', 'warn'); }
};
robot.state.onEvent = (ev, room) => {
  if (ev === 'blocked') { sfx.error(); toast('El robot se detuvo: hay un escalón en la puerta del baño.', 'warn'); }
  if (ev === 'blocked-returning') alexaSay(REPLY.robotBlocked());
  if (ev === 'clean-done') toast(`${REPLY.robotDone(room)} Vuelve a su base.`, 'info');
  if (ev === 'docked') toast('El robot llegó a su base y se está cargando.', 'info');
};

// The camera zooms into the bathroom while the sensors are working.
let bathFocus = false;
function focusBathroom() {
  if (bathFocus || presenter.active) return;
  bathFocus = true;
  goTo('bano');
}
function releaseBathroom() {
  if (!bathFocus || presenter.active) { bathFocus = false; return; }
  bathFocus = false;
  goTo(view);
}

// ---------- Info cards & clicks ----------
let cardFor = null;
function showCard(kind, id) {
  const info = INFO[kind];
  if (!info) return;
  cardFor = id;
  ui.card.querySelector('h3').textContent = kind === 'light' ? `${info.title} · ${rooms[id.split(':')[1]].label}` : info.title;
  ui.card.querySelector('.card-body').textContent = info.body;
  ui.card.querySelector('.card-fact').textContent = info.fact;
  const btn = ui.card.querySelector('.card-action');
  btn.hidden = !info.action;
  btn.textContent = info.action ?? '';
  ui.card.hidden = false;
}
$('#info-close').addEventListener('click', () => { ui.card.hidden = true; });

let clock = 0;
function act(id) {
  if (id.startsWith('light:')) {
    const r = id.split(':')[1];
    setLight(r, !rooms[r].on, rooms[r].on ? undefined : rooms[r].color);
    sfx.click();
  } else if (id === 'fridge') {
    const open = devices.toggleFridge(clock);
    sfx.click();
    if (!open) toast('Puerta de la heladera cerrada.', 'info');
  } else if (id === 'motion') {
    if (!devices.personEnter()) toast('Ya hay alguien en el baño.', 'info');
  } else if (id === 'flush' || id === 'toilet') {
    devices.waveHand();
  }
}
ui.card.querySelector('.card-action').addEventListener('click', () => cardFor && act(cardFor));

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let downAt = null;
function pick(ev) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.set(((ev.clientX - rect.left) / rect.width) * 2 - 1, -((ev.clientY - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObjects(scene.children, true).find((h) => h.object.userData.pick);
  return hit?.object.userData.pick ?? null;
}
renderer.domElement.addEventListener('pointerdown', (e) => { downAt = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6) return;
  const id = pick(e);
  if (!id) return;
  const kind = id.startsWith('light:') ? 'light' : id;
  showCard(kind, id);
  if (kind === 'light' || id === 'fridge') act(id);
  if (id === 'tv') { devices.setTv(!devices.tv.on); sfx.click(); }
  if (id === 'washer') { devices.setWasher(!devices.washer.on); sfx.click(); }
  if (id === 'ac') { devices.setAc(!devices.ac.on); sfx.click(); }
  if (id === 'router') { wifiStrong = !wifiStrong; wifi.setStrong(wifiStrong); syncToggles(); }
});
renderer.domElement.addEventListener('pointermove', (e) => {
  renderer.domElement.style.cursor = pick(e) ? 'pointer' : '';
});

// ---------- Toolbar ----------
let wifiStrong = false;
let view = 'maqueta';
function syncToggles() {
  $('#toggle-wifi').setAttribute('aria-pressed', String(wifiStrong));
  $('#toggle-day').setAttribute('aria-pressed', String(daytime));
  $('#toggle-day').textContent = daytime ? 'Noche' : 'Día';
  $('#toggle-view').textContent = view === 'maqueta' ? 'Ver desde arriba' : 'Ver maqueta';
}
$('#toggle-wifi').addEventListener('click', () => { wifiStrong = !wifiStrong; wifi.setStrong(wifiStrong); syncToggles(); });
$('#toggle-day').addEventListener('click', () => { setDaytime(!daytime); syncToggles(); });
$('#toggle-view').addEventListener('click', () => { view = view === 'maqueta' ? 'arriba' : 'maqueta'; bathFocus = false; goTo(view); syncToggles(); });
$('#toggle-orders').addEventListener('click', () => {
  const panel = $('#orders');
  const open = panel.classList.toggle('is-collapsed');
  $('#toggle-orders').setAttribute('aria-expanded', String(!open));
  resize();
});
syncToggles();

document.querySelectorAll('[data-say]').forEach((btn) => {
  btn.addEventListener('click', () => { sfx.unlock(); runOrder(btn.dataset.say); });
});
document.querySelectorAll('[data-act]').forEach((btn) => {
  btn.addEventListener('click', () => { sfx.unlock(); act(btn.dataset.act); });
});

// ---------- Voice ----------
const voice = createVoice({
  grammar: GRAMMAR_WORDS,
  onPartial: (text) => { if (ui.ring.dataset.state === 'listening') showYou(capitalize(text) + '…'); },
  onResult: (text, source) => runOrder(text, { fromVoice: true, handsFree: source === 'handsfree' }),
  onStatus: (s) => setVoiceStatus(s),
});

function setVoiceStatus(s, detail) {
  ui.status.dataset.state = s;
  ui.status.textContent = {
    loading: 'Preparando el oído de Alexa…',
    ready: 'Alexa está lista',
    error: detail ?? 'La voz no está disponible. Usa los botones de órdenes.',
  }[s];
  ui.hint.textContent = s === 'ready' ? 'Mantén presionado el anillo (o la barra espaciadora) y habla' : s === 'loading' ? 'Mientras tanto, prueba los botones de órdenes' : 'Usa los botones de órdenes de la derecha';
  $('#handsfree').disabled = s !== 'ready';
}

if (location.protocol === 'file:') document.querySelector('#file-warning').hidden = false;
voice.load().catch((err) => {
  const msg = err.message === 'file-protocol'
    ? 'Abriste el archivo equivocado. Cierra Chrome y haz doble clic en «Abrir Casa Inteligente» dentro de la carpeta.'
    : 'La voz no está disponible. Usa los botones de órdenes.';
  setVoiceStatus('error', msg);
  console.error(err);
});

let holding = false;
async function startListening() {
  sfx.unlock();
  if (!voice.ready || holding || busy) {
    if (!voice.ready) toast(ui.status.textContent, 'info');
    return;
  }
  holding = true;
  speechSynthesis.cancel();
  try {
    await voice.startPush();
  } catch (e) {
    holding = false;
    toast('No pude usar el micrófono. Revisa el permiso de Chrome.', 'warn');
    return;
  }
  sfx.listen();
  setRing('listening');
  setFlow(1);
  showYou('Escuchando…');
  ui.alexa.hidden = true;
}
async function stopListening() {
  if (!holding) return;
  holding = false;
  sfx.stop();
  setRing('thinking');
  const text = await voice.stopPush();
  runOrder(text, { fromVoice: true });
}
ui.ring.addEventListener('pointerdown', (e) => { e.preventDefault(); ui.ring.setPointerCapture(e.pointerId); startListening(); });
ui.ring.addEventListener('pointerup', stopListening);
ui.ring.addEventListener('pointercancel', stopListening);
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !e.repeat && !e.target.closest?.('button, input')) { e.preventDefault(); startListening(); }
});
window.addEventListener('keyup', (e) => { if (e.code === 'Space') { e.preventDefault(); stopListening(); } });

$('#handsfree').addEventListener('change', async (e) => {
  try {
    await voice.setHandsFree(e.target.checked);
    toast(e.target.checked ? 'Manos libres: empieza cada orden diciendo «Alexa».' : 'Manos libres desactivado.', 'info');
    setRing(e.target.checked ? 'idle' : 'idle');
  } catch {
    e.target.checked = false;
    toast('No pude usar el micrófono. Revisa el permiso de Chrome.', 'warn');
  }
});

// ---------- Loop ----------
const timer = new THREE.Clock();
function frame() {
  const dt = Math.min(timer.getDelta(), 0.05);
  clock += dt;
  if (tween) {
    tween.t = Math.min(1, tween.t + dt / tween.duration);
    const k = 1 - Math.pow(1 - tween.t, 3);
    camera.position.lerpVectors(tween.fromPos, tween.to.pos, k);
    controls.target.lerpVectors(tween.fromT, tween.to.target, k);
    if (tween.t >= 1) tween = null;
  }
  controls.update();
  updateSky();
  updateLights();
  devices.update(dt, clock);
  robot.update(dt, clock);
  presenter.update(dt);
  wifi.update(dt, clock);
  beams.update(dt);
  bursts.update(dt);
  renderer.render(scene, camera);
  labels.render(scene, camera);
  requestAnimationFrame(frame);
}

// ---------- Presentation ----------
const callouts = createCallouts(scene);
const roomCenter = (id) => new THREE.Vector3(rooms[id].bounds.cx, 0.4, rooms[id].bounds.cz);
const presenter = createPresenter({
  rooms, devices, robot, callouts, controls, runOrder, goTo,
  LAMP,
  anchors: devices.anchors,
  buildables: [...houseGroup.children, devices.echo.group, devices.tv.group, devices.fridge.group, devices.washer.group, devices.ac.group,
    devices.kitchen.microwave.group, devices.kitchen.coffee.group, devices.kitchen.dishwasher.group, devices.bath.toilet, robot.body],
  setLight,
  setWifi(on) { wifiStrong = on; wifi.setStrong(on); syncToggles(); },
  setDay(on) { setDaytime(on); syncToggles(); },
  personEnter: () => devices.personEnter(),
  now: () => clock,
  roomName: (id) => ROOM_NAMES[id].name,
  poses: {
    cover: { pos: new THREE.Vector3(-17, 15, 13), target: new THREE.Vector3(0.6, 0, -0.2) },
    overview: VIEWS.maqueta,
    bano: VIEWS.bano,
    sala: { pos: roomCenter('sala').add(new THREE.Vector3(-9.5, 9, 4.5)), target: roomCenter('sala').add(new THREE.Vector3(0, 0, -0.6)) },
  },
  onModeChange() {
    const story = document.body.classList.contains('mode-story');
    controls.minDistance = story ? 2.5 : 7;
    ui.card.hidden = true;
    ui.you.hidden = true;
    ui.alexa.hidden = true;
    setFlow(0);
    resize();
  },
});
presenter.go(location.hash.includes('demo') ? presenter.demoIndex : 0);
// Sound only works after the first touch or key press (iPad Safari).
for (const ev of ['pointerdown', 'keydown', 'touchend']) window.addEventListener(ev, () => sfx.unlock(), { capture: true, passive: true });
setupOffline();

// Small hook for automated checks.
window.__casa = { rooms, robot, devices, runOrder, voice, goTo, presenter };
window.__casaCam = () => camera.position.toArray().map((n) => n.toFixed(2)).join(',');
frame();
