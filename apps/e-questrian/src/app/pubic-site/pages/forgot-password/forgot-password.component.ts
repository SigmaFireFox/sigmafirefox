import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  ButtonConfig,
  ContentComponent,
  HeaderComponent,
  ImageComponent,
  NavlinkConfig,
} from '@sigmafirefox/widgets';
import {
  altActionButtons1,
  altActionButtons2,
  buttonContent1,
  buttonContent2,
  footerConfig,
  formConfig,
  header,
  imageConfig,
  topContent,
} from './forgot-password.config';
import { FooterComponent, FormComponent } from '@sigmafirefox/components';
import { FormGroup } from '@angular/forms';
import {
  AuthenticationService,
  NavigationService,
  RouteRelationshipType,
} from '@sigmafirefox/services';
import { AlternativeActions, ForgotPasswordForm } from './forgot-password.model';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    ButtonComponent,
    FormComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  // Configs
  imageConfig = imageConfig;
  topContent = topContent;
  header = header;
  formConfig = formConfig;
  buttonContent1 = buttonContent1;
  altActionButtons1 = altActionButtons1;
  buttonContent2 = buttonContent2;
  altActionButtons2 = altActionButtons2;
  footerConfig = footerConfig;

  constructor(
    private auth: AuthenticationService,
    private navService: NavigationService
  ) {}

  onFormSubmitted(form: FormGroup) {
    const forgotPasswordForm: ForgotPasswordForm = form.value;
    this.auth
      .resetPassword(forgotPasswordForm.email)
      .then(() => console.log('Reset password email sent'))
      .catch((error) => console.log(error));
  }

  onAltActionButtonsClicked(button: ButtonConfig) {
    switch (button.name) {
      case AlternativeActions.SignIn: {
        this.navService.navTo({
          relationship: RouteRelationshipType.Sibling,
          route: 'sign-in',
        } as NavlinkConfig);
        break;
      }
      case AlternativeActions.Register : {
        this.navService.navTo({
          relationship: RouteRelationshipType.Sibling,
          route: 'register',
        } as NavlinkConfig);
        break;
      }
    }
  }
}
