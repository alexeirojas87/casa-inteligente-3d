import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { ROOMS_PLAN, HALL_FLOORS, DOORS, EXTRA_WALLS, toWorld, pxToUnits } from './plan.js';

export const WALL_HEIGHT = 1.05;
const WALL_THICKNESS = 0.12;
const FLOOR_THICKNESS = 0.08;

const mats = new Map();
export function mat(color, opts = {}) {
  const key = `${color}-${JSON.stringify(opts)}`;
  if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial({ color, roughness: 0.85, ...opts }));
  return mats.get(key);
}

export function box(w, h, d, color, x, y, z, opts) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), opts?.material ?? mat(color, opts));
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function cyl(rTop, rBottom, h, color, x, y, z, segments = 24, opts) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, segments), mat(color, opts));
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

const rectWorld = ([x1, y1, x2, y2]) => {
  const a = toWorld(x1, y1);
  const b = toWorld(x2, y2);
  return { minX: a.x, minZ: a.z, maxX: b.x, maxZ: b.z, cx: (a.x + b.x) / 2, cz: (a.z + b.z) / 2, w: b.x - a.x, d: b.z - a.z };
};

function tileTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#e4eaf1';
  g.fillRect(0, 0, 128, 128);
  g.strokeStyle = '#b9c4d2';
  g.lineWidth = 3;
  for (let i = 0; i <= 128; i += 32) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 128); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(128, i); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Subtracts door openings from a wall segment, returning the solid pieces.
function solidPieces(axis, fixed, from, to) {
  let pieces = [[from, to]];
  for (const [dAxis, dFixed, dFrom, dTo] of DOORS) {
    if (dAxis !== axis || Math.abs(dFixed - fixed) > 3) continue;
    pieces = pieces.flatMap(([a, b]) => {
      if (dTo <= a || dFrom >= b) return [[a, b]];
      const out = [];
      if (dFrom > a) out.push([a, dFrom]);
      if (dTo < b) out.push([dTo, b]);
      return out;
    });
  }
  return pieces.filter(([a, b]) => b - a > 4);
}

function wallMesh(axis, fixed, a, b, height, color) {
  const len = pxToUnits(b - a) + WALL_THICKNESS;
  if (axis === 'h') {
    const p = toWorld((a + b) / 2, fixed);
    return box(len, height, WALL_THICKNESS, color, p.x, height / 2, p.z);
  }
  const p = toWorld(fixed, (a + b) / 2);
  return box(WALL_THICKNESS, height, len, color, p.x, height / 2, p.z);
}

function addWall(group, axis, fixed, from, to, height = WALL_HEIGHT, color = 0xf6efe3) {
  for (const [a, b] of solidPieces(axis, fixed, from, to)) group.add(wallMesh(axis, fixed, a, b, height, color));
}

function label(text, x, z) {
  const el = document.createElement('div');
  el.className = 'room-label';
  el.textContent = text;
  const obj = new CSS2DObject(el);
  obj.position.set(x, 0.12, z);
  return obj;
}

