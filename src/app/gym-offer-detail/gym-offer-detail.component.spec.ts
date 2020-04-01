import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymOfferDetailComponent } from './gym-offer-detail.component';

describe('GymOfferDetailComponent', () => {
  let component: GymOfferDetailComponent;
  let fixture: ComponentFixture<GymOfferDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymOfferDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymOfferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
