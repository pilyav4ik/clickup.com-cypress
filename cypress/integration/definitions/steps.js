import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";



Given('open home page', () => {
    cy.visit("/")
});

When('popup window visible', () => {
    cy.get('.modal').should("be.visible")
});

Then('close popup window', () => {
    cy.get('.modal__close').click()
});

Then('click login button', ()=> {
    cy.get('a').contains('Login').click()
});
