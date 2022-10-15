import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelScreenComponent } from './model-screen.component';

describe('ModelScreenComponent', () => {
  let component: ModelScreenComponent;
  let fixture: ComponentFixture<ModelScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
