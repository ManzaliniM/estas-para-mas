// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // URL de producción: el subdominio de Netlify mientras no haya dominio .ar.
    // Cuando exista el dominio real, cambiar SOLO esta línea.
    site: 'https://estasparamas.netlify.app',
    integrations: [sitemap()],
});
