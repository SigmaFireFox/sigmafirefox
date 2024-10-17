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
import { FooterComponent, FooterConfig } from '@sigmafirefox/components';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavlinkComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  headerConfig: HeaderConfig = {
    size: HeaderFontSize.Large,
    content: 'Welcome to SigmaFireFox Library Sandbox',
  };

  footerConfig: FooterConfig = {
    navlinks: [
      {
        relationship: RouteRelationshipType.Child,
        route: 'components',
        content: { size: ContentFontSize.Medium, content: ['View Components'] },
      },
      {
        relationship: RouteRelationshipType.Child,
        route: 'widgets',
        content: { size: ContentFontSize.Medium, content: ['View Widgets'] },
      },
      {
        relationship: RouteRelationshipType.Child,
        route: 'forms',
        content: { size: ContentFontSize.Medium, content: ['View Forms'] },
      },
    ],
    content: {
      size: ContentFontSize.Small,
      content: ['Copyright SigmaFireFox 2024'],
    },
  };
}
