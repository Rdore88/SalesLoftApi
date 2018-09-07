import $ from 'jquery'

describe('frequency button', () => {
  it('creates a list of letter frequencies', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('Loading please wait')
    cy.contains('List of all People')
    cy.get('#frequency-button')
      .click()
    cy.contains('i')
    cy.contains('15')
  })
  
  it('has a close list button', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('Loading please wait')
    cy.contains('List of all People')
    cy.get('#frequency-button')
      .click()
    cy.get('#close-list')
      .contains('Close List')
      .click()

    expect($('#frequency-button')).not.to.exist
  })
})
