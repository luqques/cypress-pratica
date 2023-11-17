describe('Acessar o Google e pesquisar coxinha', () => {
  it('Visitar o site Google', () => {
    cy.visit('https://google.com')

    cy.focused()
      .should('have.class', 'gLFyf')
  })

  it.only('Escrever no input', () => {
    const textoDigitado = 'coxinha'
    cy.visit('https://google.com')

    cy.get('.gLFyf')
      .type('coxinha')
      .should('have.value', textoDigitado)
  })
})