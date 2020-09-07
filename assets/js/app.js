function registerNavbarToggle () {
  const $navBarToggle = document.querySelector('.navbar-toggler');
  const $navBarContent = document.querySelector('#la-navbar-content');

  $navBarToggle.addEventListener('click', (event) => {
    event.preventDefault();
    $navBarContent.classList.toggle('show');
  });
}

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

window.addEventListener('DOMContentLoaded', (event) => {
  registerNavbarToggle();
  registerCollapseToggles();
});
