import * as THREE from 'three';
import { cyl, box, mat } from './house.js';
import { ROBOT_ROUTES, ROBOT_DOCK, toWorld } from './plan.js';

const TRAVEL_SPEED = 1.6;
const CLEAN_SPEED = 2.4;
const LANE = 0.55;
const MAX_TRAIL = 6000;

const v3 = ([x, y]) => { const p = toWorld(x, y); return new THREE.Vector3(p.x, 0, p.z); };

function zigzag(bounds) {
  const m = 0.35;
  const pts = [];
  const minX = bounds.minX + m, maxX = bounds.maxX - m;
  let flip = false;
  for (let z = bounds.minZ + m; z <= bounds.maxZ - m + 0.001; z += LANE) {
    pts.push(new THREE.Vector3(flip ? maxX : minX, 0, z), new THREE.Vector3(flip ? minX : maxX, 0, z));
    flip = !flip;
  }
  return pts;
}

export function buildRobot(scene, rooms) {
  const dockPos = v3(ROBOT_DOCK);

  const dock = new THREE.Group();
  dock.position.copy(dockPos).add(new THREE.Vector3(0, 0, -0.32));
  dock.add(box(0.5, 0.3, 0.16, 0x23262f, 0, 0.23, 0));
  dock.add(box(0.5, 0.02, 0.4, 0x2f333f, 0, 0.09, 0.14));
  const dockLed = box(0.08, 0.02, 0.01, 0x3ddc84, 0, 0.32, 0.081, { emissive: 0x3ddc84, emissiveIntensity: 1 });
  dock.add(dockLed);
  dock.traverse((o) => { o.userData.pick = 'robot'; });
  scene.add(dock);

  const body = new THREE.Group();
  body.add(cyl(0.2, 0.2, 0.09, 0xeceff3, 0, 0.13, 0, 32));
  body.add(cyl(0.06, 0.06, 0.04, 0x2b2f3a, 0, 0.195, -0.06, 20)); // lidar
  const ledMat = new THREE.MeshStandardMaterial({ color: 0x2fd6ff, emissive: 0x2fd6ff, emissiveIntensity: 0.5 });
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 6), ledMat);
  led.position.set(0, 0.18, 0.12);
  body.add(led);
  const brush = box(0.12, 0.01, 0.02, 0x555a66, 0.13, 0.09, 0.13);
  body.add(brush);
  body.scale.setScalar(1.45);
  body.position.copy(dockPos);
  body.position.y = 0;
  body.traverse((o) => { o.userData.pick = 'robot'; });
  scene.add(body);

  // White zigzag trail, like the lines on the robot app's map.
  const trailGeo = new THREE.BufferGeometry();
  const trailPos = new Float32Array(MAX_TRAIL * 3);
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  trailGeo.setDrawRange(0, 0);
  const trailMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 });
  const trail = new THREE.Line(trailGeo, trailMat);
  trail.frustumCulled = false;
  scene.add(trail);
  let trailCount = 0;
  let trailFade = false;

  const state = {
    mode: 'docked', // docked | going | cleaning | returning | blocked
    queue: [],
    room: null,
    onEvent: () => {},
    blockedT: 0,
  };

  const addTrail = (p) => {
    if (trailCount >= MAX_TRAIL) return;
    trailPos.set([p.x, 0.095, p.z], trailCount * 3);
    trailCount++;
    trailGeo.setDrawRange(0, trailCount);
    trailGeo.attributes.position.needsUpdate = true;
  };

  const routeTo = (roomId) => (ROBOT_ROUTES[roomId] ?? []).map(v3);

  // Path back to the dock from wherever the robot is now.
  const pathHome = () => {
    const back = state.room ? routeTo(state.room).reverse() : [];
    return [...back, dockPos.clone().add(new THREE.Vector3(0, 0, 0.25)), dockPos.clone()];
  };

  const api = {
    state,
    body,
    clean(roomId) {
      const fromRoom = state.mode === 'docked' ? [] : pathHome().slice(0, -2);
      state.room = roomId;
      trailCount = 0;
      trailFade = false;
      trailMat.opacity = 0.75;
      trailGeo.setDrawRange(0, 0);
      if (roomId === 'bano') {
        state.mode = 'going';
        state.queue = [...fromRoom, dockPos.clone().add(new THREE.Vector3(0, 0, 0.3)), ...routeTo('bano')].map((p) => ({ p, phase: 'go' }));
        state.queue[state.queue.length - 1].phase = 'blocked';
        return;
      }
      state.mode = 'going';
      const entry = [...fromRoom, dockPos.clone().add(new THREE.Vector3(0, 0, 0.3)), ...routeTo(roomId)].map((p) => ({ p, phase: 'go' }));
      const lanes = zigzag(rooms[roomId].bounds).map((p) => ({ p, phase: 'clean' }));
      // Start the zigzag from the lane closest to the entry point.
      const last = entry.length ? entry[entry.length - 1].p : body.position;
      const firstDist = lanes[0].p.distanceTo(last);
      const lastDist = lanes[lanes.length - 1].p.distanceTo(last);
      if (lastDist < firstDist) lanes.reverse();
      const back = entry.length ? [{ p: entry[entry.length - 1].p.clone(), phase: 'clean' }] : [];
      state.queue = [...entry, ...lanes, ...back, { p: null, phase: 'done' }];
    },
    dock() {
      if (state.mode === 'docked') return false;
      state.mode = 'returning';
      state.queue = pathHome().map((p) => ({ p, phase: 'home' }));
      return true;
    },
    update(dt, t) {
      ledMat.emissiveIntensity = state.mode === 'docked' ? 0.4 + Math.sin(t * 2) * 0.3 : 1.4;
      ledMat.emissive.setHex(state.mode === 'blocked' ? 0xff4d4d : 0x2fd6ff);
      dockLed.material.emissiveIntensity = state.mode === 'docked' ? 1.2 : 0.2;
      brush.rotation.y += state.mode === 'cleaning' ? dt * 30 : 0;

      if (trailFade) {
        trailMat.opacity = Math.max(0, trailMat.opacity - dt * 0.15);
      }

      if (state.mode === 'blocked') {
        state.blockedT += dt;
        body.position.y = Math.abs(Math.sin(state.blockedT * 18)) * 0.03 * Math.max(0, 1 - state.blockedT);
        if (state.blockedT > 1.6) {
          body.position.y = 0;
          state.mode = 'returning';
          state.queue = pathHome().map((p) => ({ p, phase: 'home' }));
          state.onEvent('blocked-returning');
        }
        return;
      }

      const item = state.queue[0];
      if (!item) return;
      if (item.phase === 'done') {
        state.queue.shift();
        state.onEvent('clean-done', state.room);
        state.mode = 'returning';
        state.queue = pathHome().map((p) => ({ p, phase: 'home' }));
        trailFade = true;
        return;
      }
      const cleaning = item.phase === 'clean';
      if (cleaning && state.mode !== 'cleaning') {
        state.mode = 'cleaning';
        state.onEvent('clean-start', state.room);
      }
      const speed = cleaning ? CLEAN_SPEED : TRAVEL_SPEED;
      const d = item.p.clone().sub(body.position);
      d.y = 0;
      const dist = d.length();
      const step = speed * dt;
      if (dist > 0.001) {
        const heading = Math.atan2(d.x, d.z);
        let diff = heading - body.rotation.y;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        body.rotation.y += diff * Math.min(1, dt * 10);
      }
      if (dist <= step) {
        body.position.set(item.p.x, 0, item.p.z);
        state.queue.shift();
        if (item.phase === 'blocked') {
          state.mode = 'blocked';
          state.blockedT = 0;
          state.onEvent('blocked', 'bano');
        } else if (item.phase === 'home' && state.queue.length === 0) {
          state.mode = 'docked';
          state.room = null;
          trailFade = true;
          state.onEvent('docked');
        }
      } else {
        body.position.addScaledVector(d.normalize(), step);
      }
      if (cleaning) addTrail(body.position);
    },
  };
  return api;
}
