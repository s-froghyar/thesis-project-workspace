import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugerinoComponent } from './augerino.component';

describe('AugerinoComponent', () => {
  let component: AugerinoComponent;
  let fixture: ComponentFixture<AugerinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AugerinoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AugerinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
