import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymOfferDetailAddComponent } from './gym-offer-detail-add.component';

describe('GymOfferDetailAddComponent', () => {
  let component: GymOfferDetailAddComponent;
  let fixture: ComponentFixture<GymOfferDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymOfferDetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymOfferDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
