import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationMenuConfig,
  NavigationMenuItemConfig,
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
  @Input() config: NavigationMenuConfig | undefined;
  @Output() menuExpanded: EventEmitter<void> = new EventEmitter();
  @Output() menuItemClicked: EventEmitter<NavigationMenuItem> = new EventEmitter();

  menuItems: NavigationMenuItem[] = [];
  currentSelection = '';

  constructor(private nav: NavigationService) {}

  ngOnInit() {
    this.setMenuItems();
  }

  private setMenuItems() {
    if (!this.config) return;
    this.config.menuItems.forEach((itemConfig: NavigationMenuItemConfig) => {
      this.menuItems.push({
        icon: {
          size: IconSize.Small,
          name: itemConfig.icon,
        },
        navlink: {
          relationship: RouteRelationshipType.Absolute,
          route: itemConfig.route,
          content: {
            size: ContentFontSize.Medium,
            content: [itemConfig.description],
          },
        },
        showChildren: false,
        children: itemConfig.children
          ? this.setChildrenFromItemConfig(itemConfig)
          : [],
      });
    });
  }

  private setChildrenFromItemConfig(
    itemConfig: NavigationMenuItemConfig
  ): NavigationMenuItem[] {
    if (!itemConfig.children) return [];
    const childrenMenuItems: NavigationMenuItem[] = [];
    itemConfig.children.forEach((childItemConfig: NavigationMenuItemConfig) => {
      childrenMenuItems.push({
        icon: {
          size: IconSize.Small,
          name: childItemConfig.icon,
        },
        navlink: {
          relationship: RouteRelationshipType.Absolute,
          route: childItemConfig.route,
          content: {
            size: ContentFontSize.Medium,
            content: [childItemConfig.description],
          },
        },
        showChildren: false,
        children: [],
      });
    });

    return childrenMenuItems;
  }

  onParentItemClicked(item: NavigationMenuItem) {
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

  onChildItemClicked(item: NavigationMenuItem) {
    this.currentSelection = item.navlink.route;
    this.nav.navTo({
      relationship: RouteRelationshipType.Absolute,
      route: item.navlink.route,
    });
  }

  onItemClicked(menuItem: NavigationMenuItem) {
    this.menuItemClicked.emit(menuItem)
  }

  private closeAllParentItems() {
    this.menuItems.forEach((item) => {
      item.showChildren = false;
    });
  }
}
