import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationMenuItem,
  NavigationMenuItemConfig,
} from './navigation-menu.model';
import { IconComponent } from '../../widgets/icon/icon.component';
import { ContentComponent } from '../../widgets/content/content.component';
import { ContentFontSize } from '../../widgets/content/content.model';
import { IconSize } from '../../widgets/icon/icon.model';
import { RouteRelationshipType } from '../../services/navigation/navigation.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'sff-navigation-menu',
  standalone: true,
  imports: [CommonModule, IconComponent, ContentComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent implements OnInit {
  @Input() menu: NavigationMenuItem[] | undefined;
  @Input() iconsOnly = false;
  @Output() menuExpanded: EventEmitter<void> = new EventEmitter();

  config: NavigationMenuItemConfig[] = [];
  currentSelection = '';

  constructor(private nav: NavigationService) {}

  ngOnInit() {
    this.setConfigs();
  }

  private setConfigs() {
    if (!this.menu || !this.config) return;
    this.menu.forEach((item: NavigationMenuItem) => {
      this.config.push({
        icon: {
          size: IconSize.Small,
          name: item.icon,
        },
        navlink: {
          relationship: RouteRelationshipType.Absolute,
          route: item.route,
          content: {
            size: ContentFontSize.Medium,
            content: [item.description],
          },
        },
        showChildren: false,
        children: item.children ? this.setChildren(item) : [],
      });
    });
  }

  private setChildren(item: NavigationMenuItem): NavigationMenuItemConfig[] {
    if (!item.children) return [];
    const childrenConfig: NavigationMenuItemConfig[] = [];
    item.children.forEach((item: NavigationMenuItem) => {
      childrenConfig.push({
        icon: {
          size: IconSize.Small,
          name: item.icon,
        },
        navlink: {
          relationship: RouteRelationshipType.Absolute,
          route: item.route,
          content: {
            size: ContentFontSize.Medium,
            content: [item.description],
          },
        },
        showChildren: false,
        children: [],
      });
    });

    return childrenConfig;
  }

  onParentItemClicked(item: NavigationMenuItemConfig) {
    this.currentSelection = item.navlink.route;
    this.nav.navTo({
      relationship: RouteRelationshipType.Absolute,
      route: item.navlink.route,
    });

    const showChildren = item.showChildren;
    this.closeAllParentItems();
    item.showChildren = !showChildren;

    this.menuExpanded.next();
  }

  onChildItemClicked(item: NavigationMenuItemConfig) {
    this.currentSelection = item.navlink.route;
    this.nav.navTo({
      relationship: RouteRelationshipType.Absolute,
      route: item.navlink.route,
    });
  }

  private closeAllParentItems() {
    this.config.forEach((item) => {
      item.showChildren = false;
    });
  }
}
