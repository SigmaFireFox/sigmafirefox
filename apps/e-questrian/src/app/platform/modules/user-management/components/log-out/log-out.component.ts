import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthenticationService,
  NavigationService,
  RouteRelationshipType,
} from '@sigmafirefox/services';

@Component({
  selector: 'app-log-out',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log-out.component.html',
})
export class LogOutComponent {
  constructor(
    private auth: AuthenticationService,
    private nav: NavigationService
  ) {
    this.auth
      .signOut()
      .then(() =>
        this.nav.navTo({
          relationship: RouteRelationshipType.Parent,
          route: '',
        })
      );
  }
}
