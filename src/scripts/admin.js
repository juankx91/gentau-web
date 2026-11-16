// ============================================================
//  LÓGICA DEL PANEL DE ADMINISTRADOR (se ejecuta en el navegador)
// ============================================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---------- Mensajes flotantes ----------
let temporizador;
function mensaje(texto, tipo = 'ok') {
  const toast = $('#toast');
  toast.textContent = texto;
  toast.className = `toast visible ${tipo === 'error' ? 'toast--error' : ''}`;
  clearTimeout(temporizador);
  temporizador = setTimeout(() => toast.classList.remove('visible'), 3500);
}

// ---------- Llamadas a la API ----------
async function api(url, metodo, datos) {
  const respuesta = await fetch(url, {
    method: metodo,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  const json = await respuesta.json().catch(() => ({}));
  if (respuesta.status === 401) {
    alert('Tu sesión expiró. Vuelve a iniciar sesión.');
    location.href = '/admin/login';
  }
  if (!respuesta.ok) throw new Error(json.error || 'Ocurrió un error');
  return json;
}

const recargar = (pestana) => {
  sessionStorage.setItem('pestanaAdmin', pestana);
  setTimeout(() => location.reload(), 600);
};

// ---------- Subir archivo a Cloudinary (con barra de progreso) ----------
async function subirArchivo(archivo, carpeta, tipo, barra) {
  const firma = await api('/api/admin/firma', 'POST', { carpeta });
  const datos = new FormData();
  datos.append('file', archivo);
  datos.append('api_key', firma.apiKey);
  datos.append('timestamp', firma.timestamp);
  datos.append('signature', firma.signature);
  datos.append('folder', firma.folder);

  return new Promise((resolver, rechazar) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `https://api.cloudinary.com/v1_1/${firma.cloudName}/${tipo}/upload`);
    if (barra) {
      barra.hidden = false;
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) barra.firstElementChild.style.width = `${(e.loaded / e.total) * 100}%`;
      };
    }
    xhr.onload = () => {
      const r = JSON.parse(xhr.responseText || '{}');
      if (xhr.status >= 200 && xhr.status < 300) resolver({ url: r.secure_url, id: r.public_id });
      else rechazar(new Error(r.error?.message || 'No se pudo subir el archivo'));
    };
    xhr.onerror = () => rechazar(new Error('Error de conexión al subir el archivo'));
    xhr.send(datos);
  });
}

function ocupado(boton, si, texto) {
  boton.disabled = si;
  if (si) { boton.dataset.original = boton.textContent; boton.textContent = texto; }
  else if (boton.dataset.original) boton.textContent = boton.dataset.original;
}

// ============================================================
//  PESTAÑAS
// ============================================================
function abrirPestana(nombre) {
  $$('[data-tab]').forEach((t) => t.classList.toggle('activa', t.dataset.tab === nombre));
  $$('[data-panel]').forEach((p) => (p.hidden = p.dataset.panel !== nombre));
}
$$('[data-tab]').forEach((t) => t.addEventListener('click', () => abrirPestana(t.dataset.tab)));
const pestanaGuardada = sessionStorage.getItem('pestanaAdmin');
if (pestanaGuardada) { abrirPestana(pestanaGuardada); sessionStorage.removeItem('pestanaAdmin'); }

// ============================================================
//  PRODUCTOS
// ============================================================
const formP = $('#form-producto');
const archivoP = $('#archivo-producto');
const urlP = $('#url-producto');
const previaP = $('#previa-producto');
const quitarFotoP = $('#quitar-foto-producto');

function mostrarPrevia(src) {
  previaP.hidden = !src;
  quitarFotoP.hidden = !src;
  if (src) previaP.querySelector('img').src = src;
}

archivoP.addEventListener('change', () => {
  const archivo = archivoP.files[0];
  if (archivo) { urlP.value = ''; mostrarPrevia(URL.createObjectURL(archivo)); }
});
urlP.addEventListener('input', () => { archivoP.value = ''; mostrarPrevia(urlP.value.trim()); });
quitarFotoP.addEventListener('click', () => {
  archivoP.value = ''; urlP.value = '';
  formP.imagen_url.value = ''; formP.imagen_id.value = '';
  mostrarPrevia('');
});

function limpiarFormulario() {
  formP.reset();
  formP.producto_id.value = ''; formP.imagen_url.value = ''; formP.imagen_id.value = '';
  mostrarPrevia('');
  $('#titulo-form').textContent = 'Nuevo producto';
  $('#cancelar-edicion').hidden = true;
}
$('#cancelar-edicion').addEventListener('click', limpiarFormulario);

