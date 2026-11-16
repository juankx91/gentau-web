// ============================================================
//  EVALUACIÓN DE DESEMPEÑO — AUXILIAR DE RECURSOS HUMANOS
//  TODO el contenido de /nuestra-gente/evaluacion-desempeno está aquí.
//  Cambia textos, criterios o campos sin tocar los componentes.
//  Los colores están en src/styles/variables.css (sección 8).
//
//  IMPORTANTE: el formulario funciona solo en el navegador.
//  No se guarda nada en servidor, base de datos ni localStorage.
// ============================================================

export const evaluacion = {
  titulo: 'Evaluación de Desempeño',
  cargo: 'Auxiliar de Recursos Humanos',
  lema: 'Juntos brillamos más',

  // Archivo Word para descargar (debe estar en /public/docs/)
  descarga: {
    texto: 'Descargar formato en Word',
    url: '/docs/Evaluacion_desempeno_Auxiliar_RRHH_GENTAU.docx',
    detalle: 'Documento .docx editable',
  },

  // Aviso de privacidad que se muestra sobre el formulario
  avisoPrivacidad: 'Los datos no se guardan. Imprime o guarda en PDF antes de cerrar la página.',

  // ---------- PARTE A: INFORMACIÓN ----------
  intro: {
    etiqueta: 'Formato de talento humano',
    paraQue: {
      titulo: '¿Para qué hacemos esta evaluación?',
      texto:
        'Para reconocer lo que se está haciendo bien, conversar sobre lo que puede mejorar y acordar acciones que ayuden al crecimiento de la persona y de GENTAU. No se trata solo de poner una nota, sino de tener una conversación clara y respetuosa.',
    },
    comoSeUsa: {
      titulo: '¿Cómo se usa?',
      pasos: [
        { icono: 'documento', titulo: 'Elige el formato', texto: 'Descarga el Word o llena el formulario directamente en esta página.' },
        { icono: 'ojo', titulo: 'Califica lo observado', texto: 'Marca de 1 a 5 cada punto con ejemplos reales del periodo, o N/A si no aplica.' },
        { icono: 'chat', titulo: 'Conversen y acuerden', texto: 'En la reunión, completen el balance general y los compromisos de mejora.' },
        { icono: 'editar', titulo: 'Imprime y firma', texto: 'Imprime o guarda en PDF; colaborador(a) y evaluador(a) firman al final.' },
      ],
    },
  },

  // ---------- PARTE B: FORMULARIO ----------

  // Datos generales
  datosGenerales: {
    titulo: 'Datos generales',
    campos: [
      { id: 'nombre', etiqueta: 'Nombre del colaborador(a)', tipo: 'text', ancho: 'completo' },
      { id: 'fecha', etiqueta: 'Fecha', tipo: 'date' },
      { id: 'area', etiqueta: 'Área', tipo: 'text', valor: 'Talento Humano' },
      { id: 'periodo', etiqueta: 'Periodo evaluado', tipo: 'text' },
      { id: 'evaluador', etiqueta: 'Evaluador(a)', tipo: 'text' },
      { id: 'antiguedad', etiqueta: 'Antigüedad', tipo: 'text' },
      { id: 'tipo', etiqueta: 'Tipo de evaluación', tipo: 'opciones', opciones: ['Inicial', 'Periódica', 'Final'] },
      { id: 'fecha-reunion', etiqueta: 'Fecha de reunión', tipo: 'date' },
    ],
  },

  // 1. Escala de calificación (también se usa en los botones de cada criterio)
  escala: {
    numero: 1,
    titulo: 'Escala de calificación',
    niveles: [
      { valor: 1, etiqueta: 'Por mejorar' },
      { valor: 2, etiqueta: 'Bajo' },
      { valor: 3, etiqueta: 'Cumple' },
      { valor: 4, etiqueta: 'Bueno' },
      { valor: 5, etiqueta: 'Sobresaliente' },
    ],
    noAplica: 'N/A',
    instruccion:
      'Marca una calificación según lo observado durante el periodo. Si no aplica algún punto, escribe “N/A” y explícalo en observaciones.',
  },

  // 2, 3 y 4. Secciones calificables (se promedian)
  secciones: [
    {
      id: 'funciones',
      numero: 2,
      titulo: 'Evaluación de funciones del cargo',
      descripcion: 'Valora el cumplimiento de las actividades habituales del Auxiliar de Recursos Humanos.',
      columnas: { aspecto: 'Aspecto a evaluar', esperado: '¿Qué se espera?' },
      criterios: [
        { aspecto: 'Organización de documentos', esperado: 'Mantiene actualizadas y ordenadas las hojas de vida, formatos y demás documentos del personal.' },
        { aspecto: 'Apoyo a selección y vinculación', esperado: 'Apoya la recepción de hojas de vida, citación de candidatos y organización de documentos de ingreso.' },
        { aspecto: 'Atención al colaborador', esperado: 'Responde con respeto y amabilidad las dudas o solicitudes y orienta cuando necesita apoyo.' },
        { aspecto: 'Apoyo a inducción', esperado: 'Colabora con la bienvenida de nuevos integrantes y comparte información básica de la empresa.' },
        { aspecto: 'Apoyo a bienestar laboral', esperado: 'Acompaña la organización de actividades de integración, reconocimiento, salud y bienestar.' },
        { aspecto: 'Seguimiento y comunicación', esperado: 'Entrega información clara, hace seguimiento a tareas pendientes y comunica novedades a tiempo.' },
        { aspecto: 'Manejo responsable de información', esperado: 'Cuida la privacidad de los datos y comparte documentos solo con las personas autorizadas.' },
        { aspecto: 'Cumplimiento y oportunidad', esperado: 'Realiza las tareas asignadas dentro de los tiempos acordados y avisa cuando tiene alguna dificultad.' },
      ],
    },
    {
      id: 'competencias',
      numero: 3,
      titulo: 'Competencias y forma de trabajar',
      columnas: { aspecto: 'Competencia', esperado: 'Comportamiento esperado' },
      criterios: [
        { aspecto: 'Responsabilidad', esperado: 'Cumple sus compromisos y se hace cargo de las tareas que le corresponden.' },
        { aspecto: 'Trabajo en equipo', esperado: 'Colabora con las demás áreas y mantiene una actitud de apoyo.' },
        { aspecto: 'Comunicación y respeto', esperado: 'Escucha, expresa sus ideas con claridad y trata a todos de manera respetuosa.' },
        { aspecto: 'Empatía e inclusión', esperado: 'Reconoce y respeta las diferencias; brinda un trato justo y cercano.' },
        { aspecto: 'Iniciativa y aprendizaje', esperado: 'Propone soluciones sencillas, pregunta cuando tiene dudas y está dispuesto(a) a aprender.' },
        { aspecto: 'Discreción y confianza', esperado: 'Maneja con cuidado la información personal y los temas internos de la empresa.' },
      ],
    },
    {
      id: 'cultura',
      numero: 4,
      titulo: 'Relación con la cultura GENTAU',
      descripcion: 'Además de cumplir sus funciones, el cargo aporta a la forma en que queremos trabajar y convivir en GENTAU.',
      columnas: { aspecto: 'Principio', esperado: 'Cómo se refleja en el cargo' },
      criterios: [
        { aspecto: 'Inclusión y diversidad', esperado: 'Promueve un trato sin discriminación y respeta las distintas historias, cuerpos y formas de pensar.' },
        { aspecto: 'Transparencia y cercanía', esperado: 'Brinda información honesta, mantiene una comunicación abierta y evita generar falsas expectativas.' },
        { aspecto: 'Bienestar y reconocimiento', esperado: 'Apoya acciones que fortalezcan la motivación, la integración y el reconocimiento del equipo.' },
        { aspecto: 'Cuidado y prevención', esperado: 'Apoya la comunicación de buenas prácticas, el autocuidado y el reporte oportuno de situaciones que puedan afectar la seguridad.' },
      ],
    },
  ],

  // Resumen de promedios (se calcula en el navegador)
  resumen: {
    titulo: 'Resumen de calificaciones',
    nota: 'El promedio general reúne todas las notas marcadas en las secciones 2, 3 y 4. Las notas N/A no cuentan.',
    sinNotas: 'Sin notas aún',
  },

  // 5. Balance general
  balance: {
    numero: 5,
    titulo: 'Balance general',
    cuadros: [
      { id: 'fortalezas', titulo: 'Fortalezas', guia: '¿Qué hace bien y vale la pena seguir manteniendo?' },
      { id: 'mejorar', titulo: 'Aspectos por mejorar', guia: '¿Qué actividad, hábito o conocimiento necesita fortalecer?' },
      { id: 'logros', titulo: 'Logros del periodo', guia: '¿Qué resultados o aportes importantes se destacan?' },
      { id: 'apoyo', titulo: 'Apoyo que necesita', guia: '¿Qué orientación, herramienta o capacitación le ayudaría?' },
    ],
  },

  // 6. Plan de mejora y compromisos
  planMejora: {
    numero: 6,
    titulo: 'Plan de mejora y compromisos',
    descripcion: 'Definan compromisos concretos, posibles de cumplir y con una fecha para revisar los avances.',
    columnas: [
      { id: 'accion', titulo: 'Acción o compromiso', tipo: 'textarea' },
      { id: 'como', titulo: 'Cómo se realizará', tipo: 'textarea' },
      { id: 'fecha', titulo: 'Fecha acordada', tipo: 'date' },
      { id: 'seguimiento', titulo: 'Seguimiento / resultado', tipo: 'textarea' },
    ],
    filasIniciales: 3,
    botonAgregar: 'Agregar fila',
  },

  // 7. Resultado y comentarios finales (el resultado lo elige el evaluador a mano)
  resultado: {
    numero: 7,
    titulo: 'Resultado y comentarios finales',
    etiquetaResultado: 'Resultado general',
    opciones: ['Sobresaliente', 'Bueno', 'Cumple', 'Requiere acompañamiento'],
    comentarios: [
      { id: 'comentario-evaluador', titulo: 'Comentario del evaluador(a)' },
      { id: 'comentario-colaborador', titulo: 'Comentario del colaborador(a)' },
    ],
    importante:
      'La evaluación debe realizarse con ejemplos reales del trabajo diario, escuchando la opinión del colaborador y evitando juicios personales. La calificación debe servir como guía para reconocer y mejorar.',
  },

  // 8. Firmas
  firmas: {
    numero: 8,
    titulo: 'Firmas',
    personas: [
      { id: 'colaborador', rol: 'colaborador(a)' },
      { id: 'evaluador', rol: 'evaluador(a)' },
    ],
  },

  // Botones de la barra de acciones
  acciones: {
    imprimir: 'Imprimir / Guardar como PDF',
    limpiar: 'Limpiar formulario',
    confirmarLimpiar: '¿Seguro que quieres borrar todo lo escrito en el formulario? Esta acción no se puede deshacer.',
  },
};
