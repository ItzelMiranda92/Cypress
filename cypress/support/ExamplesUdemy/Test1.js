/// <reference types="Cypress" />

describe('My first TestSuite',function(){
it('My first TestCase',function(){
//Test case script
cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type("ca")
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
//Parent child chaining
cy.get('.products').find('.product').should('have.length',4)
cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click()


cy.get('.products').find('.product').each(($el,index,$list)=>{

    const productName = $el.find('.product-name').text()

    if(productName.includes('Cashew')){
        $el.find('button').click()
    }
})

//Save a commonly used part as simplier version
//for example thi:
cy.get('.products').find('.product').should('have.length',4)
//when we save the .products locator
cy.get('.products').as('productLocator')
//its the same as
cy.get('@productLocator').find('.product').should('have.length',4)
//usefull if its big and you use it a lot of times

//Assert if logo text is correct
cy.get('.brand').should('have.text','GREENKART')

    })

it('My second TestCase',function(){
    //Test case script
    cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type("tomato")
    cy.wait(20)
    cy.get('.product-action > button').click()
    cy.get('.cart-icon > img').click()
    cy.wait(200)
    cy.contains('PROCEED').click()
    cy.wait(2000)
    
    })

})