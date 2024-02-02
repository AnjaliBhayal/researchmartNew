import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievancehandlingComponent } from './grievancehandling.component';

describe('GrievancehandlingComponent', () => {
  let component: GrievancehandlingComponent;
  let fixture: ComponentFixture<GrievancehandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievancehandlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrievancehandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
