import markupCard from '../templates/list_films_library.hbs';
import pagination from '../templates/pag-for-mylib.hbs';
import { onClickOpenModal } from './modal';

const refs = {
  headerBtns: document.querySelector('.headerButtons'),
  btnWatched: document.querySelector('[data-action="watched"]'),
  btnQueue: document.querySelector('[data-action="queue"]'),
  imageGallery: document.querySelector('.gallery'),
  // пагинация
  page: document.querySelector('.pages-list'),
  threePointLeft: document.querySelector('.js-three-left'),
  threePointRigth: document.querySelector('.js-three-rigth'),
  previusPage: document.querySelector('.js-previus-page'),
  nextPage: document.querySelector('.js-next-page'),
  // ====================================================================================
};

const watchedMovies = JSON.parse(localStorage.getItem('Watched'));
const queueMovies = JSON.parse(localStorage.getItem('Queue'));

// переменные для пагинации
const arrTotalPages = [];
let visibleMarkup = [];
let notesOnPage = 9;
let countOfPage = Math.ceil(watchedMovies.length / notesOnPage);
let numPage = 1;
let start = 0;
let end = start + notesOnPage;

// =====================================================================================

refs.headerBtns.addEventListener('click', onHeaderButtons);
refs.imageGallery.addEventListener('click', onClickOpenModal);

// пагинация
refs.page.addEventListener('click', onPage);
refs.previusPage.addEventListener('click', onPreviusBtn);
refs.nextPage.addEventListener('click', onNextBtn);

//  if (current.classList.contains('current-page')) {
//     current.classList.remove('current-page');
//   }
// ========================================================================

renderMovies(watchedMovies);
refs.btnWatched.classList.add('selected');


// пагинация

visibleMarkup = watchedMovies.slice(start, end);
renderMovies(visibleMarkup);
creatArrPage(countOfPage);
markupPage(arrTotalPages);
// =====================================

if (arrTotalPages.length <= 5) {
  refs.threePointLeft.classList.add('ishidden');
  refs.threePointRigth.classList.add('ishidden');
}

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


// функции для пагинации

function creatArrPage(countOfPage) {
    for (let i = 1; i <= countOfPage; i += 1) {
      arrTotalPages.push(i);
    
}
}

function markupPage(arrTotalPages) {
    refs.page.innerHTML = pagination(arrTotalPages);
}

function onPage(e) {
  numPage = e.target.dataset.page;
  
  start = ((numPage - 1) * notesOnPage);
  end = start + notesOnPage;
  
  visibleMarkup = watchedMovies.slice(start, end);
  renderMovies(visibleMarkup)
  const current = document.querySelector(`[data-page="${numPage}"]`);

 
  
  current.classList.add('current-page');
  
  console.log(current);

  return current;
}

function onPreviusBtn() {
   if (numPage === 1) {
    return;
  }
  numPage -= 1;
  start -= notesOnPage;
  end = start + notesOnPage;
  visibleMarkup = watchedMovies.slice(start, end);
  renderMovies(visibleMarkup);

}

function onNextBtn() {
  if (numPage > (arrTotalPages.length - 1)) {
    return;
}
  numPage += 1;
  start += notesOnPage;
  end = start + notesOnPage;
  visibleMarkup = watchedMovies.slice(start, end);
  renderMovies(visibleMarkup);
}
