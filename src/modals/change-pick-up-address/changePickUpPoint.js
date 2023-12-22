import {changePickUpPointModalTemplate, pickUpPoints} from "./changePickUpPointTemplate.js";
import {deliveryMethod} from "../../state/delivery-method/deliveryMethod.js";
import {
    renderExpandedPickUpPoint,
    renderMobilePickUpPoint
} from "../../delivery-method/template/deliveryMethodTemplate.js";
import {closeModal, openModal} from "../../tools/tools.js";
import {renderPickUpPointInfo} from "../../total/template/totalTemplate.js";

document.addEventListener('DOMContentLoaded', function () {
    const modalTemplate = changePickUpPointModalTemplate();

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalTemplate;
    modalContainer.style.display = 'none';

    document.body.appendChild(overlay);
    document.body.appendChild(modalContainer);

    const openModalButton = document.getElementById('change-pick-point-method-button');
    const openModalButtonTotal = document.getElementById('total-change-pick-up-point-button');
    const closeModalButton = document.getElementById('close-change-pick-up-point-modal-button');
    const setPickUpPointButton = document.getElementById('set-pick-up-point-button');
    const radioButtons = modalContainer.querySelectorAll('input[name="pick-up-point"]');

    let selectedPoint = null;

    function logSelectedPoint() {
        if (selectedPoint !== null) {
            deliveryMethod.selectedPickUpPoint = selectedPoint;
            const expandedPickUpPointContainer = document.querySelector('.delivery-pick-up-point-expanded');
            const mobilePickUpPointContainer = document.querySelector('.delivery-pick-up-point-expanded-mobile');
            const totalPickUpPointContainer = document.querySelector('.total-delivery-point-address-text-container');
            mobilePickUpPointContainer.innerHTML = renderMobilePickUpPoint();
            expandedPickUpPointContainer.innerHTML = renderExpandedPickUpPoint();
            totalPickUpPointContainer.innerHTML = renderPickUpPointInfo();
            closeModal(overlay, modalContainer);
        }
    }

    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener('change', function () {
            selectedPoint = deliveryMethod.pickUpPoints[index];
            
        });
    });

    openModalButton.addEventListener('click', () => openModal(overlay, modalContainer));
    openModalButtonTotal.addEventListener('click', () => openModal(overlay, modalContainer));
    closeModalButton.addEventListener('click', () => closeModal(overlay, modalContainer));
    setPickUpPointButton.addEventListener('click', logSelectedPoint);
        // логика удаления адрессов из модального окна
    function handleDeleteButtonClick(event) {
        const deleteButton = event.target.closest('.trash-button');

        if (deleteButton) {
            const id = deleteButton.id;
            const match = id.match(/delete-pick-up-point-button-(\d+)/);

            if (match) {
                const index = parseInt(match[1], 10);

                if (!isNaN(index) && index >= 0 && index < deliveryMethod.pickUpPoints.length) {
                    deliveryMethod.pickUpPoints.splice(index, 1);
                    const pickPointsContainer = document.querySelector('.modal-pick-points-container');
                    pickPointsContainer.innerHTML = pickUpPoints();
                }
            }
        }
    }
    document.addEventListener('click', handleDeleteButtonClick);
});


