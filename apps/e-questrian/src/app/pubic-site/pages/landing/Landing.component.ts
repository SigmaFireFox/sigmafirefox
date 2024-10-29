import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CtaBannerComponent,
  CtaBannerConfig,
  DisplayCardContentType,
  DisplayCardSize,
  NavbarComponent,
  NavbarConfig,
  StarSize,
} from '@sigmafirefox/components';
import {
  ButtonSize,
  ButtonType,
  ContentFontSize,
  HeaderFontSize,
  IconSize,
} from '@sigmafirefox/widgets';
import { RouteRelationshipType } from '@sigmafirefox/services';
import {
  CardGridComponent,
  CardGridConfig,
  CarouselComponent,
  CarouselConfig,
} from '@sigmafirefox/compositions';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CtaBannerComponent,
    CardGridComponent,
    CarouselComponent,
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
        content: { size: ContentFontSize.Medium, content: ['Contact'] },
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
      url: 'landing-banners.png',
      alt: 'A tractor',
      height: '300x',
    },
    contentLeft: '70%',
    header: { size: HeaderFontSize.Large, content: 'Welcome to eQuestrian' },
    content: {
      size: ContentFontSize.Large,
      content: ['The future of eQuestrian business management'],
    },
    buttons: [
      {
        name: 'sign-in',
        text: 'Sign in',
        type: ButtonType.Primary,
        size: ButtonSize.Small,
      },
      {
        name: 'register',
        text: 'Register',
        type: ButtonType.Secondary,
        size: ButtonSize.Small,
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
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Medium,
              rating: 5,
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
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Medium,
              rating: 5,
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
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Medium,
              rating: 5,
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
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Medium,
              rating: 5,
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
          {
            type: DisplayCardContentType.StarRater,
            starRaterConfig: {
              size: StarSize.Medium,
              rating: 5,
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
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Card 1`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'This is small content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
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
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Card 1`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'This is small content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
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
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Card 1`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'This is small content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
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
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Card 1`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'This is small content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
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
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Card 1`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'This is small content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
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
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Card 1`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'This is small content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
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
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Card 1`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'This is small content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
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
              name: 'polymer',
            },
          },
          {
            type: DisplayCardContentType.Header,
            headerConfig: {
              size: HeaderFontSize.Small,
              content: `Card 1`,
            },
          },
          {
            type: DisplayCardContentType.Content,
            contentConfig: {
              size: ContentFontSize.Small,
              content: [
                'This is small content',
                "It's typically set up in paragraphs",
                'The paragraphs should self organise and have a nice padding',
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

  showContactUsModal = false;

  navlinkClicked(navlinkName: string) {
    switch (navlinkName) {
      case 'contact': {
        this.showContactUsModal = true;
        break;
      }
    }
  }
}
