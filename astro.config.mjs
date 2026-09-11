import { defineConfig } from 'astro/config';

// Não definir `base` nem `build.assetsPrefix` aqui: o Webflow Cloud aplica o
// mount path automaticamente no build e sobrescreve o que estiver commitado.
//
// `trailingSlash: 'ignore'` faz a rota responder tanto em /ai-services quanto
// em /ai-services/ (o site Webflow redireciona a versão com barra para a sem
// barra). A página é servida pelo worker (ver src/pages/index.astro), então
// não passa pela normalização de trailing slash dos assets estáticos.
export default defineConfig({
  trailingSlash: 'ignore',
});
