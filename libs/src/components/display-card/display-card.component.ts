import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DisplayCardConfig,
  DisplayCardContentType,
  DisplayCardSize,
} from './display-card.model';
import { IconComponent } from '../../widgets/icon/icon.component';
import { HeaderComponent } from '../../widgets/header/header.component';
import { ContentComponent } from '../../widgets/content/content.component';
import { StarRaterComponent } from '../star-rater/star-rater.component';

@Component({
  selector: 'sff-display-card',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    HeaderComponent,
    ContentComponent,
    StarRaterComponent,
  ],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss',
})
export class DisplayCardComponent implements OnInit {
  @Input() config: DisplayCardConfig | undefined;

  displayCardContentType = DisplayCardContentType;
  customStyling: {[key: string]: string} = {};

  ngOnInit() {
    if (!this.config) return;
    let height = '';
    let width = '';
    switch (this.config.size) {
      case DisplayCardSize.Small: {
        height = '12rem';
        width = '9rem';
        break;
      }
      case DisplayCardSize.Medium: {
        height = '18rem';
        width = '15rem';
        break;
      }
      case DisplayCardSize.Large: {
        height = '18rem';
        width = '15rem';
      }
    }

    this.customStyling = {
      height: height,
      width: width,
    };

    if (this.config.isTransparent) {
      this.customStyling['background-color'] = 'transparent'
    } else {
      this.customStyling['box-shadow'] = '0 0 10px 1px rgba(0, 0, 0, 0.25)'
    }
  }
}
