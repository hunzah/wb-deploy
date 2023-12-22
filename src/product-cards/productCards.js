import {cards} from '../state/cards/cards.js'
import {total} from '../state/total/total.js'
import {calculatePrice, removeProduct, selectAll, updateSelectAllCheckboxState} from "./logic/productCardLogic.js";
import {productCardTemplate} from "./templates/prodCardsTemplate.js";
import {cardInfoTooltip} from "../tooltips/cardInfoTooltip.js";
import {discountInfoTooltip} from "../tooltips/discountInfoTooltip.js";
import {updateButtonText} from "../total/total.js";



document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('cards-list');
    const header = document.querySelector('.accordion-header');
    const selectAllCheckbox = document.getElementById('choose-all-checkbox')


    // to update the values in total
    const checkboxTotal = document.getElementById('total-checkbox');
    const orderButton = document.getElementById('order-submit-button');
    const immediatelyPaymentContainer = document.querySelector('.total-pay-card-immediately-payment-container');


    if (productList) {
        cards.products.forEach(product => {

            const listItem = document.createElement('li');
            listItem.classList.add('card');

            listItem.innerHTML = productCardTemplate(product);

            productList.appendChild(listItem);
            const checkbox = document.getElementById(`card-checkbox-${product.id}`);
            //choose product logic
            checkbox.addEventListener('change', function () {
                calculatePrice(product, this.checked, total);
                updateSelectAllCheckboxState()
                updateButtonText(checkboxTotal, orderButton, immediatelyPaymentContainer)
            })
            //delete cards logic
            const trashButton = document.getElementById(`${product.id}-count-button`);
            trashButton.addEventListener('click', () => {
                removeProduct(product, listItem, header, total, checkbox.checked);
                updateButtonText(checkboxTotal, orderButton, immediatelyPaymentContainer)

            });

            // main checkbox
            selectAllCheckbox.addEventListener('change', function () {
                const checkboxes = document.querySelectorAll('.cardCheckbox');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = selectAllCheckbox.checked;
                    selectAll(checkbox.checked, total);
                    updateButtonText(checkboxTotal, orderButton, immediatelyPaymentContainer)
                });
            });
            //tooltip
            cardInfoTooltip(product)
            discountInfoTooltip(product)
        });
    }
});


