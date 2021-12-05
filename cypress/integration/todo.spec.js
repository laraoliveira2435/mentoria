/// <reference types="cypress" />

describe('TODO MVC app', () => {
  beforeEach(() => {
    const todoItem = 'Walk the dog'

    cy.visit('/')
    cy.createToDoNewItem(todoItem)
  })

  it('should add new todo item', () => {
    cy.get('.view > label')
      .last()
      .should('have.text', todoItem)
  })

  it('should mark the item as completed', () => {
    cy.get('.toggle').click();
    cy.get(`li[class='todo completed']`).should('exist');
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
