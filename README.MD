# Cypress Prestashop Test Cases

This project uses the Cypress framework to demonstrate POM and Auth tests for the E-commerce site (Prestashop). 
Locators and actions are placed in separate classes corresponding to the names of the site pages. 
Email and password are stored in the fixtures directory. 
Additionally, there is an error handler class that ignores some error related to JS elements on the site because, without it, the tests fail.

Tests flow:
Test 1
1. Open the site
2. Go to the login page
3. Enter valid credentials
4. Login
5. Compare the expected head title value with the actual
------
Test 2
1. Open the site
2. Go to the login page
3. Enter invalid credentials
4. Login
5. Check the display of the alert background
6. Compare the expected alert title and description value with the actual

## File Structure

**Auth.cy.js**: This file includes test scenarios that verify the functionality of the e-commerce application.

**Pages**: 
**Home.js**: The `Home` class represents the page object model for the home page and click action to go to the login page.

**Login.js**: The `Login` class represents the page object model for the login page. It enters user credentials, and performing login actions.

**MyAccount.js**: The `MyAccount` class represents the page object model for my cabinet page. It validates the page title on my cabinet page.


**prestashop.json**: The module provides a user credential.

**ErrorHandler.js**: ignores some error related to JS elements on the site.

## Running Tests

1. Open Cypress application: `npx cypress open`.
2. Run tests from Cypress application.
