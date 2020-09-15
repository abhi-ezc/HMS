import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewTasksComponent } from './admin-view-tasks.component';

describe('AdminViewTasksComponent', () => {
  let component: AdminViewTasksComponent;
  let fixture: ComponentFixture<AdminViewTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
