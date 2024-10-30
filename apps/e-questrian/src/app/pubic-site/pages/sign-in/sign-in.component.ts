import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent, FooterComponent, FieldType, FooterConfig, FormConfig, LabelPosition } from '@sigmafirefox/components';
import {
  ImageComponent,
  ContentComponent,
  HeaderComponent,
  ButtonComponent,
  ButtonConfig,
  ButtonSize,
  ButtonType,
  ContentConfig,
  ContentFontSize,
  HeaderConfig,
  HeaderFontSize,
  ImageConfig,
} from '@sigmafirefox/widgets';
import { FormGroup } from '@angular/forms';
import { RouteRelationshipType } from '@sigmafirefox/services';

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
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  imageConfig: ImageConfig = {
    url: 'sign-in-side-image.png',
    alt: 'Register page side image',
    height: '100%',
    width: '50%',
    left: '50%',
  };

  topContent: ContentConfig = {
    size: ContentFontSize.Large,
    content: ['Welcome back'],
  };

  header: HeaderConfig = {
    size: HeaderFontSize.Large,
    content: 'Sign in',
  };

  thirdPartyButtons: ButtonConfig[] = [
    {
      name: 'facebook',
      text: 'Continue with Facebook',
      type: ButtonType.Secondary,
      size: ButtonSize.CTA_Large,
    },
    {
      name: 'apple',
      text: 'Continue with Apple',
      type: ButtonType.Secondary,
      size: ButtonSize.CTA_Large,
    },
  ];

  formConfig: FormConfig = {
    fields: [
      {
        name: 'Field1',
        config: {
          type: FieldType.Input,
          label: 'Email',
          labelPosition: LabelPosition.Internal,
        },
      },
      {
        name: 'Field1',
        config: {
          type: FieldType.Input,
          label: 'Password',
          labelPosition: LabelPosition.Internal,
        },
      },
    ],
    buttons: [
      {
        config: {
          name: 'register',
          text: 'Register',
          type: ButtonType.Primary,
          size: ButtonSize.CTA_Large,
        },
        isSubmit: true,
      },
    ],
  };

  buttonContent1: ContentConfig = {
    size: ContentFontSize.Medium,
    content: ['Not yet a registered user?'],
  };

  altActionButtons1: ButtonConfig[] = [
    {
      name: 'register',
      text: 'Register',
      type: ButtonType.Secondary,
      size: ButtonSize.CTA_Large,
    },
  ];

  buttonContent2: ContentConfig = {
    size: ContentFontSize.Medium,
    content: ['Forgot password?'],
  };

  altActionButtons2: ButtonConfig[] = [
    {
      name: 'forgot-password',
      text: 'Request reset password link',
      type: ButtonType.Secondary,
      size: ButtonSize.CTA_Large,
    },
  ];

  footerConfig: FooterConfig = {
    navlinks: [
      {
        relationship: RouteRelationshipType.Parent,
        route: '',
        content: { size: ContentFontSize.Medium, content: ['Features'] },
      },
      {
        relationship: RouteRelationshipType.Parent,
        route: '',
        content: { size: ContentFontSize.Medium, content: ['Testimonials'] },
      },
      {
        relationship: RouteRelationshipType.None,
        route: 'contact',
        content: { size: ContentFontSize.Medium, content: ['Contact us'] },
      },
    ],
    content: {
      size: ContentFontSize.Small,
      content: ['© 2024 SigmaFireFox. All rights reserved.'],
    },
  };

  onFormSubmitted(form: FormGroup) {
    console.log('Form submitted');
    console.log(form.value);
  }
}
