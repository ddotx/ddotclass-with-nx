import { async, TestBed } from '@angular/core/testing';
import { ValidatorsModule } from './validators.module';

describe('ValidatorsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ValidatorsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ValidatorsModule).toBeDefined();
  });
});
