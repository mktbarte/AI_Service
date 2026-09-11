# LP AI Services — Barte

Landing page standalone empacotada como projeto Astro para publicar no Webflow Cloud.

- O HTML da página fica em `src/landing.html`. Para atualizar a landing, substitua esse arquivo e faça commit.
- `src/pages/index.astro` só entrega esse HTML na rota raiz do mount path.
- Não definir `base` no `astro.config.mjs`: o Webflow Cloud aplica o mount path sozinho.
