import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubicSiteRoutingModule } from './pubic-site-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { firebaseConfig } from '../../environment/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PubicSiteRoutingModule,
    LandingComponent,
    SignInComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  providers: [
    {provide: 'firebaseConfig', useValue: firebaseConfig}, 
  ]
})
export class PubicSiteModule { }
