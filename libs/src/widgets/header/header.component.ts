import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderConfig, HeaderFontSize } from './header.model';

@Component({
  selector: 'sff-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() config: HeaderConfig | undefined;

  customStyling: object | undefined

  ngOnInit(){
    if (!this.config) return
    let fontSize = ''
    let headerMargin = ''
    switch (this.config.size) {
      case HeaderFontSize.Large: {
        fontSize = '2rem'
        headerMargin = '0.75rem 0'
        break
      }
      case HeaderFontSize.Medium: {
        fontSize = '1.5rem'
        headerMargin = '0.50rem 0'
        break
      }
      case HeaderFontSize.Small: {
        fontSize = '0.75rem'
        headerMargin = '0.25rem 0'
      }
    }

    this.customStyling = {
      'font-size': fontSize,
      'margin': headerMargin,
    }
  }
}
