// card-info-tooltip
export function cardInfoTooltip(product) {
    const infoIcon = document.getElementById(`info-${product.id}`);

    const tooltip = document.createElement('div');
    tooltip.classList.add('card-info-tooltip');
    tooltip.classList.add('tooltip');

    const title = document.createElement('span');
    const regNumber = document.createElement('span');
    const secondaryText = document.createElement('span');

    title.classList.add('tooltip-title');
    regNumber.classList.add('tooltip-text');
    secondaryText.classList.add('tooltip-text');

    title.textContent = `${product.companyInfo.title}`;
    regNumber.textContent = `${product.companyInfo.regNumber}`;
    secondaryText.textContent = `${product.companyInfo.address}`;

    tooltip.appendChild(title);
    tooltip.appendChild(regNumber);
    tooltip.appendChild(secondaryText);

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
