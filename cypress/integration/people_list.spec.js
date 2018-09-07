describe('reaching the home page', () => {
  it('has a heading', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('Loading please wait')
  })
})
