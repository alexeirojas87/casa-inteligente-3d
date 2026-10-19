// End-to-end check: serves dist/, feeds a recorded voice clip as the microphone,
// holds the Alexa ring and verifies the house reacted. Blocks every non-local
// request to prove the app works offline.
// Usage: node test-e2e/voice.e2e.mjs <clip.wav> <expect> [screenshot.png]
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const [clip, expect, shot] = process.argv.slice(2);
const PORT = 8799;
const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: 'dist/CasaInteligente', stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 800));

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: process.env.E2E_HEADFUL ? false : 'new',
  userDataDir: resolve(process.env.E2E_PROFILE ?? '.cache/e2e-profile'),
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
    ...(clip ? [`--use-file-for-fake-audio-capture=${resolve(clip)}`] : []),
    '--autoplay-policy=no-user-gesture-required',
    '--window-size=1440,900',
    '--enable-unsafe-swiftshader',
    '--disable-features=AudioServiceOutOfProcess,AudioServiceSandbox',
  ],
  defaultViewport: { width: 1440, height: 900 },
});
const external = [];
const errors = [];
try {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const url = req.url();
    if (url.startsWith(`http://127.0.0.1:${PORT}`) || url.startsWith('data:') || url.startsWith('blob:')) req.continue();
    else { external.push(url); req.abort(); }
  });
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); if (m.text().startsWith('[voz]') && process.env.E2E_DEBUG) console.log(m.text()); });

  await page.goto(`http://127.0.0.1:${PORT}/index.html#demo`);
  const t0 = Date.now();
  await page.waitForFunction(() => ['ready', 'error'].includes(document.querySelector('#voice-status').dataset.state), { timeout: 120000 });
  const status = await page.$eval('#voice-status', (e) => `${e.dataset.state}: ${e.textContent}`);
  console.log(`voice ${status} (${((Date.now() - t0) / 1000).toFixed(1)}s)`);

  if (clip) {
    const ring = await page.$('#alexa-ring');
    const box = await ring.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await new Promise((r) => setTimeout(r, 5200));
    await page.mouse.up();
    await page.waitForFunction(() => !document.querySelector('#bubble-alexa').hidden, { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 2500));
    const heard = await page.$eval('#bubble-you p', (e) => e.textContent);
    const reply = await page.$eval('#bubble-alexa p', (e) => e.textContent);
    const state = await page.evaluate(() => ({
      ninos: window.__casa.rooms.ninos.on,
      salaColor: window.__casa.rooms.sala.color.toString(16),
      robot: window.__casa.robot.state.mode,
      robotRoom: window.__casa.robot.state.room,
    }));
    console.log('heard:', heard);
    console.log('reply:', reply);
    console.log('state:', JSON.stringify(state));
    const ok = {
      luz: state.ninos === false,
      robot: state.robotRoom === 'cocina',
      color: state.salaColor === 'a66bff',
      piensa: reply.startsWith('No. Yo no pienso'),
    }[expect];
    console.log(ok ? `PASS ${expect}` : `FAIL ${expect}`);
    process.exitCode = ok ? 0 : 1;
  }
  if (shot) await page.screenshot({ path: shot });
} finally {
  console.log('external requests blocked:', external.length ? external : 'none');
  if (errors.length) console.log('page errors:', errors.slice(0, 5));
  await browser.close();
  server.kill();
}
