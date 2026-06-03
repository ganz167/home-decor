import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ganzodecor.netlify.app',
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
