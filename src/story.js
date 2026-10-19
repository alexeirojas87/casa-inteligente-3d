import * as THREE from 'three';
import { toWorld } from './plan.js';

// The guided presentation. Texts come from the school report
// "La Informática en el Hogar" (6to A). Each step sets the whole scene, so
// going backwards always shows the right state.

export const SECTIONS = [
  { id: 'portada', name: 'Portada' },
  { id: 'intro', name: 'Introducción' },
  { id: 'electro', name: 'Electrodomésticos' },
  { id: 'casa', name: 'Casa inteligente' },
  { id: 'energia', name: 'Energía' },
  { id: 'riesgos', name: 'Riesgos' },
  { id: 'demo', name: 'Demostración' },
  { id: 'piensan', name: '¿Piensan?' },
  { id: 'fin', name: 'Conclusiones' },
];

const EVENING = ['sala', 'cocina', 'ninos', 'pasillo'];
const ALL = ['sala', 'cocina', 'patio', 'pasillo', 'bano', 'invitados', 'trabajo', 'ninos', 'padres', 'terraza'];
const at = (px, py, y = 0.6) => { const p = toWorld(px, py); return new THREE.Vector3(p.x, y, p.z); };
const COMPUTER = () => at(600, 1105, 0.95);
const DINING = () => at(640, 740, 0.6);

const ELECTRO_LEAD = 'Hoy en día, la mayoría de los electrodomésticos modernos tienen un "chip" o microprocesador que funciona como una pequeña computadora. Estos son algunos ejemplos:';
const ENERGY_LEAD = 'La tecnología en casa también nos ayuda a cuidar el planeta. Aquí hay algunas formas de ahorrar energía:';
const RISK_LEAD = 'Aunque la tecnología nos facilita la vida, también tiene riesgos que debemos conocer:';

