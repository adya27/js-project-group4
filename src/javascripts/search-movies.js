import { ImageApiService } from './api-service';
import markupCard from '../templates/list_films.hbs';
import { makesTrendingMkp } from './addTrendsMkp';

const refs = {
    searchForm: document.querySelector('.header-search'),
    imageGallery: document.querySelector('.js-gallery'),
    notification: document.querySelector('.header-notification'),
}

const imageApiService = new ImageApiService();
refs.searchForm.addEventListener('submit', searchForm);

function searchForm(e) {
    e.preventDefault();
    imageApiService.searchQuery = e.currentTarget.elements.query.value;
    imageApiService.fetchImages().then(renderMarkup);
}

function renderMarkup(movies) {
    refs.imageGallery.innerHTML = '';
    refs.imageGallery.insertAdjacentHTML('beforeend', markupCard(movies));
    const defaultImage = document.querySelectorAll('.js-image-src');
    defaultImage.forEach(image => {

        if (image.src === 'https://image.tmdb.org/t/p/w1280') {
            image.src = 'https://image.tmdb.org/t/p/w1280/q0ZdIhd9Zb8mu3E6GFMSBoNqzYl.jpg'
        }
        })
    showNotification();

       
    if (imageApiService.totalResults === 0) {
        refs.notification.classList.remove('success');
        makesTrendingMkp();
        showError(); 
    }
    if (imageApiService.searchQuery === '') {
        makesTrendingMkp();
        refs.notification.classList.remove('success', 'error');
    } 
}

function showNotification() {
    refs.notification.classList.add('success');
    refs.notification.textContent = `Found ${imageApiService.totalResults} results for your search`
}

function showError() {
    refs.notification.classList.add('error');
    refs.notification.textContent = `No results were found for your search. Try again, please`
}
    
