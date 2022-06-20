describe('Cypress demo', () => {
  it('open browser', () => {
    cy.visit('https://github.com');
    cy.url().should('include', 'github');
  });

  it('throw error and save screenshot to report', () => {
    cy.title().then((t) => cy.log(t));
    cy.url().should('equal', 'github');
  });
});
