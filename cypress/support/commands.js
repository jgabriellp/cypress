// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('teste1', () => {
    cy.api({
        method: 'POST',
        url: "https://api-test.certfy.tech/onboarding/api/Authentication/Token",
        body: {
            "companyId": "ada0a260-c7f1-42ab-9fde-5f10bdadf3b1",
            "secretKey": "QIRE6/mU63SSV4qRHRjN9Z0SnvyJiFpfEXo9yqum0CU="
        }
    });
})

Cypress.Commands.add('teste2', () => {
    cy.api({
        method: 'POST',
        url: "https://api-test2.certfy.tech/onboarding/api/Authentication/Token",
        body: {
            "companyId": "1a9cf891-7d40-4fd3-9666-79bf958ef8ff",
            "secretKey": "ab2zH3+FWscyESIUjEBFSCBQecz+ilSfzhWqOs6AYoQ="
        }
    });
})