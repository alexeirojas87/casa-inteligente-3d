import * as THREE from 'three';
import { haloTexture } from './house.js';

// WiFi rings spreading from the router, plus optional "connection" lines.
export function buildWifi(scene, routerPos, targets) {
  const rings = [];
  const ringMat = () => new THREE.MeshBasicMaterial({ color: 0x2fd6ff, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
  for (let i = 0; i < 4; i++) {
    const r = new THREE.Mesh(new THREE.RingGeometry(0.96, 1, 64), ringMat());
    r.rotation.x = -Math.PI / 2;
    r.position.copy(routerPos);
    r.position.y = 1.2;
    r.userData.phase = i / 4;
    scene.add(r);
    rings.push(r);
  }

  const links = new THREE.Group();
  const linkMat = new THREE.LineDashedMaterial({ color: 0x6fe3ff, dashSize: 0.18, gapSize: 0.12, transparent: true, opacity: 0 });
  for (const target of targets) {
    const mid = routerPos.clone().lerp(target, 0.5);
    mid.y = Math.max(routerPos.y, target.y) + 1.4;
    const curve = new THREE.QuadraticBezierCurve3(routerPos, mid, target);
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
    const line = new THREE.Line(geo, linkMat);
    line.computeLineDistances();
    links.add(line);
  }
  scene.add(links);

  let strong = false;
  return {
    setStrong(v) { strong = v; },
    update(dt, t) {
      for (const r of rings) {
        const k = (t * 0.35 + r.userData.phase) % 1;
        const size = 0.3 + k * (strong ? 11 : 8);
        r.scale.set(size, size, size);
        r.material.opacity = (1 - k) * (strong ? 0.45 : 0.14);
      }
      linkMat.opacity += ((strong ? 0.85 : 0) - linkMat.opacity) * 0.1;
      linkMat.dashOffset = -t * 0.6;
    },
  };
}

// A glowing "message" that travels Alexa -> router -> device.
export function buildBeams(scene) {
  const active = [];
  const spriteMat = new THREE.SpriteMaterial({ map: haloTexture(), color: 0x7ff0ff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });

  function leg(from, to, height) {
    const mid = from.clone().lerp(to, 0.5);
    mid.y = Math.max(from.y, to.y) + height;
    return new THREE.QuadraticBezierCurve3(from.clone(), mid, to.clone());
  }

  return {
    send(points, duration = 1.4) {
      return new Promise((resolve) => {
        const curves = [];
        for (let i = 0; i < points.length - 1; i++) curves.push(leg(points[i], points[i + 1], 1.6));
        const head = new THREE.Sprite(spriteMat.clone());
        head.scale.set(0.7, 0.7, 1);
        const tail = Array.from({ length: 10 }, (_, i) => {
          const s = new THREE.Sprite(spriteMat.clone());
          const k = 1 - i / 10;
          s.scale.set(0.45 * k, 0.45 * k, 1);
          s.material.opacity = 0.6 * k;
          scene.add(s);
          return s;
        });
        scene.add(head);
        active.push({ curves, head, tail, t: 0, duration, resolve, legs: curves.length });
      });
    },
    update(dt) {
      for (let i = active.length - 1; i >= 0; i--) {
        const b = active[i];
        b.t += dt / b.duration;
        const pos = (k) => {
          const kk = Math.min(Math.max(k, 0), 0.9999) * b.legs;
          const idx = Math.floor(kk);
          return b.curves[idx].getPoint(kk - idx);
        };
        b.head.position.copy(pos(b.t));
        b.tail.forEach((s, j) => s.position.copy(pos(b.t - (j + 1) * 0.018)));
        if (b.t >= 1) {
          scene.remove(b.head);
          b.tail.forEach((s) => scene.remove(s));
          active.splice(i, 1);
          b.resolve();
        }
      }
    },
  };
}

// Short burst of sparkles where an order arrives.
export function buildBursts(scene) {
  const bursts = [];
  return {
    at(position, color = 0x7ff0ff) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTexture(), color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      s.position.copy(position);
      scene.add(s);
      bursts.push({ s, t: 0 });
    },
    update(dt) {
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.t += dt * 1.6;
        const size = 0.4 + b.t * 2.4;
        b.s.scale.set(size, size, 1);
        b.s.material.opacity = Math.max(0, 1 - b.t);
        if (b.t >= 1) { scene.remove(b.s); bursts.splice(i, 1); }
      }
    },
  };
}
