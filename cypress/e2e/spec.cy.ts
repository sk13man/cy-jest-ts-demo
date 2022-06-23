describe('Cypress demo', () => {
  it('visit site', () => {
    cy.visit('https://github.com');
    cy.url().should('include', 'github');
  });

  it('change URL and attach screenshot', () => {
    cy.visit('https://www.cypress.io');
    cy.screenshot({ capture: 'viewport' });
    cy.url().should('not.contain', 'github');
  });
});
