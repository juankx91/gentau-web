// Lee variables de entorno tanto en desarrollo (.env) como en el servidor (Render).
export function env(name: string, fallback = ''): string {
  const fromProcess = process.env[name];
  const fromVite = (import.meta.env as Record<string, string | undefined>)[name];
  return fromProcess ?? fromVite ?? fallback;
}
