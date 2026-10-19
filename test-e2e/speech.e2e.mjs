// Checks that Alexa answers with pre-recorded Spanish audio, never Chrome's TTS.
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
const PORT = 8793;
const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: 'dist/CasaInteligente', stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 800));
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--autoplay-policy=no-user-gesture-required'] });
const failed = [];
try {
  const p = await b.newPage();
  p.on('response', (r) => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
  await p.goto(`http://127.0.0.1:${PORT}/index.html#demo`);
  await new Promise((r) => setTimeout(r, 1500));
  const orders = ['alexa apaga la luz del cuarto', 'alexa pon la luz de la cocina en verde', 'alexa enciende la tele', 'alexa tú piensas', 'alexa manda el robot al baño', 'blablá', 'alexa apaga todas las luces'];
  let bad = 0;
  for (const o of orders) {
    const r = await p.evaluate(async (o) => {
      await window.__casa.runOrder(o);
      return window.__casaLastSpeech;
    }, o);
    const ok = r?.source === 'recorded';
    if (!ok) bad++;
    console.log(ok ? 'recorded' : `TTS!   `, '|', r?.text);
  }
  await new Promise((r) => setTimeout(r, 6000)); // robot reaches the bathroom step
  console.log('blocked reply:', await p.evaluate(() => window.__casaLastSpeech));
  console.log(bad || failed.length ? `FAIL (${bad} tts, ${failed.length} http errors)` : 'PASS all replies recorded');
  if (failed.length) console.log(failed);
} finally { await b.close(); server.kill(); }
