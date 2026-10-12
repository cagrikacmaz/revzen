// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cagrikacmaz.github.io',
  base: '/revzen',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
});