// Botón "editar": llena el formulario con los datos del producto
$$('[data-editar]').forEach((b) =>
  b.addEventListener('click', () => {
    const p = JSON.parse(b.dataset.editar);
    limpiarFormulario();
    formP.producto_id.value = p.id;
    formP.nombre.value = p.nombre;
    formP.precio.value = p.precio;
    formP.categoria.value = p.categoria;
    formP.descripcion.value = p.descripcion;
    formP.destacado.checked = Number(p.destacado) === 1;
    formP.imagen_url.value = p.imagen_url || '';
    formP.imagen_id.value = p.imagen_id || '';
    mostrarPrevia(p.imagen_url || '');
    $('#titulo-form').textContent = `Editando: ${p.nombre}`;
    $('#cancelar-edicion').hidden = false;
    formP.scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
);

formP.addEventListener('submit', async (e) => {
  e.preventDefault();
  const boton = $('#guardar-producto');
  if (!formP.nombre.value.trim() || !Number(formP.precio.value)) {
    mensaje('Escribe el nombre y un precio mayor a 0.', 'error');
    return;
  }
  ocupado(boton, true, 'Guardando...');
  try {
    // 1) Si eligió una foto nueva, se sube primero a Cloudinary
    if (archivoP.files[0]) {
      const subida = await subirArchivo(archivoP.files[0], 'productos', 'image', $('#progreso-producto'));
      formP.imagen_url.value = subida.url;
      formP.imagen_id.value = subida.id;
    } else if (urlP.value.trim()) {
      formP.imagen_url.value = urlP.value.trim();
      formP.imagen_id.value = '';
    }
    // 2) Se guardan los datos
    const datos = Object.fromEntries(new FormData(formP));
    datos.id = datos.producto_id;
    datos.destacado = formP.destacado.checked;
    const editando = Boolean(datos.id);
    await api('/api/admin/productos', editando ? 'PUT' : 'POST', datos);
    mensaje(editando ? 'Producto actualizado ✔' : 'Producto agregado ✔');
    recargar('productos');
  } catch (err) {
    mensaje(err.message, 'error');
    ocupado(boton, false);
  }
});

$$('[data-eliminar-producto]').forEach((b) =>
  b.addEventListener('click', async () => {
    if (!confirm(`¿Eliminar "${b.dataset.nombre}"? Esta acción no se puede deshacer.`)) return;
    try {
      await api('/api/admin/productos', 'DELETE', { id: b.dataset.eliminarProducto });
      mensaje('Producto eliminado');
      recargar('productos');
    } catch (err) { mensaje(err.message, 'error'); }
  })
);

// ============================================================
//  CARRUSEL
// ============================================================
const archivosC = $('#archivos-carrusel');
archivosC.addEventListener('change', () => {
  const n = archivosC.files.length;
  $('#texto-archivos-carrusel').textContent = n ? `${n} foto(s) seleccionada(s)` : 'Ningún archivo seleccionado';
});

$('#form-carrusel').addEventListener('submit', async (e) => {
  e.preventDefault();
  const boton = $('#guardar-carrusel');
  const url = $('#url-carrusel').value.trim();
  const texto = $('#texto-carrusel').value.trim();
  const archivos = [...archivosC.files];
  if (!archivos.length && !url) { mensaje('Elige al menos una foto o pega un enlace.', 'error'); return; }

  ocupado(boton, true, 'Subiendo...');
  try {
    for (const [i, archivo] of archivos.entries()) {
      boton.textContent = `Subiendo ${i + 1} de ${archivos.length}...`;
      const subida = await subirArchivo(archivo, 'carrusel', 'image', $('#progreso-carrusel'));
      await api('/api/admin/carrusel', 'POST', { imagen_url: subida.url, imagen_id: subida.id, texto });
    }
    if (url) await api('/api/admin/carrusel', 'POST', { imagen_url: url, texto });
    mensaje('Fotos agregadas al carrusel ✔');
    recargar('carrusel');
  } catch (err) {
    mensaje(err.message, 'error');
    ocupado(boton, false);
  }
});

$$('[data-guardar-foto]').forEach((b) =>
  b.addEventListener('click', async () => {
    const tarjeta = b.closest('[data-foto]');
    try {
      await api('/api/admin/carrusel', 'PUT', {
        id: b.dataset.guardarFoto,
        texto: tarjeta.querySelector('[data-campo="texto"]').value,
        orden: tarjeta.querySelector('[data-campo="orden"]').value,
      });
      mensaje('Cambios guardados ✔');
      recargar('carrusel');
    } catch (err) { mensaje(err.message, 'error'); }
  })
);

$$('[data-eliminar-foto]').forEach((b) =>
  b.addEventListener('click', async () => {
    if (!confirm('¿Quitar esta foto del carrusel?')) return;
    try {
      await api('/api/admin/carrusel', 'DELETE', { id: b.dataset.eliminarFoto });
      mensaje('Foto quitada');
      recargar('carrusel');
    } catch (err) { mensaje(err.message, 'error'); }
  })
);

// ============================================================
//  VIDEO DEL INICIO
// ============================================================
const formV = $('#form-video');
const archivoV = $('#archivo-video');
archivoV.addEventListener('change', () => {
  const a = archivoV.files[0];
  $('#texto-archivo-video').textContent = a ? `${a.name} (${(a.size / 1048576).toFixed(1)} MB)` : 'MP4 o WEBM';
});

formV.addEventListener('submit', async (e) => {
  e.preventDefault();
  const boton = $('#guardar-video');
  const url = $('#url-video').value.trim();
  if (!archivoV.files[0] && !url) { mensaje('Elige un video o pega un enlace.', 'error'); return; }
  ocupado(boton, true, 'Subiendo video...');
  try {
    let datos = { hero_video_url: url, hero_video_id: '' };
    if (archivoV.files[0]) {
      const subida = await subirArchivo(archivoV.files[0], 'video', 'video', $('#progreso-video'));
      datos = { hero_video_url: subida.url, hero_video_id: subida.id };
    }
    await api('/api/admin/ajustes', 'PUT', datos);
    mensaje('Video actualizado ✔');
    recargar('video');
  } catch (err) {
    mensaje(err.message, 'error');
    ocupado(boton, false);
  }
});

$('#quitar-video').addEventListener('click', async () => {
  if (!confirm('¿Volver al video por defecto (public/videos/hero.mp4)?')) return;
  try {
    await api('/api/admin/ajustes', 'PUT', { hero_video_url: '', hero_video_id: '' });
    mensaje('Ahora se usa el video por defecto');
    recargar('video');
  } catch (err) { mensaje(err.message, 'error'); }
});
