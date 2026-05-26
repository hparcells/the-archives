describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('internal links', () => {
    const links = [
      { title: 'Projects', href: '/projects', heading: 'Projects' },
      { title: 'Now', href: '/now', heading: 'Now' },
      { title: 'Developer Background', href: '/background', heading: 'Developer Background' },
      { title: 'Tools and Workflow', href: '/tools', heading: 'Tools and Workflow' },
      { title: 'This Website', href: '/website', heading: 'This Website' },
      { title: 'Cool People', href: '/cool', heading: 'Cool People' }
    ];

    links.forEach(({ title, href, heading }) => {
      it(`"${title}" navigates to ${href}`, () => {
        cy.contains('a', title).click();
        cy.get('h1').should('contain', heading);
      });
    });
  });

  describe('external links', () => {
    it('"Blog" has correct href and opens in a new tab', () => {
      cy.contains('a', 'Blog')
        .should('have.attr', 'href', 'https://blog.hunterparcells.com/')
        .and('have.attr', 'target', '_blank');
    });

    it('"Support / Ko-fi" has correct href and opens in a new tab', () => {
      cy.contains('a', 'Support / Ko-fi')
        .should('have.attr', 'href', 'https://ko-fi.com/hunterparcells')
        .and('have.attr', 'target', '_blank');
    });
  });
});
