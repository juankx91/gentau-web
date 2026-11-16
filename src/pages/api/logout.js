import { NOMBRE_COOKIE } from '../../lib/auth.js';

export async function POST({ cookies, redirect }) {
  cookies.delete(NOMBRE_COOKIE, { path: '/' });
  return redirect('/');
}
