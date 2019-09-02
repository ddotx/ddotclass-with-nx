import { async, TestBed } from '@angular/core/testing';
import { ModelModule } from './model.module';

describe('ModelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModelModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ModelModule).toBeDefined();
  });
});
