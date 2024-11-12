import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './host/host.component';

const routes: Routes = [
  { path: '', component: HostComponent, title: 'e-Questrian', children: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
