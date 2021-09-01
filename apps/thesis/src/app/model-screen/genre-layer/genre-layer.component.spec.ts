import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreLayerComponent } from './genre-layer.component';

describe('GenreLayerComponent', () => {
  let component: GenreLayerComponent;
  let fixture: ComponentFixture<GenreLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
