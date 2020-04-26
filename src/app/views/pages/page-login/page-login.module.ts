import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';
import { WidgetLoginComponent } from '../../widgets/widget-login/widget-login.component';
import { SectionSidebarModule } from '../../sections/section-sidebar/section-sidebar.module';
import { SectionHeaderModule } from '../../sections/section-header/section-header.module';

@NgModule({
  declarations: [
    PageLoginComponent,
    WidgetLoginComponent
  ],
  imports: [
    CommonModule,
    PageLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SectionSidebarModule,
    SectionHeaderModule
  ]
})
export class PageLoginModule { }
