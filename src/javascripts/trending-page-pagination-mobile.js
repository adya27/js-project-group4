import { makesTrendingMkp } from './addTrendsMkp';
import refs from './pagination-btns-refs';

let page = 1;

refs.previousBtnM.addEventListener('click', onClickpreviousBtnM);
refs.nextBtnM.addEventListener('click', onClicknextBtnM);
refs.firstBtnM.addEventListener('click', onClickfirstBtnM);
refs.secondBtnM.addEventListener('click', onClicksecondBtnM);
refs.thirdBtnM.addEventListener('click', onClickthirdBtnM);
refs.fourthBtnM.addEventListener('click', onClickfourthBtnM);
refs.fifthBtnM.addEventListener('click', onClickfifthBtnM);

function scrollMovies() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function renderPagination(e, btnRef) {
  if (e !== undefined) {
    e.preventDefault();
  }

  refs.previousActiveBtn.classList.remove('current-page');
  refs.fifthBtnM.classList.remove('current-page');
  page = btnRef.textContent;
  makesTrendingMkp(page);

  if (refs.secondBtnM.textContent !== '...') {
    btnRef.classList.add('current-page');
    refs.previousActiveBtn = btnRef;
  } else {
    refs.fifthBtnM.textContent = btnRef.textContent;
    refs.fourthBtnM.textContent = Number(refs.fifthBtnM.textContent) - 1;
    refs.thirdBtnM.textContent = Number(refs.fifthBtnM.textContent) - 2;
    refs.sixthBtn.textContent = Number(refs.fifthBtnM.textContent) + 1;
    refs.seventhBtn.textContent = Number(refs.fifthBtnM.textContent) + 2;

    refs.fifthBtnM.classList.add('current-page');
    refs.previousActiveBtn = btnRef;
  }
  if (refs.thirdBtnM.textContent == 3) {
    refs.secondBtnM.textContent = 2;
  }
}

function onClicknextBtnM(e) {
  e.preventDefault();
  console.log(page);

  refs.previousActiveBtn.classList.remove('current-page');

  switch (refs.previousActiveBtn) {
    case refs.firstBtnM:
      onClicksecondBtnM();
      break;

    case refs.secondBtnM:
      onClickthirdBtnM();
      break;

    case refs.thirdBtnM:
      onClickfourthBtnM();
      break;

    case refs.fourthBtnM:
      onClickfifthBtnM();
      break;

    case refs.fifthBtnM:
      onClickSixthBtn();
      break;

    case refs.sixthBtn:
      onClickSeventhBtn();
      break;

    case refs.seventhBtn:
      onClickEighthBtn();
      break;

    case refs.eighthBtn:
      onClickLastBtn();
      break;
  }
  scrollMovies();
}

function onClickLastBtn(e) {
  e.preventDefault();
  if (refs.previousActiveBtn !== '') {
    refs.previousActiveBtn.classList.remove('current-page');
  }
  page = refs.lastBtn.textContent;
  makesTrendingMkp(page);
  refs.lastBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.lastBtn;
  refs.eighthBtn.textContent = page - 1;
  refs.seventhBtn.textContent = page - 2;
  refs.sixthBtn.textContent = page - 3;
  refs.fifthBtnM.textContent = page - 4;
  refs.fourthBtnM.textContent = page - 5;
  refs.thirdBtnM.textContent = page - 6;
  refs.secondBtnM.textContent = '...';
  scrollMovies();
}

function onClickpreviousBtnM(e) {
  e.preventDefault();
  if (page > 1) {
    page = Number(page) - 1;
  }
  console.log(page);

  refs.previousActiveBtn.classList.remove('current-page');

  switch (refs.previousActiveBtn) {
    case refs.firstBtnM:
      break;

    case refs.secondBtnM:
      onClickfirstBtnM();

      break;

    case refs.thirdBtnM:
      onClicksecondBtnM();
      break;

    case refs.fourthBtnM:
      onClickthirdBtnM();
      break;

    case refs.fifthBtnM:
      onClickfourthBtnM();
      break;

    case refs.sixthBtn:
      onClickfifthBtnM();
      break;

    case refs.seventhBtn:
      onClickSixthBtn();
      break;

    case refs.eighthBtn:
      onClickSeventhBtn();
      break;
  }
  scrollMovies();
}

