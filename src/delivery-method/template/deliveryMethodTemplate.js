import {deliveryMethod} from "../../state/delivery-method/deliveryMethod.js";

export function deliveryMethodTemplate() {
    return `
        <div class="delivery-method-info">
            <div class="delivery-pick-up-point">
                <span class="delivery-pick-up-date-point-text">Пункт выдачи</span>
                <div class="delivery-pick-up-point-expanded-mobile">
                    ${renderMobilePickUpPoint()}
                </div>
            </div>
            <div class="delivery-cost">
                <span class="delivery-pick-up-date-point-text">Стоимость доставки</span>
                <span class="delivery-cost-expanded-text-mobile">Бесплатно</span>
            </div>
            <div class="delivery-date">
                <span class="delivery-pick-up-date-point-text">5—6 февраля</span>
                <div class="delivery-goods-images-container-mobile">
                    <img class="goods-image" src="assets/images/card-photo-2.png"
                         alt="goods-image"/>
                    <div class="delivery-goods-image-container">
                        <div class="delivery-goods-image-container">
                            <span class="product-count-on-image-text">184</span>
                            <img class="goods-image" src="assets/images/card-photo-1.png"
                                 alt="goods-image"/>
                        </div>
                    </div>
                    <div class="delivery-goods-image-container">
                        <div class="delivery-goods-image-container">
                            <span class="product-count-on-image-text">2</span>
                            <img class="goods-image" src="assets/images/card-photo-3.png"
                                 alt="goods-image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery-date">
                <span class="delivery-pick-up-date-point-text">7—8 февраля</span>
                <div class="delivery-date-expanded">
                    <div class="delivery-goods-images-container-mobile">
                        <div class="delivery-goods-image-container">
                            <span class="product-count-on-image-text">16</span>
                            <img class="goods-image" src="assets/images/card-photo-1.png"
                                 alt="goods-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="delivery-method-info-expanded">
            <div class="delivery-pick-up-point-expanded">
                    ${renderExpandedPickUpPoint()}
            </div>
            <div class="delivery-cost-expanded">
                <span class="delivery-cost-expanded-text">Бесплатно</span>
            </div>
            <div class="delivery-date-expanded">
                <div class="delivery-goods-images-container">
                    <div class="delivery-goods-image-container">
                        <img class="goods-image" src="assets/images/card-photo-2.png"
                             alt="goods-image"/>
                    </div>
                    <div class="delivery-goods-image-container">
                        <span class="product-count-on-image-text">184</span>
                        <img class="goods-image" src="assets/images/card-photo-1.png"
                             alt="goods-image"/>
                    </div>
                    <div class="delivery-goods-image-container">
                        <span class="product-count-on-image-text">2</span>
                        <img class="goods-image" src="assets/images/card-photo-3.png"
                             alt="goods-image"/>
                    </div>
                </div>
            </div>
            <div class="delivery-date-expanded">
                <div class="delivery-goods-images-container">
                    <div class="delivery-goods-image-container">
                        <span class="product-count-on-image-text">16</span>
                        <img class="goods-image" src="assets/images/card-photo-1.png"
                             alt="goods-image"/>
                    </div>
                </div>
            </div>
    </div>
    `
}

export function renderMobilePickUpPoint() {
    return `
            <span class="delivery-pick-up-date-point-expanded-text">${deliveryMethod.selectedPickUpPoint.address}</span>
            ${renderPickUpPointRating()}
    `;
}


export function renderExpandedPickUpPoint() {
    return `
        <div class="delivery-pick-up-point-expanded">
            <span class="delivery-pick-up-date-point-expanded-text">${deliveryMethod.selectedPickUpPoint.address}</span>
            ${renderPickUpPointRating()}
        </div>
    `;
}

function renderPickUpPointRating() {
    return `
        <div class="delivery-pick-up-point-rating-container">            
            <div class="delivery-pick-up-point-rating-stars">
                <img src="assets/icons/rating-star.svg" alt="rating-star"/>
                <span class="delivery-pick-up-point-rating-text">${deliveryMethod.selectedPickUpPoint.stars}</span>
            </div>
            <span class="delivery-pick-up-point-rating-text">Ежедневно с 10 до 21</span>
        </div>
    `;
}