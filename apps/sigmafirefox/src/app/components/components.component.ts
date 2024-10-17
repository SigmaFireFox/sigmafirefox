import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LogoComponent,
  FieldComponent,
  StarRaterComponent,
  DisplayCardComponent,
  DisplayCardConfig,
  DisplayCardContentType,
  DisplayCardSize,
  FieldConfig,
  FieldType,
  LabelPosition,
  LogoConfig,
  StarRaterConfig,
  StarSize,
  CtaBannerComponent,
  CtaBannerConfig,
} from '@sigmafirefox/components';
import {
  IconSize,
  HeaderFontSize,
  ContentFontSize,
  ButtonType,
  ButtonSize,
} from '@sigmafirefox/widgets';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LogoComponent,
    FieldComponent,
    StarRaterComponent,
    DisplayCardComponent,
    CtaBannerComponent,
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {
  title = 'sigmafirefox';

  logoConfig: LogoConfig = {
    logo: {
      paths: [
        'M21.2,72.04c4.63,1.68,11.49-2.09,22-14.74c3.98,1.47,7.1,4.73,8.46,11.72c2.58,13.31-1.52,21.83-7.22,33.54 c-1.06,2.17-2.12,4.32-3.15,6.48h81.29l-0.25-0.2c5.55-39.24-31.98-58.51-4.56-46.4c-11.78-28.52-48.09-37.8-22.47-34.84 C82.12,15.55,65.5,8.89,41.87,13.1C36.85,5.77,24.84-9.86,28.52,8.86L22.5,3.49l-0.33,18.89C15.01,27.84,11.1,46.03,5.56,57.86 c-4.74,4.7-6.56,10.32-5.05,19.06C7.89,86.43,19.54,84.07,21.2,72.04L21.2,72.04z',
      ],
    },
    text: 'Some name here',
  };

  fieldConfigs: FieldConfig[] = [
    {
      type: FieldType.Input,
      label: 'An input field - External label',
      labelPosition: LabelPosition.External,
    },
    {
      type: FieldType.Textarea,
      label: 'An textarea field - External label',
      labelPosition: LabelPosition.External,
    },
    {
      type: FieldType.Input,
      label: 'An input field - Internal label',
      labelPosition: LabelPosition.Internal,
    },
    {
      type: FieldType.Textarea,
      label: 'An textarea field - Internal label',
      labelPosition: LabelPosition.Internal,
    },
  ];

  starRaterConfig5: StarRaterConfig = {
    size: StarSize.Medium,
    rating: 5,
  };
  starRaterConfig4pt5: StarRaterConfig = {
    size: StarSize.Medium,
    rating: 4.5,
  };
  starRaterConfig4pt4: StarRaterConfig = {
    size: StarSize.Medium,
    rating: 4.4,
  };

  displayCardConfigs: DisplayCardConfig[] = [
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
      size: DisplayCardSize.Small,
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
            content: 'This is a small header',
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
            content: 'This is a small header',
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
  ];

  ctaBannerConfig: CtaBannerConfig = {
    image: {
      url: 'https://picsum.photos/id/85/1600/240',
      alt: 'A tractor',
    },
    contentLeft: '60%',
    header: { size: HeaderFontSize.Medium, content: 'This is the header' },
    content: {
      size: ContentFontSize.Small,
      content: [
        'This is small content',
        "It's typically set up in paragraphs",
        'The paragraphs should self organise and have a nice padding',
      ],
    },
    buttons: [
      {
        name: 'button',
        text: 'Primary Small',
        type: ButtonType.Primary,
        size: ButtonSize.Small,
      },
      {
        name: 'button',
        text: 'Secondary Small',
        type: ButtonType.Secondary,
        size: ButtonSize.Small,
      },
    ],
  };
}
