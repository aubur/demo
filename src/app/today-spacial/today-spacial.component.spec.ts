import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySpacialComponent } from './today-spacial.component';

describe('TodaySpacialComponent', () => {
  let component: TodaySpacialComponent;
  let fixture: ComponentFixture<TodaySpacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaySpacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySpacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
