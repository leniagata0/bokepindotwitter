import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bokepindotwitter.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});