import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, HeaderConfig, HeaderFontSize } from '@sigmafirefox/widgets';

@Component({
  selector: 'app-profile-management',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.scss',
})
export class ProfileManagementComponent {
  headerConfig: HeaderConfig = {
      size: HeaderFontSize.Large,
      content: 'Profile Management'
  }
}
