class LateralMenu {
//Por corregir porque cambiaron los IDs 
    HOSmenu(){ return cy.get('.drawer > .list-item:nth-child(1)')}
    
    HOSDrivers(){return cy.get('li:nth-child(1) li:nth-child(1)')}
    HOSLogs() {return cy.get('li:nth-child(1) li:nth-child(2)')}
    HOSLocations() {return cy.get('li:nth-child(1) li:nth-child(3)')}
    HOSViolations() {return cy.get('li:nth-child(1) li:nth-child(4)')}
    HOSUndefinedDriving() {return cy.get('li:nth-child(1) li:nth-child(5)')}
    HOSReports() {return cy.get('li:nth-child(1) li:nth-child(6)')}
    HOSMalfunctions() {return cy.get('li:nth-child(1) li:nth-child(7)')}
    HOSLogEdits() {return cy.get('li:nth-child(1) li:nth-child(8)')}
    HOSDataTransfer() {return cy.get('li:nth-child(1) li:nth-child(9)')}

    stateMileage(){return cy.get('.drawer > .list-item:nth-child(2)')}

    fuelReceipts() {return cy.get('li:nth-child(2) li:nth-child(1)')}
    stateMileageReports() {return cy.get('li:nth-child(2) li:nth-child(2)')}

    DVIRmenu(){
        return cy.get('#DVIR > .toggle')
    }
    DVIRHistory() {return cy.get('li:nth-child(3) li:nth-child(1)')}
    DVIRReports() {return cy.get('li:nth-child(3) li:nth-child(2)')}

    mobileWorker(){
        return cy.get('.drawer > .list-item:nth-child(4)')
    }
    jobsites() {return cy.get('li:nth-child(4) li:nth-child(1)')}
    workOrders() {return cy.get('li:nth-child(4) li:nth-child(2)')}
    MobileWorkerReports() {return cy.get('li:nth-child(4) li:nth-child(3)')}

    marketPlace(){
        return cy.get('#Marketplace > .list-item__text')
    }

    settingsMenu(){
        return cy.get('#Settings > .toggle')
    }
    accounts() {return cy.get('#Settings > .collapse > :nth-child(1)')}
    accountsSettings() {return cy.get('#Settings > .collapse > :nth-child(2)')}
    carrierInformation() { return cy.get('#Settings > .collapse > :nth-child(3)')}
    alerts() {return cy.get('#Settings > .collapse > :nth-child(4)')  }
    branding() {return cy.get('#Settings > .collapse > :nth-child(5)')  }
    userProfile() { return cy.get('#Settings > .collapse > :nth-child(6)') }
    users() { return cy.get('#Settings > .collapse > :nth-child(7)') }
    userRoles() {   return cy.get('#Settings > .collapse > :nth-child(8)')}
    driversSettings() { return cy.get('#Settings > .collapse > :nth-child(9)') }
    driverExceptions() { return cy.get('#Settings > .collapse > :nth-child(10)') }
    equipment() { return cy.get('#Settings > .collapse > :nth-child(11)') }
    terminals() { return cy.get('#Settings > .collapse > :nth-child(12)')  }
    DVIRForm() { return cy.get('#Settings > .collapse > :nth-child(13)') }
    buttonEditor() { return cy.get('#Settings > .collapse > :nth-child(14)') }
    formSetup() { return cy.get('#Settings > .collapse > :nth-child(15)') }
    userInterface() {return cy.get('#Settings > .collapse > :nth-child(16)') }
    pushData() {return cy.get('#Settings > .collapse > :nth-child(17)')  }

} export default LateralMenu;