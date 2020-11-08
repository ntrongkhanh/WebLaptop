import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCategoryPageComponent } from './body-category-page.component';

describe('BodyCategoryPageComponent', () => {
  let component: BodyCategoryPageComponent;
  let fixture: ComponentFixture<BodyCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
