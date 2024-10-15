import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoConfig } from './logo.model';
import { SvgComponent } from '../../widgets/svg/svg.component';

@Component({
  selector: 'sff-logo',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  @Input() config: LogoConfig | undefined;
}
