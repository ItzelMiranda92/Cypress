import LoginPage from '../support/pageObjects/LoginPage'
const loginPage= new LoginPage()
import CarrierInformaction from '../support/pageObjects/CarrierInformation'
const carrierInformation= new CarrierInformaction()

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
        })


})
//fill carrier information
Cypress.Commands.add("fillCarrierData",(data)=>{
    carrierInformation.carrierNameField().type(data.carrier.name)
    carrierInformation.carrierDOTField().type(data.carrier.DOT)
    carrierInformation.streetField().type(data.carrier.street)
    carrierInformation.cityField().type(data.carrier.city)
    carrierInformation.postalCodeField().type(data.carrier.postalCode)
    carrierInformation.phoneNumberField().type(data.carrier.phoneNumber)
})

Cypress.Commands.add("clearCarrierData",(data)=>{
    carrierInformation.carrierNameField().clear()
    carrierInformation.carrierDOTField().clear()
    carrierInformation.streetField().clear()
    carrierInformation.cityField().clear()
    carrierInformation.postalCodeField().clear()
    carrierInformation.phoneNumberField().clear()
})
//Login
Cypress.Commands.add("login",(user,password) =>{
    loginPage.usernameField().type(user)
    loginPage.passwordField().type(password)
    loginPage.signInButton().click()
    cy.wait(7000)
})
