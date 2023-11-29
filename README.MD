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