export function buildHouse() {
  const group = new THREE.Group();
  const rooms = {};

  // Plinth: the house sits on a model board like an architecture maquette.
  const board = box(17.5, 0.5, 23.5, 0x2c2552, 0, -0.29, -0.6);
  board.castShadow = false;
  group.add(board);
  const grass = box(16.6, 0.06, 22.6, 0x4a7d5a, 0, -0.02, -0.6);
  grass.castShadow = false;
  group.add(grass);

  const tiles = tileTexture();

  for (const room of ROOMS_PLAN) {
    const r = rectWorld(room.rect);
    let floorMat;
    if (room.tiles) {
      const t = tiles.clone();
      t.repeat.set(r.w / 0.5, r.d / 0.5);
      t.needsUpdate = true;
      floorMat = new THREE.MeshStandardMaterial({ map: t, roughness: 0.4 });
    }
    const floor = box(r.w, FLOOR_THICKNESS, r.d, room.color, r.cx, FLOOR_THICKNESS / 2, r.cz, floorMat ? { material: floorMat } : undefined);
    floor.castShadow = false;
    floor.userData.room = room.id;
    group.add(floor);

    const [x1, y1, x2, y2] = room.rect;
    const h = room.outdoor ? 0.32 : WALL_HEIGHT;
    const color = room.outdoor ? 0xd9d2c4 : 0xf6efe3;
    addWall(group, 'h', y1, x1, x2, h, color);
    addWall(group, 'h', y2, x1, x2, h, color);
    addWall(group, 'v', x1, y1, y2, h, color);
    addWall(group, 'v', x2, y1, y2, h, color);

    // Smart bulb floating over the room + the light it casts.
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xfff4dc, emissive: 0xffc77a, emissiveIntensity: 0, roughness: 0.3 });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 14), bulbMat);
    bulb.position.set(r.cx, WALL_HEIGHT + 0.45, r.cz);
    bulb.userData.pick = `light:${room.id}`;
    group.add(bulb);

    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTexture(), color: 0xffc77a, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.scale.set(1.4, 1.4, 1);
    halo.position.copy(bulb.position);
    group.add(halo);

    const light = new THREE.PointLight(0xffc77a, 0, Math.max(r.w, r.d) * 1.6, 1.4);
    light.position.set(r.cx, WALL_HEIGHT * 0.95, r.cz);
    group.add(light);

    group.add(label(room.label, r.cx, r.cz));

    rooms[room.id] = { ...room, bounds: r, bulb, halo, light, on: false, color: 0xffc77a, level: 0 };
  }

  for (const hall of HALL_FLOORS) {
    const r = rectWorld(hall.rect);
    const f = box(r.w, FLOOR_THICKNESS, r.d, hall.color, r.cx, FLOOR_THICKNESS / 2 + 0.002, r.cz);
    f.castShadow = false;
    group.add(f);
  }
  // The hallway also gets a light, so "apaga la luz del pasillo" works.
  {
    const r = rectWorld(HALL_FLOORS[0].rect);
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xfff4dc, emissive: 0xffc77a, emissiveIntensity: 0, roughness: 0.3 });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 14), bulbMat);
    bulb.position.set(r.cx, WALL_HEIGHT + 0.45, r.cz);
    bulb.userData.pick = 'light:pasillo';
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTexture(), color: 0xffc77a, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.scale.set(1.2, 1.2, 1);
    halo.position.copy(bulb.position);
    const light = new THREE.PointLight(0xffc77a, 0, r.d * 1.1, 1.4);
    light.position.set(r.cx, WALL_HEIGHT * 0.95, r.cz);
    group.add(bulb, halo, light, label('Pasillo', r.cx, r.cz + 1.6));
    rooms.pasillo = { id: 'pasillo', label: 'Pasillo', bounds: r, bulb, halo, light, on: false, color: 0xffc77a, level: 0 };
  }

  for (const [axis, fixed, from, to] of EXTRA_WALLS) addWall(group, axis, fixed, from, to);

  addFurniture(group);
  return { group, rooms };
}

let halo;
function haloTexture() {
  if (halo) return halo;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  halo = new THREE.CanvasTexture(c);
  return halo;
}
export { haloTexture };

const at = (px, py) => toWorld(px, py);

