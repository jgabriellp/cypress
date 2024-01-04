// const { expect } = require("chai");

it('create user with fixture another option', () => {
    /*let randomtext = ""
    let testEmail = ""

    var pattern = "ABCDEFGHIJKLMNOPQRSTUVkfjhdasgjkfsd"
    for (var i = 0; i < 10; i++)
        randomtext += pattern.charAt(Math.floor(Math.random() * pattern.length))
    */

    function gerarStringAleatoria(tamanho) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let resultado = '';

        for (let i = 0; i < tamanho; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            resultado += caracteres.charAt(indiceAleatorio);
        }

        return resultado;
    }

    cy.fixture('createuser').then((payload) => {
        // na pasta fixture, o cypress armazena vários json que podem armazenar dados de teste
        // que podem ser lidos por vários testes nos scripts

        cy.api({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: { 
                'authorization' : "Bearer 36ab1fb531df61a0b8eccc60dad447fc280247236021bb6ba75d87058a952d35" 
            },
            body: {
                "name":"gabriel lima",
                "gender":"male",
                "email": gerarStringAleatoria(10) + "@example.com",
                "status":"active"
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('gender', "male")
             
            const userid = res.body.data.id
            cy.request({
               method: 'PUT',
               url: 'https://gorest.co.in/public/v1/users/' + userid,
               headers: { 
                   'authorization' : "Bearer 36ab1fb531df61a0b8eccc60dad447fc280247236021bb6ba75d87058a952d35" 
               },
               body: {
                   "name":"gabriel lima",
                   "email": payload.email, // o payload.email usa o email q se encontra no arquivo fixture
                   "gender":"male",
                   "status":"inactive"
               }
            }).then((res) => {
               cy.log(JSON.stringify(res))
               expect(res.status).to.eq(200)
               expect(res.body.data).has.property('name', 'gabriel lima')
               expect(res.body.data).has.property('email', payload.email)
            });
        });
    })
});