// API de ajustes del inicio (video de fondo del hero)
import { obtenerAjustes, guardarAjuste } from '../../../lib/db.js';
import { borrarArchivo } from '../../../lib/cloudinary.js';
import { json, texto } from './_respuesta.js';

export async function PUT({ request }) {
  const d = await request.json();
  const actuales = await obtenerAjustes();
  const nuevoId = texto(d.hero_video_id, 300);

  await guardarAjuste('hero_video_url', texto(d.hero_video_url, 500));
  await guardarAjuste('hero_video_id', nuevoId);

  // Si se reemplazó o quitó el video, se borra el anterior de Cloudinary
  if (actuales.hero_video_id && actuales.hero_video_id !== nuevoId) {
    await borrarArchivo(actuales.hero_video_id, 'video');
  }
  return json({ ok: true });
}
