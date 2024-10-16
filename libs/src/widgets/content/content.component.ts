import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentConfig, ContentFontSize } from './content.model';

@Component({
  selector: 'sff-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  @Input() config: ContentConfig | undefined;

  customStyling: object | undefined;

  ngOnInit() {
    if (!this.config) return;
    let fontSize = '';
    switch (this.config.size) {
      case ContentFontSize.Small: {
        fontSize = '0.75rem';
        break;
      }
      case ContentFontSize.Medium: {
        fontSize = '1rem';
        break;
      }
      case ContentFontSize.Large: {
        fontSize = '1.25rem';
      }
    }

    this.customStyling = {
      'font-size': fontSize,
    };
  }
}
