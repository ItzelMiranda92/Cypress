class LoginPage
{

    usernameField(){
        return cy.get('#username')
    }
    passwordField(){
        return cy.get('#password')
    }

    signInButton(){
        return cy.get('form > .control-buttons > .control > .button')
    }

    OmnitracsOneProvider(){
        return cy.get(':nth-child(7) > .control > .button')
    }



}
export default LoginPage;