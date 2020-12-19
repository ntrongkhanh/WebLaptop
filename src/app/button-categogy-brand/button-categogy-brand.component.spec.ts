import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCategogyBrandComponent } from './button-categogy-brand.component';

describe('ButtonCategogyBrandComponent', () => {
  let component: ButtonCategogyBrandComponent;
  let fixture: ComponentFixture<ButtonCategogyBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCategogyBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCategogyBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
