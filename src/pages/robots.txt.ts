// src/pages/robots.txt.ts
// robots.txt generado dinámicamente: toma el dominio de astro.config.mjs (site)
// y construye la URL del sitemap. Cambiar el dominio = cambiar una sola línea
// en el config, y todo el sitio queda consistente.
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL("sitemap-index.xml", site);

    return new Response(
        `# Estas Para Mas — rastreo permitido para buscadores y previews de redes
User-agent: *
Allow: /

# Sitemap generado por Astro en build
Sitemap: ${sitemapURL.href}
`,
        {
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        },
    );
};
