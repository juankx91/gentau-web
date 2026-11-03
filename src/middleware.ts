import { defineMiddleware } from 'astro:middleware';
import { COOKIE, verifyToken } from './lib/auth';

// Protege /admin y /api/admin: sin sesión válida no se puede entrar.
export const onRequest = defineMiddleware(async (ctx, next) => {
  const path = ctx.url.pathname;
  const isAdminApi = path.startsWith('/api/admin');
  const isAdminPage = path.startsWith('/admin') && !path.startsWith('/admin/login');

  if ((isAdminApi || isAdminPage) && !verifyToken(ctx.cookies.get(COOKIE)?.value)) {
    if (isAdminApi) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return ctx.redirect('/admin/login');
  }
  return next();
});
