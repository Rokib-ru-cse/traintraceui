import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeYourLocationComponent } from './see-your-location.component';

describe('SeeYourLocationComponent', () => {
  let component: SeeYourLocationComponent;
  let fixture: ComponentFixture<SeeYourLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeYourLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeYourLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
