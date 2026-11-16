// ============================================================
//  FORMULARIO DE EVALUACIÓN DE DESEMPEÑO
//  Todo ocurre en el navegador: NO se envía ni se guarda nada
//  (ni servidor, ni base de datos, ni localStorage).
// ============================================================

/**
 * Promedio de una lista de notas. Devuelve null si no hay notas.
 * @param {number[]} notas
 */
export function promedio(notas) {
  return notas.length ? notas.reduce((a, b) => a + b, 0) / notas.length : null;
}

/**
 * Etiqueta de la escala más cercana al promedio.
 * Si el promedio queda justo en la mitad (p. ej. 3,5) se toma el nivel superior.
 * @param {number} valor
 * @param {{ valor: number; etiqueta: string }[]} niveles
 */
export function etiquetaCercana(valor, niveles) {
  const min = niveles[0].valor;
  const max = niveles[niveles.length - 1].valor;
  const n = Math.min(max, Math.max(min, Math.round(valor)));
  return niveles.find((x) => x.valor === n)?.etiqueta ?? '';
}

export function iniciarEvaluacion(form) {
  const niveles = JSON.parse(form.dataset.niveles);
  const sinNotas = form.dataset.sinNotas;
  const formato = new Intl.NumberFormat('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const tablas = [...form.querySelectorAll('[data-seccion]')];
  const todos = (selector) => form.querySelectorAll(selector);

  // ---------- Promedios ----------
  const pintar = (id, notas, total) => {
    const prom = promedio(notas);
    todos(`[data-promedio="${id}"]`).forEach((el) => (el.textContent = prom === null ? '—' : formato.format(prom)));
    todos(`[data-promedio-etiqueta="${id}"]`).forEach((el) => (el.textContent = prom === null ? sinNotas : etiquetaCercana(prom, niveles)));
    todos(`[data-promedio-conteo="${id}"]`).forEach((el) => (el.textContent = `${notas.length} de ${total} calificados`));
    todos(`[data-promedio-barra="${id}"]`).forEach((el) => (el.style.width = prom === null ? '0' : `${(prom / niveles.length) * 100}%`));
  };

  const calcular = () => {
    const todas = [];
    let total = 0;
    tablas.forEach((tabla) => {
      const grupos = new Set([...tabla.querySelectorAll('input[type="radio"]')].map((r) => r.name));
      const notas = [];
      grupos.forEach((nombre) => {
        const marcada = tabla.querySelector(`input[name="${nombre}"]:checked`);
        if (marcada && marcada.value !== 'na') notas.push(Number(marcada.value));
      });
      pintar(tabla.dataset.seccion, notas, grupos.size);
      todas.push(...notas);
      total += grupos.size;
    });
    pintar('general', todas, total);
  };

  // ---------- Cuadros de texto que crecen con el contenido (para que se impriman completos) ----------
  const ajustarAlto = (area) => {
    area.style.height = 'auto';
    area.style.height = `${area.scrollHeight + 2}px`;
  };
  // Copia de solo impresión de cada cuadro de texto (el <textarea> no crece al imprimir)
  const espejoDe = (area) => {
    let espejo = area.nextElementSibling;
    if (!espejo?.classList.contains('ev-espejo')) {
      espejo = document.createElement('div');
      espejo.className = 'ev-espejo';
      espejo.setAttribute('aria-hidden', 'true');
      area.after(espejo);
    }
    return espejo;
  };
  const sincronizar = (area) => (espejoDe(area).textContent = area.value);
  const sincronizarTodos = () => todos('textarea').forEach(sincronizar);
  const ajustarTodos = () => {
    todos('textarea[data-autoalto]').forEach(ajustarAlto);
    sincronizarTodos();
  };

  // Fechas vacías: al imprimir no se muestra "dd/mm/aaaa"
  const marcarVacio = (campo) => campo.classList.toggle('ev-vacio', !campo.value);

  form.addEventListener('input', (e) => {
    const t = e.target;
    if (t.matches('textarea[data-autoalto]')) ajustarAlto(t);
    if (t.matches('textarea')) sincronizar(t);
    if (t.matches('input[type="date"]')) marcarVacio(t);
  });
  form.addEventListener('change', (e) => {
    if (e.target.matches('input[type="radio"]')) calcular();
    if (e.target.matches('input[type="date"]')) marcarVacio(e.target);
  });
  // Nunca se envía
  form.addEventListener('submit', (e) => e.preventDefault());

  // ---------- Plan de mejora: agregar / quitar filas ----------
  const cuerpoPlan = form.querySelector('[data-filas-plan]');
  const plantilla = form.querySelector('[data-plantilla-fila]');
  form.querySelector('[data-agregar-fila]')?.addEventListener('click', () => {
    if (!cuerpoPlan || !plantilla) return;
    const n = Number(cuerpoPlan.dataset.siguiente);
    cuerpoPlan.dataset.siguiente = String(n + 1);
    const html = plantilla.innerHTML.replaceAll('__N__', String(n));
    cuerpoPlan.insertAdjacentHTML('beforeend', html);
    cuerpoPlan.lastElementChild?.querySelectorAll('textarea').forEach(sincronizar);
    cuerpoPlan.lastElementChild?.querySelector('textarea, input')?.focus();
  });
  form.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-quitar-fila]');
    if (boton) {
      boton.closest('tr')?.remove();
      form.querySelector('[data-agregar-fila]')?.focus();
    }
  });

  // ---------- Imprimir y limpiar ----------
  document.querySelectorAll('[data-accion="imprimir"]').forEach((b) =>
    b.addEventListener('click', () => {
      ajustarTodos();
      window.print();
    })
  );
  window.addEventListener('beforeprint', ajustarTodos);

  document.querySelectorAll('[data-accion="limpiar"]').forEach((b) =>
    b.addEventListener('click', () => {
      if (!window.confirm(form.dataset.confirmarLimpiar)) return;
      form.reset();
      cuerpoPlan?.querySelectorAll('tr[data-agregada]').forEach((fila) => fila.remove());
      if (cuerpoPlan) cuerpoPlan.dataset.siguiente = String(cuerpoPlan.querySelectorAll('tr').length + 1);
      todos('textarea[data-autoalto]').forEach((a) => (a.style.height = ''));
      sincronizarTodos();
      todos('input[type="date"]').forEach(marcarVacio);
      calcular();
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      form.querySelector('input, textarea')?.focus({ preventScroll: true });
    })
  );

  sincronizarTodos();
  calcular();
}

const formulario = document.querySelector('[data-evaluacion]');
if (formulario) iniciarEvaluacion(formulario);