export const STEPS = [
  // ---------- Portada ----------
  {
    section: 'portada',
    cover: true,
    enter(c) {
      c.base({ lights: ALL, labels: false });
      c.fly(c.poses.cover, 0.01);
      c.build();
      c.orbit(true);
    },
  },

  // ---------- Introducción ----------
  {
    section: 'intro',
    title: 'Introducción',
    paragraphs: [
      'En la actualidad, la tecnología ha llegado a casi todos los rincones de nuestra vida, y nuestro hogar no es la excepción. Ya no solo usamos computadoras de escritorio o laptops; ahora, muchos de los aparatos que usamos a diario, como la lavadora o el refrigerador, tienen pequeñas computadoras incorporadas para funcionar mejor.',
    ],
    enter(c) {
      c.base({ lights: [] });
      c.fly(c.poses.overview, 1.6);
      // The house "wakes up": each appliance shows its little computer.
      const order = ['washer', 'fridge', 'tv', 'microwave', 'ac', 'router', 'echo'];
      order.forEach((d, i) => c.later(900 + i * 450, () => c.callouts.show(d, c.anchors[d](), { icon: 'chip', kind: 'chip' })));
      ALL.forEach((r, i) => c.later(600 + i * 280, () => c.setLight(r, true)));
    },
  },
  {
    section: 'intro',
    title: 'Introducción',
    paragraphs: [
      'En la actualidad, la tecnología ha llegado a casi todos los rincones de nuestra vida, y nuestro hogar no es la excepción. Ya no solo usamos computadoras de escritorio o laptops; ahora, muchos de los aparatos que usamos a diario, como la lavadora o el refrigerador, tienen pequeñas computadoras incorporadas para funcionar mejor.',
      'Este trabajo tiene como objetivo investigar cómo la tecnología se ha integrado en nuestras casas, qué es exactamente una "casa inteligente", cómo podemos usar estos avances para ahorrar energía y, muy importante, cuáles son los riesgos que debemos conocer para usar la tecnología de forma segura. Finalmente, responderemos a una pregunta muy interesante: <mark>¿realmente piensan las cosas?</mark>',
    ],
    enter(c) {
      c.base({ lights: EVENING });
      c.fly(c.poses.overview, 1.2);
      c.orbit(true, 0.35);
    },
  },

  // ---------- Electrodomésticos ----------
  ...[
    { d: 'washer', name: 'Lavadoras y secadoras', text: 'Tienen computadoras que controlan el tiempo, la cantidad de agua y la temperatura según el tipo de ropa.', example: 'Para la ropa delicada se elige un programa suave.', off: [-1.0, 3.8, 0.9], run: (c) => c.devices.setWasher(true) },
    { d: 'fridge', name: 'Refrigeradores', text: 'Los modelos más nuevos tienen pantallas táctiles y computadoras que regulan la temperatura y avisan si la puerta queda abierta.', example: 'El aviso recuerda cerrarla para no gastar energía de más.', off: [-1.6, 2.4, 3.4], run: (c) => { c.devices.fridge.open = true; c.devices.fridge.openedAt = c.now() - 3; c.devices.fridge.warned = true; } },
    { d: 'microwave', name: 'Hornos microondas', text: 'Usan una computadora para controlar el tiempo y la potencia de cocción.', example: 'Con el botón de descongelar ajusta la potencia sola.', off: [-1.2, 1.6, 2.6], run: (c) => c.devices.setKitchen('microwave', true) },
    { d: 'tv', name: 'Televisores inteligentes (Smart TV)', text: 'Tienen computadoras completas que permiten conectarse a internet, usar aplicaciones y reproducir videos.', example: 'Puedes ver una serie sin necesidad de otro aparato.', off: [-1.2, 2.2, 3.8], run: (c) => c.devices.setTv(true) },
    { d: 'ac', name: 'Aires acondicionados', text: 'Incorporan sistemas computarizados para mantener la temperatura ideal y ahorrar energía.', example: 'Reducen la potencia cuando no hay nadie en el cuarto.', off: [-3.8, 2.2, 0.4], run: (c) => c.devices.setAc(true) },
    { d: 'coffee', name: 'Cafeteras y lavavajillas', text: 'También tienen sistemas programables para preparar café o lavar platos de forma automática.', example: 'La cafetera puede empezar a preparar café a una hora fijada.', off: [-1.4, 1.8, 2.8], run: (c) => { c.devices.setKitchen('coffee', true); c.devices.setKitchen('dishwasher', true); c.callouts.show('dishwasher', c.anchors.dishwasher(), { icon: 'chip', kind: 'chip', delay: 500 }); } },
  ].map((item, i, list) => ({
    section: 'electro',
    title: '¿Qué electrodomésticos tienen una computadora incorporada?',
    lead: ELECTRO_LEAD,
    item: { name: item.name, text: item.text, example: item.example },
    counter: [i + 1, list.length],
    enter(c) {
      c.base({ lights: ALL });
      // Earlier appliances keep their chip, so the kitchen fills up with them.
      list.slice(0, i).forEach((prev) => c.callouts.show(prev.d, c.anchors[prev.d](), { icon: 'chip', kind: 'chip quiet' }));
      c.look(c.anchors[item.d](), item.off);
      c.later(700, () => { c.callouts.show(item.d, c.anchors[item.d](), { icon: 'chip', text: 'chip', kind: 'chip' }); item.run(c); });
    },
  })),

  // ---------- Casa inteligente ----------
  {
    section: 'casa',
    title: '¿Qué es una casa inteligente?',
    item: {
      text: 'Una casa inteligente es una vivienda donde los aparatos, luces, puertas y sistemas de seguridad están conectados a internet y se pueden controlar de forma remota.',
      example: 'Un sensor de movimiento enciende la luz del pasillo cuando alguien pasa.',
      note: 'En nuestra casa, el sensor de movimiento está en el baño.',
    },
    enter(c) {
      c.base({ lights: EVENING, wifi: true });
      c.fly(c.poses.overview, 1.2);
      c.callouts.show('router', c.anchors.router(), { icon: 'wifi', text: 'WiFi', kind: 'info' });
      c.later(2600, () => { c.fly(c.poses.bano, 1.2); c.personEnter(); });
    },
  },
  {
    section: 'casa',
    title: '¿Cómo funciona?',
    item: {
      text: 'Se pueden manejar desde un teléfono celular, una tablet o incluso con la voz (usando asistentes como Alexa o Google Home).',
      example: 'Al decir “enciende la luz de la sala”, el asistente envía la orden al foco.',
    },
    enter(c) {
      c.base({ lights: ['cocina', 'pasillo'] });
      c.fly(c.poses.sala, 1.2);
      c.later(1300, () => c.callouts.show('echo', c.anchors.echo(), { icon: 'voice', text: '«Enciende la luz de la sala»', kind: 'info' }));
      c.later(2300, () => c.alexaOrder('sala'));
    },
  },
  {
    section: 'casa',
    title: '¿Para qué sirve?',
    item: {
      text: 'Sirve para hacer la vida más cómoda, aumentar la seguridad y ahorrar energía.',
      example: 'Puedes apagar las luces desde tu celular si olvidaste apagarlas, o encender el aire acondicionado antes de llegar a casa.',
    },
    enter(c) {
      c.base({ lights: EVENING, wifi: true });
      c.fly(c.poses.overview, 1.2);
      c.later(800, () => c.callouts.show('echo', c.anchors.echo(), { icon: 'voice', text: 'Comodidad', kind: 'info' }));
      c.later(1300, () => c.callouts.show('router', c.anchors.router(), { icon: 'lock', text: 'Seguridad', kind: 'info' }));
      c.later(1800, () => { c.callouts.show('ac', c.anchors.ac(), { icon: 'leaf', text: 'Ahorro', kind: 'info' }); c.devices.setAc(true); });
    },
  },

  // ---------- Energía ----------
  ...[
    { name: 'Apagar y desconectar', text: 'Apagar las luces y desconectar los aparatos electrónicos que no estemos usando.', example: 'El televisor en “espera” también gasta energía.', meter: 82, enter(c) { c.base({ lights: ALL }); c.devices.setTv(true); c.fly(c.poses.overview, 1.2); ['terraza', 'padres', 'invitados', 'trabajo', 'patio', 'bano'].forEach((r, i) => c.later(900 + i * 350, () => c.setLight(r, false))); c.later(3200, () => { c.devices.setTv(false); c.callouts.show('tv', c.anchors.tv(), { icon: 'leaf', text: 'Apagada', kind: 'good' }); }); } },
    { name: 'Bombillas LED', text: 'Usar bombillas LED, que consumen mucha menos energía que las bombillas tradicionales.', example: 'Una LED de 9 W da casi la misma luz que una tradicional de 60 W.', meter: 70, led: true, enter(c) { c.base({ lights: EVENING }); c.look(c.anchors.light('sala'), [-3.4, 1.8, 2.2]); c.later(900, () => c.callouts.show('bulb', c.anchors.light('sala'), { icon: 'leaf', text: 'LED 9 W', kind: 'good' })); } },
    { name: 'El refrigerador', text: 'No abrir la puerta del refrigerador innecesariamente y asegurarse de que cierre bien.', example: 'Así el frío se mantiene dentro y el motor trabaja menos.', meter: 62, enter(c) { c.base({ lights: ALL }); c.look(c.anchors.fridge(), [-1.6, 2.4, 3.4]); c.later(600, () => { c.devices.fridge.open = true; c.devices.fridge.openedAt = c.now(); c.devices.fridge.warned = true; }); c.later(2600, () => { c.devices.fridge.open = false; c.callouts.show('fridge', c.anchors.fridge(), { icon: 'leaf', text: 'Cerrada', kind: 'good' }); }); } },
    { name: 'La lavadora', text: 'Usar la lavadora con carga completa y en programas de agua fría.', example: 'Así se gasta menos agua y electricidad en cada carga.', meter: 55, enter(c) { c.base({ lights: ALL }); c.look(c.anchors.washer(), [-1.0, 3.8, 0.9]); c.later(700, () => { c.devices.setWasher(true); c.callouts.show('washer', c.anchors.washer(), { icon: 'leaf', text: 'Agua fría', kind: 'good' }); }); } },
    { name: 'Luz natural', text: 'Aprovechar la luz natural del día para no encender lámparas.', example: 'Abrir las cortinas de la sala durante el día.', meter: 47, enter(c) { c.base({ lights: ALL }); c.fly(c.poses.overview, 1.2); c.later(900, () => c.setDay(true)); ALL.forEach((r, i) => c.later(1400 + i * 120, () => c.setLight(r, false))); } },
    { name: 'Temperatura adecuada', text: 'Programar el aire acondicionado o la calefacción a temperaturas adecuadas (ni muy frías ni muy calientes).', example: 'Bajar un grado la calefacción en invierno puede ahorrar energía.', meter: 40, enter(c) { c.base({ lights: EVENING }); c.look(c.anchors.ac(), [-3.8, 2.2, 0.4]); c.later(700, () => { c.devices.setAc(true); c.callouts.show('ac', c.anchors.ac(), { icon: 'leaf', text: '24 °C', kind: 'good' }); }); } },
  ].map((tip, i, list) => ({
    section: 'energia',
    title: '¿Cómo ayudar a ahorrar la energía?',
    lead: ENERGY_LEAD,
    item: { name: tip.name, text: tip.text, example: tip.example },
    counter: [i + 1, list.length],
    meter: { from: i === 0 ? 100 : list[i - 1].meter, to: tip.meter },
    led: tip.led,
    enter: tip.enter,
  })),

  // ---------- Riesgos ----------
  ...[
    { name: 'Riesgos de seguridad', text: 'Si no protegemos bien nuestra red WiFi, personas extrañas podrían "hackear" nuestras cámaras o computadoras.', example: 'Conviene usar una contraseña larga y distinta para cada cuenta.', enter(c) { c.base({ lights: EVENING, wifi: true }); c.look(c.anchors.router(), [-3.2, 2.6, 2.2]); c.later(800, () => c.callouts.show('router', c.anchors.router(), { icon: 'lock', text: 'Contraseña larga', kind: 'risk' })); } },
    { name: 'Pérdida de privacidad', text: 'Los aparatos inteligentes guardan datos sobre lo que hacemos. Debemos tener cuidado con la información que compartimos.', example: 'Revisa los permisos de una app antes de instalarla.', enter(c) { c.base({ lights: EVENING }); c.look(c.anchors.echo(), [-3.0, 2.4, 2.4]); c.later(700, () => c.callouts.show('echo', c.anchors.echo(), { icon: 'eye', text: 'Guarda datos', kind: 'risk' })); c.later(1200, () => c.callouts.show('tv', c.anchors.tv(), { icon: 'eye', text: 'Guarda datos', kind: 'risk' })); } },
    { name: 'Adicción y distracción', text: 'Pasar demasiado tiempo frente a pantallas (celular, videojuegos, TV) puede afectar nuestras relaciones familiares, el estudio y nuestra salud.', example: 'Conviene dejar el celular fuera del cuarto a la hora de dormir.', enter(c) { c.base({ lights: EVENING }); c.devices.setTv(true); c.fly(c.poses.sala, 1.2); c.later(800, () => c.callouts.show('tv', c.anchors.tv(), { icon: 'clock', text: 'Tiempo de pantalla', kind: 'risk' })); } },
    { name: 'Ciberacoso', text: 'Es un riesgo en el que personas pueden molestar o amenazar a través de internet.', example: 'Si ocurre, guarda las pruebas y avisa a un adulto de confianza.', enter(c) { c.base({ lights: [...EVENING, 'trabajo'] }); c.look(COMPUTER(), [-2.6, 2.0, 2.4]); c.later(800, () => c.callouts.show('pc', COMPUTER(), { icon: 'alert', text: 'Avisa a un adulto', kind: 'risk' })); } },
    { name: 'Aislamiento', text: 'A veces, las personas se encierran en su cuarto con la tecnología y dejan de convivir con los demás.', example: 'Una comida familiar sin pantallas ayuda a convivir.', enter(c) { c.base({ lights: EVENING }); c.look(DINING(), [-3.2, 2.6, 2.6]); c.later(800, () => c.callouts.show('dining', DINING(), { icon: 'people', text: 'Comida sin pantallas', kind: 'good' })); } },
  ].map((risk, i, list) => ({
    section: 'riesgos',
    title: '¿Qué riesgos puede traer tanta tecnología en casa?',
    lead: RISK_LEAD,
    item: { name: risk.name, text: risk.text, example: risk.example },
    counter: [i + 1, list.length],
    enter: risk.enter,
  })),

  // ---------- Demostración ----------
  {
    section: 'demo',
    demo: true,
    enter(c) {
      c.base({ lights: EVENING });
      c.fly(c.poses.overview, 1.2);
    },
  },

  // ---------- ¿Piensan las cosas? ----------
  {
    section: 'piensan',
    title: '¿Piensan las cosas?',
    ask: true,
    item: { text: 'Preguntémosle a Alexa:', quote: '«Alexa, ¿tú piensas?»' },
    enter(c) {
      c.base({ lights: EVENING });
      c.look(c.anchors.echo(), [-2.8, 2.0, 2.0]);
      c.later(900, () => c.callouts.show('echo', c.anchors.echo(), { icon: 'voice', text: '¿Tú piensas?', kind: 'info' }));
    },
  },
  {
    section: 'piensan',
    title: '¿Piensan las cosas?',
    paragraphs: [
      'Esta es una pregunta muy interesante. La respuesta es no, <mark>las cosas no piensan como los humanos.</mark>',
      'Las computadoras y los electrodomésticos inteligentes solo siguen instrucciones (programas) que los humanos les han dado. No tienen sentimientos, ni conciencia, ni imaginación. Pueden hacer cálculos muy rápido y aprender patrones (como la Inteligencia Artificial), pero no "piensan" ni toman decisiones propias basadas en emociones. Ellos solo procesan datos y ejecutan órdenes. Por ejemplo, una app que avisa del clima solo calcula con datos y fórmulas que una persona programó.',
    ],
    enter(c) {
      c.base({ lights: EVENING });
      c.look(c.anchors.echo(), [-3.4, 2.6, 2.6]);
      ['echo', 'tv', 'fridge', 'washer', 'router'].forEach((d, i) => c.later(600 + i * 300, () => c.callouts.show(d, c.anchors[d](), { icon: 'chip', text: 'sigue instrucciones', kind: 'chip quiet' })));
    },
  },

  // ---------- Conclusiones ----------
  ...[
    'Después de realizar este trabajo, podemos concluir que la tecnología se ha convertido en una parte fundamental de nuestro hogar. Los electrodomésticos con computadoras incorporadas y las casas inteligentes nos hacen la vida más fácil, cómoda y nos ayudan a ahorrar energía.',
    'Sin embargo, es muy importante usarla con responsabilidad. Debemos estar conscientes de los riesgos, como la pérdida de privacidad o el exceso de tiempo frente a las pantallas, y tomar medidas para protegernos.',
    'Finalmente, queda claro que, aunque las máquinas hagan tareas increíbles, ellas no piensan por sí solas; son herramientas creadas por el ser humano para ayudarnos. <mark>El verdadero pensamiento, la creatividad y los sentimientos son características únicas de las personas.</mark>',
  ].map((_, i, all) => ({
    section: 'fin',
    title: 'Conclusiones',
    paragraphs: all.slice(0, i + 1),
    enter(c) {
      c.base({ lights: ALL });
      c.fly(c.poses.overview, 1.4);
      c.orbit(true, 0.25);
    },
  })),
  {
    section: 'fin',
    thanks: true,
    enter(c) {
      c.base({ lights: ALL, labels: false });
      c.fly(c.poses.cover, 1.6);
      c.orbit(true, 0.6);
    },
  },
];
