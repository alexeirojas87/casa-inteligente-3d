import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseCommand } from '../src/commands.js';

// Sentences below are real outputs from the offline recognizer (including its
// small mistakes like "de las sala" or "vuelve la base").
const cases = [
  ['alexa apaga la luz del cuarto de los niños', { type: 'light', room: 'ninos', on: false }],
  ['alexa apaga la luz del cuarto', { type: 'light', room: 'ninos', on: false }],
  ['alexa enciende la luz de las sala', { type: 'light', room: 'sala', on: true }],
  ['alexa prende la luz de la cocina', { type: 'light', room: 'cocina', on: true }],
  ['alexa apaga la luz del pasillo del patio', { type: 'light', room: 'patio', on: false }],
  ['alexa manda el robot limpiar la cocina', { type: 'robot.clean', room: 'cocina' }],
  ['alexa manda el robot del baño', { type: 'robot.clean', room: 'bano' }],
  ['alexa limpia el cuarto de los padres', { type: 'robot.clean', room: 'padres' }],
  ['alexa el robot vuelve la base', { type: 'robot.dock' }],
  ['alexa robot a la base', { type: 'robot.dock' }],
  ['alexa pon la luz de las sala en azul', { type: 'light.color', room: 'sala', color: 'azul' }],
  ['alexa pon la luz del cuarto de trabajo en verde', { type: 'light.color', room: 'trabajo', color: 'verde' }],
  ['alexa enciende la tele', { type: 'device', device: 'tv', on: true }],
  ['alexa apaga la televisión', { type: 'device', device: 'tv', on: false }],
  ['alexa enciende el aire acondicionado', { type: 'device', device: 'ac', on: true }],
  ['alexa apaga la lavadora', { type: 'device', device: 'washer', on: false }],
  ['alexa apaga todas las luces', { type: 'light.all', on: false }],
  ['alexa enciende las luces', { type: 'light.all', on: true }],
  ['alexa buenas noches', { type: 'scene.night' }],
  ['alexa tú piensas', { type: 'talk.think' }],
  ['alexa', { type: 'wake' }],
  ['[unk] de la', { type: 'unknown' }],
];

for (const [text, expected] of cases) {
  test(`"${text}"`, () => {
    const { wake, ...intent } = parseCommand(text);
    assert.deepEqual(intent, expected);
  });
}

test('wake word is detected only when "alexa" is said', () => {
  assert.equal(parseCommand('alexa enciende la tele').wake, true);
  assert.equal(parseCommand('enciende la tele').wake, false);
});

test('commands without wake word still parse (push-to-talk)', () => {
  const { wake, ...intent } = parseCommand('apaga la luz de la sala');
  assert.deepEqual(intent, { type: 'light', room: 'sala', on: false });
});
