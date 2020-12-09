import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddressOrderComponent } from './page-address-order.component';

describe('PageAddressOrderComponent', () => {
  let component: PageAddressOrderComponent;
  let fixture: ComponentFixture<PageAddressOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddressOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddressOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
