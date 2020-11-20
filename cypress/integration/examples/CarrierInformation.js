/// <reference types="Cypress" />
import LateralMenu from '../../support/pageObjects/LateralMenu'
import CarrierInformaction from '../../support/pageObjects/CarrierInformation'

describe('Carrier Information Page Test Set', function() 
{
    beforeEach(function() {
        // runs once before all tests in the block
        cy.fixture('userJTL').then(function(userdata)
        {
            this.userdata=userdata
        })
        cy.fixture('carrierData').then(function(data)
        {
            this.data=data
        })


        
      })

      const lateralMenu = new LateralMenu()
      const carrierInformation= new CarrierInformaction()


it('Check Main page labels',function(){
    cy.visit(Cypress.env('url'))
    cy.login(this.userdata.user,this.userdata.password)
    lateralMenu.settingsMenu().click()
    lateralMenu.carrierInformation().click()
    //Main page labels
    carrierInformation.title().should('have.text',this.data.labelsMainPage.title)
    carrierInformation.numberLabel().should('have.text',this.data.labelsMainPage.tableNumber)
    carrierInformation.nameLabel().should('have.text',this.data.labelsMainPage.tableName)
    carrierInformation.DOTLabel().should('have.text',this.data.labelsMainPage.tableDOT)
    carrierInformation.defaultLabel().should('have.text',this.data.labelsMainPage.tableDefault)
    carrierInformation.actionsLabel().should('have.text',this.data.labelsMainPage.tableActions)
})

it('Check Add Modal labels',function(){
    carrierInformation.addButton().click()
    cy.wait(500)
    carrierInformation.modalTitle().should('have.text',this.data.labelsModal.titleAdd)
    carrierInformation.carrierNameLabel().should('have.text',this.data.labelsModal.name)
    carrierInformation.carrierDOTLabel().should('have.text',this.data.labelsModal.DOT)
    carrierInformation.streetLabel().should('have.text',this.data.labelsModal.street)
    carrierInformation.cityLabel().should('have.text',this.data.labelsModal.city)
    carrierInformation.countryLabel().should('have.text',this.data.labelsModal.country)
    carrierInformation.stateLabel().should('have.text',this.data.labelsModal.state)
    carrierInformation.postalCodeLabel().should('have.text',this.data.labelsModal.postalCode)
    carrierInformation.phoneLabel().should('have.text',this.data.labelsModal.phoneNumber)
    carrierInformation.timeZoneLabel().should('have.text',this.data.labelsModal.timeZone)
    carrierInformation.startHourLabel().should('have.text',this.data.labelsModal.startHour)
    carrierInformation.makeDefaultLabel().should('have.text',this.data.labelsModal.default)
    carrierInformation.saveOrDeleteButton().should('have.text',this.data.labelsModal.save)
    carrierInformation.closeButton().should('have.text',this.data.labelsModal.close)
    carrierInformation.closeModal().click()
})

it('Check Edit Modal labels',function(){
    carrierInformation.editCarrier(1).click()
    //carrierInformation.addButton().click()
    cy.wait(500)
    carrierInformation.modalTitle().should('have.text',this.data.labelsModal.titleEdit)
    carrierInformation.carrierNameLabel().should('have.text',this.data.labelsModal.name)
    carrierInformation.carrierDOTLabel().should('have.text',this.data.labelsModal.DOT)
    carrierInformation.streetLabel().should('have.text',this.data.labelsModal.street)
    carrierInformation.cityLabel().should('have.text',this.data.labelsModal.city)
    carrierInformation.countryLabel().should('have.text',this.data.labelsModal.country)
    carrierInformation.stateLabel().should('have.text',this.data.labelsModal.state)
    carrierInformation.postalCodeLabel().should('have.text',this.data.labelsModal.postalCode)
    carrierInformation.phoneLabel().should('have.text',this.data.labelsModal.phoneNumber)
    carrierInformation.timeZoneLabel().should('have.text',this.data.labelsModal.timeZone)
    carrierInformation.startHourLabel().should('have.text',this.data.labelsModal.startHour)
    carrierInformation.makeDefaultLabel().should('have.text',this.data.labelsModal.default)
    carrierInformation.saveOrDeleteButton().should('have.text',this.data.labelsModal.save)
    carrierInformation.closeButton().should('have.text',this.data.labelsModal.close)
    carrierInformation.closeModal().click()
})

it('Verify field mandatory',function(){
    //Carrier Name
    carrierInformation.addButton().click()
    cy.fillCarrierData(this.data)
    cy.get('.is-active > .modal-card > .modal-card-head > .modal-card-title > span').scrollIntoView({ensureScrollable: false})
    carrierInformation.carrierNameField().clear()
    carrierInformation.saveOrDeleteButton().click()
    cy.get('.notification').then(function(element)
    {
       const actualText=element.text()
      expect(actualText.includes("Carrier Name is required")).to.be.true
    })
    //Carrier DOT Number
    cy.get('.is-active > .modal-card > .modal-card-head > .modal-card-title > span').scrollIntoView({ensureScrollable: false})
    carrierInformation.carrierNameField().type(this.data.carrier.name)
    carrierInformation.carrierDOTField().clear()
    carrierInformation.saveOrDeleteButton().click()
    cy.get('.notification').then(function(element)
    {
      const actualText=element.text()
      expect(actualText.includes("Carrier DOT Number is required")).to.be.true
    })

    //Street
    /*
    cy.get('.is-active > .modal-card > .modal-card-head > .modal-card-title > span').scrollIntoView({ensureScrollable: false})
    carrierInformation.carrierDOTField().type(this.data.carrier.DOT)
    carrierInformation.streetField().clear()
    carrierInformation.saveOrDeleteButton().click()
    cy.get('.notification').then(function(element)
    {
       const actualText=element.text()
       expect(actualText.includes("Some fields are empty")).to.be.true

    })*/

    //City
    cy.get('.is-active > .modal-card > .modal-card-head > .modal-card-title > span').scrollIntoView({ensureScrollable: false})
    //carrierInformation.streetField().type(this.data.carrier.street)
    carrierInformation.carrierDOTField().type(this.data.carrier.DOT)
    carrierInformation.cityField().clear()
    carrierInformation.saveOrDeleteButton().click()
    cy.get('.notification').then(function(element)
    {
       const actualText=element.text()
       expect(actualText.includes("Some fields are empty")).to.be.true
    })

    //PostalCode
    carrierInformation.cityField().type(this.data.carrier.city)
    carrierInformation.postalCodeField().clear()
    carrierInformation.saveOrDeleteButton().click()
    cy.get('.notification').then(function(element)
    {
       const actualText=element.text()
       expect(actualText.includes("Some fields are empty")).to.be.true
    })

    //Phone Number
    carrierInformation.postalCodeField().type(this.data.carrier.postalCode)
    carrierInformation.phoneNumberField().clear()
    carrierInformation.saveOrDeleteButton().click()
    cy.get('.notification').then(function(element)
    {
       const actualText=element.text()
       expect(actualText.includes("Some fields are empty")).to.be.true
    })
    carrierInformation.closeModal().click()

})

it('Add new carrier',function() {
carrierInformation.addButton().click({force: true})
cy.get('.is-active > .modal-card > .modal-card-head > .modal-card-title > span').scrollIntoView({ensureScrollable: false})
cy.clearCarrierData()
cy.get('.is-active > .modal-card > .modal-card-head > .modal-card-title > span').scrollIntoView({ensureScrollable: false})
//fill carrier information
cy.fillCarrierData(this.data)
carrierInformation.saveOrDeleteButton().click()
cy.wait(1000)
cy.get('.notification').then(function(element)
{
   const actualText=element.text()
  expect(actualText.includes(this.data.carrier.name+" successfully save.")).to.be.true
})
cy.wait(3300)
})

it("Edit carrier and update Carrier Name",function(){
    //Edit
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        const text=$e1.text()
    if(text.includes(this.data.carrier.name))
    {
        carrierInformation.editCarrier(index+1).click()
        carrierInformation.carrierNameField().clear()
        carrierInformation.carrierNameField().type(this.data.carrier.newName)
        carrierInformation.saveOrDeleteButton().click()
        cy.wait(1000)
        cy.get('.notification').then(function(element)
        {
        const actualText=element.text()
        expect(actualText.includes(this.data.carrier.newName+" successfully save.")).to.be.true
        })
        return false;
    }
})
cy.wait(3300)
})

