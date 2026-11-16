// ============================================================
//  PLAN DE BIENESTAR LABORAL 2027 — "Juntos brillamos más"
// ============================================================

export const bienestar = {
  anio: 2027,
  lema: 'Juntos brillamos más',
  introduccion: [
    'El bienestar laboral es el equilibrio entre el trabajo, la salud, la felicidad y el crecimiento personal.',
    'En GENTAU creemos que un equipo feliz crea moda con más pasión. Por eso este plan reúne actividades para 2027 en siete componentes: físico, mental, emocional, financiero, educativo/profesional, social y espiritual.',
    'Así cuidamos a cada colaborador como persona, no solo como trabajador.',
  ],
  objetivoGeneral:
    'Fortalecer el bienestar integral de nuestro equipo, promoviendo su salud, motivación y sentido de pertenencia, para alcanzar juntos grandes logros.',
  objetivosEspecificos: [
    { texto: 'Promover la salud física, mental y emocional de los colaboradores con hábitos de vida saludable y apoyo psicológico.', icono: 'pulso' },
    { texto: 'Impulsar el crecimiento financiero, educativo y profesional del equipo con formación y herramientas para su desarrollo.', icono: 'medalla' },
    { texto: 'Fortalecer la integración, el sentido de pertenencia y el propósito personal con actividades sociales y espirituales.', icono: 'personas' },
  ],
  alcance: [
    'Todos los colaboradores de GENTAU, de todas las áreas y tipos de contrato.',
    'Las familias de los colaboradores, en actividades como el Día de la Familia.',
    'Vigencia: de enero a diciembre de 2027.',
  ],
  marcoNormativo: [
    { norma: 'Ley 1562 de 2012', tema: 'Sistema General de Riesgos Laborales' },
    { norma: 'Decreto 1072 de 2015', tema: 'Decreto Único del Sector Trabajo (SG-SST)' },
    { norma: 'Resolución 0312 de 2019', tema: 'Estándares mínimos del SG-SST' },
    { norma: 'Resolución 2646 de 2008', tema: 'Factores de riesgo psicosocial en el trabajo' },
    { norma: 'Ley 1616 de 2013', tema: 'Salud mental' },
    { norma: 'Ley 1010 de 2006', tema: 'Prevención del acoso laboral' },
    { norma: 'Ley 1857 de 2017', tema: 'Protección de la familia y Día de la Familia' },
    { norma: 'Ley 2191 de 2022', tema: 'Desconexión laboral' },
  ],
  importancia: [
    { titulo: 'Mejora el clima laboral', texto: 'Un equipo valorado y motivado trabaja con más compromiso y sentido de pertenencia.', icono: 'sol' },
    { titulo: 'Cuida la salud del equipo', texto: 'Reduce el estrés, el ausentismo y los riesgos de salud ligados al trabajo.', icono: 'pulso' },
    { titulo: 'Aumenta la productividad', texto: 'Quien se siente bien trabaja mejor y con mayor calidad en cada prenda.', icono: 'grafica' },
    { titulo: 'Cumple con la ley', texto: 'Responde a las normas de seguridad y salud en el trabajo y fortalece la imagen de GENTAU.', icono: 'balanza' },
  ],
  componentes: [
    {
      nombre: 'Físico', frase: 'Porque tu salud también viste bien', icono: 'correr',
      actividades: [
        { titulo: 'Pausas activas y yoga', objetivo: 'Reducir la fatiga y las molestias musculares.', descripcion: 'Pausas de 10 minutos en la jornada y una clase de yoga mensual con instructor.' },
        { titulo: 'Jornadas de salud', objetivo: 'Detectar a tiempo riesgos para la salud.', descripcion: 'Chequeos básicos (tensión, peso, visión) en alianza con la EPS o la ARL.' },
        { titulo: 'Torneos deportivos', objetivo: 'Fomentar el deporte y el trabajo en equipo.', descripcion: 'Mini torneos de fútbol y voleibol entre áreas, cada trimestre.' },
      ],
    },
    {
      nombre: 'Mental', frase: 'Una mente tranquila crea mejor', icono: 'cerebro',
      actividades: [
        { titulo: 'Charlas de salud mental', objetivo: 'Prevenir el estrés y la ansiedad laboral.', descripcion: 'Talleres con un psicólogo sobre manejo del estrés y desconexión laboral.' },
        { titulo: 'Mindfulness y respiración', objetivo: 'Mejorar la concentración y la calma en el trabajo.', descripcion: 'Meditación guiada y ejercicios de respiración de 15 minutos, una vez al mes.' },
        { titulo: 'Orientación psicológica', objetivo: 'Brindar apoyo confidencial a quien lo necesite.', descripcion: 'Citas voluntarias y confidenciales con un profesional, en alianza con la ARL o la EPS.' },
      ],
    },
    {
      nombre: 'Emocional', frase: 'Sentirnos valorados nos impulsa', icono: 'corazon',
      actividades: [
        { titulo: 'Empleado del mes', objetivo: 'Reconocer el esfuerzo y fortalecer la autoestima.', descripcion: 'Reconocimiento público mensual con un detalle simbólico y mensaje del líder.' },
        { titulo: 'Taller de inteligencia emocional', objetivo: 'Desarrollar empatía y comunicación asertiva.', descripcion: 'Dinámicas en grupo para manejar las emociones y resolver conflictos.' },
        { titulo: 'Cumpleaños y fechas especiales', objetivo: 'Hacer sentir valorado a cada colaborador.', descripcion: 'Celebración mensual de cumpleaños con un detalle y día libre.' },
      ],
    },
    {
      nombre: 'Financiero', frase: 'Tranquilidad hoy, seguridad mañana', icono: 'alcancia',
      actividades: [
        { titulo: 'Educación financiera', objetivo: 'Mejorar el manejo del dinero personal.', descripcion: 'Taller de presupuesto, ahorro y uso responsable del crédito con una entidad aliada.' },
        { titulo: 'Ahorro, cesantías y pensión', objetivo: 'Ayudar a planear el futuro económico.', descripcion: 'Charla con asesores de fondos y de la caja de compensación.' },
        { titulo: 'Convenios y beneficios', objetivo: 'Aliviar la economía del hogar.', descripcion: 'Descuentos en prendas GENTAU, convenios con comercios y bonos por logros.' },
      ],
    },
    {
      nombre: 'Educativo / Profesional', frase: 'Aprender hoy, crecer mañana', icono: 'birrete',
      actividades: [
        { titulo: 'Capacitaciones técnicas', objetivo: 'Actualizar las habilidades del cargo.', descripcion: 'Cursos de patronaje, confección, servicio al cliente y herramientas digitales.' },
        { titulo: 'Apoyo para estudiar', objetivo: 'Facilitar la formación técnica y profesional.', descripcion: 'Convenios con instituciones educativas y permisos para asistir a clases.' },
        { titulo: 'Plan de carrera y mentorías', objetivo: 'Impulsar el crecimiento dentro de la empresa.', descripcion: 'Mentorías con líderes y una conversación anual para definir metas profesionales.' },
      ],
    },
    {
      nombre: 'Social', frase: 'Compartir también es parte del trabajo', icono: 'personas',
      actividades: [
        { titulo: 'Días de la moda temáticos', objetivo: 'Fortalecer la identidad y la integración.', descripcion: 'Un día al mes con temática (colores, décadas, estilos) para compartir en equipo.' },
        { titulo: 'Día de la familia', objetivo: 'Integrar a las familias a la vida de GENTAU.', descripcion: 'Jornada recreativa anual con juegos y almuerzo para colaboradores y sus familias.' },
        { titulo: 'Retos y dinámicas en equipo', objetivo: 'Mejorar la comunicación entre áreas.', descripcion: 'Gimcanas y retos entre áreas, y una jornada de voluntariado social.' },
      ],
    },
    {
      nombre: 'Espiritual', frase: 'Un equipo con propósito brilla más', icono: 'hoja',
      actividades: [
        { titulo: 'Espacios de gratitud', objetivo: 'Cultivar la gratitud y la paz interior.', descripcion: 'Muro de gratitud y mensajes semanales, respetando todas las creencias.' },
        { titulo: 'Propósito de vida', objetivo: 'Ayudar a encontrar sentido y metas personales.', descripcion: 'Taller con un facilitador para definir valores, propósito y metas de vida.' },
        { titulo: 'Contacto con la naturaleza', objetivo: 'Recargar energía y conectar con el entorno.', descripcion: 'Caminata ecológica o siembra de árboles una vez por semestre.' },
      ],
    },
  ],
  cronograma: [
    { mes: 'Enero', eventos: [['20', 'Jornada de salud'], ['29', 'Propósito de vida']] },
    { mes: 'Febrero', eventos: [['12', 'Día de la moda temático'], ['24', 'Inteligencia emocional']] },
    { mes: 'Marzo', eventos: [['10', 'Charlas de salud mental'], ['26', 'Retos en equipo']] },
    { mes: 'Abril', eventos: [['14', 'Torneo deportivo'], ['28', 'Capacitaciones técnicas']] },
    { mes: 'Mayo', eventos: [['15', 'Día de la familia'], ['26', 'Educación financiera']] },
    { mes: 'Junio', eventos: [['16', 'Mindfulness'], ['30', 'Reconocimiento semestral']] },
    { mes: 'Julio', eventos: [['14', 'Día en la naturaleza'], ['28', 'Apoyo para estudiar']] },
    { mes: 'Agosto', eventos: [['11', 'Mentorías de carrera'], ['25', 'Orientación psicológica']] },
    { mes: 'Septiembre', eventos: [['17', 'Torneo deportivo'], ['29', 'Día de la moda temático']] },
    { mes: 'Octubre', eventos: [['13', 'Seguimiento de salud'], ['27', 'Ahorro y pensión']] },
    { mes: 'Noviembre', eventos: [['10', 'Convenios y beneficios'], ['24', 'Espacios de gratitud']] },
    { mes: 'Diciembre', eventos: [['10', 'Fiesta GENTAU'], ['17', 'Reconocimientos de cierre']] },
  ],
  todoElAnio: 'Todo el año: pausas activas (cada día de por medio), cumpleaños y empleado del mes (último día hábil).',
  presupuesto: [
    { concepto: 'Actividades y eventos', valor: 15000000 },
    { concepto: 'Salud y bienestar', valor: 8000000 },
    { concepto: 'Reconocimientos', valor: 7000000 },
    { concepto: 'Integración familiar', valor: 6000000 },
  ],
  indicadores: [
    { valor: '90%', texto: 'Satisfacción del equipo' },
    { valor: '80%', texto: 'Participación en actividades' },
    { valor: '95%', texto: 'Mejora en clima laboral' },
    { valor: '+20%', texto: 'Productividad' },
  ],
  fraseCierre: 'Cuando cuidamos a las personas, el equipo se convierte en familia y la moda en una forma de inspirar.',
};
