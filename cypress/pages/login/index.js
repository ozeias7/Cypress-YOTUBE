import { elements as el } from "./elements"

class Login {

    visitarPagina(){
        cy.visit('https://www.saucedemo.com/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type('standard_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginbutton).click()
    }

    preencherCredenciaisInvalidos(){
        cy.get(el.username).type('standard')
        cy.get(el.password).type('123')
        cy.get(el.loginbutton).click()
    }

    validarErrosCredenciaisInvalidas(){
        cy.get(el.errorMessage)
        .should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.screenshot()
    }

}

export default new Login()