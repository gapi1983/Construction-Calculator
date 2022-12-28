import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcavationCalculatorComponent } from './excavation-calculator.component';

describe('ExcavationCalculatorComponent', () => {
  let component: ExcavationCalculatorComponent;
  let fixture: ComponentFixture<ExcavationCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcavationCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcavationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
