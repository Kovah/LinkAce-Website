function registerNavbarToggle(){
  const $navBarToggle = document.querySelector('.navbar-toggler');
  const $navBarContent = document.querySelector('#la-navbar-content');

  $navBarToggle.addEventListener('click', (event)=>{
    event.preventDefault();
    $navBarContent.classList.toggle('show');
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  registerNavbarToggle();
});
