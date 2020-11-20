class CarrierInformaction
{
    
    searchCarrier(){
        return cy.get('.columns > .column > .input')
    }

    addButton(){
        return cy.get('.page-header__button-icons > .button')
    }

    //Table info

    removeCarrier(rowNumber){
        return cy.get('tbody tr:nth-child('+rowNumber+') td:nth-child(5) .mdi.mdi-close')
    }

    editCarrier(rowNumber){
        return cy.get('tbody tr:nth-child('+rowNumber+') td:nth-child(5) .mdi.mdi-pencil-outline')
    }

    defaultCarrier(rowNumber){
        return cy.get('tbody tr:nth-child('+rowNumber+') td:nth-child(4) .mdi.mdi-check')
    }

    carrierName(rowNumber){
        return cy.get('tbody tr:nth-child('+rowNumber+') td:nth-child(2)')
    }

    DOTNumber(rowNumber){
        return cy.get('tbody tr:nth-child('+rowNumber+') td:nth-child(3)')
    }

    //Add /Edit Carrier window modal
    
    carrierNameField(){
        return cy.get('.input:visible[placeholder="Carrier Name"]')
    }

    carrierDOTField(){
        return cy.get('.input:visible[placeholder="Carrier DOT Number"]')
    }

    streetField(){
        return cy.get('.input:visible[placeholder="Street Name"]')
    }

    cityField(){
        return cy.get('.input:visible[placeholder="City"]')
    }
    postalCodeField(){
        return cy.get('.input:visible[placeholder="ZIP/Postal Code"]')
    }
    phoneNumberField(){
        return cy.get('.input:visible[placeholder="Phone Number"]')
    }

    makeDefaultCarrier(){
        return cy.get('.is-active > .modal-card > .modal-card-body > .is-offset-one-quarter > label')
    }

    saveOrDeleteButton(){
        return cy.get('.is-active > .modal-card > .modal-card-foot > :nth-child(1)')
    }

    closeButton(){
        return cy.get('.is-active > .modal-card > .modal-card-foot > :nth-child(2)')
    }

    //this is the "x" button for closing the modal
    closeModal(){
        return cy.get('.is-active > .modal-card > .modal-card-head > .delete')
    }

    //Labels

    title(){
        return cy.get('.page-header__title')
    }
    numberLabel(){
        return cy.get('thead > tr > :nth-child(1)')
    }
    nameLabel(){
        return cy.get('thead > tr > :nth-child(2)')
    }
    DOTLabel(){
        return cy.get('thead > tr > :nth-child(3)')
    }
    defaultLabel(){
        return cy.get('thead > tr > :nth-child(4)')
    }
    actionsLabel(){
        return cy.get('thead > tr > :nth-child(5)')
    }

    //Modal Labels

    modalTitle(){
        return cy.get('.is-active > .modal-card > .modal-card-head > .modal-card-title > span')
    }
    
    carrierNameLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(1) > .field-label > .label')
    }
    carrierDOTLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(2) > .field-label > .label')
    }
    streetLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(3) > .field-label > .label')
    }
    cityLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(4) > .field-label > .label')
    }
    countryLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(5) > .field-label > .label')
    }
    stateLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(6) > .field-label > .label')
    }
    postalCodeLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(7) > .field-label > .label')
    }
    phoneLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(8) > .field-label > .label')
    }
    timeZoneLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(9) > .field-label > .label')
    }
    startHourLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > :nth-child(10) > .field-label > .label')
    }
    makeDefaultLabel(){
        return cy.get('.is-active > .modal-card > .modal-card-body > .is-offset-one-quarter > label > span')
    }






















}export default CarrierInformaction;