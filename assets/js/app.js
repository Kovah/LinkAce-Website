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

window.addEventListener('DOMContentLoaded', () => {
  registerCollapseToggles();
});
