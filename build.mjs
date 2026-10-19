// Builds the offline presentation folder: dist/CasaInteligente
import { build } from 'esbuild';
import { cpSync, mkdirSync, rmSync, existsSync, writeFileSync, chmodSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';
import { execFileSync } from 'node:child_process';

const OUT = 'dist/CasaInteligente';
const MODEL_DIR = '.cache/vosk-model-small-es-0.42';

rmSync(OUT, { recursive: true, force: true });
mkdirSync(`${OUT}/fonts`, { recursive: true });
mkdirSync(`${OUT}/model`, { recursive: true });

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  minify: true,
  target: ['chrome110', 'safari15'],
  outfile: `${OUT}/app.js`,
  // Shown on the cover so you can tell which version a device is running.
  define: { __BUILD__: JSON.stringify(new Date().toLocaleString('es', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })) },
});

cpSync('web/index.html', `${OUT}/index.html`);
cpSync('web/styles.css', `${OUT}/styles.css`);
cpSync('web/manifest.webmanifest', `${OUT}/manifest.webmanifest`);
mkdirSync(`${OUT}/icons`, { recursive: true });
for (const f of ['icon-180.png', 'icon-192.png', 'icon-512.png']) cpSync(`web/icons/${f}`, `${OUT}/icons/${f}`);
if (!existsSync('.cache/voces')) throw new Error('Missing .cache/voces. Run: node voices.mjs');
cpSync('.cache/voces', `${OUT}/voces`, { recursive: true });
cpSync('node_modules/vosk-browser/dist/vosk.js', `${OUT}/vosk.js`);
for (const f of ['baloo-2-latin-700-normal', 'baloo-2-latin-800-normal']) cpSync(`node_modules/@fontsource/baloo-2/files/${f}.woff2`, `${OUT}/fonts/${f}.woff2`);
for (const f of ['nunito-latin-500-normal', 'nunito-latin-700-normal', 'nunito-latin-800-normal']) cpSync(`node_modules/@fontsource/nunito/files/${f}.woff2`, `${OUT}/fonts/${f}.woff2`);

if (!existsSync(MODEL_DIR)) throw new Error(`Missing ${MODEL_DIR}. Download vosk-model-small-es-0.42 into .cache first.`);
execFileSync('tar', ['-czf', `${OUT}/model/vosk-es.tar.gz`, '-C', '.cache', 'vosk-model-small-es-0.42'], { env: { ...process.env, COPYFILE_DISABLE: '1' } });

const launcher = `#!/bin/bash
# Opens the smart house in Chrome, served from this folder (no internet needed).
cd "$(dirname "$0")"
PORT=8765
if ! command -v python3 >/dev/null 2>&1; then
  osascript -e 'display alert "Falta Python 3" message "Instala Python 3 para poder usar la voz de Alexa."'
  exit 1
fi
if ! lsof -i :$PORT >/dev/null 2>&1; then
  python3 -m http.server $PORT --bind 127.0.0.1 >/dev/null 2>&1 &
  SERVER=$!
  trap 'kill $SERVER 2>/dev/null' EXIT
  sleep 1
fi
open -a "Google Chrome" "http://127.0.0.1:$PORT/index.html"
echo ""
echo "  La casa inteligente está abierta en Chrome."
echo "  Deja esta ventana abierta durante la presentación."
echo "  Para terminar, cierra esta ventana."
echo ""
wait
`;
writeFileSync(`${OUT}/Abrir Casa Inteligente.command`, launcher);
chmodSync(`${OUT}/Abrir Casa Inteligente.command`, 0o755);

writeFileSync(`${OUT}/LEEME.txt`, `NUESTRA CASA INTELIGENTE
========================

Para abrirla:
  Haz doble clic en «Abrir Casa Inteligente.command».
  Se abre Chrome con la casa. No necesita internet.
  La primera vez, Chrome pide permiso para usar el micrófono: elige «Permitir».

Para hablar con Alexa:
  Mantén presionado el anillo azul (o la barra espaciadora), di la orden y suelta.
  Ejemplos:
    «Alexa, apaga la luz del cuarto de los niños»
    «Alexa, manda el robot a limpiar la cocina»
    «Alexa, pon la luz de la sala en morado»
    «Alexa, enciende la tele»
    «Alexa, ¿tú piensas?»

Si la voz falla, usa los botones del panel «Órdenes».

Si macOS dice que el archivo no se puede abrir:
  Clic derecho sobre «Abrir Casa Inteligente.command» > Abrir > Abrir.
`);

// Offline app for the iPad: the service worker stores every file of the app.
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const files = walk(OUT)
  .map((f) => relative(OUT, f))
  .filter((f) => !f.endsWith('.command') && !f.endsWith('.txt') && !f.startsWith('.'))
  .sort();
const sha = (data) => createHash('sha1').update(data).digest('hex').slice(0, 12);
const entries = files.map((f) => [f, sha(readFileSync(join(OUT, f)))]);
const sw = readFileSync('web/sw.template.js', 'utf8')
  .replace('__VERSION__', sha(JSON.stringify(entries)))
  .replace('__FILES__', JSON.stringify(entries, null, 2));
writeFileSync(`${OUT}/sw.js`, sw);

console.log('Built', OUT, `(${files.length} files for offline use)`);
