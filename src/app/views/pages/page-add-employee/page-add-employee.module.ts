import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageAddEmployeeRoutingModule } from './page-add-employee-routing.module';
import { PageAddEmployeeComponent } from './page-add-employee.component';
import { WidgetAddEmployeeComponent } from '../../widgets/widget-add-employee/widget-add-employee.component';
import { SectionSidebarModule } from '../../sections/section-sidebar/section-sidebar.module';
import { SectionHeaderModule } from '../../sections/section-header/section-header.module';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    PageAddEmployeeComponent,
    WidgetAddEmployeeComponent
  ],
  imports: [
    CommonModule,
    PageAddEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule,
    SectionSidebarModule,
    SectionHeaderModule,
    MyDatePickerModule
  ],
  exports: [
    PageAddEmployeeComponent,
  ]
})
export class PageAddEmployeeModule { }