export function onClickfirstBtnM(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  if (refs.previousActiveBtn !== '') {
    refs.previousActiveBtn.classList.remove('current-page');
  }

  page = 1;

  makesTrendingMkp(page);
  refs.firstBtnM.classList.add('current-page');
  refs.previousActiveBtn = refs.firstBtnM;
  refs.secondBtnM.textContent = page + 1;
  refs.thirdBtnM.textContent = page + 2;
  refs.fourthBtnM.textContent = page + 3;
  refs.fifthBtnM.textContent = page + 4;
  refs.sixthBtn.textContent = page + 5;
  refs.seventhBtn.textContent = page + 6;
  refs.eighthBtn.textContent = '...';

  scrollMovies();
}

export function onClicksecondBtnM(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  if (refs.secondBtnM.textContent !== '...') {
    refs.previousActiveBtn.classList.remove('current-page');

    page = refs.secondBtnM.textContent;
    makesTrendingMkp(page);
    refs.secondBtnM.classList.add('current-page');
    refs.previousActiveBtn = refs.secondBtnM;
  }

  scrollMovies();
}

export function onClickthirdBtnM(e) {
  renderPagination(e, refs.thirdBtnM);
  scrollMovies();
}

export function onClickfourthBtnM(e) {
  renderPagination(e, refs.fourthBtnM);
  scrollMovies();
}

export function onClickfifthBtnM(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  refs.previousActiveBtn.classList.remove('current-page');

  page = refs.fifthBtnM.textContent;
  makesTrendingMkp(page);
  refs.fifthBtnM.classList.add('current-page');
  refs.previousActiveBtn = refs.fifthBtnM;

  scrollMovies();
}

export function onClickSixthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  refs.previousActiveBtn.classList.remove('current-page');
  refs.fifthBtnM.textContent = Number(refs.sixthBtn.textContent);
  refs.fourthBtnM.textContent = Number(refs.fifthBtnM.textContent) - 1;
  refs.thirdBtnM.textContent = Number(refs.fourthBtnM.textContent) - 1;
  refs.sixthBtn.textContent = Number(refs.fifthBtnM.textContent) + 1;
  refs.seventhBtn.textContent = Number(refs.sixthBtn.textContent) + 1;
  refs.secondBtnM.textContent = '...';
  page = refs.fifthBtnM.textContent;
  makesTrendingMkp(page);
  refs.fifthBtnM.classList.add('current-page');
  refs.previousActiveBtn = refs.fifthBtnM;

  scrollMovies();
}

export function onClickSeventhBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  if (refs.eighthBtn.textContent === '...') {
    refs.previousActiveBtn.classList.remove('current-page');
    refs.fifthBtnM.textContent = Number(refs.seventhBtn.textContent);
    refs.fourthBtnM.textContent = Number(refs.fifthBtnM.textContent) - 1;
    refs.thirdBtnM.textContent = Number(refs.fourthBtnM.textContent) - 1;
    refs.sixthBtn.textContent = Number(refs.fifthBtnM.textContent) + 1;
    refs.seventhBtn.textContent = Number(refs.sixthBtn.textContent) + 1;
    refs.secondBtnM.textContent = '...';
    page = refs.fifthBtnM.textContent;
    makesTrendingMkp(page);
    refs.fifthBtnM.classList.add('current-page');
    refs.previousActiveBtn = refs.fifthBtnM;
  }

  scrollMovies();
}

export function onClickEighthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  if (refs.eighthBtn.textContent !== '...') {
    refs.previousActiveBtn.classList.remove('current-page');

    page = refs.eighthBtn.textContent;
    makesTrendingMkp(page);
    refs.eighthBtn.classList.add('current-page');
    refs.previousActiveBtn = refs.eighthBtn;
  }

  scrollMovies();
}
