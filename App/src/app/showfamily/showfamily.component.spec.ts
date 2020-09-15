import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfamilyComponent } from './showfamily.component';

describe('ShowfamilyComponent', () => {
  let component: ShowfamilyComponent;
  let fixture: ComponentFixture<ShowfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
