import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentationsComponent } from './augmentations.component';

describe('AugmentationsComponent', () => {
  let component: AugmentationsComponent;
  let fixture: ComponentFixture<AugmentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugmentationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugmentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
