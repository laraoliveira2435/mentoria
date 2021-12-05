Cypress.Commands.add('createToDoNewItem', (newItem) => {
  cy.get('.new-todo').type(`${newItem}{enter}`);
});
