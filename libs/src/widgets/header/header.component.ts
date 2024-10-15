import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderConfig } from './header.model';

@Component({
  selector: 'sff-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() config: HeaderConfig | undefined;

}
