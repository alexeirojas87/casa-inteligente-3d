// Walks the presentation with the keyboard and screenshots every step.
// Usage: node test-e2e/story.mjs <outDir>   (ONLY=3,4 limits the steps)
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const out = resolve(process.argv[2] ?? '.');
const PORT = 8797;
const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: 'dist/CasaInteligente', stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 800));
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'],
  defaultViewport: { width: Number(process.env.W ?? 1440), height: Number(process.env.H ?? 900) },
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const errors = [];
const external = [];
let failed = false;
try {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (!req.url().startsWith(`http://127.0.0.1:${PORT}`) && !req.url().startsWith('data:') && !req.url().startsWith('blob:')) { external.push(req.url()); req.abort(); } else req.continue();
  });
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(`http://127.0.0.1:${PORT}/index.html`);
  const only = process.env.ONLY?.split(',').map(Number);
  const total = await page.evaluate(() => document.querySelectorAll('.story-dot').length);
  let i = 0;
  await sleep(4200);
  for (;;) {
    const step = await page.evaluate(() => window.__casaStep);
    if (step.index !== i) { console.error(`expected step ${i}, got ${step.index}`); failed = true; break; }
    if (!only || only.includes(i)) await page.screenshot({ path: `${out}/step-${String(i).padStart(2, '0')}-${step.section}.png` });
    await page.keyboard.press(i % 2 ? 'PageDown' : 'ArrowRight');
    await sleep(100);
    const after = await page.evaluate(() => window.__casaStep.index);
    if (after === i) break;
    i = after;
    await sleep(Number(process.env.WAIT ?? 3800));
  }
  // Going back must work too.
  await page.keyboard.press('ArrowLeft');
  const back = await page.evaluate(() => window.__casaStep.index);
  console.log(`steps: ${i + 1}, sections: ${total}, back -> ${back}`);
  if (back !== i - 1) failed = true;
} finally {
  await browser.close();
  server.kill();
}
if (errors.length) { console.error('page errors:', errors); failed = true; }
if (external.length) { console.error('external requests:', external); failed = true; }
console.log(failed ? 'FAIL' : 'PASS');
process.exit(failed ? 1 : 0);
