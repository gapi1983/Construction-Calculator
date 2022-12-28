import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstLogComponent } from './const-log.component';

describe('ConstLogComponent', () => {
  let component: ConstLogComponent;
  let fixture: ComponentFixture<ConstLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
