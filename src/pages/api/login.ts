import type { APIRoute } from 'astro';
import { checkPassword, createToken, COOKIE, cookieOptions } from '../../lib/auth';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  if (!checkPassword(String(form.get('password') ?? ''))) {
    await new Promise((r) => setTimeout(r, 600)); // frena intentos rápidos
    return redirect('/admin/login?error=1');
  }
  cookies.set(COOKIE, createToken(), cookieOptions);
  return redirect('/admin');
};
