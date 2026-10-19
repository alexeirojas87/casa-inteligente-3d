// Offline sound effects (Web Audio synth) and Alexa's voice.
import RECORDED from './voices.json';

let ctx;
const ac = () => (ctx ??= new AudioContext());

function tone(freq, start, dur, type = 'sine', gain = 0.18) {
  const a = ac();
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0, a.currentTime + start);
  g.gain.linearRampToValueAtTime(gain, a.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
  o.connect(g).connect(a.destination);
  o.start(a.currentTime + start);
  o.stop(a.currentTime + start + dur + 0.05);
}

export const sfx = {
  listen() { tone(660, 0, 0.12); tone(990, 0.08, 0.16); },
  stop() { tone(880, 0, 0.1); tone(560, 0.07, 0.14); },
  ok() { tone(784, 0, 0.12, 'triangle'); tone(1175, 0.1, 0.2, 'triangle'); },
  error() { tone(330, 0, 0.18, 'square', 0.06); tone(247, 0.15, 0.25, 'square', 0.06); },
  beep() { tone(1400, 0, 0.08, 'square', 0.05); tone(1400, 0.14, 0.08, 'square', 0.05); },
  click() { tone(1200, 0, 0.04, 'triangle', 0.08); },
  flush() {
    const a = ac();
    const len = a.sampleRate * 2.4;
    const buf = a.createBuffer(1, len, a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.sin((i / len) * Math.PI);
    const src = a.createBufferSource();
    src.buffer = buf;
    const f = a.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(600, a.currentTime);
    f.frequency.linearRampToValueAtTime(1800, a.currentTime + 0.8);
    f.frequency.linearRampToValueAtTime(400, a.currentTime + 2.4);
    const g = a.createGain();
    g.gain.value = 0.35;
    src.connect(f).connect(g).connect(a.destination);
    src.start();
  },
  // iPad Safari only allows sound after a tap: resume and play a tiny silent buffer.
  unlock() {
    const a = ac();
    a.resume();
    if (a.__unlocked) return;
    a.__unlocked = true;
    const src = a.createBufferSource();
    src.buffer = a.createBuffer(1, 1, 22050);
    src.connect(a.destination);
    src.start();
  },
};

let voice = null;
function pickVoice() {
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('es'));
  // Prefer voices that live on the computer: they work without internet.
  const local = voices.filter((v) => v.localService);
  // macOS "Premium"/"Enhanced" voices sound far more natural than the compact ones.
  const quality = (v) => (/premium/i.test(v.name) ? 2 : /enhanced|mejorada/i.test(v.name) ? 1 : 0);
  const prefer = ['Paulina', 'Mónica', 'Monica', 'Marisol', 'Helena', 'Sabina', 'Laura'];
  const rank = (v) => quality(v) * 100 - (prefer.findIndex((n) => v.name.includes(n)) + 1 || 50);
  voice = [...local].sort((a, b) => rank(b) - rank(a))[0] ?? null;
  return voice;
}
if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = pickVoice;
  pickVoice();
}

// Pre-recorded sentences (see voices.mjs): same Spanish voice on any computer.
// They play through Web Audio, so once the first tap unlocks sound (iPad) they
// can also play later, e.g. after a delay in the presentation.
// An interrupted sentence still reports that it ended, so nobody waits forever.
let current = null;
let finishCurrent = null;
const clips = new Map();
const loadClip = (file) => {
  if (!clips.has(file)) clips.set(file, fetch(file).then((r) => r.arrayBuffer()).then((b) => ac().decodeAudioData(b)));
  return clips.get(file);
};

function playClip(file, { onStart, end }) {
  const a = ac();
  let stopped = false;
  let src = null;
  let guard = null;
  current = { pause() { stopped = true; clearTimeout(guard); try { src?.stop(); } catch {} } };
  loadClip(file).then((buffer) => {
    if (stopped) return;
    if (a.state !== 'running') throw new Error('audio locked');
    src = a.createBufferSource();
    src.buffer = buffer;
    src.connect(a.destination);
    src.onended = () => { clearTimeout(guard); end(); };
    src.start();
    guard = setTimeout(end, buffer.duration * 1000 + 1500);
    onStart?.();
  }).catch(() => { if (!stopped) playElement(file, { onStart, end }); });
}

function playElement(file, { onStart, end }) {
  const audio = new Audio(file);
  current = audio;
  audio.onplay = () => onStart?.();
  audio.onended = end;
  audio.onerror = end;
  audio.play().catch(end);
}

export function speak(text, { onStart, onEnd } = {}) {
  stopSpeaking();
  const file = RECORDED.files[text];
  if (file) {
    let ended = false;
    const end = () => { if (!ended) { ended = true; onEnd?.(); } };
    finishCurrent = end;
    if (typeof AudioContext !== 'undefined') ac().resume?.();
    playClip(file, { onStart, end });
    window.__casaLastSpeech = { text, source: 'recorded', file };
    return;
  }
  window.__casaLastSpeech = { text, source: 'tts' };
  let ended = false;
  const end = () => { if (!ended) { ended = true; onEnd?.(); } };
  finishCurrent = end;
  onEnd = end;
  if (typeof speechSynthesis === 'undefined' || !(voice ?? pickVoice())) {
    onStart?.();
    setTimeout(() => onEnd?.(), Math.min(4000, 600 + text.length * 45));
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = 1.05;
  u.pitch = 1.05;
  u.onstart = () => onStart?.();
  u.onend = () => onEnd?.();
  u.onerror = () => onEnd?.();
  speechSynthesis.speak(u);
}

export function stopSpeaking() {
  current?.pause();
  current = null;
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
  const finish = finishCurrent;
  finishCurrent = null;
  finish?.();
}
