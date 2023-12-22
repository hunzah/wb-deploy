import {payMethod} from "../../state/pay-method/payMethod.js";

export function changePayMethodModalTemplate() {
    return `
        <div class="change-pay-method-container">
            <div class="pay-method-modal-title-container">
                <span class="pay-method-modal-title">Способ оплаты</span>
                <img id="close-change-pay-method-modal-button" class="close-modal-icon" src="/assets/icons/pay-method/close-icon.svg" alt="close-icon"/>
            </div>
            <div class="modal-pay-cards-container">
                ${cardInfo()}
            </div>
            <div class="change-pay-method-set-button-wrap">
                <button id="set-pay-card-button" class="change-pay-method-set-button">Выбрать</button>
            </div>
        </div>
    `;
}

function cardInfo() {
    const selectedCardIndex = payMethod.cards.findIndex(card => card.number === payMethod.selectedCard.number);
    console.log(selectedCardIndex)
    return payMethod.cards.map((card, index) => `
        <div class="modal-pay-card">
            <label class="select-radio select-card-radio">
                <input type="radio" name="paymentCard" value="${index}" ${0 === index ? 'checked' : ''} />
            </label>
            <div>
                <img src="${card.img}" alt="close-icon"/>
                <span>${card.number}</span>
            </div>
        </div>
    `).join('');
}



