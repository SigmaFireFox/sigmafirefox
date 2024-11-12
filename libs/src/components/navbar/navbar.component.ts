import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarConfig } from './navbar.model';
import { NavlinkComponent } from '../../widgets/navlink/navlink.component';
import { LogoComponent } from '../logo/logo.component';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
@Component({
  selector: 'sff-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NavlinkComponent,
    LogoComponent,
    ProfileCardComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() config: NavbarConfig | undefined;
  @Output() navlinkClicked: EventEmitter<string> = new EventEmitter();

  onNavbarClicked(navlinkName: string) {
    this.navlinkClicked.emit(navlinkName);
  }
}
