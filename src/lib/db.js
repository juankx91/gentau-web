// ============================================================
//  BASE DE DATOS (Turso)
//  - En producción usa TURSO_DATABASE_URL y TURSO_AUTH_TOKEN.
//  - En tu computador, si no hay URL, crea un archivo "local.db".
//  - Las tablas se crean solas la primera vez que se usa la página.
// ============================================================
import { createClient } from '@libsql/client';
import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from 'astro:env/server';

export const db = createClient({
  url: TURSO_DATABASE_URL || 'file:local.db',
  authToken: TURSO_AUTH_TOKEN || undefined,
});

// Productos de ejemplo (se insertan solo si la tabla está vacía).
// Puedes borrarlos o editarlos desde el panel de administrador.
const productosEjemplo = [
  ['Blusa Esmeralda', 129900, 'Blusa de corte fluido en tela satinada, con caída suave que se adapta a todo tipo de silueta. Disponible de la XS a la 4XL.', 'Mujer', 1],
  ['Camisa Lino Natural', 149900, 'Camisa masculina en lino fresco, patronaje holgado y botones en tono dorado. Ideal para clima cálido.', 'Hombre', 1],
  ['Pantalón Palazzo Dorado', 159900, 'Pantalón de tiro alto y bota ancha con pretina cómoda. Diseño propio pensado para cuerpos reales.', 'Mujer', 1],
  ['Vestido Raíces', 189900, 'Vestido midi con estampado exclusivo GENTAU, escote en V y cintura ajustable con lazo.', 'Mujer', 0],
  ['Chaqueta Bosque', 219900, 'Chaqueta unisex en dril con forro interno, bolsillos funcionales y acabados en contraste.', 'Unisex', 1],
  ['Polo Esencial', 89900, 'Polo de algodón peinado con bordado del logo GENTAU. Tallas de la S a la 5XL.', 'Hombre', 0],
];

let listo;

/** Crea las tablas (si no existen) y carga datos de ejemplo. */
export function prepararDb() {
  if (!listo) {
    listo = (async () => {
      await db.batch(
        [
          `CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            precio INTEGER NOT NULL DEFAULT 0,
            descripcion TEXT NOT NULL DEFAULT '',
            categoria TEXT NOT NULL DEFAULT 'General',
            imagen_url TEXT,
            imagen_id TEXT,
            destacado INTEGER NOT NULL DEFAULT 0,
            creado TEXT NOT NULL DEFAULT (datetime('now'))
          )`,
          `CREATE TABLE IF NOT EXISTS carrusel (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            imagen_url TEXT NOT NULL,
            imagen_id TEXT,
            texto TEXT,
            orden INTEGER NOT NULL DEFAULT 0
          )`,
          `CREATE TABLE IF NOT EXISTS ajustes (
            clave TEXT PRIMARY KEY,
            valor TEXT
          )`,
        ],
        'write'
      );

      const { rows } = await db.execute('SELECT COUNT(*) AS total FROM productos');
      if (Number(rows[0].total) === 0) {
        await db.batch(
          productosEjemplo.map(([nombre, precio, descripcion, categoria, destacado]) => ({
            sql: 'INSERT INTO productos (nombre, precio, descripcion, categoria, destacado) VALUES (?, ?, ?, ?, ?)',
            args: [nombre, precio, descripcion, categoria, destacado],
          })),
          'write'
        );
      }
    })().catch((error) => {
      listo = undefined; // permite reintentar si falló la conexión
      throw error;
    });
  }
  return listo;
}

// ---------------- Productos ----------------
export async function obtenerProductos() {
  await prepararDb();
  const { rows } = await db.execute('SELECT * FROM productos ORDER BY destacado DESC, id DESC');
  return rows;
}

export async function obtenerProductosDestacados(limite = 4) {
  await prepararDb();
  const { rows } = await db.execute({
    sql: 'SELECT * FROM productos ORDER BY destacado DESC, id DESC LIMIT ?',
    args: [limite],
  });
  return rows;
}

export async function obtenerProducto(id) {
  await prepararDb();
  const { rows } = await db.execute({ sql: 'SELECT * FROM productos WHERE id = ?', args: [id] });
  return rows[0];
}

// ---------------- Carrusel ----------------
export async function obtenerCarrusel() {
  await prepararDb();
  const { rows } = await db.execute('SELECT * FROM carrusel ORDER BY orden ASC, id ASC');
  return rows;
}

// ---------------- Ajustes (video del hero, etc.) ----------------
export async function obtenerAjustes() {
  await prepararDb();
  const { rows } = await db.execute('SELECT clave, valor FROM ajustes');
  return Object.fromEntries(rows.map((fila) => [fila.clave, fila.valor]));
}

export async function guardarAjuste(clave, valor) {
  await prepararDb();
  await db.execute({
    sql: 'INSERT INTO ajustes (clave, valor) VALUES (?, ?) ON CONFLICT(clave) DO UPDATE SET valor = excluded.valor',
    args: [clave, valor],
  });
}
