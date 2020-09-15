import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewFamilyComponent } from './admin-view-family.component';

describe('AdminViewFamilyComponent', () => {
  let component: AdminViewFamilyComponent;
  let fixture: ComponentFixture<AdminViewFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
