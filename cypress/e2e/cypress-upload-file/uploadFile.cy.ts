/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://www.ilovepdf.com/");
  });

  it("should upload pdf file successful", () => {
    cy.get("h3").contains("Merge PDF").click();
    cy.uploadPDF();
  });
});
