import docsSearch from './docs-search';

function registerCollapseToggles () {
  const collapseToggles = document.querySelectorAll('[data-toggle="collapse"]');

  collapseToggles.forEach($toggle => {
    const $target = document.querySelector($toggle.dataset.target);
    if ($target) {
      $toggle.addEventListener('click', () => {
        $toggle.setAttribute('aria-expanded', $toggle.getAttribute('aria-expanded') === 'false');
        $target.classList.toggle('show');
      });
    }
  });
}

function initiateDocsSearch () {
  const searchEnabled = document.body.classList.contains('is-docs');

  if (searchEnabled) {
    docsSearch.start();
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  registerCollapseToggles();
  initiateDocsSearch();
});
