import vue from '@vitejs/plugin-vue';
import { transform } from 'esbuild';
import { resolve } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import { Plugin, UserConfig, defineConfig } from 'vite';

function minifyBrowserBundles() {
  return {
    name: 'minifyBrowserBundles',
    renderChunk: {
      order: 'post',
      async handler(code) {
        return await transform(code, {
          minify: true,
          // Ensure dev-only code is properly tree-shaked
          define: {
            'process.env.NODE_ENV': '"production"',
          },
        });
      },
    },
  } as Plugin;
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config: UserConfig = {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    build: {
      emptyOutDir: true,
      copyPublicDir: false,
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'AgendaEmbed',
        fileName: () => {
          return 'agenda-embed.js';
        },
        formats: ['es'],
      },
    },

    plugins: [
      vue({
        template: {
          compilerOptions: {
            whitespace: 'preserve',
          },
        },
      }),
    ],

    server: {
      port: 3000,
    },
  };

  config.build ??= {};
  config.build.rollupOptions ??= {};
  config.plugins ??= [];

  if (command === 'serve') {
    config.build.rollupOptions.input = {
      main: resolve(__dirname, 'index.html'),
      yverdon: resolve(__dirname, 'yverdon.html'),
    };
  } else {
    config.plugins.push(minifyBrowserBundles());
  }

  return config;
});
