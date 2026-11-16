// API de productos: crear (POST), editar (PUT) y eliminar (DELETE)
import { db, prepararDb, obtenerProducto } from '../../../lib/db.js';
import { borrarArchivo } from '../../../lib/cloudinary.js';
import { json, error, texto } from './_respuesta.js';

function leerProducto(d) {
  const producto = {
    nombre: texto(d.nombre, 120),
    precio: Math.max(0, Math.round(Number(String(d.precio).replace(/[^\d]/g, '')) || 0)),
    descripcion: texto(d.descripcion, 2000),
    categoria: texto(d.categoria, 60) || 'General',
    imagen_url: texto(d.imagen_url, 500) || null,
    imagen_id: texto(d.imagen_id, 300) || null,
    destacado: d.destacado ? 1 : 0,
  };
  if (!producto.nombre) return { falla: 'El nombre es obligatorio.' };
  if (!producto.precio) return { falla: 'El precio debe ser mayor a 0.' };
  return { producto };
}

export async function POST({ request }) {
  await prepararDb();
  const { producto: p, falla } = leerProducto(await request.json());
  if (falla) return error(falla);
  const r = await db.execute({
    sql: `INSERT INTO productos (nombre, precio, descripcion, categoria, imagen_url, imagen_id, destacado)
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
    args: [p.nombre, p.precio, p.descripcion, p.categoria, p.imagen_url, p.imagen_id, p.destacado],
  });
  return json({ ok: true, id: Number(r.lastInsertRowid) });
}

export async function PUT({ request }) {
  await prepararDb();
  const datos = await request.json();
  const anterior = await obtenerProducto(Number(datos.id));
  if (!anterior) return error('Producto no encontrado.', 404);

  const { producto: p, falla } = leerProducto(datos);
  if (falla) return error(falla);

  await db.execute({
    sql: `UPDATE productos SET nombre = ?, precio = ?, descripcion = ?, categoria = ?,
          imagen_url = ?, imagen_id = ?, destacado = ? WHERE id = ?`,
    args: [p.nombre, p.precio, p.descripcion, p.categoria, p.imagen_url, p.imagen_id, p.destacado, anterior.id],
  });

  // Si cambió la foto, se borra la anterior de Cloudinary
  if (anterior.imagen_id && anterior.imagen_id !== p.imagen_id) await borrarArchivo(anterior.imagen_id);
  return json({ ok: true });
}

export async function DELETE({ request }) {
  await prepararDb();
  const { id } = await request.json();
  const producto = await obtenerProducto(Number(id));
  if (!producto) return error('Producto no encontrado.', 404);
  await db.execute({ sql: 'DELETE FROM productos WHERE id = ?', args: [producto.id] });
  await borrarArchivo(producto.imagen_id);
  return json({ ok: true });
}
