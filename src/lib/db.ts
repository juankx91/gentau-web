import { createClient } from '@libsql/client';
import { env } from './env';

// Sin variables de Turso, usa un archivo local (local.db) para probar en tu computador.
export const db = createClient({
  url: env('TURSO_DATABASE_URL', 'file:local.db'),
  authToken: env('TURSO_AUTH_TOKEN') || undefined,
});

let ready: Promise<unknown> | undefined;

// Crea las tablas la primera vez que se usa la base de datos.
export function ensureSchema() {
  ready ??= db
    .batch(
      [
        `CREATE TABLE IF NOT EXISTS products (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT NOT NULL,
           description TEXT NOT NULL DEFAULT '',
           image_url TEXT NOT NULL DEFAULT '',
           created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
        `CREATE TABLE IF NOT EXISTS carousel (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           image_url TEXT NOT NULL,
           created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
        `CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL)`,
        `CREATE TABLE IF NOT EXISTS messages (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT NOT NULL,
           email TEXT NOT NULL,
           message TEXT NOT NULL,
           created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
      ],
      'write'
    )
    .catch((e) => {
      ready = undefined;
      throw e;
    });
  return ready;
}

export type Product = { id: number; name: string; description: string; image_url: string };
export type Message = { id: number; name: string; email: string; message: string; created_at: string };
export type Slide = { id: number; image_url: string };

export async function getProducts(): Promise<Product[]> {
  await ensureSchema();
  const r = await db.execute('SELECT id, name, description, image_url FROM products ORDER BY id DESC');
  return r.rows.map((x) => ({
    id: Number(x.id),
    name: String(x.name),
    description: String(x.description),
    image_url: String(x.image_url),
  }));
}

export async function getSlides(): Promise<Slide[]> {
  await ensureSchema();
  const r = await db.execute('SELECT id, image_url FROM carousel ORDER BY id ASC');
  return r.rows.map((x) => ({ id: Number(x.id), image_url: String(x.image_url) }));
}

export async function getSetting(key: string): Promise<string> {
  await ensureSchema();
  const r = await db.execute({ sql: 'SELECT value FROM settings WHERE key = ?', args: [key] });
  return r.rows[0] ? String(r.rows[0].value) : '';
}

export async function setSetting(key: string, value: string) {
  await ensureSchema();
  await db.execute({
    sql: 'INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    args: [key, value],
  });
}

export async function getMessages(): Promise<Message[]> {
  await ensureSchema();
  const r = await db.execute('SELECT id, name, email, message, created_at FROM messages ORDER BY id DESC LIMIT 100');
  return r.rows.map((x) => ({
    id: Number(x.id),
    name: String(x.name),
    email: String(x.email),
    message: String(x.message),
    created_at: String(x.created_at),
  }));
}
