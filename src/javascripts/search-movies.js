import { ImageApiService } from './api-service';
import { makesTrendingMkp } from './addTrendsMkp';
import markupCard from '../templates/list_films.hbs';
import { makesPagination, nextPage, moveRight, previousPage, moveLeft, changePage, scrollMovies, clearPagination, resetMove } from '../javascripts/searching-page-pagination';

const refs = {
    searchForm: document.querySelector('.header-search'),
    imageGallery: document.querySelector('.js-gallery'),
    notification: document.querySelector('.header-notification'),
    paginationBlock: document.querySelector('.block-pagination'),
    pageButton: document.querySelector('.block-pagination-list'),
    buttonNext: document.querySelector('.block-pagination-right'),
    buttonPrev: document.querySelector('.block-pagination-left'),
    containerHidden: document.querySelector('.pages-container'),

    }
const imageApiService = new ImageApiService();

refs.searchForm.addEventListener('submit', searchForm);

function searchForm(e) {
    e.preventDefault();
    imageApiService.searchQuery = e.currentTarget.elements.query.value;
    imageApiService.fetchImages()
        .then(renderMarkup)
        .then(clearPagination)
        .then(makesPagination)
        .then(resetMove);
    refs.paginationBlock.classList.remove('ishidden');
    refs.containerHidden.classList.add('ishidden');
}

function renderMarkup(movies) {
    refs.imageGallery.innerHTML = '';
    refs.imageGallery.insertAdjacentHTML('beforeend', markupCard(movies));
    showNotification();
    replaceImages();
    scrollMovies();
        
    if (imageApiService.totalResults === 0) {
        showError();
        makesTrendingMkp();
        }
}

function showNotification() {
    refs.notification.classList.add('success');
    refs.notification.textContent = `Found ${imageApiService.totalResults} results for your search`;
    
}

function showError() {
    refs.notification.classList.replace('success', 'error');
    refs.notification.textContent = `No results were found for your search. Try again, please`
}

function replaceImages() {
    const images = document.querySelectorAll('.js-image-src');
    const brokenLink = 'https://image.tmdb.org/t/p/w400';
    const defaultImage = 'https://bytes.ua/wp-content/uploads/2017/08/no-image.png';
    images.forEach(image => {
        if (image.src === brokenLink) {
            image.src = defaultImage;
        }
        })
}

export { imageApiService, refs, searchForm, renderMarkup };

    
