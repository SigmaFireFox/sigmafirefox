import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from '../../components/navigation-menu/navigation-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { SideNavConfig } from './side-nav.model';
import { RouterModule } from '@angular/router';
import {
  NavigationMenuConfig,
  NavigationMenuItem,
} from '../../components/navigation-menu/navigation-menu.model';
import { NavigationService } from '../../services/navigation/navigation.service';
import { RouteRelationshipType } from '../../services/navigation/navigation.model';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'sff-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIcon,
    NavigationMenuComponent,
  ],
  providers: [SideNavService],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnInit {
  @Input() config: SideNavConfig | undefined;

  drawerOpen = true;
  modulesMenuOpenConfig: NavigationMenuConfig | undefined;
  modulesMenuClosedConfig: NavigationMenuConfig | undefined;
  userMenuOpenConfig: NavigationMenuConfig | undefined;
  userMenuClosedConfig: NavigationMenuConfig | undefined;

  constructor(
    private sideNavService: SideNavService,
    private nav: NavigationService
  ) {}

  ngOnInit() {
    this.setNavigationMenuConfigs();
  }

  toggleDraw() {
    this.drawerOpen = !this.drawerOpen;
    if (!this.drawerOpen) this.sideNavService.currentExtendedGroupParent = ''
  }

  onMenuItemClicked(menuItem: NavigationMenuItem) {
    if (menuItem.children.length > 0) {
      this.drawerOpen = true;
      this.sideNavService.onMenuGroupParentClicked(menuItem.navlink.route)
    }
    else
      this.nav.navTo({
        relationship: RouteRelationshipType.Absolute,
        route: menuItem.navlink.route,
      });
  }

  private setNavigationMenuConfigs() {
    if (!this.config) return;
    this.modulesMenuOpenConfig = {
      isIconsOnly: false,
      menuItems: this.config.modulesMenuConfig,
    };
    this.modulesMenuClosedConfig = {
      isIconsOnly: true,
      menuItems: this.config.modulesMenuConfig,
    };
    this.userMenuOpenConfig = {
      isIconsOnly: false,
      menuItems: this.config.userMenuConfig,
    };
    this.userMenuClosedConfig = {
      isIconsOnly: true,
      menuItems: this.config.userMenuConfig,
    };
  }
}
