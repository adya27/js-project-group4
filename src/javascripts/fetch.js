import modalTpl from '../templates/modal.hbs';

const apiKey = `00247c3a79a23ea8d225678fa2dae566`;
let query = `js`; // takes from form
let page = 1; // pagination while search movie
let movieId = 701189; // data-attribute of the backdrop img

const modalOverley = document.querySelector('.lightbox__overlay');

const fetchIt = URL => {
  return fetch(URL).then(res => res.json());
};

const makesSearchMkp = (query, page) => {
  const URLSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  fetchIt(URLSearch).then(src => movieCardMkp(src.results)); //сделать хендлбар функцию movieCardMkp для одной карточки и заимпортировать
};

const makesModalMkp = movieId => {
  const URLMovie = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  fetchIt(URLMovie).then(src => {
    modalOverley.insertAdjacentHTML('beforeend', modalTpl(src));
  });
};

export { fetchIt, apiKey, makesModalMkp };