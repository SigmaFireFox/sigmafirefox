import {
  FormConfig,
  FieldType,
  LabelPosition,
  FormButtonAlignment,
  FooterConfig,
} from '@sigmafirefox/components';
import { RouteRelationshipType } from '@sigmafirefox/services';
import {
  ButtonConfig,
  ButtonSize,
  ButtonType,
  ContentConfig,
  ContentFontSize,
  HeaderConfig,
  HeaderFontSize,
  ImageConfig,
} from '@sigmafirefox/widgets';
import { ThirdPartyAuthProviders } from './register.model';

export const imageConfig: ImageConfig = {
  url: 'register-side-image.png',
  alt: 'Register page side image',
  height: '100%',
  width: '50%',
  left: '50%',
};

export const topContent: ContentConfig = {
  size: ContentFontSize.Large,
  content: ['Join our eQuestrian community'],
};

export const header: HeaderConfig = {
  size: HeaderFontSize.Large,
  content: 'Register',
};

export const thirdPartyButtons: ButtonConfig[] = [
  {
    name: ThirdPartyAuthProviders.Google,
    text: 'Continue with Google',
    type: ButtonType.Secondary,
    size: ButtonSize.CTA_Large,
  },
  // Need to register the app before we add other providers
  // {
  //   name: ThirdPartyAuthProviders.Facebook,
  //   text: 'Continue with Facebook',
  //   type: ButtonType.Secondary,
  //   size: ButtonSize.CTA_Large,
  // }
];

export const formConfig: FormConfig = {
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
      alignment: FormButtonAlignment.Full,
      isSubmit: true,
    },
  ],
};

export const buttonContent: ContentConfig = {
  size: ContentFontSize.Medium,
  content: ['Already a registered user?'],
};

export const altActionButtons: ButtonConfig[] = [
  {
    name: 'sign-in',
    text: 'Sign in',
    type: ButtonType.Secondary,
    size: ButtonSize.CTA_Large,
  },
];

export const footerConfig: FooterConfig = {
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
