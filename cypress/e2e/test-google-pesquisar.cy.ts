describe('Acessar o Google', () => {
  const textoDigitado = 'viacredi'
  const linkDesejado = 'https://google.com'

  it('Escrever o texto desejado no input', () => {
    cy.visit(linkDesejado)

    cy.get('#APjFqb')
      .type(textoDigitado)
      .should('have.value', textoDigitado)
      .type('{enter}')
      
    cy.get('.MUFPAc > :nth-child(2) > a')
      .click()
  })  
})