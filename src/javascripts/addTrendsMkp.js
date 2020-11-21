import movieCardMkp from '../templates/list_films.hbs';
import { fetchIt, apiKey } from './fetch';
import { givesGenresNames, givesGenresArr } from './givesGenresNames';
import genres from './genres.js';
import getYearFromReleaseDate from './getYearFromReleaseDate';
import { onClickOpenModal } from './modal';
import makesStubForPicture from './makesStubForPicture';
import hideLoader from './loader';
import refs from './pagination-btns-refs';
import { onClickFirstBtn } from './trending-page-pagination';

const galleryList = document.querySelector('.js-gallery');

const makesTrendingMkp = (page = 1) => {
  const URLTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`; //constant

  fetchIt(URLTrending)
    .then(res => {
      refs.lastBtn.textContent = res.total_pages;
      return res;
    })
    .then(({ results }) => {
      return results;
    })
    .then(results => {
      results.forEach(movie => {
        movie.genre = givesGenresArr(movie.genre_ids);
        movie.year = getYearFromReleaseDate(movie.release_date);
        movie.poster = makesStubForPicture(movie.poster_path);
        // console.log(movie);
      });
      return results;
    })
    .then(results => {
      galleryList.innerHTML = movieCardMkp(results);
      galleryList.addEventListener('click', onClickOpenModal);
    })
    .then(() => {
      hideLoader();
    });
};

onClickFirstBtn();

export { makesTrendingMkp };
