// Keeps the whole app on the device so it works without internet.
// FILES and VERSION are filled in by build.mjs.
const VERSION = '__VERSION__';
const FILES = __FILES__;
const CACHE = `casa-${VERSION}`;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // One by one keeps memory low on the iPad (the voice model is large).
    for (const file of FILES) {
      if (await cache.match(file)) continue;
      const res = await fetch(file, { cache: 'reload' });
      if (!res.ok) throw new Error(`${file}: ${res.status}`);
      await cache.put(file, res);
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(event.request, { ignoreSearch: true });
    if (hit) return hit;
    if (url.pathname.endsWith('/')) {
      const index = await cache.match('index.html');
      if (index) return index;
    }
    return fetch(event.request);
  })());
});

self.addEventListener('message', async (event) => {
  if (event.data !== 'status') return;
  const cache = await caches.open(CACHE);
  const have = (await Promise.all(FILES.map((f) => cache.match(f)))).filter(Boolean).length;
  event.source.postMessage({ type: 'offline-status', have, total: FILES.length });
});
