import movieCardMkp from '../templates/list_film.hbs';
import { fetchIt, apiKey } from './fetch';

const galleryList = document.querySelector('.js-gallery');

const makesTrendingMkp = () => {
  const URLTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`; //constant

  fetchIt(URLTrending).then(src =>
    src.results.forEach(movie => {
      galleryList.insertAdjacentHTML('beforeend', movieCardMkp(movie));
    }),
  );
};

makesTrendingMkp();
