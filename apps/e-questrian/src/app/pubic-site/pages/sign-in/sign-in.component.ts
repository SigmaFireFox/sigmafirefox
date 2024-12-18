import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent, FooterComponent } from '@sigmafirefox/components';
import {
  ImageComponent,
  ContentComponent,
  HeaderComponent,
  ButtonComponent,
  ButtonConfig,
  NavlinkConfig,
} from '@sigmafirefox/widgets';
import { FormGroup } from '@angular/forms';
import {
  AuthenticationService,
  NavigationService,
  RouteRelationshipType,
} from '@sigmafirefox/services';
import {
  AlternativeActions,
  SignInForm,
  ThirdPartyAuthProviders,
} from './sign-in.model';
import {
  imageConfig,
  topContent,
  header,
  thirdPartyButtons,
  formConfig,
  buttonContent1,
  altActionButtons1,
  buttonContent2,
  altActionButtons2,
  footerConfig,
} from './sign-in.config';

@Component({
  selector: 'app-sign-in',
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
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  imageConfig = imageConfig;
  topContent = topContent;
  header = header;
  thirdPartyButtons = thirdPartyButtons;
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

  onThirdPartyButtonClicked(button: ButtonConfig) {
    switch (button.name) {
      case ThirdPartyAuthProviders.Google: {
        this.auth.signInWithGoogle().then(() => {
          console.log('Signed in with Google');
          this.navService.navTo({
            relationship: RouteRelationshipType.Sibling,
            route: '/platform',
          });
        });
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
    const signInForm: SignInForm = form.value;
    this.auth
      .signInWithEmail(signInForm.email, signInForm.password)
      .then(() => {
        console.log('Signed with email');
        this.navService.navTo({
          relationship: RouteRelationshipType.Sibling,
          route: '/platform',
        });
      })
      .catch((error) => console.log(error));
  }

  onAltActionButtonsClicked(button: ButtonConfig) {
    switch (button.name) {
      case AlternativeActions.Register: {
        this.navService.navTo({
          relationship: RouteRelationshipType.Sibling,
          route: 'register',
        } as NavlinkConfig);
        break;
      }
      case AlternativeActions.ForgotPassword: {
        this.navService.navTo({
          relationship: RouteRelationshipType.Sibling,
          route: 'forgot-password',
        } as NavlinkConfig);
        break;
      }
    }
  }
}
