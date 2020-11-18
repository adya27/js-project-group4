import movieCardMkp from '../templates/list_film.hbs';
import { fetchIt, apiKey } from './fetch';
import { givesGenresNames, givesGenresArr } from './givesGenresNames';
import genres from './genres.js';

const galleryList = document.querySelector('.js-gallery');

const makesTrendingMkp = () => {
  const URLTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`; //constant

  fetchIt(URLTrending).then(src =>
    src.results.forEach(movie => {
      movie.genre = givesGenresArr(movie.genre_ids);
      galleryList.insertAdjacentHTML('beforeend', movieCardMkp(movie));
    }),
  );
};

makesTrendingMkp();

export { makesTrendingMkp };
