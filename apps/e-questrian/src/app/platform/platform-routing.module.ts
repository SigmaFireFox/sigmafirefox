import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './host/host.component';
import { UserManagementModule } from './modules/user-management/user-management.module';

const routes: Routes = [
  { path: '', component: HostComponent, title: 'e-Questrian', children: [
    {
      path: 'dashboard',
      loadChildren: () => UserManagementModule,
      title: 'e-Questrian | Dashboard'
    },
    {
      path: 'user',
      loadChildren: () => UserManagementModule,
      title: 'e-Questrian | Profile'
    },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
