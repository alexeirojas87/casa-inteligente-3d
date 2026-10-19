import * as THREE from 'three';
import { box, cyl, mat, haloTexture, WALL_HEIGHT } from './house.js';
import { DEVICE_SPOTS, toWorld } from './plan.js';

const spot = (id) => toWorld(...DEVICE_SPOTS[id]);
const lerp = (a, b, k) => a + (b - a) * k;

function tag(obj, id) {
  obj.traverse((o) => { o.userData.pick = id; });
  return obj;
}

function tvTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 144;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const g = c.getContext('2d');
  const draw = (t, on) => {
    if (!on) { g.fillStyle = '#10131c'; g.fillRect(0, 0, 256, 144); tex.needsUpdate = true; return; }
    const sky = g.createLinearGradient(0, 0, 0, 144);
    sky.addColorStop(0, '#5ec8ff'); sky.addColorStop(1, '#c9f1ff');
    g.fillStyle = sky; g.fillRect(0, 0, 256, 144);
    g.fillStyle = '#ffd23f';
    g.beginPath(); g.arc(200, 34 + Math.sin(t * 2) * 6, 18, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#3ddc84';
    g.beginPath(); g.moveTo(0, 144);
    for (let x = 0; x <= 256; x += 8) g.lineTo(x, 108 + Math.sin(x / 30 + t * 3) * 8);
    g.lineTo(256, 144); g.fill();
    const bx = 30 + ((t * 70) % 200);
    const by = 96 - Math.abs(Math.sin(t * 5)) * 40;
    g.fillStyle = '#ff4d4d'; g.beginPath(); g.arc(bx, by, 12, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(bx + 4, by - 3, 3.5, 0, Math.PI * 2); g.fill();
    tex.needsUpdate = true;
  };
  return { tex, draw };
}

function makeEcho() {
  const p = spot('echo');
  const g = new THREE.Group();
  g.position.set(p.x, 0.48, p.z);
  g.add(cyl(0.17, 0.18, 0.16, 0x2a3350, 0, 0.08, 0, 32));
  g.add(cyl(0.16, 0.16, 0.012, 0x1b2236, 0, 0.165, 0, 32));
  const ringMat = new THREE.MeshStandardMaterial({ color: 0x2fd6ff, emissive: 0x2fd6ff, emissiveIntensity: 0.15 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.018, 10, 40), ringMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.17;
  g.add(ring);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTexture(), color: 0x2fd6ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.scale.set(1.3, 1.3, 1);
  glow.position.y = 0.2;
  g.add(glow);
  const light = new THREE.PointLight(0x2fd6ff, 0, 2.5, 1.5);
  light.position.y = 0.4;
  g.add(light);
  return { group: tag(g, 'echo'), ringMat, glow, light, state: 'idle' };
}

function makeRouter() {
  const p = spot('router');
  const g = new THREE.Group();
  g.position.set(p.x, 0.44, p.z - 0.05);
  g.add(box(0.42, 0.08, 0.24, 0xf4f4f6, 0, 0.04, 0));
  for (const dx of [-0.15, 0.15]) {
    const a = box(0.025, 0.32, 0.025, 0x2b2b33, dx, 0.22, -0.08);
    a.rotation.z = dx * 1.2;
    g.add(a);
  }
  const ledMat = new THREE.MeshStandardMaterial({ color: 0x3ddc84, emissive: 0x3ddc84, emissiveIntensity: 1 });
  for (let i = 0; i < 3; i++) {
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 6), ledMat);
    led.position.set(-0.08 + i * 0.08, 0.06, 0.121);
    g.add(led);
  }
  return { group: tag(g, 'router'), ledMat };
}

function makeTv() {
  const p = spot('tv');
  const g = new THREE.Group();
  g.position.set(p.x, 0, p.z + 0.12);
  g.add(box(1.5, 0.3, 0.35, 0x8a6a4c, 0, 0.23, 0));
  g.add(box(1.36, 0.8, 0.05, 0x111318, 0, 0.88, -0.06));
  const { tex, draw } = tvTexture();
  const screenMat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.28, 0.72), screenMat);
  screen.position.set(0, 0.88, -0.03);
  g.add(screen);
  const light = new THREE.PointLight(0x7fd2ff, 0, 3, 1.5);
  light.position.set(0, 0.9, 0.5);
  g.add(light);
  draw(0, false);
  return { group: tag(g, 'tv'), draw, light, on: false };
}

