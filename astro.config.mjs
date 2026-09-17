// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mestredasferramentas.com.br',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [react(), sitemap()],
  redirects: {
    '/author/andre-carvalho/page/2/': '/author/andre-carvalho/',
    '/author/andre-carvalho/page/5/': '/author/andre-carvalho/',
    '/author/severino-torquato/page/10/': '/author/severino-torquato/',
    '/category/melhor-furadeira/': '/melhor-furadeira/',
    '/category/melhor-parafusadeira/': '/melhor-parafusadeira/',
    '/category/melhor-parafusadeira/page/2/': '/melhor-parafusadeira/',
    '/category/melhor-parafusadeira/page/4/': '/melhor-parafusadeira/',
    '/como-furar-azulejo-com-furadeira/feed/': '/como-furar-azulejo-com-furadeira/',
    '/parafusadeira-deko-e-boa/feed/': '/parafusadeira-deko-e-boa/',
    '/qual-a-diferenca-entre-furadeira-de-impacto-e-martelete/feed/': '/qual-a-diferenca-entre-furadeira-de-impacto-e-martelete/'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});