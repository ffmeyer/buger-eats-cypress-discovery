



describe('Home page',()=>{
     it('app deve estar online', ()=> {
         cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
     })
} )