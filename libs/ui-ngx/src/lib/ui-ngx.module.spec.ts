import { async, TestBed } from '@angular/core/testing';
import { UiNgxModule } from './ui-ngx.module';

describe('UiNgxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiNgxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiNgxModule).toBeDefined();
  });
});
