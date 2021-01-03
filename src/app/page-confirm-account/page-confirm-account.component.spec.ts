import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfirmAccountComponent } from './page-confirm-account.component';

describe('PageConfirmAccountComponent', () => {
  let component: PageConfirmAccountComponent;
  let fixture: ComponentFixture<PageConfirmAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConfirmAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConfirmAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
