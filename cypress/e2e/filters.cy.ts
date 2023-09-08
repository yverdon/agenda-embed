describe('Filters', () => {
  beforeEach(() => {
    cy.clock(new Date(2023, 8, 8), ['Date']);
  });

  it('displays categories within a dropdown', () => {
    cy.visit('/#/');

    cy.get('#filters-collapse').should('be.hidden');
    cy.contains('button', 'Filtrer').click();
    cy.get('#filters-collapse').should('be.visible');
    cy.contains('button', 'Filtrer').click();
    cy.get('#filters-collapse').should('be.hidden');
  });

  it('displays dates within a dropdown', () => {
    cy.visit('/#/');

    cy.get('#dates-collapse').should('be.hidden');
    cy.contains('button', 'Choisir une période').click();
    cy.get('#dates-collapse').should('be.visible');
    cy.contains('button', 'Choisir une période').click();
    cy.get('#dates-collapse').should('be.hidden');
  });

  it('closes filters when dates are open', () => {
    cy.visit('/#/');

    cy.get('#filters-collapse').should('be.hidden');
    cy.contains('button', 'Filtrer').click();
    cy.get('#filters-collapse').should('be.visible');
    cy.contains('button', 'Choisir une période').click();
    cy.get('#filters-collapse').should('be.hidden');
  });

  it('closes dates when filters are open', () => {
    cy.visit('/#/');

    cy.get('#dates-collapse').should('be.hidden');
    cy.contains('button', 'Choisir une période').click();
    cy.get('#dates-collapse').should('be.visible');
    cy.contains('button', 'Filtrer').click();
    cy.get('#dates-collapse').should('be.hidden');
  });

  it('persists filters in the URL', () => {
    cy.visit('/#/');

    cy.contains('button', 'Filtrer').click();
    cy.contains('label', 'Tous publics').click();
    cy.contains('label', 'Familles').click();
    cy.contains('label', 'Yverdon').click();

    cy.contains('button', 'Choisir une période').click();
    cy.contains('label:visible', 'Ce week-end').click();

    cy.get('#search').focus().type('matisse');

    cy.url().should(
      'include',
      '/#/?query=matisse&startsAt=2023-09-10&endsAt=2023-09-11&publics=1&publics=2&regions=7'
    );
  });

  it('sets initial filters based on the URL', () => {
    cy.visit(
      '/#/?query=lac&startsAt=2023-09-10&endsAt=2023-09-11&publics=1&publics=2&regions=7'
    );

    cy.contains('button', 'Filtrer').click();
    cy.contains('label', 'Tous publics')
      .find('input[type="checkbox"]')
      .should('be.checked');
    cy.contains('label', 'Familles')
      .find('input[type="checkbox"]')
      .should('be.checked');
    cy.contains('label', 'Jeunes')
      .find('input[type="checkbox"]')
      .should('not.be.checked');
    cy.contains('label', 'Yverdon')
      .find('input[type="checkbox"]')
      .should('be.checked');

    cy.contains('button', 'Choisir une période').click();
    cy.contains('label:visible', 'Ce week-end')
      .find('input[type="radio"]')
      .should('be.checked');
    cy.get('[name="starts-at"]').should('have.value', '2023-09-10');
    cy.get('[name="ends-at"]').should('have.value', '2023-09-11');

    cy.get('#search').should('have.value', 'lac');

    cy.contains('button', 'Du 10 au 11 sept. 2023').should('be.visible');
    cy.contains('button', '“lac”').should('be.visible');
    cy.contains('button', 'Tous publics').should('be.visible');
    cy.contains('button', 'Familles').should('be.visible');
    cy.contains('button', 'Yverdon').should('be.visible');

    cy.contains('1 Résultat').should('be.visible');
    cy.get('.card').should('have.length', 1);
  });

  it('allows to reset dates', () => {
    cy.visit('/#/?startsAt=2023-09-10&endsAt=2023-09-11');

    cy.contains('button', 'Choisir une période').click();
    cy.get('[name="starts-at"]').should('have.value', '2023-09-10');
    cy.get('[name="ends-at"]').should('have.value', '2023-09-11');

    cy.contains('button', 'Réinitialiser les dates').click();

    cy.get('[name="starts-at"]').should('have.value', '');
    cy.get('[name="ends-at"]').should('have.value', '');
  });

  it('allows to remove categories individually', () => {
    cy.visit('/#/?domains=3');

    cy.contains('button', 'Audiovisuel')
      .should('be.visible')
      .click()
      .should('not.exist');

    cy.url().should('not.include', '?domains=3');
  });

  it('allows to reset everything', () => {
    cy.visit(
      '/#/?query=lac&startsAt=2023-09-10&endsAt=2023-09-11&publics=1&publics=2&regions=7'
    );

    cy.contains('1 Résultat').should('be.visible');

    cy.contains('button', 'Réinitialiser les filtres')
      .should('be.visible')
      .click();

    cy.url().should(
      'not.include',
      'query=lac&startsAt=2023-09-10&endsAt=2023-09-11&publics=1&publics=2&regions=7'
    );

    cy.contains('button', 'Filtrer').click();
    cy.get('#filters-collapse input[type="checkbox"]').should('not.be.checked');

    cy.contains('button', 'Choisir une période').click();
    cy.get('#dates-collapse input[type="radio"]').should('not.be.checked');
    cy.get('[name="starts-at"]').should('have.value', '');
    cy.get('[name="ends-at"]').should('have.value', '');

    cy.get('#search').should('have.value', '');
  });
});
