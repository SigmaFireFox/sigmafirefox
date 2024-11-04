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
import { AlternativeActions } from './forgot-password.model';

export const imageConfig: ImageConfig = {
  url: 'forgot-password-side-image.png',
  alt: 'Forgot password page side image',
  height: '100%',
  width: '50%',
  left: '50%',
};

export const topContent: ContentConfig = {
  size: ContentFontSize.Large,
  content: ['Request a reset password link'],
};

export const header: HeaderConfig = {
  size: HeaderFontSize.Large,
  content: 'Forgotten password',
};

export const formConfig: FormConfig = {
  fields: [
    {
      name: 'email',
      config: {
        type: FieldType.Input,
        label: 'Email',
        labelPosition: LabelPosition.Internal,
      },
    },
  ],
  buttons: [
    {
      config: {
        name: 'send-reset-link',
        text: 'Send reset link',
        type: ButtonType.Primary,
        size: ButtonSize.CTA_Large,
      },
      alignment: FormButtonAlignment.Full,
      isSubmit: true,
    },
  ],
};

export const confirmationContent: ContentConfig = {
  size: ContentFontSize.Large,
  content: [
    'Thank you providing your email address.',
    'Should your email be linked to a registered account, \
    a reset password will be sent to your email address \
    shortly. If you can not find such email, be sure to \
    check your spam folder'
  ],
};

export const buttonContent1: ContentConfig = {
  size: ContentFontSize.Medium,
  content: ['Remembered your password?'],
};

export const altActionButtons1: ButtonConfig[] = [
  {
    name: AlternativeActions.SignIn,
    text: 'Sign in',
    type: ButtonType.Secondary,
    size: ButtonSize.CTA_Large,
  },
];

export const buttonContent2: ContentConfig = {
  size: ContentFontSize.Medium,
  content: ['Not actually registered yet?'],
};

export const altActionButtons2: ButtonConfig[] = [
  {
    name: AlternativeActions.Register,
    text: 'Register',
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
