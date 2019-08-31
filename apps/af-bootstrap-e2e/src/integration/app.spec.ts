import { getGreeting } from '../support/app.po';

describe('af-bootstrap', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to af-bootstrap!');
  });
});
