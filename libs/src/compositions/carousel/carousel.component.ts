import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselConfig } from './carousel.model';
import { CardGridConfig } from '../card-grid/card-grid.model';
import { CardGridComponent } from '../card-grid/card-grid.component';
import { IconComponent } from '../../widgets/icon/icon.component';
import { IconConfig, IconSize } from '../../widgets/icon/icon.model';

@Component({
  selector: 'sff-carousel',
  standalone: true,
  imports: [CommonModule, CardGridComponent, IconComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() config: CarouselConfig | undefined;

  start = 0;
  end = 0;

  prevIcon: IconConfig = {
    size: IconSize.Small,
    name: 'keyboard_arrow_left'
  }
  
  nextIcon: IconConfig = {
    size: IconSize.Small,
    name: 'keyboard_arrow_right'
  }

  ngOnInit(){
    if (!this.config) return
    this.end = this.config.itemsDisplayed
  }

  getCards(): CardGridConfig {
    if (!this.config) return {cards: []};
    if (this.start < this.end) {
      return {
        cards: this.config.cards.slice(this.start, this.end)
      };
    } else {
      return {
        cards: [
          ...this.config.cards.slice(this.start, this.config.cards.length),
          ...this.config.cards.slice(0, this.end + 1)
        ]
      };
    }
  }

  getPrev() {
    if (!this.config) return;
    this.start = this.start === 0 ? this.config.cards.length : this.start - 1;
    this.end = this.end === 0 ? this.config.cards.length : this.end - 1;
  }

  getNext() {
    if (!this.config) return;
    this.start = this.start + 1 > this.config.cards.length ? 0 : this.start + 1;
    this.end = this.end + 1 > this.config.cards.length ? 0 : this.end + 1;
  }
}
