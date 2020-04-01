import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymOfferComponent } from './gymoffer.component';

describe('GymOfferComponent', () => {
  let component: GymOfferComponent;
  let fixture: ComponentFixture<GymOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
