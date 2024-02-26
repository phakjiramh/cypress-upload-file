/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    uploadPDF(): Chainable<Element>;
  }
}

Cypress.Commands.add("uploadPDF", () => {
  cy.get("input[type=file]")
    .should("have.attr", "accept", ".pdf")
    .selectFile("cypress/fixtures/dummy.pdf", { force: true });
  cy.intercept("POST", "/v1/upload*").as("apiUploadFile");
  cy.wait("@apiUploadFile", { timeout: 10000 })
    .its("response.statusCode")
    .should("eq", 200);
});
