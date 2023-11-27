class Header {

    btnSignIn = "a[class='login']";

    clickBtnSignIn() {
        cy.get(this.btnSignIn).should("be.visible").click();
    }
}
export default Header