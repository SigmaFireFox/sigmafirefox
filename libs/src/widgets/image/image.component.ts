import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageConfig } from './image.model';

@Component({
  selector: 'sff-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent implements OnInit {
  @Input() config: ImageConfig | undefined;
  customStyling: { [key: string]: string } = {};

  ngOnInit() {
    console.log(this.config)
    if (!this.config) return;
    if (this.config.height) this.customStyling['height'] = this.config.height;
    if (this.config.width) this.customStyling['width'] = this.config.width;
    if (this.config.rounded) this.customStyling['border-radius'] = '1rem';
  }
}
