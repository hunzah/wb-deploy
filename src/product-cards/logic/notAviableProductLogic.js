export function removeNotAvailableProduct(product, listItem, header, cards) {
    if (cards.notAvailableProducts.length === 1 && header) {
        header.remove();
    }

    const indexToRemove = cards.notAvailableProducts.findIndex(p => p.id === product.id);
    if (indexToRemove !== -1) {
        cards.notAvailableProducts.splice(indexToRemove, 1);
    }

    listItem.remove();
}