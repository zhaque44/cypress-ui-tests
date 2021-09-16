describe('Imagine Homepage ', () => {
    beforeEach(() => {

      cy.setCookie('production', Cypress.env('TOKEN'), {
        domain: 'production-domain',
      })
      
      cy.visit('https://base-url/page#')
      cy.wait(18000)
    })
  
    it('loads ', () => {
      cy.get('a[href*="/path/to/link"]').should('be.visible')
      cy.get("#test-section").scrollIntoView().should("be.visible")
      cy.get("#test-section > div > button").click()
      
      const choices = cy.get(".some-drop-down li")
      
      choices.should("have.length", 3)
      choices.should((element) => {
        expect(element.get(0).innerText).to.eq('first selection')
        expect(element.get(1).innerText).to.eq('second selection')
        expect(element.get(2).innerText).to.eq('third selection')
      })
    })
  })
