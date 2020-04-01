import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymofferEditComponent } from './gymoffer-edit.component';

describe('GymofferEditComponent', () => {
  let component: GymofferEditComponent;
  let fixture: ComponentFixture<GymofferEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymofferEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymofferEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
