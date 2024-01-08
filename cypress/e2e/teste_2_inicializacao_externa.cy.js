describe('inicializacao', () => {
    it('usando Commands', () => {
        // o "teste1()" é uma função criada dentro de um comando no arquivo "Commands" na pasta support
        cy.teste2()
            .then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(200)
                //expect(res.body.accessToken).to.have( ? )
                const accessToken = res.body.accessToken;

                cy.api({
                    method: 'POST',
                    url: 'https://api-test2.certfy.tech/onboarding/api/ExternalRequest/CreateSchedule/cbe1d70a-8c8f-489d-8079-a1bf69022de2',
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