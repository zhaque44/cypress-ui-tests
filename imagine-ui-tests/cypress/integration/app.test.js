describe('Homepage ', () => {
    beforeEach(() => {

      cy.setCookie('imagine-np', Cypress.env('TOKEN'), {
        domain: 'velocity-np.ag',
      })
      
      cy.visit('http://base-url')
      cy.wait(18000)
    })
  
    it('loads ', () => {
      cy.get('a[href*="/imagine/directory/albums"]').should('be.visible')
    })
  })
