import { createHash } from 'node:crypto';
import { env } from './env';

// Agrega transformaciones de Cloudinary a una URL (tamaño, calidad y formato automáticos).
export function optimize(url: string, transform = 'f_auto,q_auto'): string {
  return url && url.includes('/upload/') ? url.replace('/upload/', `/upload/${transform}/`) : url;
}

// Solo aceptamos URLs que vengan de tu cuenta de Cloudinary.
export function isCloudinaryUrl(url: string): boolean {
  const cloud = env('CLOUDINARY_CLOUD_NAME');
  return !!cloud && url.startsWith(`https://res.cloudinary.com/${cloud}/`);
}

// Firma para que el navegador suba archivos directo a Cloudinary sin exponer tu API secret.
export function signUpload(folder = 'gentau') {
  const timestamp = Math.floor(Date.now() / 1000);
  const toSign = `folder=${folder}&timestamp=${timestamp}${env('CLOUDINARY_API_SECRET')}`;
  return {
    cloudName: env('CLOUDINARY_CLOUD_NAME'),
    apiKey: env('CLOUDINARY_API_KEY'),
    timestamp,
    folder,
    signature: createHash('sha1').update(toSign).digest('hex'),
  };
}
