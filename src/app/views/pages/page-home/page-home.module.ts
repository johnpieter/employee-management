import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';
import { SectionSidebarModule } from '../../sections/section-sidebar/section-sidebar.module';
import { SectionHeaderModule } from '../../sections/section-header/section-header.module';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    SectionSidebarModule,
    SectionHeaderModule
  ],
  exports: [
    PageHomeComponent
  ]
})
export class PageHomeModule { }
