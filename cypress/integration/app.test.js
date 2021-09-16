describe('Imagine Homepage ', () => {
    beforeEach(() => {

      cy.setCookie('production', Cypress.env('TOKEN'), {
        domain: 'velocity-np.ag',
      })
      
      cy.visit('https://base-url/page#')
      cy.wait(18000)
    })
  
    it('loads ', () => {
      cy.get('a[href*="/path/to/link"]').should('be.visible')
    })
  })
