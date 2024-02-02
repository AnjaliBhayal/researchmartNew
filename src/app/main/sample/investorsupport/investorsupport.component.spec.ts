import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsupportComponent } from './investorsupport.component';

describe('InvestorsupportComponent', () => {
  let component: InvestorsupportComponent;
  let fixture: ComponentFixture<InvestorsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorsupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
