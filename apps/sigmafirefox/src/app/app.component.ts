import { Component } from '@angular/core';
import {
  ContentFontSize,
  HeaderComponent,
  HeaderConfig,
  HeaderFontSize,
  NavlinkComponent,
} from '@sigmafirefox/widgets';
import { RouteRelationshipType } from '@sigmafirefox/services';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  FooterConfig,
  NavbarComponent,
  NavbarConfig,
} from '@sigmafirefox/components';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    NavlinkComponent,
    FooterComponent,
    NavbarComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  headerConfig: HeaderConfig = {
    size: HeaderFontSize.Large,
    content: 'Welcome to SigmaFireFox Library Sandbox',
  };

  sampleNavLinks = [
    {
      relationship: RouteRelationshipType.Child,
      route: 'widgets',
      content: { size: ContentFontSize.Medium, content: ['Widgets'] },
    },
    {
      relationship: RouteRelationshipType.Child,
      route: 'components',
      content: { size: ContentFontSize.Medium, content: ['Components'] },
    },
    {
      relationship: RouteRelationshipType.Child,
      route: 'forms',
      content: { size: ContentFontSize.Medium, content: ['Forms'] },
    },
    {
      relationship: RouteRelationshipType.Child,
      route: 'compositions',
      content: {
        size: ContentFontSize.Medium,
        content: ['Compositions'],
      },
    },
    {
      relationship: RouteRelationshipType.Child,
      route: 'modals',
      content: { size: ContentFontSize.Medium, content: ['Modals'] },
    },
  ];

  navbarConfig: NavbarConfig = {
    logo: {
      logo: {
        paths: [
          'M21.2,72.04c4.63,1.68,11.49-2.09,22-14.74c3.98,1.47,7.1,4.73,8.46,11.72c2.58,13.31-1.52,21.83-7.22,33.54 c-1.06,2.17-2.12,4.32-3.15,6.48h81.29l-0.25-0.2c5.55-39.24-31.98-58.51-4.56-46.4c-11.78-28.52-48.09-37.8-22.47-34.84 C82.12,15.55,65.5,8.89,41.87,13.1C36.85,5.77,24.84-9.86,28.52,8.86L22.5,3.49l-0.33,18.89C15.01,27.84,11.1,46.03,5.56,57.86 c-4.74,4.7-6.56,10.32-5.05,19.06C7.89,86.43,19.54,84.07,21.2,72.04L21.2,72.04z',
        ],
      },
      text: {
        size: HeaderFontSize.Medium,
        content: 'SigmaFireFox',
      },
    },
    navlinks: this.sampleNavLinks,
  };

  footerConfig: FooterConfig = {
    navlinks: this.sampleNavLinks,
    content: {
      size: ContentFontSize.Small,
      content: ['Copyright SigmaFireFox 2024'],
    },
  };
}
