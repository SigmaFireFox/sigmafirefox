import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonConfig,
  ContentComponent,
  HeaderComponent,
  ImageComponent,
  NavlinkConfig,
} from '@sigmafirefox/widgets';
import { FormComponent, FooterComponent } from '@sigmafirefox/components';
import { ButtonComponent } from '@sigmafirefox/widgets';
import {
  AuthenticationService,
  NavigationService,
  RouteRelationshipType,
} from '@sigmafirefox/services';
import {
  AlternativeActions,
  RegisterForm,
  ThirdPartyAuthProviders,
} from './register.model';
import {
  altActionButtons,
  buttonContent,
  footerConfig,
  formConfig,
  header,
  imageConfig,
  thirdPartyButtons,
  topContent,
} from './register.config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    FormComponent,
    ContentComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
  ],
  providers: [AuthenticationService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  // Configs
  imageConfig = imageConfig;
  topContent = topContent;
  header = header;
  thirdPartyButtons = thirdPartyButtons;
  formConfig = formConfig;
  buttonContent = buttonContent;
  altActionButtons = altActionButtons;
  footerConfig = footerConfig;

  constructor(
    private auth: AuthenticationService,
    private navService: NavigationService
  ) {}

  onThirdPartyButtonClicked(button: ButtonConfig) {
    switch (button.name) {
      case ThirdPartyAuthProviders.Google: {
        this.auth
          .signInWithGoogle()
          .then(() => console.log('Signed in with Google'));
        break;
      }
      // Need to register the app before we can use these 3rd prt providers
      // case ThirdPartyAuthProviders.Facebook : {
      //   this.auth.signInWithFacebook()
      //   break
      // }
    }
  }

  onFormSubmitted(form: FormGroup) {
    const registerForm: RegisterForm = form.value;
    this.auth
      .registerWithEmail(registerForm.email, registerForm.password)
      .then(() => console.log('Registered with email'))
      // No Catch as this is handled by the shared error handling service
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
    }
  }
}
