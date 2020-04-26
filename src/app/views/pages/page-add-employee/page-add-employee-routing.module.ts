import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddEmployeeComponent } from './page-add-employee.component';

const routes: Routes = [
  {
    path: '',
    component: PageAddEmployeeComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAddEmployeeRoutingModule { }
