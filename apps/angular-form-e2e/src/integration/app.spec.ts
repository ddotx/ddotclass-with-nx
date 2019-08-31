import { getGreeting } from '../support/app.po';

describe('angular-form', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-form!');
  });
});
