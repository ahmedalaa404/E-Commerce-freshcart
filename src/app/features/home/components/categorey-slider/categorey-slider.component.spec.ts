import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreySliderComponent } from './categorey-slider.component';

describe('CategoreySliderComponent', () => {
  let component: CategoreySliderComponent;
  let fixture: ComponentFixture<CategoreySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoreySliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoreySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
