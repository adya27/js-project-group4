import { ImageApiService } from './api-service-second';
import markupCard from '../templates/list_films.hbs';
import { makesTrendingMkp } from './addTrendsMkp';
import pagination from '../templates/pagination.hbs';

// переменная для сохранения свойства total_pages
let totalPage = 0;

// переменные для параметров slice() 
let bgn = 0;
let end = 5;

// массив всех страниц (totalPage)
const arrTotalPages = [];

// массив первых 5 страниц для отрисовки разметки
let arrVissiblePages = [];


const refs = {
    searchForm: document.querySelector('.header-search'),
    imageGallery: document.querySelector('.gallery'),
    buttonPages: document.querySelector('.button-pages'),
    left: document.querySelector('.left'),
    rigth: document.querySelector('.rigth'),
}

const imageApiService = new ImageApiService();
refs.searchForm.addEventListener('submit', searchForm);
refs.rigth.addEventListener('click', onRigth)
refs.left.addEventListener('click', onLeft)
refs.buttonPages.addEventListener('click', onPage);

function searchForm(e) {
    e.preventDefault();
    imageApiService.searchQuery = e.currentTarget.elements.query.value;
    fetchData();
}

function fetchData() {
    imageApiService.fetchImages().then(responce => {
    totalPage = responce.total_pages;
    renderMarkup(responce.results);
    // console.log(totalPage);
    creatArrTotalPages(totalPage);
    currentArrPages(bgn, end, totalPage);
    });
}

function renderMarkup(movies) {
    refs.imageGallery.innerHTML = '';
    refs.imageGallery.insertAdjacentHTML('beforeend', markupCard(movies))
    if (imageApiService.searchQuery === '') {
    makesTrendingMkp();
    }
}
    
// Функция для создания массива всех страниц. Элемент массива объект {page: i}, чтоб была возможность рендерить с помощью шаблона hbs

function creatArrTotalPages(totalPage) {
  
  for (let i = 1; i <= totalPage; i += 1) {
      arrTotalPages.push({page: i})
    }

    if (totalPage > 5) {
        refs.left.classList.remove('ishidden');
        refs.rigth.classList.remove('ishidden');
    }
}

// Функция для извлечения 5 страниц, которые будут отображаться

function currentArrPages(begin, end, totalPage) {
    if (totalPage === 0) {
        return;
}

    if (totalPage > 5) {
        arrVissiblePages = arrTotalPages.slice(begin, end);
        appendPageMarkup(arrVissiblePages);
    } else {
        appendPageMarkup(arrTotalPages);
    }
 
}

// создание разметки 
function appendPageMarkup(arrVissiblePages) {
   
  refs.buttonPages.innerHTML = pagination(arrVissiblePages);
  
}

// функция которая увеличивает параметры slice() для перелистывания страниц в сторону увеличения. слушатель на кнопке rigth

function onRigth() {
 
  if (end === totalPage) {
    return;
  }
  bgn += 1;
  end += 1;
  currentArrPages(bgn, end, totalPage)
}

// функция которая уменьшает параметры slice() для перелистывания страниц в сторону уменьшения. слушатель на кнопке left

function onLeft() {

  if (bgn === 0) {
    return;
  }
  
  bgn -= 1;
  end -= 1;
  currentArrPages(bgn, end, totalPage)
}

// функция для любой кнопки с номером страницы

function onPage(e) {
  console.log(e.target.dataset.page);
  imageApiService.currentPage = e.target.dataset.page;
  refs.imageGallery.innerHTML = '';
  fetchData();
}

