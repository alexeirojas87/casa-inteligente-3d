// Keeps the whole app on the device so it works without internet.
// FILES ([path, hash] pairs) and VERSION are filled in by build.mjs.
const VERSION = '__VERSION__';
const FILES = __FILES__;
const CACHE = `casa-${VERSION}`;
// The hash in the key lets an update reuse every file that did not change.
const keyOf = ([file, hash]) => `${file}?v=${hash}`;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // One by one keeps memory low on the iPad (the voice model is large).
    for (const entry of FILES) {
      const key = keyOf(entry);
      if (await cache.match(key)) continue;
      const res = (await caches.match(key)) ?? (await fetch(key, { cache: 'reload' }));
      if (!res.ok) throw new Error(`${entry[0]}: ${res.status}`);
      await cache.put(key, res);
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
      const index = await cache.match('index.html', { ignoreSearch: true });
      if (index) return index;
    }
    return fetch(event.request);
  })());
});

self.addEventListener('message', async (event) => {
  if (event.data !== 'status') return;
  const cache = await caches.open(CACHE);
  const have = (await Promise.all(FILES.map((e) => cache.match(keyOf(e))))).filter(Boolean).length;
  event.source.postMessage({ type: 'offline-status', have, total: FILES.length, version: VERSION });
});
