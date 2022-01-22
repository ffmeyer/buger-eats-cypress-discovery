//var faker = require('faker') // a importacao do faker estav gerando problema de compilacao.
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        // var firstName = faker.name.firstName()
        // var lastName = faker.name.lastName()

        var data = {
            //name: `${firstName} ${lastName}}`, 
            name:  'Faker Cancer',
            cpf:   cpf.generate(),
            //email: faker.internet.email(firstName),
            email:   'faker@a.com',
            whatsapp: '11999999999',
            address:  {
                postalcode:  '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
    
}