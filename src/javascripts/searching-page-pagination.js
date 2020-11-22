import paginationCardSmall from '../templates/pagination-search-small.hbs';
import paginationCardInternal from '../templates/pagination-search-internal.hbs';
import paginationCardExternal from '../templates/pagination-search-external.hbs';
import { imageApiService, refs, renderMarkup } from './search-movies';

function makesPagination() {
    for (let i = 0; i < imageApiService.totalPages.length; i += 1) {
        imageApiService.totalPages[i] = i + 1;
    }
    if (imageApiService.totalPages.length <= 5) {
        refs.pageButton.insertAdjacentHTML('beforeend', paginationCardSmall(imageApiService.totalPages));
    } else if (document.documentElement.clientWidth <= 320) {
        refs.pageButton.insertAdjacentHTML('beforeend', paginationCardSmall(imageApiService.totalPages));
    } else {
        refs.stableContaiverPrev.insertAdjacentHTML('afterbegin', paginationCardInternal());
        refs.pageButton.insertAdjacentHTML('afterbegin', paginationCardSmall(imageApiService.totalPages));
        refs.stableContaiverNext.insertAdjacentHTML('afterbegin', paginationCardExternal());
        
        const firstPage = document.querySelector('.first-page');
        const lastPage = document.querySelector('.last-page');
        lastPage.textContent = imageApiService.totalPages.length;
        firstPage.addEventListener('click', onPageClick)
        lastPage.addEventListener('click', onPageClick)
       
    }
    refs.pageButton.addEventListener('click', changePage);
    refs.buttonNext.addEventListener('click', nextPage);
    refs.buttonPrev.addEventListener('click', previousPage);
    const firstPage = document.getElementById(`${imageApiService.totalPages[0]}`);
    firstPage.classList.add('current-page');
}

function onPageClick(e) {
    imageApiService.setPage(e.target.textContent);
    imageApiService.fetchImages().then(renderMarkup); 
}

// let idClick = 1;

function nextPage() {
    refs.pageButton.style.transform = moveRight(); 
    // idClick += 1;
    // if (idClick === clickNumber) {
    //     refs.buttonNext.removeEventListener('click', nextPage);
    //     idClick = 1;
    // }
    // return idClick;   
}

let width = 0;

function moveRight() {
    const block = 10;
    const blockNumber = imageApiService.totalPages.length % block;
    for (let i = 0; i < blockNumber + 1; i += 1) {
        width += 200;
        const move = `translateX(-${width}px)`;
        return move;
    }
    return width;
}

function previousPage() {
    refs.pageButton.style.transform = moveLeft(); 
    // idClick += 1;
    // if (idClick === clickNumber) {
    //     refs.buttonNext.removeEventListener('click', nextPage);
    // }
    // return idClick;    
}

function moveLeft() {
    for (let i = 0; i < 5; i += 1) {
        width -= 200;
        const move = `translateX(-${width}px)`;
        return move;
    }
    return width;
}

function resetMove() {
    refs.pageButton.style.transform = 'translateX(0)';   
}

function changePage(e) {
    for (let i = 0; i < refs.pageButton.children.length; i += 1) {
        if (refs.pageButton.children[i].classList.contains('current-page')) {
            refs.pageButton.children[i].classList.remove('current-page');
        }
    }
    e.target.closest('li').classList.add('current-page');
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
    refs.stableContaiverPrev.innerHTML = '';
    refs.stableContaiverNext.innerHTML = '';
}

function onPageClick(e) {
    imageApiService.setPage(e.target.textContent);
    imageApiService.fetchImages().then(renderMarkup); 
}

export { makesPagination, scrollMovies, clearPagination, resetMove };
