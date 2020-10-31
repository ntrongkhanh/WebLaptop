import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLapAreaComponent } from './new-lap-area.component';

describe('NewLapAreaComponent', () => {
  let component: NewLapAreaComponent;
  let fixture: ComponentFixture<NewLapAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLapAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLapAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
