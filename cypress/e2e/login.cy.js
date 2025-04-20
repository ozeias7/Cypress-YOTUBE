import Login from '../pages/login/index'
import inventory from '../pages/inventory'

describe('Login', () =>{

    beforeEach(() => {
         Login.visitarPagina()
    })

    it('Realizar login com sucesso', () => {
        Login.preencherCredenciaisValidas()
        inventory.validarAcessoAPagina()
    })

    
    it('Realizar Senha Invalido ', () => {
       Login.preencherCredenciaisInvalidos()
       Login.validarErrosCredenciaisInvalidas()
    })

})