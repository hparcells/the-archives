import SegmentedControl from '@/components/ui/SegmentedControl';

const data = [
  { label: 'All', value: 'all' },
  { label: 'Professional', value: 'professional' },
  { label: 'Personal', value: 'personal' }
];

describe('SegmentedControl', () => {
  it('renders all options', () => {
    cy.mount(<SegmentedControl data={data} />);
    data.forEach((item) => {
      cy.contains('button', item.label).should('be.visible');
    });
  });

  it('defaults to the first option in uncontrolled mode', () => {
    cy.mount(<SegmentedControl data={data} />);
    cy.contains('button', 'All').should('have.class', 'text-yellow-500');
    cy.contains('button', 'Professional').should('not.have.class', 'text-yellow-500');
  });

  it('updates active option when clicked in uncontrolled mode', () => {
    cy.mount(<SegmentedControl data={data} />);
    cy.contains('button', 'Professional').click();
    cy.contains('button', 'Professional').should('have.class', 'text-yellow-500');
    cy.contains('button', 'All').should('not.have.class', 'text-yellow-500');
  });

  it('calls onChange with the correct value when clicked', () => {
    const onChange = cy.stub().as('onChange');
    cy.mount(
      <SegmentedControl
        data={data}
        onChange={onChange}
      />
    );
    cy.contains('button', 'Professional').click();
    cy.get('@onChange').should('have.been.calledWith', 'professional');
  });

  it('reflects the controlled value', () => {
    cy.mount(
      <SegmentedControl
        data={data}
        value='personal'
        onChange={cy.stub()}
      />
    );
    cy.contains('button', 'Personal').should('have.class', 'text-yellow-500');
    cy.contains('button', 'All').should('not.have.class', 'text-yellow-500');
  });

  it('does not change active option when controlled and clicked', () => {
    cy.mount(
      <SegmentedControl
        data={data}
        value='all'
        onChange={cy.stub()}
      />
    );
    cy.contains('button', 'Professional').click();
    cy.contains('button', 'All').should('have.class', 'text-yellow-500');
    cy.contains('button', 'Professional').should('not.have.class', 'text-yellow-500');
  });
});
