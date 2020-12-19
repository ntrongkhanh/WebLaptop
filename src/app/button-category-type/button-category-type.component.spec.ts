import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCategoryTypeComponent } from './button-category-type.component';

describe('ButtonCategoryTypeComponent', () => {
  let component: ButtonCategoryTypeComponent;
  let fixture: ComponentFixture<ButtonCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCategoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
