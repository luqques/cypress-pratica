describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')

    cy.contains('type')
  })
})