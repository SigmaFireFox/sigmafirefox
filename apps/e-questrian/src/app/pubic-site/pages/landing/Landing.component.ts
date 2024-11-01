import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CtaBannerComponent,
  CtaBannerConfig,
  DisplayCardContentType,
  DisplayCardSize,
  FieldType,
  FooterComponent,
  FooterConfig,
  FormButtonAlignment,
  LabelPosition,
  NavbarComponent,
  NavbarConfig,
  StarSize,
} from '@sigmafirefox/components';
import {
  ButtonConfig,
  ButtonSize,
  ButtonType,
  ContentFontSize,
  HeaderFontSize,
  IconSize,
} from '@sigmafirefox/widgets';
import {
  NavigationService,
  RouteRelationshipType,
} from '@sigmafirefox/services';
import {
  CardGridComponent,
  CardGridConfig,
  CarouselComponent,
  CarouselConfig,
  ModalComponent,
  ModalConfig,
  ModalContentType,
  ModalSize,
} from '@sigmafirefox/compositions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CtaBannerComponent,
    CardGridComponent,
    CarouselComponent,
    FooterComponent,
    ModalComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  navbarConfig: NavbarConfig = {
    logo: {
      logo: {
        paths: [
          'M21.2,72.04c4.63,1.68,11.49-2.09,22-14.74c3.98,1.47,7.1,4.73,8.46,11.72c2.58,13.31-1.52,21.83-7.22,33.54 c-1.06,2.17-2.12,4.32-3.15,6.48h81.29l-0.25-0.2c5.55-39.24-31.98-58.51-4.56-46.4c-11.78-28.52-48.09-37.8-22.47-34.84 C82.12,15.55,65.5,8.89,41.87,13.1C36.85,5.77,24.84-9.86,28.52,8.86L22.5,3.49l-0.33,18.89C15.01,27.84,11.1,46.03,5.56,57.86 c-4.74,4.7-6.56,10.32-5.05,19.06C7.89,86.43,19.54,84.07,21.2,72.04L21.2,72.04z',
        ],
      },
      text: {
        size: HeaderFontSize.Medium,
        content: 'eQuestrian',
      },
    },
    navlinks: [
      {
        relationship: RouteRelationshipType.None,
        route: 'contact',
        content: { size: ContentFontSize.Medium, content: ['Contact Us'] },
      },
      {
        relationship: RouteRelationshipType.Sibling,
        route: 'register',
        content: { size: ContentFontSize.Medium, content: ['Register'] },
      },
      {
        relationship: RouteRelationshipType.Sibling,
        route: 'sign-in',
        content: { size: ContentFontSize.Medium, content: ['Sign in'] },
      },
    ],
  };

  ctaBannerConfig: CtaBannerConfig = {
    image: {
      url: 'landing-banner-image.png',
      alt: 'Landing page banner image',
      height: '300px',
    },
    contentLeft: '70%',
    header: { size: HeaderFontSize.Large, content: 'Welcome to eQuestrian' },
    content: {
      size: ContentFontSize.Large,
      content: ['The eQuestrian business management system of choice'],
    },
    buttons: [
      {
        name: 'sign-in',
        text: 'Sign in',
        type: ButtonType.Primary,
        size: ButtonSize.CTA_Small,
      },
      {
        name: 'register',
        text: 'Register',
        type: ButtonType.Secondary,
        size: ButtonSize.CTA_Small,
      },
    ],
  };

  featureCards: CardGridConfig = {
    cards: [
      {
        size: DisplayCardSize.Medium,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Medium,
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Medium,
              content: 'This is a medium header',
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Medium,
              content: [
                'This is medium content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
              ],
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Medium,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Medium,
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Medium,
              content: 'This is a medium header',
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Medium,
              content: [
                'This is medium content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
              ],
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Medium,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Medium,
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Medium,
              content: 'This is a medium header',
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Medium,
              content: [
                'This is medium content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
              ],
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Medium,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Medium,
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Medium,
              content: 'This is a medium header',
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Medium,
              content: [
                'This is medium content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
              ],
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Medium,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Medium,
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Medium,
              content: 'This is a medium header',
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Medium,
              content: [
                'This is medium content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
              ],
            },
          },
        ],
      },
    ],
  };

  carouselConfig: CarouselConfig = {
    itemsDisplayed: 5,
    cards: [
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Emily R.`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                `"Fantastic tool! Simplified my stable's scheduling, \
                billing, and communication.`,
                `Highly recommend!"`,
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Sarah K.`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'Game-changer for my riding school! Easy to use, efficient, and organized.',
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Mark H`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'Love how this system streamlines my equine business operations. \
                Support team is top-notch!',
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Rachel G.`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                "Transformed my horse boarding facility's management. \
                User-friendly and customizable!",
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `James B`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'Impressive features, intuitive interface. \
                Increased productivity and reduced stress!',
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Karen W.`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'Excellent solution for managing lessons, clients, and horses.',
                'Highly satisfied!',
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Tom S`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'Streamlined my invoicing and payment processing. Thank you!',
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Lisa N`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'Fantastic customer support! System is easy to navigate and customize.',
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Michael T`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'Improved communication with clients and staff. Highly recommend!',
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
      {
        size: DisplayCardSize.Small,
        isTransparent: true,
        content: [
          {
            type: DisplayCardContentType.Icon,
            iconContent: {
              size: IconSize.Small,
              name: 'person_pin',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Christine L`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                "Effortlessly manages my equestrian center's daily operations. A must-have!",
              ],
            },
          },
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Small,
              rating: 5,
            },
          },
        ],
      },
    ],
  };

  footerConfig: FooterConfig = {
    navlinks: [],
    content: {
      size: ContentFontSize.Small,
      content: ['© 2024 SigmaFireFox. All rights reserved.'],
    },
  };

  contactUsModalConfig: ModalConfig = {
    size: ModalSize.Medium,
    content: [
      {
        type: ModalContentType.Header,
        headerConfig: {
          size: HeaderFontSize.Medium,
          content: 'Contact us',
        },
      },
      {
        type: ModalContentType.Form,
        formConfig: {
          fields: [
            {
              name: 'name',
              config: {
                label: 'Name',
                labelPosition: LabelPosition.External,
                type: FieldType.Input,
              },
            },
            {
              name: 'Email',
              config: {
                label: 'Email',
                labelPosition: LabelPosition.External,
                type: FieldType.Input,
              },
            },
            {
              name: 'message',
              config: {
                label: 'Message',
                labelPosition: LabelPosition.External,
                type: FieldType.Textarea,
              },
            },
          ],
          buttons: [
            {
              config: {
                name: 'submit',
                text: 'Submit',
                type: ButtonType.Primary,
                size: ButtonSize.Small,
              },
              alignment: FormButtonAlignment.Right,
              isSubmit: true,
            },
          ],
        },
      },
    ],
  };

  showContactUsModal = false;

  constructor(private navService: NavigationService) {}

  navlinkClicked(navlinkName: string) {
    switch (navlinkName) {
      case 'contact': {
        this.showContactUsModal = true;
        break;
      }
    }
  }

  onCTABannerButtonClicked(button: ButtonConfig) {
    switch (button.name) {
      case 'register': {
        this.navService.navTo({
          relationship: RouteRelationshipType.Child,
          route: 'register',
        });
        break;
      }
      case 'sign-in': {
        this.navService.navTo({
          relationship: RouteRelationshipType.Child,
          route: 'sign-in',
        });
        break;
      }
    }
  }

  onFormSubmitted(form: FormGroup) {
    console.log(form.value);
    this.showContactUsModal = false;
  }
}
