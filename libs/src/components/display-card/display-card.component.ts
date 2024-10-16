import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DisplayCardConfig,
  DisplayCardContentType,
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
export class DisplayCardComponent {
  @Input() config: DisplayCardConfig | undefined;

  displayCardContentType = DisplayCardContentType;
}
