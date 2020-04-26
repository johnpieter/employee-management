import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEmployeeListComponent } from './widget-employee-list.component';

describe('WidgetEmployeeListComponent', () => {
  let component: WidgetEmployeeListComponent;
  let fixture: ComponentFixture<WidgetEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
