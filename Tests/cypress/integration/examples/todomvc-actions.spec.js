/// <reference types="cypress"/>
/*
  it('should be able to add a new todo to the list', () => {
      cy.visit('http://todomvc-app-for-testing.surge.sh/' )
      cy.get('.new-todo').type('Study python {enter}')
      cy.get('label').should('have.text','Study python')
      cy.get('.toggle').should('not.be.checked')
      cy.get('.toggle').click()
      cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
      cy.contains('Clear').click()
      cy.get('.todo-list').should('not.have.descendants', 'li')
})

The next section shows a separation of the above test into
3 different tests.

Tests ought to be put into logical groups(describe groups)
*/
// putting tests in a describe group is how tests are grouped in mocha
//add .only to it to run only that test
describe('todo actions', () =>{
  beforeEach(() =>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/' )
    cy.get('.new-todo').type('Study python {enter}')
  })

    it('should be able to add a new to do the list', ()=> {
    
    cy.get('label').should('have.text','Study python')
    cy.get('.toggle').should('not.be.checked')
  
  })
  
    
    it('should be able to mark todo as done', ()=> {
      cy.get('.toggle').click()
      cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
      
    })
    
    it('should be able to clear completed todos', ()=>{
      cy.get('.toggle').click()
      cy.contains('Clear').click()
      cy.get('.todo-list').should('not.have.descendants', 'li')
    })
    
  })
  
  

