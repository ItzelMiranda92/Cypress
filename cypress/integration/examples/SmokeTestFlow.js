/// <reference types="Cypress" />
import LateralMenu from '../../support/pageObjects/LateralMenu'
import CarrierInformaction from '../../support/pageObjects/CarrierInformation'
import HOSDrivers from '../../support/pageObjects/HOSDrivers'
import HOSLogs from '../../support/pageObjects/HOSLogs'

describe('Smoke Test Flow Set', function() 
{
    beforeEach(function() {
        // runs once before all tests in the block

        //user data
        cy.fixture('userJTL').then(function(userdata)
        {
            this.userdata=userdata
        })

        //HOS Drivers
        cy.fixture('HOSDriversData').then(function(driversPageData)
        {
            this.driversPageData=driversPageData
        })
        //Settings carrierData
        cy.fixture('carrierData').then(function(carrierinfodata)
        {
            this.carrierinfodata=carrierinfodata
        })
        
      })

      const lateralMenu = new LateralMenu()
      const driversPage= new HOSDrivers()
      const logsPage= new HOSLogs()
      const carrierInformation= new CarrierInformaction()


it('Login Check',function(){
        cy.visit(Cypress.env('url'))
        cy.login(this.userdata.user,this.userdata.password)
    })

//HOS Menu    
it('Check HOS-Drivers page',function(){
    //Check if HOS Menu active
    cy.get('.drawer > .list-item:nth-child(1) > ul').then(($el) => {
        if($el.hasClass('collapse collapsed')) {
           //si se inicia sesión en Drivers page
           lateralMenu.HOSDrivers().click()
       } else {
           //go to drivers page
           lateralMenu.HOSmenu().click()
           lateralMenu.HOSDrivers().click()
       }
     })

     //Check Main page labels
    driversPage.title().should('have.text',this.driversPageData.labelsMainPage.title)
    driversPage.note().should('have.text',this.driversPageData.labelsMainPage.note)

    //Check Icons
    driversPage.faxIcon().should('be.visible')

})

it('Check HOS-Logs page',function(){

    lateralMenu.HOSLogs().click()
     //Check Main page labels
    logsPage.title().should('have.text',"Driver History")
    logsPage.faxIcon().should('be.visible')
    logsPage.pdfIcon().should('be.visible')
    logsPage.documentIcon().should('be.visible')
    logsPage.downloadIcon().should('be.visible')
    

})

//State Mileage

it('Check Fuel Receipts page',function(){

    lateralMenu.stateMileage().click()
    lateralMenu.fuelReceipts().click()
     //Check Main page labels
    cy.get('.page-header__title').should('be.visible')
    
})

it('Check State Mileage Reports page',function(){

    lateralMenu.stateMileage().click()
    lateralMenu.stateMileageReports().click()
     //Check Main page labels
    cy.get('.page-header__title').should('be.visible')
    
})

//DVIR
it('Check DVIR History page',function(){

    lateralMenu.DVIRmenu().click()
    lateralMenu.DVIRHistory().click()
     //Check Main page labels
    cy.get('.page-header__title').should('be.visible')
    
})

it('Check DVIR Reports page',function(){

    lateralMenu.DVIRmenu().click()
    lateralMenu.DVIRReports().click()
     //Check Main page labels
    
})

//Mobile Worker

it('Check Jobsite  page',function(){

    lateralMenu.mobileWorker().click()
    lateralMenu.jobsites().click()
     //Check Main page labels
     cy.get('.page-header__title').should('be.visible')
})

//MarketPlace

it('Check MarketPlace  page',function(){

    lateralMenu.marketPlace().click()
     //Check Main page labels
    
})


//Settings

it('Check Accounts page',function(){

    lateralMenu.settingsMenu().click()
    lateralMenu.accounts().click()
    //Main page labels
    cy.get('.page-header__title').should('be.visible')
})

it('Check Carrier page',function(){

    lateralMenu.settingsMenu().click()
    lateralMenu.carrierInformation().click()
    //Main page labels
    carrierInformation.title().should('have.text',this.carrierinfodata.labelsMainPage.title)
    carrierInformation.numberLabel().should('have.text',this.carrierinfodata.labelsMainPage.tableNumber)
    carrierInformation.nameLabel().should('have.text',this.carrierinfodata.labelsMainPage.tableName)
    carrierInformation.DOTLabel().should('have.text',this.carrierinfodata.labelsMainPage.tableDOT)
    carrierInformation.defaultLabel().should('have.text',this.carrierinfodata.labelsMainPage.tableDefault)
    carrierInformation.actionsLabel().should('have.text',this.carrierinfodata.labelsMainPage.tableActions)
})



}


)

