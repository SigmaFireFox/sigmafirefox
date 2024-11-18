import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
import { SettingsManagementComponent } from './components/settings-management/settings-management.component';
import { LogOutComponent } from './components/log-out/log-out.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileManagementComponent,
    title: 'e-Questrian | Profile Management',
  },
  {
    path: 'settings',
    component: SettingsManagementComponent,
    title: 'e-Questrian | Settings Management',
  },
  {
    path: 'log-out',
    component: LogOutComponent,
    title: 'e-Questrian | Log-out',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
