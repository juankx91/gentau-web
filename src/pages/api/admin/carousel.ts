import type { APIRoute } from 'astro';
import { db, ensureSchema } from '../../../lib/db';
import { isCloudinaryUrl } from '../../../lib/cloudinary';
import { json } from '../../../lib/http';

export const POST: APIRoute = async ({ request }) => {
  const { imageUrls } = await request.json();
  const urls = (Array.isArray(imageUrls) ? imageUrls : []).map(String).filter(isCloudinaryUrl);
  if (urls.length === 0) return json({ error: 'No hay imágenes válidas' }, 400);
  await ensureSchema();
  await db.batch(urls.map((u) => ({ sql: 'INSERT INTO carousel (image_url) VALUES (?)', args: [u] })), 'write');
  return json({ ok: true });
};

export const DELETE: APIRoute = async ({ request }) => {
  const { id } = await request.json();
  await ensureSchema();
  await db.execute({ sql: 'DELETE FROM carousel WHERE id = ?', args: [Number(id)] });
  return json({ ok: true });
};
