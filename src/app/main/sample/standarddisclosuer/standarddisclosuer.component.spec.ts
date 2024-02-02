import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandarddisclosuerComponent } from './standarddisclosuer.component';

describe('StandarddisclosuerComponent', () => {
  let component: StandarddisclosuerComponent;
  let fixture: ComponentFixture<StandarddisclosuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandarddisclosuerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandarddisclosuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
