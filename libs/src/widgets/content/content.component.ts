import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentConfig } from './content.model';

@Component({
  selector: 'sff-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() config: ContentConfig | undefined;
}
