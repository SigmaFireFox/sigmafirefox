import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridConfig } from './card-grid.model';
import { DisplayCardComponent } from '../../components/display-card/display-card.component';

@Component({
  selector: 'sff-card-grid',
  standalone: true,
  imports: [CommonModule, DisplayCardComponent],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss',
})
export class CardGridComponent {
  @Input() config: CardGridConfig | undefined;
}
