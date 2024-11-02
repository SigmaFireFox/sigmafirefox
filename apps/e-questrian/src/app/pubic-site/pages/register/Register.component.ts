import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonConfig,
  ContentComponent,
  HeaderComponent,
  ImageComponent,
  NavlinkConfig,
} from '@sigmafirefox/widgets';
import { FormGroup } from '@angular/forms';
import { FormComponent, FooterComponent } from '@sigmafirefox/components';
import { ButtonComponent } from '@sigmafirefox/widgets';
import {
  AuthenticationService,
  NavigationService,
  RouteRelationshipType,
} from '@sigmafirefox/services';
import { AlternativeActions, ThirdPartyAuthProviders } from './register.model';
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
        this.auth.signInWithGoogle().then(() => console.log('Boom'));
        break;
      }
      // Need to register the app before we can use these 3rd prt providers
      // case ThirdPartyAuthProviders.Facebook : {
      //   this.auth.signInWithFacebook()
      //   break
      // }
    }
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

  onFormSubmitted(form: FormGroup) {
    console.log('Form submitted');
    console.log(form.value);
  }
}
