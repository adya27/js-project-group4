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

  // makes last btn
  fetchIt(URLTrending).then(res => {
    console.log(res.total_pages);
    refs.lastBtn.textContent = res.total_pages;
    refs.lastBtn.addEventListener('click', onClickLastBtn);
    function onClickLastBtn(e) {
      e.preventDefault();
      if (refs.previousActiveBtn !== '') {
        refs.previousActiveBtn.classList.remove('current-page');
      }
      page = res.total_pages;
      makesTrendingMkp(page);
      refs.lastBtn.classList.add('current-page');
      refs.previousActiveBtn = refs.lastBtn;
      refs.eighthBtn.textContent = res.total_pages - 1;
      refs.seventhBtn.textContent = res.total_pages - 2;
      refs.sixthBtn.textContent = res.total_pages - 3;
      refs.fifthBtn.textContent = res.total_pages - 4;
      refs.fourthBtn.textContent = res.total_pages - 5;
      refs.thirdBtn.textContent = res.total_pages - 6;
      refs.secondBtn.textContent = '...';
    }
  });

  fetchIt(URLTrending)
    .then(({ results }) => results)
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
