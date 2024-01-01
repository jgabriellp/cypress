describe('Testes da API consulta CEP', () => {

    it('Consulta CEP válido', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://viacep.com.br/ws/01001000/json/',
            failOnStatusCode: false,
            headers: { 'Accept-Language': 'en-us', },
        }).as('response'); // salvando o retorno desse request em uma variável chamada response

        cy.get('@response').should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.cep).to.equal('01001-000')
        });

    });

    it('Verificando Headers', () => {
        cy.request({
            method: 'GET',
            url: 'https://viacep.com.br/ws/01001000/json/',
            failOnStatusCode: false,
        }).as('response'); // Certifique-se de que está dentro do bloco da cy.request
    
        cy.get('@response').should((response) => {
            expect(response.headers['content-type']).to.include('application/json; charset=utf-8');
            // Verifica se o content-type inclui 'application/json; charset=utf-8'
        });
    });    

});