import { claveCorrecta, crearToken, NOMBRE_COOKIE, opcionesCookie } from '../../lib/auth.js';

export async function POST({ request, cookies, redirect }) {
  const datos = await request.formData();
  if (!claveCorrecta(datos.get('clave'))) {
    return redirect('/admin/login?error=1');
  }
  cookies.set(NOMBRE_COOKIE, crearToken(), opcionesCookie());
  return redirect('/admin');
}
