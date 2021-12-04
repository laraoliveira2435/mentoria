/// <reference types="cypress" />

describe('TODO MVC app', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/vue/')
  })

  it.only('should add new todo item', () => {
    const newItem = 'Item 1'

    cy.createToDoNewItem(newItem);

    cy.get('.view > label')
      .last()
      .should('have.text', newItem)
  })

  it('should mark the item as completed', () => {
    const newItem = 'Item 2'

    cy.createToDoNewItem(newItem);

    cy.get('.toggle').click();
    cy.xpath(`//li[@class='todo completed']`).should('exist');
  })

  it('should delete a item', () => {
  })

  it('should edit a item', () => {
  })

  it('should filter for Active Items', () => {
  })

  it('should filter for Completed Items', () => {
  })

})
