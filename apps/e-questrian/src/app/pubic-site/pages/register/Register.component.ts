import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonConfig,
  ButtonSize,
  ButtonType,
  ContentComponent,
  ContentConfig,
  ContentFontSize,
  HeaderComponent,
  HeaderConfig,
  HeaderFontSize,
  ImageComponent,
  ImageConfig,
} from '@sigmafirefox/widgets';
import { FormGroup } from '@angular/forms';
import {
  FormConfig,
  FieldType,
  LabelPosition,
  FormComponent,
} from '@sigmafirefox/components';
import { ButtonComponent } from '@sigmafirefox/widgets';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    FormComponent,
    ContentComponent,
    HeaderComponent,
    ButtonComponent
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  imageConfig: ImageConfig = {
    url: 'register-side-image.png',
    alt: 'Register page side image',
    height: '100%',
    width: '50%',
    left: '50%',
  };

  topContent: ContentConfig = {
    size: ContentFontSize.Large,
    content: ['Join our eQuestrian community'],
  };

  header: HeaderConfig = {
    size: HeaderFontSize.Large,
    content: 'Register'
  }

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
    }
  ]

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

  buttonContent: ContentConfig = {
    size: ContentFontSize.Medium,
    content: ['Already a registered user?'],
  };

  altActionButtons: ButtonConfig[] = [
    {
      name: 'sign-in',
      text: 'Sign in',
      type: ButtonType.Secondary,
      size: ButtonSize.CTA_Large,
    },
  ]


  onFormSubmitted(form: FormGroup) {
    console.log('Form submitted');
    console.log(form.value);
  }
}
