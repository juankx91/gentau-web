// Genera la firma para subir fotos/videos a Cloudinary desde el panel
import { crearFirmaSubida, cloudinaryConfigurado } from '../../../lib/cloudinary.js';
import { json, error } from './_respuesta.js';

const CARPETAS = ['productos', 'carrusel', 'video'];

export async function POST({ request }) {
  if (!cloudinaryConfigurado) {
    return error('Cloudinary no está configurado. Revisa las variables CLOUDINARY_* en tu .env o en Render.', 500);
  }
  const { carpeta } = await request.json().catch(() => ({}));
  return json(crearFirmaSubida(CARPETAS.includes(carpeta) ? carpeta : 'general'));
}
