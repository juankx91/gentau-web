// ============================================================
//  INDUCCIÓN: cronograma general, beneficios e inducción al cargo
// ============================================================

export const cronogramaInduccion = {
  duracion: 'Duración total aproximada: 5 horas (incluye 2 descansos).',
  filas: [
    ['8:00 – 8:15', '15 min', 'Bienvenida y presentación del facilitador y del nuevo colaborador', 'Talento Humano'],
    ['8:15 – 8:30', '15 min', 'Nuestra historia: de dónde venimos, la inquietud, la decisión y el propósito', 'Talento Humano'],
    ['8:30 – 8:40', '10 min', 'Bienvenida oficial y qué encontrará en la inducción', 'Talento Humano'],
    ['8:40 – 8:55', '15 min', 'Quiénes somos: diseño propio, tallas reales e impacto social', 'Talento Humano'],
    ['8:55 – 9:15', '20 min', 'Visión, misión y valores de la marca', 'Talento Humano'],
    ['9:15 – 9:30', '15 min', 'Descanso', '—'],
    ['9:30 – 9:55', '25 min', 'Cultura organizacional: los 4 principios y cómo trabajamos', 'Líder de área'],
    ['9:55 – 10:20', '25 min', 'Clima organizacional: cómo nos sentimos trabajando aquí', 'Líder de área'],
    ['10:20 – 10:50', '30 min', 'Objetivos generales y específicos de la empresa', 'Talento Humano'],
    ['10:50 – 11:05', '15 min', 'Descanso', '—'],
    ['11:05 – 11:35', '30 min', 'Seguridad y Salud en el Trabajo (SST): conceptos, accidentes vs. incidentes, enfermedades laborales y buenas prácticas', 'Responsable SST / COPASST'],
    ['11:35 – 11:55', '20 min', 'Beneficios y métodos de pago', 'Talento Humano'],
    ['11:55 – 12:10', '15 min', 'Documentos de referencia: Reglamento Interno de Trabajo y Políticas Internas', 'Talento Humano'],
    ['12:10 – 12:30', '20 min', 'Ronda de preguntas y aclaración de dudas', 'Talento Humano / Líder de área'],
    ['12:30 – 12:50', '20 min', 'Evaluación de inducción general', 'Talento Humano'],
    ['12:50 – 13:00', '10 min', 'Cierre, entrega de credenciales/dotación y bienvenida oficial al equipo', 'Talento Humano / Líder de área'],
  ],
};

export const beneficios = [
  { titulo: 'Pagos quincenales', texto: 'Recibe tu salario de forma puntual cada quincena, con total transparencia.', icono: 'calendario' },
  { titulo: 'Descuentos en prendas', texto: 'Accede a descuentos especiales en las prendas GENTAU para ti y tu familia.', icono: 'bolsa' },
  { titulo: 'Bonificaciones por metas', texto: 'Recibe reconocimientos económicos adicionales al cumplir tus metas individuales y de equipo.', icono: 'medalla' },
  { titulo: 'Alimentación (restaurante)', texto: 'Cuenta con apoyo de alimentación para que tu jornada sea más cómoda y balanceada.', icono: 'cubiertos' },
  { titulo: 'Crecimiento laboral', texto: 'Encuentra oportunidades reales de formación y ascenso dentro de la empresa.', icono: 'grafica' },
  { titulo: 'Bonos por ventas', texto: 'Suma incentivos adicionales por tu desempeño y aporte a las ventas del equipo.', icono: 'moneda' },
];

