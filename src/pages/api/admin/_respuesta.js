// Ayudas pequeñas para responder en formato JSON desde la API
export const json = (datos, status = 200) =>
  new Response(JSON.stringify(datos), { status, headers: { 'Content-Type': 'application/json' } });

export const error = (mensaje, status = 400) => json({ error: mensaje }, status);

export const texto = (valor, max = 2000) => String(valor ?? '').trim().slice(0, max);
