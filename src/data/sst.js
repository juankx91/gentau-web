// ============================================================
//  SEGURIDAD Y SALUD EN EL TRABAJO (SST) — Inducción General
// ============================================================

export const sst = {
  intro:
    'En GENTAU, cuidar la vida y la salud de cada colaborador es tan importante como el diseño de cada prenda. Estos son los conceptos básicos que todos debemos conocer y practicar en el día a día.',
  queEs:
    'La Seguridad y Salud en el Trabajo (SST) es la disciplina que se encarga de prevenir las lesiones y enfermedades causadas por las condiciones de trabajo, y de proteger y promover la salud física, mental y social de todos los colaboradores.',
  aplica:
    'En GENTAU aplica a todas las áreas: diseño, taller de confección, comercial y administración, buscando espacios de trabajo seguros, ergonómicos y libres de riesgos innecesarios.',
  busca: [
    'Prevenir accidentes y enfermedades laborales',
    'Proteger la salud física y mental de cada colaborador',
    'Promover ambientes de trabajo seguros y ergonómicos',
    'Fomentar una cultura de autocuidado y prevención',
  ],
  objetivo: 'Que cada persona regrese a casa tan sana como llegó a trabajar.',
  accidente: {
    definicion:
      'Es un suceso repentino que ocurre por causa o con ocasión del trabajo, y que produce en el colaborador una lesión física, una perturbación funcional, una invalidez o la muerte.',
    ejemplo: 'Un corte con la máquina de coser que requiere atención médica.',
  },
  incidente: {
    definicion:
      'Es un evento no deseado que, en circunstancias distintas, pudo haber generado una lesión, una enfermedad o un daño. También se conoce como "casi accidente": no hubo consecuencias, pero sí existió el riesgo.',
    ejemplo: 'Un cable suelto en el piso con el que alguien casi tropieza, sin llegar a caer.',
  },
  notaReporte: 'Todo incidente reportado a tiempo es una oportunidad para evitar un accidente.',
  enfermedades: {
    definicion:
      'Son aquellas que se contraen como resultado de la exposición a factores de riesgo propios de la actividad laboral o del entorno en el que la persona se ve obligada a trabajar. A diferencia del accidente, no ocurren de forma repentina: se desarrollan de manera gradual, por exposición repetida o prolongada.',
    lista: [
      { titulo: 'Trastornos musculoesqueléticos', texto: 'Por posturas prolongadas o movimientos repetitivos en costura y corte.', icono: 'correr' },
      { titulo: 'Problemas de visión y fatiga visual', texto: 'Por trabajo de detalle prolongado con poca iluminación.', icono: 'ojo' },
      { titulo: 'Afecciones respiratorias', texto: 'Por exposición a polvo textil, fibras o químicos de tintura.', icono: 'viento' },
      { titulo: 'Estrés laboral', texto: 'Por cargas de trabajo, plazos de colección o ambientes de presión constante.', icono: 'cerebro' },
    ],
  },
  buenasPracticas: [
    { titulo: 'Mantén orden y aseo', texto: 'Un puesto de trabajo limpio y ordenado previene caídas, cortes y otros riesgos.', icono: 'escoba' },
    { titulo: 'Haz pausas activas', texto: 'Realiza las pausas y estiramientos programados, cuidando tu postura en el trabajo.', icono: 'correr' },
    { titulo: 'Usa tus elementos de protección', texto: 'Utiliza correctamente los elementos de protección personal asignados a tu labor.', icono: 'casco' },
    { titulo: 'Usa bien las herramientas', texto: 'Opera máquinas de coser, cortadoras y equipos siguiendo los procedimientos seguros.', icono: 'tijeras' },
    { titulo: 'Reporta a tiempo', texto: 'Informa cualquier acto o condición insegura, accidente o incidente a tu jefe inmediato.', icono: 'alerta' },
    { titulo: 'Participa en las capacitaciones', texto: 'Asiste y aplica lo aprendido en las jornadas de formación en SST.', icono: 'birrete' },
  ],
  // Del Reglamento Interno, Capítulo VI
  sistema: [
    { titulo: 'SG-SST', texto: 'GENTAU implementa y mantiene su Sistema de Gestión de Seguridad y Salud en el Trabajo, identificando peligros propios de la actividad textil y de confección (máquinas de coser, cortadoras, posturas prolongadas) y estableciendo controles.' },
    { titulo: 'COPASST o Vigía', texto: 'Comité Paritario de Seguridad y Salud en el Trabajo (o Vigía, según el número de trabajadores), encargado de promover y vigilar las normas de seguridad y salud dentro de la empresa.' },
    { titulo: 'Reporte a la ARL', texto: 'Todo accidente o incidente se reporta de inmediato al jefe inmediato y a Talento Humano, quienes activan el procedimiento ante la Administradora de Riesgos Laborales (ARL).' },
  ],
};
