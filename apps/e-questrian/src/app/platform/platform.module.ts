import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { AuthenticationService } from '@sigmafirefox/services';
import { firebaseConfig } from '../../environment/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlatformRoutingModule,
  ],
  providers: [
    AuthenticationService,
    {provide: 'firebaseConfig', useValue: firebaseConfig}, 
  ]
})
export class PlatformModule { }
