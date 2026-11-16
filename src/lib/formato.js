// Convierte 129900 en "$ 129.900" (pesos colombianos)
export function precioCOP(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(Number(valor) || 0);
}