function addFurniture(g) {
  const wood = 0xb98a5e;
  const fabric = 0x5b6bb8;
  const white = 0xf2f2f2;
  const dark = 0x2e3142;

  // Sala: sofa, coffee table, rug, plant
  let p = at(330, 835);
  g.add(box(1.9, 0.3, 0.6, fabric, p.x, 0.23, p.z + 0.1));
  g.add(box(1.9, 0.35, 0.18, fabric, p.x, 0.4, p.z + 0.36));
  p = at(330, 765);
  g.add(box(1.0, 0.04, 0.6, 0xe9e1d3, p.x, 0.1, p.z + 0.2));
  g.add(box(0.8, 0.2, 0.4, wood, p.x, 0.18, p.z + 0.2));
  p = at(225, 700);
  g.add(cyl(0.16, 0.12, 0.3, 0xc56a4a, p.x, 0.23, p.z));
  g.add(cyl(0.01, 0.28, 0.6, 0x3f9b5a, p.x, 0.65, p.z, 8));
  p = at(262, 770); // side table for the Echo
  g.add(cyl(0.22, 0.22, 0.42, wood, p.x, 0.27, p.z));
  p = at(575, 860); // shelf for the router
  g.add(box(0.7, 0.36, 0.3, wood, p.x, 0.26, p.z - 0.05));
  p = at(640, 740); // dining table
  g.add(box(1.1, 0.06, 0.8, wood, p.x, 0.5, p.z));
  for (const [dx, dz] of [[-0.35, -0.25], [0.35, -0.25], [-0.35, 0.25], [0.35, 0.25]]) g.add(box(0.05, 0.47, 0.05, wood, p.x + dx * 1.3, 0.27, p.z + dz * 1.3));

  // Terraza: two chairs and a plant
  p = at(500, 520);
  g.add(box(0.4, 0.25, 0.4, 0xf0e0c0, p.x, 0.2, p.z));
  p = at(560, 520);
  g.add(box(0.4, 0.25, 0.4, 0xf0e0c0, p.x, 0.2, p.z));
  p = at(530, 610);
  g.add(cyl(0.15, 0.12, 0.25, 0xc56a4a, p.x, 0.2, p.z));
  g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 0), mat(0x3f9b5a)));
  g.children[g.children.length - 1].position.set(p.x, 0.55, p.z);

  // Cocina: counters along the top wall and an island
  p = at(650, 892);
  g.add(box(4.6, 0.6, 0.45, white, p.x - 0.55, 0.38, p.z + 0.08));
  g.add(box(4.6, 0.05, 0.5, 0x3d3f52, p.x - 0.55, 0.7, p.z + 0.08));
  p = at(640, 1010);
  g.add(box(1.8, 0.6, 0.7, white, p.x, 0.38, p.z));
  g.add(box(1.9, 0.05, 0.8, 0xc2a37b, p.x, 0.7, p.z));
  p = at(600, 895);
  g.add(box(0.5, 0.02, 0.35, dark, p.x, 0.735, p.z + 0.1)); // stove top

  // Baño: sink and shower tray (toilet is a device)
  p = at(260, 1072);
  g.add(box(0.6, 0.6, 0.35, white, p.x, 0.38, p.z - 0.04));
  p = at(345, 1045);
  g.add(box(0.9, 0.06, 0.9, 0xeaf3ff, p.x - 0.1, 0.11, p.z - 0.25));

  // Cuarto Invitados: bed and nightstand
  p = at(210, 1200);
  addBed(g, p.x, p.z, 1.4, 1.9, 0xf2c14e);
  p = at(160, 1120);
  g.add(box(0.4, 0.4, 0.4, wood, p.x, 0.24, p.z));

  // Cuarto Trabajo: desk with a computer
  p = at(600, 1110);
  g.add(box(1.6, 0.06, 0.65, wood, p.x, 0.62, p.z + 0.1));
  for (const dx of [-0.75, 0.75]) g.add(box(0.06, 0.6, 0.6, wood, p.x + dx, 0.32, p.z + 0.1));
  g.add(box(0.7, 0.42, 0.04, dark, p.x, 0.92, p.z - 0.05));
  const screen = box(0.64, 0.36, 0.01, 0x6fe3ff, p.x, 0.92, p.z - 0.025, { emissive: 0x3a8fd0, emissiveIntensity: 0.9 });
  screen.castShadow = false;
  g.add(screen);
  g.add(box(0.5, 0.02, 0.18, 0xdddddd, p.x, 0.66, p.z + 0.25));
  p = at(600, 1165);
  g.add(cyl(0.22, 0.22, 0.08, dark, p.x, 0.45, p.z));
  g.add(cyl(0.03, 0.03, 0.4, dark, p.x, 0.22, p.z));

  // Cuarto Niños: two beds, toy box, rug
  p = at(175, 1420);
  addBed(g, p.x, p.z, 0.9, 1.8, 0x4f8dff);
  p = at(320, 1420);
  addBed(g, p.x, p.z, 0.9, 1.8, 0xff7ac8);
  p = at(250, 1330);
  g.add(box(0.7, 0.35, 0.4, 0xffd23f, p.x, 0.22, p.z));
  p = at(250, 1470);
  g.add(cyl(0.6, 0.6, 0.02, 0xa66bff, p.x, 0.09, p.z, 32));

  // Cuarto Padres: double bed with nightstands, wardrobe
  p = at(640, 1430);
  addBed(g, p.x, p.z, 1.9, 2.0, 0xe9e1d3);
  for (const dx of [-1.25, 1.25]) g.add(box(0.4, 0.4, 0.4, wood, p.x + dx, 0.24, p.z - 0.7));
  p = at(520, 1480);
  g.add(box(1.6, 1.0, 0.5, 0xd9c2a1, p.x + 0.6, 0.54, p.z));
}

function addBed(g, x, z, w, d, blanket) {
  g.add(box(w, 0.3, d, 0xb98a5e, x, 0.19, z));
  g.add(box(w - 0.06, 0.12, d - 0.35, blanket, x, 0.4, z + 0.15));
  g.add(box(w - 0.2, 0.1, 0.3, 0xffffff, x, 0.39, z - d / 2 + 0.22));
  g.add(box(w, 0.55, 0.08, 0xb98a5e, x, 0.32, z - d / 2 + 0.02));
}
