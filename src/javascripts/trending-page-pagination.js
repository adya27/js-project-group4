import { makesTrendingMkp } from './addTrendsMkp';
// console.log(makesTrendingMkp);
let page = 1;
import refs from './pagination-btns-refs';

refs.previousBtn.addEventListener('click', onClickPreviousBtn);
refs.nextBtn.addEventListener('click', onClickNextBtn);
refs.firstBtn.addEventListener('click', onClickFirstBtn);
refs.secondBtn.addEventListener('click', onClickSecondBtn);
refs.thirdBtn.addEventListener('click', onClickThirdBtn);
refs.fourthBtn.addEventListener('click', onClickFourthBtn);
refs.fifthBtn.addEventListener('click', onClickFifthBtn);
refs.sixthBtn.addEventListener('click', onClickSixthBtn);
refs.seventhBtn.addEventListener('click', onClickSeventhBtn);
refs.eighthBtn.addEventListener('click', onClickEighthBtn);

function scrollMovies() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function onClickNextBtn(e) {
  e.preventDefault();
  page = Number(page) + 1;
  console.log(page);
  makesTrendingMkp(page);
  //   scrollMovies();
}

refs.lastBtn.addEventListener('click', onClickLastBtn);
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
  refs.fifthBtn.textContent = page - 4;
  refs.fourthBtn.textContent = page - 5;
  refs.thirdBtn.textContent = page - 6;
  refs.secondBtn.textContent = '...';
}

function onClickPreviousBtn(e) {
  e.preventDefault();
  if (page > 1) {
    page = Number(page) - 1;
  }
  console.log(page);
  makesTrendingMkp(page);
  //   scrollMovies();
}

export function onClickFirstBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  if (refs.previousActiveBtn !== '') {
    refs.previousActiveBtn.classList.remove('current-page');
  }

  page = 1;

  makesTrendingMkp(page);
  refs.firstBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.firstBtn;
  refs.secondBtn.textContent = page + 1;
  refs.thirdBtn.textContent = page + 2;
  refs.fourthBtn.textContent = page + 3;
  refs.fifthBtn.textContent = page + 4;
  refs.sixthBtn.textContent = page + 5;
  refs.seventhBtn.textContent = page + 6;
  refs.eighthBtn.textContent = '...';
}

export function onClickSecondBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  refs.previousActiveBtn.classList.remove('current-page');

  page = refs.secondBtn.textContent;
  makesTrendingMkp(page);
  refs.secondBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.secondBtn;
}

export function onClickThirdBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  refs.previousActiveBtn.classList.remove('current-page');

  page = refs.thirdBtn.textContent;
  makesTrendingMkp(page);
  refs.thirdBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.thirdBtn;
}

export function onClickFourthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  refs.previousActiveBtn.classList.remove('current-page');

  page = refs.fourthBtn.textContent;
  makesTrendingMkp(page);
  refs.fourthBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.fourthBtn;
}

export function onClickFifthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  refs.previousActiveBtn.classList.remove('current-page');

  page = refs.fifthBtn.textContent;
  makesTrendingMkp(page);
  refs.fifthBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.fifthBtn;
}

export function onClickSixthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  refs.previousActiveBtn.classList.remove('current-page');
  refs.fifthBtn.textContent = Number(refs.sixthBtn.textContent);
  refs.fourthBtn.textContent = Number(refs.fifthBtn.textContent) - 1;
  refs.thirdBtn.textContent = Number(refs.fourthBtn.textContent) - 1;
  refs.sixthBtn.textContent = Number(refs.fifthBtn.textContent) + 1;
  refs.seventhBtn.textContent = Number(refs.sixthBtn.textContent) + 1;
  refs.secondBtn.textContent = '...';
  page = refs.fifthBtn.textContent;
  makesTrendingMkp(page);
  refs.fifthBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.fifthBtn;
}

export function onClickSeventhBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  refs.previousActiveBtn.classList.remove('current-page');
  refs.fifthBtn.textContent = Number(refs.seventhBtn.textContent);
  refs.fourthBtn.textContent = Number(refs.fifthBtn.textContent) - 1;
  refs.thirdBtn.textContent = Number(refs.fourthBtn.textContent) - 1;
  refs.sixthBtn.textContent = Number(refs.fifthBtn.textContent) + 1;
  refs.seventhBtn.textContent = Number(refs.sixthBtn.textContent) + 1;
  refs.secondBtn.textContent = '...';
  page = refs.fifthBtn.textContent;
  makesTrendingMkp(page);
  refs.fifthBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.fifthBtn;
}

export function onClickEighthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  if (refs.eighthBtn.textContent !== '...') {
    refs.previousActiveBtn.classList.remove('current-page');
    refs.fifthBtn.textContent = Number(refs.eighthBtn.textContent);
    refs.fourthBtn.textContent = Number(refs.fifthBtn.textContent) - 1;
    refs.thirdBtn.textContent = Number(refs.fourthBtn.textContent) - 1;
    refs.sixthBtn.textContent = Number(refs.fifthBtn.textContent) + 1;
    refs.seventhBtn.textContent = Number(refs.sixthBtn.textContent) + 1;
    refs.secondBtn.textContent = '...';
    page = refs.fifthBtn.textContent;
    makesTrendingMkp(page);
    refs.fifthBtn.classList.add('current-page');
    refs.previousActiveBtn = refs.fifthBtn;
  }
}
