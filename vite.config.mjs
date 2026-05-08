import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const configDir = dirname(fileURLToPath(import.meta.url));

/** @type {import('vite').UserConfig} */
export default {
  root: '.',
  publicDir: false,
  build: {
    outDir: 'assets/dist',
    assetsDir: '',
    emptyOutDir: false,
    sourcemap: false,
    rollupOptions: {
      input: {
        app: resolve(configDir, 'assets/js/app.js'),
        docs: resolve(configDir, 'assets/js/docs.js'),
        'app.css': resolve(configDir, 'assets/styles/app.css'),
        'highlighter.css': resolve(configDir, 'assets/styles/highlighter.css'),
      },
      output: {
        entryFileNames: ({ name }) => `${name}.js`,
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name && assetInfo.name.includes('.')
            ? assetInfo.name.slice(assetInfo.name.lastIndexOf('.'))
            : '';
          const base = assetInfo.name ? assetInfo.name.replace(ext, '') : '[name]';

          return `${base}${ext}`;
        },
      },
    },
    target: 'es2019',
    minify: 'esbuild',
  },
};
