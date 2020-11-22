export default function onButtonQueueClick() {
  const filmObj = {
    filmId: document.querySelector('.heder-images').dataset.id,
    poster_path: document.querySelector('.image-modal').src,
    title: document.querySelector('.heder-images').textContent,
    genre: document.querySelector('.genre').textContent,
    release_date: document.querySelector('.value').textContent.slice(0, 4),
    votes: document.querySelector('.vote').textContent,
  };

  if (!localStorage.getItem('Queue')) {
    localStorage.setItem('Queue', JSON.stringify([filmObj]));
    return;
  }

  const filmsLocalStorageStr = localStorage.getItem('Queue');
  let films = JSON.parse(filmsLocalStorageStr);

  if (films.find(film => film.title === filmObj.title)) {
    checkClickBtn();
    // alert(`Error: Movie ${filmObj.title} is already added.`);
    // localStorage.removeItem('Queue', JSON.stringify(filmObj));
    return;
  }

  else {
    films.push(filmObj);
    localStorage.setItem('Queue', JSON.stringify(films));
    // checkClickBtn();
  }
}

const checkClickBtn = () => {
  const btnQueue = document.querySelector(".button-queue");

  if (btnQueue.textContent === "add to queue") {
    btnQueue.textContent = "delete from queue";
  } else if (btnQueue.textContent === "delete from queue") {
    btnQueue.textContent = "add to queue";
  }
  return
}