import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIntroduceComponent } from './product-introduce.component';

describe('ProductIntroduceComponent', () => {
  let component: ProductIntroduceComponent;
  let fixture: ComponentFixture<ProductIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIntroduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
