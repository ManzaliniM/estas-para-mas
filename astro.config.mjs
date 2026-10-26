// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // PENDIENTE: reemplazar por el dominio real cuando esté registrado.
    // Todo lo canónico (sitemap, robots, og:url) sale de acá — una sola línea.
    site: 'https://www.estasparamas.com.ar',
    integrations: [sitemap()],
});
