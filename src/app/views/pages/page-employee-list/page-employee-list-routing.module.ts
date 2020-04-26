import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageEmployeeListComponent } from './page-employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageEmployeeListComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageEmployeeListRoutingModule { }
