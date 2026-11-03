// Atajo para responder JSON desde las rutas de la API.
export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

export const text = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);
