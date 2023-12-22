import {totalTemplate} from "./template/totalTemplate.js";
import {returnDeliveryTooltip} from "../tooltips/returnDeliveryTooltip.js";
import {total} from "../state/total/total.js";


document.addEventListener('DOMContentLoaded', function () {
    const totalContainer = document.querySelector('.total-container');
    totalContainer.innerHTML = totalTemplate();

    // Tooltip
    returnDeliveryTooltip();

    // Checkbox logic
    const checkbox = document.getElementById('total-checkbox');
    const orderButton = document.getElementById('order-submit-button');
    const immediatelyPaymentContainer = document.querySelector('.total-pay-card-immediately-payment-container');



    checkbox.addEventListener('change', ()=>updateButtonText(checkbox, orderButton, immediatelyPaymentContainer));
});
export function updateButtonText(checkbox, orderButton, immediatelyPaymentContainer) {
    const immediatelyPaymentText = document.querySelector('.immediately-payment-text');

    if (checkbox.checked) {
        orderButton.textContent = `Оплатить ${total.totalAmount} ${total.currency}`;
        if (immediatelyPaymentText) {
            immediatelyPaymentText.remove();
        }
    } else {
        if (!immediatelyPaymentText) {
            const span = document.createElement('span');
            orderButton.textContent = `Заказать`;
            span.className = 'immediately-payment-text';
            span.textContent = 'Спишем оплату с карты при получении';
            immediatelyPaymentContainer.appendChild(span);
        }
    }
}