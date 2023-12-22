import {changePayMethodModalTemplate} from "./changePayMethodTemplate.js";
import {payMethod} from "../../state/pay-method/payMethod.js";
import {payMethodTemplate} from "../../pay-method/template/payMethodTemplate.js";
import {renderPaymentCardInfo} from "../../total/template/totalTemplate.js";
import {closeModal, openModal} from "../../tools/tools.js";

document.addEventListener('DOMContentLoaded', function () {
    const paymentContainer = document.getElementById('payment-method-main');
    const totalContainer = document.querySelector('.total-pay-card-info-container');
    const modalTemplate = changePayMethodModalTemplate();

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalTemplate;
    modalContainer.style.display = 'none';

    document.body.appendChild(overlay);
    document.body.appendChild(modalContainer);

    const openModalButtonPayment = document.getElementById('change-payment-method-button');
    const openModalButtonTotal = document.getElementById('total-change-pay-method-modal');
    const closeModalButton = document.getElementById('close-change-pay-method-modal-button');
    const chooseButton = document.getElementById('set-pay-card-button');
    const radioButtons = modalContainer.querySelectorAll('input[name="paymentCard"]');

    let selectedCardIndex = null;

    openModalButtonPayment.addEventListener('click', () => openModal(overlay, modalContainer));
    openModalButtonTotal.addEventListener('click', () => openModal(overlay, modalContainer));
    closeModalButton.addEventListener('click', () => closeModal(overlay, modalContainer));

    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener('change', function () {
            selectedCardIndex = index;
        });
    });

    chooseButton.addEventListener('click', function () {
        if (selectedCardIndex !== null) {
            payMethod.selectedCard = { ...payMethod.cards[selectedCardIndex] };
            paymentContainer.innerHTML = payMethodTemplate();
            totalContainer.innerHTML = renderPaymentCardInfo();
        }
        closeModal(overlay, modalContainer)
    });
});


