describe('inicializacao', () => {
    it('usando Commands', () => {
        // o "teste1()" é uma função criada dentro de um comando no arquivo "Commands" na pasta support
        cy.teste1()
            .then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(200)
                //expect(res.body.accessToken).to.have( ? )
                const accessToken = res.body.accessToken;

                cy.api({
                    method: 'POST',
                    url: 'https://api-test.certfy.tech/onboarding/api/ExternalRequest/CreateSchedule/e368acf4-540d-4ade-901b-198d656f60b4',
                    headers: { 
                        Authorization: 'Bearer ' + accessToken,
                    },
                    body: {
                        "nome": "string"
                    }
                });
            })
    });
});