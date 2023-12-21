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

})