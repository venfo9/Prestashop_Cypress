import Home from "./PageObject/Home";
import Login from "./PageObject/Login";
import MyAccount from "./PageObject/MyAccount";

describe ("Prestashop", function () {


    it("ValidLoginTest", () => {


        const home = new Home();
        home.goToHomePage();
        home.clickBtnSignIn();

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

        const home = new Home();
        home.goToHomePage();
        home.clickBtnSignIn();

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