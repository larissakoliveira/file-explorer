describe('Tree Node', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the root directory', () => {
    cy.get('[data-testid="tree-node"]').should('exist')
  })

  it('should expand/collapse directories', () => {
    // Store the initial count of tree nodes before expanding
    cy.get('[data-testid="tree-node"]').then(($nodesBefore) => {
      const initialLength = $nodesBefore.length;

      // Click the content area of the first node to expand it
      cy.get('.tree-node-content').first().click()

      // Wait for the expansion to complete and ensure there are more nodes
      cy.get('[data-testid="tree-node"]').should('have.length.greaterThan', initialLength)

      // Click again to collapse the directory
      cy.get('.tree-node-content').first().click()

      // Ensure the number of nodes returns to the initial count (collapsed state)
      cy.get('[data-testid="tree-node"]').should('have.length', initialLength)
    })
  })

  it('should allow file deletion', () => {
    // Get initial count of nodes
    let initialLength;
    cy.get('[data-testid="tree-node"]')
      .then(($nodesBefore) => {
        initialLength = $nodesBefore.length;
        // First expand the root node to see its children
        cy.get('.tree-node-content').first().click();
      });

    // Find a non-project node (which should have a remove button)
    cy.get('[data-testid="tree-node"]')
      .find('.name.nodes') // Find nodes with class 'nodes' (non-project nodes)
      .parent('.tree-node-content')
      .first()
      .within(() => {
        // Click the remove button without forcing show
        cy.get('button.remove-button').click({force: true});
      });
    
    // Wait for the API call to complete and verify one node was removed
    cy.get('[data-testid="tree-node"]')
      .should('have.length.lessThan', initialLength)
      .and(($nodesAfter) => {
        expect($nodesAfter.length).to.equal(initialLength - 1);
      });
  });
})
