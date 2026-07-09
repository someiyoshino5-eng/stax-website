import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/stax-website/' : '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms:   resolve(__dirname, 'terms.html'),
      },
    },
  },
}));
