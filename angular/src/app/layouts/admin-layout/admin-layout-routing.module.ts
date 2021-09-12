import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from '../../dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
  //   resolve: {
  //     dashboard_details: AdminDashboardResolver
  //  },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
