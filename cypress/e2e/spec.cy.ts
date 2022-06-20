describe('Cypress works', () => {
  it('works', () => {
    cy.visit('https://github.com', { timeout: 30000 });
    cy.url().should('equal', 'https://github.com/');
    cy.log(cy.url().toString());
  });

  it('cypress opens browser', () => {
    // expect(url).to.equal("https://github.com");
  });
});
