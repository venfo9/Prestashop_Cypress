import Header from "./PageObject/Header";
import Login from "./PageObject/Login";
import MyAccount from "./PageObject/MyAccount";

describe ("Prestashop", function () {


    it("ValidLoginTest", () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // Check that the error related to a JS element with invalid parameters
            if (err.message.includes('MathCalculate is not defined')) {
                // Ignore the error and continue test
                return false;
            }
            // Otherwise, return true to handle other errors.
            return true;
        });
        cy.visit("http://prestashop.qatestlab.com.ua/en/");
        cy.viewport(1920, 1080);
        cy.location("protocol").should("eq","http:");

        const header = new Header();
        header.clickBtnSignIn();

        cy.fixture("prestashop").then((data)=>{
            const login = new Login();
            login.setEmail(data.email);
            login.setPassword(data.password);
            login.clickBtnLogin();
        })

        const myAccount = new MyAccount();
        myAccount.getTitle();

    });

    it("WrongPass", () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // Check that the error related to a JS element with invalid parameters
            if (err.message.includes('MathCalculate is not defined')) {
                // Ignore the error and continue test
                return false;
            }
            // Otherwise, return true to handle other errors.
            return true;
        });
        cy.visit("http://prestashop.qatestlab.com.ua/en/");
        cy.viewport(1920, 1080);
        cy.location("protocol").should("eq","http:");

        const header = new Header();
        header.clickBtnSignIn();

        cy.fixture("prestashop").then((data)=>{
            const login = new Login();
            login.setEmail(data.email);
            login.setPassword("password");
            login.clickBtnLogin();
            login.checkBackgroundError();
            login.checkErrorTitle();
            login.checkErrorDescription()
        })

    });
})