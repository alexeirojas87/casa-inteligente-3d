// Floor plan traced from the Roborock map screenshot (pixel coordinates of
// the app screenshot). Everything is converted to scene units with toWorld().

const SCALE = 50; // screenshot pixels per scene unit
const ORIGIN = { x: 460, y: 1000 };

export const toWorld = (x, y) => ({ x: (x - ORIGIN.x) / SCALE, z: (y - ORIGIN.y) / SCALE });
export const pxToUnits = (px) => px / SCALE;

// Floor colors come from the robot's own map, so the model looks like "our" house.
export const FLOOR = {
  blue: 0x7ea7ec,
  teal: 0x5fcdbf,
  yellow: 0xe9c46a,
  orange: 0xe28e6c,
  tile: 0xd7dee8,
  deck: 0x93b4ee,
};

export const ROOMS_PLAN = [
  { id: 'sala', label: 'Sala', rect: [205, 675, 715, 880], color: FLOOR.blue },
  { id: 'terraza', label: 'Terraza', rect: [465, 470, 595, 675], color: FLOOR.deck, outdoor: true },
  { id: 'patio', label: 'Pasillo Patio', rect: [130, 885, 385, 945], color: FLOOR.yellow },
  { id: 'bano', label: 'Baño', rect: [130, 945, 385, 1085], color: FLOOR.tile, tiles: true },
  { id: 'cocina', label: 'Cocina', rect: [510, 880, 800, 1085], color: FLOOR.teal },
  { id: 'invitados', label: 'Cuarto Invitados', rect: [120, 1085, 385, 1300], color: FLOOR.yellow },
  { id: 'trabajo', label: 'Cuarto Trabajo', rect: [460, 1085, 720, 1300], color: FLOOR.blue },
  { id: 'ninos', label: 'Cuarto Niños', rect: [120, 1300, 385, 1510], color: FLOOR.blue },
  { id: 'padres', label: 'Cuarto Padres', rect: [460, 1300, 800, 1510], color: FLOOR.teal },
];

// Hallway floors (no walls of their own: neighbouring rooms enclose them).
export const HALL_FLOORS = [
  { rect: [385, 880, 460, 1375], color: FLOOR.orange },
  { rect: [460, 880, 510, 975], color: FLOOR.orange },
];

// Openings in walls: [axis, fixed coordinate, from, to] in pixels.
// 'h' = horizontal wall (fixed y), 'v' = vertical wall (fixed x).
export const DOORS = [
  ['h', 880, 388, 507], // sala -> pasillo
  ['h', 675, 480, 580], // sala -> terraza
  ['v', 385, 885, 945], // pasillo patio -> pasillo
  ['v', 130, 892, 938], // pasillo patio -> patio exterior
  ['h', 945, 285, 345], // pasillo patio -> baño
  ['v', 510, 895, 970], // pasillo -> cocina
  ['v', 385, 1105, 1162], // pasillo -> cuarto invitados
  ['v', 460, 1100, 1158], // pasillo -> cuarto trabajo
  ['v', 385, 1315, 1365], // pasillo -> cuarto niños
  ['v', 460, 1315, 1365], // pasillo -> cuarto padres
];

// Wall pieces that do not belong to a room rectangle.
export const EXTRA_WALLS = [
  ['v', 460, 975, 1085],
  ['h', 1375, 385, 460],
];

// Where the robot enters each room, as a path from the dock (pixels).
const HALL_TOP = [440, 905];
export const ROBOT_ROUTES = {
  sala: [],
  terraza: [[530, 700], [530, 650]],
  cocina: [[440, 860], HALL_TOP, [480, 935], [545, 935]],
  patio: [[440, 860], HALL_TOP, [420, 915], [355, 915]],
  bano: [[440, 860], HALL_TOP, [420, 915], [315, 915], [315, 935]],
  pasillo: [[440, 860], HALL_TOP, [422, 1000]],
  invitados: [[440, 860], HALL_TOP, [422, 1132], [350, 1132]],
  trabajo: [[440, 860], HALL_TOP, [422, 1130], [495, 1130]],
  ninos: [[440, 860], HALL_TOP, [422, 1340], [350, 1340]],
  padres: [[440, 860], HALL_TOP, [422, 1340], [495, 1340]],
};
export const ROBOT_DOCK = [430, 742];

export const DEVICE_SPOTS = {
  echo: [262, 770],
  router: [575, 855],
  tv: [330, 690],
  sofa: [330, 830],
  fridge: [772, 905],
  washer: [175, 915],
  ac: [792, 1395],
  motionSensor: [372, 958],
  toilet: [180, 1050],
  flushSensor: [180, 1072],
};
