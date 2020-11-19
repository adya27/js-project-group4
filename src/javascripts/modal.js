import { makesModalMkp } from './fetch';

const refs = {
    modal: document.querySelector('div.lightbox'),
    overley: document.querySelector('div.lightbox__overlay'),
    closeModal: document.querySelector('.lightbox__button'),
}

refs.overley.addEventListener('click', onClickOverlayCloseModal);
refs.closeModal.addEventListener('click', onClickCloseModal);

function onClickOpenModal(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    makesModalMkp(evt.target.dataset.id)
    window.addEventListener('keydown', onKeydownCloseModal);
    refs.modal.classList.add('is-open');
}

function onClickCloseModal() {
    window.removeEventListener("keydown", onKeydownCloseModal);
    refs.modal.classList.remove('is-open');
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
