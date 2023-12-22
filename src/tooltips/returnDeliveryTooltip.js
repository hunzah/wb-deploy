// card-info-tooltip
export function returnDeliveryTooltip() {
    const deliveryInfoIcon = document.getElementById('return-delivery-price-info');
    const deliveryTooltip = createReturnDeliveryTooltip(deliveryInfoIcon, 'return-delivery-tooltip');

    const totalInfoIcon = document.getElementById('return-delivery-price-info-total');
    const totalTooltip = createReturnDeliveryTooltip(totalInfoIcon,'return-delivery-tooltip-total');

    return [deliveryTooltip, totalTooltip];
}

const createReturnDeliveryTooltip = (infoIcon, className) =>{
    const tooltip = document.createElement('div');
    tooltip.classList.add(className);
    tooltip.classList.add('tooltip');

    const text = document.createElement('span');
    text.classList.add('tooltip-text');
    text.textContent = 'Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно';

    tooltip.appendChild(text);

    infoIcon.insertAdjacentElement('afterend', tooltip);

    tooltip.style.display = 'none';

    infoIcon.addEventListener('mouseenter', () => {
        tooltip.style.display = 'flex';
    });

    infoIcon.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    return tooltip;
}
