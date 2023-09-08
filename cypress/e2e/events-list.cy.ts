describe('Events List', () => {
  it('loads and display events on startup', () => {
    cy.visit('/#/');

    cy.contains('Chargement en cours…').should('be.visible');
    cy.contains('div', '10 Résultats').should('be.visible');
    cy.get('.card').should('have.length', 8);
  });

  it('provide a button to load more events', () => {
    cy.visit('/#/');

    cy.get('.card').should('have.length', 8);
    cy.contains('Charger plus de résultats').click();
    cy.get('.card').should('have.length', 10);
    cy.contains('Charger plus de résultats').should('not.exist');
  });

  it('displays the event details in the card', () => {
    cy.visit('/#/');

    cy.get('a[href="#/event/1"]')
      .should('contain', 'Castrum Festival')
      .and('contain', '24 août 2023')
      .and('contain', 'Centre ville d’Yverdon')
      .and('not.contain', 'Complet')
      .and('not.contain', 'Annulé');

    cy.get('a[href="#/event/1"] img').should(
      'have.attr',
      'src',
      '/uploads/castrum.jpg'
    );

    cy.get('a[href="#/event/2"]').should('contain', 'Complet');
    cy.get('a[href="#/event/4"]').should('contain', 'Annulé');
  });

  it('does not repeat month/year in dates', () => {
    cy.visit('/#/');

    cy.get('a[href="#/event/2"]').should('contain', 'Du 30 au 31 août 2023');
    cy.get('a[href="#/event/5"]').should(
      'contain',
      'Du 27 sept. au 10 oct. 2023'
    );
    cy.get('a[href="#/event/6"]').should(
      'contain',
      'Du 24 déc. 2023 au 15 janv. 2024'
    );
  });

  it('displays an empty message when there’s no events', () => {
    cy.visit('/#/?endsAt=2022-12-31');

    cy.contains(
      'Il n’y a actuellement aucun événement pour les critères sélectionnés.'
    );
  });

  it('displays featured events differently', () => {
    cy.visit('/#/');

    cy.get('a[href="#/event/1"]').should('have.class', 'card--featured');
  });

  it('opens the event detail and return with the previous scroll position', () => {
    cy.visit('/#/');

    cy.get('a[href="#/event/1"]').should('be.visible').scrollIntoView().click();

    cy.url().should('contain', '/#/event/1');

    cy.contains('a', 'Retour à la liste').click();

    cy.window().its('scrollY').should('equal', 149);
  });
});
