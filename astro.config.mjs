import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// output "server": las páginas se generan al momento de pedirlas,
// así siempre muestran los productos, el video y el carrusel más recientes.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
