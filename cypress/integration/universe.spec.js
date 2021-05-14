import {
  cyInputUniverseName,
  cyInputMaximumSize,
  cyInputCurrentSize,
  cyAddNewUniverseButton,
} from "../../src/handles/index";

describe("Test for universe componemt", () => {
  it("Visits the Application page", () => {
    cy.visit("http://localhost:3000/universe");
  });
  it("Types new universe name in inputbar", () => {
    cy.get(`[data-cy=${cyInputUniverseName}]`).type("Jupiter");
  });
  it("Types new maximum size in inputbar", () => {
    cy.get(`[data-cy=${cyInputMaximumSize}]`).type("24689");
  });
  it("Types current size in inputbar", () => {
    cy.get(`[data-cy=${cyInputCurrentSize}]`).type("14689");
  });
  it("Submits the new universe form", () => {
    cy.get(`[data-cy=${cyAddNewUniverseButton}]`).click();
  });
});
