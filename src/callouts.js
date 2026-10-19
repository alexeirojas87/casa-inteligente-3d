import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

// Small floating tags pinned to 3D positions (a chip over an appliance,
// a padlock over the router...).
const ICONS = {
  chip: '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1" class="fill"/><path d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.4" class="fill"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3" class="fill"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  alert: '<svg viewBox="0 0 24 24"><path d="M12 3l10 18H2z"/><path d="M12 10v5"/><circle cx="12" cy="18" r="0.8" class="fill"/></svg>',
  people: '<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M2.5 20c0-3.5 2.5-6 5.5-6s5.5 2.5 5.5 6M13.5 20c.2-3 1.5-5 3-5s3.5 2 3.5 5"/></svg>',
  wifi: '<svg viewBox="0 0 24 24"><path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1.2" class="fill"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"/><path d="M5 19c4-4 7-6 10-8"/></svg>',
  voice: '<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
};

export function createCallouts(scene) {
  const active = new Map();
  return {
    show(key, position, { icon = 'chip', text = '', kind = 'chip', delay = 0 } = {}) {
      this.hide(key);
      // CSS2DRenderer owns the outer element's transform, so animate an inner one.
      const el = document.createElement('div');
      const tag = document.createElement('div');
      tag.className = ['callout', ...kind.split(' ').map((k) => `callout--${k}`)].join(' ');
      tag.style.animationDelay = `${delay}ms`;
      tag.innerHTML = `<span class="callout-icon">${ICONS[icon] ?? ''}</span>${text ? `<span class="callout-text">${text}</span>` : ''}`;
      el.appendChild(tag);
      const obj = new CSS2DObject(el);
      obj.position.copy(position);
      obj.position.y += 0.35;
      scene.add(obj);
      active.set(key, obj);
    },
    hide(key) {
      const obj = active.get(key);
      if (!obj) return;
      obj.element.remove();
      scene.remove(obj);
      active.delete(key);
    },
    clear() {
      for (const key of [...active.keys()]) this.hide(key);
    },
  };
}
