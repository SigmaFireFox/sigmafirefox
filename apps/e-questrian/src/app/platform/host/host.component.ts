import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@sigmafirefox/components';
import { navbarConfig } from './host.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
})
export class HostComponent {
  navbarConfig = navbarConfig
}
