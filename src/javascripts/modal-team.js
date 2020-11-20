const refs = {
    openModel: document.querySelector('.open-modal-team'),
    showModel: document.querySelector('.js-backdrop'),
    closeModelBtn: document.querySelector('.close-modal-btn')
}

// Открытие модального окна
refs.openModel.addEventListener('click', onOpenModal);

function onOpenModal(e) {
    e.preventDefault();
    refs.showModel.classList.add('is-open');
    window.addEventListener('keydown', onCloseModalByEscape);
}

// Закрытие модального окна
refs.closeModelBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
  refs.showModel.classList.remove('is-open'); 
  window.removeEventListener('keydown', onCloseModalByEscape);
}

// Закрытие модального окна по клику на Backdrop.
refs.showModel.addEventListener('click', onCloseModalByClickBackdrop);

function onCloseModalByClickBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

// Закрытие модального окна по нажатию клавиши ESC.
function onCloseModalByEscape(evt) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}