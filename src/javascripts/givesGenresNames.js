import genres from './genres.js';

function givesGenresNames(genreId) {
  const genreName = genres.find(num => genreId === num.id);
  return genreName.name;
}
