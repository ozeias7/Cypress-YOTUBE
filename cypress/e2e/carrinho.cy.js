import Login from       '../pages/login/index'
import inventory from   '../pages/inventory/index'
import Header from      '../pages/header/index'
import Cart from        '../pages/cart/index'


describe('Carrinho', () =>{
    
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })
       

    it('Adicionar produto no carrinho', () => {
        // Act
        const quantidadeItens = 1
        inventory.adcionarProduto()
        
        // Assert
       
        Header.validarCarrinhoPossueItens(quantidadeItens)
        Header.navegaraParaCarrinho()
    
        Cart.validarProdutosCarrinho()        

    })

    // it.only('Remover produto do carrinho', () => {
    //     //  Arrange
    //     inventory.adcionarProduto()
    //     inventory.removeProduto()

    //     // Assert
    //     Header.validarCarrinhoRemoveItens()

      
    // })

    
})
