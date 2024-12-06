import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from '../../components/navigation-menu/navigation-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { SideNavConfig } from './side-nav.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sff-side-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatIcon, NavigationMenuComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  @Input() sideNavConfig: SideNavConfig | undefined
}
