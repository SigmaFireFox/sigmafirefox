import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationMenu,
  NavigationMenuConfig,
  NavigationMenuConfigItem,
  NavigationMenuItem,
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
  @Input() menu: NavigationMenu | undefined;

  config: NavigationMenuConfig = { items: [] };
  currentSelection = '';

  constructor(private nav: NavigationService) {}

  ngOnInit() {
    this.setConfigs();
  }

  private setConfigs() {
    if (!this.menu || !this.config) return;
    this.menu.items.forEach((item: NavigationMenuItem) => {
      this.config.items.push({
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

  private setChildren(item: NavigationMenuItem): NavigationMenuConfigItem[] {
    if (!item.children) return [];
    const childrenConfig: NavigationMenuConfigItem[] = [];
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

  onParentItemClicked(item: NavigationMenuConfigItem) {
    this.currentSelection = item.navlink.route;
    this.nav.navTo({
      relationship: RouteRelationshipType.Absolute,
      route: item.navlink.route,
    });
    this.closeAllParentItems();
    item.showChildren = true;
  }

  onChildItemClicked(item: NavigationMenuConfigItem) {
    console.log(item)
    this.currentSelection = item.navlink.route;
    this.nav.navTo({
      relationship: RouteRelationshipType.Absolute,
      route: item.navlink.route,
    });
  }

  private closeAllParentItems() {
    this.config.items.forEach((item) => {
      item.showChildren = false;
    });
  }
}