function makeFridge() {
  const p = spot('fridge');
  const g = new THREE.Group();
  g.position.set(p.x, 0, p.z + 0.15);
  g.add(box(0.7, 1.45, 0.65, 0xdfe4ea, 0, 0.78, 0, { metalness: 0.3, roughness: 0.4 }));
  const pivot = new THREE.Group();
  pivot.position.set(-0.35, 0, 0.33);
  const door = box(0.7, 1.43, 0.06, 0xeef1f5, 0.35, 0.78, 0.03, { metalness: 0.3, roughness: 0.35 });
  pivot.add(door);
  const panel = box(0.2, 0.12, 0.01, 0x1b2236, 0.5, 1.15, 0.065, { emissive: 0x2fd6ff, emissiveIntensity: 0.6 });
  pivot.add(panel);
  pivot.add(box(0.03, 0.5, 0.04, 0x9aa3ad, 0.62, 0.9, 0.08));
  g.add(pivot);
  const inner = new THREE.PointLight(0xdff6ff, 0, 1.6, 1.5);
  inner.position.set(0, 0.9, 0.4);
  g.add(inner);
  return { group: tag(g, 'fridge'), pivot, panel, inner, open: false, openedAt: 0, warned: false };
}

function makeWasher() {
  const p = spot('washer');
  const g = new THREE.Group();
  g.position.set(p.x, 0, p.z);
  g.rotation.y = Math.PI / 2; // door faces the corridor
  const body = new THREE.Group();
  body.add(box(0.6, 0.8, 0.55, 0xf4f4f6, 0, 0.45, 0));
  body.add(box(0.6, 0.12, 0.02, 0xdfe3e8, 0, 0.78, 0.28));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.035, 10, 32), mat(0xb8c0cc, { metalness: 0.5 }));
  ring.position.set(0, 0.42, 0.285);
  body.add(ring);
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#3a6fd8'; ctx.fillRect(0, 0, 64, 64);
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.arc(32 + Math.cos(i) * 18, 32 + Math.sin(i) * 18, 6, 0, 7); ctx.fill(); }
  ctx.fillStyle = '#ffd23f'; ctx.fillRect(14, 26, 18, 12);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const drum = new THREE.Mesh(new THREE.CircleGeometry(0.165, 32), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3 }));
  drum.position.set(0, 0.42, 0.281);
  body.add(drum);
  const led = box(0.05, 0.03, 0.01, 0x3ddc84, 0.2, 0.78, 0.29, { emissive: 0x3ddc84, emissiveIntensity: 0 });
  body.add(led);
  g.add(body);
  return { group: tag(g, 'washer'), body, drum, led, on: false };
}

