# ESTÁS PARA MÁS !!!
Landing page oficial del grupo de entrenamiento multidisciplinario **[Estás Para Más](https://estasparamas.netlify.app)** — Tandil, Buenos Aires, Argentina.

## Estructura
```
src/
├── assets/            # fotos (procesadas a WebP por Astro en build)
├── components/        # 1 componente .astro por sección de la landing
├── layouts/BaseLayout.astro   # <head>, SEO/OG, scripts globales
├── pages/
│   ├── index.astro            # la landing (secciones en orden de funnel)
│   └── robots.txt.ts          # robots.txt generado (usa `site` del config)
└── styles/global.css
public/
└── og-preview.jpg     # imagen 1200×630 para previews en redes
```