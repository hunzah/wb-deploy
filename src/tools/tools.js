export const stringToNumber = (value) => parseInt(value.replace(/\s/g, ''), 10);
export const formatNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
export const parseAndSum = (value, addition) => (parseInt(value.replace(/\s/g, ''), 10) + addition).toLocaleString();

//modals

export const openModal = (overlay, modalContainer) => {
    overlay.style.display = 'block';
    modalContainer.style.display = 'block';
    document.body.classList.add('overlay-open');
}

export const  closeModal = (overlay, modalContainer) => {
    overlay.style.display = 'none';
    modalContainer.style.display = 'none';
    document.body.classList.remove('overlay-open');
}