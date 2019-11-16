import { getGreeting } from '../support/app.po';

describe('point-exchange', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to point-exchange!');
  });
});
