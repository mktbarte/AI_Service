# LP AI Services — Barte

Landing page standalone empacotada como projeto Astro para publicar no Webflow Cloud.

- O HTML da página fica em `src/landing.html`. Para atualizar a landing, substitua esse arquivo e faça commit.
- `src/pages/index.astro` só entrega esse HTML na rota raiz do mount path.
- Não definir `base` no `astro.config.mjs`: o Webflow Cloud aplica o mount path sozinho.
- A rota **não** é pré-renderizada (`prerender = false`). Se virar `index.html` estático na raiz do mount path, o Cloudflare responde 307 `/ai-services` → `/ai-services/` e o site Webflow responde 301 de volta, gerando loop de redirect. Servida pelo worker, responde direto em `/ai-services`.
- Para testar localmente com paridade: `npm i @astrojs/cloudflare@^13 && npm i -D wrangler`, adicionar `base: '/ai-services'`, `output: 'server'` e `adapter: cloudflare()` num config temporário, rodar `astro build --config <config>` e `npx wrangler dev --config dist/server/wrangler.json`.
