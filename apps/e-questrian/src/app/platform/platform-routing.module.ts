import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './host/host.component';
import { UserManagementModule } from './modules/user-management/user-management.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ClientManagementComponent } from './modules/client-management/components/client-management/client-management.component';
import { AppointmentsComponent } from './modules/client-management/components/appointments/appointments.component';
import { LiveriesComponent } from './modules/operations-management/components/liveries/liveries.component';
import { LivestockComponent } from './modules/operations-management/components/livestock/livestock.component';
import { StaffComponent } from './modules/operations-management/components/staff/staff.component';
import { FinanceManagementModule } from './modules/finance-management/finance-management.module';

const routes: Routes = [
  { path: '', component: HostComponent, title: 'e-Questrian', children: [
    {
      path: '',
      component: DashboardComponent,
      title: 'e-Questrian | Dashboard'
    },
    {
      path: 'appointments',
      component: AppointmentsComponent,
      title: 'e-Questrian | Appointments'
    },
    {
      path: 'clients',
      component: ClientManagementComponent,
      title: 'e-Questrian | Client'
    },
    {
      path: 'finance',
      loadChildren: () => FinanceManagementModule,
      title: 'e-Questrian | Finance'
    },
    {
      path: 'liveries',
      component: LiveriesComponent,
      title: 'e-Questrian | Liveries'
    },
    {
      path: 'livestock',
      component: LivestockComponent,
      title: 'e-Questrian | Livestock'
    },
    {
      path: 'staff',
      component: StaffComponent,
      title: 'e-Questrian | Staff'
    },
    {
      path: 'user',
      loadChildren: () => UserManagementModule,
      title: 'e-Questrian | User'
    },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
