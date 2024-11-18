import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, NavigationMenuComponent } from '@sigmafirefox/components';
import { navbarConfig, navigationMenu } from './host.config';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '@sigmafirefox/services';
import { UserProfile } from 'firebase/auth';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    MatSidenavModule,
    MatIcon,
    NavigationMenuComponent
  ],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
})
export class HostComponent implements OnInit {
  navbarConfig = navbarConfig;
  navigationMenu = navigationMenu;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    if (!this.navbarConfig.profileCard) return;
    const profile = this.auth.userProfile as UserProfile;
    if (!profile) return;
    this.navbarConfig.profileCard.profilePicUrl =
      (profile['photoURL'] as string) || undefined;
  }
}
