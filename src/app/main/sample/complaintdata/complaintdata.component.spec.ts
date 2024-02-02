import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintdataComponent } from './complaintdata.component';

describe('ComplaintdataComponent', () => {
  let component: ComplaintdataComponent;
  let fixture: ComponentFixture<ComplaintdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
