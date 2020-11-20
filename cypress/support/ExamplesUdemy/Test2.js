/// <reference types="Cypress" />

describe('My first TestSuite',function(){
it('My first TestCase',function(){
//Test case script
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//for check boxes its more relaiable to use check instead of click
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//for check you can send the "values" of the checkboxes as parameter
cy.get('input[type="checkbox"]').check(['option1','option3'])

//Static Dropdown
cy.get('select').select("Option2").should('have.value',"option2")
//Dynamic Dropdown

cy.get('#autocomplete').type("ind")
//cy.wait(200)
cy.get('.ui-menu-item div').each((el$,index,$list)=>{
    if(el$.text()=="India"){
        el$.click()
    }

})

//visible and invisible elements
cy.get('#show-textbox').click()

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')

//Radio
cy.get('[for="radio2"] > .radioButton').check()


    })


})