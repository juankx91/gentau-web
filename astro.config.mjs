// Configuración principal de Astro
// - output 'server': la página se genera en el servidor (necesario para el panel admin y la base de datos)
// - adapter node: permite desplegar en Render como un servidor Node normal
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  server: { host: true },

  // Dominios desde los que se sirve la página (seguridad de formularios).
  // Si compras un dominio propio, agrégalo aquí, por ejemplo:
  // { hostname: 'www.gentau.co', protocol: 'https' },
  security: {
    allowedDomains: [
      { hostname: '**.onrender.com', protocol: 'https' },
      { hostname: 'localhost' },
      { hostname: '127.0.0.1' },
    ],
  },

  // Variables de entorno (se leen del archivo .env en local y de Render en producción)
  env: {
    schema: {
      TURSO_DATABASE_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      TURSO_AUTH_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      CLOUDINARY_CLOUD_NAME: envField.string({ context: 'server', access: 'secret', optional: true }),
      CLOUDINARY_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CLOUDINARY_API_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
      ADMIN_PASSWORD: envField.string({ context: 'server', access: 'secret', optional: true }),
      SESSION_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
