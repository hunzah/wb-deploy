import {updateTotalState,} from "../../state/total/updateTotal.js";
import {cards, updateCardState} from "../../state/cards/cards.js";
import {formatNumber, parseAndSum, stringToNumber} from "../../tools/tools.js";
import {headerTemplate} from "../../header/template/headerTemplate.js";


export function removeProduct(product, listItem, header, total, isChecked) {
    if (cards.products.length === 1 && header) {
        header.remove();
    }

    const indexToRemove = cards.products.findIndex(p => p.id === product.id);
    if (indexToRemove !== -1) {
        // Используем splice для удаления элемента из массива products
        cards.products.splice(indexToRemove, 1);

        // Вызываем updateState с обновленным стейтом
        updateCardState({
            products: cards.products,
            notAvailableProducts: cards.notAvailableProducts
        });

        if (isChecked) {
            const priceWithDiscount = stringToNumber(product.priceWithDiscount);
            const price = stringToNumber(product.price);
            const productAmount = parseInt(product.count, 10);
            calculateNegativeChanges(total, price, priceWithDiscount, productAmount)
            updateTotalState(total);

        }
    }
    const renderHeader = document.querySelector('.header-basket-icon-container');
    renderHeader.innerHTML = headerTemplate()
    listItem.remove();
    updateSelectAllCheckboxState()
}


function calculatePositiveChanges(total, price, priceWithDiscount, productAmount) {
    total.priceWithoutDiscount = parseAndSum(total.priceWithoutDiscount, price);
    total.discount = parseAndSum(total.discount, price - priceWithDiscount);
    total.totalAmount = parseAndSum(total.totalAmount, priceWithDiscount);
    total.totalProducts = parseAndSum(total.totalProducts, productAmount);
}

function calculateNegativeChanges(total, price, priceWithDiscount, productAmount) {
    total.priceWithoutDiscount = parseAndSum(total.priceWithoutDiscount, -price);
    total.discount = parseAndSum(total.discount, -(price - priceWithDiscount));
    total.totalAmount = parseAndSum(total.totalAmount, -priceWithDiscount);
    total.totalProducts = parseAndSum(total.totalProducts, -productAmount);
}

export function calculatePrice(product, isChecked, total) {
    const priceWithDiscount = stringToNumber(product.priceWithDiscount);
    const price = stringToNumber(product.price);
    const productAmount = parseInt(product.count, 10);

    if (isChecked) {
        calculatePositiveChanges(total, price, priceWithDiscount, productAmount);
    } else {
        calculateNegativeChanges(total, price, priceWithDiscount, productAmount);
    }

    updateTotalState(total);
}

export function selectAll(isChecked, total) {
    let priceWithoutDiscount = cards.products.reduce((acc, prod) => acc += stringToNumber(prod.price), 0)
    let totalAmount = cards.products.reduce((acc, prod) => acc + stringToNumber(prod.priceWithDiscount), 0);
    let totalDiscount = priceWithoutDiscount - totalAmount;
    let totalProducts = cards.products.reduce((acc, prod) => acc += prod.count, 0)

    if (isChecked) {
        total.priceWithoutDiscount = formatNumber(priceWithoutDiscount);
        total.discount = formatNumber(totalDiscount);
        total.totalAmount = formatNumber(totalAmount);
        total.totalProducts = formatNumber(totalProducts);
    } else {
        total.priceWithoutDiscount = '0';
        total.discount = '0';
        total.totalAmount = '0';
        total.totalProducts = '0';
    }
    updateTotalState(total);
}


export function updateSelectAllCheckboxState() {
    const checkboxes = document.querySelectorAll('.cardCheckbox');
    const selectAllCheckbox = document.getElementById('choose-all-checkbox');

    if (checkboxes.length > 0) {
        selectAllCheckbox.checked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    } else {
        selectAllCheckbox.checked = false;
    }
}
