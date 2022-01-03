import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeeDetailsComponent } from './single-employee-details.component';

describe('SingleEmployeeDetailsComponent', () => {
  let component: SingleEmployeeDetailsComponent;
  let fixture: ComponentFixture<SingleEmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEmployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
