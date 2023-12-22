import {payMethod} from "../../state/pay-method/payMethod.js";

export function payMethodTemplate() {
    return `
    <div class="payment-method-container">
        <div class="payment-method-main">
            <div class="payment-method-main-content">
                <div class="payment-method-main-image-container">
                    <img class="payment-method-main-image" alt="bank-card" src="${payMethod.selectedCard.img}"/>
                </div>
                <div class="payment-method-main-text-container">
                    <span class="payment-method-main-text">${payMethod.selectedCard.number}</span>
                    <span class="payment-method-main-text">${payMethod.selectedCard.date}</span>
                </div>
            </div>
        </div>
    </div>

    `
}