// Kitchen appliances from the report: microwave, coffee maker, dishwasher.
function makeKitchen() {
  const mw = new THREE.Group();
  let p = toWorld(700, 893);
  mw.position.set(p.x, 0.725, p.z + 0.05);
  mw.add(box(0.55, 0.32, 0.38, 0x2e3142, 0, 0.16, 0));
  const mwWindow = box(0.34, 0.22, 0.01, 0x111318, -0.06, 0.16, 0.191, { emissive: 0xffb04a, emissiveIntensity: 0 });
  mw.add(mwWindow);
  const mwDisplay = box(0.1, 0.04, 0.01, 0x111318, 0.2, 0.24, 0.191, { emissive: 0x3ddc84, emissiveIntensity: 0.8 });
  mw.add(mwDisplay);
  const mwLight = new THREE.PointLight(0xffb04a, 0, 1.2, 1.5);
  mwLight.position.set(0, 0.2, 0.4);
  mw.add(mwLight);

  const coffee = new THREE.Group();
  p = toWorld(560, 893);
  coffee.position.set(p.x, 0.725, p.z + 0.05);
  coffee.add(box(0.22, 0.34, 0.24, 0x8a2e2e, 0, 0.17, -0.02));
  coffee.add(box(0.22, 0.04, 0.3, 0x2b2b33, 0, 0.36, 0.01));
  const cup = cyl(0.045, 0.04, 0.08, 0xffffff, 0, 0.06, 0.07, 16);
  coffee.add(cup);
  const coffeeLed = box(0.04, 0.02, 0.01, 0x3ddc84, 0.06, 0.28, 0.101, { emissive: 0x3ddc84, emissiveIntensity: 0 });
  coffee.add(coffeeLed);
  const steam = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTexture(), color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
  steam.scale.set(0.18, 0.3, 1);
  steam.position.set(0, 0.2, 0.07);
  coffee.add(steam);

  const dish = new THREE.Group();
  p = toWorld(620, 905);
  dish.position.set(p.x, 0, p.z + 0.08);
  dish.add(box(0.58, 0.58, 0.02, 0xc9ced6, 0, 0.37, 0, { metalness: 0.5, roughness: 0.35 }));
  const dishLed = box(0.12, 0.02, 0.01, 0x2fd6ff, 0, 0.62, 0.011, { emissive: 0x2fd6ff, emissiveIntensity: 0 });
  dish.add(dishLed);
  return {
    microwave: { group: tag(mw, 'microwave'), mwWindow, mwLight, on: false },
    coffee: { group: tag(coffee, 'coffee'), coffeeLed, steam, on: false },
    dishwasher: { group: tag(dish, 'dishwasher'), dishLed, on: false },
  };
}

function makeAc() {
  const p = spot('ac');
  const g = new THREE.Group();
  g.position.set(p.x - 0.08, 0.82, p.z);
  g.rotation.y = -Math.PI / 2; // faces into the room, towards the camera
  g.add(box(1.2, 0.3, 0.22, 0xf7f7f9, 0, 0, 0));
  const flap = box(0.9, 0.03, 0.06, 0xe2e5ea, 0, -0.12, 0.09);
  g.add(flap);
  const led = box(0.04, 0.02, 0.01, 0x3ddc84, 0.4, 0.06, 0.101, { emissive: 0x3ddc84, emissiveIntensity: 0 });
  g.add(led);
  // Cold air particles
  const count = 80;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const life = new Float32Array(count);
  for (let i = 0; i < count; i++) life[i] = Math.random();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const air = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x8fe6ff, size: 0.13, transparent: true, opacity: 0, depthWrite: false, map: haloTexture() }));
  g.add(air);
  return { group: tag(g, 'ac'), flap, led, air, life, on: false, level: 0 };
}

