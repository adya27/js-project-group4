const paginationMobile = document.querySelector('.pagination-mobile');
const paginationDesktop = document.querySelector('.pagination-desktop');

window.addEventListener('resize', function () {
  if (innerWidth <= 320) {
    paginationMobile.classList.remove('closed');
    paginationMobile.classList.add('open');
    paginationDesktop.classList.remove('open');
    paginationDesktop.classList.add('closed');
  } else {
    paginationMobile.classList.add('closed');
    paginationMobile.classList.remove('open');
    paginationDesktop.classList.add('open');
    paginationDesktop.classList.remove('closed');
  }
});
