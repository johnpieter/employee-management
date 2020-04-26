import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/pages/page-home/page-home.module#PageHomeModule'
  },
  {
    path: 'login',
    loadChildren: './views/pages/page-login/page-login.module#PageLoginModule',
  },
  {
    path: 'add-employee',
    canActivate: [AuthGuard],
    loadChildren: './views/pages/page-add-employee/page-add-employee.module#PageAddEmployeeModule',
  },
  {
    path: 'employee-list',
    canActivate: [AuthGuard],
    loadChildren: './views/pages/page-employee-list/page-employee-list.module#PageEmployeeListModule',
  },
  {
    path: 'employee-detail',
    canActivate: [AuthGuard],
    loadChildren: './views/pages/page-employee-detail/page-employee-detail.module#PageEmployeeDetailModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
