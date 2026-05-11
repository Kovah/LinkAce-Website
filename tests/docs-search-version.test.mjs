import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  filterHitsByDocsVersion,
  getDocsVersionFromPath,
} from '../assets/js/docs-search-version.mjs';

test('detects docs version from docs URL path', () => {
  assert.equal(getDocsVersionFromPath('/docs/v2/'), 'v2');
  assert.equal(getDocsVersionFromPath('/docs/v2/setup/setup-with-docker/'), 'v2');
  assert.equal(getDocsVersionFromPath('/docs/v1/'), 'v1');
  assert.equal(getDocsVersionFromPath('/docs/v1/setup/'), 'v1');
  assert.equal(getDocsVersionFromPath('/features'), null);
});

test('filters search hits to the current docs version when matches exist', () => {
  const hits = [
    { title: 'System Settings', version: 'v2' },
    { title: 'System Settings', version: 'v1' },
    { title: 'Post-Setup Steps', version: 'v2' },
  ];

  assert.deepEqual(filterHitsByDocsVersion(hits, 'v2'), [
    { title: 'System Settings', version: 'v2' },
    { title: 'Post-Setup Steps', version: 'v2' },
  ]);

  assert.deepEqual(filterHitsByDocsVersion(hits, 'v1'), [
    { title: 'System Settings', version: 'v1' },
  ]);
});

test('keeps all search hits when current version has no matches', () => {
  const hits = [
    { title: 'Legacy Docker Setup', version: 'v1' },
  ];

  assert.deepEqual(filterHitsByDocsVersion(hits, 'v2'), hits);
});

test('keeps all search hits outside versioned docs', () => {
  const hits = [
    { title: 'System Settings', version: 'v2' },
    { title: 'System Settings', version: 'v1' },
  ];

  assert.deepEqual(filterHitsByDocsVersion(hits, null), hits);
});
