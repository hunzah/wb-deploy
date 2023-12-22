export function discountInfoTooltip(product) {
    const discountInfoText = document.getElementById(`discount-text-${product.id}`);
    const tooltipDiscountContainer = document.createElement('div');
    tooltipDiscountContainer.classList.add('tooltip-discount-container');

    const firstInfoContainer = document.createElement('div');

    firstInfoContainer.classList.add('tooltip-discount-info-container');

    firstInfoContainer.innerHTML = `
    <span class="tooltip-discount-text">Скидка ${product.discount}</span>
    <span class="tooltip-discount-text">Скидка покупателя ${product.buyerDiscount}</span>
`;
    const secondInfoContainer = document.createElement('div');
    secondInfoContainer.classList.add('tooltip-discount-info-container');
    secondInfoContainer.innerHTML = `
    <span class="tooltip-discount-sec-text">−${product.discountValue} ${product.currency}</span>
    <span class="tooltip-discount-sec-text">−${product.buyerDiscountValue} ${product.currency}</span>
`;

    tooltipDiscountContainer.appendChild(firstInfoContainer);
    tooltipDiscountContainer.appendChild(secondInfoContainer);

    discountInfoText.addEventListener('mouseenter', () => {
        discountInfoText.appendChild(tooltipDiscountContainer);
    });

    discountInfoText.addEventListener('mouseleave', () => {
        tooltipDiscountContainer.remove();
    });

}

