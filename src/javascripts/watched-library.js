export default function onButtonWatchedClick() {
  const filmObj = {
    filmId: document.querySelector('.heder-images').dataset.id,
    poster_path: document.querySelector('.image-modal').src,
    title: document.querySelector('.heder-images').textContent,
    genre: document.querySelector('.genre').textContent,
    release_date: document.querySelector('.value').textContent.slice(0, 4),
    votes: document.querySelector('.vote').textContent,
  };

  if (localStorage.getItem('Watched') === null) {
    localStorage.setItem('Watched', JSON.stringify([filmObj]));
    return;
  }

  const filmsString = localStorage.getItem('Watched');
  let filmsArray = JSON.parse(filmsString);

  if (filmsArray.find(film => film.title === filmObj.title)) {
    alert(`Error: Movie ${filmObj.title} is already added.`);
    return;
  } else {
    filmsArray.push(filmObj);
    localStorage.setItem('Watched', JSON.stringify(filmsArray));
  }
}
