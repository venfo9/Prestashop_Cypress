import ErrorHandler from "../../handler/ErrorHandler";

class Home {

    btnSignIn = "a[class='login']";
    goToHomePage() {
    const errorHandler = new ErrorHandler()
    errorHandler.MathCalculateIsNotDefined()
    cy.visit("http://prestashop.qatestlab.com.ua/en/");
    cy.viewport(1920, 1080);
    cy.location("protocol").should("eq","http:");
    }

    clickBtnSignIn() {
        cy.get(this.btnSignIn).should("be.visible").click();
    }
}
export default Home