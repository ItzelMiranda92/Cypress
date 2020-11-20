/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
 //Forzar click objeto invisible
 cy.contains("Top").click({force: true})
 //Mouse over
 
 cy.get('.mouse-hover-content').invoke('show')
 cy.contains('Top').click()
 cy.url().should('include','#top')


cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
        cy.get("tr td:nth-child(2)").eq(index).next().should('have.text','25')
 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('25')
        })
    }
 
})

 //Forzar click objeto invisible
 cy.contains("Top").click({force: true})



})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 