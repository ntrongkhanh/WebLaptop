import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoAndPaymentMethodComponent } from './page-info-and-payment-method.component';

describe('PageInfoAndPaymentMethodComponent', () => {
  let component: PageInfoAndPaymentMethodComponent;
  let fixture: ComponentFixture<PageInfoAndPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInfoAndPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfoAndPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
