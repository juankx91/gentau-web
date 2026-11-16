// ============================================================
//  SESIÓN DEL ADMINISTRADOR
//  Se usa una cookie firmada. La clave se define en ADMIN_PASSWORD.
// ============================================================
import { createHmac, timingSafeEqual } from 'node:crypto';
import { ADMIN_PASSWORD, SESSION_SECRET } from 'astro:env/server';

export const NOMBRE_COOKIE = 'gentau_admin';
const DURACION_HORAS = 12;

const secreto = () => SESSION_SECRET || `gentau-${ADMIN_PASSWORD || 'local'}`;
const firmar = (texto) => createHmac('sha256', secreto()).update(texto).digest('hex');

function iguales(a, b) {
  const ba = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

/** Revisa si la contraseña escrita es la correcta. */
export function claveCorrecta(clave) {
  // En local, si no configuraste ADMIN_PASSWORD, la clave es "admin123"
  const esperada = ADMIN_PASSWORD || (import.meta.env.DEV ? 'admin123' : '');
  return Boolean(esperada) && iguales(clave || '', esperada);
}

export function crearToken() {
  const vence = Date.now() + DURACION_HORAS * 60 * 60 * 1000;
  return `${vence}.${firmar(String(vence))}`;
}

export function tokenValido(token) {
  if (!token) return false;
  const [vence, firma] = token.split('.');
  if (!vence || !firma) return false;
  return iguales(firma, firmar(vence)) && Number(vence) > Date.now();
}

export function opcionesCookie() {
  return {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: import.meta.env.PROD,
    maxAge: DURACION_HORAS * 60 * 60,
  };
}
