// Importe o Chai e o Cypress corretamente
// import chaiJsonSchema from 'chai-json-schema';

// chai.use(chaiJsonSchema);

it('JSON schema validator', () => {
    const schema = {
        title: 'test schema v2',
        type: 'object',
        required: ['postId', 'id', 'name', 'email'],
        properties: {
            postId: {
                type: 'number',
                minimum: 5,
            },
            id: {
                type: 'number',
                minimum: 1,
            },
            name: {
                type: 'string',
            },
            email: {
                type: 'string',
            },
            body: {
                type: 'string',
            },
        },
    };
    const expectedValue = [
        {
            postId: 5,
            id: 1,
            name: "testeteste",
            email: "gabriel.lima@vsoft.com.br",
            body: "teste",
        },
        {
            postId: 5,
            id: 2,
            name: "testeteste",
            email: "gabriel.lima@vsoft.com.br",
            body: "teste",
        },
    ];

    // Use cy.wrap para envolver o objeto e, em seguida, aplique a asserção jsonSchema diretamente
    // cy.wrap(expectedValue[0]).should('be.jsonSchema', schema);
    // cy.wrap(expectedValue[1]).should('be.jsonSchema', schema);

    expect(expectedValue[0].to.be.jsonSchema(schema));
    expect(expectedValue[1].to.be.jsonSchema(schema));
});
