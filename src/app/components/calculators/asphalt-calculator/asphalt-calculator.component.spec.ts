import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsphaltCalculatorComponent } from './asphalt-calculator.component';

describe('AsphaltCalculatorComponent', () => {
  let component: AsphaltCalculatorComponent;
  let fixture: ComponentFixture<AsphaltCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsphaltCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsphaltCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
