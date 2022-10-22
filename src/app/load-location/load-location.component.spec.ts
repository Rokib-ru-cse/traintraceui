import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadLocationComponent } from './load-location.component';

describe('LoadLocationComponent', () => {
  let component: LoadLocationComponent;
  let fixture: ComponentFixture<LoadLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
