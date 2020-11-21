import { makesModalMkp } from './fetch';
import onButtonWatchedClick from './watched-library'
import onButtonQueueClick from './queue-library'

const refs = {
    modal: document.querySelector('div.lightbox'),
    overley: document.querySelector('div.lightbox__overlay'),
    closeModal: document.querySelector('.lightbox__button'),
    body: document.querySelector('body'),
    goTopBtn: document.querySelector(".scrollToTop"),
}

refs.overley.addEventListener('click', onClickOverlayCloseModal);
refs.closeModal.addEventListener('click', onClickCloseModal);

function onClickOpenModal(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
  makesModalMkp(evt.target.dataset.id).then(onModalMarkupLoaded);
    window.addEventListener('keydown', onKeydownCloseModal);
    refs.modal.classList.add('is-open');
    refs.body.classList.add('modal-open');
    refs.goTopBtn.classList.remove('back_to_top-show');
}
function onModalMarkupLoaded() { 
    document.querySelector('.button-watcyed').addEventListener('click', onButtonWatchedClick);
    document.querySelector('.button-queue').addEventListener('click', onButtonQueueClick);
}


function onClickCloseModal() {
    window.removeEventListener("keydown", onKeydownCloseModal);
    refs.modal.classList.remove('is-open');
    refs.body.classList.remove('modal-open');
    document.querySelector('.button-watcyed').removeEventListener('click', onButtonWatchedClick);
    document.querySelector('.button-queue').removeEventListener('click', onButtonQueueClick);
    refs.overley.innerHTML = ' ';
    refs.goTopBtn.classList.add('back_to_top-show');
};

function onClickOverlayCloseModal(evt) {
    if (evt.currentTarget !== evt.target) {
        return;
    };
    onClickCloseModal();
};

function onKeydownCloseModal(evt) {
    if (evt.code !== 'Escape') {
        return
    };
    onClickCloseModal();
};

export { onClickOpenModal };
