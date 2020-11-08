import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryLapComponent } from './page-category-lap.component';

describe('PageCategoryLapComponent', () => {
  let component: PageCategoryLapComponent;
  let fixture: ComponentFixture<PageCategoryLapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCategoryLapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCategoryLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
