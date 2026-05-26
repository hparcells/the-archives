describe('Smoke Tests', () => {
  it('home page renders', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'The Archives');
    cy.contains('Projects').should('be.visible');
    cy.contains('Now').should('be.visible');
  });

  it('projects page renders', () => {
    cy.visit('/projects');
    cy.get('h1').should('contain', 'Projects');
    cy.contains('Featured').should('be.visible');
  });

  it('now page renders', () => {
    cy.visit('/now');
    cy.get('h1').should('contain', 'Now');
  });

  it('background page renders', () => {
    cy.visit('/background');
    cy.get('h1').should('contain', 'Developer Background');
    cy.contains('Humble Beginnings').should('be.visible');
  });

  it('tools page renders', () => {
    cy.visit('/tools');
    cy.get('h1').should('contain', 'Tools and Workflow');
    cy.contains('Software').should('be.visible');
    cy.contains('Hardware').should('be.visible');
  });

  it('cool page renders', () => {
    cy.visit('/cool');
    cy.get('h1').should('contain', 'Cool People');
  });

  it('website page renders', () => {
    cy.visit('/website');
    cy.get('h1').should('contain', 'This Website');
    cy.contains('Version History').should('be.visible');
  });
});
