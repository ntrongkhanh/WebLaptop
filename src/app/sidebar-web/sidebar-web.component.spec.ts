import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWebComponent } from './sidebar-web.component';

describe('SidebarWebComponent', () => {
  let component: SidebarWebComponent;
  let fixture: ComponentFixture<SidebarWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
