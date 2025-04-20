import { elements as el } from "./elements"

class Header {

    validarCarrinhoPossueItens(quantidade){
        cy.get(el.cartBadge)
        .should('be.visible')
        .and('have.text', '1')
    }

    navegaraParaCarrinho(){
        cy.get(el.cartContainer).click()
    }


    validarCarrinhoRemoveItens(){
        cy.get(el.cartBadge)
        .should('not_exist')
        cy.screenshot('produto removido')
    }

 
}

export default new Header()