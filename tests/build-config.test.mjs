import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));

test('npm scripts use Vite for asset builds and keep Hugo commands', () => {
  assert.equal(packageJson.scripts.dev, 'vite build');
  assert.equal(packageJson.scripts.watch, 'vite build --watch');
  assert.equal(packageJson.scripts.prod, 'npm run production');
  assert.equal(packageJson.scripts.production, 'vite build');
  assert.equal(packageJson.scripts.serve, 'hugo serve -D --gc --bind 0.0.0.0');
  assert.equal(packageJson.scripts.build, 'npm run production && hugo');
  assert.equal(packageJson.scripts['build-with-search'], 'npm run production && hugo && npm run algolia');
});

test('package dependencies use Vite instead of Laravel Mix', () => {
  assert.equal(packageJson.devDependencies.vite, '7.3.1');
  assert.equal(packageJson.devDependencies['laravel-mix'], undefined);
  assert.equal(packageJson.overrides, undefined);
});

test('Vite config emits stable Hugo asset names into assets/dist', async () => {
  const config = (await import('../vite.config.mjs')).default;

  assert.equal(config.publicDir, false);
  assert.equal(config.build.outDir, 'assets/dist');
  assert.equal(config.build.assetsDir, '');
  assert.equal(config.build.emptyOutDir, false);
  assert.equal(config.build.rollupOptions.output.entryFileNames({ name: 'app' }), 'app.js');
  assert.equal(config.build.rollupOptions.output.entryFileNames({ name: 'docs' }), 'docs.js');

  const assetFileNames = config.build.rollupOptions.output.assetFileNames;
  assert.equal(assetFileNames({ name: 'app.css' }), 'app.css');
  assert.equal(assetFileNames({ name: 'highlighter.css' }), 'highlighter.css');

  assert.deepEqual(Object.keys(config.build.rollupOptions.input).sort(), [
    'app',
    'app.css',
    'docs',
    'highlighter.css',
  ]);
});
