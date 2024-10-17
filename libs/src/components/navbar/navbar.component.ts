import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NavbarConfig } from './navbar.model';
import { NavlinkComponent } from '../../widgets/navlink/navlink.component';
import { LogoComponent } from '../logo/logo.component';
@Component({
  selector: 'sff-navbar',
  standalone: true,
  imports: [CommonModule, NavlinkComponent, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() config: NavbarConfig | undefined;
}
