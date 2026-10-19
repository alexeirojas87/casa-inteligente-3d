// Proves the installed app works with no internet and no server:
// 1) first visit saves everything, 2) the server is stopped and the browser goes
// offline, 3) after reloading, the voice still recognizes an order and Alexa answers
// with her recorded voice. Usage: node test-e2e/offline.e2e.mjs <clip.wav> <profileDir>
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const [clip, profile] = process.argv.slice(2);
const PORT = 8798;
const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: 'dist/CasaInteligente', stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 800));
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  userDataDir: resolve(profile),
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-audio-capture=${resolve(clip)}`,
    '--autoplay-policy=no-user-gesture-required', '--enable-unsafe-swiftshader', '--disable-features=AudioServiceOutOfProcess,AudioServiceSandbox'],
  defaultViewport: { width: 1180, height: 820 },
});
let ok = false;
const errors = [];
try {
  const page = await browser.newPage();
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(`http://127.0.0.1:${PORT}/index.html#demo`);
  await page.waitForFunction(() => document.querySelector('#offline').dataset.state === 'ready', { timeout: 180000 });
  console.log('saved:', await page.$eval('#offline', (e) => e.textContent));
  await page.waitForFunction(() => document.querySelector('#voice-status').dataset.state === 'ready', { timeout: 120000 });

  server.kill();
  await page.setOfflineMode(true);
  await page.reload();
  await page.waitForFunction(() => document.querySelector('#voice-status')?.dataset.state === 'ready', { timeout: 120000 });
  console.log('offline reload: voice ready');

  const box = await (await page.$('#alexa-ring')).boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await new Promise((r) => setTimeout(r, 5200));
  await page.mouse.up();
  await page.waitForFunction(() => !document.querySelector('#bubble-alexa').hidden, { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 2500));
  const result = await page.evaluate(() => ({
    heard: document.querySelector('#bubble-you p').textContent,
    reply: document.querySelector('#bubble-alexa p').textContent,
    ninos: window.__casa.rooms.ninos.on,
    speech: window.__casaLastSpeech,
  }));
  console.log(JSON.stringify(result));
  // The recorded voice clip must be playable from the device cache.
  const clipOk = await page.evaluate(async (file) => {
    const res = await fetch(file);
    const buf = await new AudioContext().decodeAudioData(await res.arrayBuffer());
    return res.ok && buf.duration > 0.5;
  }, result.speech.file);
  console.log('voice clip from device:', clipOk);
  ok = result.ninos === false && result.speech?.source === 'recorded' && clipOk;
} finally {
  await browser.close();
  server.kill();
}
if (errors.length) console.log('page errors:', errors);
console.log(ok && !errors.length ? 'PASS offline' : 'FAIL offline');
process.exit(ok && !errors.length ? 0 : 1);
