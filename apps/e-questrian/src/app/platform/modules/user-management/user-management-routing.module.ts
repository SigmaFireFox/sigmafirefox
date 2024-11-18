import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileManagementComponent } from './component/profile-management.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileManagementComponent,
    title: 'e-Questrian | Profile Management',
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
