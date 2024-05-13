describe('Pruebas exploración de blogs ghost',  { 
    viewportHeight: 689.17,
    viewportWidth: 1030,},() => {
  it('login', () => {
    cy.visit('https://ghost-u4ew.onrender.com/ghost/#/setup/one')    
    cy.wait(1000)
    cy.screenshot('Ingresar pagina ghost')
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
    cy.screenshot('Ingresar Datos Login')
    cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
    cy.screenshot('Login')
    cy.url().should('include', '/dashboard')
    cy.screenshot('Vista Dashboard')
    cy.get('a[data-test-nav="explore"]').click()
    cy.wait(1000)    
    cy.url().should('include', '/explore')  
    cy.screenshot('Opción explore')
    cy.get('button[class="gh-nav-btn-search"]').click()
    cy.screenshot('Opción search')
    cy.get('input[class="gh-input-with-select-input"]').type('pruebas')
    cy.screenshot('Buscar pruebas')
    cy.get('li[class="ember-power-select-option"]').contains('Post Pruebas Automatizadas')
    cy.screenshot('Resultados búsqueda')
  })
})