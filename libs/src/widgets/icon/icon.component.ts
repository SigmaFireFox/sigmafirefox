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
    let margin = ''
    switch (this.config.size) {
      case IconSize.XXLarge: {
        fontSize = '7rem'
        margin = '0.5rem'
        break
      }
      case IconSize.XLarge: {
        fontSize = '3.75rem'
        margin = '0.25rem'
        break
      }
      case IconSize.Large: {
        fontSize = '3rem'
        margin = '0.25rem'
        break
      }
      case IconSize.Medium: {
        fontSize = '2.25rem'
        margin = '0.25rem'
        break
      }
      case IconSize.Small: {
        fontSize = '1.5rem'
        margin = '0.25rem'
        break
      }
      case IconSize.XSmall: {
        fontSize = '1rem'
        margin = '0.1rem'
      }
        }

    this.customStyling = {
      'font-size': fontSize,
      'margin': margin
    }
  }
}
