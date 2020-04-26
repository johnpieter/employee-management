import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmployeeListComponent } from './page-employee-list.component';

describe('PageEmployeeListComponent', () => {
  let component: PageEmployeeListComponent;
  let fixture: ComponentFixture<PageEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
