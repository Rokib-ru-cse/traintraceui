import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadYourLocationComponent } from './load-your-location.component';

describe('LoadYourLocationComponent', () => {
  let component: LoadYourLocationComponent;
  let fixture: ComponentFixture<LoadYourLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadYourLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadYourLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
