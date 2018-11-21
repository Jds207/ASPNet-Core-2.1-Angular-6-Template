import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowTasksComponent } from './window-tasks.component';

describe('WindowTasksComponent', () => {
  let component: WindowTasksComponent;
  let fixture: ComponentFixture<WindowTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
