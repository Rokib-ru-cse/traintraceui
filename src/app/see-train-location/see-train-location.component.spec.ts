import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTrainLocationComponent } from './see-train-location.component';

describe('SeeTrainLocationComponent', () => {
  let component: SeeTrainLocationComponent;
  let fixture: ComponentFixture<SeeTrainLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTrainLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeTrainLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
