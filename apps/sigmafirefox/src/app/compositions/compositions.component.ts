import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardGridComponent,
  CardGridConfig,
  CarouselComponent,
  CarouselConfig,
} from '@sigmafirefox/compositions';
import {
  DisplayCardSize,
  DisplayCardContentType,
  StarSize,
  DisplayCardConfig,
} from '@sigmafirefox/components';
import {
  IconSize,
  HeaderFontSize,
  ContentFontSize,
} from '@sigmafirefox/widgets';

@Component({
  selector: 'app-compositions',
  standalone: true,
  imports: [CommonModule, CardGridComponent, CarouselComponent],
  templateUrl: './compositions.component.html',
  styleUrl: './compositions.component.scss',
})
export class CompositionsComponent implements OnInit {
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

  cardGridMediumConfig: CardGridConfig = {
    cards: [],
  };

  cardGridSmallConfig: CardGridConfig = {
    cards: [],
  };

  cardGridSmallTransparentConfig: CardGridConfig = {
    cards: [],
  };

  carouselConfig: CarouselConfig = {
    itemsDisplayed: 5,
    cards: [],
  };

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.cardGridMediumConfig.cards.push(this.displayCardConfigs[0]);
      this.cardGridSmallConfig.cards.push(this.displayCardConfigs[1]);
      this.cardGridSmallTransparentConfig.cards.push(
        this.displayCardConfigs[2]
      );

      this.carouselConfig.cards.push({
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
              content: `Card ${i}`,
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
      });
    }
  }
}
