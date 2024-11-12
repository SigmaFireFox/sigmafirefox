import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './host/host.component';
import { ProfileManagementModule } from './modules/profile-management/profile-management.module';

const routes: Routes = [
  { path: '', component: HostComponent, title: 'e-Questrian', children: [
    {
      path: 'profile',
      loadChildren: () => ProfileManagementModule,
      title: 'e-Questrian | Profile'
    },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
