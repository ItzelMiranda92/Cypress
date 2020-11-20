/// <reference types="Cypress" />
 
import 'cypress-iframe'

describe('My Second Test Suite', function() 
{
it('My FirstTest case',function() {
 
//
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded('#courses-iframe')

cy.iframe().find('a[href="#/mentorship"]').eq(0).click()
cy.iframe().find('[class*="pricing-title"]').should('have.length',2)

cy.get('a[href="#/mentorship"]').eq(0).click()
})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 