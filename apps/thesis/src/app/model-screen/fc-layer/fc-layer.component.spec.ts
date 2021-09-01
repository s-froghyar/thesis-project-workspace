import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcLayerComponent } from './fc-layer.component';

describe('FcLayerComponent', () => {
  let component: FcLayerComponent;
  let fixture: ComponentFixture<FcLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
