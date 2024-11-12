import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardConfig } from './profile-card.model';

@Component({
  selector: 'sff-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() config: ProfileCardConfig | undefined;

}
