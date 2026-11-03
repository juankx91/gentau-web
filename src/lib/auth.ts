import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { env } from './env';

export const COOKIE = 'gentau_admin';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 días

const sign = (value: string) =>
  createHmac('sha256', env('SESSION_SECRET', 'cambia-este-secreto')).update(value).digest('hex');

const sha = (s: string) => createHash('sha256').update(s).digest();

export function checkPassword(input: string): boolean {
  const real = env('ADMIN_PASSWORD');
  if (!real) return false;
  return timingSafeEqual(sha(input), sha(real));
}

export function createToken(): string {
  const exp = String(Date.now() + MAX_AGE * 1000);
  return `${exp}.${sign(exp)}`;
}

export function verifyToken(token?: string): boolean {
  if (!token) return false;
  const [exp, sig] = token.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const a = Buffer.from(sig);
  const b = Buffer.from(sign(exp));
  return a.length === b.length && timingSafeEqual(a, b);
}

export const cookieOptions = {
  httpOnly: true,
  sameSite: 'strict' as const,
  secure: import.meta.env.PROD,
  path: '/',
  maxAge: MAX_AGE,
};
