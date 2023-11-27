class Login {

    txtEmail = "#email";
    txtPassword = "#passwd";
    btnSubmit = "#SubmitLogin span";
    backgroundError= "#center_column > :nth-child(2)";
    txtErrorTitle='html > body > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(1) > p';

    txtErrorDescription="ol > li";

    setEmail(email) {
        cy.get(this.txtEmail).type(email);
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }

    clickBtnLogin() {
        cy.get(this.btnSubmit).click();
    }

    checkBackgroundError(){
        cy.get(this.backgroundError).should("be.visible");
    }

    checkErrorTitle(){
        cy.get(this.txtErrorTitle).should("contain", "There is 1 error");
    }
    checkErrorDescription(){
        cy.get(this.txtErrorDescription).should("contain", "Authentication failed.");
    }

}
export default Login
