class HOSDrivers
{
    //Labels
    

    title(){
         return cy.get('.page-header__title')  
        }
    note(){ 
        return cy.get('.page-header__sub-title')
    }

    allDrivers(){
        return cy.contains('All Drivers')
    }

    allTerminals(){
        return cy.contains('All Terminals')
    }

    allSubsets(){
        return cy.contains('All Subsets')
    }

    //Tags

    tag(tagNumber){
        return cy.get(':nth-child('+tagNumber+') > .tags')
    }

    //Table labels

    tableColumn(columnNumber){
        cy.get('#Tr > :nth-child('+columnNumber+')')
    }
    
    //Icons
    faxIcon(){
        return cy.get('.page-header__button-icons > div')
    }


}export default HOSDrivers;