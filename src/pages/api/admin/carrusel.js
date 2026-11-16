// API del carrusel: agregar foto (POST), cambiar orden/texto (PUT), quitar foto (DELETE)
import { db, prepararDb } from '../../../lib/db.js';
import { borrarArchivo } from '../../../lib/cloudinary.js';
import { json, error, texto } from './_respuesta.js';

export async function POST({ request }) {
  await prepararDb();
  const d = await request.json();
  const imagen_url = texto(d.imagen_url, 500);
  if (!imagen_url) return error('Falta la imagen.');
  const { rows } = await db.execute('SELECT COALESCE(MAX(orden), 0) + 1 AS siguiente FROM carrusel');
  await db.execute({
    sql: 'INSERT INTO carrusel (imagen_url, imagen_id, texto, orden) VALUES (?, ?, ?, ?)',
    args: [imagen_url, texto(d.imagen_id, 300) || null, texto(d.texto, 120) || null, Number(rows[0].siguiente)],
  });
  return json({ ok: true });
}

export async function PUT({ request }) {
  await prepararDb();
  const d = await request.json();
  await db.execute({
    sql: 'UPDATE carrusel SET texto = ?, orden = ? WHERE id = ?',
    args: [texto(d.texto, 120) || null, Number(d.orden) || 0, Number(d.id)],
  });
  return json({ ok: true });
}

export async function DELETE({ request }) {
  await prepararDb();
  const { id } = await request.json();
  const { rows } = await db.execute({ sql: 'SELECT * FROM carrusel WHERE id = ?', args: [Number(id)] });
  if (!rows[0]) return error('Foto no encontrada.', 404);
  await db.execute({ sql: 'DELETE FROM carrusel WHERE id = ?', args: [rows[0].id] });
  await borrarArchivo(rows[0].imagen_id);
  return json({ ok: true });
}
