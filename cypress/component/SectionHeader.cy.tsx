import SectionHeader from '@/components/SectionHeader';

describe('SectionHeader', () => {
  it('renders leftText', () => {
    cy.mount(<SectionHeader leftText='Featured' />);
    cy.contains('Featured').should('be.visible');
  });

  it('renders rightText when provided', () => {
    cy.mount(
      <SectionHeader
        leftText='Featured'
        rightText='3 hidden'
      />
    );
    cy.contains('3 hidden').should('be.visible');
  });

  it('does not render rightText when not provided', () => {
    cy.mount(<SectionHeader leftText='Featured' />);
    cy.contains('3 hidden').should('not.exist');
  });

  it('calls onLeftTextClick when left text is clicked', () => {
    const onLeftTextClick = cy.stub().as('onLeftTextClick');
    cy.mount(
      <SectionHeader
        leftText='Featured'
        onLeftTextClick={onLeftTextClick}
      />
    );
    cy.contains('Featured').click();
    cy.get('@onLeftTextClick').should('have.been.calledOnce');
  });

  it('calls onRightTextClick when right text is clicked', () => {
    const onRightTextClick = cy.stub().as('onRightTextClick');
    cy.mount(
      <SectionHeader
        leftText='Featured'
        rightText='3 hidden'
        onRightTextClick={onRightTextClick}
      />
    );
    cy.contains('3 hidden').click();
    cy.get('@onRightTextClick').should('have.been.calledOnce');
  });
});
