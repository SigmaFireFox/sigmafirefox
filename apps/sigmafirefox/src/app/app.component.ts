import { Component } from '@angular/core';
import {
  ContentFontSize,
  HeaderComponent,
  HeaderConfig,
  HeaderFontSize,
  NavlinkComponent,
  NavlinkConfig,
} from '@sigmafirefox/widgets';
import { RouteRelationshipType } from '@sigmafirefox/services';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavlinkComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  headerConfig: HeaderConfig = {
    size: HeaderFontSize.Large,
    content: 'Welcome to SigmaFireFox Library Sandbox',
  };

  componentsNavLink: NavlinkConfig = {
    relationship: RouteRelationshipType.Child,
    route: 'components',
    content: { size: ContentFontSize.Medium, content: ['View Components'] },
  };

  widgetsNavLink: NavlinkConfig = {
    relationship: RouteRelationshipType.Child,
    route: 'widgets',
    content: { size: ContentFontSize.Medium, content: ['View Widgets'] },
  };
}
