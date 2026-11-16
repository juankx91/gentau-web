# GENTAU · Página web

Sitio web de **GENTAU — Moda que inspira**, hecho con **Astro** (framework), **Turso** (base de datos), **Cloudinary** (fotos y video) y listo para publicar en **Render**.

---

## 1. Qué incluye

| Página | Ruta | Contenido |
|---|---|---|
| Inicio | `/` | Hero con video de fondo, quiénes somos, cifras, carrusel automático, misión/visión, productos destacados |
| Sobre nosotros | `/nosotros` | Historia, quiénes somos, misión, visión, valores, cultura, clima y objetivos |
| Productos | `/productos` | Nombre, precio y descripción, filtro por categoría, buscador y botón de pedido por WhatsApp |
| Nuestra gente | `/nuestra-gente` | Acceso a todos los documentos de Talento Humano |
| Plan de Bienestar 2027 | `/nuestra-gente/bienestar` | Objetivos, alcance, normas, 7 componentes (21 actividades), cronograma, presupuesto e indicadores |
| SST | `/nuestra-gente/sst` | Qué es la SST, accidente vs. incidente, enfermedades laborales, buenas prácticas |
| Inducción y beneficios | `/nuestra-gente/induccion` | Beneficios, cronograma de inducción, inducción al cargo de Auxiliar de RR. HH. |
| Reglamento Interno | `/nuestra-gente/reglamento` | 8 capítulos y 24 artículos |
| Políticas | `/nuestra-gente/politicas` | 11 políticas con su procedimiento |
| Manual de Imagen | `/nuestra-gente/manual-imagen` | Presentación personal por área |
| Administrador | `/admin` | Agregar, editar y eliminar productos; fotos del carrusel; video del inicio |

---

## 2. Dónde cambiar cada cosa (lo más importante)

| Quiero cambiar… | Archivo |
|---|---|
| **Colores, fuentes, tamaños de letra, bordes, velocidad del carrusel** | `src/styles/variables.css` |
| **Teléfono, WhatsApp, correo, dirección, ubicación del mapa, redes, menú** | `src/config/site.js` |
| Textos de historia, misión, visión, valores, cultura, objetivos | `src/data/empresa.js` |
| Plan de Bienestar | `src/data/bienestar.js` |
| SST | `src/data/sst.js` |
| Reglamento | `src/data/reglamento.js` |
| Políticas | `src/data/politicas.js` |
| Manual de imagen | `src/data/manual.js` |
| Inducción, beneficios, cargo | `src/data/induccion.js` |
| Estilos generales (botones, tarjetas, secciones) | `src/styles/global.css` |
| Imágenes fijas de la página | `public/img/` |

**Ejemplos rápidos** (en `variables.css`):

```css
--dorado: #c9a227;              /* cambia el dorado en toda la página */
--fuente-titulos: 'Cinzel';     /* fuente de los títulos */
--tam-h2: clamp(1.7rem, 3.2vw, 2.5rem);  /* tamaño de títulos de sección */
--carrusel-velocidad: 45s;      /* más segundos = carrusel más lento */
```

Cada página (`src/pages/...`) también tiene su propio bloque `<style>` al final, por si quieres ajustar algo solo de esa página.

---

## 3. Ejecutar en tu computador (Windows)

1. Instala **Node.js 22** o superior: https://nodejs.org
2. Abre la carpeta del proyecto en VS Code y en la terminal escribe:

```bash
npm install
```

3. Copia `.env.example` y renómbralo a `.env`. Para probar en local puedes dejar vacíos los datos de Turso (se crea un archivo `local.db` automáticamente).
4. Inicia la página:

```bash
npm run dev
```

5. Abre http://localhost:4321
   - Panel admin: http://localhost:4321/admin
   - Si no pusiste `ADMIN_PASSWORD` en el `.env`, en local la clave es **admin123**.

> Las tablas de la base de datos se crean solas la primera vez, con 6 productos de ejemplo que puedes editar o borrar.

---

## 4. Configurar los servicios

### Turso (base de datos)
1. Crea una cuenta en https://turso.tech
2. Crea una base de datos (por ejemplo `gentau`).
3. Copia la **URL** (`libsql://...`) y genera un **token**.
4. Ponlos en `TURSO_DATABASE_URL` y `TURSO_AUTH_TOKEN`.

### Cloudinary (fotos y video)
1. Crea una cuenta en https://cloudinary.com
2. En el *Dashboard* copia **Cloud name**, **API Key** y **API Secret**.
3. Ponlos en `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET`.

Las fotos se guardan en la carpeta `gentau/` de tu Cloudinary. Cuando borras un producto o una foto del carrusel desde el admin, también se borra de Cloudinary.

---

## 5. Publicar en Render

1. Sube el proyecto a GitHub (el `.gitignore` ya evita subir `.env` y `node_modules`).
2. En https://render.com → **New → Web Service** → conecta tu repositorio.
3. Configura:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
4. En **Environment** agrega las variables:

```
HOST=0.0.0.0
TURSO_DATABASE_URL=...
TURSO_AUTH_TOKEN=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
ADMIN_PASSWORD=tu-clave-segura
SESSION_SECRET=una-frase-larga-y-aleatoria
```

(También puedes usar el archivo `render.yaml` incluido con la opción **Blueprint**.)

> **Dominio propio:** si luego usas un dominio como `www.gentau.co`, agrégalo en `astro.config.mjs` dentro de `security.allowedDomains`.

---

## 6. Video del inicio

Tienes dos opciones:

- **Desde el admin** (recomendado): pestaña *Video del inicio* → elige tu video MP4 → Guardar. Se sube a Cloudinary.
- **Como archivo:** copia tu video en `public/videos/hero.mp4`. Se usa cuando no hay video en el admin.

Recomendado: MP4 horizontal, de 10 a 30 segundos y liviano (menos de 20 MB si va en `public/`).

---

## 7. Estructura del proyecto

```
src/
├── config/site.js          ← datos de la empresa y menú
├── styles/
│   ├── variables.css       ← COLORES, FUENTES Y TAMAÑOS
│   ├── global.css          ← estilos compartidos
│   └── admin.css           ← estilos del panel
├── data/                   ← textos de los documentos
├── components/             ← Header, Footer, Hero, Carrusel, Logo, Íconos...
├── layouts/                ← plantillas de página
├── lib/                    ← base de datos, Cloudinary, sesión
├── scripts/admin.js        ← botones del panel admin
├── middleware.js           ← protege /admin
└── pages/
    ├── index.astro         ← Inicio
    ├── nosotros.astro
    ├── productos.astro
    ├── nuestra-gente/      ← páginas de Talento Humano
    ├── admin/              ← login y panel
    └── api/                ← rutas que guardan en la base de datos
```
