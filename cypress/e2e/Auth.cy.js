import Header from "./PageObject/Header";
import Login from "./PageObject/Login";
import MyAccount from "./PageObject/MyAccount";
import ErrorHandler from "../handler/ErrorHandler";

describe ("Prestashop", function () {


    it("ValidLoginTest", () => {
        const errorHandler = new ErrorHandler()
        errorHandler.MathCalculateIsNotDefined()
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
        const errorHandler = new ErrorHandler()
        errorHandler.MathCalculateIsNotDefined()

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