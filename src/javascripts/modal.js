import { fetchIt, apiKey, makesModalMkp } from './fetch';

const refs = {
    modal: document.querySelector('div.lightbox'),
}
function onClickOpenModal(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    // window.addEventListener('keydown', onKeydownCloseModal);
    makesModalMkp(evt.target.dataset.image)
    refs.modal.classList.add('is-open');
    // window.addEventListener('keydown', onKeydowmSibling);
}

export { onClickOpenModal };