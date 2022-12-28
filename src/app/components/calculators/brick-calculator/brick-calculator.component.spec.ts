import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickCalculatorComponent } from './brick-calculator.component';

describe('BrickCalculatorComponent', () => {
  let component: BrickCalculatorComponent;
  let fixture: ComponentFixture<BrickCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrickCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrickCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
