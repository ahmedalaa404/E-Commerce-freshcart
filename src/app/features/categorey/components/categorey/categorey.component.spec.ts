import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreyComponent } from './categorey.component';

describe('CategoreyComponent', () => {
  let component: CategoreyComponent;
  let fixture: ComponentFixture<CategoreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoreyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
