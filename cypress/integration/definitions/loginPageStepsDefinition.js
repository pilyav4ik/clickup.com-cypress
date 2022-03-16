import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const loginPage = new Login();


When(/^fill email "([^"]*)" text box$/, function (email) {
    loginPage.emailTextBox(email)
});