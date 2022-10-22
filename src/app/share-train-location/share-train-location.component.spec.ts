import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTrainLocationComponent } from './share-train-location.component';

describe('ShareTrainLocationComponent', () => {
  let component: ShareTrainLocationComponent;
  let fixture: ComponentFixture<ShareTrainLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareTrainLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareTrainLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
