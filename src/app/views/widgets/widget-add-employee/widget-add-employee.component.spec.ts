import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAddEmployeeComponent } from './widget-add-employee.component';

describe('WidgetAddEmployeeComponent', () => {
  let component: WidgetAddEmployeeComponent;
  let fixture: ComponentFixture<WidgetAddEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetAddEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
