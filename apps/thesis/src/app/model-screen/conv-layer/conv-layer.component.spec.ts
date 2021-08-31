import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvLayerComponent } from './conv-layer.component';

describe('ConvLayerComponent', () => {
  let component: ConvLayerComponent;
  let fixture: ComponentFixture<ConvLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
