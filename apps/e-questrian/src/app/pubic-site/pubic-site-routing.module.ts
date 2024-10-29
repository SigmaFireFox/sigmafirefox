import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent, title: 'e-Questrian' },
  { path: 'sign-in', component: SignInComponent, title: 'e-Questrian | Sign in' },
  { path: 'register', component: RegisterComponent, title: 'e-Questrian | Register' },
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'e-Questrian | Forgot Password' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubicSiteRoutingModule { }
