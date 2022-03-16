Feature: Login

  I want to log into Conduit

  Scenario: Successful Login
    Given open home page
    When click login button
    And fill email "email@gmail.com" text box