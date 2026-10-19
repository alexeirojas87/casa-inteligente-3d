// Pre-records every sentence Alexa can say with a Spanish macOS voice, so the
// presentation never depends on Chrome's text-to-speech or the system language.
// Usage: node voices.mjs [VoiceName]   (default: best Spanish voice installed)
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { REPLY } from './src/replies.js';
import { ROOMS, COLORS } from './src/commands.js';

const OUT = '.cache/voces';

function bestVoice() {
  const list = execFileSync('say', ['-v', '?'], { encoding: 'utf8' })
    .split('\n')
    .map((l) => l.match(/^(.+?)\s+(es_[A-Z]{2})\s/))
    .filter(Boolean)
    .map(([, name, lang]) => ({ name: name.trim(), lang }));
  const score = (v) => (/premium/i.test(v.name) ? 200 : /enhanced|mejorad/i.test(v.name) ? 100 : 0)
    + (v.name.startsWith('Paulina') ? 20 : v.name.startsWith('Mónica') ? 10 : 0)
    + (v.lang === 'es_MX' ? 1 : 0);
  return list.sort((a, b) => score(b) - score(a))[0]?.name;
}

const voice = process.argv[2] ?? bestVoice();
if (!voice) throw new Error('No Spanish voice installed (System Settings > Accessibility > Spoken Content).');

const rooms = Object.keys(ROOMS);
const texts = new Set();
for (const [key, fn] of Object.entries(REPLY)) {
  if (key === 'lightColor') rooms.forEach((r) => Object.keys(COLORS).forEach((c) => texts.add(fn(r, c))));
  else if (fn.length === 1) rooms.forEach((r) => texts.add(fn(r)));
  else texts.add(fn());
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const manifest = {};
for (const text of texts) {
  const id = createHash('sha1').update(text).digest('hex').slice(0, 12);
  const aiff = `${OUT}/${id}.aiff`;
  execFileSync('say', ['-v', voice, '-r', '185', '-o', aiff, text]);
  execFileSync('afconvert', ['-f', 'm4af', '-d', 'aac', '-b', '64000', aiff, `${OUT}/${id}.m4a`]);
  rmSync(aiff);
  manifest[text] = `voces/${id}.m4a`;
}
writeFileSync('src/voices.json', JSON.stringify({ voice, files: manifest }, null, 1));
console.log(`Recorded ${texts.size} sentences with "${voice}"`);
