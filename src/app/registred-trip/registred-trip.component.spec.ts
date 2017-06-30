import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistredTripComponent } from './registred-trip.component';

describe('RegistredTripComponent', () => {
  let component: RegistredTripComponent;
  let fixture: ComponentFixture<RegistredTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistredTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistredTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
