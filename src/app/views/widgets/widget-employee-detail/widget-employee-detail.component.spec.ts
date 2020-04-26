import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEmployeeDetailComponent } from './widget-employee-detail.component';

describe('WidgetEmployeeDetailComponent', () => {
  let component: WidgetEmployeeDetailComponent;
  let fixture: ComponentFixture<WidgetEmployeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEmployeeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
