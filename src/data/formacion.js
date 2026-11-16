// ============================================================
//  MODELO DE FORMACIÓN EMPRESARIAL 2027 — "Juntos aprendemos, juntos brillamos"
//  TODO el contenido de la página /nuestra-gente/formacion está aquí.
//  Cambia textos, programas, fechas o aliados sin tocar los componentes.
//
//  Íconos disponibles: ver la lista en src/components/Icono.astro
//  Líneas de formación: usa siempre los ids 'cientifica', 'filosofica', 'tecnica'
//  (o 'todas' en el cronograma). Sus colores están en src/styles/variables.css
// ============================================================

export const formacion = {
  anio: 2027,

  // 1) HERO
  hero: {
    etiqueta: 'Plan de formación 2027',
    titulo: 'Modelo de Formación Empresarial',
    lema: 'Juntos aprendemos, juntos brillamos',
    botones: [
      { texto: 'Líneas de formación', url: '#lineas' },
      { texto: 'Ver cronograma', url: '#cronograma' },
    ],
  },

  // 2) APRENDIZAJE
  aprendizaje: {
    etiqueta: 'Punto de partida',
    titulo: 'Aprendizaje',
    definicion:
      'Es el proceso de crear, retener, transferir y utilizar el conocimiento dentro de una organización.',
    pasos: [
      { texto: 'Crear', icono: 'bombillo' },
      { texto: 'Retener', icono: 'cerebro' },
      { texto: 'Transferir', icono: 'compartir' },
      { texto: 'Utilizar', icono: 'check' },
    ],
  },

  // 3) CAPACITACIÓN, FORMACIÓN Y DESARROLLO
  conceptos: {
    etiqueta: 'Tres conceptos clave',
    titulo: 'Capacitación, formación y desarrollo',
    tarjetas: [
      {
        titulo: 'Capacitación',
        icono: 'tijeras',
        texto: 'Prepara a la persona para desempeñar una función.',
        ejemplo: 'Manejo seguro de la máquina de coser industrial.',
      },
      {
        titulo: 'Formación profesional',
        icono: 'birrete',
        texto: 'Prepara a la persona para su profesión.',
        ejemplo: 'Técnico en patronaje o diseño de modas.',
      },
      {
        titulo: 'Desarrollo profesional',
        icono: 'grafica',
        texto: 'Prepara a la persona para una carrera.',
        ejemplo: 'Ruta de crecimiento hasta jefe de producción.',
      },
    ],
  },

  // 4) TIPOS DE APRENDIZAJE
  tipos: {
    etiqueta: '¿Quién aprende?',
    titulo: 'Tipos de aprendizaje',
    tarjetas: [
      {
        titulo: 'Individual',
        icono: 'persona',
        texto: 'Cada colaborador aprende y desarrolla sus propias habilidades.',
        ejemplo: 'Cursos, autoestudio y mentorías.',
      },
      {
        titulo: 'Grupal',
        icono: 'personas',
        texto: 'Los equipos aprenden juntos y comparten experiencias.',
        ejemplo: 'Talleres, retos y trabajo entre áreas.',
      },
      {
        titulo: 'Organizacional',
        icono: 'edificio',
        texto: 'GENTAU crea, guarda y comparte su conocimiento.',
        ejemplo: 'Manuales, buenas prácticas y memoria de la empresa.',
      },
    ],
  },

  // 5) MODELO DE FORMACIÓN GENTAU (principios)
  principios: {
    etiqueta: 'Nuestro sistema de referencia',
    titulo: 'Modelo de Formación GENTAU',
    texto:
      'Es el sistema de referencia que orienta los procesos educativos de GENTAU. Se apoya en cinco principios:',
    tarjetas: [
      { titulo: 'Centrado en el adulto', icono: 'cerebro', texto: 'Aprende desde su experiencia y lo aplica a su trabajo.' },
      { titulo: 'Importancia de las personas', icono: 'corazon', texto: 'Cada colaborador es el centro de la formación.' },
      { titulo: 'Necesidades de la organización', icono: 'diana', texto: 'Se forma lo que GENTAU necesita para crecer.' },
      { titulo: 'Niveles de desarrollo', icono: 'escalones', texto: 'Se avanza paso a paso, de lo básico a lo avanzado.' },
      { titulo: 'Equilibrio trabajo y vida privada', icono: 'balanza', texto: 'Los horarios respetan el tiempo personal y familiar.' },
    ],
  },

  // 6) CULTURA DE GENTAU
  cultura: {
    etiqueta: 'Lo que nos hace únicos',
    titulo: 'Cultura de GENTAU',
    tarjetas: [
      {
        titulo: 'Preservar',
        icono: 'escudo',
        texto: 'Cuidar lo que hace única a GENTAU: su moda que inspira, su espíritu inclusivo y su lema “Juntos brillamos más”.',
      },
      {
        titulo: 'Promover',
        icono: 'megafono',
        texto: 'Dar a conocer y vivir los valores de la empresa en el día a día de cada área.',
      },
      {
        titulo: 'Desarrollar',
        icono: 'hoja',
        texto: 'Hacer crecer la cultura con nuevas ideas, aprendizajes y la participación de todos.',
      },
    ],
  },

  // 7) PROPÓSITOS
  propositos: {
    etiqueta: 'Hacia dónde vamos',
    titulo: 'Propósitos',
    lista: [
      'Transformar a GENTAU con su modelo de formación.',
      'Facilitar una empresa creativa y socialmente productiva.',
      'Articular los planes de formación con las estrategias de la empresa.',
      'Dinamizar los aprendizajes internos.',
      'Facilitar la integración de toda la empresa en torno a la formación.',
      'Garantizar la participación de todos en los procesos de formación.',
      'Satisfacer las aspiraciones de formación de toda la comunidad empresarial.',
    ],
  },

  // 8) LÍNEAS DE FORMACIÓN
  lineas: {
    etiqueta: 'Tres líneas, tres proyectos',
    titulo: 'Líneas de formación',
    texto: 'Selecciona una línea para ver su proyecto, objetivo, contenidos, métodos y evaluación.',
    items: [
      {
        id: 'cientifica',
        nombre: 'Científica',
        icono: 'matraz',
        proyecto: 'Moda, innovación y sostenibilidad',
        objetivo:
          'Desarrollar conocimiento sobre tendencias, materiales y tecnología para crear moda innovadora y responsable.',
        alcance: 'Equipos de diseño, producción y compras; abierto a todos los colaboradores.',
        contenido: {
          conocimientos: 'Tendencias, textiles y sostenibilidad.',
          habilidades: 'Investigar, analizar e innovar.',
          valores: 'Curiosidad y responsabilidad ambiental.',
        },
        metodos: 'Talleres, lecturas, charlas con expertos y clase magistral.',
        medios: 'Sala de capacitación, proyector, computador, muestras de telas y material impreso.',
        formas: '4 programas al año (mayo, julio, septiembre y noviembre), 2 sesiones de 2 horas cada uno.',
        evaluacion: 'Prueba corta, proyecto aplicado y encuesta de satisfacción al final de cada programa.',
        programas: ['Tendencias y diseño de moda', 'Materiales y moda sostenible', 'Herramientas digitales', 'Innovación y creatividad'],
      },
      {
        id: 'filosofica',
        nombre: 'Filosófica',
        icono: 'libro',
        proyecto: 'Cultura GENTAU',
        objetivo:
          'Fortalecer valores, inclusión y sentido de pertenencia para preservar y desarrollar la cultura de GENTAU.',
        alcance: 'Todos los colaboradores, de todas las áreas y niveles.',
        contenido: {
          conocimientos: 'Misión, valores e inclusión.',
          habilidades: 'Comunicación, liderazgo y trabajo en equipo.',
          valores: 'Respeto, creatividad y “Juntos brillamos más”.',
        },
        metodos: 'Talleres vivenciales, dinámicas en grupo, charlas y conversatorios.',
        medios: 'Espacio de reunión, videos, tarjetas de actividades, marcadores y papel.',
        formas: '3 programas (enero, marzo y agosto) y un cierre anual en diciembre, de 2 sesiones de 2 horas.',
        evaluacion: 'Observación de comportamientos, autoevaluación y encuesta de clima laboral.',
        programas: ['Inducción y cultura GENTAU', 'Inclusión y diversidad', 'Liderazgo y trabajo en equipo'],
      },
      {
        id: 'tecnica',
        nombre: 'Técnica',
        icono: 'engranaje',
        proyecto: 'Excelencia en producción y servicio',
        objetivo: 'Mejorar las competencias técnicas de cada cargo para aumentar la calidad y la productividad.',
        alcance: 'Colaboradores de producción, ventas, administración y apoyo.',
        contenido: {
          conocimientos: 'Patronaje, confección, calidad, ventas y SST.',
          habilidades: 'Ejecutar con precisión y atender bien.',
          valores: 'Calidad, responsabilidad y seguridad.',
        },
        metodos: 'Prácticas guiadas, demostraciones, talleres y clase magistral.',
        medios: 'Máquinas, insumos, computador, proyector y formatos de control de calidad.',
        formas: '4 programas al año (febrero, abril, junio y octubre), 2 sesiones de 2 horas cada uno.',
        evaluacion: 'Demostración práctica, lista de chequeo del desempeño y encuesta de satisfacción.',
        programas: ['Patronaje y confección', 'Control de calidad', 'Servicio al cliente y ventas', 'Seguridad y salud en el trabajo'],
      },
    ],
  },

  // 9) ESTRUCTURA DEL MODELO
  // (los proyectos y programas se toman automáticamente de "lineas")
  estructura: {
    etiqueta: 'Cómo se organiza',
    titulo: 'Estructura del modelo',
    niveles: ['Modelo', 'Líneas', 'Proyectos', 'Programas', 'Actividades'],
    raiz: 'Modelo de Formación GENTAU',
    actividades: 'Cada programa: 2 sesiones de 2 horas',
  },

  // 10) FASES DEL MODELO
  fases: {
    etiqueta: 'Ciclo anual',
    titulo: 'Fases del modelo',
    notaCiclo: 'Los resultados de la evaluación alimentan el siguiente ciclo.',
    pasos: [
      {
        titulo: 'Evaluación y detección de necesidades',
        subtitulo: 'Análisis organizacional',
        icono: 'lupa',
        texto: 'Encuestas y entrevistas por área para saber qué necesita aprender cada cargo.',
      },
      {
        titulo: 'Planeación y diseño',
        subtitulo: 'Objetivos y contenidos',
        icono: 'calendario',
        texto: 'Se definen metas, contenidos, métodos y fechas de cada programa.',
      },
      {
        titulo: 'Ejecución o implementación',
        subtitulo: 'Lista de chequeo',
        icono: 'lista',
        texto: 'Se dictan las actividades verificando asistencia, materiales y logística.',
      },
      {
        titulo: 'Evaluación del programa',
        subtitulo: 'Reacción y aprendizaje',
        icono: 'grafica',
        texto: 'Se mide la satisfacción y lo aprendido; los resultados alimentan el siguiente ciclo.',
      },
    ],
  },

  // 11) COMPONENTES DEL PLAN
  componentes: {
    etiqueta: 'El plan en detalle',
    titulo: 'Componentes del plan',
    filas: [
      { pregunta: '¿Qué?', respuesta: 'Un plan anual de formación para los colaboradores de GENTAU.' },
      { pregunta: '¿Por qué?', respuesta: 'Para que el talento crezca junto con la empresa y la moda de GENTAU siga inspirando.' },
      { pregunta: '¿Para qué?', respuesta: 'Desarrollar competencias, fortalecer la cultura y mejorar la calidad y la productividad.' },
      { pregunta: '¿Cuánto tiempo?', respuesta: '12 programas durante 2027, cada uno con 2 sesiones de 2 horas.' },
      { pregunta: '¿Dónde?', respuesta: 'Sala de capacitación y taller de GENTAU, y espacios de aliados externos.' },
      { pregunta: '¿Cómo?', respuesta: 'Talleres, charlas, lecturas, clases magistrales y prácticas guiadas.' },
      { pregunta: '¿Cuándo?', respuesta: 'Según el cronograma de enero a diciembre de 2027.' },
      { pregunta: '¿A quiénes?', respuesta: 'A todos los colaboradores de GENTAU, de todas las áreas.' },
      { pregunta: '¿Quiénes?', respuesta: 'Talento humano, líderes internos, instructores y aliados (SENA, caja de compensación, ARL).' },
      { pregunta: '¿Con qué?', respuesta: 'Recursos materiales (salón, equipos, insumos) y recursos financieros del presupuesto de formación.' },
    ],
  },

  // 12) CRONOGRAMA 2027
  // fechas en formato AAAA-MM-DD (el día de la semana se calcula solo)
  // linea: 'cientifica' | 'filosofica' | 'tecnica' | 'todas'
  cronograma: {
    etiqueta: 'Enero a diciembre de 2027',
    titulo: 'Cronograma 2027',
    sesiones: '2 sesiones · 2 horas c/u',
    meses: [
      { mes: 'Enero', programa: 'Inducción y cultura GENTAU', linea: 'filosofica', fechas: ['2027-01-19', '2027-01-28'] },
      { mes: 'Febrero', programa: 'Patronaje y confección', linea: 'tecnica', fechas: ['2027-02-16', '2027-02-25'] },
      { mes: 'Marzo', programa: 'Inclusión y diversidad', linea: 'filosofica', fechas: ['2027-03-16', '2027-03-30'] },
      { mes: 'Abril', programa: 'Control de calidad', linea: 'tecnica', fechas: ['2027-04-13', '2027-04-27'] },
      { mes: 'Mayo', programa: 'Tendencias y diseño de moda', linea: 'cientifica', fechas: ['2027-05-18', '2027-05-26'] },
      { mes: 'Junio', programa: 'Servicio al cliente y ventas', linea: 'tecnica', fechas: ['2027-06-15', '2027-06-29'] },
      { mes: 'Julio', programa: 'Materiales y moda sostenible', linea: 'cientifica', fechas: ['2027-07-13', '2027-07-27'] },
      { mes: 'Agosto', programa: 'Liderazgo y trabajo en equipo', linea: 'filosofica', fechas: ['2027-08-17', '2027-08-31'] },
      { mes: 'Septiembre', programa: 'Herramientas digitales', linea: 'cientifica', fechas: ['2027-09-14', '2027-09-28'] },
      { mes: 'Octubre', programa: 'Seguridad y salud en el trabajo', linea: 'tecnica', fechas: ['2027-10-13', '2027-10-27'] },
      { mes: 'Noviembre', programa: 'Innovación y creatividad', linea: 'cientifica', fechas: ['2027-11-16', '2027-11-30'] },
      { mes: 'Diciembre', programa: 'Evaluación y cierre del año', linea: 'todas', fechas: ['2027-12-07', '2027-12-14'] },
    ],
  },

  // 13) RESULTADOS ESPERADOS
  resultados: {
    etiqueta: 'Lo que lograremos',
    titulo: 'Resultados esperados',
    tarjetas: [
      { titulo: 'Desarrollo de la organización', icono: 'edificio' },
      { titulo: 'Aumento de la productividad', icono: 'grafica' },
      { titulo: 'Desarrollo de competencias del talento humano', icono: 'medalla' },
      { titulo: 'Mejora de los sistemas de gestión y las condiciones de trabajo', icono: 'engranaje' },
      { titulo: 'Fortalecimiento del trabajo en equipo', icono: 'personas' },
      { titulo: 'Aprender sin sobrecarga', icono: 'balanza', texto: 'La formación no aumenta el esfuerzo físico o mental.' },
    ],
  },

  // 14) CIERRE
  cierre: {
    frase: '¡Juntos aprendemos, juntos brillamos!',
    texto: 'Gracias por ser parte de la familia GENTAU.',
  },
};
