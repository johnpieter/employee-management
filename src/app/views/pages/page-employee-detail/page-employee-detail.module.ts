import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageEmployeeDetailRoutingModule } from './page-employee-detail-routing.module';
import { PageEmployeeDetailComponent } from './page-employee-detail.component';
import { WidgetEmployeeDetailComponent } from '../../widgets/widget-employee-detail/widget-employee-detail.component';
import { SectionSidebarModule } from '../../sections/section-sidebar/section-sidebar.module';
import { SectionHeaderModule } from '../../sections/section-header/section-header.module';

@NgModule({
  declarations: [
    PageEmployeeDetailComponent,
    WidgetEmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    PageEmployeeDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule,
    SectionSidebarModule,
    SectionHeaderModule
  ],
  exports: [
    PageEmployeeDetailComponent,
  ]
})
export class PageEmployeeDetailModule { }
