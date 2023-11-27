class MyAccount {

    getTitle() {
        cy.title().should("eq", "Мой аккаунт - http://prestashop.qatestlab.com.ua/");
    }
}
export default MyAccount