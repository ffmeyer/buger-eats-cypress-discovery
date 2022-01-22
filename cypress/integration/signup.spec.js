//import original sem new na classe SignupPage
//import SignupPage from '../pages/SignupPage'
import signUpFactory from '../factories/signUpFactory'
import signup from '../pages/SignupPage'

//var deliver; 

describe('cadastro', function () {
    /*variavel this nao funciona arrow function
    https://docs.cypress.io/api/commands/fixture
      troquei 
        beforeEach(() => {
            por 
        beforeEach(function () {

    obs.:  foi ncessario fazer nas it's tambem 

    it('usuario deve se tornar um deliver',() => {
        por
    it('usuario deve se tornar um deliver', function () {        


    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })
    */
    
    it('User should be Deliver', function () {        
        var deliver = signUpFactory.deliver() 
        signup.go();
        signup.fillForm(deliver);
        signup.submit();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', function () {
        var deliver = signUpFactory.deliver()
        deliver.cpf = '00000014141'
        signup.go();
        signup.fillForm(deliver);
        signup.submit();

        const expectedMessage = 'É necessário informar o CPF'
        signup.alertMessageShouldBe(expectedMessage)
    })

    it('Incorrect email', function () {

        var deliver = signUpFactory.deliver()
        deliver.email = 'user.com.br'

        signup.go();
        signup.fillForm(deliver)
        signup.submit();

        const expectedMessage = 'Oops! Email com formato inválido.'
        signup.alertMessageShouldBe(expectedMessage)
    })

    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]
        before(function () {
            signup.go()
            signup.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })
})
