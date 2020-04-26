import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionSidebarComponent } from './section-sidebar.component';

@NgModule({
  declarations: [
    SectionSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SectionSidebarComponent
  ]
})
export class SectionSidebarModule { }
