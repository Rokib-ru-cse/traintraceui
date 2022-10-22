import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveYourLocationComponent } from './save-your-location.component';

describe('SaveYourLocationComponent', () => {
  let component: SaveYourLocationComponent;
  let fixture: ComponentFixture<SaveYourLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveYourLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveYourLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
