import { elements as el } from "./elements"

class Inventory {

    validarAcessoAPagina(){
        cy.url().should('eq','https://www.saucedemo.com/inventory.html') 
        cy.screenshot('acesso a pagina de inventario')
    }

    adcionarProduto(){
        cy.get(el.addToCart).click()
        cy.screenshot()
    }

    removeProduto(){
        cy.get(el.removeToCart).click()
        cy.screenshot()
    }

}

export default new Inventory()