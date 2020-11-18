import { ImageApiService } from './api-service';
import markupCard from '../templates/list_films.hbs';
import { makesTrendingMkp } from './addTrendsMkp';

const refs = {
    searchForm: document.querySelector('.header-search'),
    imageGallery: document.querySelector('.gallery'),
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
    refs.imageGallery.insertAdjacentHTML('beforeend', markupCard(movies))
    if (imageApiService.searchQuery === '') {
        makesTrendingMkp();
    }
}
    
