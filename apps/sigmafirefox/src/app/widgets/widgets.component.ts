import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ButtonComponent,
  ContentComponent,
  HeaderComponent,
  IconComponent,
  SvgComponent,
  InputComponent,
  TextareaComponent,
  ImageComponent,
  ButtonConfig,
  ButtonSize,
  ButtonType,
  ContentConfig,
  ContentFontSize,
  HeaderConfig,
  HeaderFontSize,
  IconConfig,
  IconSize,
  SvgConfig,
  ImageConfig,
} from '@sigmafirefox/widgets';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    ContentComponent,
    HeaderComponent,
    IconComponent,
    SvgComponent,
    InputComponent,
    TextareaComponent,
    ImageComponent,
  ],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss',
})
export class WidgetsComponent {
  headerConfig: HeaderConfig = {
    size: HeaderFontSize.Large,
    content: 'Welcome to SigmaFireFox Library Sandbox',
  };

  headerConfigs: HeaderConfig[] = [
    {
      size: HeaderFontSize.Small,
      content: 'This is a small header',
    },
    {
      size: HeaderFontSize.Medium,
      content: 'This is a medium header',
    },
    {
      size: HeaderFontSize.Large,
      content: 'This is a large header',
    },
  ];

  buttonConfigs: ButtonConfig[] = [
    {
      name: 'button',
      text: 'Primary Small',
      type: ButtonType.Primary,
      size: ButtonSize.Small,
    },
    {
      name: 'button',
      text: 'Primary Medium',
      type: ButtonType.Primary,
      size: ButtonSize.Medium,
    },
    {
      name: 'button',
      text: 'Primary Large (100%) of available width',
      type: ButtonType.Primary,
      size: ButtonSize.Large,
    },
    {
      name: 'button',
      text: 'Secondary Small',
      type: ButtonType.Secondary,
      size: ButtonSize.Small,
    },
    {
      name: 'button',
      text: 'Secondary Medium',
      type: ButtonType.Secondary,
      size: ButtonSize.Medium,
    },
    {
      name: 'button',
      text: 'Secondary Large (100%) of available width',
      type: ButtonType.Secondary,
      size: ButtonSize.Large,
    },
  ];

  contentConfigs: ContentConfig[] = [
    {
      size: ContentFontSize.Small,
      content: [
        'This is small content',
        "It's typically set up in paragraphs",
        'The paragraphs should self organise and have a nice padding',
      ],
    },
    {
      size: ContentFontSize.Medium,
      content: [
        'This is medium content',
        "It's typically set up in paragraphs",
        'The paragraphs should self organise and have a nice padding',
      ],
    },
    {
      size: ContentFontSize.Large,
      content: [
        'This is large content',
        "It's typically set up in paragraphs",
        'The paragraphs should self organise and have a nice padding',
      ],
    },
  ];

  iconConfigs: IconConfig[] = [
    {
      size: IconSize.Small,
      name: 'home',
    },
    {
      size: IconSize.Medium,
      name: 'home',
    },
    {
      size: IconSize.Large,
      name: 'home',
    },
    {
      size: IconSize.XLarge,
      name: 'home',
    },
  ];

  svgConfig: SvgConfig = {
    paths: [
      'M21.2,72.04c4.63,1.68,11.49-2.09,22-14.74c3.98,1.47,7.1,4.73,8.46,11.72c2.58,13.31-1.52,21.83-7.22,33.54 c-1.06,2.17-2.12,4.32-3.15,6.48h81.29l-0.25-0.2c5.55-39.24-31.98-58.51-4.56-46.4c-11.78-28.52-48.09-37.8-22.47-34.84 C82.12,15.55,65.5,8.89,41.87,13.1C36.85,5.77,24.84-9.86,28.52,8.86L22.5,3.49l-0.33,18.89C15.01,27.84,11.1,46.03,5.56,57.86 c-4.74,4.7-6.56,10.32-5.05,19.06C7.89,86.43,19.54,84.07,21.2,72.04L21.2,72.04z',
    ],
  };

  imageConfig: ImageConfig = {
    url: 'https://picsum.photos/id/237/200/300',
    alt: 'A cute puppy',
  };
}
