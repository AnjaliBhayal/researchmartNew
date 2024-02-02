import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporategovernanceComponent } from './corporategovernance.component';

describe('CorporategovernanceComponent', () => {
  let component: CorporategovernanceComponent;
  let fixture: ComponentFixture<CorporategovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporategovernanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporategovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
