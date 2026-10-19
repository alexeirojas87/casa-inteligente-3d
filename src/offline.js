// Installs the service worker that keeps the app on the device, and tells
// the user when everything is saved for use without internet.
export function setupOffline() {
  const el = document.querySelector('#offline');
  const secure = location.protocol === 'https:' || location.hostname === '127.0.0.1' || location.hostname === 'localhost';
  if (!('serviceWorker' in navigator) || !secure) return;
  navigator.serviceWorker.register('sw.js').catch((err) => console.error('[offline]', err));

  let timer = null;
  navigator.serviceWorker.addEventListener('message', (e) => {
    if (e.data?.type !== 'offline-status') return;
    const { have, total } = e.data;
    el.hidden = false;
    if (have >= total) {
      el.dataset.state = 'ready';
      el.textContent = 'Lista para usar sin internet';
      clearInterval(timer);
      setTimeout(() => { el.hidden = true; }, 6000);
    } else {
      el.dataset.state = 'saving';
      el.textContent = `Guardando para usar sin internet… ${Math.round((have / total) * 100)}%`;
    }
  });
  const ask = async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    const worker = reg?.active ?? reg?.waiting ?? reg?.installing;
    worker?.postMessage('status');
  };
  timer = setInterval(ask, 1500);
  ask();
}
