class Login {

    emailTextBox(email){
        return cy.get('#login-email-input').type(email)
    }
}