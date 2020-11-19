import genres from './genres.js';

function givesGenresNames(genreId) {
  const genreName = genres.find(num => genreId === num.id);
  if (genreName) {
    return genreName.name;
  } else {
    return 'Other';
  }
}

function givesGenresArr(genreIds) {
  const genresArr = genreIds.map(givesGenresNames);

  if (genresArr.length <= 2) {
    return genresArr.join(', ');
  } else {
    return `${genresArr.slice(0, 2).join(', ')}, Other`;
  }
}

export { givesGenresNames, givesGenresArr };
