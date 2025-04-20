import { elements as el } from "./elements"

class Cart {

    validarProdutosCarrinho(){
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.screenshot('produto adicionado')
    }
}

export default new Cart()