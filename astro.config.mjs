import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ganzodecor.netlify.app',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  image: {
    domains: ['images.unsplash.com', 'm.media-amazon.com'],
  },
});
