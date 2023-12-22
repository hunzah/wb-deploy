import {total} from '/src/state/total/total.js'

function toggleContentVisibility2() {
    const accordionButton = document.getElementById('not-available-accordion-arrow-button');
    const cardsContainer = document.getElementById('not-available-prod-cards-list');
    if (accordionButton && cardsContainer) {
        accordionButton.addEventListener('click', function () {
            if (cardsContainer.style.display === 'none') {
                cardsContainer.style.display = 'flex';
                accordionButton.classList.remove('rotate');
            } else {
                cardsContainer.style.display = 'none';
                accordionButton.classList.add('rotate');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {


    toggleContentVisibility2();
});

function toggleContentVisibility() {
    const accordionButton = document.getElementById('accordion-arrow-button');
    const cardsContainer = document.getElementById('cards-list');
    const checkbox = document.querySelector('.pick-all-checkbox-container');


    if (accordionButton && cardsContainer && checkbox) {
        accordionButton.addEventListener('click', function () {
            if (cardsContainer.style.display === 'none') {
                cardsContainer.style.display = 'flex';

                checkbox.innerHTML = '<input checked type="checkbox" class="checkbox" id="choose-all-checkbox">' +
                    '<label for="choose-all-checkbox" class="custom-checkbox-label"></label>' +
                    '<span class="choose-all-checkbox-text">Выбрать все</span>';
                accordionButton.classList.remove('rotate');
            } else {
                cardsContainer.style.display = 'none';
                checkbox.innerHTML = `<span>${total.totalProducts} товара · ${total.totalAmount} ${total.currency}</span>`;
                checkbox.classList.add('out-of-stock-text');
                accordionButton.classList.add('rotate');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    toggleContentVisibility();
});

