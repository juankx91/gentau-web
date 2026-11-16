// ============================================================
//  CLOUDINARY (fotos y videos)
//  Las fotos se suben directo desde el navegador a Cloudinary con
//  una firma segura que genera el servidor. Así no se llena Render.
// ============================================================
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from 'astro:env/server';

export const CARPETA = 'gentau';

export const cloudinaryConfigurado = Boolean(
  CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET
);

if (cloudinaryConfigurado) {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
  });
}

/** Firma para que el navegador pueda subir un archivo a Cloudinary. */
export function crearFirmaSubida(subcarpeta = 'general') {
  const timestamp = Math.round(Date.now() / 1000);
  const folder = `${CARPETA}/${subcarpeta}`;
  const signature = cloudinary.utils.api_sign_request({ timestamp, folder }, CLOUDINARY_API_SECRET);
  return { timestamp, folder, signature, apiKey: CLOUDINARY_API_KEY, cloudName: CLOUDINARY_CLOUD_NAME };
}

/** Borra un archivo de Cloudinary (si existe). No rompe nada si falla. */
export async function borrarArchivo(publicId, tipo = 'image') {
  if (!cloudinaryConfigurado || !publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: tipo });
  } catch (error) {
    console.error('No se pudo borrar en Cloudinary:', error?.message);
  }
}

/** Devuelve una versión optimizada de una imagen de Cloudinary. */
export function optimizar(url, ancho = 900) {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url;
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${ancho},c_limit/`);
}
