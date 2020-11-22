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
      checkClickBtn(); //функция меняет текстовое значение кнопки, но не хранит его.=(
      // alert(`Error: Movie ${filmObj.title} is already added.`);
      // localStorage.removeItem('Watched', JSON.stringify(filmsArray)); (если оставить так, очистит все локальное хранилище а не конкретный элемент)
      return;
    }

    else {
      filmsArray.push(filmObj);
      localStorage.setItem('Watched', JSON.stringify(filmsArray));
      // checkClickBtn();
    }
  }

const checkClickBtn = () => {
  const btnWatched = document.querySelector(".button-watcyed");

  if (btnWatched.textContent === "add to watched") {
    btnWatched.textContent = "del from watched";
  } else if (btnWatched.textContent === "del from watched") {
    btnWatched.textContent = "add to watched";
  }
  return
}