// Inducción al cargo: Auxiliar de Recursos Humanos
export const cargoAuxiliar = {
  cargo: 'Auxiliar de Recursos Humanos',
  frase: 'Tu gestión conecta a las personas con el propósito y la operación de GENTAU.',
  proposito:
    'Administrar de forma autónoma los procesos administrativos de Recursos Humanos asignados, asegurando orden, oportunidad, confidencialidad y calidad en la atención.',
  contribuye: [
    'Acompañar a las personas durante su ciclo laboral.',
    'Facilitar la comunicación entre colaboradores y líderes.',
    'Mantener información confiable y procesos al día.',
    'Promover una experiencia laboral respetuosa y ordenada.',
  ],
  verbos: [
    { titulo: 'Organizar', texto: 'Documentos, bases de datos, registros y cronogramas.' },
    { titulo: 'Gestionar', texto: 'Ingresos, novedades, dotación, bienestar y seguimiento.' },
    { titulo: 'Conectar', texto: 'Colaboradores, líderes de área y responsables de los procesos.' },
  ],
  areas: [
    { titulo: 'Administrativos', texto: 'Atención al personal, documentación, novedades y comunicación interna.' },
    { titulo: 'Producción', texto: 'Seguimiento de personal, turnos reportados, ausentismo e inducción al puesto.' },
    { titulo: 'Bodega', texto: 'Novedades, coordinación de ingresos, dotación y comunicación con el líder.' },
    { titulo: 'Logística', texto: 'Horarios reportados, ausencias, necesidades de personal y coordinación operativa.' },
  ],
  responsabilidades: [
    {
      titulo: 'Administración de personal',
      items: ['Mantener actualizada la base de datos de colaboradores.', 'Crear y custodiar expedientes físicos o digitales.', 'Verificar documentos pendientes y hacer seguimiento.', 'Registrar ingresos, retiros y cambios debidamente autorizados.', 'Elaborar certificados y comunicaciones rutinarias autorizadas.'],
      nota: 'Cada expediente debe estar completo, actualizado, organizado y disponible únicamente para personas autorizadas.',
    },
    {
      titulo: 'Selección y vinculación',
      items: ['Recibir y clasificar hojas de vida según el perfil.', 'Coordinar entrevistas con el área solicitante.', 'Solicitar y verificar documentos de ingreso.', 'Coordinar exámenes ocupacionales y requisitos aplicables.', 'Coordinar afiliaciones y la inducción de ingresos según el procedimiento.', 'Preparar documentos para revisión, aprobación y firma.'],
    },
    {
      titulo: 'Novedades y apoyo a nómina',
      items: ['Permisos, licencias e incapacidades.', 'Ausencias, vacaciones y demás novedades.', 'Horas extras y recargos previamente autorizados.', 'Soportes y autorizaciones correspondientes.'],
      nota: 'Verifica colaborador, fechas, tipo de novedad, soporte y autorización. Entrega el consolidado antes del corte y conserva evidencia del envío.',
    },
    {
      titulo: 'Dotación, bienestar y SST',
      items: ['Dotación: coordinar entregas, registrar descripción, cantidades, talla y recibido.', 'Bienestar: apoyar actividades de integración, reconocimiento, comunicación y clima laboral.', 'SST: apoyar registros, capacitaciones y entrega de EPP; reportar incidentes al responsable de SST.'],
      nota: 'El apoyo administrativo no reemplaza las funciones técnicas del responsable del SG-SST.',
    },
  ],
  servicio: ['Escucha sin juzgar y conserva la imparcialidad.', 'Da información clara y dentro de tu alcance.', 'No prometas decisiones que no te corresponden.', 'Registra y canaliza solicitudes sensibles.', 'Haz seguimiento hasta confirmar el cierre.'],
  puedeGestionar: ['Actualizar bases de datos y expedientes.', 'Solicitar documentos y hacer seguimiento.', 'Programar entrevistas y actividades aprobadas.', 'Consolidar novedades y emitir recordatorios.', 'Preparar reportes y mantener controles.'],
  debeEscalar: ['Aprobar contrataciones o vacantes.', 'Definir salarios o cambiar contratos.', 'Autorizar permisos u horas extras sin delegación.', 'Modificar nómina o aprobar liquidaciones.', 'Imponer sanciones o responder asuntos legales.'],
  confidencialidad: ['Protege datos personales, salariales, médicos y disciplinarios.', 'Comparte información solo con personas autorizadas y por canales definidos.', 'No dejes documentos ni archivos sensibles al alcance de terceros.', 'Verifica la información antes de registrarla o comunicarla.', 'Reporta errores, incidentes o posibles divulgaciones de inmediato.'],
  herramientas: [
    { titulo: 'Excel', texto: 'Bases de datos, filtros, controles y consolidación de novedades.' },
    { titulo: 'Word', texto: 'Formatos, actas, certificados, listas de chequeo y comunicaciones.' },
    { titulo: 'Correo y archivo', texto: 'Comunicación formal, trazabilidad y custodia documental.' },
  ],
  rutina: [
    { titulo: 'Inicio del día', texto: 'Revisar correo, pendientes, novedades recibidas y fechas límite.' },
    { titulo: 'Durante el día', texto: 'Atender solicitudes, actualizar registros, coordinar con líderes y avanzar procesos.' },
    { titulo: 'Cierre del día', texto: 'Verificar pendientes, guardar soportes, actualizar seguimiento y escalar alertas.' },
  ],
  planAdaptacion: [
    { dias: 'Días 1–5', texto: 'Conocer la empresa, áreas, personas clave, políticas, formatos y procesos.' },
    { dias: 'Días 6–15', texto: 'Ejecutar tareas recurrentes con revisión y acompañamiento.' },
    { dias: 'Días 16–30', texto: 'Gestionar procesos administrativos con autonomía y reportar resultados.' },
  ],
  resultados: ['Expedientes completos y actualizados.', 'Novedades entregadas correctamente y dentro del plazo.', 'Ingresos e inducciones documentados.', 'Solicitudes atendidas y pendientes con seguimiento.', 'Dotación y actividades de bienestar con soportes.', 'Alertas comunicadas oportunamente y procesos trazables.'],
};

// Evaluaciones de inducción (solo se describe; las preguntas son de uso interno)
export const evaluaciones = [
  { titulo: 'Evaluación de inducción general', texto: 'Se aplica al final de la jornada de inducción para verificar la comprensión de la historia, misión, visión, valores, cultura, clima, SST y beneficios.' },
  { titulo: 'Evaluación de inducción al cargo', texto: 'Para el Auxiliar de Recursos Humanos: 20 preguntas de selección múltiple y 5 preguntas abiertas (30 puntos). Aprobación sugerida: 24/30 (80 %), complementada con una evaluación práctica.' },
];
