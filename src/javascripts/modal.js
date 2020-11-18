import { fetchIt, apiKey, makesModalMkp } from './fetch';

const refs = {
    modal: document.querySelector('.modal-conteiner'),
}
function onClickOpenModal(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    // window.addEventListener('keydown', onKeydownCloseModal);
    makesModalMkp(12)
    // window.addEventListener('keydown', onKeydowmSibling);
}

export { onClickOpenModal };