import Checkbox from '@/components/ui/Checkbox';

describe('Checkbox', () => {
  it('renders with the given label', () => {
    cy.mount(
      <Checkbox
        label='Show hidden'
        checked={false}
        onChange={cy.stub()}
      />
    );
    cy.contains('Show hidden').should('be.visible');
  });

  it('is unchecked when checked prop is false', () => {
    cy.mount(
      <Checkbox
        label='Show hidden'
        checked={false}
        onChange={cy.stub()}
      />
    );
    cy.get('input[type="checkbox"]').should('not.be.checked');
  });

  it('is checked when checked prop is true', () => {
    cy.mount(
      <Checkbox
        label='Show hidden'
        checked={true}
        onChange={cy.stub()}
      />
    );
    cy.get('input[type="checkbox"]').should('be.checked');
  });

  it('calls onChange with true when clicked while unchecked', () => {
    const onChange = cy.stub().as('onChange');
    cy.mount(
      <Checkbox
        label='Show hidden'
        checked={false}
        onChange={onChange}
      />
    );
    cy.get('label').click();
    cy.get('@onChange').should('have.been.calledWith', true);
  });

  it('calls onChange with false when clicked while checked', () => {
    const onChange = cy.stub().as('onChange');
    cy.mount(
      <Checkbox
        label='Show hidden'
        checked={true}
        onChange={onChange}
      />
    );
    cy.get('label').click();
    cy.get('@onChange').should('have.been.calledWith', false);
  });

  it('applies yellow styling to the label when checked', () => {
    cy.mount(
      <Checkbox
        label='Show hidden'
        checked={true}
        onChange={cy.stub()}
      />
    );
    cy.contains('span', 'Show hidden').should('have.class', 'text-yellow-500');
  });

  it('does not apply yellow styling to the label when unchecked', () => {
    cy.mount(
      <Checkbox
        label='Show hidden'
        checked={false}
        onChange={cy.stub()}
      />
    );
    cy.contains('span', 'Show hidden').should('not.have.class', 'text-yellow-500');
  });
});
