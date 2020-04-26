import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageEmployeeListRoutingModule } from './page-employee-list-routing.module';
import { PageEmployeeListComponent } from './page-employee-list.component';
import { WidgetEmployeeListComponent } from '../../widgets/widget-employee-list/widget-employee-list.component';
import { SectionSidebarModule } from '../../sections/section-sidebar/section-sidebar.module';
import { SectionHeaderModule } from '../../sections/section-header/section-header.module';

@NgModule({
  declarations: [
    PageEmployeeListComponent,
    WidgetEmployeeListComponent
  ],
  imports: [
    CommonModule,
    PageEmployeeListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule,
    SectionSidebarModule,
    SectionHeaderModule
  ],
  exports: [
    PageEmployeeListComponent,
  ]
})
export class PageEmployeeListModule { }
