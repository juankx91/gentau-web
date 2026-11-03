# GENTAU · Sitio web (Astro + Turso + Cloudinary)

Sitio con inicio (hero con video + carrusel automático), productos, contacto, footer y un panel de administrador.

## 1. Preparar los servicios

**Turso (base de datos)** — con la CLI de Turso:
```
turso db create gentau
turso db show gentau --url          # → TURSO_DATABASE_URL
turso db tokens create gentau       # → TURSO_AUTH_TOKEN
```
Las tablas se crean solas la primera vez que se abre el sitio.

**Cloudinary** — en el Dashboard copia: Cloud name, API Key y API Secret.

## 2. Correr en tu computador
```
npm install
cp .env.example .env     # completa los valores
npm run dev
```
Abre http://localhost:4321 y el panel en http://localhost:4321/admin

## 3. Subir a GitHub
```
git init
git add .
git commit -m "Sitio GENTAU"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gentau-web.git
git push -u origin main
```
El archivo `.env` está en `.gitignore`: tus claves no se suben.

## 4. Publicar (Render)
New → Web Service → conecta el repositorio.
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Environment: agrega las 7 variables de `.env.example` y además `HOST=0.0.0.0`

## Dónde cambiar cosas
- Correo, teléfono, redes: `src/config.ts`
- Colores: variables al inicio de `src/styles/global.css`
- Textos del inicio: `src/pages/index.astro`
- Agregar una página nueva: crea `src/pages/mi-pagina.astro` (copia `contacto.astro` como base) y añade el enlace en `src/components/Header.astro`
