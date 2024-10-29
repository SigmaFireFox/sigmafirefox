import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubicSiteRoutingModule } from './pubic-site-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SignInComponent } from './pages/sign-in/SignIn.component';
import { RegisterComponent } from './pages/register/Register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/ForgotPassword.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PubicSiteRoutingModule,
    LandingComponent,
    SignInComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ]
})
export class PubicSiteModule { }
