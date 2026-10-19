// Installs the service worker that keeps the app on the device, and tells
// the user when everything is saved for use without internet. With internet,
// every launch checks for a new version and saves only the files that changed.
export function setupOffline({ canReload = () => false } = {}) {
  const el = document.querySelector('#offline');
  const secure = location.protocol === 'https:' || location.hostname === '127.0.0.1' || location.hostname === 'localhost';
  if (!('serviceWorker' in navigator) || !secure) return;
  const sw = navigator.serviceWorker;
  const isUpdate = !!sw.controller;
  sw.register('sw.js').then((reg) => reg.update()).catch((err) => console.error('[offline]', err));
  // On the iPad, reopening the app often just wakes it up: check again then.
  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState !== 'visible' || !navigator.onLine) return;
    (await sw.getRegistration())?.update().catch(() => {});
  });

  let hideTimer = null;
  let updated = false;
  let shownReady = false;
  const show = (state, text, hideAfter) => {
    el.hidden = false;
    el.dataset.state = state;
    el.textContent = text;
    clearTimeout(hideTimer);
    if (hideAfter) hideTimer = setTimeout(() => { el.hidden = true; }, hideAfter);
  };

  sw.addEventListener('controllerchange', () => {
    if (!isUpdate) return;
    // Still on the cover: switch to the new version right away.
    if (canReload()) { location.reload(); return; }
    updated = true;
    show('ready', 'Versión nueva guardada. Cierra y vuelve a abrir la app.');
  });

  let asking = null;
  sw.addEventListener('message', (e) => {
    if (e.data?.type !== 'offline-status' || updated) return;
    const { have, total } = e.data;
    if (asking === 'installing') {
      if (have < total) show('saving', `${isUpdate ? 'Guardando versión nueva' : 'Guardando para usar sin internet'}… ${Math.round((have / total) * 100)}%`);
    } else if (have >= total && !shownReady) {
      shownReady = true;
      show('ready', 'Lista para usar sin internet', 6000);
    }
  });

  // Ask the worker that is being installed first, so an update shows its real progress.
  const ask = async () => {
    const reg = await sw.getRegistration();
    const worker = reg?.installing ?? reg?.waiting ?? reg?.active;
    asking = reg?.installing ? 'installing' : 'active';
    worker?.postMessage('status');
  };
  setInterval(ask, 1500);
  ask();
}
