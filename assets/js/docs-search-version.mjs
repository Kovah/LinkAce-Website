export function getDocsVersionFromPath(pathname) {
  if (pathname.startsWith('/docs/v2')) {
    return 'v2';
  }

  if (pathname.startsWith('/docs/v1')) {
    return 'v1';
  }

  return null;
}

export function filterHitsByDocsVersion(items, docsVersion) {
  if (!docsVersion) {
    return items;
  }

  const currentVersionItems = items.filter((item) => item.version === docsVersion);

  return currentVersionItems.length > 0 ? currentVersionItems : items;
}
