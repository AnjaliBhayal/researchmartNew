import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorcharterComponent } from './investorcharter.component';

describe('InvestorcharterComponent', () => {
  let component: InvestorcharterComponent;
  let fixture: ComponentFixture<InvestorcharterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorcharterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorcharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
