import {payMethodTemplate} from "./template/payMethodTemplate.js";



document.addEventListener('DOMContentLoaded', function () {
    const paymentContainer = document.getElementById('payment-method-main');
    paymentContainer.innerHTML = payMethodTemplate()
});
