import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kayaotolastik724.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
});
