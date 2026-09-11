import { defineConfig } from 'astro/config';

// Não definir `base` aqui: o Webflow Cloud aplica o mount path automaticamente.
// `trailingSlash: 'never'` evita o loop de redirecionamento entre
// /ai-services (Webflow Cloud) e /ai-services/ (site Webflow).
export default defineConfig({
  trailingSlash: 'never',
  build: { format: 'file' },
});
