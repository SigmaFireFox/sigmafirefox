import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageConfig } from './image.model';

@Component({
  selector: 'sff-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() config: ImageConfig | undefined;
}
