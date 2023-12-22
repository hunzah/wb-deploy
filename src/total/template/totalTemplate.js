import {payMethod} from "../../state/pay-method/payMethod.js";
import {total} from "../../state/total/total.js";
import {deliveryMethod} from "../../state/delivery-method/deliveryMethod.js";

export function totalTemplate() {
    return `
        <div class="total-content">
            <div class="total-info-container">
                    <div class="total-info-price-container">
                        <div class="total-info-price-header">
                            <span class="total-info-title-text">Итого</span>
                            <span class="total-info-price-text">${total.totalAmount} ${total.currency}</span>
                        </div>

                        <div class="total-price-with-delivery-info-container">
                            <div class="total-goods-quantity-text-container">
                                <span class="total-info-text" id="prod-amount">${total.totalProducts} товара</span>
                                <span class="total-info-text" id="prod-price-amount">${total.priceWithoutDiscount} ${total.currency}</span>
                            </div>
                            <div class="total-discount-text-container">
                                <span class="total-info-text">Скидка</span>
                                <span class="total-info-text" id="prod-discount-amount">-${total.discount} ${total.currency}</span>
                            </div>
                            <div class="total-delivery-text-container">
                                <span class="total-info-text">Доставка</span>
                                <span class="total-info-text">Бесплатно</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="total-delivery-content">
                    <div class="total-delivery-point-container">
                        <div class="total-delivery-point-receiver-container">
                            <span class="total-delivery-point-title-text">Доставка в пункт выдачи</span>
                            <button id="total-change-pick-up-point-button">
                                <img src="assets/icons/change-icon.svg" alt="edit-icon">
                            </button>
                        </div>
                        <div class="total-delivery-point-address-text-container">
                       ${renderPickUpPointInfo()}
                        </div>
                        <div class="total-delivery-date-text-container">
                            <span class="total-delivery-date-text">5–8 фев</span>
                        </div>
                    </div>
                    <div class="total-return-delivery-container">
                        <img src="assets/icons/price-shipping-green.svg" alt="price-shipping-icon">
                        <span class="return-delivery-text">Обратная доставка товаров на склад при отказе —
                            <span id="return-delivery-price-info-total" class="return-delivery-text-green">бесплатно</span>
                        </span>
                    </div>
                </div>
                <div class="total-pay-card-content">
                    <div class="total-pay-card-header">
                        <div class="total-pay-card-header-container">
                            <span class="total-pay-title-text">Оплата картой</span>
                            <button class="delivery-method-header-button" id="total-change-pay-method-modal">
                                <img src="assets/icons/change-icon.svg" alt="change-icon">
                            </button>
                        </div>
                        <div class="total-pay-card-info-container">
                            ${renderPaymentCardInfo()}
                            </div>
                    </div>
                    <div class="total-pay-card-immediately-payment-container">
                        <div class="pick-all-checkbox-container">
                            <input type="checkbox" class="checkbox" id="total-checkbox">
                            <label for="total-checkbox" class="custom-checkbox-label"></label>
                            <span>Списать оплату сразу</span>
                        </div>
                        <span class="immediately-payment-text ">Спишем оплату с карты при получении</span>
                    </div>
                </div>
                <div class="total-order-button-container">
                    <button class="order-submit-button" id="order-submit-button">Заказать</button>
                    <div class="total-order-checkbox-container">
                        <img src="assets/icons/terms-checked.svg" alt="checked-icon"/>
                        <span class="terms-text">Соглашаюсь с правилами пользования торговой площадкой и возврата</span>
                    </div>
                </div>
            </div>
        </div>
    `
}

export function renderPaymentCardInfo() {
    return `
            <img src="${payMethod.selectedCard.img}" alt="bank-card">
            <span class="total-pay-card-numbers">${payMethod.selectedCard.number}</span>
    `;
}
export function renderPickUpPointInfo() {
    return `
        <span class="total-delivery-point-address-text">${deliveryMethod.selectedPickUpPoint.address}</span>
    `;
}