function makeBathroom() {
  const t = spot('toilet');
  const toilet = new THREE.Group();
  toilet.position.set(t.x, 0, t.z);
  toilet.add(box(0.36, 0.42, 0.18, 0xffffff, 0, 0.38, 0.12)); // tank
  toilet.add(cyl(0.2, 0.15, 0.32, 0xffffff, 0, 0.22, -0.12, 24));
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.15, 24), new THREE.MeshStandardMaterial({ color: 0x8fd3ff, emissive: 0x2a7fd0, emissiveIntensity: 0.1, transparent: true, opacity: 0.9 }));
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, 0.385, -0.12);
  toilet.add(water);
  const swirl = new THREE.Mesh(new THREE.RingGeometry(0.03, 0.14, 24, 1, 0, Math.PI * 1.3), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, side: THREE.DoubleSide }));
  swirl.rotation.x = -Math.PI / 2;
  swirl.position.set(0, 0.39, -0.12);
  toilet.add(swirl);
  // Touchless sensor on the tank
  const sensorLedMat = new THREE.MeshStandardMaterial({ color: 0x2fd6ff, emissive: 0x2fd6ff, emissiveIntensity: 0.4 });
  const sensor = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 20), sensorLedMat);
  sensor.position.set(0, 0.6, 0.12);
  toilet.add(sensor);
  tag(toilet, 'toilet');
  sensor.userData.pick = 'flush';

  const hand = new THREE.Group();
  hand.add(box(0.12, 0.04, 0.16, 0xf1c39b, 0, 0, 0));
  for (let i = 0; i < 4; i++) hand.add(box(0.022, 0.03, 0.08, 0xf1c39b, -0.045 + i * 0.03, 0, -0.11));
  hand.position.set(t.x + 0.5, 0.95, t.z + 0.12);
  hand.visible = false;

  // Motion sensor on the wall, with its detection cone
  const m = spot('motionSensor');
  const motion = new THREE.Group();
  motion.position.set(m.x, WALL_HEIGHT - 0.12, m.z);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xffffff));
  dome.rotation.x = Math.PI;
  motion.add(dome);
  const motionLedMat = new THREE.MeshStandardMaterial({ color: 0xff4d4d, emissive: 0xff4d4d, emissiveIntensity: 0.3 });
  const motionLed = new THREE.Mesh(new THREE.SphereGeometry(0.015, 8, 6), motionLedMat);
  motionLed.position.y = -0.065;
  motion.add(motionLed);
  const coneMat = new THREE.MeshBasicMaterial({ color: 0xff7a7a, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const cone = new THREE.Mesh(new THREE.ConeGeometry(1.6, WALL_HEIGHT - 0.12, 32, 1, true), coneMat);
  cone.position.set(-0.9, -(WALL_HEIGHT - 0.12) / 2, 0.6);
  motion.add(cone);
  tag(motion, 'motion');

  return { toilet, water, swirl, sensorLedMat, hand, motion, motionLedMat, coneMat };
}

function makePerson() {
  const g = new THREE.Group();
  const shirt = 0xff9a3c;
  g.add(cyl(0.13, 0.15, 0.42, shirt, 0, 0.62, 0, 16));
  g.add(box(0.1, 0.38, 0.1, 0x3b4a8f, -0.07, 0.2, 0));
  g.add(box(0.1, 0.38, 0.1, 0x3b4a8f, 0.07, 0.2, 0));
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 14), mat(0xf1c39b));
  head.position.y = 0.97;
  head.castShadow = true;
  g.add(head);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.135, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x3a2414));
  hair.position.y = 0.99;
  g.add(hair);
  g.visible = false;
  return g;
}

