class HomePage {
    visit() {
      cy.visit("https://www.atroverse.com");
    }
  
    search(query) {
      cy.get('[aria-label="Search"]').type(`${query}{enter}`);
    }
  }
  
  export const homePage = new HomePage();