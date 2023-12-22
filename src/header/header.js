import {headerTemplate} from "./template/headerTemplate.js";



document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.header-basket-icon-container');
    container.innerHTML = headerTemplate()
});
