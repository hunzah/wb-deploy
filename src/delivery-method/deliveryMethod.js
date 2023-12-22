import {deliveryMethodTemplate} from "./template/deliveryMethodTemplate.js";



document.addEventListener('DOMContentLoaded', function () {
    const deliveryInfoContainer = document.getElementById('delivery-method');
    deliveryInfoContainer.innerHTML = deliveryMethodTemplate()
});
