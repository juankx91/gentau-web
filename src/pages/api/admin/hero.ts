import type { APIRoute } from 'astro';
import { setSetting } from '../../../lib/db';
import { isCloudinaryUrl } from '../../../lib/cloudinary';
import { json, text } from '../../../lib/http';

export const POST: APIRoute = async ({ request }) => {
  const { videoUrl } = await request.json();
  const url = text(videoUrl, 500);
  if (url && !isCloudinaryUrl(url)) return json({ error: 'Video no válido' }, 400);
  await setSetting('hero_video', url); // texto vacío = quitar el video
  return json({ ok: true });
};
