import movieCardMkp from '../templates/list_films.hbs';
import { fetchIt, apiKey } from './fetch';
import { givesGenresNames, givesGenresArr } from './givesGenresNames';
import genres from './genres.js';
import getYearFromReleaseDate from './getYearFromReleaseDate';
import { onClickOpenModal } from './modal';
import makesStubForPicture from './makesStubForPicture';

const galleryList = document.querySelector('.js-gallery');

const makesTrendingMkp = () => {
  const URLTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`; //constant

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
      galleryList.insertAdjacentHTML('beforeend', movieCardMkp(results));
      galleryList.addEventListener('click', onClickOpenModal);
    });
};

makesTrendingMkp();

export { makesTrendingMkp };
