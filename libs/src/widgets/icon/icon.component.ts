import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { IconConfig, IconSize } from './icon.model';


@Component({
  selector: 'sff-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent implements OnInit {
  @Input() config: IconConfig | undefined;

  customStyling: object | undefined

  ngOnInit(){
    if (!this.config) return
    let fontSize = ''
    switch (this.config.size) {
      case IconSize.XLarge: {
        fontSize = '3.75rem'
        break
      }
      case IconSize.Large: {
        fontSize = '3rem'
        break
      }
      case IconSize.Medium: {
        fontSize = '2.25rem'
        break
      }
      case IconSize.Small: {
        fontSize = '1.5rem'
      }
    }

    this.customStyling = {
      'font-size': fontSize,
    }
  }
}
