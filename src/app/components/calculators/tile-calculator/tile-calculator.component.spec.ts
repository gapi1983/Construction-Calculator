import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCalculatorComponent } from './tile-calculator.component';

describe('TileCalculatorComponent', () => {
  let component: TileCalculatorComponent;
  let fixture: ComponentFixture<TileCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