export function buildDevices(scene, rooms) {
  const echo = makeEcho();
  const router = makeRouter();
  const tv = makeTv();
  const fridge = makeFridge();
  const washer = makeWasher();
  const ac = makeAc();
  const bath = makeBathroom();
  const person = makePerson();
  const kitchen = makeKitchen();
  scene.add(kitchen.microwave.group, kitchen.coffee.group, kitchen.dishwasher.group);
  scene.add(echo.group, router.group, tv.group, fridge.group, washer.group, ac.group, bath.toilet, bath.hand, bath.motion, person);

  const anchor = (obj, y = 0.5) => { const v = new THREE.Vector3(); obj.getWorldPosition(v); v.y += y; return v; };
  const anchors = {
    echo: () => anchor(echo.group, 0.3),
    router: () => anchor(router.group, 0.35),
    tv: () => anchor(tv.group, 0.9),
    fridge: () => anchor(fridge.group, 1.2),
    washer: () => anchor(washer.group, 0.6),
    ac: () => anchor(ac.group, 0.1),
    microwave: () => anchor(kitchen.microwave.group, 0.2),
    coffee: () => anchor(kitchen.coffee.group, 0.2),
    dishwasher: () => anchor(kitchen.dishwasher.group, 0.4),
    light: (roomId) => rooms[roomId].bulb.position.clone(),
  };

  // Bathroom automation: a little state machine driven by update().
  const bathroom = {
    phase: 'empty', // empty | entering | inside | leaving
    t: 0,
    presence: false,
    lastSeen: -1,
    flushT: -1,
    handT: -1,
    path: [],
    onEvent: () => {},
  };
  const doorOut = toWorld(315, 915);
  const doorIn = toWorld(315, 975);
  const standAt = toWorld(240, 1015);

  const api = {
    echo, tv, fridge, washer, ac, bath, person, anchors,

    setAlexa(state) { echo.state = state; },

    setTv(on) { tv.on = on; },
    setWasher(on) { washer.on = on; },
    setAc(on) { ac.on = on; },
    kitchen,
    setKitchen(id, on) { kitchen[id].on = on; },

    toggleFridge(now) {
      fridge.open = !fridge.open;
      fridge.openedAt = now;
      fridge.warned = false;
      return fridge.open;
    },

    personEnter() {
      if (bathroom.phase !== 'empty') return false;
      bathroom.phase = 'entering';
      bathroom.path = [doorOut, doorIn, standAt].map((p) => new THREE.Vector3(p.x, 0.05, p.z));
      person.position.copy(bathroom.path[0]);
      person.visible = true;
      return true;
    },

    waveHand() {
      if (bathroom.handT >= 0) return false;
      bathroom.handT = 0;
      bath.hand.visible = true;
      return true;
    },

    bathroom,

    update(dt, t) {
      // Alexa ring
      const target = { idle: 0.15, listening: 2.2, thinking: 1.2, speaking: 1.6 }[echo.state] ?? 0.15;
      const pulse = echo.state === 'speaking' ? 0.6 + Math.sin(t * 10) * 0.4 : echo.state === 'thinking' ? 0.7 + Math.sin(t * 16) * 0.3 : 1;
      echo.ringMat.emissiveIntensity = lerp(echo.ringMat.emissiveIntensity, target * pulse, 0.2);
      echo.glow.material.opacity = lerp(echo.glow.material.opacity, echo.state === 'idle' ? 0 : 0.8 * pulse, 0.2);
      echo.light.intensity = lerp(echo.light.intensity, echo.state === 'idle' ? 0 : 1.2 * pulse, 0.2);

      router.ledMat.emissiveIntensity = 0.6 + (Math.sin(t * 9) > 0.2 ? 0.8 : 0);

      // TV
      if (tv.on || tv.wasOn) { tv.draw(t, tv.on); tv.wasOn = tv.on; }
      tv.light.intensity = lerp(tv.light.intensity, tv.on ? 1.6 + Math.sin(t * 3) * 0.3 : 0, 0.15);

      // Fridge door
      const angle = fridge.open ? -1.6 : 0;
      fridge.pivot.rotation.y = lerp(fridge.pivot.rotation.y, angle, 0.12);
      fridge.inner.intensity = lerp(fridge.inner.intensity, fridge.open ? 1.4 : 0, 0.2);
      fridge.panel.material.emissive.setHex(fridge.open && t - fridge.openedAt > 4 && Math.sin(t * 12) > 0 ? 0xff4d4d : 0x2fd6ff);
      if (fridge.open && !fridge.warned && t - fridge.openedAt > 4) {
        fridge.warned = true;
        bathroom.onEvent('fridge-open');
      }

      // Washer
      if (washer.on) {
        washer.drum.rotation.z -= dt * 9;
        washer.body.position.x = Math.sin(t * 50) * 0.008;
      } else washer.body.position.x = 0;
      washer.led.material.emissiveIntensity = washer.on ? 1.2 : 0;

      // Kitchen
      const mwOn = kitchen.microwave.on;
      kitchen.microwave.mwWindow.material.emissiveIntensity = lerp(kitchen.microwave.mwWindow.material.emissiveIntensity, mwOn ? 1.6 : 0, 0.15);
      kitchen.microwave.mwLight.intensity = lerp(kitchen.microwave.mwLight.intensity, mwOn ? 1 : 0, 0.15);
      kitchen.coffee.coffeeLed.material.emissiveIntensity = kitchen.coffee.on ? 1.4 : 0;
      kitchen.coffee.steam.material.opacity = kitchen.coffee.on ? 0.35 + Math.sin(t * 4) * 0.2 : 0;
      kitchen.coffee.steam.position.y = 0.2 + ((t * 0.3) % 0.15);
      kitchen.dishwasher.dishLed.material.emissiveIntensity = kitchen.dishwasher.on ? 1.2 + Math.sin(t * 3) * 0.4 : 0;

      // Air conditioner
      ac.level = lerp(ac.level, ac.on ? 1 : 0, 0.05);
      ac.flap.rotation.x = ac.level * 0.7;
      ac.led.material.emissiveIntensity = ac.on ? 1.2 : 0;
      ac.air.material.opacity = ac.level * 0.85;
      if (ac.level > 0.01) {
        const pos = ac.air.geometry.attributes.position;
        for (let i = 0; i < ac.life.length; i++) {
          ac.life[i] += dt * 0.5;
          if (ac.life[i] > 1) ac.life[i] = 0;
          const l = ac.life[i];
          const spread = ((i * 37) % 100) / 100 - 0.5;
          pos.setXYZ(i, spread * 0.9 * (1 + l), -0.15 - l * 0.55, 0.1 + l * 1.6);
        }
        pos.needsUpdate = true;
      }

      // Bathroom: person walking
      const speed = 1.1;
      if ((bathroom.phase === 'entering' || bathroom.phase === 'leaving') && bathroom.path.length) {
        const next = bathroom.path[0];
        const d = next.clone().sub(person.position);
        const step = speed * dt;
        if (d.length() <= step) {
          person.position.copy(next);
          bathroom.path.shift();
          if (!bathroom.path.length) {
            if (bathroom.phase === 'entering') { bathroom.phase = 'inside'; bathroom.t = 0; }
            else { bathroom.phase = 'empty'; person.visible = false; }
          }
        } else {
          person.position.addScaledVector(d.normalize(), step);
          person.rotation.y = Math.atan2(d.x, d.z);
          person.position.y = 0.05 + Math.abs(Math.sin(t * 12)) * 0.03;
        }
      }
      if (bathroom.phase === 'inside') {
        bathroom.t += dt;
        // Leaves by itself after a while if nobody flushes
        if (bathroom.t > 12) api.personLeave();
      }

      // Motion sensor: sees the person when inside the bathroom bounds
      const b = rooms.bano.bounds;
      const inside = person.visible && person.position.x > b.minX && person.position.x < b.maxX && person.position.z > b.minZ + 0.1 && person.position.z < b.maxZ;
      if (inside) {
        if (!bathroom.presence) bathroom.onEvent('motion-on');
        bathroom.presence = true;
        bathroom.lastSeen = t;
      } else if (bathroom.presence && t - bathroom.lastSeen > 3) {
        bathroom.presence = false;
        bathroom.onEvent('motion-off');
      }
      const detecting = inside && Math.sin(t * 6) > 0;
      bath.motionLedMat.emissiveIntensity = detecting ? 2 : 0.3;
      bath.coneMat.opacity = lerp(bath.coneMat.opacity, inside ? 0.14 : 0, 0.15);

      // Hand wave over the touchless sensor, then flush
      if (bathroom.handT >= 0) {
        bathroom.handT += dt;
        const h = bathroom.handT;
        const t0 = spot('toilet');
        bath.hand.position.set(t0.x + 0.45 - Math.min(h, 0.6) * 0.75, 0.82, t0.z + 0.12 + Math.sin(h * 10) * 0.04);
        bath.sensorLedMat.emissiveIntensity = h > 0.5 && h < 1.4 ? 3 : 0.4;
        if (h > 0.7 && bathroom.flushT < 0) { bathroom.flushT = 0; bathroom.onEvent('flush'); }
        if (h > 1.4) { bath.hand.visible = false; bathroom.handT = -1; }
      }
      if (bathroom.flushT >= 0) {
        bathroom.flushT += dt;
        const f = bathroom.flushT;
        bath.swirl.rotation.z -= dt * 12;
        bath.swirl.material.opacity = f < 2.2 ? 0.9 : Math.max(0, 0.9 - (f - 2.2) * 2);
        bath.water.material.emissiveIntensity = f < 2.2 ? 0.8 : 0.1;
        bath.water.scale.setScalar(1 - Math.sin(Math.min(f, 2.5) / 2.5 * Math.PI) * 0.3);
        if (f > 2.8) {
          bathroom.flushT = -1;
          bath.water.scale.setScalar(1);
          if (bathroom.phase === 'inside') setTimeout(() => api.personLeave(), 600);
        }
      }
    },

    personLeave() {
      if (bathroom.phase !== 'inside') return;
      bathroom.phase = 'leaving';
      bathroom.path = [doorIn, doorOut, toWorld(420, 915)].map((p) => new THREE.Vector3(p.x, 0.05, p.z));
    },
  };
  return api;
}
