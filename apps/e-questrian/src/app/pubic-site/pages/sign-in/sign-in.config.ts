import { FormConfig, FieldType, LabelPosition, FormButtonAlignment, FooterConfig } from "@sigmafirefox/components";
import { RouteRelationshipType } from "@sigmafirefox/services";
import { ButtonConfig, ButtonSize, ButtonType, ContentConfig, ContentFontSize, HeaderConfig, HeaderFontSize, ImageConfig } from "@sigmafirefox/widgets";

export const imageConfig: ImageConfig = {
  url: 'sign-in-side-image.png',
  alt: 'Register page side image',
  height: '100%',
  width: '50%',
  left: '50%',
};

export const topContent: ContentConfig = {
  size: ContentFontSize.Large,
  content: ['Welcome back'],
};

export const header: HeaderConfig = {
  size: HeaderFontSize.Large,
  content: 'Sign in',
};

export const thirdPartyButtons: ButtonConfig[] = [
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
        name: 'sign-in',
        text: 'Sign in',
        type: ButtonType.Primary,
        size: ButtonSize.CTA_Large,
      },
      alignment: FormButtonAlignment.Full,
      isSubmit: true,
    },
  ],
};

export const buttonContent1: ContentConfig = {
  size: ContentFontSize.Medium,
  content: ['Not yet a registered user?'],
};

export const altActionButtons1: ButtonConfig[] = [
  {
    name: 'register',
    text: 'Register',
    type: ButtonType.Secondary,
    size: ButtonSize.CTA_Large,
  },
];

export const buttonContent2: ContentConfig = {
  size: ContentFontSize.Medium,
  content: ['Forgot password?'],
};

export const altActionButtons2: ButtonConfig[] = [
  {
    name: 'forgot-password',
    text: 'Request reset password link',
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