import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatorydisclosuresComponent } from './regulatorydisclosures.component';

describe('RegulatorydisclosuresComponent', () => {
  let component: RegulatorydisclosuresComponent;
  let fixture: ComponentFixture<RegulatorydisclosuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatorydisclosuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulatorydisclosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
