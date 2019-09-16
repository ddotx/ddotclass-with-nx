import { getGreeting } from '../support/app.po';

describe('form-multi', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to form-multi!');
  });
});
