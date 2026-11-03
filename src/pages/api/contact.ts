import type { APIRoute } from 'astro';
import { db, ensureSchema } from '../../lib/db';
import { json, text } from '../../lib/http';

export const POST: APIRoute = async ({ request }) => {
  const b = await request.json().catch(() => ({}));
  if (b.website) return json({ ok: true }); // campo trampa para bots
  const name = text(b.name, 100), email = text(b.email, 150), message = text(b.message, 2000);
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return json({ error: 'Completa nombre, un correo válido y el mensaje.' }, 400);
  }
  await ensureSchema();
  await db.execute({ sql: 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', args: [name, email, message] });
  return json({ ok: true });
};
