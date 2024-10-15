import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgConfig } from './svg.model';

@Component({
  selector: 'sff-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss',
})
export class SvgComponent {
  @Input() config: SvgConfig | undefined;
}
