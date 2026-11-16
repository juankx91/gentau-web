// ============================================================
//  DATOS GENERALES DE LA EMPRESA
//  Cambia aquí el nombre, contacto, redes y ubicación del mapa.
//  Todo lo que edites aquí se actualiza en toda la página.
// ============================================================

export const site = {
  nombre: 'GENTAU',
  eslogan: 'Moda que inspira',
  lema: 'Moda sin barreras. Diseño propio. Impacto real.',
  descripcion:
    'GENTAU es una marca colombiana de diseño y confección de ropa femenina y masculina, pensada para todos los cuerpos y con impacto social real.',

  // --- Contacto ---
  telefono: '+57 301 730 1659',
  whatsapp: '573017301659', // solo números, con indicativo (57 = Colombia)
  correo: 'contacto@gentau.co',
  direccion: 'Medellín, Antioquia, Colombia',
  horario: 'Lunes a sábado · 9:00 a.m. – 7:00 p.m.',

  // --- Mapa del footer ---
  // Escribe la dirección exacta tal como la buscarías en Google Maps.
  mapa: 'Medellín, Antioquia, Colombia',

  // --- Redes sociales (deja '' para ocultar una red) ---
  redes: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    tiktok: 'https://tiktok.com/',
  },
};

// Menú principal. "hijos" crea un submenú desplegable.
export const menu = [
  { texto: 'Inicio', url: '/' },
  { texto: 'Nosotros', url: '/nosotros' },
  { texto: 'Productos', url: '/productos' },
  {
    texto: 'Nuestra gente',
    url: '/nuestra-gente',
    hijos: [
      { texto: 'Plan de Bienestar 2027', url: '/nuestra-gente/bienestar' },
      { texto: 'Seguridad y Salud (SST)', url: '/nuestra-gente/sst' },
      { texto: 'Inducción y beneficios', url: '/nuestra-gente/induccion' },
      { texto: 'Reglamento Interno', url: '/nuestra-gente/reglamento' },
      { texto: 'Políticas y Procedimientos', url: '/nuestra-gente/politicas' },
      { texto: 'Manual de Imagen', url: '/nuestra-gente/manual-imagen' },
    ],
  },
];
