describe('Event', () => {
  it('displays all the event information', () => {
    cy.visit('/#/event/1');

    cy.contains('h2', 'Castrum Festival');
    cy.contains('24 août 2023');

    cy.contains(
      'Découvrez la première édition de festival hip-hop Source Concept, le 15 septembre à la salle de La Marive.'
    );
    cy.contains('Centre-ville d’Yverdon-les-Bains Théâtre Benno Besson');
    cy.contains(
      'À l’exception du concert de Niklas Paschburg au Temple et du brunch du dimanche, les événements du festival sont gratuits.'
    );
    cy.contains(
      'a[href="https://infomaniak.events/shop/EKGwwgxiNR/"][target="_blank"]',
      'infomaniak.events'
    );

    cy.contains('h3', 'Horaires').should('be.visible');
    cy.contains('14.08: Apéritif de bienvenue dès 18h');

    cy.contains('h3', 'Publics').should('be.visible');
    cy.contains('.pill', 'Tous publics');

    cy.contains('h3', 'Régions').should('be.visible');
    cy.contains('.pill', 'Yverdon');

    cy.contains('h3', 'Types').should('be.visible');
    cy.contains('.pill', 'Concert');
    cy.contains('.pill', 'Spectacle');
    cy.contains('.pill', 'Festival');

    cy.contains('h3', 'Domaines').should('be.visible');
    cy.contains('.pill', 'Art vivant');
    cy.contains('.pill', 'Audiovisuel');

    cy.get('img[src="/uploads/castrum.jpg"]').should('be.visible');

    cy.contains('h3', 'Organisateur').should('be.visible');
    cy.contains('Association Castrum & Cie');
    cy.contains('Avenue des Sports 5 1400 Yverdon-les-Bains');
    cy.contains('+41 24 423 64 20');
    cy.contains('a[href="mailto:info@le-castrum.ch"]', 'info@le-castrum.ch');
    cy.contains(
      'a[href="https://www.le-castrum.ch/"][target="_blank"]',
      'le-castrum.ch'
    );
  });

  it('displays the full status', () => {
    cy.visit('/#/event/2');

    cy.contains('.badge', 'Complet').should('be.visible');
  });

  it('displays the cancelled status', () => {
    cy.visit('/#/event/4');

    cy.contains('.badge', 'Annulé').should('be.visible');
  });

  it('doesn’t display empty fields', () => {
    cy.visit('/#/event/6');

    cy.get('.metadata').should('not.exist');
    cy.contains('h3', 'Horaires').should('not.exist');
    cy.contains('h3', 'Publics').should('not.exist');
    cy.contains('h3', 'Régions').should('not.exist');
    cy.contains('h3', 'Types').should('not.exist');
    cy.contains('h3', 'Domaines').should('not.exist');
    cy.contains('h3', 'Organisateur').should('not.exist');
  });
});
