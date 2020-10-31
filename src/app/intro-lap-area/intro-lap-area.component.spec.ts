import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroLapAreaComponent } from './intro-lap-area.component';

describe('IntroLapAreaComponent', () => {
  let component: IntroLapAreaComponent;
  let fixture: ComponentFixture<IntroLapAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroLapAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroLapAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
