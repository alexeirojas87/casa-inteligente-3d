// Offline speech recognition with Vosk (runs inside the browser, no internet).
// The global `Vosk` comes from vosk.js, loaded with a classic <script> tag.

const MODEL_URL = 'model/vosk-es.tar.gz';

export function createVoice({ grammar, onPartial, onResult, onStatus }) {
  let model = null;
  let recognizer = null;
  let audio = null;
  let mode = 'off'; // off | push | handsfree
  let collected = [];
  let finishing = null;

  async function load() {
    if (typeof Vosk === 'undefined') throw new Error('vosk-missing');
    if (location.protocol === 'file:') throw new Error('file-protocol');
    onStatus('loading');
    model = await Vosk.createModel(MODEL_URL);
    onStatus('ready');
  }

  async function ensureMic() {
    if (audio) return;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 },
    });
    const context = new AudioContext();
    recognizer = new model.KaldiRecognizer(context.sampleRate, JSON.stringify([...grammar, '[unk]']));
    recognizer.on('partialresult', (m) => {
      const text = m.result.partial;
      console.debug('[voz] parcial:', text);
      if (text && mode !== 'off') onPartial(joined(text));
    });
    recognizer.on('result', (m) => {
      const text = m.result.text?.trim();
      console.debug('[voz] resultado:', text);
      if (mode === 'handsfree') {
        if (text) onResult(text, 'handsfree');
        return;
      }
      if (text) collected.push(text);
      if (finishing) {
        const done = finishing;
        finishing = null;
        done();
      }
    });
    const source = context.createMediaStreamSource(stream);
    const processor = context.createScriptProcessor(4096, 1, 1);
    processor.onaudioprocess = (e) => {
      if (mode !== 'off') {
        recognizer.acceptWaveform(e.inputBuffer);
        if (location.hash.includes('debug')) console.debug('[voz] audio', Math.max(...e.inputBuffer.getChannelData(0)).toFixed(3));
      }
    };
    source.connect(processor);
    processor.connect(context.destination);
    audio = { stream, context, processor };
  }

  const joined = (partial = '') => [...collected, partial].filter(Boolean).join(' ');

  return {
    load,
    get ready() { return !!model; },
    async startPush() {
      await ensureMic();
      await audio.context.resume();
      collected = [];
      mode = 'push';
    },
    stopPush() {
      if (mode !== 'push') return Promise.resolve('');
      return new Promise((resolve) => {
        const finish = () => {
          mode = 'off';
          const text = joined();
          collected = [];
          resolve(text);
        };
        finishing = finish;
        recognizer.retrieveFinalResult();
        // Safety net in case the recognizer sends no final event.
        setTimeout(() => { if (finishing === finish) { finishing = null; finish(); } }, 1200);
      });
    },
    async setHandsFree(on) {
      if (on) {
        await ensureMic();
        await audio.context.resume();
        mode = 'handsfree';
      } else if (mode === 'handsfree') mode = 'off';
    },
  };
}
