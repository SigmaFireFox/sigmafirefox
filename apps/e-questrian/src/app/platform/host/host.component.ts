import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@sigmafirefox/components';
import { modulesMenu, navbarConfig, userMenu } from './host.config';
import { AuthenticationService } from '@sigmafirefox/services';
import { UserProfile } from 'firebase/auth';
import { SideNavComponent, SideNavConfig } from '@sigmafirefox/compositions';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [
    CommonModule,
    SideNavComponent,
    NavbarComponent
  ],
  templateUrl: './host.component.html',
})
export class HostComponent implements OnInit {
  navbarConfig = navbarConfig;
  sideNavConfig: SideNavConfig = {
    modulesMenu: modulesMenu,
    userMenu: userMenu
  }

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    if (!this.navbarConfig.profileCard) return;
    const profile = this.auth.userProfile as UserProfile;
    if (!profile) return;
    this.navbarConfig.profileCard.profilePicUrl =
      (profile['photoURL'] as string) || undefined;
  }
}
