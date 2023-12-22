import {cards} from "../../state/cards/cards.js";

export function headerTemplate() {
    const cardsValue = cards.products.length
    return `
<span class="header-basket-goods-count-text">${cardsValue}</span>
<img src="assets/icons/mobile/basket-icon.svg" alt="profile-icon"/>
<span class="header-basket-text">Корзина</span>

   `
}

