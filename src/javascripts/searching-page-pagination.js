import paginationCard from '../templates/pagination.hbs';
import { imageApiService, refs, renderMarkup } from './search-movies';

function makesPagination() {
    for (let i = 0; i < imageApiService.totalPages.length; i += 1) {
        imageApiService.totalPages[i] = i + 1;
        }
    refs.pageButton.insertAdjacentHTML('beforeend', paginationCard(imageApiService.totalPages));
    refs.pageButton.addEventListener('click', changePage);

    refs.buttonNext.addEventListener('click', nextPage);
    refs.buttonPrev.addEventListener('click', previousPage);
}

function nextPage() {
    refs.pageButton.style.transform = moveRight();   
}

let width = 0;
function moveRight() {
    for (let i = 0; i < 25; i += 1) {
        width += 400;
        const move = `translateX(-${width}px)`;
        return move;
    }
    return width;
}

function previousPage() {
    refs.pageButton.style.transform = moveLeft();   
}

function moveLeft() {
    for (let i = 0; i < 5; i += 1) {
        width -= 400;
        const move = `translateX(-${width}px)`;
        return move;
    }
    return width;
}

function resetMove() {
    refs.pageButton.style.transform = 'translateX(0)';   
}

function changePage(e) {
    imageApiService.setPage(e.target.textContent);
    imageApiService.fetchImages().then(renderMarkup);   
}


function scrollMovies() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function clearPagination() {
    imageApiService.resetPage();
    refs.pageButton.innerHTML = '';
}

export { makesPagination, nextPage, moveRight, previousPage, moveLeft, changePage, scrollMovies, clearPagination, resetMove };