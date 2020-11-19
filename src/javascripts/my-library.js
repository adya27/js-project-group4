import markupCard from '../templates/list_films_library.hbs';

const refs = {
  headerBtns: document.querySelector('.headerButtons'),
  btnWatched: document.querySelector('[data-action="watched"]'),
  btnQueue: document.querySelector('[data-action="queue"]'),
  imageGallery: document.querySelector('.gallery'),
};

const watchedMovies = JSON.parse(localStorage.getItem('Watched'));
const queueMovies = JSON.parse(localStorage.getItem('Queue'));

refs.headerBtns.addEventListener('click', onHeaderButtons);

renderMovies(watchedMovies);
refs.btnWatched.classList.add('selected');

function onHeaderButtons(e) {
  if (e.target.dataset.action === 'watched') {
    refs.btnWatched.classList.add('selected');
    refs.btnQueue.classList.remove('selected');

    renderMovies(watchedMovies);
  }

  if (e.target.dataset.action === 'queue') {
    refs.btnWatched.classList.remove('selected');
    refs.btnQueue.classList.add('selected');

    renderMovies(queueMovies);
  }
}

function renderMovies(movies) {
  refs.imageGallery.innerHTML = '';
  refs.imageGallery.insertAdjacentHTML('beforeend', markupCard(movies));
}
