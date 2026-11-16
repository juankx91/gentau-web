// Protege el panel de administrador: si no has iniciado sesión,
// te envía a /admin/login (o responde 401 en la API).
import { defineMiddleware } from 'astro:middleware';
import { NOMBRE_COOKIE, tokenValido } from './lib/auth.js';

export const onRequest = defineMiddleware(async (context, next) => {
  const ruta = context.url.pathname;
  const esAdmin = ruta.startsWith('/admin') && !ruta.startsWith('/admin/login');
  const esApiAdmin = ruta.startsWith('/api/admin');

  if (esAdmin || esApiAdmin) {
    const sesionOk = tokenValido(context.cookies.get(NOMBRE_COOKIE)?.value);
    if (!sesionOk) {
      if (esApiAdmin) {
        return new Response(JSON.stringify({ error: 'Sesión expirada. Vuelve a iniciar sesión.' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return context.redirect('/admin/login');
    }
  }
  return next();
});
