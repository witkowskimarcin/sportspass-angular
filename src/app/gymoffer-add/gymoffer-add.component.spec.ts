import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymofferAddComponent } from './gymoffer-add.component';

describe('GymofferAddComponent', () => {
  let component: GymofferAddComponent;
  let fixture: ComponentFixture<GymofferAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymofferAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymofferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
