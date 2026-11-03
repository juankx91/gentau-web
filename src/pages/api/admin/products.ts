import type { APIRoute } from 'astro';
import { db, ensureSchema } from '../../../lib/db';
import { isCloudinaryUrl } from '../../../lib/cloudinary';
import { json, text } from '../../../lib/http';

function clean(b: any) {
  const imageUrl = text(b.imageUrl, 500);
  return { name: text(b.name, 120), description: text(b.description, 1000), imageUrl: isCloudinaryUrl(imageUrl) ? imageUrl : '' };
}

export const POST: APIRoute = async ({ request }) => {
  const p = clean(await request.json());
  if (!p.name) return json({ error: 'El nombre es obligatorio' }, 400);
  await ensureSchema();
  await db.execute({ sql: 'INSERT INTO products (name, description, image_url) VALUES (?, ?, ?)', args: [p.name, p.description, p.imageUrl] });
  return json({ ok: true });
};

export const PUT: APIRoute = async ({ request }) => {
  const b = await request.json();
  const p = clean(b);
  if (!p.name) return json({ error: 'El nombre es obligatorio' }, 400);
  await ensureSchema();
  // Si no se sube imagen nueva, se conserva la anterior.
  await db.execute({
    sql: "UPDATE products SET name = ?, description = ?, image_url = COALESCE(NULLIF(?, ''), image_url) WHERE id = ?",
    args: [p.name, p.description, p.imageUrl, Number(b.id)],
  });
  return json({ ok: true });
};

export const DELETE: APIRoute = async ({ request }) => {
  const { id } = await request.json();
  await ensureSchema();
  await db.execute({ sql: 'DELETE FROM products WHERE id = ?', args: [Number(id)] });
  return json({ ok: true });
};