it("Verify that the carrier default cannot be removed",function(){
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        const text=$e1.text()
        if(text.includes(this.data.defaultCarrier))
        {
            //carrierInformation.removeCarrier(index+1).invoke('show')
            cy.get('tbody tr:nth-child('+(index+1)+') td:nth-child(5) span:nth-child(2)').should('have.attr',"data-tooltip","Default Carrier cannot be removed")
            return false;
        }
    })
})

it("Change the default carrier",function(){
    //Edit
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        const text=$e1.text()
    if(text.includes(this.data.carrier.newName))
    {
        carrierInformation.editCarrier(index+1).click()
        carrierInformation.makeDefaultCarrier().click()
        carrierInformation.saveOrDeleteButton().click()
        cy.wait(1000)
        cy.get('.notification').then(function(element)
        {
        const actualText=element.text()
        expect(actualText.includes(this.data.carrier.newName+" successfully save.")).to.be.true
        })
        return false;
    }
    })

    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        const text=$e1.text()
    if(text.includes(this.data.carrier.newName))
    {
        carrierInformation.defaultCarrier(index+1).should('be.visible')
        return false;
    }
    })


cy.wait(3300)
})

it("Return to original default carrier",function(){
    //Edit
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        const text=$e1.text()
    if(text.includes(this.data.defaultCarrier))
    {
        carrierInformation.editCarrier(index+1).click()
        carrierInformation.makeDefaultCarrier().click()
        carrierInformation.saveOrDeleteButton().click()
        cy.wait(1000)
        cy.get('.notification').then(function(element)
        {
        const actualText=element.text()
        expect(actualText.includes(this.data.defaultCarrier+" successfully save.")).to.be.true
        })
        return false;
    }
    })

    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        const text=$e1.text()
    if(text.includes(this.data.defaultCarrier))
    {
        carrierInformation.defaultCarrier(index+1).should('be.visible')
        return false;
    }
    })

cy.wait(3300)
})


it('Delete carrier',function(){
//Borrar
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
    const text=$e1.text()
    if(text.includes(this.data.carrier.newName))
    {
        carrierInformation.removeCarrier(index+1).click()
        
        carrierInformation.saveOrDeleteButton().click()
        cy.wait(1000)
        cy.get('.notification').then(function(element)
        {
        const actualText=element.text()
        expect(actualText.includes(this.data.carrier.newName+" Carrier deleted.")).to.be.true
        
        })
        return false;
    }
})
cy.wait(3300)
})

})



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 