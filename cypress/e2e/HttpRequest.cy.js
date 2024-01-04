describe("HTTP Request", () =>{

    it("GET call", () => {
        
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: { 'Accept-Language': 'en-us', },
        })
        .its('status')
        .should('equal', 200);
    })

    it('POST call', () => {
        
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: 
                {
                    "title": "teste do POST",
                    "body": "chamada tipo POST",
                    "userId": 1
                },
            headers: { 'Accept-Language': 'en-us', },
        })
        .its('status')
        .should('equal', 201);

    });

    it('PUT call', () => {
        
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: 
                {
                    title: "PUT, atualização do POST",
                    body: "chamada tipo PUT",
                    userId: 1,
                    id: 1
                },
            headers: { 'Accept-Language': 'en-us', },
        })
        .its('status')
        .should('equal', 200);

    });

    it('DELETE call', () => {
        
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: { 'Accept-Language': 'en-us', },
        })
        .its('status')
        .should('equal', 200);

    /*
        pode ser tb:
        .then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
        }
    */

    });

})