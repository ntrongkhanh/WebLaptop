import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopInCartComponent } from './laptop-in-cart.component';

describe('LaptopInCartComponent', () => {
  let component: LaptopInCartComponent;
  let fixture: ComponentFixture<LaptopInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopInCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
