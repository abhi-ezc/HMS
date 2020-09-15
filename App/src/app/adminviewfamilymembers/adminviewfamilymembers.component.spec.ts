import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewfamilymembersComponent } from './adminviewfamilymembers.component';

describe('AdminviewfamilymembersComponent', () => {
  let component: AdminviewfamilymembersComponent;
  let fixture: ComponentFixture<AdminviewfamilymembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewfamilymembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewfamilymembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
