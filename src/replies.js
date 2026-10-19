import { ROOMS } from './commands.js';

const de = (roomId) => `de ${ROOMS[roomId].name}`.replace(/^de el /, 'del ');
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const REPLY = {
  lightOn: (r) => `Listo, encendí la luz ${de(r)}.`,
  lightOff: (r) => `Listo, apagué la luz ${de(r)}.`,
  lightAlreadyOn: (r) => `La luz ${de(r)} ya estaba encendida.`,
  lightAlreadyOff: (r) => `La luz ${de(r)} ya estaba apagada.`,
  lightColor: (r, color) => `Puse la luz ${de(r)} en ${color}.`,
  allOn: () => 'Encendí todas las luces de la casa.',
  allOff: () => 'Apagué todas las luces de la casa.',
  robotClean: (r) => `Enviando el robot a limpiar ${ROOMS[r].name}.`,
  robotTryBath: () => 'Voy a intentar llevar el robot al baño.',
  robotBlocked: () => '¡Uy! El robot no puede entrar al baño porque hay un escalón. Vuelve a su base.',
  robotDock: () => 'El robot vuelve a su base para cargarse.',
  robotAlreadyDocked: () => 'El robot ya está en su base, cargándose.',
  robotDone: (r) => `El robot terminó de limpiar ${ROOMS[r].name}.`,
  tvOn: () => 'Encendí la tele.',
  tvOff: () => 'Apagué la tele. Recuerda: en espera también gasta energía.',
  washerOn: () => 'Encendí la lavadora con agua fría. ¡Así ahorramos energía!',
  washerOff: () => 'Apagué la lavadora.',
  acOn: () => 'Encendí el aire del cuarto de los padres a 24 grados.',
  acOff: () => 'Apagué el aire acondicionado.',
  night: () => 'Buenas noches. Apagué las luces y la tele, y el robot está en su base.',
  morning: () => '¡Buenos días! Encendí las luces de la sala y de la cocina.',
  think: () => 'No. Yo no pienso como las personas. Solo sigo las instrucciones que me programaron.',
  whoami: () => 'Soy un asistente de voz. Escucho tu orden, la convierto en datos y la envío por el WiFi al aparato correcto.',
  hello: () => '¡Hola! Soy Alexa. ¿Qué quieres que haga en la casa?',
  thanks: () => '¡De nada!',
  wake: () => '¿Sí? Te escucho.',
  unknown: () => 'No entendí esa orden. Prueba con: «Alexa, enciende la luz de la sala».',
  empty: () => 'No escuché nada. Mantén presionado el anillo mientras hablas.',
};

export const roomTitle = (r) => cap(ROOMS[r].name);
