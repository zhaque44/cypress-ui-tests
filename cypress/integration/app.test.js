describe('Imagine Homepage ', () => {
    beforeEach(() => {

      cy.setCookie('imagine-np', Cypress.env('IMAGINE_TOKEN'), {
        domain: 'velocity-np.ag',
      })
      
      cy.visit('https://velocity-np.ag/imagine#')
      cy.wait(18000)
    })
  
    it('loads ', () => {
      cy.get('a[href*="/imagine/directory/albums"]').should('be.visible')
    })
  })