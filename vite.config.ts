import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        yverdon: resolve(__dirname, 'yverdon.html'),
      },
    },
  },

  plugins: [vue()],

  server: {
    port: 3000,
  },
});
