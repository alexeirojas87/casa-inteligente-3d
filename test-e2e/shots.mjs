// Visual check: takes screenshots of key moments. Usage: node test-e2e/shots.mjs <outDir>
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const out = resolve(process.argv[2] ?? '.');
const PORT = 8796;
const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: 'dist/CasaInteligente', stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 800));
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  userDataDir: resolve('.cache/e2e-profile'),
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--enable-unsafe-swiftshader'],
  defaultViewport: { width: Number(process.env.W ?? 1440), height: Number(process.env.H ?? 900) },
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const errors = [];
try {
  const page = await browser.newPage();
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(`http://127.0.0.1:${PORT}/index.html#demo`);
  await sleep(2500);
  const shot = (name) => page.screenshot({ path: `${out}/${name}.png` });
  const only = process.env.ONLY?.split(',');
  const want = (n) => !only || only.includes(n);

  if (want('inicio')) await shot('inicio');

  if (want('robot')) {
    await page.evaluate(() => window.__casa.runOrder('alexa manda el robot a limpiar el cuarto de los niños'));
    await sleep(9000);
    await shot('robot');
  }
  if (want('wifi')) {
    await page.click('#toggle-wifi');
    await page.evaluate(() => window.__casa.runOrder('alexa apaga todas las luces'));
    await sleep(1200);
    await shot('wifi');
    await page.click('#toggle-wifi');
    await sleep(3000);
  }
  if (want('bano')) {
    await page.evaluate(() => window.__casa.runOrder('alexa enciende la tele'));
    await page.click('[data-act="motion"]');
    await sleep(3500);
    await page.click('[data-act="flush"]');
    await sleep(1300);
    await shot('bano');
  }
  if (want('arriba')) {
    await page.click('#toggle-view');
    await sleep(1800);
    await shot('arriba');
    await page.click('#toggle-view');
  }
  if (want('dia')) {
    await page.click('#toggle-day');
    await page.evaluate(() => window.__casa.runOrder('alexa enciende el aire acondicionado'));
    await sleep(4000);
    await shot('dia');
  }
} finally {
  if (errors.length) console.log('page errors:', errors.slice(0, 5));
  await browser.close();
  server.kill();
}
