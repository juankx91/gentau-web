import type { APIRoute } from 'astro';
import { db, ensureSchema } from '../../../lib/db';
import { json } from '../../../lib/http';

export const DELETE: APIRoute = async ({ request }) => {
  const { id } = await request.json();
  await ensureSchema();
  await db.execute({ sql: 'DELETE FROM messages WHERE id = ?', args: [Number(id)] });
  return json({ ok: true });
};
