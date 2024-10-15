import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent, LogoConfig } from '@sigmafirefox/components';
import {
  ButtonComponent,
  ButtonConfig,
  ContentComponent,
  ContentConfig,
  ContentFontSize,
  HeaderComponent,
  HeaderConfig,
  HeaderFontSize,
  IconComponent,
  IconConfig,
  IconSize,
  SvgComponent,
  SvgConfig,
} from '@sigmafirefox/widgets';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ButtonComponent,
    ContentComponent,
    HeaderComponent,
    IconComponent,
    SvgComponent,
    LogoComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'sigmafirefox';

  headerConfig: HeaderConfig = {
    size: HeaderFontSize.Medium,
    content: 'Welcome to SigmaFireFox Library Sandbox',
  };

  buttonConfig: ButtonConfig = {
    name: 'button',
    text: 'Test',
  };

  contentConfig: ContentConfig = {
    size: ContentFontSize.Medium,
    content: [
      'The is content',
      "It's typically set up in paragraphs",
      'The paragraphs should self organise and have a nice padding',
    ],
  };

  iconConfig: IconConfig = {
    size: IconSize.Medium,
    name: 'home',
  };

  svgConfig: SvgConfig = {
    paths: [
      'M21.2,72.04c4.63,1.68,11.49-2.09,22-14.74c3.98,1.47,7.1,4.73,8.46,11.72c2.58,13.31-1.52,21.83-7.22,33.54 c-1.06,2.17-2.12,4.32-3.15,6.48h81.29l-0.25-0.2c5.55-39.24-31.98-58.51-4.56-46.4c-11.78-28.52-48.09-37.8-22.47-34.84 C82.12,15.55,65.5,8.89,41.87,13.1C36.85,5.77,24.84-9.86,28.52,8.86L22.5,3.49l-0.33,18.89C15.01,27.84,11.1,46.03,5.56,57.86 c-4.74,4.7-6.56,10.32-5.05,19.06C7.89,86.43,19.54,84.07,21.2,72.04L21.2,72.04z',
    ],
  };

  logoConfig: LogoConfig = {
    logo: this.svgConfig,
    text: 'Some name here'
  }
}
