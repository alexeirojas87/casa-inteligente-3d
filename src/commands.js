// Turns a recognized sentence into an intent the house can execute.
// Pure module: no DOM, no Three.js, so it can be tested with node --test.

export const ROOMS = {
  sala: { name: 'la sala' },
  cocina: { name: 'la cocina' },
  patio: { name: 'el pasillo del patio' },
  pasillo: { name: 'el pasillo' },
  bano: { name: 'el baño' },
  invitados: { name: 'el cuarto de invitados' },
  trabajo: { name: 'el cuarto de trabajo' },
  ninos: { name: 'el cuarto de los niños' },
  padres: { name: 'el cuarto de los padres' },
  terraza: { name: 'la terraza' },
};

export const COLORS = {
  azul: 0x4f8dff,
  rojo: 0xff4d4d,
  verde: 0x3ddc84,
  amarillo: 0xffd23f,
  morado: 0xa66bff,
  rosa: 0xff7ac8,
  naranja: 0xff9a3c,
  celeste: 0x6fe3ff,
  blanco: 0xfff1d6,
};

// Words the recognizer is allowed to produce. Restricting the vocabulary
// makes recognition far more reliable in a noisy classroom.
export const GRAMMAR_WORDS = [
  'alexa', 'alexia', 'apaga', 'apagar', 'apaguen', 'enciende', 'encender', 'enciendan',
  'prende', 'prender', 'pon', 'ponla', 'cambia', 'luz', 'luces', 'cuarto', 'habitación',
  'dormitorio', 'sala', 'cocina', 'pasillo', 'patio', 'baño', 'niños', 'padres',
  'invitados', 'trabajo', 'oficina', 'terraza', 'todas', 'todo', 'toda', 'casa',
  'robot', 'robotito', 'aspiradora', 'limpia', 'limpiar', 'manda', 'envía', 'vuelve',
  'regresa', 'base', 'tele', 'televisión', 'lavadora', 'aire', 'acondicionado',
  'piensas', 'piensa', 'hola', 'gracias', 'quién', 'eres', 'buenas', 'noches', 'días',
  'cómo', 'funcionas', 'tú', 'a', 'la', 'el', 'de', 'del', 'las', 'los', 'en', 'al',
  'y', 'por', 'favor', 'color', 'que', 'se',
  ...Object.keys(COLORS),
];

const ON = ['enciende', 'encender', 'enciendan', 'prende', 'prender'];
const OFF = ['apaga', 'apagar', 'apaguen'];
const SET_COLOR = ['pon', 'ponla', 'cambia'];
const ROBOT = ['robot', 'robotito', 'aspiradora'];
const CLEAN = ['limpia', 'limpiar', 'manda', 'envía'];
const RETURN = ['vuelve', 'regresa'];

const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/[¿?¡!.,]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

const hasAny = (words, list) => words.some((w) => list.includes(w));

// "cuarto" alone means the kids' room: the presenters are the kids.
export function findRoom(words) {
  if (words.includes('patio')) return 'patio';
  if (words.includes('niños')) return 'ninos';
  if (words.includes('padres')) return 'padres';
  if (words.includes('invitados')) return 'invitados';
  if (words.includes('trabajo') || words.includes('oficina')) return 'trabajo';
  if (words.includes('sala')) return 'sala';
  if (words.includes('cocina')) return 'cocina';
  if (words.includes('baño')) return 'bano';
  if (words.includes('terraza')) return 'terraza';
  if (words.includes('pasillo')) return 'pasillo';
  if (['cuarto', 'habitación', 'dormitorio'].some((w) => words.includes(w))) return 'ninos';
  return null;
}

function findColor(words) {
  return Object.keys(COLORS).find((c) => words.includes(c)) ?? null;
}

const isWholeHouse = (words) =>
  words.includes('todas') || words.includes('todo') || (words.includes('toda') && words.includes('casa'));

/**
 * @param {string} text recognized sentence
 * @returns {{type: string, [key: string]: any, wake: boolean}}
 */
export function parseCommand(text) {
  const words = normalize(text);
  const wake = words.includes('alexa') || words.includes('alexia');
  const room = findRoom(words);
  const result = (intent) => ({ ...intent, wake });

  if (words.length === 0) return result({ type: 'empty' });

  if (hasAny(words, ROBOT) || (hasAny(words, ['limpia', 'limpiar']) && room)) {
    if (hasAny(words, RETURN) || (words.includes('base') && !room)) return result({ type: 'robot.dock' });
    if (room) return result({ type: 'robot.clean', room });
    if (hasAny(words, CLEAN)) return result({ type: 'robot.clean', room: 'sala' });
    return result({ type: 'robot.dock' });
  }

  if (words.includes('tele') || words.includes('televisión')) {
    return result({ type: 'device', device: 'tv', on: !hasAny(words, OFF) });
  }
  if (words.includes('lavadora')) {
    return result({ type: 'device', device: 'washer', on: !hasAny(words, OFF) });
  }
  if (words.includes('aire')) {
    return result({ type: 'device', device: 'ac', on: !hasAny(words, OFF) });
  }

  const color = findColor(words);
  if (color && (hasAny(words, SET_COLOR) || hasAny(words, ['luz', 'luces']) || room)) {
    return result({ type: 'light.color', room: room ?? 'sala', color });
  }

  if (words.includes('buenas') && words.includes('noches')) return result({ type: 'scene.night' });
  if (words.includes('buenas') && words.includes('días')) return result({ type: 'scene.morning' });

  if (hasAny(words, ON) || hasAny(words, OFF)) {
    const on = hasAny(words, ON) && !hasAny(words, OFF);
    if (isWholeHouse(words) || (words.includes('luces') && !room)) return result({ type: 'light.all', on });
    if (room) return result({ type: 'light', room, on });
    return result({ type: 'light', room: 'sala', on });
  }

  if (words.includes('piensas') || words.includes('piensa')) return result({ type: 'talk.think' });
  if (words.includes('funcionas') || (words.includes('quién') && words.includes('eres')))
    return result({ type: 'talk.whoami' });
  if (words.includes('hola')) return result({ type: 'talk.hello' });
  if (words.includes('gracias')) return result({ type: 'talk.thanks' });

  if (wake && words.every((w) => w === 'alexa' || w === 'alexia')) return result({ type: 'wake' });
  return result({ type: 'unknown' });
}
