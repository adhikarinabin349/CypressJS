export const waitForElement = (locator, timeout = 10000) => {
    cy.get(locator, { timeout }).should("be.visible");
  };