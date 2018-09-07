describe('reaching the home page with no data', () => {
  it('has a loading header', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/me.json',
      response: []
    })
    cy.visit('http://localhost:5000/')
    cy.contains('Loading please wait')
  })
})

describe('reaching the home page with data', () => {
  it('has a list of from the response', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('Loading please wait')
    cy.contains('List of all People')
    cy.get('.list-items').first()
      .contains('Name: Marisa Casper')
  })
})
